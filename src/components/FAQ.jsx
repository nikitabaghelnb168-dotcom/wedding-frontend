import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Flame, ShieldAlert, Compass } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Why is accommodation based in Guptkashi instead of Triyuginarayan?",
      answer: "Triyuginarayan is a sacred, pristine temple zone with highly restricted construction zones and limited infrastructure. Guptkashi serves as our primary luxury base hub, offering premium premium stays, consistent water/heating amenities, and optimal medical backups just a short scenic drive away."
    },
    {
      id: 2,
      question: "How are the sacred temple registrations handled?",
      answer: "Our senior coordinators manage all documentation directly with the regional temple administration committee. We secure your official wedding time slots and manage the priest alignment weeks in advance so your family faces zero waiting delays."
    },
    {
      id: 3,
      question: "Is the mandatory Government Temple fee included?",
      answer: "Yes, all official temple administrative fees, standard committee contributions, and structural alignment charges are fully integrated into our packages. We maintain 100% transparent micro-ledgers with zero hidden local surges."
    },
    {
      id: 4,
      question: "What are the mobile network and internet connectivity conditions?",
      answer: "While BSNL and Jio work decently near the base hubs, high-altitude connectivity can fluctuate. We provide internal team radio networks and emergency satellite communication setups at the venue to keep operations completely seamless."
    },
    {
      id: 5,
      question: "Are there any strict dietary or cultural guidelines at the temple?",
      answer: "Yes, being a highly revered ancient shrine, the entire perimeter strictly adheres to a Satvik lifestyle. We curate absolute luxury pure vegetarian catering options that respect local heritage while keeping multi-city premium guests delighted."
    },
    {
      id: 6,
      question: "How do you handle medical emergencies or mountain sickness?",
      answer: "We deploy dedicated on-ground medical kits, portable oxygen cylinders, and maintain active call connections with regional medical facilities. Our logistics transit fleet remains on standby 24/7 for immediate lower-altitude evacuation if required."
    },
    {
      id: 7,
      question: "What is the best clothing strategy for a November wedding?",
      answer: "November brings beautiful clear Himalayan backdrops but sharp evening drops in temperature. We guide families to integrate structured premium warm layers, velvet or heavy silk traditional wear, and customized shawls for optimal comfort during open-air rituals."
    }
  ];

  return (
    <section 
      id="faq" 
      className="w-full bg-[#FAF8F5] py-24 px-6 md:px-12 border-t border-black/5 relative overflow-hidden text-left select-none"
    >
      {/* Background Subtle Element */}
      <div className="absolute left-[-5%] bottom-5 font-serif text-[12vw] text-black/[0.01] select-none uppercase pointer-events-none font-bold">
        HIMALAYAS
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* HEADER SYSTEM */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#E09526]">
            <HelpCircle className="w-3.5 h-3.5" /> Clarity & Operations
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-0.5 bg-[#E09526]/40 mx-auto mt-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B83D2D]"></div>
          </div>
        </div>

        {/* MODERN SPLIT GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: PSYCHOLOGICAL ANCHOR CARD */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#B83D2D] to-[#962F22] rounded-3xl p-8 text-white space-y-6 shadow-xl sticky top-28">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
              <Compass className="w-6 h-6 text-[#E09526]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold tracking-wide uppercase">Operational Certainty</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Planning an elite affair at 6,500+ feet requires immense logistics precision. We address every challenge proactively so your family can focus purely on the divine rituals.
              </p>
            </div>
            
            <div className="border-t border-white/10 pt-4 space-y-3 text-[11px] font-medium text-white/90">
              <div className="flex items-center gap-2.5">
                <Flame className="w-3.5 h-3.5 text-[#E09526] fill-[#E09526]" /> Direct Temple Committee Liaison
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#E09526]" /> 24/7 Mountain Emergency Standby
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-CONTRAST INTERACTIVE ACCORDION LIST */}
          <div className="lg:col-span-8 space-y-4">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-[#B83D2D] bg-white shadow-md' 
                      : 'border-neutral-200/70 bg-white/60 hover:border-[#E09526]/60 hover:bg-white shadow-sm'
                  }`}
                >
                  {/* Accordion Trigger Button */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left font-sans transition-colors"
                  >
                    <span className={`text-sm md:text-base font-bold transition-colors duration-200 ${
                      isOpen ? 'text-[#B83D2D]' : 'text-neutral-800'
                    }`}>
                      {item.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#B83D2D] text-white rotate-180' : 'bg-neutral-100 text-neutral-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Content Panel */}
                  <div 
                    className={`transition-all duration-300 ease-in-out font-sans text-xs md:text-sm text-neutral-600 leading-relaxed ${
                      isOpen ? 'max-h-[500px] opacity-100 p-6 pt-0 border-t border-neutral-100/70' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="pt-4 text-neutral-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}