import { useState } from "react";
import { Link } from "react-router";
import {
  ChevronLeft,
  Menu,
  X,
  Shield,
  BarChart3,
  Target,
  Users,
  Cookie,
  Check,
  ArrowRight,
  Home,
  Star,
  MessageSquare,
  Search,
} from "lucide-react";
import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import svgPaths from "../imports/svg-u114kfou8c";
import { motion, AnimatePresence } from "motion/react";
import { Footer } from "./Footer";
import { toast } from "sonner@2.0.3";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const OG_BG_IMAGE = "https://images.unsplash.com/photo-1764232165240-73be9237845f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGFlcmlhbCUyMGNpdHl8ZW58MXx8fHwxNzcyMDYxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

/* ═══════════════════════════════════════════════════════
   COOKIE CATEGORIES
   ═══════════════════════════════════════════════════════ */
interface CookieCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  required: boolean;
  cookieCount: number;
  examples: string[];
}

const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: "essential",
    icon: <Shield className="w-5 h-5" />,
    title: "Strictly Necessary",
    description:
      "These cookies are essential for the website to function properly. They enable core features such as security, session management, and accessibility. You cannot disable these cookies.",
    required: true,
    cookieCount: 4,
    examples: ["Session ID", "CSRF Token", "Auth Token", "Language Preference"],
  },
  {
    id: "analytics",
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Analytics & Performance",
    description:
      "These cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously. This helps us improve the user experience.",
    required: false,
    cookieCount: 6,
    examples: ["Google Analytics", "Hotjar", "Mixpanel", "Page Load Metrics", "Error Tracking", "A/B Test Variants"],
  },
  {
    id: "marketing",
    icon: <Target className="w-5 h-5" />,
    title: "Targeting & Advertising",
    description:
      "These cookies are used to deliver relevant advertisements to you across the web. They also help measure the effectiveness of advertising campaigns.",
    required: false,
    cookieCount: 5,
    examples: ["Facebook Pixel", "Google Ads", "LinkedIn Insight", "Retargeting Tags", "Conversion Tracking"],
  },
  {
    id: "functional",
    icon: <Users className="w-5 h-5" />,
    title: "Functional & Preferences",
    description:
      "These cookies enable enhanced functionality and personalization such as live chat, saved preferences, and region-specific content.",
    required: false,
    cookieCount: 3,
    examples: ["Chat Widget", "Region Settings", "Theme Preference"],
  },
];

/* ═══════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════ */
function CookieNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];
  return (
    <nav className="relative z-50 w-full">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 py-5 md:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative h-[48px] md:h-[56px] w-[135px] md:w-[160px] shrink-0">
            <img src={imgApartey1} alt="Apartey" className="absolute h-[321%] left-[-17%] top-[-110%] w-[131%] max-w-none" />
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((item) => (
              <Link key={item.label} to={item.href} className="font-['Mulish',sans-serif] text-white/80 text-[15px] tracking-[0.38px] hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/signin" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-['Mulish',sans-serif] text-[15px]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 21 21">
                <path d={svgPaths.p19bb1640} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71" />
                <path d={svgPaths.p26820180} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71" />
                <path d="M12.7911 10.2355H2.55864" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71" />
              </svg>
              Sign In
            </Link>
            <Link to="/signup" className="bg-white text-[#10182c] font-['Mulish',sans-serif] font-bold text-[14px] px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors">
              Sign Up
            </Link>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/80 cursor-pointer">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
              <div className="flex flex-col p-4 gap-1">
                {NAV_LINKS.map((item) => (
                  <Link key={item.label} to={item.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl font-['Mulish',sans-serif] text-[15px] text-white/80">{item.label}</Link>
                ))}
                <div className="flex gap-3 mt-3 pt-3 border-t border-white/10">
                  <Link to="/signin" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-3 text-white/80 font-['Mulish',sans-serif] text-[15px]">Sign In</Link>
                  <Link to="/signup" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-3 bg-white rounded-xl text-[#10182c] font-['Mulish',sans-serif] font-bold text-[15px]">Sign Up</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════
   TOGGLE SWITCH
   ═══════════════════════════════════════════════════════ */
function Toggle({ enabled, onChange, disabled }: { enabled: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!enabled)}
      className={`relative w-[44px] h-[24px] rounded-full transition-colors shrink-0 ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${enabled ? "bg-[#c85212]" : "bg-[#d1d5db]"}`}
    >
      <motion.div
        animate={{ x: enabled ? 20 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-sm"
      />
    </button>
  );
}

/* ═══════════════════════════════════════════════════════
   OG IMAGE PREVIEW (1200×630)
   ═══════════════════════════════════════════════════════ */
function OGImagePreview() {
  return (
    <div className="w-full max-w-[720px] mx-auto">
      <p className="font-['Mulish',sans-serif] text-[#10182c]/40 text-[12px] mb-2 text-center">Open Graph Preview — 1200 × 630</p>
      <div
        className="relative w-full overflow-hidden rounded-[12px] border border-[#e0e0e0] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
        style={{ aspectRatio: "1200 / 630" }}
      >
        {/* Background image with overlay */}
        <ImageWithFallback
          src={OG_BG_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10182c]/95 via-[#10182c]/85 to-[#10182c]/60" />

        {/* Decorative elements */}
        <div className="absolute top-[-15%] right-[-8%] w-[45%] h-[80%] border border-[rgba(200,82,18,0.15)] rounded-full opacity-50" />
        <div className="absolute top-[10%] right-[2%] w-[30%] h-[55%] border border-[rgba(251,255,121,0.08)] rounded-full opacity-40" />
        <div className="absolute bottom-[-20%] left-[-5%] w-[40%] h-[60%] bg-[#c85212] rounded-full blur-[100px] opacity-[0.08]" />

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #fff 0.6px, transparent 0)`, backgroundSize: "20px 20px" }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-[5%] md:p-[4.5%]">
          {/* Top: Logo + tagline badge */}
          <div className="flex items-start justify-between">
            <div className="relative h-[28px] md:h-[36px] w-[80px] md:w-[100px]">
              <img src={imgApartey1} alt="Apartey" className="absolute h-[321%] left-[-17%] top-[-110%] w-[131%] max-w-none" />
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-2.5 py-0.5 md:px-3 md:py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
              <span className="font-['Mulish',sans-serif] text-white/70 text-[7px] md:text-[9px] tracking-[0.4px]">Community-Powered</span>
            </div>
          </div>

          {/* Center: Main headline */}
          <div className="flex-1 flex flex-col justify-center max-w-[65%]">
            <div className="flex items-center gap-2 mb-1.5 md:mb-2">
              <div className="h-[2px] w-[20px] md:w-[30px] bg-[#c85212] rounded-full" />
              <span className="font-['Mulish',sans-serif] text-[#c85212] text-[7px] md:text-[9px] lg:text-[10px] tracking-[1.2px] uppercase">Real Estate Intelligence</span>
            </div>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-white text-[16px] md:text-[24px] lg:text-[30px] tracking-[-0.8px] leading-[1.08] mb-1.5 md:mb-2">
              Rent Smarter.<br />
              <span className="text-[#fbff79]">Live Better.</span>
            </h2>
            <p className="font-['Mulish',sans-serif] text-white/40 text-[7px] md:text-[10px] lg:text-[11px] leading-[1.5] max-w-[380px]">
              Africa's first community-powered rent intelligence platform. Real reviews, verified ratings, and transparent insights for every property.
            </p>
          </div>

          {/* Bottom: Feature pills + URL */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 md:gap-2.5">
              {[
                { icon: <Search className="w-2 h-2 md:w-2.5 md:h-2.5" />, label: "Search" },
                { icon: <Star className="w-2 h-2 md:w-2.5 md:h-2.5" />, label: "Reviews" },
                { icon: <Home className="w-2 h-2 md:w-2.5 md:h-2.5" />, label: "Listings" },
                { icon: <MessageSquare className="w-2 h-2 md:w-2.5 md:h-2.5" />, label: "Community" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1 bg-white/[0.07] border border-white/[0.08] rounded-full px-1.5 py-0.5 md:px-2 md:py-0.5">
                  <span className="text-[#c85212]">{item.icon}</span>
                  <span className="font-['Mulish',sans-serif] text-white/50 text-[6px] md:text-[8px]">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-[4px] h-[4px] rounded-full bg-[#fbff79]/50" />
              <span className="font-['Mulish',sans-serif] text-[#fbff79]/50 text-[7px] md:text-[9px] tracking-[0.3px]">apartey.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════ */
export function CookieSettingsPage() {
  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: true,
  });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const togglePreference = (id: string) => {
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const acceptAll = () => {
    setPreferences({ essential: true, analytics: true, marketing: true, functional: true });
    toast.success("All cookies accepted", { description: "Your preferences have been saved." });
  };

  const rejectOptional = () => {
    setPreferences({ essential: true, analytics: false, marketing: false, functional: false });
    toast.success("Optional cookies rejected", { description: "Only essential cookies will be used." });
  };

  const savePreferences = () => {
    toast.success("Cookie preferences saved", { description: "Your settings have been updated." });
  };

  const enabledCount = Object.values(preferences).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ───── DARK HERO ───── */}
      <section className="bg-[#10182c] relative overflow-hidden pb-12 md:pb-16">
        {/* Decorative */}
        <div className="absolute top-[60px] right-[-100px] md:right-[-40px] w-[400px] md:w-[640px] h-[400px] md:h-[640px] border border-[rgba(200,82,18,0.08)] rounded-full opacity-40" />
        <div className="absolute top-[140px] right-[0px] md:right-[80px] w-[260px] md:w-[440px] h-[260px] md:h-[440px] border border-[rgba(251,255,121,0.05)] rounded-full opacity-30" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c85212] rounded-full blur-[160px] pointer-events-none"
        />

        <CookieNavbar />

        <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 pt-6 md:pt-10">
          {/* Back */}
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-6 md:mb-8">
            <Link to="/" className="inline-flex items-center gap-1.5 font-['Mulish',sans-serif] font-bold text-white/40 text-[13px] md:text-[14px] tracking-[0.64px] hover:text-white/60 transition-colors group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-full px-4 py-1.5 mb-5">
            <Cookie className="w-3.5 h-3.5 text-[#c85212]" />
            <span className="font-['Mulish',sans-serif] text-white/50 text-[11px] md:text-[12px] tracking-[1px] uppercase">Cookie Policy</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Montserrat',sans-serif] text-white text-[28px] md:text-[42px] lg:text-[48px] tracking-[-1.5px] leading-[1.1] max-w-[600px] mb-3"
          >
            Cookie Settings
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Mulish',sans-serif] text-white/40 text-[14px] md:text-[16px] max-w-[520px] leading-[1.6]"
          >
            Manage your cookie preferences. We use cookies to provide essential functionality, analyze performance, and deliver personalized experiences.
          </motion.p>
        </div>
      </section>

      {/* ───── CONTENT ───── */}
      <main className="flex-1 bg-[#fafafa]">
        <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* LEFT: Cookie categories */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Quick actions */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[14px] border border-[#e8e8e8] p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h2 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[16px] md:text-[17px] mb-1">Quick Actions</h2>
                    <p className="font-['Mulish',sans-serif] text-[#10182c]/35 text-[12px] md:text-[13px]">
                      {enabledCount} of {COOKIE_CATEGORIES.length} categories enabled
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={rejectOptional}
                      className="px-4 py-2 border border-[#e5e7eb] rounded-[8px] font-['Mulish',sans-serif] font-bold text-[#10182c]/60 text-[13px] cursor-pointer hover:border-[#c85212]/30 transition-all"
                    >
                      Reject Optional
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={acceptAll}
                      className="px-4 py-2 bg-[#c85212] rounded-[8px] font-['Mulish',sans-serif] font-bold text-white text-[13px] cursor-pointer hover:bg-[#b04710] transition-all"
                    >
                      Accept All
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Category cards */}
              {COOKIE_CATEGORIES.map((cat, idx) => {
                const isExpanded = expandedId === cat.id;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="bg-white rounded-[14px] border border-[#e8e8e8] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden"
                  >
                    {/* Header */}
                    <div className="px-5 md:px-6 py-4 md:py-5 flex items-center gap-4">
                      <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0 ${preferences[cat.id] ? "bg-[#c85212]/10 text-[#c85212]" : "bg-[#f0f1f3] text-[#10182c]/30"} transition-colors`}>
                        {cat.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[14px] md:text-[15px]">{cat.title}</h3>
                          {cat.required && (
                            <span className="bg-[#10182c]/5 text-[#10182c]/40 font-['Mulish',sans-serif] text-[10px] tracking-[0.5px] uppercase px-2 py-0.5 rounded-[4px]">Required</span>
                          )}
                        </div>
                        <p className="font-['Mulish',sans-serif] text-[#10182c]/35 text-[12px] mt-0.5">{cat.cookieCount} cookies</p>
                      </div>
                      <Toggle
                        enabled={preferences[cat.id]}
                        onChange={() => togglePreference(cat.id)}
                        disabled={cat.required}
                      />
                    </div>

                    {/* Expandable details */}
                    <div className="px-5 md:px-6 pb-1">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : cat.id)}
                        className="w-full text-left font-['Mulish',sans-serif] text-[#c85212] text-[12px] md:text-[13px] cursor-pointer py-2 flex items-center gap-1"
                      >
                        {isExpanded ? "Hide details" : "Show details"}
                        <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronLeft className="w-3 h-3 -rotate-90" />
                        </motion.span>
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-5">
                            <p className="font-['Mulish',sans-serif] text-[#10182c]/40 text-[13px] leading-[1.7] mb-4">
                              {cat.description}
                            </p>
                            <div className="bg-[#fafafa] rounded-[8px] p-3 md:p-4">
                              <p className="font-['Mulish',sans-serif] font-bold text-[#10182c]/50 text-[11px] tracking-[0.5px] uppercase mb-2">Cookies in this category</p>
                              <div className="flex flex-wrap gap-1.5">
                                {cat.examples.map((ex) => (
                                  <span key={ex} className="bg-white border border-[#e5e7eb] text-[#10182c]/45 font-['Mulish',sans-serif] text-[11px] md:text-[12px] px-2.5 py-1 rounded-[6px]">
                                    {ex}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {/* Save button */}
              <motion.button
                whileHover={{ scale: 1.01, boxShadow: "0 6px 24px rgba(200,82,18,0.22)" }}
                whileTap={{ scale: 0.99 }}
                onClick={savePreferences}
                className="w-full bg-[#c85212] hover:bg-[#b04710] text-white font-['Mulish',sans-serif] font-bold text-[14px] md:text-[15px] tracking-[0.38px] py-3.5 rounded-[10px] cursor-pointer transition-colors flex items-center justify-center gap-2"
              >
                Save Preferences
                <Check className="w-4 h-4" />
              </motion.button>
            </div>

            {/* RIGHT: OG Image + info */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* OG Image Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-[14px] border border-[#e8e8e8] p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#c85212]" />
                  <h3 className="font-['Mulish',sans-serif] font-bold text-[#10182c]/70 text-[13px] md:text-[14px]">Apartey — Social Preview</h3>
                </div>
                <OGImagePreview />
              </motion.div>

              {/* Summary card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-[14px] border border-[#e8e8e8] p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <h3 className="font-['Mulish',sans-serif] font-bold text-[#10182c]/70 text-[14px] md:text-[15px] mb-4">Your Preferences</h3>
                <div className="flex flex-col gap-3">
                  {COOKIE_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${preferences[cat.id] ? "bg-[#4CAF50]" : "bg-[#d1d5db]"}`} />
                        <span className="font-['Mulish',sans-serif] text-[#10182c]/55 text-[13px]">{cat.title}</span>
                      </div>
                      <span className={`font-['Mulish',sans-serif] font-bold text-[12px] ${preferences[cat.id] ? "text-[#4CAF50]" : "text-[#10182c]/25"}`}>
                        {preferences[cat.id] ? "Enabled" : "Disabled"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#f0f0f0]">
                  <p className="font-['Mulish',sans-serif] text-[#10182c]/25 text-[11px] md:text-[12px] leading-[1.6]">
                    Total cookies: {COOKIE_CATEGORIES.filter((c) => preferences[c.id]).reduce((a, c) => a + c.cookieCount, 0)} active out of {COOKIE_CATEGORIES.reduce((a, c) => a + c.cookieCount, 0)} total
                  </p>
                </div>
              </motion.div>

              {/* Info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#10182c] rounded-[14px] p-5 md:p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-[100px] h-[100px] rounded-bl-full opacity-40 pointer-events-none" style={{ backgroundImage: "linear-gradient(225deg, rgba(200,82,18,0.25) 0%, transparent 100%)" }} />
                <div className="relative z-10">
                  <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[14px] md:text-[15px] mb-1">About our Cookie Policy</h4>
                  <p className="font-['Mulish',sans-serif] text-white/30 text-[12px] md:text-[13px] mb-4 leading-[1.6]">
                    We respect your privacy. Our cookies help provide a better experience, and you can change your preferences at any time.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#c85212] text-white font-['Mulish',sans-serif] font-bold text-[12px] md:text-[13px] px-4 py-2 rounded-[8px] hover:bg-[#b04710] transition-colors"
                  >
                    Questions? Contact us
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CookieSettingsPage;