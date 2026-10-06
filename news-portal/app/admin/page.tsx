"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminPublish() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Investigations",
    author: "Editorial Desk",
    image_url: "",
    read_time: "5 min read",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Publishing article...");

    // Safe payload structure covering all standard database fields
    const payload = {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category,
      author: formData.author || "Editorial Desk",
      image_url: formData.image_url || "",
      read_time: formData.read_time || "5 min read",
      time: "Just now",
      views: "0",
      state: "Published",
    };

    try {
      const res = await fetch("http://127.0.0.1:8000/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("Article published successfully!");
        setFormData({
          title: "",
          excerpt: "",
          content: "",
          category: "Investigations",
          author: "Editorial Desk",
          image_url: "",
          read_time: "5 min read",
        });
      } else {
        const errData = await res.json().catch(() => null);
        console.error("Backend Error Response:", errData);
        setStatus(
          `Failed to publish article. Status: ${res.status}`
        );
      }
    } catch (err) {
      console.error(err);
      setStatus("Error connecting to FastAPI server.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] p-8 font-serif text-[#111111]">
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold uppercase tracking-wider font-sans">
            Editorial Desk — Publish Story
          </h1>
          <Link href="/" className="text-xs font-sans text-gray-500 hover:underline">
            ← Back to Wire
          </Link>
        </div>

        {status && (
          <div className="mb-4 p-3 bg-gray-100 text-xs font-sans text-gray-700 rounded">
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-black"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-bold text-gray-500 mb-1">
                Category
              </label>
              <select
                className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-black bg-white"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="Investigations">Investigations</option>
                <option value="Ground">Ground Reports</option>
                <option value="Explainers">Explainers</option>
                <option value="Politics">Politics</option>
                <option value="Economy">Economy</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-gray-500 mb-1">
                Author
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-black"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 mb-1">
              One-Sentence Excerpt
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-black"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 mb-1">
              Image URL (Optional)
            </label>
            <input
              type="text"
              placeholder="https://images.unsplash.com/..."
              className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-black"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 mb-1">
              Article Content (What Happened Section)
            </label>
            <textarea
              rows={6}
              required
              className="w-full border border-gray-300 rounded p-2.5 focus:outline-none focus:border-black font-serif"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-3 rounded text-xs uppercase tracking-widest hover:bg-gray-800 transition"
          >
            Publish To Beyond Layers
          </button>
        </form>
      </div>
    </div>
  );
}