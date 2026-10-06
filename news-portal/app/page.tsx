"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  state?: string;
  time: string;
  author?: string;
  image_url?: string;
  views?: string;
  read_time?: string;
}

export default function Home() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchNews = async (category: string = "All") => {
    setLoading(true);
    try {
      const baseUrl = "http://127.0.0.1:8000/api/articles";
      const url =
        category === "All"
          ? baseUrl
          : `${baseUrl}?category=${encodeURIComponent(category)}`;

      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setNews(data);
      } else {
        setNews([]);
      }
    } catch (err) {
      console.error("Failed to fetch articles:", err);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  // Filter articles based on search input
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const heroArticle = filteredNews[0];
  const secondaryArticles = filteredNews.slice(1);

  // Grouping for thematic sections
  const investigations = news.filter((a) => a.category === "Investigations");
  const groundReports = news.filter((a) => a.category === "Ground");
  const explainers = news.filter((a) => a.category === "Explainers");

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111111] font-serif">
      {/* ────────────────────────────────────────────── */}
      {/* HEADER & BRANDING */}
      {/* ────────────────────────────────────────────── */}
      <header className="border-b border-gray-200 py-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase font-sans mb-2">
          BEYOND LAYERS
        </h1>
        <p className="text-sm md:text-base text-gray-500 italic tracking-wide mb-6 font-serif">
          Every Story Has Layers.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative font-sans">
          <input
            type="text"
            placeholder="Search stories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-full py-2.5 px-5 pl-11 text-sm focus:outline-none focus:border-black transition"
          />
          <span className="absolute left-4 top-3 text-gray-400 text-sm">🔍</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {loading ? (
          <div className="text-center py-20 text-gray-400 font-sans text-sm">
            Loading Wire Stream...
          </div>
        ) : (
          <>
            {/* ────────────────────────────────────────────── */}
            {/* TODAY'S LAYER (HERO STORY) */}
            {/* ────────────────────────────────────────────── */}
            {/* ────────────────────────────────────────────── */}
            {/* TODAY'S LAYER (HERO SECTION - CALM & PREMIUM) */}
            {/* ────────────────────────────────────────────── */}
            <section className="mb-16 border-b border-gray-200 pb-12 pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest font-sans font-bold text-red-700 bg-red-50 px-3 py-1 border border-red-200 rounded-sm">
                  TODAY'S LAYER
                </span>
                <span className="text-xs text-gray-400 font-sans italic">
                  The one story that matters most
                </span>
              </div>

              {heroArticle ? (
                <div className="space-y-6">
                  {/* 16:9 Cinematic Image */}
                  {heroArticle.image_url && (
                    <div className="relative aspect-video w-full overflow-hidden rounded bg-gray-100 border border-gray-200">
                      <img
                        src={
                          heroArticle.image_url.startsWith("http")
                            ? heroArticle.image_url
                            : `http://127.0.0.1:8000${heroArticle.image_url}`
                        }
                        alt={heroArticle.title}
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Headline & One-sentence summary */}
                  <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 hover:text-red-700 transition font-serif">
                      <Link href={`/news/${heroArticle.id}`}>
                        {heroArticle.title}
                      </Link>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 italic font-serif">
                      {heroArticle.excerpt}
                    </p>

                    {/* Minimal Metadata & Premium Read Link */}
                    <div className="flex items-center justify-between border-t border-b border-gray-100 py-4 font-sans text-xs text-gray-500">
                      <div className="flex items-center gap-6">
                        <span>Reporter: <strong className="text-gray-900">{heroArticle.author || "Editorial Desk"}</strong></span>
                        <span>⏱ {heroArticle.read_time || "7 min read"}</span>
                      </div>

                      <Link
                        href={`/news/${heroArticle.id}`}
                        className="font-bold text-black hover:text-red-700 transition flex items-center gap-1 uppercase tracking-wider text-xs"
                      >
                        Read Story →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
              
                <p className="text-center py-10 text-gray-400 font-sans">
                  No published stories available.
                </p>
              )}
            
            <section className="mb-16 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-sans font-bold text-gray-400 mb-4 text-center">
                LAYER MAP
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 font-sans text-xs text-center">
                {[
                  { icon: "📰", label: "What Happened", cat: "All" },
                  { icon: "📖", label: "Context", cat: "Politics" },
                  { icon: "📊", label: "Data", cat: "Economy" },
                  { icon: "🎤", label: "Ground Voices", cat: "Ground" },
                  { icon: "📜", label: "History", cat: "Explainers" },
                  { icon: "🔮", label: "What's Next", cat: "Investigations" },
                ].map((layer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(layer.cat)}
                    className={`p-3 rounded border transition flex flex-col items-center gap-1.5 hover:border-black ${
                      selectedCategory === layer.cat
                        ? "bg-black text-white border-black font-bold"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-lg">{layer.icon}</span>
                    <span>{layer.label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* ────────────────────────────────────────────── */}
            {/* RELATED STORIES (GRID) */}
            {/* ────────────────────────────────────────────── */}
            {secondaryArticles.length > 0 && (
              <section className="mb-16">
                <h3 className="text-xs uppercase tracking-widest font-sans font-bold text-gray-900 border-b-2 border-black pb-2 mb-6">
                  Related Stories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {secondaryArticles.map((article) => (
                    <article key={article.id} className="group flex flex-col justify-between">
                      <div>
                        {article.image_url && (
                          <div className="aspect-video w-full overflow-hidden rounded bg-gray-100 mb-3 border border-gray-200">
                            <img
                              src={
                                article.image_url.startsWith("http")
                                  ? article.image_url
                                  : `http://127.0.0.1:8000${article.image_url}`
                              }
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                          </div>
                        )}
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-red-700 mb-1 block">
                          {article.category}
                        </span>
                        <h4 className="text-xl font-bold leading-snug mb-2 group-hover:text-red-700 transition">
                          <Link href={`/news/${article.id}`}>{article.title}</Link>
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4 font-serif">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="font-sans text-[11px] text-gray-400 flex items-center justify-between border-t border-gray-100 pt-3">
                        <span>⏱ {article.read_time || "4 min"}</span>
                        <Link
                          href={`/news/${article.id}`}
                          className="font-bold text-black hover:underline"
                        >
                          Read →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* ────────────────────────────────────────────── */}
            {/* CATEGORY SECTIONS (INVESTIGATIONS / GROUND / EXPLAINERS) */}
            {/* ────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-t border-gray-200 pt-10">
              {/* Investigations */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-black border-b border-black pb-2 mb-4">
                  🔍 Investigations
                </h4>
                {investigations.length > 0 ? (
                  investigations.map((item) => (
                    <div key={item.id} className="mb-4">
                      <Link
                        href={`/news/${item.id}`}
                        className="text-base font-bold hover:text-red-700 block leading-tight mb-1"
                      >
                        {item.title}
                      </Link>
                      <span className="text-[11px] font-sans text-gray-400">
                        ⏱ {item.read_time || "6 min read"}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs font-sans text-gray-400 italic">No investigations filed yet.</p>
                )}
              </div>

              {/* Ground Reports */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-black border-b border-black pb-2 mb-4">
                  🎤 Ground Reports
                </h4>
                {groundReports.length > 0 ? (
                  groundReports.map((item) => (
                    <div key={item.id} className="mb-4">
                      <Link
                        href={`/news/${item.id}`}
                        className="text-base font-bold hover:text-red-700 block leading-tight mb-1"
                      >
                        {item.title}
                      </Link>
                      <span className="text-[11px] font-sans text-gray-400">
                        ⏱ {item.read_time || "5 min read"}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs font-sans text-gray-400 italic">No ground reports available.</p>
                )}
              </div>

              {/* Explainers */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-black border-b border-black pb-2 mb-4">
                  💡 Explainers
                </h4>
                {explainers.length > 0 ? (
                  explainers.map((item) => (
                    <div key={item.id} className="mb-4">
                      <Link
                        href={`/news/${item.id}`}
                        className="text-base font-bold hover:text-red-700 block leading-tight mb-1"
                      >
                        {item.title}
                      </Link>
                      <span className="text-[11px] font-sans text-gray-400">
                        ⏱ {item.read_time || "3 min read"}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs font-sans text-gray-400 italic">No explainers available.</p>
                )}
              </div>
            </div>

            {/* ────────────────────────────────────────────── */}
            {/* NEWSLETTER SECTION */}
            {/* ────────────────────────────────────────────── */}
            <section className="bg-black text-white rounded-lg p-8 md:p-12 text-center font-sans">
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">
                Unfold The Full Story
              </h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
                Get our daily editorial briefing directly in your inbox. No noise, just deep context.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to Beyond Layers!");
                }}
                className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="bg-gray-900 border border-gray-700 text-white px-4 py-2.5 rounded text-sm focus:outline-none focus:border-white flex-1"
                />
                <button
                  type="submit"
                  className="bg-white text-black font-bold px-6 py-2.5 rounded text-sm hover:bg-gray-200 transition uppercase tracking-wider"
                >
                  Subscribe
                </button>
              </form>
            </section>
          </section>
    </>
  )}
</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 py-8 text-center text-xs font-sans text-gray-400">
        © 2026 Beyond Layers Network. All Rights Reserved.
      </footer>
    </div>
  );
}