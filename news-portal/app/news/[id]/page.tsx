"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author?: string;
  time?: string;
  image_url?: string;
  read_time?: string;
}

export default function ArticleDetail() {
  const params = useParams();
  const id = params?.id;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    async function fetchArticle() {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/articles/${id}`);
        if (res.ok) {
          const data = await res.json();
          setArticle(data);
        }
      } catch (err) {
        console.error("Failed to fetch article:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBFBFB] flex items-center justify-center font-sans text-sm text-gray-400">
        Unfolding layers...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FBFBFB] flex flex-col items-center justify-center font-sans">
        <p className="text-gray-500 mb-4">Article not found.</p>
        <Link href="/" className="text-black font-bold underline text-sm">
          ← Return to Wire
        </Link>
      </div>
    );
  }

  const layerItems = [
    { label: "What Happened", id: "what-happened" },
    { label: "Why It Matters", id: "why-it-matters" },
    { label: "History", id: "history" },
    { label: "Evidence", id: "evidence" },
    { label: "Voices", id: "voices" },
    { label: "Impact", id: "impact" },
    { label: "What's Next", id: "whats-next" },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111111] font-serif">
      {/* Top Header */}
      <header className="border-b border-gray-200 py-6 px-4 max-w-4xl mx-auto flex items-center justify-between font-sans">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest font-bold hover:text-red-700 transition"
        >
          ← Beyond Layers
        </Link>
        <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">
          {article.category}
        </span>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Title & Metadata */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 font-serif">
          {article.title}
        </h1>

        <p className="text-lg text-gray-600 italic mb-6 font-serif">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-6 text-xs text-gray-500 font-sans border-t border-b border-gray-200 py-3 mb-8">
          <span>By <strong>{article.author || "Editorial Desk"}</strong></span>
          <span>⏱ {article.read_time || "6 min read"}</span>
        </div>

        {/* Hero Image */}
        {article.image_url && (
          <div className="mb-10 overflow-hidden rounded bg-gray-100 border border-gray-200 aspect-video">
            <img
              src={
                article.image_url.startsWith("http")
                  ? article.image_url
                  : `http://127.0.0.1:8000${article.image_url}`
              }
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* SIGNATURE LAYER MAP FEATURE */}
        <div className="mb-12 bg-white border border-gray-200 rounded-lg p-6 shadow-sm font-sans">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></span>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Layer Map
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {layerItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.id}`}
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 text-xs text-gray-700 hover:text-red-700 transition font-medium border border-transparent hover:border-gray-200"
              >
                <span className="text-green-600 font-bold">✓</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ARTICLE BODY WITH ANCHORED LAYER SECTIONS */}
        <article className="prose prose-lg max-w-none font-serif leading-relaxed text-gray-800 space-y-10">
          <section id="what-happened" className="scroll-mt-10">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
              ✓ What Happened
            </h3>
            <p>{article.content}</p>
          </section>

          <section id="why-it-matters" className="scroll-mt-10 border-t border-gray-100 pt-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
              ✓ Why It Matters
            </h3>
            <p>
              Understanding the core implications behind this shift reveals broader systemic changes in institutional governance and policy execution.
            </p>
          </section>

          <section id="history" className="scroll-mt-10 border-t border-gray-100 pt-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
              ✓ History
            </h3>
            <p>
              Precedents set over the past decade highlight recurring structural patterns that led directly to today's developments.
            </p>
          </section>

          <section id="evidence" className="scroll-mt-10 border-t border-gray-100 pt-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
              ✓ Evidence
            </h3>
            <p>
              Data records, official statements, and verifiable public documentations substantiate the core narrative points.
            </p>
          </section>

          <section id="voices" className="scroll-mt-10 border-t border-gray-100 pt-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
              ✓ Voices
            </h3>
            <blockquote className="border-l-2 border-black pl-4 italic text-gray-700 my-4 font-serif">
              "Key stakeholders and ground personnel emphasize that long-term outcome measurement is critical."
            </blockquote>
          </section>

          <section id="impact" className="scroll-mt-10 border-t border-gray-100 pt-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
              ✓ Impact
            </h3>
            <p>
              Immediate operational effects are felt across key administrative sectors, influencing upcoming strategy cycles.
            </p>
          </section>

          <section id="whats-next" className="scroll-mt-10 border-t border-gray-100 pt-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-red-700 mb-2">
              ✓ What's Next
            </h3>
            <p>
              Key decision dates scheduled for next month will determine whether structural revisions are permanently adopted.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}