import React from 'react';
import { useParams } from 'react-router-dom';
import { Send, CheckCircle2, PhoneCall } from 'lucide-react';

const COMPREHENSIVE_SERVICES_DB = {
  // 1. Wedding Planning
  "temple-wedding-planning": {
    title: "Temple Wedding Planning & Coordination",
    heroImg: "https://images.unsplash.com/photo-1546030130-c8d905923be8?q=80&w=1600",
    sectionTitle: "Exquisite Venues & Sacred Heritage Stays",
    desc: "Bespoke destination coordination concepts that blend luxury, structural comfort, and sacred heritage craftsmanship in the serene Himalayas.",
    sideImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
    features: [
      "Vedic muhurat slot allocation management near Akhand Dhuni.",
      "High-altitude administrative permits and local access clearance.",
      "Luxury hospitality hubs selection and customized layout design.",
      "VIP logistics protocol and ground control synchronization.",
      "Comprehensive structural venue layout blueprints."
    ]
  },
  "luxury-wedding-packages": {
    title: "Curated Luxury Wedding Packages",
    heroImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600",
    sectionTitle: "All-Inclusive Himalayan Destination Experiences",
    desc: "Complete end-to-end wedding management packages designed for grand celebrations with zero stress for families.",
    sideImg: "https://images.unsplash.com/photo-1546030130-c8d905923be8?q=80&w=800",
    features: [
      "Full end-to-end event production and ground execution.",
      "Dedicated personal concierge for bride, groom, and immediate family.",
      "Exclusive venue booking and guest stay accommodations.",
      "Customized menu design and multi-cuisine catering management."
    ]
  },
  "wedding-coordinator": {
    title: "On-Site Wedding Coordination",
    heroImg: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600",
    sectionTitle: "Flawless Execution on Your Big Day",
    desc: "Professional wedding managers on-ground ensuring every ritual, guest detail, and schedule runs seamlessly.",
    sideImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
    features: [
      "Real-time timeline tracking for all rituals and functions.",
      "Vendor synchronization and stage setup management.",
      "Guest arrival, welcome protocol, and helpdesk management.",
      "Emergency backup solutions for high-altitude weather changes."
    ]
  },
  "budget-planning": {
    title: "Wedding Budget Management",
    heroImg: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1600",
    sectionTitle: "Transparent & Optimized Financial Planning",
    desc: "Get crystal-clear cost projections without hidden fees, helping you allocate budget effectively across photography, decor, and hospitality.",
    sideImg: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    features: [
      "Detailed line-item cost breakdowns for all services.",
      "Vendor negotiation and contract verification.",
      "Payment milestone tracking and expenditure reports.",
      "Cost-saving recommendations without compromising quality."
    ]
  },

  // 2. Temple Ceremony
  "pandit-services": {
    title: "Vedic Pandit & Pooja Services",
    heroImg: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1600",
    sectionTitle: "Authentic Himalayan Temple Rituals",
    desc: "Experienced Vedic Priests performing sacred Vivah Sanskar with traditional Vedic mantras near the eternal flame.",
    sideImg: "https://images.unsplash.com/photo-1546030130-c8d905923be8?q=80&w=800",
    features: [
      "Experienced Acharyas for complete Vedic ceremony execution.",
      "All essential Samagri provided for Havana and Saptapadi.",
      "Multi-lingual ritual explanations for guests and NRI couples.",
      "Prior appointment scheduling with temple priest authorities."
    ]
  },
  "marriage-registration": {
    title: "Official Marriage Registration",
    heroImg: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600",
    sectionTitle: "Hassle-Free Legal Documentation",
    desc: "Seamless legal processing to issue your official government marriage certificate right after the ceremony.",
    sideImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
    features: [
      "Complete document verification and application filing.",
      "Priority magistrate slot booking for quick processing.",
      "Affidavits, witness coordination, and translation support.",
      "Doorstep delivery of official marriage certificates."
    ]
  },
  "wedding-decoration": {
    title: "Sacred Floral & Mandap Decoration",
    heroImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600",
    sectionTitle: "Traditional Vedic Decor & Aesthetic Setup",
    desc: "Transforming mountain mandaps into sacred ethereal spaces with fresh Himalayan flowers, marigolds, and brass accents.",
    sideImg: "https://images.unsplash.com/photo-1546030130-c8d905923be8?q=80&w=800",
    features: [
      "Fresh floral mandap concepts using marigold, carnations & rose garlands.",
      "Custom temple-style entrance arches and pathway lighting.",
      "Eco-friendly traditional wooden and brass mandap structures.",
      "Custom seating arrangements for intimate guest gatherings."
    ]
  },
  "haldi-mehendi-decoration": {
    title: "Haldi & Mehendi Event Setups",
    heroImg: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600",
    sectionTitle: "Vibrant Pre-Wedding Festivities",
    desc: "Colorful, lively decor setups with traditional yellow drapes, marigold seating, and festive photo booths.",
    sideImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
    features: [
      "Custom yellow-orange marigold backdrop setups.",
      "Traditional brass urli arrangements for flower petal Haldi.",
      "Artist booking for professional Mehendi applying.",
      "Audio setup for festive folk songs and Sangeet tracks."
    ]
  },

  // 3. Photography & Films
  "wedding-photography": {
    title: "Destination Wedding Photography",
    heroImg: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600",
    sectionTitle: "High-Retention Visual Storytelling",
    desc: "Capturing raw emotions, scenic mountain backdrop portraits, and sacred rituals in high-definition cinema style.",
    sideImg: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=800",
    features: [
      "Candid & candid editorial portrait photography.",
      "Full-frame high-resolution camera gear.",
      "Professional color grading and aesthetic album design.",
      "Rapid turnaround digital photo delivery links."
    ]
  },
  "wedding-videography": {
    title: "Cinematic Wedding Films & Teasers",
    heroImg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600",
    sectionTitle: "Bespoke Storytelling & Visual Masterpieces",
    desc: "High-end wedding documentaries that capture the sound, emotion, and grand sacred ambiance of your special day.",
    sideImg: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
    features: [
      "Multi-cam cinema 4K/6K camera setups.",
      "Professional sound recording of vows and mantras.",
      "Same-day 60-second Instagram trailer edits.",
      "Full-length cinematic documentary feature film."
    ]
  },
  "drone-photography": {
    title: "Aerial Drone Photography & Videography",
    heroImg: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600",
    sectionTitle: "Breathtaking Himalayan Aerial Views",
    desc: "Ultra HD aerial coverage showing the majestic mountain peaks, temple architecture, and grand event scale.",
    sideImg: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
    features: [
      "Licensed 4K aerial drone operators.",
      "Cinematic sweeping shots of temple and mountain landscape.",
      "Live aerial feed integration options.",
      "Weather-safe high-altitude flight operations."
    ]
  },

  // 4. Guest Experience
  "guest-accommodation": {
    title: "Luxury Guest Accommodation",
    heroImg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600",
    sectionTitle: "Warm Hospitality & Heritage Comforts",
    desc: "Curated premium resorts and cozy mountain retreats equipped with modern amenities and warm hospitality.",
    sideImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
    features: [
      "Heated rooms with scenic valley and mountain views.",
      "24/7 dedicated room service and guest assistance.",
      "Group room blockings with special wedding tariffs.",
      "Welcome hampers and customized room key setups."
    ]
  },
  "guest-transportation": {
    title: "Guest Transfers & VIP Logistics",
    heroImg: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600",
    sectionTitle: "Safe & Smooth Mountain Transit",
    desc: "Fleet management for airport/railway pickups (Dehradun, Haridwar, Rishikesh) right to the temple venue.",
    sideImg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    features: [
      "Experienced mountain drivers and well-maintained SUVs/Tempo Travellers.",
      "Flight & train arrival time tracking for pickup coordination.",
      "VIP convoy arrangements for bride and groom.",
      "Luggage handling and transit refreshment kits."
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  
  // URL path se current slug extract karein
  const rawPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const currentSlug = params.serviceSlug || rawPath;

  // Matching service data, ya fallback to default
  const serviceData = COMPREHENSIVE_SERVICES_DB[currentSlug] || COMPREHENSIVE_SERVICES_DB["temple-wedding-planning"];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#173828]">
      {/* Hero Banner Section */}
      <div 
        className="relative h-[60vh] min-h-[420px] w-full bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ 
          backgroundImage: `linear-gradient(rgba(23, 56, 40, 0.75), rgba(23, 56, 40, 0.85)), url(${serviceData.heroImg})` 
        }}
      >
        <div className="max-w-4xl pt-16">
          <span className="inline-block px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest rounded-full mb-4">
            ✨ Triyuginarayan Wedding Services
          </span>
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-4 tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
          >
            {serviceData.title}
          </h1>
          <p className="text-[#F5F2EA]/90 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {serviceData.desc}
          </p>
        </div>
      </div>

      {/* Main Content Details */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Features */}
        <div className="md:col-span-7">
          <h2 
            className="text-2xl md:text-4xl font-bold text-[#173828] mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {serviceData.sectionTitle}
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            We specialize in crafting authentic, high-end wedding experiences in the divine realm of Triyuginarayan. Our local expertise combined with luxury hospitality ensures that every aspect of your celebration is effortless and unforgettable.
          </p>

          <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-4">
            Key Service Highlights
          </h3>
          <ul className="space-y-3.5 mb-10">
            {serviceData.features?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#booking" 
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#173828] text-[#D4AF37] rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#112d20] transition-all shadow-md no-underline"
            >
              <span>Get Custom Quote</span>
              <Send className="w-4 h-4" />
            </a>
            
            <a 
              href="https://wa.me/917983571384" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#173828] text-[#173828] rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#173828]/5 transition-all no-underline"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>Talk to Planner</span>
            </a>
          </div>
        </div>

        {/* Right Column: Featured Visual */}
        <div className="md:col-span-5">
          <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-[#D4AF37]/30 group">
            <img 
              src={serviceData.sideImg} 
              alt={serviceData.title} 
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173828]/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-[#F5F2EA] text-xs italic">
                “Bespoke weddings in the sacred Himalayas”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}