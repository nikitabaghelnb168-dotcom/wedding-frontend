import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Landmark,
  Sparkles,
  ClipboardList,
  Calculator,
  Flame,
  FileCheck,
  Flower2,
  Sun,
  HeartHandshake,
  Camera,
  Video,
  VideoOff,
  Clapperboard,
  Music,
  Hotel,
  Car,
  Utensils,
  Users,
  Sparkle
} from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const windowHeight = window.innerHeight;
      const totalDocHeight = document.documentElement.scrollHeight;
      const currentScrollPosition = window.scrollY + windowHeight;

      if (totalDocHeight - currentScrollPosition < 450) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SAFE NAVIGATION HANDLER
  const handleLinkClick = (e, pathOrId) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);

    if (pathOrId.startsWith('/')) {
      if (e) e.preventDefault();
      window.location.href = pathOrId;
    } else {
      if (e) e.preventDefault();
      const cleanId = pathOrId.replace('#', '');
      
      if (window.location.pathname === '/') {
        const element = document.getElementById(cleanId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = `/#${cleanId}`;
      }
    }
  };

  // WEDDING SERVICES DATA
  const weddingServicesData = [
    {
      category: "Wedding Planning",
      items: [
        { label: "Temple Wedding Planning", path: "/temple-wedding-planning", icon: Landmark },
        { label: "Luxury Packages", path: "/luxury-wedding-packages", icon: Sparkles },
        { label: "Wedding Coordinator", path: "/wedding-coordinator", icon: ClipboardList },
        { label: "Budget Planning", path: "/budget-planning", icon: Calculator }
      ]
    },
    {
      category: "Temple Ceremony",
      items: [
        { label: "Pandit Services", path: "/pandit-services", icon: Flame },
        { label: "Marriage Registration", path: "/marriage-registration", icon: FileCheck },
        { label: "Wedding Decoration", path: "/wedding-decoration", icon: Flower2 },
        { label: "Haldi Setup", path: "/haldi-mehendi-decoration", icon: Sun },
        { label: "Mehendi Decor", path: "/haldi-mehendi-decoration", icon: Flower2 },
        { label: "Varmala", path: "/varmala-arrangement", icon: HeartHandshake },
        { label: "Rose Petals", path: "/rose-petal-shower", icon: Sparkles }
      ]
    },
    {
      category: "Photography & Films",
      items: [
        { label: "Wedding Photography", path: "/wedding-photography", icon: Camera },
        { label: "Wedding Films", path: "/wedding-videography", icon: Video },
        { label: "Drone Photography", path: "/drone-photography", icon: VideoOff },
        { label: "Pre Wedding Shoot", path: "/pre-wedding", icon: Clapperboard },
        { label: "Entertainment & DJ", path: "/dj-sound-setup", icon: Music }
      ]
    },
    {
      category: "Guest Experience",
      items: [
        { label: "Luxury Accommodation", path: "/guest-accommodation", icon: Hotel },
        { label: "Guest Transfers", path: "/guest-transportation", icon: Car },
        { label: "Catering Services", path: "/wedding-catering", icon: Utensils },
        { label: "Guest Management", path: "/guest-management", icon: Users },
        { label: "Bridal Makeup", path: "/bridal-makeup-artist", icon: Sparkle }
      ]
    }
  ];

  let navbarBackgroundClass = 'bg-[#173828] py-4 border-b border-[#D4AF37]/20';

  if (isScrolled) {
    if (isAtBottom) {
      navbarBackgroundClass = 'bg-[#2C2A29]/90 backdrop-blur-lg py-3 shadow-2xl border-b-2 border-[#D4AF37]';
    } else {
      navbarBackgroundClass = 'bg-[#173828]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#D4AF37]/25';
    }
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navbarBackgroundClass}`}>
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        
        {/* Left Section: Logo Branding */}
        <div className="flex justify-start">
          <a 
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex flex-col text-left cursor-pointer group shrink-0 select-none no-underline"
          >
            <span 
              className="tracking-[0.05em] font-bold uppercase transition-colors"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(20px, 1.8vw, 26px)',
                color: '#D4AF37'
              }}
            >
              TRIYUGINARAYAN
            </span>
            <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.12em] text-[#F5F2EA]/80 uppercase mt-0.5 italic whitespace-nowrap">
              “Curated Luxury Weddings in the Himalayas”
            </span>
          </a>
        </div>

        {/* Right Section: Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-end gap-6 xl:gap-8 text-[11px] font-medium tracking-[0.08em] text-[#F5F2EA] whitespace-nowrap px-2">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="hover:text-[#E5C766] transition-colors duration-300 py-1 text-[#F5F2EA] no-underline"
          >
            Home
          </a>

          <a
            href="#plan-your-wedding"
            onClick={(e) => handleLinkClick(e, 'plan-your-wedding')}
            className="hover:text-[#E5C766] transition-colors duration-300 py-1 text-[#F5F2EA] no-underline"
          >
            Plan Your Wedding
          </a>

          {/* LUXURY MEGA MENU DROPDOWN */}
          <div 
            className="py-2.5 relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a
              href="/wedding-services"
              onClick={(e) => handleLinkClick(e, '/wedding-services')}
              className="flex items-center gap-1.5 hover:text-[#E5C766] transition-colors duration-300 font-medium text-[#F5F2EA] no-underline py-2"
            >
              <span>Wedding Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </a>

            {/* Desktop Mega Menu Box */}
            {isServicesOpen && (
              <div 
                className="fixed top-[58px] left-1/2 -translate-x-1/2 w-[92vw] max-w-[1280px] bg-[#173828] border border-[#D4AF37]/30 shadow-2xl rounded-b-xl p-8 grid grid-cols-12 gap-8 text-left normal-case transition-all duration-300 z-50 pt-6"
                style={{ backdropFilter: 'blur(12px)' }}
              >
                {/* Services Grid */}
                <div className="col-span-9 grid grid-cols-4 gap-6">
                  {weddingServicesData.map((sec, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h4 
                        className="text-[#D4AF37] text-[18px] font-bold pb-2 mb-4 border-b border-[#D4AF37]/25 tracking-[0.5px]"
                        style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', serif" }}
                      >
                        {sec.category}
                      </h4>

                      <ul className="flex flex-col gap-3.5">
                        {sec.items.map((sub, sIdx) => {
                          const IconComponent = sub.icon;
                          return (
                            <li key={sIdx}>
                              <a
                                href={sub.path}
                                onClick={(e) => handleLinkClick(e, sub.path)}
                                className="group/item w-full text-left flex items-center justify-between text-[#F5F2EA]/90 hover:text-[#E5C766] text-[12px] font-medium transition-all duration-300 tracking-[0.2px] py-0.5 no-underline"
                              >
                                <div className="flex items-center gap-2">
                                  <IconComponent className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                                  <span className="relative">
                                    {sub.label}
                                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#E5C766] transition-all duration-300 group-hover/item:w-full"></span>
                                  </span>
                                </div>
                                <ArrowRight className="w-3 h-3 text-[#E5C766] opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Package Banner */}
                <div className="col-span-3 bg-[#112D20] border border-[#D4AF37]/30 rounded-lg p-5 flex flex-col justify-between shadow-lg">
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                      ✨ Most Popular
                    </span>
                    <h5 
                      className="text-[#F5F2EA] text-[17px] font-bold mb-2 leading-tight"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Luxury Temple Wedding
                    </h5>
                    <ul className="text-[#F5F2EA]/80 text-[11px] flex flex-col gap-1.5 mb-4">
                      <li className="flex items-center gap-1.5"><span className="text-[#D4AF37]">✔</span> 2 Nights Stay & Hospitality</li>
                      <li className="flex items-center gap-1.5"><span className="text-[#D4AF37]">✔</span> Complete Photo & Video</li>
                      <li className="flex items-center gap-1.5"><span className="text-[#D4AF37]">✔</span> Mandap & Floral Decor</li>
                      <li className="flex items-center gap-1.5"><span className="text-[#D4AF37]">✔</span> Vedic Pandit & Registration</li>
                    </ul>
                  </div>

                  <a
                    href="#plan-your-wedding"
                    onClick={(e) => handleLinkClick(e, 'plan-your-wedding')}
                    className="w-full text-center py-2 bg-[#D4AF37] text-[#173828] text-[10px] font-bold uppercase tracking-wider rounded hover:bg-[#E5C766] transition-colors no-underline block"
                  >
                    View Package
                  </a>
                </div>

                {/* Bottom Integrated CTA Strip */}
                <div className="col-span-12 border-t border-[#D4AF37]/25 pt-3.5 mt-1 flex items-center justify-between text-[#F5F2EA]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span 
                      className="text-[15px] text-[#D4AF37]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Need help planning your dream Himalayan wedding?
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://wa.me/917983571384"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#F5F2EA] hover:text-[#E5C766] font-medium flex items-center gap-1 transition-colors no-underline"
                    >
                      <span>Talk to Wedding Specialist</span>
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                    </a>
                    <span className="text-[#D4AF37]/40">|</span>
                    <a
                      href="#booking"
                      onClick={(e) => handleLinkClick(e, 'booking')}
                      className="text-[11px] text-[#D4AF37] hover:text-[#E5C766] font-bold uppercase tracking-wider underline underline-offset-4"
                    >
                      Get Custom Proposal
                    </a>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* DEDICATED BLOG PAGE LINK */}
          <a
            href="/blog"
            onClick={(e) => handleLinkClick(e, '/blog')}
            className="hover:text-[#E5C766] transition-colors duration-300 py-1 text-[#F5F2EA] no-underline"
          >
            Blog
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="hover:text-[#E5C766] transition-colors duration-300 py-1 text-[#F5F2EA] no-underline"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none p-1.5 bg-white/5 rounded-md active:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full border-t border-[#D4AF37]/20 shadow-2xl py-6 px-6 flex flex-col gap-3 text-[12px] font-medium text-[#F5F2EA] max-h-[85vh] overflow-y-auto ${
          isAtBottom ? 'bg-[#2C2A29]' : 'bg-[#173828]'
        }`}>
          <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="text-left hover:text-[#D4AF37] py-2 border-b border-white/5 text-[#F5F2EA] no-underline">
            Home
          </a>

          <a href="#plan-your-wedding" onClick={(e) => handleLinkClick(e, 'plan-your-wedding')} className="text-left hover:text-[#D4AF37] py-2 border-b border-white/5 text-[#F5F2EA] no-underline">
            Plan Your Wedding
          </a>

          {/* Mobile Accordion for Services */}
          <div className="border-b border-white/5 py-2">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full hover:text-[#D4AF37] font-medium bg-transparent border-0 text-[#F5F2EA]"
            >
              <span>Wedding Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </button>

            {isMobileServicesOpen && (
              <div className="mt-4 pl-2 flex flex-col gap-5">
                {weddingServicesData.map((sec, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span 
                      className="text-[#D4AF37] text-[16px] font-bold"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {sec.category}
                    </span>
                    <div className="flex flex-col gap-2 pl-3 border-l border-[#D4AF37]/30">
                      {sec.items.map((sub, sIdx) => {
                        const IconComponent = sub.icon;
                        return (
                          <a
                            key={sIdx}
                            href={sub.path}
                            onClick={(e) => handleLinkClick(e, sub.path)}
                            className="text-left text-[#F5F2EA]/85 hover:text-[#E5C766] text-[12px] py-1 flex items-center gap-2 no-underline"
                          >
                            <IconComponent className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>{sub.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="/blog" onClick={(e) => handleLinkClick(e, '/blog')} className="text-left hover:text-[#D4AF37] py-2 border-b border-white/5 text-[#F5F2EA] no-underline">
            Blog
          </a>

          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="text-left hover:text-[#D4AF37] py-2 border-b border-white/5 text-[#F5F2EA] no-underline">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}