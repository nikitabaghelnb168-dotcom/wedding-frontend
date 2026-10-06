import { MetadataRoute } from 'next'

interface Article {
  id: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'http://localhost:3000';

  // Fetch articles from FastAPI backend
  let articles: Article[] = [];
  try {
    const res = await fetch('http://localhost:8000/api/news', { cache: 'no-store' });
    if (res.ok) {
      articles = await res.json();
    }
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }

  // Generate article URLs
  const newsUrls = articles.map((article) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(),
    changeFrequency: 'always' as const,
    priority: 0.9,
  }));

  // Static Root & Category routes
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1.0,
    },
    ...newsUrls,
  ];
}