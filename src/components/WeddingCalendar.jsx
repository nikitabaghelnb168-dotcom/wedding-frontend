import React, { useState } from 'react';
import { Calendar, Sun, CloudSnow, Flame, Info, CheckCircle, AlertTriangle } from 'lucide-react';

export default function WeddingCalendar() {
  // 2026 Easy-to-Understand Couple Centric Data
  const calendarData = [
    { 
      month: "January", 
      status: "Very Cold & Snowy", 
      color: "bg-blue-50 border-blue-200 text-blue-700", 
      icon: <CloudSnow className="w-5 h-5 text-blue-500" />, 
      desc: "It snows heavily during this time. The temple stays beautiful and open, but we plan all events indoors with proper luxury heating systems to keep your guests warm and cozy." 
    },
    { 
      month: "February", 
      status: "Beautiful Snow Peaks", 
      color: "bg-blue-50 border-blue-200 text-blue-700", 
      icon: <CloudSnow className="w-5 h-5 text-blue-500" />, 
      desc: "Perfect for couples who want a stunning white snowy backdrop for their photos. We arrange extra comfort, heavy blankets, and warm transport setups for elder family members." 
    },
    { 
      month: "March", 
      status: "Pleasant & Sunny", 
      color: "bg-emerald-50 border-emerald-200 text-emerald-700", 
      icon: <Sun className="w-5 h-5 text-emerald-500" />, 
      desc: "Highly recommended! The winter ends, and crisp, beautiful mountain sunshine starts. Dates for traditional Vedic weddings fill up very quickly in this month." 
    },
    { 
      month: "April", 
      status: "Best Wedding Weather", 
      color: "bg-emerald-50 border-emerald-200 text-emerald-700", 
      icon: <Flame className="w-5 h-5 text-[#E09526]" />, 
      desc: "Absolute perfect time. Clear blue skies and perfect smooth roads from the airport. Ideal for an elegant, hassle-free open-air wedding ceremony." 
    },
    { 
      month: "May", 
      status: "Perfect Clear Skies", 
      color: "bg-emerald-50 border-emerald-200 text-emerald-700", 
      icon: <Flame className="w-5 h-5 text-[#E09526]" />, 
      desc: "Incredible mountain horizons and beautiful sunny days. Perfect for cinematic photography. We manage all direct priest bookings and temple timings well in advance." 
    },
    { 
      month: "June", 
      status: "Warm & Bright Days", 
      color: "bg-amber-50 border-amber-200 text-amber-700", 
      icon: <Sun className="w-5 h-5 text-amber-500" />, 
      desc: "Warm and beautiful day slots. Excellent for outdoor lunch setups and traditional catering before the mountain monsoon rains start." 
    },
    { 
      month: "July", 
      status: "Heavy Rainy Season", 
      color: "bg-rose-50 border-rose-200 text-rose-700", 
      icon: <AlertTriangle className="w-5 h-5 text-rose-500" />, 
      desc: "Heavy monsoon rains can make mountain travel tricky and risky for families. To keep your close ones 100% safe, we do not take any open-air wedding bookings during this month." 
    },
    { 
      month: "August", 
      status: "Heavy Rainy Season", 
      color: "bg-rose-50 border-rose-200 text-rose-700", 
      icon: <AlertTriangle className="w-5 h-5 text-rose-500" />, 
      desc: "The valley looks incredibly green and lush, but sudden rains can cause road delays. We advise couples to choose safer autumn or spring months instead." 
    },
    { 
      month: "September", 
      status: "Fresh & Beautiful Autumn", 
      color: "bg-emerald-50 border-emerald-200 text-emerald-700", 
      icon: <Sun className="w-5 h-5 text-emerald-500" />, 
      desc: "The mountain skies clear up completely after the rains. You get stunning, clean Himalayan views and fresh mountain breeze. Perfect time to resume functions." 
    },
    { 
      month: "October", 
      status: "Most Auspicious Peak", 
      color: "bg-emerald-50 border-emerald-200 text-emerald-700", 
      icon: <Flame className="w-5 h-5 text-[#E09526]" />, 
      desc: "One of the most blessed and popular months for holy weddings. The lighting is perfect for premium cinematography. Slots get booked out almost 6 months early." 
    },
    { 
      month: "November", 
      status: "Crisp Early Winter", 
      color: "bg-amber-50 border-amber-200 text-amber-700", 
      icon: <Sun className="w-5 h-5 text-amber-500" />, 
      desc: "Bright sunny days but sharp cold nights. We customize special velvet outfit themes for the couple and design cozy fire-side traditional gathering spaces for guests." 
    },
    { 
      month: "December", 
      status: "Cold Winter Magic", 
      color: "bg-blue-50 border-blue-200 text-blue-700", 
      icon: <CloudSnow className="w-5 h-5 text-blue-500" />, 
      desc: "Magical, peaceful winter vibe in the mountains. We handle all logistics with full backup plans, premium heating, and local arrangements so your family stays cozy." 
    }
  ];

  const [selectedMonth, setSelectedMonth] = useState(calendarData[3]); // Default focus to April 2026

  return (
    <section 
      id="sacred-calendar" 
      className="w-full bg-white py-24 px-6 md:px-12 border-t border-black/5 relative overflow-hidden text-left select-none"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* HEADER SYSTEM: HYPER SIMPLE & EMOTIONAL */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E09526]">
            <Calendar className="w-4 h-4" /> 2026 Easy Wedding Guide
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
            Choose Your Perfect <span className="text-[#B83D2D]">Triyuginarayan Wedding Date</span> Wisely
          </h2>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Don't pick your dates blindly from generic city calendars. Planning a beautiful wedding up in the mountains requires understanding the local weather. Click on the months below to see our honest advice for your family's absolute comfort.
          </p>
        </div>

        {/* INTERACTIVE CALENDAR PLATFORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT 12-MONTH GRID */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {calendarData.map((item, index) => {
              const isSelected = selectedMonth.month === item.month;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedMonth(item)}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between space-y-4 transition-all duration-300 ${
                    isSelected 
                      ? 'border-[#B83D2D] bg-[#B83D2D] text-white shadow-lg -translate-y-1' 
                      : 'border-neutral-200/80 bg-[#FAF8F5] text-neutral-800 hover:border-[#E09526] hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-start w-full">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-white/80' : 'text-neutral-400'}`}>
                      Year 2026
                    </span>
                    {!isSelected && item.icon}
                  </div>
                  
                  <div>
                    <h4 className="font-serif font-bold text-base md:text-lg">{item.month}</h4>
                    <span className={`text-[9px] font-bold uppercase tracking-wider block mt-0.5 ${
                      isSelected ? 'text-white/90' : 'text-neutral-500'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE DETAIL PANEL */}
          <div className="lg:col-span-4 bg-[#FAF8F5] border border-neutral-200/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E09526]/10 flex items-center justify-center">
                  <Info className="w-4 h-4 text-[#E09526]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-neutral-900 text-lg">{selectedMonth.month} Details</h3>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">What to expect</span>
                </div>
              </div>
              
              <div className={`px-3 py-1.5 rounded-md text-[10px] font-extrabold uppercase tracking-widest border inline-block ${selectedMonth.color}`}>
                {selectedMonth.status}
              </div>

              <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed pt-2">
                {selectedMonth.desc}
              </p>
            </div>

            {/* Micro Trust Indicators */}
            <div className="border-t border-neutral-200/60 pt-4 space-y-2.5 text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
              <div className="flex items-center gap-2 text-neutral-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Pre-Verified Dates with Temple Priests
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Real-time Mountain Road Safety Check
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}