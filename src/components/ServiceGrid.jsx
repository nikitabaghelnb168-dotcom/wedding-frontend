import React from 'react';
import { PlaneTakeoff, UtensilsCrossed, HeartPulse, Sparkles } from 'lucide-react';

export default function ServiceGrid() {
  // SEO & Semantic Data Schema for Luxury Hospitality Offerings
  const luxuryServices = [
    {
      label: "CONCIERGE ARRIVAL",
      title: "Private Airport Transfers",
      desc: "Chauffeur-driven luxury fleets seamlessly picking up your elite guests from Dehradun airport straight to the mountains.",
      icon: PlaneTakeoff
    },
    {
      label: "GOURMET CATERING",
      title: "Curated Regional Cuisine",
      desc: "Authentic, certified pure vegetarian multi-cuisine menus curated by elite chefs to honor diverse regional palates.",
      icon: UtensilsCrossed
    },
    {
      label: "ELITE WELLNESS",
      title: "Comfort & Wellness Assistance",
      desc: "Comprehensive high-altitude health logistics, constant oxygen tracking, and heavily insulated luxury room heating grids.",
      icon: HeartPulse
    },
    {
      label: "SACRED COORDINATION",
      title: "Complete Temple Coordination",
      desc: "Localized VIP access liaisons managing mandatory priest schedules, token protocols, and traditional Vedic samagri setups.",
      icon: Sparkles
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative overflow-hidden select-none scroll-mt-2">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Upper Heading Context - Clean SEO Anchor Point */}
        <span 
          className="tracking-[0.25em] font-serif font-bold uppercase block mb-3 text-xs"
          style={{ color: '#D4AF37' }}
        >
          EXPERIENCE WITHOUT BORDERS
        </span>
        
        <h2 
          className="font-bold text-neutral-900 tracking-tight mb-4"
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: 'clamp(28px, 3.5vw, 42px)' 
          }}
        >
          Luxury Hospitality Across India
        </h2>
        
        <p className="font-serif text-sm text-neutral-600 max-w-2xl mx-auto mb-16 leading-relaxed tracking-wide">
          Bridging geographic micro-coordination gaps, high-altitude terrain logistics, and regional expectations for elite families traveling to the Garhwal Himalayas.
        </p>

        {/* 4-Column Luxury Solutions Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {luxuryServices.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <article 
                key={idx} 
                className="bg-white border-t-[3px] p-6 text-left rounded-b-2xl shadow-[0_15px_40px_-15px_rgba(31,58,46,0.06)] flex flex-col justify-between hover:shadow-[0_25px_60px_-15px_rgba(31,58,46,0.12)] hover:-translate-y-1 transition-all duration-300 group min-h-[260px]"
                style={{ borderColor: '#1F3A2E' }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-[9px] font-bold uppercase tracking-widest"
                      style={{ color: '#D4AF37' }}
                    >
                      {srv.label}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#1F3A2E] opacity-80 group-hover:text-[#D4AF37] transition-colors duration-300" />
                  </div>
                  
                  <h3 
                    className="font-bold text-neutral-900 tracking-wide leading-tight"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '18px'
                    }}
                  >
                    {srv.title}
                  </h3>
                  
                  {/* Two lines max typography distribution constraint */}
                  <p className="font-serif text-xs text-neutral-500 leading-relaxed tracking-wide line-clamp-2">
                    {srv.desc}
                  </p>
                </div>
                
                <div className="w-6 h-[1.5px] bg-[#D4AF37]/50 mt-6 transition-all duration-300 group-hover:w-12"></div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}