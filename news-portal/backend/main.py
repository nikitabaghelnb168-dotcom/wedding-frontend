import os
import uuid
import shutil
from typing import List, Optional

from fastapi import FastAPI, Depends, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from sqlalchemy.orm import Session
import yfinance as yf

import models
import database
from database import engine, get_db

# 1. Automatically create uploads directory if it doesn't exist
os.makedirs("uploads", exist_ok=True)

# Clean Table Creation using database.Base
database.Base.metadata.create_all(bind=engine)

app = FastAPI(title="News Portal API", version="1.0")

# 2. Mount Uploads Directory to serve images at http://localhost:8000/uploads/...
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Schemas
class ArticleBase(BaseModel):
    title: str
    excerpt: str
    content: str
    category: str
    state: Optional[str] = None
    time: str
    author: Optional[str] = "Editorial Desk"
    image_url: Optional[str] = None

class ArticleCreate(ArticleBase):
    pass

class ArticleResponse(ArticleBase):
    id: int

    class Config:
        from_attributes = True

# -------------------------------------------------------------------
# 📊 Real-time Stock Markets API Endpoint (yfinance)
# -------------------------------------------------------------------
MARKET_TICKERS = {
    "NIFTY 50": "^NSEI",
    "SENSEX": "^BSESN",
    "S&P 500": "^GSPC",
    "NASDAQ": "^IXIC",
    "BRENT CRUDE": "BZ=F",
    "GOLD": "GC=F",
    "USD / INR": "INR=X",
}

@app.get("/api/markets")
def get_live_markets():
    market_data = []
    
    for display_name, symbol in MARKET_TICKERS.items():
        try:
            ticker = yf.Ticker(symbol)
            fast_info = ticker.fast_info
            
            current_price = fast_info.last_price
            prev_close = fast_info.previous_close
            
            if current_price and prev_close:
                change_pct = ((current_price - prev_close) / prev_close) * 100
                is_positive = change_pct >= 0
                
                market_data.append({
                    "symbol": display_name,
                    "value": f"{current_price:,.2f}",
                    "change": f"{'+' if is_positive else ''}{change_pct:.2f}%",
                    "positive": is_positive
                })
        except Exception as e:
            market_data.append({
                "symbol": display_name,
                "value": "Live",
                "change": "+0.00%",
                "positive": True
            })

    return market_data

# -------------------------------------------------------------------
# 📰 News Articles CRUD Endpoints
# -------------------------------------------------------------------
@app.get("/api/articles", response_model=List[ArticleResponse])
def get_articles(category: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(models.Article)
    if category and category != "All":
        query = query.filter(models.Article.category == category)
    return query.order_by(models.Article.id.desc()).all()

@app.get("/api/articles/{article_id}", response_model=ArticleResponse)
def get_article(article_id: int, db: Session = Depends(get_db)):
    article = db.query(models.Article).filter(models.Article.id == article_id).first()
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

@app.post("/api/articles", response_model=ArticleResponse)
def create_article(article: ArticleCreate, db: Session = Depends(get_db)):
    db_article = models.Article(**article.model_dump())
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article

@app.post("/api/upload")
async def upload_image(file: UploadFile = File(...)):
    file_extension = file.filename.split(".")[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = os.path.join("uploads", unique_filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    return {"url": f"http://localhost:8000/uploads/{unique_filename}"}