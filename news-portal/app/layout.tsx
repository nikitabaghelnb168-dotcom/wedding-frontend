import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Live News Portal | Latest Breaking News & Updates",
    template: "%s | News Portal",
  },
  description: "Stay updated with real-time news across India, Business, Politics, and Technology.",
  keywords: ["Breaking News", "India News", "Politics", "Tech Updates", "Business News"],
  authors: [{ name: "Editorial Desk" }],
  openGraph: {
    title: "Live News Portal",
    description: "Real-time news feed and breaking news updates.",
    type: "website",
    locale: "en_IN",
    siteName: "News Portal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}