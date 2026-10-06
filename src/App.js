import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceDetailPage from './components/ServiceDetailPage';

// Homepage & Main Page Components
import HeroSection from './components/HeroSection';
import CultureHighlights from './components/CultureHighlights';
import MythicFeature from './components/MythicFeature';
import ServiceGrid from './components/ServiceGrid';
import Packages from './components/Packages';
import WeddingGallery from './components/WeddingGallery';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import WeddingGuide from './components/WeddingGuide';
import FAQ from './components/FAQ';
import BookingEngine from './components/BookingEngine';

export default function App() {
  return (
    <Router>
      <div className="App bg-[#FAF8F5] min-h-screen flex flex-col justify-between">
        {/* Persistent Top Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* 1. HOMEPAGE ROUTE */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <CultureHighlights />
                  <MythicFeature />
                  <ServiceGrid />
                  <Packages />
                  <WeddingGallery />
                  <WhyUs />
                  <Testimonials />
                  <FAQ />
                  {/* Contact Anchor Section */}
                  <div id="contact">
                    <BookingEngine />
                  </div>
                </>
              }
            />

            {/* 2. DEDICATED BLOG ROUTE */}
            <Route path="/blog" element={<BlogSection />} />

            {/* 3. WEDDING PLANNING GUIDE ROUTE */}
            <Route path="/how-to-plan-wedding" element={<WeddingGuide />} />

            {/* 4. DYNAMIC SERVICE LANDING PAGES */}
            <Route path="/:serviceSlug" element={<ServiceDetailPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}