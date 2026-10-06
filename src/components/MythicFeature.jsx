import React from 'react';

export default function MythicFeature() {
  // Pure Editorial Content Blocks
  const editorialBlocks = [
    {
      title: "Eternal Sacred Fire",
      desc: "Witness your vows beside the Akhand Dhuni that has burned continuously for centuries."
    },
    {
      title: "Breathtaking Himalayan Backdrops",
      desc: "Snow-capped peaks and peaceful valleys create a cinematic setting for your wedding memories."
    },
    {
      title: "Deep Spiritual Calmness",
      desc: "A serene atmosphere where families can celebrate without the noise and distractions of the city."
    }
  ];

  return (
    <section 
      id="mythic-heritage" 
      className="w-full bg-white py-24 px-6 md:px-12 border-t border-black/5 relative overflow-hidden text-left select-none"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* 🏔️ LEFT COLUMN: FULL MOUNTAIN + TEMPLE IMAGE (Clean 16:10 Ratio, No Badges/Labels) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1 w-full">
          <div className="relative w-full overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(31,58,46,0.1)] border border-neutral-100/60 aspect-[16/10]">
            <img 
              src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200" 
              alt="Sacred Triyuginarayan Temple nestled in the cinematic Himalayan peaks" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 👑 RIGHT COLUMN: EDITORIAL CONTENT GRID (Clean Typography Flow) */}
        <div className="lg:col-span-6 space-y-8 order-1 lg:order-2 w-full">
          
          <div className="space-y-4">
            {/* Small Gold Label */}
            <span 
              className="block font-serif font-bold uppercase tracking-[0.2em]"
              style={{ 
                fontSize: '14px', 
                color: '#D4AF37' 
              }}
            >
              WHY TRIYUGINARAYAN
            </span>
            
            {/* Elegant Main Heading */}
            <h2 
              className="font-bold tracking-tight text-neutral-950 leading-[1.15]"
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: 'clamp(30px, 3.5vw, 44px)' 
              }}
            >
              A Sacred Setting for an Extraordinary Wedding
            </h2>
          </div>

          {/* EDITORIAL CONTENT STRIPS (Replacing the old icon bullet system) */}
          <div className="space-y-8 pt-2">
            {editorialBlocks.map((block, idx) => (
              <div key={idx} className="border-l-2 border-[#D4AF37]/40 pl-5 space-y-1.5 transition-all duration-300 hover:border-[#D4AF37]">
                <h4 
                  className="font-bold text-neutral-900 tracking-wide"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '18px'
                  }}
                >
                  {block.title}
                </h4>
                <p className="font-serif text-sm text-neutral-600 leading-relaxed tracking-wide max-w-xl">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}