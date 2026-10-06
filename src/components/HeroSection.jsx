import React from 'react';
import { MessageCircle, Star, ShieldCheck, Clock, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full bg-[#FAF8F5] pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-12 relative overflow-hidden text-left select-none"
    >
      {/* Luxury Champagne Gold Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />

      {/* 🏛️ TOP ANNOUNCEMENT / TRUST BAR */}
      <div className="max-w-7xl mx-auto mb-8 relative z-10">
        <div className="bg-[#173828] border border-[#D4AF37]/30 text-white rounded-2xl md:rounded-full py-3 px-4 md:px-6 shadow-md text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs md:text-sm font-serif font-medium tracking-wide">
            <span className="inline-block text-base">🏛️</span>
            <span className="text-[#D4AF37] font-bold">Complete Triyuginarayan Temple Wedding Planning</span>
            <span className="hidden md:inline text-white/40">•</span>
            <span>Temple Wedding Registration</span>
            <span className="hidden md:inline text-white/40">•</span>
            <span>Comfortable Stay</span>
            <span className="hidden md:inline text-white/40">•</span>
            <span>Photography</span>
            <span className="hidden md:inline text-white/40">•</span>
            <span>Guest Management</span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="text-[#D4AF37] font-semibold">Serving Couples Across India & Worldwide</span>
          </div>
        </div>
      </div>

      {/* Rebalanced 50/50 Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* LEFT COLUMN: BRAND VALUE & TYPOGRAPHY FLOW */}
        <div className="lg:col-span-6 space-y-6 w-full pr-0 lg:pr-4">
          
          {/* Small Gold Label */}
          <span
            className="block font-serif font-bold uppercase tracking-[0.2em]"
            style={{ fontSize: '13px', color: '#D4AF37' }}
          >
            Luxury Destination Wedding Planner at Triyuginarayan Temple
          </span>

          {/* Main Heading Block */}
          <h1
            className="font-bold tracking-tight text-neutral-900 leading-[1.15]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 4vw, 54px)',
            }}
          >
            Begin Your Forever at Triyuginarayan
          </h1>

          {/* Subheading Block */}
          <h2 className="font-serif font-medium text-neutral-700 leading-relaxed tracking-wide text-base md:text-lg">
            Where Lord Shiva and Goddess Parvati were married, and where your love story receives eternal blessings.
          </h2>

          {/* Core Description */}
          <p className="font-serif font-medium text-xs md:text-sm text-neutral-600 leading-relaxed tracking-wide">
            Exchange sacred vows beside the eternal Akhand Dhuni, surrounded by the Himalayas, ancient rituals, and curated luxury hospitality for an unforgettable destination wedding.
          </p>

          {/* TRUST BADGES ROW */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-neutral-200/80 my-2">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">5.0 ★ Rating</p>
                <p className="text-[10px] text-neutral-500">Google Verified</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs font-bold text-neutral-900">500+ Weddings</p>
                <p className="text-[10px] text-neutral-500">Planned Successfully</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#173828] shrink-0" />
              <div>
                <p className="text-xs font-bold text-neutral-900">100% Legal</p>
                <p className="text-[10px] text-neutral-500">Registration Docs</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs font-bold text-neutral-900">24 Hr Proposal</p>
                <p className="text-[10px] text-neutral-500">Instant Estimate</p>
              </div>
            </div>
          </div>

          {/* BUTTON SYSTEM (CTAs) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c49f2e] text-[#173828] px-6 py-3.5 rounded-xl font-serif font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              Get Wedding Proposal
            </a>

            <a
              href="https://wa.me/917983571384"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#D4AF37]/10 text-[#173828] border-2 border-[#173828]/30 hover:border-[#D4AF37] px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" /> Talk to Planner
            </a>

            <a
              href="/#packages"
              className="inline-flex items-center justify-center gap-2 text-neutral-700 hover:text-[#173828] font-serif font-semibold text-xs underline underline-offset-4 px-2 py-3"
            >
              View Packages →
            </a>
          </div>

          {/* LOCATION CHIPS */}
          <div className="pt-2">
            <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-2 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D4AF37]" /> Popular Destinations & Guest Locations:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-neutral-600">
              {['Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad', 'Kolkata', 'NRI Couples (USA/UK/UAE)'].map((city, idx) => (
                <span key={idx} className="bg-neutral-200/60 hover:bg-[#D4AF37]/20 border border-neutral-300/60 px-2.5 py-1 rounded-md transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: ELEGANT PORTRAIT FRAME OVERLAY WITH FLOATING BADGES */}
        <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end pl-0 lg:pl-4">
          
          {/* Outer framing wrapper */}
          <div className="relative w-full max-w-[500px]">
            
            {/* Fine Luxury Accent Box */}
            <div className="absolute -inset-3 rounded-[36px] border border-[#D4AF37]/30 pointer-events-none z-0 transform -translate-x-2 -translate-y-2" />

            {/* Main Visual Frame Container */}
            <div className="relative overflow-hidden rounded-[28px] bg-neutral-100 shadow-[0_25px_50px_rgba(23,56,40,0.15)] z-10">
              <img
                src="/wedding-couple.jpg"
                alt="Sacred luxury couple sharing an intimate moment at Triyuginarayan Temple"
                className="w-full h-[420px] sm:h-[500px] lg:h-[540px] object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* FLOATING BADGE 1: Rating Badge */}
            <div className="absolute top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 p-3 rounded-2xl shadow-xl z-20 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#173828] text-[#D4AF37] flex items-center justify-center font-bold text-xs">
                ★ 4.9
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Top Rated Planner</p>
                <p className="text-[10px] text-neutral-500">Google & WedMeGood</p>
              </div>
            </div>

            {/* FLOATING BADGE 2: Weddings Executed */}
            <div className="absolute bottom-6 -left-4 sm:-left-6 bg-[#173828]/95 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-3 rounded-2xl shadow-xl z-20 text-white flex items-center gap-3">
              <div className="p-2 bg-[#D4AF37]/20 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="font-serif font-bold text-sm text-[#D4AF37]">500+ Sacred Weddings</p>
                <p className="text-[10px] text-white/80">Planned at Triyuginarayan</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}