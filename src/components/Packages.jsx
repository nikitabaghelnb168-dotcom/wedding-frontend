import React from "react";

const packagesData = [
  {
    id: "vedic-saumya",
    name: "Vedic Saumya",
    tagline: "INTIMATE & SPIRITUAL",
    guests: "Ideal for 20 – 30 Guests",
    price: "₹2 – ₹3.5 Lacs",
    priceSub: "+TAXES",
    popular: false,
    features: [
      {
        title: "Temple Formalities:",
        desc: "Temple trust slots, local Purohit fees, sacred wood for Akhand Dhuni & prasad.",
      },
      {
        title: "Mandap Decor:",
        desc: "Traditional yellow/orange fresh marigold floral mandap inside temple premises.",
      },
      {
        title: "Stay & Hospitality:",
        desc: "1-Night stay in verified boutique mountain homestays/guest lodges.",
      },
      {
        title: "Dining:",
        desc: "Pure vegetarian/sattvic regional Garhwali meals & continuous hot beverage setup.",
      },
      {
        title: "Logistics:",
        desc: "Coordinated pickups from Sonprayag/Guptkashi base to temple gates.",
      },
      {
        title: "Media:",
        desc: "1 Candid Photographer covering ritual pheras & couple portraits.",
      },
    ],
  },
  {
    id: "rudra-kalyan",
    name: "Rudra Kalyan",
    tagline: "LUXURY WEDDING EXPERIENCE",
    guests: "Ideal for 40 – 60 Guests",
    price: "₹4 – ₹7 Lacs",
    priceSub: "+TAXES",
    popular: true,
    features: [
      {
        title: "Vedic Rituals:",
        desc: "Senior Vedic Acharyas, elaborate havan samagri, personalized sankalp & brass thali setups.",
      },
      {
        title: "Resort & Temple Decor:",
        desc: "2-Day thematic decor (Marigold & Tuberose Haldi/Mehndi + Vedic Mandap + fairy lights).",
      },
      {
        title: "Stay & Comfort:",
        desc: "2 Nights in 3-star mountain resort/deluxe cottage rooms with 24/7 room heaters.",
      },
      {
        title: "Catering:",
        desc: "Multi-cuisine sattvic feasts, live Chaat/Garhwali food counters, bonfire kahwa stations.",
      },
      {
        title: "Transport:",
        desc: "Dedicated Innova/Tempo Travelers from Rishikesh/Dehradun Airport to venue.",
      },
      {
        title: "Media & Folk:",
        desc: "2 Photographers + 1 Cinematic Videographer, Drone coverage + traditional Dhol-Damau troupe.",
      },
    ],
  },
  {
    id: "divya-kailash",
    name: "Divya Kailash",
    tagline: "BESPOKE HIMALAYAN LUXURY",
    guests: "Ideal for 60 – 80 Guests",
    price: "₹6 – ₹10 Lacs",
    priceSub: "+TAXES",
    popular: false,
    features: [
      {
        title: "VIP Temple Access:",
        desc: "Priority ceremony coordination, private sanctum blessings & custom archival certificates.",
      },
      {
        title: "Luxury Resort Buyout:",
        desc: "2-3 Nights exclusive buyout of premier luxury Himalayan boutique resort.",
      },
      {
        title: "Couture Floral Design:",
        desc: "Premium Himalayan floral installations, vintage brass bells, ambient heat lamps & lounge setups.",
      },
      {
        title: "Gourmet Dining:",
        desc: "Curated Sattvic gourmet banquet by specialty chefs, organic farm-to-table menus.",
      },
      {
        title: "Concierge & Fleet:",
        desc: "Luxury 4x4 fleet throughout + optional Kedarnath VIP / Heli-transfer assistance.",
      },
      {
        title: "Full Production:",
        desc: "High-end cinematic wedding film team, on-site bridal makeup artist, Garhwali folk ensemble.",
      },
    ],
  },
];

const includedServices = [
  { icon: "🏛️", label: "Temple Booking" },
  { icon: "🔥", label: "Vedic Pandit" },
  { icon: "🌸", label: "Floral Decor" },
  { icon: "📷", label: "Photography" },
  { icon: "🎥", label: "Cinematic Film" },
  { icon: "🏨", label: "Luxury Resorts" },
  { icon: "🚗", label: "Guest Transfers" },
  { icon: "🍽️", label: "Royal Catering" },
  { icon: "🎵", label: "Sangeet & DJ" },
  { icon: "✨", label: "Bridal Makeup" },
  { icon: "📋", label: "Marriage Registration" },
  { icon: "🛡️", label: "24/7 Hospitality" },
];

export default function Packages() {
  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-bold mb-2">
            Himalayan Sacred Weddings
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#173828] leading-tight mb-3">
            Triyuginarayan Destination Wedding Packages
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
            Vows Before the Sacred Akhand Dhuni | Pure Vedic Traditions & Mountain Hospitality. 
            Experience effortless celebration where Lord Shiva and Goddess Parvati united with end-to-end management.
          </p>
          <div className="w-12 h-0.5 bg-amber-600/40 mx-auto mt-4" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-white border-2 border-amber-500 shadow-xl scale-[1.02] z-10"
                  : "bg-white/90 border border-neutral-200 shadow-sm hover:border-[#173828]/40 hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#173828] text-amber-400 text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Plan Title & Subtitle */}
                <div className="text-center pb-5 border-b border-neutral-100">
                  <span className="text-[10px] tracking-widest text-amber-700 font-bold uppercase mb-1 block">
                    {pkg.tagline}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#173828] mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mb-3">
                    {pkg.guests}
                  </p>

                  {/* Price */}
                  <div className="mt-2">
                    <div className="text-2xl sm:text-3xl font-bold font-serif text-[#173828]">
                      {pkg.price}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block mt-1">
                      {pkg.priceSub}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="py-6 space-y-3">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed">
                      <span className="text-amber-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>
                        <strong className="text-[#173828] font-semibold">{feat.title} </strong>
                        {feat.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                    pkg.popular
                      ? "bg-[#173828] hover:bg-[#1f4a35] text-amber-400 shadow-sm"
                      : "bg-neutral-50 hover:bg-[#173828] text-[#173828] hover:text-white border border-neutral-200"
                  }`}
                >
                  View Details & Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* End-to-End Execution Services Pill Grid */}
        <div className="pt-6 border-t border-neutral-200/80">
          <h4 className="text-center text-xs md:text-sm font-serif font-bold uppercase tracking-[0.2em] text-neutral-600 mb-6">
            End-To-End Luxury Wedding Execution Services Included
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {includedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white py-3.5 px-2 rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-amber-500/50 flex flex-col items-center justify-center text-center transition-all duration-200 group cursor-pointer"
              >
                <div className="text-lg md:text-xl text-amber-600 mb-1 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-[11px] font-medium text-[#173828] leading-tight">
                  {service.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] text-neutral-400 mt-6">
            All blueprints include 24/7 high-altitude medical support frameworks.
          </p>
        </div>

      </div>
    </section>
  );
}