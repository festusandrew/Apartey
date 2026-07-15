import { useState } from "react";
import imgFrame1000005764 from "figma:asset/def178c279a68a12610bf10a83b64ea965005000.png";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "./ScrollAnimations";
import { TrendingUp, ArrowRight, Megaphone, X, Send, ChevronDown, Building2, User, Mail } from "lucide-react";
import { toast } from "sonner@2.0.3";

const AD_TYPES = [
  "Banner Ad",
  "Featured Listing",
  "Sponsored Card",
  "Newsletter Sponsorship",
  "Homepage Takeover",
];

const BUDGETS = [
  "Under €500/mo",
  "€500 – €2,000/mo",
  "€2,000 – €5,000/mo",
  "€5,000+/mo",
  "Let's discuss",
];

export function CTACards() {
  const [adFormOpen, setAdFormOpen] = useState(false);
  const [adForm, setAdForm] = useState({
    name: "",
    company: "",
    email: "",
    adType: "",
    budget: "",
    message: "",
  });
  const [adSubmitting, setAdSubmitting] = useState(false);
  const [adSubmitted, setAdSubmitted] = useState(false);

  const handleAdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adForm.name || !adForm.email || !adForm.adType) {
      toast.error("Please fill in all required fields");
      return;
    }
    setAdSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setAdSubmitting(false);
    setAdSubmitted(true);
    toast.success("Ad enquiry submitted! We'll be in touch within 24 hours.");
  };

  const resetAdForm = () => {
    setAdFormOpen(false);
    setAdSubmitted(false);
    setAdForm({ name: "", company: "", email: "", adType: "", budget: "", message: "" });
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafbfc] to-white" />

      <div className="relative max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-6">
          {/* Ad Banner Card */}
          <AnimatedSection variant="fadeLeft" className="flex-[2]">
            <motion.div
              whileHover={adFormOpen ? {} : { scale: 1.005 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[320px] md:min-h-[400px] lg:min-h-[440px] rounded-[24px] md:rounded-[32px] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#10182c]" />
              <img
                src={imgFrame1000005764}
                alt="Ad placement"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#10182c]/80 via-[#10182c]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10182c]/60 via-transparent to-transparent" />

              <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 lg:p-14 min-h-[320px] md:min-h-[400px] lg:min-h-[440px]">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-6">
                    <Megaphone className="w-3.5 h-3.5 text-[#fbff79]" />
                    <span className="font-['Mulish',sans-serif] text-white/80 text-[12px] tracking-[1px] uppercase">
                      Ad Space Available
                    </span>
                  </div>

                  <div className="max-w-[460px]">
                    <div className="font-['Montserrat',sans-serif] font-bold leading-[1.05] tracking-[-1.5px] mb-5">
                      <p className="text-white text-[36px] md:text-[52px] lg:text-[64px]">
                        Your Ad,
                      </p>
                      <p className="text-[#c85212] text-[36px] md:text-[52px] lg:text-[64px]">
                        Right Here.
                      </p>
                    </div>
                    <p className="font-['Mulish',sans-serif] text-white/60 text-[14px] md:text-[16px] leading-[1.6] tracking-[0.2px] max-w-[380px]">
                      Reach thousands of active renters, homeowners, and agents on Apartey. Premium placement, transparent pricing, zero hassle.
                    </p>
                  </div>

                  {/* Quick stats row */}
                  <div className="flex items-center gap-5 md:gap-7 mt-6">
                    <div className="flex flex-col">
                      <span className="font-['Montserrat',sans-serif] font-bold text-white text-[20px] md:text-[24px] tracking-[-0.3px] leading-none">
                        3.2M
                      </span>
                      <span className="font-['Mulish',sans-serif] text-white/40 text-[10px] md:text-[11px] tracking-[0.5px] uppercase mt-1">
                        Monthly views
                      </span>
                    </div>
                    <div className="w-px h-[30px] bg-white/10" />
                    <div className="flex flex-col">
                      <span className="font-['Montserrat',sans-serif] font-bold text-white text-[20px] md:text-[24px] tracking-[-0.3px] leading-none">
                        8.4%
                      </span>
                      <span className="font-['Mulish',sans-serif] text-white/40 text-[10px] md:text-[11px] tracking-[0.5px] uppercase mt-1">
                        Avg. CTR
                      </span>
                    </div>
                    <div className="w-px h-[30px] bg-white/10" />
                    <div className="flex flex-col">
                      <span className="font-['Montserrat',sans-serif] font-bold text-[#fbff79] text-[20px] md:text-[24px] tracking-[-0.3px] leading-none">
                        Easy
                      </span>
                      <span className="font-['Mulish',sans-serif] text-white/40 text-[10px] md:text-[11px] tracking-[0.5px] uppercase mt-1">
                        Setup
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ad Form Trigger + Expandable Form */}
                <div className="mt-6">
                  <AnimatePresence mode="wait">
                    {!adFormOpen ? (
                      <motion.button
                        key="ad-trigger"
                        onClick={() => setAdFormOpen(true)}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                        whileHover={{ gap: "14px", backgroundColor: "#c85212" }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2.5 bg-white rounded-xl px-6 py-4 cursor-pointer w-fit group/btn transition-colors duration-300"
                      >
                        <Megaphone className="w-5 h-5 text-[#10182c] group-hover/btn:text-white transition-colors" />
                        <span className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[16px] md:text-[18px] leading-[1.02] group-hover/btn:text-white transition-colors tracking-[0.2px]">
                          Place Your Ad
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#10182c] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                      </motion.button>
                    ) : (
                      <motion.div
                        key="ad-form"
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.96, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-5 md:p-6 max-w-[520px]"
                      >
                        {/* Form header */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#c85212]/20 flex items-center justify-center">
                              <Megaphone className="w-4 h-4 text-[#c85212]" />
                            </div>
                            <div>
                              <h4 className="font-['Montserrat',sans-serif] font-bold text-white text-[16px] tracking-[-0.2px] leading-tight">
                                Ad Enquiry
                              </h4>
                              <p className="font-['Mulish',sans-serif] text-white/40 text-[11px] tracking-[0.2px]">
                                We'll get back within 24 hours
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={resetAdForm}
                            className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center cursor-pointer transition-colors"
                          >
                            <X className="w-4 h-4 text-white/60" />
                          </button>
                        </div>

                        <AnimatePresence mode="wait">
                          {adSubmitted ? (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-center py-6"
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/20 flex items-center justify-center mx-auto mb-4"
                              >
                                <Send className="w-6 h-6 text-green-400" />
                              </motion.div>
                              <p className="font-['Montserrat',sans-serif] font-bold text-white text-[18px] tracking-[-0.3px] mb-1.5">
                                Enquiry Sent!
                              </p>
                              <p className="font-['Mulish',sans-serif] text-white/50 text-[13px] tracking-[0.1px] leading-[1.5] mb-5">
                                Our ad team will reach out to{" "}
                                <span className="text-white/80">{adForm.email}</span> shortly.
                              </p>
                              <button
                                onClick={resetAdForm}
                                className="font-['Mulish',sans-serif] font-bold text-[#c85212] text-[13px] hover:text-[#e8863a] transition-colors cursor-pointer"
                              >
                                Close
                              </button>
                            </motion.div>
                          ) : (
                            <motion.form
                              key="fields"
                              onSubmit={handleAdSubmit}
                              initial={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex flex-col gap-3"
                            >
                              {/* Name + Company row */}
                              <div className="flex gap-2.5">
                                <div className="flex-1">
                                  <label className="block font-['Mulish',sans-serif] font-bold text-white/50 text-[11px] tracking-[0.4px] uppercase mb-1.5">
                                    Full Name <span className="text-[#c85212]">*</span>
                                  </label>
                                  <div className="flex items-center bg-white/[0.06] border border-white/[0.1] rounded-lg hover:border-white/[0.18] focus-within:border-[#c85212] focus-within:bg-white/[0.08] transition-all">
                                    <User className="w-3.5 h-3.5 text-white/30 ml-3 shrink-0" />
                                    <input
                                      type="text"
                                      value={adForm.name}
                                      onChange={(e) => setAdForm({ ...adForm, name: e.target.value })}
                                      placeholder="John Doe"
                                      className="w-full bg-transparent border-none outline-none font-['Mulish',sans-serif] text-white text-[13px] tracking-[0.1px] placeholder:text-white/25 px-2.5 py-2.5"
                                    />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <label className="block font-['Mulish',sans-serif] font-bold text-white/50 text-[11px] tracking-[0.4px] uppercase mb-1.5">
                                    Company
                                  </label>
                                  <div className="flex items-center bg-white/[0.06] border border-white/[0.1] rounded-lg hover:border-white/[0.18] focus-within:border-[#c85212] focus-within:bg-white/[0.08] transition-all">
                                    <Building2 className="w-3.5 h-3.5 text-white/30 ml-3 shrink-0" />
                                    <input
                                      type="text"
                                      value={adForm.company}
                                      onChange={(e) => setAdForm({ ...adForm, company: e.target.value })}
                                      placeholder="Company name"
                                      className="w-full bg-transparent border-none outline-none font-['Mulish',sans-serif] text-white text-[13px] tracking-[0.1px] placeholder:text-white/25 px-2.5 py-2.5"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Email */}
                              <div>
                                <label className="block font-['Mulish',sans-serif] font-bold text-white/50 text-[11px] tracking-[0.4px] uppercase mb-1.5">
                                  Email <span className="text-[#c85212]">*</span>
                                </label>
                                <div className="flex items-center bg-white/[0.06] border border-white/[0.1] rounded-lg hover:border-white/[0.18] focus-within:border-[#c85212] focus-within:bg-white/[0.08] transition-all">
                                  <Mail className="w-3.5 h-3.5 text-white/30 ml-3 shrink-0" />
                                  <input
                                    type="email"
                                    value={adForm.email}
                                    onChange={(e) => setAdForm({ ...adForm, email: e.target.value })}
                                    placeholder="you@company.com"
                                    className="w-full bg-transparent border-none outline-none font-['Mulish',sans-serif] text-white text-[13px] tracking-[0.1px] placeholder:text-white/25 px-2.5 py-2.5"
                                  />
                                </div>
                              </div>

                              {/* Ad Type + Budget row */}
                              <div className="flex gap-2.5">
                                <div className="flex-1">
                                  <label className="block font-['Mulish',sans-serif] font-bold text-white/50 text-[11px] tracking-[0.4px] uppercase mb-1.5">
                                    Ad Type <span className="text-[#c85212]">*</span>
                                  </label>
                                  <div className="relative">
                                    <select
                                      value={adForm.adType}
                                      onChange={(e) => setAdForm({ ...adForm, adType: e.target.value })}
                                      className="w-full appearance-none bg-white/[0.06] border border-white/[0.1] rounded-lg hover:border-white/[0.18] focus:border-[#c85212] focus:bg-white/[0.08] outline-none font-['Mulish',sans-serif] text-white text-[13px] tracking-[0.1px] pl-3 pr-8 py-2.5 cursor-pointer transition-all"
                                      style={{ colorScheme: "dark" }}
                                    >
                                      <option value="" className="bg-[#10182c] text-white/50">Select type</option>
                                      {AD_TYPES.map((t) => (
                                        <option key={t} value={t} className="bg-[#10182c] text-white">{t}</option>
                                      ))}
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-white/30 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <label className="block font-['Mulish',sans-serif] font-bold text-white/50 text-[11px] tracking-[0.4px] uppercase mb-1.5">
                                    Budget
                                  </label>
                                  <div className="relative">
                                    <select
                                      value={adForm.budget}
                                      onChange={(e) => setAdForm({ ...adForm, budget: e.target.value })}
                                      className="w-full appearance-none bg-white/[0.06] border border-white/[0.1] rounded-lg hover:border-white/[0.18] focus:border-[#c85212] focus:bg-white/[0.08] outline-none font-['Mulish',sans-serif] text-white text-[13px] tracking-[0.1px] pl-3 pr-8 py-2.5 cursor-pointer transition-all"
                                      style={{ colorScheme: "dark" }}
                                    >
                                      <option value="" className="bg-[#10182c] text-white/50">Select budget</option>
                                      {BUDGETS.map((b) => (
                                        <option key={b} value={b} className="bg-[#10182c] text-white">{b}</option>
                                      ))}
                                    </select>
                                    <ChevronDown className="w-3.5 h-3.5 text-white/30 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                  </div>
                                </div>
                              </div>

                              {/* Message */}
                              <div>
                                <label className="block font-['Mulish',sans-serif] font-bold text-white/50 text-[11px] tracking-[0.4px] uppercase mb-1.5">
                                  Message
                                </label>
                                <textarea
                                  value={adForm.message}
                                  onChange={(e) => setAdForm({ ...adForm, message: e.target.value })}
                                  placeholder="Tell us about your campaign goals..."
                                  rows={2}
                                  className="w-full bg-white/[0.06] border border-white/[0.1] rounded-lg hover:border-white/[0.18] focus:border-[#c85212] focus:bg-white/[0.08] outline-none font-['Mulish',sans-serif] text-white text-[13px] tracking-[0.1px] placeholder:text-white/25 px-3 py-2.5 resize-none transition-all"
                                />
                              </div>

                              {/* Submit */}
                              <motion.button
                                type="submit"
                                disabled={adSubmitting}
                                whileHover={adSubmitting ? {} : { scale: 1.01, boxShadow: "0 4px 24px rgba(200,82,18,0.3)" }}
                                whileTap={adSubmitting ? {} : { scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[#c85212] to-[#d4621f] hover:from-[#b84a10] hover:to-[#c85212] disabled:opacity-60 text-white font-['Mulish',sans-serif] font-bold text-[14px] tracking-[0.3px] py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_2px_16px_rgba(200,82,18,0.25)] mt-1"
                              >
                                {adSubmitting ? (
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                  />
                                ) : (
                                  <>
                                    <Send className="w-4 h-4" />
                                    Submit Ad Enquiry
                                  </>
                                )}
                              </motion.button>

                              <p className="font-['Mulish',sans-serif] text-white/25 text-[11px] tracking-[0.2px] text-center mt-0.5">
                                No commitment required. We'll prepare a custom proposal.
                              </p>
                            </motion.form>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Selling? Card */}
          <AnimatedSection variant="fadeRight" delay={0.15} className="flex-1">
            <div className="relative min-h-[320px] md:min-h-[400px] lg:min-h-[440px] bg-[#fbff79] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col justify-between p-8 md:p-10 lg:p-12 group hover:bg-[#f8ff60] transition-colors duration-500">
              {/* Decorative elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.08, 0.15, 0.08],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] rounded-full bg-[#c85212]"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.06, 0.12, 0.06],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-[-40px] left-[-40px] w-[180px] h-[180px] rounded-full bg-[#10182c]"
              />

              {/* Dot pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #10182c 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#10182c]/[0.08] border border-[#10182c]/[0.1] rounded-full px-4 py-2 mb-6 w-fit">
                  <span className="text-[14px]">🎁</span>
                  <span className="font-['Mulish',sans-serif] text-[#10182c]/70 text-[12px] tracking-[1px] uppercase">
                    Referral Program
                  </span>
                </div>

                <h3 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-[-0.5px] mb-4">
                  Refer & Win<br />
                  <span className="text-[#c85212]">Apartey Merch</span>
                </h3>
                <p className="font-['Mulish',sans-serif] text-[#10182c]/60 text-[14px] md:text-[16px] tracking-[0.2px] leading-[1.6] max-w-[350px]">
                  Share Apartey with friends and earn exclusive merch — premium T-shirts, tote bags, and more for every successful referral.
                </p>

                {/* Merch preview pills */}
                <div className="flex flex-wrap items-center gap-2.5 mt-8">
                  {[
                    { emoji: "👕", label: "T-Shirts" },
                    { emoji: "👜", label: "Tote Bags" },
                    { emoji: "🧢", label: "Caps" },
                    { emoji: "✨", label: "& More" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-1.5 bg-[#10182c]/[0.06] border border-[#10182c]/[0.08] rounded-full px-3.5 py-1.5"
                    >
                      <span className="text-[13px]">{item.emoji}</span>
                      <span className="font-['Mulish',sans-serif] font-bold text-[#10182c]/70 text-[12px] md:text-[13px] tracking-[0.2px]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(16,24,44,0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10 bg-[#10182c] rounded-xl w-full py-4 md:py-5 mt-6 cursor-pointer hover:bg-[#1a2540] transition-colors duration-300 group/btn"
              >
                <span className="font-['Mulish',sans-serif] font-bold text-white text-[18px] md:text-[20px] leading-[1.02] tracking-[0.2px]">
                  Start Referring
                </span>
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}