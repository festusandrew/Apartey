import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, Sofa, Zap, Package, UtensilsCrossed, Palette, 
  Cpu, SprayCan, Flower2, CheckCircle, Star, TrendingUp, 
  ChevronDown, Check
} from "lucide-react";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";

const CATEGORIES = [
  { id: "furniture", label: "Furniture", icon: <Sofa size={15} /> },
  { id: "appliances", label: "Appliances", icon: <Zap size={15} /> },
  { id: "bedding", label: "Bedding & Linen", icon: <Package size={15} /> },
  { id: "kitchen", label: "Kitchen & Dining", icon: <UtensilsCrossed size={15} /> },
  { id: "decor", label: "Home Décor", icon: <Palette size={15} /> },
  { id: "smarthome", label: "Smart Home", icon: <Cpu size={15} /> },
  { id: "cleaning", label: "Cleaning Products", icon: <SprayCan size={15} /> },
  { id: "garden", label: "Garden & Outdoor", icon: <Flower2 size={15} /> },
];

const FAQS = [
  {
    q: "How does Apartey match my products with users?",
    a: "We use context-based triggers. When a user views a listing, we analyze the property attributes and display relevant partners under 'Furnish this space'. For recently approved renters, we display setup packages directly in their move-in dashboard."
  },
  {
    q: "Can I change my tier or cancel at any time?",
    a: "Yes! There are no long-term contracts. You can upgrade, downgrade, or cancel your subscription directly from your partner settings dashboard at any point."
  },
  {
    q: "What metrics can I track in my analytics dashboard?",
    a: "Depending on your tier, you will track total impressions, profile clicks, external website referrals, direct contact inquiries (such as WhatsApp/phone clicks), and monthly performance metrics."
  },
  {
    q: "Are there any listing guidelines for partner stores?",
    a: "Yes, we require all products to have clear images, realistic pricing, and reliable delivery services. We review every application within 48 hours to ensure a high quality of service for our renters."
  }
];

const STATS = [
  { value: "40,000+", label: "Active Movers/Mo" },
  { value: "3", label: "Hub Cities" },
  { value: "78%", label: "Conversion Rate" },
  { value: "4.9★", label: "Partner Rating" },
];

export function PartnersPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeTab, setActiveTab] = useState("property");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const TIERS = [
    {
      name: "Starter",
      price: "Free",
      sub: "Forever free setup",
      highlight: false,
      features: [
        "Basic brand listing",
        "1 product category",
        "WhatsApp contact button",
        "Listed in partner directory",
        "Monthly impressions report",
      ],
      cta: "Start Free",
    },
    {
      name: "Growth",
      price: isAnnual ? "₦20,000" : "₦25,000",
      sub: isAnnual ? "billed annually (save 20%)" : "per month",
      highlight: true,
      features: [
        "Everything in Starter",
        "Featured placement on categories",
        "Up to 3 product categories",
        "Surfaced on property details",
        "Weekly performance analytics",
        "Partner verified badge",
      ],
      cta: "Apply for Growth",
    },
    {
      name: "Pro",
      price: isAnnual ? "₦60,000" : "₦75,000",
      sub: isAnnual ? "billed annually (save 20%)" : "per month",
      highlight: false,
      features: [
        "Everything in Growth",
        "Homepage banner placement",
        "All product categories allowed",
        "Featured newsletter spotlight",
        "Dedicated account manager",
        "Real-time analytics dashboard",
        "Priority support (24hr response)",
      ],
      cta: "Apply for Pro",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#10182c] font-['Mulish',sans-serif] overflow-x-hidden">
      <SharedNavbar activePage="Partners" />

      {/* ── HERO BANNER (DARK STYLE) ── */}
      <section className="bg-[#10182c] text-white pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c85212]/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#fbff79]/10 blur-[80px]" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#c85212]/20 border border-[#c85212]/30 text-[#fbff79] text-[11px] font-black uppercase tracking-[3px] px-4.5 py-2 rounded-full mb-8">
              ✨ BUSINESS PARTNERS
            </span>
            
            <h1 className="font-['Montserrat',sans-serif] font-black text-white text-[38px] md:text-[54px] lg:text-[62px] leading-[1.1] tracking-[-1.5px] mb-8 max-w-[850px] mx-auto">
              Put your brand in front of <span className="text-[#c85212]">active renters</span> & homeowners
            </h1>
            
            <p className="text-white/60 text-[18px] md:text-[20px] max-w-[620px] mx-auto mb-10 leading-relaxed font-medium">
              We surface your products—furniture, decor, services, or appliances—at the exact moment tenants move in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/partners/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[15px] px-8 py-4.5 rounded-[14px] transition-all hover:scale-[1.02]"
              >
                Become a Partner <ArrowRight size={16} />
              </Link>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-[15px] px-8 py-4.5 rounded-[14px] transition-all"
              >
                Pricing Tiers
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-gray-250 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x divide-gray-150">
            {STATS.map((s, idx) => (
              <div key={idx} className="text-center md:px-4">
                <div className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[28px] md:text-[34px]">{s.value}</div>
                <div className="text-gray-400 text-[12px] uppercase font-bold tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY PILLS (SERVICES STYLE) ── */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[1200px] mx-auto px-6 overflow-x-auto flex gap-3.5 scrollbar-none items-center justify-start lg:justify-center">
          <span className="text-[#10182c] text-[13px] font-black uppercase tracking-wider shrink-0 mr-2">Categories:</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className="flex items-center gap-2 bg-white border border-gray-200 hover:border-[#c85212] rounded-full px-4.5 py-2 text-[#10182c] text-[13px] font-bold shrink-0 transition-colors cursor-pointer"
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── PLACEMENTS SECTION ── */}
      <section className="py-20 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#c85212] font-black text-[12px] uppercase tracking-[3px] block">
              💡 DYNAMIC PLACEMENTS
            </span>
            <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[40px] leading-tight">
              Surfaced contextually, built for conversion
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              We present your items beautifully in active renter dashboards and property pages when users are ready to furnish.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {[
                { id: "property", title: "Property Listing Shelf", desc: "SURFACED ON LISTING PAGES" },
                { id: "dashboard", title: "Renter Dashboards", desc: "SEEN BY RECENTLY APPROVED MOVERS" },
                { id: "directory", title: "Smart Directory", desc: "ON-DEMAND PARTNER DIRECTORY SEARCH" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-4 rounded-[18px] border transition-all ${
                    activeTab === tab.id
                      ? "bg-white border-[#c85212] shadow-md"
                      : "bg-transparent border-transparent hover:bg-white hover:border-gray-200"
                  }`}
                >
                  <div className="text-[10px] font-black tracking-wider text-gray-400 mb-1">{tab.desc}</div>
                  <div className={`font-bold text-[14px] ${activeTab === tab.id ? "text-[#c85212]" : "text-[#10182c]"}`}>{tab.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right simulated preview widget */}
          <div className="lg:col-span-7 bg-[#10182c] text-white border border-white/5 rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#fbff79]/5 blur-[60px]" />
            
            <AnimatePresence mode="wait">
              {activeTab === "property" && (
                <motion.div
                  key="property"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div>
                      <h4 className="text-[18px] font-bold">Lekki Skyline Haven</h4>
                      <p className="text-white/40 text-[12px]">3 Bed Apartment • Lekki Phase 1</p>
                    </div>
                    <span className="text-[12px] bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-500/20">Active</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-[20px] p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sofa size={18} className="text-[#fbff79]" />
                        <span className="text-[14px] font-bold text-[#fbff79] uppercase tracking-wide">Furnish this space</span>
                      </div>
                      <span className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Apartey Partners</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: "Mid-Century Sofa", brand: "Lagos Furniture Hub", price: "₦350,000", rating: "4.8" },
                        { title: "Minimal Bedframe", brand: "HomeGlow Nigeria", price: "₦180,000", rating: "4.9" }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#0b0f19] border border-white/5 rounded-[14px] p-3 hover:border-[#c85212]/40 transition-colors">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[13px] font-bold text-white truncate max-w-[70%]">{item.title}</span>
                            <span className="text-[11px] text-[#fbff79] font-bold">✓ Partner</span>
                          </div>
                          <div className="text-[11px] text-white/40 mb-2">{item.brand}</div>
                          <div className="flex justify-between items-center text-[12px]">
                            <span className="font-extrabold text-white">{item.price}</span>
                            <span className="text-white/50 text-[11px]">★ {item.rating}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "dashboard" && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div>
                      <h4 className="text-[18px] font-bold">Welcome, Tunde 👋</h4>
                      <p className="text-white/40 text-[12px]">Approved mover • Move-in date: July 20th</p>
                    </div>
                    <span className="text-[12px] bg-[#c85212]/15 text-[#c85212] font-bold px-3 py-1 rounded-full border border-[#c85212]/20">Approved</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-[20px] p-5">
                    <div className="text-[#fbff79] text-[12px] font-extrabold uppercase tracking-wider mb-3">Exclusive Move-in Packages</div>
                    <div className="bg-[#0b0f19] border border-white/5 rounded-[14px] p-4 flex gap-4 items-center">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-[12px] flex items-center justify-center text-[22px]">🛋️</div>
                      <div className="flex-1">
                        <div className="text-[14px] font-bold">Full Living Room Bundle</div>
                        <div className="text-[11px] text-white/50">Curated by Lagos Furniture Hub</div>
                        <div className="text-[12px] text-[#fbff79] font-bold mt-1">Special Partner Discount Applied</div>
                      </div>
                      <button className="bg-[#c85212] hover:bg-[#b0460d] text-white text-[12px] font-bold px-4 py-2.5 rounded-[10px] transition-all">
                        Claim
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "directory" && (
                <motion.div
                  key="directory"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div>
                      <h4 className="text-[18px] font-bold">Partner Search Directory</h4>
                      <p className="text-white/40 text-[12px]">Filter verified local brands</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <input readOnly placeholder="Search furniture, decor, services..." className="flex-1 bg-white/5 border border-white/10 rounded-[12px] px-4 py-2.5 text-[13px] focus:outline-none" />
                    <button className="bg-white/10 px-4 py-2 rounded-[12px] text-[13px] font-bold">Search</button>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: "Lagos Furniture Hub", cat: "Furniture", badge: "Pro Partner", desc: "Premium sofas, cabinets & bedroom items." },
                      { name: "TechNest Smart Home", cat: "Appliances & Smart Home", badge: "Growth Partner", desc: "Automations, speakers & security setups." }
                    ].map((partner, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/5 rounded-[14px] p-3.5 flex justify-between items-center">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[13px] font-bold">{partner.name}</span>
                            <span className="text-[9px] bg-[#fbff79]/10 text-[#fbff79] px-2 py-0.5 rounded-full border border-[#fbff79]/20 font-bold">{partner.badge}</span>
                          </div>
                          <p className="text-[11px] text-white/50 mt-0.5">{partner.desc}</p>
                        </div>
                        <ChevronDown size={16} className="text-white/40" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section id="pricing" className="py-20 md:py-24 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#c85212] font-black text-[12px] uppercase tracking-[3px] block mb-3">💰 TRANSPARENT PRICING</span>
          <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[44px] mb-6">Choose a plan that fits your growth</h2>
          
          {/* Annual Toggle Switch */}
          <div className="flex items-center justify-center gap-3.5 mt-4 bg-white w-fit mx-auto px-4.5 py-2.5 rounded-full border border-gray-200">
            <span className={`text-[13px] font-bold transition-all ${!isAnnual ? "text-[#10182c]" : "text-[#10182c]/40"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-7 bg-[#c85212] rounded-full relative p-1 transition-all"
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-all ${isAnnual ? "translate-x-5" : "translate-x-0"}`} />
            </button>
            <span className={`text-[13px] font-bold transition-all flex items-center gap-1.5 ${isAnnual ? "text-[#c85212]" : "text-[#10182c]/40"}`}>
              Yearly <span className="bg-[#c85212]/15 text-[#c85212] text-[10px] px-2 py-0.5 rounded-full border border-[#c85212]/30">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1020px] mx-auto items-stretch pt-4">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-[30px] p-8 flex flex-col border transition-all ${
                tier.highlight
                  ? "bg-[#10182c] text-white border-[#10182c] shadow-2xl scale-[1.04] relative z-10"
                  : "bg-white border-gray-200 shadow-sm hover:border-gray-300"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c85212] text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className={`font-['Montserrat',sans-serif] font-bold text-[22px] mb-2 ${tier.highlight ? "text-white" : "text-[#10182c]"}`}>
                {tier.name}
              </h3>
              
              <div className="flex items-baseline gap-1 mt-2 mb-1">
                <span className={`text-[38px] md:text-[44px] font-black font-['Montserrat',sans-serif] ${tier.highlight ? "text-white" : "text-[#10182c]"}`}>
                  {tier.price}
                </span>
              </div>
              <p className={`text-[13px] mb-8 ${tier.highlight ? "text-white/50" : "text-gray-400"}`}>{tier.sub}</p>

              <ul className="space-y-4 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle size={16} className={`shrink-0 mt-0.5 ${tier.highlight ? "text-[#fbff79]" : "text-emerald-500"}`} />
                    <span className={`text-[13px] ${tier.highlight ? "text-white/80" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/partners/apply"
                className={`text-center font-extrabold text-[14px] py-4.5 rounded-[16px] transition-all ${
                  tier.highlight
                    ? "bg-[#c85212] hover:bg-[#b0460d] text-white shadow-lg"
                    : "bg-[#10182c] hover:bg-[#1a2642] text-white"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c85212] font-black text-[12px] uppercase tracking-[3px] block mb-3">❔ FAQ</span>
            <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[38px]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-250 rounded-[20px] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-all focus:outline-none"
                  >
                    <span className="font-bold text-[16px] text-[#10182c] pr-4">{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-[#c85212] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-[14px] text-gray-500 leading-relaxed border-t border-gray-150">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER MATCHING PROVIDER CARD FROM IMAGE ── */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#10182c] text-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-[60px]" />
            <div className="space-y-2 relative z-10 text-center md:text-left">
              <h3 className="font-['Montserrat',sans-serif] font-extrabold text-[22px] md:text-[26px]">Are you a brand partner?</h3>
              <p className="text-white/60 text-[14px]">Submit your store details in under 5 minutes and launch within 48 hours.</p>
            </div>
            <Link 
              to="/partners/apply" 
              className="bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[14px] px-8 py-4.5 rounded-[12px] transition-all relative z-10 shrink-0 w-full md:w-auto text-center"
            >
              List Your Brand →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
