import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, CheckCircle, Send, Wrench, Camera, Scale, Truck, Sparkles, Shield, Zap, Home } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";

const CATEGORIES = [
  { id: "maintenance", label: "Maintenance & Repairs", icon: <Wrench size={16} /> },
  { id: "cleaning", label: "Cleaning", icon: <Sparkles size={16} /> },
  { id: "legal", label: "Legal & Conveyancing", icon: <Scale size={16} /> },
  { id: "moving", label: "Moving & Logistics", icon: <Truck size={16} /> },
  { id: "photography", label: "Photography & Staging", icon: <Camera size={16} /> },
  { id: "security", label: "Security & Smart Home", icon: <Shield size={16} /> },
  { id: "utilities", label: "Utilities & Broadband", icon: <Zap size={16} /> },
  { id: "interior", label: "Interior Design", icon: <Home size={16} /> },
  { id: "other", label: "Other", icon: <Sparkles size={16} /> },
];

const PRICING_MODELS = ["Fixed rate", "Hourly rate", "Quote-based", "Subscription / Monthly", "Free initial consultation"];
const COVERAGE_OPTIONS = ["Lagos Island", "Lagos Mainland", "Lekki / Ajah", "Victoria Island / Ikoyi", "Abuja", "Port Harcourt", "Ibadan", "Nationwide"];

export function ListYourServicePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: "", ownerName: "", category: "", tagline: "",
    description: "", coverage: [] as string[], pricingModel: "",
    pricingNote: "", phone: "", whatsapp: false, email: "", website: "",
    certifications: "", agreedToTerms: false,
  });

  const set = (k: keyof typeof form, v: unknown) => setForm(f => ({ ...f, [k]: v }));
  const toggleCoverage = (area: string) =>
    set("coverage", form.coverage.includes(area)
      ? form.coverage.filter(a => a !== area)
      : [...form.coverage, area]
    );

  const step1Valid = form.businessName && form.ownerName && form.category;
  const step2Valid = form.description && form.coverage.length > 0 && form.pricingModel;
  const step3Valid = form.phone && form.agreedToTerms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f9fafb] font-['Mulish',sans-serif] flex flex-col">
        <SharedNavbar />
        <div className="flex-1 flex items-center justify-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[24px] shadow-lg border border-gray-100 p-10 max-w-[520px] w-full text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={30} className="text-green-500" />
            </div>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] mb-2">Submission received!</h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-2">
              <strong>{form.businessName}</strong> has been submitted for review. Our team will verify your details and publish your listing within <strong>24–48 hours</strong>.
            </p>
            <p className="text-gray-400 text-[13px] mb-8">We'll notify you at <strong>{form.email || form.phone}</strong> once you're live.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/services" className="flex-1 bg-[#10182c] hover:bg-[#1a2642] text-white font-bold text-[14px] py-3 rounded-[12px] transition-colors text-center">
                Browse Services
              </Link>
              <Link to="/" className="flex-1 border border-gray-200 hover:bg-gray-50 text-[#10182c] font-bold text-[14px] py-3 rounded-[12px] transition-colors text-center">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] font-['Mulish',sans-serif]">
      <SharedNavbar />

      <div className="max-w-[720px] mx-auto px-4 py-10">
        {/* Back */}
        <Link to="/services" className="inline-flex items-center gap-1.5 text-[#c85212] text-[13px] font-medium hover:underline mb-6">
          <ChevronLeft size={15} /> Back to Services
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[30px] mb-2">List Your Service</h1>
          <p className="text-gray-500 text-[15px]">Fill in the form below. Your listing goes live after a quick review — usually within 24 hours.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold transition-colors ${
                step > s ? "bg-green-500 text-white" : step === s ? "bg-[#c85212] text-white" : "bg-gray-200 text-gray-400"
              }`}>
                {step > s ? <CheckCircle size={16} /> : s}
              </div>
              <span className={`text-[13px] font-medium ${step === s ? "text-[#10182c]" : "text-gray-400"}`}>
                {s === 1 ? "Business Info" : s === 2 ? "Service Details" : "Contact & Submit"}
              </span>
              {s < 3 && <div className={`flex-1 h-px w-8 ${step > s ? "bg-green-500" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {/* Step 1 — Business Info */}
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 space-y-4">
                  <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[17px]">About your business</h2>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Business / Trading name <span className="text-red-400">*</span></label>
                    <input value={form.businessName} onChange={e => set("businessName", e.target.value)} placeholder="e.g. FastFix Plumbing" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Your full name <span className="text-red-400">*</span></label>
                    <input value={form.ownerName} onChange={e => set("ownerName", e.target.value)} placeholder="e.g. Chidi Okafor" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Service category <span className="text-red-400">*</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => set("category", cat.id)}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-[10px] text-[13px] font-medium border transition-colors text-left ${
                            form.category === cat.id
                              ? "bg-[#10182c] text-white border-[#10182c]"
                              : "bg-white border-gray-200 text-gray-600 hover:border-[#c85212]/40"
                          }`}
                        >
                          {cat.icon} {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">One-line tagline</label>
                    <input value={form.tagline} onChange={e => set("tagline", e.target.value)} placeholder="e.g. Emergency plumbing available 24/7 across Lagos" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" maxLength={80} />
                    <p className="text-[11px] text-gray-400 mt-1 text-right">{form.tagline.length}/80</p>
                  </div>
                </div>
                <button type="button" disabled={!step1Valid} onClick={() => setStep(2)} className="w-full bg-[#c85212] hover:bg-[#a6430f] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-[14px] py-3.5 rounded-[12px] transition-colors">
                  Continue →
                </button>
              </motion.div>
            )}

            {/* Step 2 — Service Details */}
            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 space-y-4">
                  <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[17px]">Service details</h2>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Description <span className="text-red-400">*</span></label>
                    <textarea value={form.description} onChange={e => set("description", e.target.value)} rows={4} placeholder="Describe what you offer, your experience, and what makes you stand out..." className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all resize-none" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Coverage area <span className="text-red-400">*</span> <span className="text-gray-400 font-normal normal-case">(select all that apply)</span></label>
                    <div className="flex flex-wrap gap-2">
                      {COVERAGE_OPTIONS.map(area => (
                        <button key={area} type="button" onClick={() => toggleCoverage(area)} className={`px-3 py-1.5 rounded-full text-[12px] font-bold border transition-colors ${form.coverage.includes(area) ? "bg-[#10182c] text-white border-[#10182c]" : "bg-white border-gray-200 text-gray-600 hover:border-[#c85212]/40"}`}>
                          {area}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Pricing model <span className="text-red-400">*</span></label>
                    <div className="grid grid-cols-2 gap-2">
                      {PRICING_MODELS.map(p => (
                        <button key={p} type="button" onClick={() => set("pricingModel", p)} className={`px-3 py-2.5 rounded-[10px] text-[13px] font-medium border transition-colors text-left ${form.pricingModel === p ? "bg-[#10182c] text-white border-[#10182c]" : "border-gray-200 text-gray-600 hover:border-[#c85212]/40"}`}>
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Pricing note <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                    <input value={form.pricingNote} onChange={e => set("pricingNote", e.target.value)} placeholder="e.g. ₦15,000 callout, ₦5,000/hr thereafter" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Certifications / licences <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                    <input value={form.certifications} onChange={e => set("certifications", e.target.value)} placeholder="e.g. COREN certified, CAC registered" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="px-6 border border-gray-200 text-[#10182c] font-bold text-[14px] py-3.5 rounded-[12px] hover:bg-gray-50 transition-colors">← Back</button>
                  <button type="button" disabled={!step2Valid} onClick={() => setStep(3)} className="flex-1 bg-[#c85212] hover:bg-[#a6430f] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-[14px] py-3.5 rounded-[12px] transition-colors">Continue →</button>
                </div>
              </motion.div>
            )}

            {/* Step 3 — Contact & Submit */}
            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 space-y-4">
                  <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[17px]">How customers reach you</h2>
                  <p className="text-gray-500 text-[13px]">Customers contact you directly — no platform middleman. Add whichever channels you prefer.</p>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Phone number <span className="text-red-400">*</span></label>
                    <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+234 801 234 5678" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div onClick={() => set("whatsapp", !form.whatsapp)} className={`w-10 h-6 rounded-full transition-colors relative ${form.whatsapp ? "bg-green-500" : "bg-gray-200"}`}>
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${form.whatsapp ? "left-[18px]" : "left-0.5"}`} />
                    </div>
                    <span className="text-[14px] text-[#10182c]">This number is also on WhatsApp</span>
                  </label>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Email address <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                    <input type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="hello@yourbusiness.com" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#10182c] mb-1.5 uppercase tracking-wide">Website / social media <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                    <input value={form.website} onChange={e => set("website", e.target.value)} placeholder="https:// or @handle" className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all" />
                  </div>

                  {/* Summary */}
                  <div className="bg-[#f5f6f8] rounded-[14px] p-4 space-y-2 border border-gray-100">
                    <p className="text-[12px] font-bold text-[#10182c] uppercase tracking-wide mb-3">Your listing summary</p>
                    {[
                      ["Business", form.businessName],
                      ["Category", CATEGORIES.find(c => c.id === form.category)?.label || "—"],
                      ["Coverage", form.coverage.join(", ") || "—"],
                      ["Pricing", form.pricingModel || "—"],
                    ].map(([l, v]) => (
                      <div key={l} className="flex justify-between text-[13px]">
                        <span className="text-gray-400">{l}</span>
                        <span className="text-[#10182c] font-medium text-right max-w-[60%] truncate">{v}</span>
                      </div>
                    ))}
                  </div>

                  {/* Terms */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div onClick={() => set("agreedToTerms", !form.agreedToTerms)} className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${form.agreedToTerms ? "bg-[#c85212] border-[#c85212]" : "border-gray-300"}`}>
                      {form.agreedToTerms && <CheckCircle size={12} className="text-white" />}
                    </div>
                    <span className="text-[13px] text-gray-600 leading-relaxed">
                      I confirm this information is accurate and I agree to Apartey's <Link to="/cookies" className="text-[#c85212] hover:underline">service listing guidelines</Link>. I understand my listing will be reviewed before going live.
                    </span>
                  </label>
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="px-6 border border-gray-200 text-[#10182c] font-bold text-[14px] py-3.5 rounded-[12px] hover:bg-gray-50 transition-colors">← Back</button>
                  <button type="submit" disabled={!step3Valid} className="flex-1 bg-[#c85212] hover:bg-[#a6430f] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-[14px] py-3.5 rounded-[12px] transition-colors flex items-center justify-center gap-2">
                    <Send size={15} /> Submit for Review
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      <Footer />
    </div>
  );
}
