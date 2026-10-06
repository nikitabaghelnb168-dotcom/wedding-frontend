import React from "react";

const features = [
  {
    title: "Complete Planning",
    desc: "End-to-end wedding-day execution & vendor management under one roof.",
  },
  {
    title: "Guest Travel & Stay",
    desc: "Comfortable hotel stays, transit, meals, and assistance across the mountains.",
  },
  {
    title: "Authentic Rituals",
    desc: "Seamless traditional rituals respecting Triyuginarayan temple customs.",
  },
  {
    title: "Scenic Venues",
    desc: "Temple courtyards, scenic terraces, and curated Himalayan settings.",
  },
  {
    title: "Décor & Mandap",
    desc: "Floral mandaps, traditional Pahadi touches, and personalized styling.",
  },
  {
    title: "Photography & Films",
    desc: "Capturing ritual highlights, candid family moments, and mountain portraits.",
  },
  {
    title: "Bridal Makeup",
    desc: "Expert mountain-ready bridal hair, makeup, and personalized styling.",
  },
  {
    title: "Mehendi Artists",
    desc: "Intricate bridal & guest mehendi designs tailored for your celebrations.",
  },
  {
    title: "Music & Folk Dance",
    desc: "Live DJ setups, Pahadi folk artists, and cultural entertainment.",
  },
  {
    title: "Ground Logistics",
    desc: "Flawless on-site movement, time schedules, and supply coordination.",
  },
  {
    title: "Catering & Cuisine",
    desc: "Authentic Pahadi delicacies and multi-cuisine North Indian catering.",
  },
  {
    title: "Temple Coordination",
    desc: "Direct coordination with priests and authorities for stress-free poojas.",
  },
];

export default function WhyUs() {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-[#FAF8F5] text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#173828] mb-2">
            Why Choose Us for Your Triyuginarayan Wedding?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            From traditional Pahadi charm and sacred rituals to complete mountain logistics, we manage every detail so you can celebrate stress-free.
          </p>
        </div>

        {/* Dense 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3.5 rounded-xl border border-neutral-200/90 shadow-sm hover:border-[#173828]/50 transition-all flex items-start gap-2.5"
            >
              <span className="text-[#173828] text-sm font-bold mt-0.5">✦</span>
              <div>
                <h3 className="text-xs font-bold text-[#173828] font-serif mb-0.5">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-600 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Banner & CTA */}
        <div className="bg-[#173828] text-white rounded-2xl p-6 text-center max-w-3xl mx-auto shadow-md">
          <h3 className="text-lg sm:text-xl font-serif font-medium mb-1">
            You enjoy the moments. We handle the details.
          </h3>
          <p className="text-neutral-300 text-xs max-w-xl mx-auto mb-4">
            Curating seamless sacred weddings in the Himalayas with complete on-ground care.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToContact}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-semibold rounded-lg text-xs transition-colors shadow-sm"
            >
              Plan Your Wedding →
            </button>
            <button
              onClick={scrollToContact}
              className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium rounded-lg text-xs transition-colors"
            >
              Get a Quote →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}