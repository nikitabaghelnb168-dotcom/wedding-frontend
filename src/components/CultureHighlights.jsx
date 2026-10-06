import React from 'react';
import { Palette, Truck, Sparkles, Hotel, Music, Drum, Camera, Utensils } from 'lucide-react';

const ALL_SERVICES = [
  { title: "Luxury Decor", subtitle: "Marigold & Ethnic Mandaps", icon: <Palette className="w-4 h-4" /> },
  { title: "End-to-End Logistics", subtitle: "Metro to Valley Transit", icon: <Truck className="w-4 h-4" /> },
  { title: "Pahadi Entertainment", subtitle: "Mashakbeen & Folk Troupes", icon: <Music className="w-4 h-4" /> },
  { title: "Hospitality Management", subtitle: "Guptkashi Luxury Stays", icon: <Hotel className="w-4 h-4" /> },
  { title: "Dhol Damau Beats", subtitle: "Sacred Festive Waves", icon: <Drum className="w-4 h-4" /> },
  { title: "Vedic Catering", subtitle: "Strictly Veg Satvik Feast", icon: <Utensils className="w-4 h-4" /> },
  { title: "Cinema Photography", subtitle: "High-Altitude Media Crew", icon: <Camera className="w-4 h-4" /> },
  { title: "Mangal Geet", subtitle: "Divine Hymns & Rituals", icon: <Sparkles className="w-4 h-4" /> }
];

export default function CultureHighlights() {
  const duplicatedServices = [...ALL_SERVICES, ...ALL_SERVICES];

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 -mt-10 sm:-mt-12 md:-mt-16">
      <div className="bg-white border border-gray-100 shadow-xl rounded-2xl py-6 text-center overflow-hidden">
        
        <h3 className="font-serif text-xs md:text-sm font-bold tracking-[0.2em] text-[#2C2A29] mb-3 uppercase px-4">
          BLESSED UNIONS: <span className="text-[#B83D2D]">YOU DREAM, WE ARRANGE!</span>
        </h3>
        
        <div className="w-8 h-[1.5px] bg-[#E09526] mx-auto mb-6"></div>

        {/* Pure CSS Track Container Core View */}
        <div className="relative w-full overflow-hidden mask-gradient py-2">
          <div 
            className="flex gap-6 shrink-0"
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee-infinite 25s linear infinite'
            }}
          >
            {duplicatedServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-[#FAF8F5] border border-gray-100/80 p-3.5 rounded-xl min-w-[240px] text-left shadow-sm"
              >
                <div className="w-9 h-9 rounded-full bg-white text-[#B83D2D] border border-gray-100 flex items-center justify-center shadow-inner shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-serif text-[11px] font-bold tracking-wide text-[#2C2A29] uppercase leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-[9px] text-gray-400 font-medium tracking-normal mt-0.5 leading-tight">
                    {service.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}