from sqlalchemy import Column, Integer, String, Text
from database import Base

class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    excerpt = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    category = Column(String, nullable=False)
    state = Column(String, nullable=True)
    time = Column(String, nullable=False)
    author = Column(String, default="Editorial Desk")
    image_url = Column(String, nullable=True)  # <-- Added Cover Image Column