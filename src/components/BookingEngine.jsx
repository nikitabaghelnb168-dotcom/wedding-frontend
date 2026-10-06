import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Check 
} from "lucide-react";

export default function BookingEngine() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    phone: "",
    email: "",
    weddingDate: "",
    guests: "40",
    weddingDuration: "2 Nights / 3 Days",
    guestCity: "",
    servicesRequired: ["Temple Ceremony & Mandap Decor", "Accommodation & Stays"],
    budgetRange: "₹5 – 8 Lakhs",
    weddingDetails: ""
  });

  const guestOptions = ["20", "40", "60", "80", "100+"];

  const serviceOptions = [
    "Temple Ceremony & Mandap Decor",
    "Pahadi / Vedic Priest & Rituals",
    "Accommodation & Stays",
    "Photography & Cinematography",
    "Catering & Traditional Bhojan",
    "Transport & Guest Logistics"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(service);
      return {
        ...prev,
        servicesRequired: exists
          ? prev.servicesRequired.filter((s) => s !== service)
          : [...prev.servicesRequired, service]
      };
    });
  };

  const coupleDisplayName = () => {
    if (formData.brideName.trim() && formData.groomName.trim()) {
      return `${formData.brideName.trim()} & ${formData.groomName.trim()}`;
    }
    if (formData.brideName.trim()) return formData.brideName.trim();
    if (formData.groomName.trim()) return formData.groomName.trim();
    return "Aarav & Neha";
  };

  const handleNextStep = () => {
    if (!formData.brideName.trim() || !formData.groomName.trim() || !formData.weddingDate) {
      alert("Please fill in all required fields (Bride Name, Groom Name, and Wedding Date).");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      alert("Please provide your WhatsApp/Mobile number.");
      return;
    }
    if (formData.servicesRequired.length === 0) {
      alert("Please select at least one required service.");
      return;
    }
    alert("Thank you! Your custom wedding blueprint and quote will be sent within 24 hours.");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Trust Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-medium mb-3 shadow-xs">
            <span className="text-amber-500">★★★★★</span>
            <span className="font-semibold">Rated 4.9/5</span> by 150+ Himalayan Couples
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#173828] tracking-tight leading-tight mb-3">
            Start Planning Your Sacred Wedding at Triyuginarayan
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Receive a transparent, personalized wedding blueprint with priest availability, curated resort blocks, and estimated pricing in under 24 hours.
          </p>

          {/* Micro Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4 text-[11px] text-neutral-500 font-medium">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#173828]" /> Free Consultation</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#173828]" /> Proposal in 24 Hours</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#173828]" /> Transparent Pricing</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#173828]" /> Official Ground Team</span>
          </div>
        </div>

        {/* Interactive Booking Container */}
        <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Luxury Live Status Preview Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#122b1f] via-[#173828] to-[#0c1e15] p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Your Blueprint Preview
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-6">
                Curated Himalayan Sanctuary
              </h3>

              {/* Glassmorphic Summary Box */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 shadow-inner space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium">Proposal Readiness</span>
                  <span className="text-xs font-bold text-amber-300">{step === 1 ? "50%" : "100%"}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-amber-300 h-full rounded-full transition-all duration-500" 
                    style={{ width: step === 1 ? "50%" : "100%" }}
                  />
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Location:</span>
                    <span className="font-medium text-white">Triyuginarayan Temple</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Couple:</span>
                    <span className="font-medium text-amber-200 truncate max-w-[170px] text-right">
                      {coupleDisplayName()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Wedding Date:</span>
                    <span className="font-medium text-white">
                      {formData.weddingDate ? formData.weddingDate : "Tentative 2026/2027"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Scale & Duration:</span>
                    <span className="font-medium text-white">{formData.guests} Guests • {formData.weddingDuration}</span>
                  </div>
                  {formData.guestCity && (
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-300">Origin City:</span>
                      <span className="font-medium text-white">{formData.guestCity}</span>
                    </div>
                  )}
                </div>

                {/* Selected Services Counter */}
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] text-neutral-300 block mb-1">Services Included ({formData.servicesRequired.length}):</span>
                  <div className="flex flex-wrap gap-1">
                    {formData.servicesRequired.slice(0, 3).map((srv, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-[10px] bg-white/10 text-amber-300 px-2 py-0.5 rounded-md">
                        <Check className="w-2.5 h-2.5" /> {srv.split(" ")[0]}
                      </span>
                    ))}
                    {formData.servicesRequired.length > 3 && (
                      <span className="text-[10px] text-neutral-300">+{formData.servicesRequired.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-[11px] italic text-neutral-300 leading-relaxed font-serif">
                "They coordinated our entire Triyuginarayan mandap & guest stay flawlessly from Delhi. Truly heavenly experience."
              </p>
              <p className="text-[10px] uppercase tracking-wider text-amber-400/90 font-semibold mt-1">
                — Rahul & Neha (Wedding Nov 2025)
              </p>
            </div>
          </div>

          {/* Right: Custom Requirements Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-white">
            
            {/* Step Counter */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
              <span className="text-xs font-bold font-serif text-[#173828] uppercase tracking-wider">
                Step {step} of 2: {step === 1 ? "Wedding Schedule & Scale" : "Services & Contact Blueprint"}
              </span>
              <span className="text-xs font-semibold text-neutral-400">
                {step === 1 ? "50% Complete" : "Almost Done"}
              </span>
            </div>

            {step === 1 ? (
              /* Step 1: Wedding Scale & Logistics */
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-[#173828] mb-1">
                    Couple & Ceremony Timeline
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Tell us who this sacred celebration is for and your preferred timeline.
                  </p>
                </div>

                {/* Bride Name & Groom Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Bride Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="brideName"
                      value={formData.brideName}
                      onChange={handleInputChange}
                      placeholder="e.g. Neha Sharma"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173828] focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Groom Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="groomName"
                      value={formData.groomName}
                      onChange={handleInputChange}
                      placeholder="e.g. Aarav Gupta"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173828] focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Wedding Date & Wedding Duration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Wedding Date <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="weddingDate"
                        value={formData.weddingDate}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173828] focus:bg-white cursor-pointer transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Wedding Duration <span className="text-amber-600">*</span>
                    </label>
                    <select
                      name="weddingDuration"
                      value={formData.weddingDuration}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173828] focus:bg-white appearance-none cursor-pointer text-neutral-800 font-medium transition-all"
                    >
                      <option>1 Day (Ceremony Only)</option>
                      <option>1 Night / 2 Days</option>
                      <option>2 Nights / 3 Days</option>
                      <option>3 Nights / 4 Days</option>
                    </select>
                  </div>
                </div>

                {/* Guest Attendance */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Number of Guests: <span className="text-amber-700 font-bold">{formData.guests} Guests</span> <span className="text-amber-600">*</span>
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {guestOptions.map((count) => (
                      <button
                        type="button"
                        key={count}
                        onClick={() => setFormData((p) => ({ ...p, guests: count }))}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          formData.guests === count
                            ? "bg-[#173828] text-amber-300 shadow-sm border border-[#173828]"
                            : "bg-neutral-50 text-neutral-700 border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-100"
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Origin City (Optional) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Guest City of Origin <span className="text-neutral-400 font-normal">(Optional - For transport planning)</span>
                  </label>
                  <input
                    type="text"
                    name="guestCity"
                    value={formData.guestCity}
                    onChange={handleInputChange}
                    placeholder="e.g. Delhi NCR, Mumbai, Dehradun"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173828] focus:bg-white transition-all"
                  />
                </div>

                {/* Next Step */}
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full mt-2 py-3 bg-[#173828] hover:bg-[#1f4a35] text-amber-300 font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Continue to Services & Contact Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : (
              /* Step 2: Services, Budget & Contact Details */
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-[#173828] mb-1">
                    Services, Details & Proposal Delivery
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Specify what services you require and where to send your detailed quotation.
                  </p>
                </div>

                {/* Services Required (Checkboxes) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Services Required <span className="text-amber-600">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1">
                    {serviceOptions.map((service) => {
                      const isChecked = formData.servicesRequired.includes(service);
                      return (
                        <label
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                            isChecked
                              ? "bg-amber-50/70 border-amber-300 text-[#173828] font-medium"
                              : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border text-[9px] ${isChecked ? "bg-[#173828] text-amber-300 border-[#173828]" : "border-neutral-300 bg-white"}`}>
                            {isChecked && "✓"}
                          </div>
                          <span className="truncate">{service}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      WhatsApp / Mobile <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173828] focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="bride.groom@example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173828] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Budget Range (Optional) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Expected Budget Range <span className="text-neutral-400 font-normal">(Optional - For package recommendation)</span>
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173828] focus:bg-white appearance-none cursor-pointer text-neutral-800 transition-all"
                  >
                    <option>Under ₹4 Lakhs</option>
                    <option>₹4 – 6 Lakhs</option>
                    <option>₹6 – 9 Lakhs</option>
                    <option>₹9 – 14 Lakhs</option>
                    <option>₹15+ Lakhs (Luxury Experience)</option>
                  </select>
                </div>

                {/* Wedding Details & Special Requirements (Optional) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Wedding Details & Notes <span className="text-neutral-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    name="weddingDetails"
                    value={formData.weddingDetails}
                    onChange={handleInputChange}
                    placeholder="E.g., Senior citizen transit requirements, specific rituals, drone shoot preferences..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#173828] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-2/3 py-3 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Get Detailed Proposal ✦
                  </button>
                </div>
              </div>
            )}

            {/* Micro What You Receive List */}
            <div className="pt-5 mt-4 border-t border-neutral-100 text-[11px] text-neutral-500">
              <span className="font-semibold text-neutral-700 block mb-1">
                🎁 Within 24 Hours You Will Receive:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-1 gap-x-2 text-[10px]">
                <span>✓ Itemized Pricing Proposal</span>
                <span>✓ Mandap Décor Themes</span>
                <span>✓ Temple Ritual Timelines</span>
                <span>✓ Resort & Stay Inventory</span>
                <span>✓ Route & Transit Logistics</span>
                <span>✓ Dedicated Planner Call</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}