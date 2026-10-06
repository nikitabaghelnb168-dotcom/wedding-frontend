import React from 'react';
import { Star, Play } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      names: "Ananya & Rohit",
      city: "Delhi",
      avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=200",
      quote: "Managing 70 guests up in Triyuginarayan winter felt terrifying. From airport collections to seamless high-altitude permits, this concierge team made it effortless. Our families experienced absolute absolute premium care and beautiful traditional pahadi hospitality.",
      delay: "delay-100"
    },
    {
      id: 2,
      names: "Vikram & Megha",
      city: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
      quote: "A pure Vedic wedding beside the ancient Akhand Dhuni with zero logistical stress. The cinematography team captured everything beautifully and the multi-cuisine catering was highly acclaimed. Complete financial clarity without any hidden mountain costs.",
      delay: "delay-200"
    },
    {
      id: 3,
      names: "Rahul & Sneha",
      city: "Bengaluru",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      quote: "Comforting our South Indian elders at high altitudes was our major worry. The team orchestrated highly insulated premium stays and customized dietary structures flawlessly. The actual temple mandap coordination was extremely smooth and respectful.",
      delay: "delay-300"
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="w-full bg-[#FCFAF7] py-24 px-6 md:px-12 border-t border-neutral-200/50 relative overflow-hidden text-left select-none"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* 19. Clear Editorial Header Typographic Distribution */}
        <div className="text-center space-y-3">
          <span 
            className="text-[11px] tracking-[0.25em] font-serif font-bold uppercase block"
            style={{ color: '#D4AF37' }}
          >
            REAL HIMALAYAN DESTINATION JOURNEYS
          </span>
          <h2 
            className="font-bold tracking-tight text-neutral-950 capitalize leading-tight"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: 'clamp(26px, 3.5vw, 42px)' 
            }}
          >
            Love Stories We’ve Had the Honor to Celebrate
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D4AF37]/50 mx-auto mt-4" />
        </div>

        {/* Dynamic 3-Column Luxury Testimonials Canvas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <article 
              key={review.id} 
              className={`bg-white rounded-[24px] border border-neutral-200/60 p-6 shadow-[0_15px_45px_rgba(31,58,46,0.03)] 
                animate-fade-in-up ${review.delay}
                hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(31,58,46,0.07)]
                transition-all duration-500 ease-out 
                flex flex-col justify-between space-y-6 relative`}
            >
              
              <div className="space-y-4">
                {/* 5 Gold Star Ratings Array */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* ~40-word crisp emotional review block */}
                <p className="font-serif text-sm text-neutral-600 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Signature Profile Panel & Action Layout Wrapper */}
              <div className="border-t border-neutral-100 pt-5 space-y-4">
                
                {/* Couple Identity Profile Grid */}
                <div className="flex items-center gap-3.5">
                  <img 
                    src={review.avatar} 
                    alt={`Bespoke celebration portrait of ${review.names}`}
                    className="w-11 h-11 rounded-full object-cover border border-neutral-200 shadow-inner filter brightness-95" 
                    loading="lazy"
                  />
                  <div>
                    <h4 
                      className="font-bold text-neutral-900 tracking-wide"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: '15px' }}
                    >
                      {review.names}
                    </h4>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mt-0.5">
                      {review.city} Portfolio
                    </span>
                  </div>
                </div>

                {/* 24. Cinema Link Alignment Matrix Container */}
                <div className="pt-1 flex items-center">
                  <a 
                    href="#watch-film" 
                    className="inline-flex items-center gap-2 text-[10px] font-serif font-bold uppercase tracking-widest transition-colors duration-300 hover:text-[#D4AF37]"
                    style={{ color: '#1F3A2E' }}
                  >
                    <span className="w-6 h-6 rounded-full bg-[#1F3A2E]/5 flex items-center justify-center transition-transform group-hover:scale-105">
                      <Play className="w-2.5 h-2.5 fill-current text-[#1F3A2E]" />
                    </span>
                    Watch Their Wedding Film
                  </a>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}