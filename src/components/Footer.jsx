import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  Star, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* 🚀 ADVANCED TECHNICAL SEO: Injected Multistruct JSON-LD Core Engine */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://triyuginarayanevents.com/#localbusiness",
              "name": "Triyuginarayan Event Services",
              "image": "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200",
              "url": "https://triyuginarayanevents.com",
              "telephone": "+91 79835 71384",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Triyuginarayan Temple, Naala, Guptkashi",
                "addressLocality": "Rudraprayag District",
                "addressRegion": "Uttarakhand",
                "postalCode": "246439",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.5262,
                "longitude": 79.0204
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "07:00",
                "closes": "22:00"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://triyuginarayanevents.com/#organization",
              "name": "Triyuginarayan Event Services",
              "url": "https://triyuginarayanevents.com",
              "logo": "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=200",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 79835 71384",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["Hindi", "English"]
              }
            }
          ])
        }}
      />

      {/* 👁️ ACCESSIBILITY & CRAWLER INJECTION LAYER (Hidden Semantic SEO Text) */}
      <p className="sr-only">
        Luxury Destination Wedding Planner in Triyuginarayan Temple, Uttarakhand. Specializing in temple wedding planning, luxury packages, decoration, pandit booking, marriage registration, and complete guest management across Rudraprayag, Kedarnath Valley, Rishikesh, and Haridwar.
      </p>

      {/* CORE VISUAL FOOTER ENGINE ELEMENT */}
      <footer className="w-full bg-[#B83D2D]/95 border-t-2 border-[#E09526]/40 pt-12 pb-8 px-6 md:px-12 relative overflow-hidden text-left text-white select-none">
        
        {/* BACKGROUND AESTHETIC LAYER */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-12">

          {/* 1. TOP HEADER BRAND BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-8">
            <div className="lg:col-span-7 space-y-3">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-[#E09526] uppercase">
                TRIYUGINARAYAN
              </h2>
              <p className="font-serif text-sm md:text-base font-semibold text-white/95">
                Luxury Destination Wedding Planner in Triyuginarayan Temple
              </p>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-2xl">
                Helping couples plan legally recognized temple weddings, luxury destination weddings, accommodation, transportation, photography, decoration and complete wedding management.
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-[#E09526] font-bold">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>★ 5.0 Rated by Couples Across India</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-wrap gap-3 justify-start lg:justify-end items-center">
              <a 
                href="/#contact" 
                className="px-5 py-2.5 bg-[#E09526] hover:bg-[#d08518] text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md"
              >
                Get Wedding Proposal
              </a>
              <a 
                href="https://wa.me/917983571384" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 border border-[#E09526] hover:bg-[#E09526]/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                Talk to Wedding Planner
              </a>
            </div>
          </div>

          {/* 2. 5-COLUMN MAIN INTERNAL LINKING GRID (SEO TOPICAL AUTHORITY ENGINE) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-white/10 pb-12 text-xs">
            
            {/* COLUMN 1: WEDDING PLANNING SERVICES */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-bold tracking-wider text-[#E09526] uppercase border-b border-[#E09526]/20 pb-1.5 inline-block">
                Wedding Services
              </h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/temple-wedding-planning" className="hover:text-[#E09526] transition-colors">Temple Wedding Planning</a></li>
                <li><a href="/luxury-wedding-packages" className="hover:text-[#E09526] transition-colors">Luxury Wedding Packages</a></li>
                <li><a href="/wedding-coordination" className="hover:text-[#E09526] transition-colors">Wedding Coordination</a></li>
                <li><a href="/wedding-decoration" className="hover:text-[#E09526] transition-colors">Wedding Decoration</a></li>
                <li><a href="/haldi-decoration" className="hover:text-[#E09526] transition-colors">Haldi Decoration</a></li>
                <li><a href="/mehendi-decoration" className="hover:text-[#E09526] transition-colors">Mehendi Decoration</a></li>
                <li><a href="/mandap-decoration" className="hover:text-[#E09526] transition-colors">Mandap Decoration</a></li>
                <li><a href="/flower-decoration" className="hover:text-[#E09526] transition-colors">Flower Decoration</a></li>
                <li><a href="/varmala-arrangement" className="hover:text-[#E09526] transition-colors">Varmala Arrangement</a></li>
                <li><a href="/pandit-booking" className="hover:text-[#E09526] transition-colors">Pandit Booking</a></li>
                <li><a href="/marriage-registration" className="hover:text-[#E09526] transition-colors">Marriage Registration</a></li>
                <li><a href="/guest-management" className="hover:text-[#E09526] transition-colors">Guest Management</a></li>
                <li><a href="/wedding-catering" className="hover:text-[#E09526] transition-colors">Wedding Catering</a></li>
                <li><a href="/dj-entertainment" className="hover:text-[#E09526] transition-colors">DJ & Entertainment</a></li>
                <li><a href="/bridal-makeup" className="hover:text-[#E09526] transition-colors">Bridal Makeup</a></li>
                <li><a href="/luxury-accommodation" className="hover:text-[#E09526] transition-colors">Luxury Accommodation</a></li>
                <li><a href="/guest-transportation" className="hover:text-[#E09526] transition-colors">Guest Transportation</a></li>
                <li><a href="/wedding-photography" className="hover:text-[#E09526] transition-colors">Wedding Photography</a></li>
                <li><a href="/wedding-videography" className="hover:text-[#E09526] transition-colors">Wedding Videography</a></li>
                <li><a href="/drone-photography" className="hover:text-[#E09526] transition-colors">Drone Photography</a></li>
              </ul>
            </div>

            {/* COLUMN 2: WEDDING PACKAGES */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-bold tracking-wider text-[#E09526] uppercase border-b border-[#E09526]/20 pb-1.5 inline-block">
                Wedding Packages
              </h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/2-day-wedding-package" className="hover:text-[#E09526] transition-colors">2 Day Wedding Package</a></li>
                <li><a href="/3-day-wedding-package" className="hover:text-[#E09526] transition-colors">3 Day Wedding Package</a></li>
                <li><a href="/luxury-wedding-package" className="hover:text-[#E09526] transition-colors">Luxury Wedding Package</a></li>
                <li><a href="/premium-wedding-package" className="hover:text-[#E09526] transition-colors">Premium Wedding Package</a></li>
                <li><a href="/budget-wedding-package" className="hover:text-[#E09526] transition-colors">Budget Wedding Package</a></li>
                <li><a href="/small-wedding-package" className="hover:text-[#E09526] transition-colors">Small Wedding Package</a></li>
                <li><a href="/large-family-wedding" className="hover:text-[#E09526] transition-colors">Large Family Wedding</a></li>
                <li><a href="/destination-wedding-package" className="hover:text-[#E09526] transition-colors">Destination Wedding Package</a></li>
                <li><a href="/temple-only-ceremony" className="hover:text-[#E09526] transition-colors">Temple Only Ceremony</a></li>
                <li><a href="/all-inclusive-package" className="hover:text-[#E09526] transition-colors">All Inclusive Package</a></li>
              </ul>
            </div>

            {/* COLUMN 3: WEDDING GUIDES (SEO GOLDMINE) */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-bold tracking-wider text-[#E09526] uppercase border-b border-[#E09526]/20 pb-1.5 inline-block">
                Wedding Guides
              </h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/how-to-plan-wedding" className="hover:text-[#E09526] transition-colors">How to Plan Wedding</a></li>
                <li><a href="/wedding-cost" className="hover:text-[#E09526] transition-colors">Wedding Cost Breakdown</a></li>
                <li><a href="/wedding-registration-guide" className="hover:text-[#E09526] transition-colors">Wedding Registration</a></li>
                <li><a href="/temple-booking-process" className="hover:text-[#E09526] transition-colors">Temple Booking Process</a></li>
                <li><a href="/guest-travel-guide" className="hover:text-[#E09526] transition-colors">Guest Travel Guide</a></li>
                <li><a href="/nearest-airport" className="hover:text-[#E09526] transition-colors">Nearest Airport Guide</a></li>
                <li><a href="/nearest-railway-station" className="hover:text-[#E09526] transition-colors">Nearest Railway Station</a></li>
                <li><a href="/best-hotels-triyuginarayan" className="hover:text-[#E09526] transition-colors">Best Hotels & Stays</a></li>
                <li><a href="/wedding-checklist" className="hover:text-[#E09526] transition-colors">Wedding Checklist</a></li>
                <li><a href="/best-time-to-marry" className="hover:text-[#E09526] transition-colors">Best Time to Marry</a></li>
                <li><a href="/documents-required" className="hover:text-[#E09526] transition-colors">Documents Required</a></li>
                <li><a href="/#faq" className="hover:text-[#E09526] transition-colors">Comprehensive FAQs</a></li>
              </ul>
            </div>

            {/* COLUMN 4: POPULAR LOCATIONS (LOCAL SEO SIGNALS) */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-bold tracking-wider text-[#E09526] uppercase border-b border-[#E09526]/20 pb-1.5 inline-block">
                Popular Locations
              </h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/#location" className="hover:text-[#E09526] transition-colors">Triyuginarayan Temple</a></li>
                <li><a href="/weddings-in-kedarnath" className="hover:text-[#E09526] transition-colors">Kedarnath Valley</a></li>
                <li><a href="/weddings-in-guptkashi" className="hover:text-[#E09526] transition-colors">Guptkashi</a></li>
                <li><a href="/weddings-in-sonprayag" className="hover:text-[#E09526] transition-colors">Sonprayag</a></li>
                <li><a href="/weddings-in-phata" className="hover:text-[#E09526] transition-colors">Phata</a></li>
                <li><a href="/weddings-in-ukhimath" className="hover:text-[#E09526] transition-colors">Ukhimath</a></li>
                <li><a href="/weddings-in-rudraprayag" className="hover:text-[#E09526] transition-colors">Rudraprayag</a></li>
                <li><a href="/weddings-in-rishikesh" className="hover:text-[#E09526] transition-colors">Rishikesh</a></li>
                <li><a href="/weddings-in-haridwar" className="hover:text-[#E09526] transition-colors">Haridwar</a></li>
                <li><a href="/weddings-in-dehradun" className="hover:text-[#E09526] transition-colors">Dehradun</a></li>
              </ul>
            </div>

            {/* COLUMN 5: COMPANY NAVIGATION */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-bold tracking-wider text-[#E09526] uppercase border-b border-[#E09526]/20 pb-1.5 inline-block">
                Company
              </h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/#about" className="hover:text-[#E09526] transition-colors">About Us</a></li>
                <li><a href="/#portfolio" className="hover:text-[#E09526] transition-colors">Gallery & Portfolio</a></li>
                <li><a href="/#testimonials" className="hover:text-[#E09526] transition-colors">Real Weddings</a></li>
                <li><a href="/#reviews" className="hover:text-[#E09526] transition-colors">Testimonials</a></li>
                <li><a href="/#pricing" className="hover:text-[#E09526] transition-colors">Pricing & Plans</a></li>
                <li><a href="/#blog" className="hover:text-[#E09526] transition-colors">Blogs & Articles</a></li>
                <li><a href="/privacy-policy" className="hover:text-[#E09526] transition-colors">Privacy Policy</a></li>
                <li><a href="/refund-policy" className="hover:text-[#E09526] transition-colors">Refund Policy</a></li>
                <li><a href="/terms-and-conditions" className="hover:text-[#E09526] transition-colors">Terms of Service</a></li>
                <li><a href="/#contact" className="hover:text-[#E09526] transition-colors">Contact Desk</a></li>
              </ul>
            </div>

          </div>

          {/* 3. TRUST BADGES ROW (CRO CONVERSION ACCELERATOR) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 py-6 border-b border-white/10 text-center">
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="font-serif text-lg font-bold text-[#E09526]">★★★★★</p>
              <p className="text-[10px] text-white/80 uppercase tracking-wide">500+ Weddings</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="font-serif text-lg font-bold text-[#E09526]">50+</p>
              <p className="text-[10px] text-white/80 uppercase tracking-wide">Professionals</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="font-serif text-lg font-bold text-[#E09526]">100%</p>
              <p className="text-[10px] text-white/80 uppercase tracking-wide">Transparent</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="font-serif text-lg font-bold text-[#E09526]">24x7</p>
              <p className="text-[10px] text-white/80 uppercase tracking-wide">Wedding Support</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <ShieldCheck className="w-5 h-5 text-[#E09526] mx-auto mb-1" />
              <p className="text-[10px] text-white/80 uppercase tracking-wide">Legal Registration</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-[#E09526] mx-auto mb-1" />
              <p className="text-[10px] text-white/80 uppercase tracking-wide">Verified Vendors</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <Award className="w-5 h-5 text-[#E09526] mx-auto mb-1" />
              <p className="text-[10px] text-white/80 uppercase tracking-wide">Trusted Pandits</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <Star className="w-5 h-5 text-[#E09526] mx-auto mb-1" />
              <p className="text-[10px] text-white/80 uppercase tracking-wide">Luxury Hospitality</p>
            </div>
          </div>

          {/* 4. CONTACT BLOCK & LOCAL BUSINESS GOOGLE MAP SIGNAL */}
          <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6 border-b border-white/10 scroll-mt-24">
            
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-serif text-base font-bold text-[#E09526] uppercase tracking-wider">
                Wedding Planning Office & Contact
              </h3>
              
              <div className="space-y-2 text-xs text-white/90">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E09526] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Triyuginarayan Event Services</strong>
                    Near Triyuginarayan Temple, Naala, Guptkashi, Rudraprayag, Uttarakhand, India — 246439
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E09526] shrink-0" />
                  <span><strong>Open Everyday:</strong> 7:00 AM – 10:00 PM IST</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E09526] shrink-0" />
                  <span><strong>Email:</strong> info@triyuginarayanevents.com</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="tel:+917983571384" 
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg text-xs font-bold text-white transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E09526]" /> Call Now (+91 79835 71384)
                </a>
                <a 
                  href="https://wa.me/917983571384" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 rounded-lg text-xs font-bold text-white transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Google Maps External Embedding Direct Link */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-sm font-bold text-white mb-2">Google Maps Direction Signal</h4>
                <p className="text-xs text-white/70 mb-4">
                  Planning a journey? Get precise navigation details to Triyuginarayan Temple premises directly from Google Maps.
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Triyuginarayan+Temple+Uttarakhand" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold text-[#E09526] hover:underline"
              >
                Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* 5. LONG-TAIL KEYWORD CAPTURE: FAQ QUICK LINKS */}
          <div className="space-y-3 py-4 border-b border-white/10 text-xs">
            <h4 className="font-serif text-xs font-bold text-[#E09526] uppercase tracking-wider">
              Frequently Asked Questions (Quick Access)
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/75">
              <a href="/#faq" className="hover:text-[#E09526]">How much does a wedding cost?</a>
              <a href="/temple-booking-process" className="hover:text-[#E09526]">How to book temple?</a>
              <a href="/marriage-registration" className="hover:text-[#E09526]">Is marriage legally valid?</a>
              <a href="/luxury-accommodation" className="hover:text-[#E09526]">Can you arrange accommodation?</a>
              <a href="/guest-transportation" className="hover:text-[#E09526]">Can you arrange transportation?</a>
              <a href="/wedding-photography" className="hover:text-[#E09526]">Do you provide photography?</a>
              <a href="/guest-management" className="hover:text-[#E09526]">How many guests can stay?</a>
              <a href="/#faq" className="hover:text-[#E09526]">Can foreigners marry here?</a>
            </div>
          </div>

          {/* 6. AI FRIENDLY PARAGRAPH (AEO / GEO ENGINE) */}
          <div className="bg-black/20 border border-[#E09526]/30 p-4 rounded-lg text-xs leading-relaxed text-white/85 space-y-1">
            <span className="font-bold text-[#E09526] block">AI Search Summary (AEO):</span>
            <p>
              Triyuginarayan Event Services is a professional destination wedding planning company specializing in temple weddings at Triyuginarayan Temple, Uttarakhand. Our services include complete wedding planning, pandit booking, marriage registration, accommodation, transportation, decoration, photography, videography, drone filming, catering, guest management and luxury wedding packages.
            </p>
          </div>

          {/* 7. BOTTOM COPYRIGHT & MULTI-CITY LOCAL KEYWORD FOOTPRINT */}
          <div className="pt-4 flex flex-col md:flex-row justify-between items-center text-[11px] text-white/70 gap-4 text-center md:text-left">
            <div>
              <p>© {currentYear} Triyuginarayan Event Services. All Rights Reserved.</p>
              <p className="text-white/60 mt-1">
                Luxury Destination Wedding Planner at Triyuginarayan Temple, Uttarakhand.
              </p>
              <p className="text-white/50 text-[10px] mt-0.5">
                Serving couples from Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata and worldwide.
              </p>
            </div>

            <div className="font-serif italic text-sm text-[#E09526] shrink-0">
              ॐ नमः शिवाय
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}