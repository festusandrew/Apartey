import { useState } from "react";
import { Link } from "react-router";
import { 
  ChevronLeft, CheckCircle, Send, Sofa, Zap, Package, 
  UtensilsCrossed, Palette, Cpu, SprayCan, Flower2, Star, Eye
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";

const CATEGORIES = [
  { id: "furniture", label: "Furniture", icon: <Sofa size={16} />, emoji: "🛋️" },
  { id: "appliances", label: "Appliances", icon: <Zap size={16} />, emoji: "🔌" },
  { id: "bedding", label: "Bedding & Linen", icon: <Package size={16} />, emoji: "🛏️" },
  { id: "kitchen", label: "Kitchen & Dining", icon: <UtensilsCrossed size={16} />, emoji: "🍳" },
  { id: "decor", label: "Home Décor", icon: <Palette size={16} />, emoji: "🖼️" },
  { id: "smarthome", label: "Smart Home", icon: <Cpu size={16} />, emoji: "📱" },
  { id: "cleaning", label: "Cleaning Products", icon: <SprayCan size={16} />, emoji: "🧼" },
  { id: "garden", label: "Garden & Outdoor", icon: <Flower2 size={16} />, emoji: "🏡" },
];

const CITIES = ["Lagos Island", "Lagos Mainland", "Lekki / Ajah", "Victoria Island / Ikoyi", "Abuja", "Port Harcourt", "Ibadan", "Nationwide"];
const PRICE_RANGES = ["Under ₦5,000", "₦5,000 – ₦20,000", "₦20,000 – ₦50,000", "₦50,000 – ₦200,000", "₦200,000+", "Varies by product"];
const TIERS = [
  { id: "Starter", label: "Starter (Free)", price: "Free", badge: "Starter" },
  { id: "Growth", label: "Growth (₦25,000/mo)", price: "₦25,000/mo", badge: "Growth" },
  { id: "Pro", label: "Pro (₦75,000/mo)", price: "₦75,000/mo", badge: "Pro" }
];

export function PartnerApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    brandName: "", contactName: "", category: "", tagline: "",
    description: "", cities: [] as string[], website: "", priceRange: "", socialHandle: "",
    phone: "", whatsapp: false, email: "", tier: "", agreedToTerms: false,
  });

  const set = (k: keyof typeof form, v: unknown) => setForm(f => ({ ...f, [k]: v }));
  const toggleCity = (city: string) =>
    set("cities", form.cities.includes(city)
      ? form.cities.filter(c => c !== city)
      : [...form.cities, city]
    );

  const step1Valid = form.brandName && form.contactName && form.category;
  const step2Valid = form.description && form.cities.length > 0 && form.priceRange;
  const step3Valid = form.phone && form.tier && form.agreedToTerms;

  const currentCategory = CATEGORIES.find(c => c.id === form.category);
  const currentTier = TIERS.find(t => t.id === form.tier);

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f5f6f8] text-[#10182c] font-['Mulish',sans-serif] flex flex-col justify-between">
        <SharedNavbar />
        
        <div className="flex-1 flex items-center justify-center px-6 py-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[32px] border border-gray-250 p-8 md:p-12 max-w-[560px] w-full text-center relative z-10 shadow-xl"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={36} className="text-emerald-600" />
            </div>
            
            <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[28px] md:text-[32px] mb-4">Application Received!</h2>
            
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
              Thank you for applying. <strong className="text-[#10182c]">{form.brandName}</strong> has been submitted to our review board. We typically approve verified stores within <strong>48 hours</strong>.
            </p>
            
            <div className="bg-gray-50 border border-gray-150 rounded-[16px] p-4 text-[13px] text-gray-500 mb-8 space-y-2">
              <div>Primary Category: <span className="text-[#c85212] font-bold">{currentCategory?.label || "General"}</span></div>
              <div>Selected Tier: <span className="text-[#10182c] font-bold">{form.tier}</span></div>
              <div>Contact Phone: <span className="text-[#10182c] font-bold">{form.phone}</span></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/partners" className="flex-1 bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[14px] py-4 rounded-[14px] transition-all text-center">
                Back to Partners
              </Link>
              <Link to="/" className="flex-1 bg-gray-150 hover:bg-gray-200 text-[#10182c] font-bold text-[14px] py-4 rounded-[14px] transition-all text-center">
                Return Home
              </Link>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#10182c] font-['Mulish',sans-serif] flex flex-col justify-between">
      <div>
        <SharedNavbar />

        <div className="max-w-[1240px] mx-auto px-6 py-10">
          <Link to="/partners" className="inline-flex items-center gap-1.5 text-[#c85212] text-[13px] font-bold hover:underline mb-8">
            <ChevronLeft size={16} /> Back to Partners
          </Link>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[40px] mb-2 leading-tight">Apply as a Partner</h1>
                <p className="text-gray-500 text-[15px]">Surfaces your storefront details on Apartey and reaches buyers.</p>
              </div>

              {/* Progress Stepper */}
              <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-[20px] p-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex-1 flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-black transition-all ${
                      step > s ? "bg-emerald-500 text-white" : step === s ? "bg-[#c85212] text-white" : "bg-gray-100 text-gray-400"
                    }`}>
                      {step > s ? "✓" : s}
                    </div>
                    <span className={`text-[12px] font-bold uppercase tracking-wider hidden sm:inline ${step === s ? "text-[#10182c]" : "text-gray-400"}`}>
                      {s === 1 ? "Brand" : s === 2 ? "Product" : "Submit"}
                    </span>
                    {s < 3 && <div className={`flex-1 h-[2px] ${step > s ? "bg-emerald-500" : "bg-gray-200"}`} />}
                  </div>
                ))}
              </div>

              {/* Steps form */}
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      <div className="bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 space-y-5 shadow-sm">
                        <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[18px]">About your brand</h2>
                        
                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">Brand / Store Name *</label>
                          <input 
                            value={form.brandName} 
                            onChange={e => set("brandName", e.target.value)} 
                            placeholder="e.g. Lagos Furniture Hub" 
                            className="w-full bg-white border border-gray-200 focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/10 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none transition-all placeholder:text-gray-400" 
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">Your Full Name *</label>
                          <input 
                            value={form.contactName} 
                            onChange={e => set("contactName", e.target.value)} 
                            placeholder="e.g. Tunde Adeyemi" 
                            className="w-full bg-white border border-gray-200 focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/10 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none transition-all placeholder:text-gray-400" 
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-3 uppercase tracking-widest">Product Category *</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {CATEGORIES.map(cat => (
                              <button
                                key={cat.id}
                                type="button"
                                onClick={() => set("category", cat.id)}
                                className={`flex items-center gap-2 px-3.5 py-3.5 rounded-[14px] text-[13px] font-bold border transition-all text-left ${
                                  form.category === cat.id
                                    ? "bg-[#c85212] text-white border-[#c85212]"
                                    : "bg-white border-gray-200 text-gray-600 hover:border-[#c85212]"
                                }`}
                              >
                                {cat.icon} {cat.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">One-Line Tagline <span className="text-gray-400 font-normal">(optional)</span></label>
                          <input 
                            value={form.tagline} 
                            onChange={e => set("tagline", e.target.value)} 
                            placeholder="e.g. Premium local sofas and styling furniture" 
                            className="w-full bg-white border border-gray-200 focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/10 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none transition-all placeholder:text-gray-400" 
                            maxLength={80} 
                          />
                          <p className="text-[10px] text-gray-400 mt-1 text-right">{form.tagline.length}/80</p>
                        </div>
                      </div>

                      <button 
                        type="button" 
                        disabled={!step1Valid} 
                        onClick={() => setStep(2)} 
                        className="w-full bg-[#c85212] hover:bg-[#b0460d] disabled:opacity-40 disabled:cursor-not-allowed text-white font-extrabold text-[15px] py-4 rounded-[14px] transition-all"
                      >
                        Continue to details →
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      <div className="bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 space-y-5 shadow-sm">
                        <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[18px]">Product & coverage details</h2>
                        
                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">Brand Description *</label>
                          <textarea 
                            value={form.description} 
                            onChange={e => set("description", e.target.value)} 
                            rows={4} 
                            placeholder="Briefly describe what products/services you sell, delivery estimates..." 
                            className="w-full bg-white border border-gray-200 focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/10 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none transition-all resize-none placeholder:text-gray-400" 
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">Cities You Serve *</label>
                          <div className="flex flex-wrap gap-2">
                            {CITIES.map(city => {
                              const selected = form.cities.includes(city);
                              return (
                                <button 
                                  key={city} 
                                  type="button" 
                                  onClick={() => toggleCity(city)} 
                                  className={`px-4 py-2 rounded-full text-[12px] font-bold border transition-all ${
                                    selected 
                                      ? "bg-[#10182c] text-white border-[#10182c]" 
                                      : "bg-white border-gray-200 text-gray-600 hover:border-[#c85212]"
                                  }`}
                                >
                                  {city}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2.5 uppercase tracking-widest">Average Product Price Range *</label>
                          <div className="grid grid-cols-2 gap-2.5">
                            {PRICE_RANGES.map(p => (
                              <button 
                                key={p} 
                                type="button" 
                                onClick={() => set("priceRange", p)} 
                                className={`px-4 py-3.5 rounded-[14px] text-[13px] font-bold border transition-all text-left ${
                                  form.priceRange === p 
                                    ? "bg-[#c85212] text-white border-[#c85212]" 
                                    : "bg-white border-gray-200 text-gray-650 hover:border-[#c85212]"
                                }`}
                              >
                                {p}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">Website URL <span className="text-gray-400 font-normal">(optional)</span></label>
                          <input 
                            value={form.website} 
                            onChange={e => set("website", e.target.value)} 
                            placeholder="https://yourstore.com" 
                            className="w-full bg-white border border-gray-200 focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/10 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none transition-all placeholder:text-gray-400" 
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">Social Media Handle <span className="text-gray-400 font-normal">(optional)</span></label>
                          <input 
                            value={form.socialHandle} 
                            onChange={e => set("socialHandle", e.target.value)} 
                            placeholder="@yourstore" 
                            className="w-full bg-white border border-gray-200 focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/10 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none transition-all placeholder:text-gray-400" 
                          />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button 
                          type="button" 
                          onClick={() => setStep(1)} 
                          className="px-6 bg-white hover:bg-gray-50 border border-gray-200 text-[#10182c] font-bold text-[14px] py-4 rounded-[14px] transition-all"
                        >
                          Back
                        </button>
                        <button 
                          type="button" 
                          disabled={!step2Valid} 
                          onClick={() => setStep(3)} 
                          className="flex-1 bg-[#c85212] hover:bg-[#b0460d] disabled:opacity-40 disabled:cursor-not-allowed text-white font-extrabold text-[15px] py-4 rounded-[14px] transition-all"
                        >
                          Continue to submit →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      <div className="bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 space-y-5 shadow-sm">
                        <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[18px]">Contact & subscription tier</h2>
                        
                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">Phone Number *</label>
                          <input 
                            type="tel" 
                            value={form.phone} 
                            onChange={e => set("phone", e.target.value)} 
                            placeholder="+234 801 234 5678" 
                            className="w-full bg-white border border-gray-200 focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/10 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none transition-all placeholder:text-gray-400" 
                          />
                        </div>

                        <label className="flex items-center gap-3.5 cursor-pointer bg-gray-50 p-3 rounded-[14px] border border-gray-100">
                          <button
                            type="button"
                            onClick={() => set("whatsapp", !form.whatsapp)}
                            className={`w-10 h-6.5 rounded-full relative p-0.5 transition-all ${form.whatsapp ? "bg-emerald-500" : "bg-gray-200"}`}
                          >
                            <div className={`w-5.5 h-5.5 bg-white rounded-full transition-all ${form.whatsapp ? "translate-x-3.5" : "translate-x-0"}`} />
                          </button>
                          <span className="text-[13px] text-gray-700">Phone number is active on WhatsApp</span>
                        </label>

                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">Email Address <span className="text-gray-400 font-normal">(optional)</span></label>
                          <input 
                            type="email" 
                            value={form.email} 
                            onChange={e => set("email", e.target.value)} 
                            placeholder="hello@yourstore.com" 
                            className="w-full bg-white border border-gray-200 focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/10 rounded-[14px] px-4 py-3.5 text-[14px] focus:outline-none transition-all placeholder:text-gray-400" 
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-gray-400 mb-2.5 uppercase tracking-widest">Preferred Partner Tier *</label>
                          <div className="space-y-2">
                            {TIERS.map(t => (
                              <button 
                                key={t.id} 
                                type="button" 
                                onClick={() => set("tier", t.id)} 
                                className={`w-full px-4.5 py-4 rounded-[14px] text-[13px] font-bold border transition-all text-left ${
                                  form.tier === t.id 
                                    ? "bg-[#c85212] text-white border-[#c85212]" 
                                    : "bg-white border-gray-200 text-gray-750 hover:border-[#c85212]"
                                }`}
                              >
                                <div className="flex justify-between items-center">
                                  <span>{t.label}</span>
                                  <span className="text-[11px] font-extrabold">{t.price === "Free" ? "Free" : t.price}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <label className="flex items-start gap-3 cursor-pointer mt-4">
                          <button
                            type="button"
                            onClick={() => set("agreedToTerms", !form.agreedToTerms)}
                            className={`w-5.5 h-5.5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                              form.agreedToTerms ? "bg-[#c85212] border-[#c85212]" : "border-gray-300"
                            }`}
                          >
                            {form.agreedToTerms && <span className="text-white text-[10px]">✓</span>}
                          </button>
                          <span className="text-[12px] text-gray-505 leading-relaxed">
                            I verify that my store operates in standard guidelines and agrees to local quality standards.
                          </span>
                        </label>
                      </div>

                      <div className="flex gap-4">
                        <button 
                          type="button" 
                          onClick={() => setStep(2)} 
                          className="px-6 bg-white hover:bg-gray-50 border border-gray-200 text-[#10182c] font-bold text-[14px] py-4 rounded-[14px] transition-all"
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          disabled={!step3Valid} 
                          className="flex-1 bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[15px] py-4 rounded-[14px] transition-all flex items-center justify-center gap-2"
                        >
                          <Send size={15} /> Submit Application
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Right Column: Live Card Preview (Services Listing Box Style) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="flex items-center gap-2 text-gray-400 text-[12px] font-bold uppercase tracking-widest">
                <Eye size={14} /> Live Listing Preview
              </div>

              {/* White card layout with gray borders */}
              <div className="bg-white border border-gray-200 rounded-[28px] p-6 shadow-sm text-[#10182c] relative overflow-hidden">
                <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-black text-emerald-600 uppercase tracking-wider">Preview Active</span>
                  </div>
                  <span className="text-[10px] bg-gray-50 border border-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-bold">
                    {currentTier?.badge || "Starter"} Plan
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1 max-w-[70%]">
                      <span className="text-[11px] text-[#c85212] font-black uppercase tracking-wide">
                        {currentCategory?.emoji || "🛍️"} {currentCategory?.label || "Category"}
                      </span>
                      <h4 className="text-[17px] font-black text-[#10182c] leading-tight truncate">
                        {form.brandName || "Your Store Name"}
                      </h4>
                      <p className="text-[12px] text-gray-500 italic line-clamp-1">
                        "{form.tagline || "Your brand's punchy tagline goes here"}"
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-[11px] text-gray-400">Rating</div>
                      <div className="flex items-center gap-1 text-[#c85212] justify-end">
                        <Star size={12} className="fill-[#c85212]" />
                        <span className="text-[13px] font-black">5.0</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
                    {form.description || "Enter your store description on the left. Tell prospective renters about your items, lead times, and special offers."}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-[12px] pt-3.5 border-t border-gray-100">
                    <div>
                      <div className="text-gray-400">Coverage Cities</div>
                      <div className="font-bold text-[#10182c] mt-0.5 truncate">
                        {form.cities.length > 0 ? form.cities.join(", ") : "Select cities"}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">Avg Price</div>
                      <div className="font-bold text-[#c85212] mt-0.5">
                        {form.priceRange || "Range"}
                      </div>
                    </div>
                  </div>

                  {/* Dark navy action button matching provider mockup */}
                  <div className="pt-2">
                    <button type="button" className="w-full bg-[#10182c] hover:bg-[#1a2642] text-white font-extrabold text-[13px] py-3.5 rounded-[12px] transition-all flex items-center justify-center gap-1.5 shadow-sm">
                      Send a message <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="mt-5 text-center text-gray-400 text-[11px] leading-relaxed">
                  * Visual mockup of your business card as rendered inside listing pages.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
