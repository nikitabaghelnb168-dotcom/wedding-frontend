import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, BookOpen, ChevronRight, Check, FileText, ArrowLeft } from 'lucide-react';

export default function BlogSection({ onNavigate }) {
  const currentYear = new Date().getFullYear();
  
  // State management for individual article view
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const articles = [
    {
      id: "registration-rituals",
      category: "Pooja, Rituals & Permits",
      readTime: "12 min read",
      updatedDate: `June ${currentYear}`,
      title: "Triyuginarayan Temple Wedding Registration Process, Rituals & Required Documents",
      description: "Learn everything about authentic temple booking slots, official government marriage registration guidelines, required legal identity documents, local Vedic pandit arrangements, traditional Hindu temple rituals, and complete dynamic setup planning directly beside the eternal flame of the sacred shrine.",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop",
      altText: "Bride and groom performing sacred Hindu temple rituals during a traditional destination wedding ceremony.",
      author: "Triyuginarayan Wedding Experts",
      link: "#registration-guide"
    },
    {
      id: "guest-travel-accommodation",
      category: "Guest Hospitality & Travel",
      readTime: "8 min read",
      updatedDate: `June ${currentYear}`,
      title: "How to Plan Guest Travel & Accommodation for a Triyuginarayan Wedding",
      description: "An expert logistics blueprint for organizing smooth guest hospitality and transportation networks from Delhi, Mumbai, or Haridwar. Discover premium luxury resorts, high-altitude mountain valley safety measures, local premium vehicle rentals, and optimized cottage comfort allocations for elderly family members.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
      altText: "Premium luxury resort accommodation and transport management overlooking Himalayan mountain valley ranges.",
      author: "Triyuginarayan Wedding Experts",
      link: "#travel-accommodation-guide"
    },
    {
      id: "winter-wedding-guide",
      category: "Winter Weather & Decor",
      readTime: "5 min read",
      updatedDate: `June ${currentYear}`,
      title: "Winter Wedding Guide for Triyuginarayan: Weather, Guest Comfort & Décor Ideas",
      description: "Planning a cold-weather marriage in the mountains? Learn to master high-altitude winter logistics with cozy indoor bonfire systems, custom winter wedding decoration setups, warm traditional culinary charts, high-end guest fabric layers, and scenic snow-capped Himalayan valley floral décor schemes.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      altText: "Cozy bonfire setup and magnificent outdoor luxury wedding decor during winter weather season.",
      author: "Triyuginarayan Wedding Experts",
      link: "#winter-tips-guide"
    }
  ];

  const handleArticleClick = (id, e) => {
    e.preventDefault();
    setSelectedArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="blog-document-root" className="pt-24 min-h-screen bg-[#FCFAF7]">
      {/* ADVANCED SEO ENGINE: Injected Schema Core */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            ...articles.map((art) => ({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "@id": `https://triyuginarayanevents.com/blog/${art.id}`,
              "headline": art.title,
              "description": art.description,
              "image": art.image,
              "datePublished": `${currentYear}-01-15T08:00:00+05:30`,
              "dateModified": `${currentYear}-06-01T12:00:00+05:30`,
              "author": {
                "@type": "Organization",
                "name": art.author,
                "url": "https://triyuginarayanevents.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Triyuginarayan Event Services",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=200"
                }
              },
              "mainEntityOfPage": `https://triyuginarayanevents.com/blog/${art.id}`
            })),
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://triyuginarayanevents.com/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://triyuginarayanevents.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Wedding Guides",
                  "item": "https://triyuginarayanevents.com/blog"
                }
              ]
            }
          ])
        }}
      />

      {/* CONDITION 1: ARTICLE 1 FULL ENGINE (Registration & Rituals) */}
      {selectedArticleId === "registration-rituals" && (
        <section className="w-full bg-[#FCFAF7] pb-20 px-6 md:px-12 text-left select-none animate-fadeIn">
          <div className="max-w-6xl mx-auto space-y-8">
            <button 
              onClick={() => setSelectedArticleId(null)} 
              className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#1F3A2E] hover:text-[#D4AF37] transition-colors duration-300 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" /> Back to Journal Index
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
              <article className="lg:col-span-8 bg-white rounded-[32px] border border-neutral-200/60 p-6 md:p-10 shadow-[0_30px_70px_rgba(31,58,46,0.02)] space-y-8">
                <div className="space-y-4 border-b border-neutral-100 pb-6">
                  <span className="text-[10px] tracking-[0.25em] font-serif font-bold uppercase text-[#D4AF37] block">AUTHORITATIVE SACRED GUIDE</span>
                  <h1 className="font-bold text-neutral-950 tracking-tight leading-[1.15]" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)' }}>
                    Triyuginarayan Temple Wedding Registration Process, Rituals & Required Documents
                  </h1>
                  <div className="flex flex-wrap gap-4 items-center text-[10px] font-serif font-bold uppercase tracking-wider text-neutral-400 pt-1">
                    <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#D4AF37]" /> Triyuginarayan Wedding Experts</div>
                    <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> June {currentYear}</div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 12 Min Read</div>
                  </div>
                </div>

                <p className="font-serif text-base text-neutral-700 leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:text-[#1F3A2E] first-letter:float-left first-letter:mr-3 dynamic-dropcap">
                  Tucked away at an altitude of 6,500 feet inside the majestic, snow-capped amphitheater of the Garhwal Himalayas lies the ancient Triyuginarayan Temple. Far more than a picturesque backdrop, this holy site carries a profound, living spiritual lineage: it is the exact, cosmic ground where Lord Shiva and Goddess Parvati tied the knot during the Satya Yuga.
                </p>

                <div className="space-y-4 pt-2">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-neutral-950 tracking-wide border-l-2 border-[#D4AF37] pl-4">The Temple Booking Framework & Calendar Strategy</h2>
                  <p className="font-serif text-sm text-neutral-600 leading-relaxed text-justify">Placing your wedding at the epicenter of the ancient temple complex requires advanced architectural date-blocking. Because the temple functions under strict traditional protocol, arbitrary arrivals cannot be accommodated.</p>
                </div>

                <div className="w-full aspect-[16/9] bg-neutral-100 rounded-2xl overflow-hidden relative border border-neutral-200/60">
                  <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800" alt="Bride and groom performing sacred Hindu temple rituals" className="w-full h-full object-cover" />
                </div>

                <div className="mt-8 p-6 bg-[#FCFAF7] border border-neutral-200/60 rounded-2xl text-left font-serif">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">Written by: Triyuginarayan Wedding Experts</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Our local planning team has extensive experience coordinating destination weddings in Triyuginarayan, including guest logistics, accommodation, transportation, temple ceremonies, and hospitality management.</p>
                </div>
              </article>

              <aside className="lg:col-span-4 w-full lg:sticky lg:top-24 space-y-6">
                <div className="bg-[#1F3A2E] text-white p-6 rounded-[24px] border border-[#D4AF37]/20 shadow-xl space-y-4 text-left">
                  <span className="text-[8px] tracking-[0.2em] font-mono font-bold uppercase text-[#D4AF37] block">REGISTRY MAPPING CHECKS</span>
                  <h4 className="font-serif text-sm font-medium border-b border-white/10 pb-2">Guide Takeaways</h4>
                  <ul className="space-y-3 font-serif text-xs text-white/80">
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" /> Advance clearances required 6 months early.</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" /> Legal processing at Rudraprayag SDM base.</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* CONDITION 2: ARTICLE 2 FULL ENGINE (Travel & Accommodation Guide) */}
      {selectedArticleId === "guest-travel-accommodation" && (
        <section className="w-full bg-[#FCFAF7] pb-20 px-6 md:px-12 text-left select-none animate-fadeIn">
          <div className="max-w-6xl mx-auto space-y-8">
            <button 
              onClick={() => setSelectedArticleId(null)} 
              className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-widest text-[#1F3A2E] hover:text-[#D4AF37] transition-colors duration-300 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" /> Back to Journal Index
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
              <article className="lg:col-span-8 bg-white rounded-[32px] border border-neutral-200/60 p-6 md:p-10 shadow-[0_30px_70px_rgba(31,58,46,0.02)] space-y-8">
                <div className="space-y-4 border-b border-neutral-100 pb-6">
                  <span className="text-[10px] tracking-[0.25em] font-serif font-bold uppercase text-[#D4AF37] block">Triyuginarayan Wedding Travel Guide</span>
                  <h1 className="font-bold text-neutral-950 tracking-tight leading-[1.15]" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)' }}>
                    How to Plan Guest Travel & Accommodation for a Triyuginarayan Wedding
                  </h1>
                  <div className="flex flex-wrap gap-4 items-center text-[10px] font-serif font-bold uppercase tracking-wider text-neutral-400 pt-1">
                    <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#D4AF37]" /> Triyuginarayan Wedding Experts</div>
                    <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> June {currentYear}</div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 8 Min Read</div>
                  </div>
                </div>

                <div className="w-full aspect-[16/9] bg-neutral-100 rounded-2xl overflow-hidden relative border border-neutral-200/60">
                  <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800" alt="Guests arriving at temple" className="w-full h-full object-cover" />
                </div>

                <p className="font-serif text-base text-neutral-700 leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:text-[#1F3A2E] first-letter:float-left first-letter:mr-3 dynamic-dropcap">
                  Planning a destination wedding at the sacred Triyuginarayan Temple is an unforgettable experience. While the temple ceremony creates lifelong memories, the comfort and convenience of your guests play an equally important role in making your wedding truly exceptional.
                </p>

                <div className="space-y-4 pt-2">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-neutral-950 tracking-wide border-l-2 border-[#D4AF37] pl-4">
                    Understanding the Journey to Triyuginarayan Temple
                  </h2>
                  <p className="font-serif text-sm text-neutral-600 leading-relaxed text-justify">
                    Triyuginarayan Temple is situated in Rudraprayag district, approximately 12 km from Sonprayag and around 26 km from Guptkashi. Most guests typically arrive via Dehradun Airport or Haridwar Railway Station.
                  </p>
                </div>
              </article>

              <aside className="lg:col-span-4 w-full lg:sticky lg:top-24 space-y-6">
                <div className="bg-[#1F3A2E] text-white p-6 rounded-[24px] border border-[#D4AF37]/20 shadow-xl space-y-4 text-left">
                  <span className="text-[8px] tracking-[0.2em] font-mono font-bold uppercase text-[#D4AF37] block">GUEST HOSPITALITY LOCKS</span>
                  <h4 className="font-serif text-sm font-medium border-b border-white/10 pb-2">Logistics Checkpoints</h4>
                  <ul className="space-y-3 font-serif text-xs text-white/80">
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" /> Direct airport transfer slots.</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" /> High-altitude thermal safety maps.</li>
                  </ul>
                </div>

                <div className="bg-white border border-neutral-200/80 p-6 rounded-[24px] shadow-md space-y-5 text-left">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-[#D4AF37] tracking-widest block">CONVERSION GATEWAY</span>
                    <h4 className="font-serif text-sm font-bold text-neutral-900">Stress-Free Guest Coordination</h4>
                    <p className="font-serif text-xs text-neutral-500 leading-relaxed">Let our regional planners map your entire guest arrival sequences.</p>
                  </div>
                  <a 
                    href="#booking"
                    className="w-full text-white text-[10px] font-serif font-bold uppercase tracking-widest transition-all duration-300 h-11 rounded-xl shadow-sm flex items-center justify-center gap-2 group hover:-translate-y-0.5"
                    style={{ backgroundColor: '#1F3A2E' }}
                  >
                    <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Lock My Guest Logistics
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* CONDITION 3: JOURNAL CARD MATRIX VIEW (Standard Grid Index) */}
      {!selectedArticleId && (
        <section className="w-full bg-[#FCFAF7] pb-20 px-6 md:px-12 select-none text-left animate-fadeIn">
          <div className="max-w-7xl mx-auto space-y-14">
            
            {/* Header Module Layer */}
            <div className="max-w-4xl space-y-4">
              <nav className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                <a href="/" onClick={(e) => { e.preventDefault(); if(onNavigate) onNavigate('home'); }} className="hover:text-[#D4AF37] transition-colors">Home</a>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#1F3A2E]">Wedding Journal</span>
              </nav>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] pt-1">
                <BookOpen className="w-4 h-4" />
                Handpicked Stories & Expert Blueprints
              </div>
              
              <h2 
                className="font-bold text-neutral-950 leading-[1.2] tracking-wide max-w-[920px]"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)' }}
              >
                Triyuginarayan Wedding Guide: <span className="italic font-normal" style={{ color: '#1F3A2E' }}>Expert Tips, Temple Rituals, Wedding Costs & Travel Planning</span>
              </h2>
              
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed pt-1 max-w-[860px] font-serif">
                Planning a destination wedding at Triyuginarayan Temple, Uttarakhand? Explore our expert guides covering historical temple rituals, official temple registration steps, local guest accommodation, premium luxury resorts, creative wedding décor schemes, transportation, and guest hospitality to coordinate your dream Himalayan wedding.
              </p>
            </div>

            {/* Symmetrical Card Grid Framework */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {articles.map((article) => (
                <article 
                  key={article.id} 
                  className="group bg-white rounded-3xl border border-neutral-200/60 overflow-hidden shadow-[0_15px_45px_rgba(31,58,46,0.02)] hover:shadow-[0_30px_70px_rgba(31,58,46,0.07)] flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-1.5 relative"
                >
                  <div>
                    <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-100 relative">
                      <img src={article.image} alt={article.altText} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border border-neutral-200/40" style={{ color: '#1F3A2E' }}>
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                        <span className="flex items-center gap-1"><User className="w-3 h-3 text-[#D4AF37]" /> {article.author}</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-200"></span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#D4AF37]" /> {article.readTime}</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-200"></span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#D4AF37]" /> {article.updatedDate}</span>
                      </div>

                      <h3 className="text-neutral-950 font-bold leading-snug transition-colors duration-300 group-hover:text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif", fontSize: '16px' }}>
                        <a href={article.link} onClick={(e) => handleArticleClick(article.id, e)}>{article.title}</a>
                      </h3>

                      <p className="text-xs text-neutral-500 leading-relaxed font-serif line-clamp-3">
                        {article.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <a href={article.link} onClick={(e) => handleArticleClick(article.id, e)} className="text-[10px] font-serif font-bold uppercase tracking-widest inline-flex items-center gap-1.5 transition-colors duration-300" style={{ color: '#1F3A2E' }}>
                        Read Complete Guide
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300 text-[#D4AF37]" />
                      </a>
                    </div>
                  </div>

                </article>
              ))}
            </div>

            {/* Bottom Tag Cloud & Directory Matrix */}
            <div className="w-full pt-8 flex flex-col items-center gap-10 border-t border-neutral-200/60">
              <div className="text-center space-y-4">
                <button className="inline-block px-7 py-3.5 text-white text-[10px] font-serif font-bold uppercase tracking-widest transition-all duration-300 rounded-xl shadow-md cursor-pointer" style={{ backgroundColor: '#1F3A2E' }}>
                  Explore All 35+ Wedding Planning Guides →
                </button>
              </div>

              <div className="w-full bg-white border border-neutral-200/60 rounded-[24px] p-6 text-center space-y-4 shadow-sm">
                <h4 className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Related Wedding Resources & Planning Directives</h4>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-serif font-bold" style={{ color: '#1F3A2E' }}>
                  <a href="#plan-your-wedding" className="hover:text-[#D4AF37] transition-colors">Destination Wedding Packages</a>
                  <span className="hidden sm:inline text-neutral-200">|</span>
                  <a href="#plan-your-wedding" className="hover:text-[#D4AF37] transition-colors">Wedding Cost Guide</a>
                  <span className="hidden sm:inline text-neutral-200">|</span>
                  <a href="#booking" className="hover:text-[#D4AF37] transition-colors">Temple Registration Guide</a>
                  <span className="hidden sm:inline text-neutral-200">|</span>
                  <a href="#wedding-services" className="hover:text-[#D4AF37] transition-colors">Accommodation & Transportation Page</a>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}
    </div>
  );
}