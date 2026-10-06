import React from 'react';
import { Flame, Heart, Sparkles } from 'lucide-react';

export default function ParallaxBanner() {
  return (
    <section className="relative w-full min-h-[560px] flex items-center justify-center py-24 px-6 overflow-hidden select-none">
      
      {/* 🏔️ FIXED LOGIC: Brightness Enhanced Authentic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-700 scale-105 
                   brightness-[1.45] contrast-[1.15] saturate-[1.1]"
        style={{ 
          backgroundImage: "url('/akhand-dhuni.png')" 
        }}
      />
      
      {/* 🖤 CINEMATIC DIMMER MASK: Center ko clear rakhega aur side-side se text read karne ke liye blend karega */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/30" />

      {/* CORE CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Micro Icon Accent */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E09526]/20 border border-[#E09526]/50 text-[#E09526] mb-2 animate-pulse shadow-lg shadow-[#E09526]/10">
          <Flame className="w-5 h-5 fill-[#E09526]" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-tight [text-shadow:_0_3px_12px_rgba(0,0,0,0.95)]">
          Your Sacred Pheres At <br />
          <span className="text-[#E09526]">Triyuginarayan Are In Safe Hands</span>
        </h2>

        {/* Content Box with a high-end blur backdrop plate */}
        <p className="font-sans text-sm md:text-base text-white/95 font-medium leading-relaxed max-w-2xl mx-auto backdrop-blur-[3px] bg-black/30 p-5 rounded-2xl border border-white/10 [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">
          We understand that taking your family high up into the mountains can feel overwhelming. That is why we treat your wedding like our own family event. From smooth stays for your parents to handling every small ritual beside the holy Akhand Dhuni, we take care of all the stress so you can focus purely on your blessings.
        </p>

        {/* TRUST COUNTERS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 max-w-3xl mx-auto border-t border-white/20">
          
          <div className="space-y-1 p-3 bg-black/30 rounded-xl backdrop-blur-[2px] border border-white/5">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#E09526] flex items-center justify-center gap-1.5">
              150+ <Heart className="w-4 h-4 text-[#B83D2D] fill-[#B83D2D]" />
            </div>
            <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
              Happy Families Blessed
            </p>
          </div>

          <div className="space-y-1 p-3 bg-black/30 rounded-xl backdrop-blur-[2px] border border-white/5">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-1.5">
              500+ <Sparkles className="w-4 h-4 text-[#E09526]" />
            </div>
            <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
              Vedic Rituals Managed
            </p>
          </div>

          <div className="space-y-1 p-3 bg-black/30 rounded-xl backdrop-blur-[2px] border border-white/5">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#E09526]">
              4.9 ★
            </div>
            <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
              Google Customer Trust
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}