import { useState } from "react";
import { Link } from "react-router";
import {
  Phone,
  Mail,
  MessageCircle,
  BookOpen,
  Users,
  ChevronRight,
  ChevronDown,
  Send,
  CheckCircle,
  Menu,
  X,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import svgPaths from "../imports/svg-u114kfou8c";
import contactSvgPaths from "../imports/svg-pekeildcc9";
import { motion, AnimatePresence } from "motion/react";
import { SharedNavbar } from "./SharedNavbar";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import { Footer } from "./Footer";
import { toast } from "sonner@2.0.3";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/* ═══════════════════════════════════════════════════════
   CUSTOM SVG ICONS FROM FIGMA
   ═══════════════════════════════════════════════════════ */
function PhoneSvgIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <path d={contactSvgPaths.p375d9e80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function GlobeSvgIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 64 64">
      <path d={contactSvgPaths.p455bc00} fill="currentColor" fillOpacity="0.15" />
      <path d={contactSvgPaths.p3f263000} fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

function ChatSvgIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 39 30">
      <path d={contactSvgPaths.p12d16c70} fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   CONTACT INFO CARDS DATA
   ═══════════════════════════════════════════════════════ */
const CONTACT_CARDS = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    accentColor: "#c85212",
    title: "Help Centre",
    description: "Check out Apartey's helpful blog articles for answers and tips on renting, buying, and selling.",
    linkText: "Visit Blog",
    linkHref: "/blog",
    stat: "50+ articles",
  },
  {
    icon: <PhoneSvgIcon />,
    accentColor: "#c85212",
    title: "Contact Support",
    description: "Contact us and we will be happy to help you!",
    contactInfo: [
      { type: "email", value: "support@apartey.com" },
      { type: "phone", value: "(234) 555-0120" },
    ],
    stat: "< 24h response",
  },
  {
    icon: <Users className="w-6 h-6" />,
    accentColor: "#10182c",
    title: "Community",
    description: "Connect with other users, ask questions, share experiences, and stay in the loop — all in a safe environment.",
    comingSoon: true,
    stat: "Coming soon",
  },
];

/* ═══════════════════════════════════════════════════════
   FAQ DATA
   ═══════════════════════════════════════════════════════ */
const FAQS = [
  {
    q: "How do I submit a review on Apartey?",
    a: "After signing up and verifying your email, navigate to the property you've lived in, click 'Write a Review,' and rate it across key categories like maintenance, safety, and value. Only verified tenants can leave reviews.",
  },
  {
    q: "Is my personal data safe on Apartey?",
    a: "Absolutely. As an EU-registered entity, we comply fully with GDPR. All personal data is encrypted in transit and at rest, and we never sell your data to third parties. You can exercise your data rights at any time.",
  },
  {
    q: "Can homeowners or agents respond to reviews?",
    a: "Yes! Property owners and agents can create verified profiles and respond to reviews publicly. This fosters transparent dialogue between tenants and property managers.",
  },
  {
    q: "What areas does Apartey currently cover?",
    a: "Apartey currently covers properties across Nigeria, with our HQ registered in Estonia. We're expanding to new regions soon — subscribe to our newsletter to be the first to know.",
  },
  {
    q: "How do I report inappropriate content?",
    a: "Every review has a 'Report' flag. Our moderation team reviews reports within 24 hours under our DSA-compliant content policy. You can also reach out to support@apartey.com directly.",
  },
];

/* ═══════════════════════════════════════════════════════
   OFFICE LOCATIONS
   ═══════════════════════════════════════════════════════ */
const OFFICES = [
  {
    flag: "🇪🇪",
    country: "Estonia",
    label: "EU Headquarters",
    address: "Tallinn, Estonia",
    timezone: "EET (UTC+2)",
  },
  {
    flag: "🇳🇬",
    country: "Nigeria",
    label: "Africa Operations",
    address: "Lagos, Nigeria",
    timezone: "WAT (UTC+1)",
  },
];

/* ═══════════════════════════════════════════════════════
   CONTACT INFO CARD (GLASSMORPHIC DARK)
   ═══════════════════════════════════════════════════════ */
function ContactInfoCard({ card, index }: { card: typeof CONTACT_CARDS[0]; index: number }) {
  const isOrange = card.accentColor === "#c85212";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] rounded-[22px] p-7 md:p-8 overflow-hidden transition-all duration-300 hover:border-[#c85212]/30 hover:shadow-[0_12px_40px_rgba(200,82,18,0.12)]"
    >
      {/* Corner gradient on hover */}
      <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(225deg, rgba(200,82,18,0.1) 0%, transparent 100%)` }} />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 0.5 }}
        className={`w-14 h-14 rounded-[16px] flex items-center justify-center mb-5 ${isOrange ? "bg-[#c85212]/15 text-[#c85212]" : "bg-white/10 text-white/70"} transition-transform duration-300 group-hover:scale-105`}
      >
        {card.icon}
      </motion.div>

      {/* Stat badge */}
      <div className="inline-flex items-center gap-1.5 bg-white/[0.06] rounded-full px-3 py-1 mb-4">
        <div className={`w-1.5 h-1.5 rounded-full ${isOrange ? "bg-[#c85212]" : "bg-white/40"}`} />
        <span className="font-['Mulish',sans-serif] text-white/40 text-[11px] tracking-[0.8px] uppercase">{card.stat}</span>
      </div>

      {/* Title */}
      <h3 className="font-['Mulish',sans-serif] font-bold text-white text-[18px] md:text-[20px] tracking-[-0.3px] mb-2 group-hover:text-[#c85212] transition-colors">
        {card.title}
      </h3>

      {/* Description */}
      <p className="font-['Mulish',sans-serif] text-white/40 text-[14px] md:text-[15px] leading-[1.65] mb-5">
        {card.description}
      </p>

      {/* Contact info / Link / Coming soon */}
      {card.contactInfo && (
        <div className="flex flex-col gap-2">
          {card.contactInfo.map((info) => (
            <a
              key={info.value}
              href={info.type === "email" ? `mailto:${info.value}` : `tel:${info.value}`}
              className="font-['Mulish',sans-serif] font-bold text-white/80 text-[14px] md:text-[15px] hover:text-[#c85212] transition-colors flex items-center gap-2.5 group/link"
            >
              {info.type === "email" ? <Mail className="w-4 h-4 text-[#c85212]" /> : <Phone className="w-4 h-4 text-[#c85212]" />}
              <span className="group-hover/link:translate-x-0.5 transition-transform">{info.value}</span>
            </a>
          ))}
        </div>
      )}

      {card.linkText && card.linkHref && (
        <Link
          to={card.linkHref}
          className="inline-flex items-center gap-1.5 font-['Mulish',sans-serif] font-bold text-[#c85212] text-[14px] md:text-[15px] group-hover:gap-3 transition-all"
        >
          {card.linkText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}

      {card.comingSoon && (
        <span className="inline-flex items-center gap-2 bg-[#fbff79]/10 border border-[#fbff79]/15 text-[#fbff79]/70 rounded-full px-4 py-2 font-['Mulish',sans-serif] text-[12px] tracking-[0.5px]">
          <Sparkles className="w-3.5 h-3.5" />
          Launching soon
        </span>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   FAQ ACCORDION ITEM
   ═══════════════════════════════════════════════════════ */
function FAQItem({ faq, index, isOpen, onToggle }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`border border-[rgba(0,0,0,0.05)] rounded-[16px] overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : "bg-white/60 hover:bg-white"}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 cursor-pointer text-left"
      >
        <span className={`font-['Mulish',sans-serif] font-bold text-[15px] md:text-[17px] tracking-[-0.2px] pr-4 transition-colors ${isOpen ? "text-[#c85212]" : "text-[#10182c]"}`}>
          {faq.q}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-[#c85212]" : "text-[#667085]"}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-7">
              <p className="font-['Mulish',sans-serif] text-[#667085] text-[14px] md:text-[15px] leading-[1.7]">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════════ */
function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) { toast.error("Please enter your full name"); return; }
    if (!formData.email.trim() || !formData.email.includes("@")) { toast.error("Please enter a valid email address"); return; }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!", { description: "We'll get back to you within 24 hours." });
      setTimeout(() => { setIsSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }, 4000);
    }, 1500);
  };

  const inputClass = (field: string) => `bg-white/[0.05] border ${focusedField === field ? "border-[#c85212]/50 ring-1 ring-[#c85212]/15" : "border-white/[0.08]"} rounded-[12px] px-5 py-4 font-['Mulish',sans-serif] text-white text-[15px] placeholder:text-white/25 outline-none transition-all duration-300`;

  return (
    <div className="relative bg-[#10182c] rounded-[24px] md:rounded-[32px] overflow-hidden">
      {/* Corner decorative */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-bl-full opacity-40 pointer-events-none" style={{ backgroundImage: "linear-gradient(225deg, rgba(200,82,18,0.12) 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-tr-full opacity-30 pointer-events-none" style={{ backgroundImage: "linear-gradient(45deg, rgba(251,255,121,0.06) 0%, transparent 100%)" }} />
      {/* Accent dots */}
      <div className="absolute top-[30%] left-[5%] w-1 h-1 rounded-full bg-[#c85212] opacity-30 hidden lg:block" />
      <div className="absolute top-[60%] right-[8%] w-1 h-1 rounded-full bg-[#fbff79] opacity-20 hidden lg:block" />

      <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
        {/* Image Side */}
        <div className="relative min-h-[280px] lg:min-h-[600px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtJTIwb2ZmaWNlJTIwZGl2ZXJzZXxlbnwxfHx8fDE3NzE4NDc0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Apartey support team"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10182c] via-[#10182c]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#10182c]/30 hidden lg:block" />

          {/* Overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#c85212] animate-pulse" />
              <span className="font-['Mulish',sans-serif] text-white/50 text-[12px] tracking-[1px] uppercase">Available now</span>
            </div>
            <h3 className="font-['Montserrat',sans-serif] text-white text-[22px] md:text-[28px] tracking-[-0.5px] leading-[1.2] mb-2">
              We'd love to hear from you
            </h3>
            <p className="font-['Mulish',sans-serif] text-white/40 text-[14px] leading-[1.6]">
              Our team typically responds within 24 hours.
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-[#c85212]/15 flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-[#c85212]" />
                </motion.div>
                <h3 className="font-['Montserrat',sans-serif] text-white text-[26px] md:text-[32px] tracking-[-0.5px] mb-3">
                  Message Sent!
                </h3>
                <p className="font-['Mulish',sans-serif] text-white/40 text-[15px] md:text-[16px] leading-[1.6] max-w-[340px]">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="mb-1">
                  <h2 className="font-['Montserrat',sans-serif] text-white text-[26px] md:text-[34px] lg:text-[40px] tracking-[-1px] leading-[1.1] mb-2">
                    Get in <span className="text-[#c85212]">touch</span>
                  </h2>
                  <p className="font-['Mulish',sans-serif] text-white/35 text-[14px] md:text-[15px] leading-[1.6]">
                    Fill out the form and we'll get back to you shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full name *"
                    value={formData.name}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass("name")}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass("email")}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClass("subject")}
                />

                <textarea
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass("message")} resize-none`}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(200,82,18,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#c85212] hover:bg-[#b04710] text-white font-['Mulish',sans-serif] font-bold text-[15px] tracking-[0.38px] rounded-[12px] py-4 flex items-center justify-center gap-2.5 cursor-pointer transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN CONTACT PAGE
   ═══════════════════════════════════════════════════════ */
export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* ───── Dark Hero Section ───── */}
      <section className="bg-[#10182c] relative overflow-hidden pb-40 md:pb-52">
        {/* Decorative rings */}
        <div className="absolute top-[60px] right-[-100px] md:right-[-40px] w-[400px] md:w-[640px] h-[400px] md:h-[640px] border border-[rgba(200,82,18,0.08)] rounded-full opacity-40" />
        <div className="absolute top-[140px] right-[0px] md:right-[80px] w-[260px] md:w-[440px] h-[260px] md:h-[440px] border border-[rgba(251,255,121,0.05)] rounded-full opacity-30" />
        <div className="absolute bottom-[-300px] left-[-200px] w-[600px] h-[600px] border border-[rgba(255,255,255,0.02)] rounded-full" />
        {/* Accent dots */}
        <div className="absolute top-[220px] left-[8%] w-1.5 h-1.5 rounded-full bg-[#c85212] opacity-25 hidden md:block" />
        <div className="absolute top-[380px] left-[22%] w-1.5 h-1.5 rounded-full bg-[#c85212] opacity-15 hidden md:block" />
        <div className="absolute top-[120px] right-[18%] w-1.5 h-1.5 rounded-full bg-[#fbff79] opacity-20 hidden lg:block" />
        <div className="absolute top-[340px] right-[28%] w-1.5 h-1.5 rounded-full bg-[#c85212] opacity-20 hidden lg:block" />

        {/* Animated orb */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c85212] rounded-full blur-[150px] pointer-events-none"
        />

        {/* Navbar */}
        <SharedNavbar transparent />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-24">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link to="/" className="font-['Mulish',sans-serif] text-white/40 text-[13px] md:text-[14px] tracking-[0.64px] hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/20" />
            <span className="font-['Mulish',sans-serif] text-[#c85212] text-[13px] md:text-[14px] tracking-[0.64px]">Contact</span>
          </motion.div>

          {/* Title block */}
          <div className="text-center max-w-[750px] mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full px-5 py-2 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#c85212]" />
              <span className="font-['Mulish',sans-serif] text-white/50 text-[12px] md:text-[13px] tracking-[1.2px] uppercase">Support & Enquiries</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Montserrat',sans-serif] text-white text-[40px] md:text-[56px] lg:text-[72px] tracking-[-2.5px] leading-[1.02] mb-5"
            >
              We're here to <span className="text-[#c85212]">help</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Mulish',sans-serif] text-white/40 text-[16px] md:text-[19px] leading-[1.65] tracking-[0.3px] max-w-[560px] mx-auto"
            >
              Have a question, feedback, or need support? Reach out through any of the channels below — we'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ───── Overlapping Info Cards (pulls into hero) ───── */}
      <section className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 -mt-28 md:-mt-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CONTACT_CARDS.map((card, i) => (
            <ContactInfoCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </section>

      {/* ───── Contact Form Section ───── */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <AnimatedSection variant="fadeUp">
          <ContactForm />
        </AnimatedSection>
      </section>

      {/* ───── FAQ + Offices Section ───── */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* FAQ Column */}
          <div className="lg:col-span-7">
            <AnimatedSection variant="fadeUp">
              {/* Section header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-[rgba(200,82,18,0.06)] rounded-full px-4 py-1.5 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c85212]" />
                  <span className="font-['Mulish',sans-serif] text-[#c85212] text-[12px] tracking-[1px] uppercase">FAQ</span>
                </div>
                <h2 className="font-['Montserrat',sans-serif] text-[#10182c] text-[28px] md:text-[36px] lg:text-[42px] tracking-[-1.2px] leading-[1.1] mb-3">
                  Frequently asked <span className="text-[#c85212]">questions</span>
                </h2>
                <p className="font-['Mulish',sans-serif] text-[#667085] text-[15px] md:text-[16px] leading-[1.6]">
                  Can't find what you're looking for? Reach out via the form above.
                </p>
              </div>
            </AnimatedSection>

            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={i}
                  faq={faq}
                  index={i}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* Offices Column */}
          <div className="lg:col-span-5">
            <AnimatedSection variant="fadeUp" delay={0.15}>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-[rgba(16,24,44,0.04)] rounded-full px-4 py-1.5 mb-5">
                  <MapPin className="w-3.5 h-3.5 text-[#10182c]/50" />
                  <span className="font-['Mulish',sans-serif] text-[#10182c]/50 text-[12px] tracking-[1px] uppercase">Our Offices</span>
                </div>
                <h3 className="font-['Montserrat',sans-serif] text-[#10182c] text-[24px] md:text-[28px] tracking-[-0.8px] leading-[1.1]">
                  Where to find us
                </h3>
              </div>
            </AnimatedSection>

            <div className="flex flex-col gap-5">
              {OFFICES.map((office, i) => (
                <motion.div
                  key={office.country}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group bg-white border border-[rgba(0,0,0,0.05)] rounded-[18px] p-6 md:p-7 hover:border-[#c85212]/20 hover:shadow-[0_6px_24px_rgba(200,82,18,0.06)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-[32px] leading-none mt-0.5">{office.flag}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[17px] md:text-[18px]">{office.country}</h4>
                        <span className="bg-[#c85212]/8 text-[#c85212] font-['Mulish',sans-serif] text-[11px] tracking-[0.5px] px-2.5 py-0.5 rounded-full">{office.label}</span>
                      </div>
                      <p className="font-['Mulish',sans-serif] text-[#667085] text-[14px] leading-[1.5] flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#c85212]/60" />
                        {office.address}
                      </p>
                      <p className="font-['Mulish',sans-serif] text-[#667085] text-[13px] leading-[1.5] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#c85212]/60" />
                        {office.timezone}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick contact card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#10182c] rounded-[18px] p-6 md:p-7 relative overflow-hidden"
              >
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-[100px] h-[100px] rounded-bl-full opacity-50 pointer-events-none" style={{ backgroundImage: "linear-gradient(225deg, rgba(200,82,18,0.2) 0%, transparent 100%)" }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-[10px] bg-white/[0.08] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#fbff79]" />
                    </div>
                    <div>
                      <p className="font-['Mulish',sans-serif] text-white/50 text-[12px] tracking-[0.8px] uppercase">Email us directly</p>
                    </div>
                  </div>
                  <a href="mailto:support@apartey.com" className="font-['Mulish',sans-serif] font-bold text-white text-[16px] md:text-[18px] hover:text-[#c85212] transition-colors">
                    support@apartey.com
                  </a>
                  <p className="font-['Mulish',sans-serif] text-white/30 text-[13px] mt-2 leading-[1.5]">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <Footer />
    </div>
  );
}

export default ContactPage;
