import React, { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Plane, 
  Train, 
  Hotel, 
  CheckSquare, 
  FileText, 
  HelpCircle, 
  ArrowRight,
  ShieldAlert,
  ChevronDown
} from "lucide-react";

export default function WeddingGuide() {
  const [openFaq, setOpenFaq] = useState(null);

  const guideLinks = [
    { id: "how-to-plan", label: "How to Plan Wedding" },
    { id: "cost-breakdown", label: "Wedding Cost Breakdown" },
    { id: "wedding-registration", label: "Wedding Registration" },
    { id: "temple-booking", label: "Temple Booking Process" },
    { id: "travel-guide", label: "Guest Travel Guide" },
    { id: "nearest-airport", label: "Nearest Airport Guide" },
    { id: "nearest-railway", label: "Nearest Railway Station" },
    { id: "hotels-stays", label: "Best Hotels & Stays" },
    { id: "wedding-checklist", label: "Wedding Checklist" },
    { id: "best-time", label: "Best Time to Marry" },
    { id: "documents", label: "Documents Required" },
    { id: "faqs", label: "Comprehensive FAQs" },
  ];

  const faqs = [
    {
      q: "Is Triyuginarayan Temple a good destination for a wedding?",
      a: "Yes. It is particularly suited to couples looking for a spiritual, traditional, and intimate Himalayan wedding experience."
    },
    {
      q: "Can we have a complete destination wedding at Triyuginarayan?",
      a: "Yes, wedding planning can include ceremony coordination, accommodation, transportation, décor, catering, photography, makeup, mehendi, entertainment, and guest management subject to local permissions."
    },
    {
      q: "How many guests should we invite?",
      a: "There is no universal ideal number. Smaller guest lists (30–60 guests) are generally easier to manage in a remote mountain destination where comfort and transport are priorities."
    },
    {
      q: "How far in advance should we plan?",
      a: "For a destination wedding, 3–6 months advance planning is strongly recommended so accommodation, priest slots, and transit vehicles can be confirmed."
    },
    {
      q: "Can elderly guests attend?",
      a: "Yes, but mountain travel requires additional planning. Comfortable vehicles, suitable heated accommodations, rest breaks, and gradual pacing should be arranged."
    },
    {
      q: "Can we arrange photography and videography?",
      a: "Yes. A wedding photography team can document temple rituals, candid celebrations, and cinematic Himalayan drone and mountain portraits."
    },
    {
      q: "Can we arrange mehendi, haldi and other functions?",
      a: "Yes. Pre-wedding functions such as mehendi and haldi can be hosted at scenic resort terraces and lawns prior to the temple pheras."
    },
    {
      q: "Can you arrange guest transportation?",
      a: "Yes. Centralized coordination from Dehradun/Rishikesh airport or railway stations straight to the hotel is managed end-to-end."
    },
    {
      q: "Can the wedding be customised to our budget?",
      a: "Yes. The wedding can be structured around your guest count, stay category, and preferred elements rather than rigid forced packages."
    },
    {
      q: "Is temple booking included in a wedding package?",
      a: "Temple-related permissions, priest coordination, and rituals are organized directly according to authentic temple customs."
    },
    {
      q: "What happens if the weather changes?",
      a: "Our ground team always maintains covered contingency setups and road monitoring for unpredictable mountain weather."
    },
    {
      q: "Why hire a local Triyuginarayan wedding planner?",
      a: "Local ground expertise ensures direct vendor management, authentic priest coordination, seamless high-altitude logistics, and stress-free celebrations for your family."
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FAF8F5] text-neutral-800">
      {/* Hero Banner */}
      <section className="bg-[#173828] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold">
            Uttarakhand Destination Wedding
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-200">
            Triyuginarayan Wedding Planning Guide
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed pt-2">
            Everything you need to know about planning an authentic, divine wedding at the eternal Shiva-Parvati wedding temple.
          </p>
        </div>
      </section>

      {/* Main Container with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Left Navigation (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm">
            <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-[#173828] pb-3 mb-3 border-b border-neutral-100">
              Quick Navigation
            </h3>
            <nav className="space-y-1.5 text-xs">
              {guideLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block py-1.5 px-2.5 rounded-lg text-neutral-600 hover:text-[#173828] hover:bg-amber-50/80 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Area (9 cols) */}
          <main className="lg:col-span-9 space-y-12">
            
            {/* 1. How to Plan Wedding */}
            <section id="how-to-plan" className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#173828] mb-3">
                How to Plan a Wedding at Triyuginarayan
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                Planning a wedding at Triyuginarayan Temple is about creating a meaningful destination wedding around one of India’s most revered Shiva-Parvati wedding sites. Because it is located in the Garhwal Himalayas, every element—from ritual timings to road transit—needs seamless sync.
              </p>

              <div className="space-y-4">
                {[
                  { step: "1", title: "Choose Your Wedding Date", desc: "Select a suitable date considering the mountain season, weather conditions, and guest transit comfort." },
                  { step: "2", title: "Finalise Style & Guest Count", desc: "Decide whether you want an intimate temple wedding (20–40 guests) or an extended family Himalayan celebration." },
                  { step: "3", title: "Plan Temple & Ceremony Arrangements", desc: "Coordinate priest rituals, Akhand Dhuni samagri, and temple permissions in advance." },
                  { step: "4", title: "Arrange Guest Travel & Accommodation", desc: "Book comfortable mountain resorts and schedule centralized vehicle transfers from Rishikesh/Dehradun." },
                  { step: "5", title: "Design the Wedding Experience", desc: "Plan mandap florals, varmala setup, Pahadi catering, mehendi, and cinematic drone filming." },
                  { step: "6", title: "Prepare On-Ground Timeline", desc: "Create a minute-by-minute schedule for guest movement, puja muhurat, meals, and photography." },
                  { step: "7", title: "Keep a Local Team on the Ground", desc: "A local planning team coordinates vendors and weather contingencies so families remain stress-free." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#173828] text-amber-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#173828]">{item.title}</h4>
                      <p className="text-xs text-neutral-600 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Cost Breakdown */}
            <section id="cost-breakdown" className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#173828] mb-2">
                Wedding Cost Breakdown
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                Formula: <span className="font-semibold text-neutral-800">Guest count × number of days × accommodation + travel + services = overall budget</span>.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-xl overflow-hidden">
                  <thead className="bg-[#173828] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3">Wedding Expense</th>
                      <th className="p-3">What It Can Include</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr><td className="p-3 font-semibold text-[#173828]">Temple & Ceremony</td><td className="p-3 text-neutral-600">Temple coordination, Vedic priest, puja samagri</td></tr>
                    <tr><td className="p-3 font-semibold text-[#173828]">Accommodation</td><td className="p-3 text-neutral-600">Mountain resorts, rooms with heating & amenities</td></tr>
                    <tr><td className="p-3 font-semibold text-[#173828]">Transportation</td><td className="p-3 text-neutral-600">Innova/Tempo transfers from airport/station & local transit</td></tr>
                    <tr><td className="p-3 font-semibold text-[#173828]">Food & Catering</td><td className="p-3 text-neutral-600">Authentic Pahadi feast, North Indian multi-course menus</td></tr>
                    <tr><td className="p-3 font-semibold text-[#173828]">Décor & Setup</td><td className="p-3 text-neutral-600">Fresh floral mandap, lighting, varmala stage, haldi setups</td></tr>
                    <tr><td className="p-3 font-semibold text-[#173828]">Photography & Films</td><td className="p-3 text-neutral-600">Drone shots, candid photography, cinematic wedding teaser</td></tr>
                    <tr><td className="p-3 font-semibold text-[#173828]">Bridal & Entertainment</td><td className="p-3 text-neutral-600">Bridal makeup, mehendi artists, Pahadi folk music & DJ</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Temple Booking & Registration */}
            <section id="temple-booking" className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#173828] mb-3">
                Temple Booking & Marriage Registration
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-600">
                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/70">
                  <h3 className="font-bold text-[#173828] mb-2 text-sm">Temple Booking Protocol</h3>
                  <ul className="space-y-1.5 text-xs list-disc list-inside">
                    <li>Confirm wedding date around auspicious muhurats.</li>
                    <li>Verify daily temple puja slots and priest schedule.</li>
                    <li>Avoid outdated internet rates; re-verify on ground.</li>
                    <li>Respect temple sanctum rules during photography.</li>
                  </ul>
                </div>

                <div id="wedding-registration" className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h3 className="font-bold text-[#173828] mb-2 text-sm">Legal Registration Note</h3>
                  <p className="text-xs leading-relaxed">
                    The Vedic ceremony at the temple and legal marriage registration under government authorities are distinct. Ensure you retain ceremony priest receipts and photographs for formal sub-registrar filings.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Travel, Airport & Train Transit */}
            <section id="travel-guide" className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#173828] mb-4">
                Guest Travel, Airport & Train Guide
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div id="nearest-airport" className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/60">
                  <div className="flex items-center gap-2 text-[#173828] font-bold text-sm mb-1.5">
                    <Plane className="w-4 h-4 text-amber-600" /> Nearest Airport
                  </div>
                  <p className="font-semibold text-neutral-800">Jolly Grant Airport, Dehradun (DED)</p>
                  <p className="text-neutral-600 mt-1">Direct flights from Delhi, Mumbai, Bengaluru. Followed by ~7–8 hrs road drive or helicopter transfer to Guptkashi/Phata.</p>
                </div>

                <div id="nearest-railway" className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/60">
                  <div className="flex items-center gap-2 text-[#173828] font-bold text-sm mb-1.5">
                    <Train className="w-4 h-4 text-amber-600" /> Nearest Railway Hubs
                  </div>
                  <p className="font-semibold text-neutral-800">Yog Nagari Rishikesh & Haridwar</p>
                  <p className="text-neutral-600 mt-1">Well connected by Vande Bharat and express trains. Pre-arranged Tempo Travellers recommended from here.</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-100/50 rounded-xl text-[11px] text-amber-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span><strong>Recommendation:</strong> Create designated group pickup sheets rather than individual car hires to avoid transit confusion.</span>
              </div>
            </section>

            {/* 5. Best Hotels & Stay Strategy */}
            <section id="hotels-stays" className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#173828] mb-3">
                Best Hotels & Stay Strategy
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mb-4">
                Accommodations are located around Triyuginarayan, Sonprayag, Guptkashi, and Sitapur.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                {["Bride's Family Wing", "Groom's Family Wing", "Guest Accommodation", "Vendor / Crew Base"].map((cat, i) => (
                  <div key={i} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                    <Hotel className="w-4 h-4 mx-auto text-[#173828] mb-1" />
                    <span className="font-semibold text-neutral-800">{cat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Wedding Checklist */}
            <section id="wedding-checklist" className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#173828] mb-4">
                Wedding Timeline Checklist
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h4 className="font-bold text-[#173828] mb-2 uppercase tracking-wide">3–6 Months Before</h4>
                  <ul className="space-y-1.5 text-neutral-600">
                    <li>✓ Finalise wedding date & guest count</li>
                    <li>✓ Confirm temple priests & booking</li>
                    <li>✓ Block hotel resort rooms</li>
                    <li>✓ Book photo/film & décor teams</li>
                  </ul>
                </div>

                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h4 className="font-bold text-[#173828] mb-2 uppercase tracking-wide">1–2 Months Before</h4>
                  <ul className="space-y-1.5 text-neutral-600">
                    <li>✓ Finalise catering & Pahadi menu</li>
                    <li>✓ Lock transit vehicle routes</li>
                    <li>✓ Confirm makeup & mehendi schedules</li>
                    <li>✓ Check seasonal weather forecast</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. Best Time to Marry & Documents */}
            <section id="best-time" className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#173828] mb-3">
                Best Seasons & Required Documents
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
                <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-200/60">
                  <h4 className="font-bold text-[#173828] mb-1">Spring & Autumn (April–June, Sept–Nov)</h4>
                  <p className="text-neutral-600">Clear mountain views, pleasant weather, best for outdoor lawns and photography.</p>
                </div>
                <div className="p-3.5 bg-sky-50/50 rounded-xl border border-sky-200/60">
                  <h4 className="font-bold text-[#173828] mb-1">Winter (Dec–Feb)</h4>
                  <p className="text-neutral-600">Snow-capped peaks, magical backdrop. Requires room heating and warm clothing arrangements.</p>
                </div>
              </div>

              <div id="documents">
                <h3 className="font-bold text-sm text-[#173828] mb-2">Documents to Keep Ready</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-neutral-600">
                  <span>• Aadhaar / Voter ID</span>
                  <span>• Age / Birth Certificate</span>
                  <span>• Passport Photos (x4 each)</span>
                  <span>• Witness ID Documents</span>
                  <span>• Address Proofs</span>
                  <span>• Marriage Invitation Card</span>
                </div>
              </div>
            </section>

            {/* 8. FAQs Accordion */}
            <section id="faqs" className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#173828] mb-4">
                Comprehensive FAQs
              </h2>
              <div className="space-y-2.5">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left p-4 flex justify-between items-center text-xs sm:text-sm font-semibold text-[#173828] bg-neutral-50/80 hover:bg-neutral-100 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="p-4 bg-white text-xs text-neutral-600 leading-relaxed border-t border-neutral-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom Call to Action */}
            <div className="bg-[#173828] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-amber-200">
                Plan Your Triyuginarayan Wedding With Confidence
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
                Your wedding should be remembered for the sacred rituals, family joy, and Himalayan beauty—not logistical hassles.
              </p>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow inline-flex items-center gap-2"
              >
                Plan My Triyuginarayan Wedding →
              </button>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}