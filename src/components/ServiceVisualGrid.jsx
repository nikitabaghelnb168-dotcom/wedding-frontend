import React from 'react';

// Optimized SEO Data Schema Matrix - Strictly 6 Premium Experiences
const VISUAL_SERVICES = [
  { id: 'v1', title: 'Venue & Destination', img: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=600' },
  { id: 'v2', title: 'Bridal Styling', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600' },
  { id: 'v3', title: 'Photography & Films', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600' },
  { id: 'v4', title: 'Entertainment', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600' },
  { id: 'v5', title: 'Floral & Decor', img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600' },
  { id: 'v6', title: 'Guest Hospitality', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600' }
];

export default function ServiceVisualGrid({ onSelectService }) {
  return (
    <section id="magic-services" className="py-24 bg-[#FAF8F5] scroll-mt-20 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Upper Editorial Label */}
        <span 
          className="text-[11px] tracking-[0.25em] font-serif font-bold uppercase block mb-3"
          style={{ color: '#D4AF37' }}
        >
          CURATED HIMALAYAN MOMENTS
        </span>
        
        <h2 
          className="font-bold text-neutral-900 tracking-tight mb-16"
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: 'clamp(28px, 3.5vw, 42px)' 
          }}
        >
          Signature Wedding Experiences
        </h2>

        {/* 6-Column Cinematic Premium Grid Frame */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VISUAL_SERVICES.map((srv) => (
            <article 
              key={srv.id}
              onClick={() => onSelectService && onSelectService(srv.id)}
              className="relative aspect-[16/11] group overflow-hidden rounded-[24px] cursor-pointer bg-neutral-950 shadow-lg transition-all duration-500 border-2 border-transparent hover:border-[#D4AF37]"
            >
              {/* Cinematic Large Image with Smooth Zoom Matrix */}
              <img 
                src={srv.img} 
                alt={`${srv.title} setup for curated luxury destination weddings`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out transform scale-100 group-hover:scale-105 opacity-60 group-hover:opacity-50" 
                loading="lazy"
              />
              
              {/* Sophisticated Dark Overlay Layer */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500 z-10" />

              {/* Centered Luxury Text Typography */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20">
                <h3 
                  className="text-white uppercase tracking-[0.16em] text-center leading-tight text-base sm:text-lg font-semibold drop-shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {srv.title}
                </h3>
                {/* Accent Gold Pointer Line on Hover */}
                <div className="w-0 h-[1.5px] bg-[#D4AF37] mt-3 transition-all duration-500 group-hover:w-12"></div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}