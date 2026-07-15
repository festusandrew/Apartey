import { useState } from "react";
import { Link } from "react-router";
import {
  Search, MapPin, Star, Phone, Mail, MessageSquare,
  ChevronDown, ArrowRight, Wrench, Camera, Scale,
  Truck, Sparkles, Shield, Zap, Home, CheckCircle, ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";
import { SERVICES } from "./servicesData";
import type { Service } from "./servicesData";

const CATEGORIES = [
  { id: "all", label: "All Services", icon: <Sparkles size={16} /> },
  { id: "maintenance", label: "Maintenance & Repairs", icon: <Wrench size={16} /> },
  { id: "cleaning", label: "Cleaning", icon: <Sparkles size={16} /> },
  { id: "legal", label: "Legal & Conveyancing", icon: <Scale size={16} /> },
  { id: "moving", label: "Moving & Logistics", icon: <Truck size={16} /> },
  { id: "photography", label: "Photography & Staging", icon: <Camera size={16} /> },
  { id: "security", label: "Security & Smart Home", icon: <Shield size={16} /> },
  { id: "utilities", label: "Utilities & Broadband", icon: <Zap size={16} /> },
  { id: "interior", label: "Interior Design", icon: <Home size={16} /> },
];


function ServiceCard({ service }: { service: Service }) {
  const [enquiring, setEnquiring] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white rounded-[20px] border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden relative ${service.featured ? "border-[#c85212]/30 ring-1 ring-[#c85212]/10" : "border-gray-100 hover:border-[#c85212]/20"}`}
    >
      {service.featured && (
        <div className="absolute top-4 right-4 bg-[#fbff79] text-[#10182c] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
          <Star size={9} className="fill-[#10182c]" /> Featured
        </div>
      )}

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start gap-3 pr-16">
          <div className="w-12 h-12 rounded-[14px] bg-[#10182c] flex items-center justify-center shrink-0 text-white font-bold text-[18px]">
            {service.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[16px] leading-tight">{service.name}</h3>
              {service.verified && (
                <CheckCircle size={14} className="text-green-500 shrink-0" />
              )}
            </div>
            <p className="text-[#c85212] text-[13px] font-medium mt-0.5">{service.tagline}</p>
          </div>
        </div>

        {/* Rating + location */}
        <div className="flex items-center gap-3 text-[12px] text-gray-500">
          <span className="flex items-center gap-1 font-bold text-[#10182c]">
            <Star size={12} className="fill-[#c85212] text-[#c85212]" />
            {service.rating}
            <span className="font-normal text-gray-400">({service.reviews})</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1"><MapPin size={11} className="text-[#c85212]" />{service.location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">{service.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map(t => (
            <span key={t} className="bg-gray-100 text-[#10182c] text-[11px] px-2.5 py-1 rounded-full font-medium">{t}</span>
          ))}
        </div>

        {/* Pricing + response */}
        <div className="flex gap-3 border-t border-gray-100 pt-4">
          <div className="flex-1">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Pricing</p>
            <p className="font-bold text-[#10182c] text-[13px]">{service.pricing}</p>
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Response</p>
            <p className="font-bold text-[#10182c] text-[13px]">{service.responseTime}</p>
          </div>
        </div>

        {/* View profile link */}
        <Link
          to={`/services/${service.id}`}
          className="flex items-center justify-center gap-1.5 w-full border border-gray-200 hover:border-[#c85212] text-gray-500 hover:text-[#c85212] text-[12px] font-bold py-2 rounded-[10px] transition-colors mb-2"
        >
          <ExternalLink size={12} /> View Full Profile
        </Link>

        {/* Contact actions */}
        <div className="flex gap-2 mt-auto">
          {service.contact.phone && (
            <a
              href={`tel:${service.contact.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#10182c] hover:bg-[#1a2642] text-white text-[12px] font-bold py-2.5 rounded-[10px] transition-colors"
            >
              <Phone size={13} /> Call
            </a>
          )}
          {service.contact.whatsapp && (
            <a
              href={`https://wa.me/${service.contact.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-[12px] font-bold py-2.5 rounded-[10px] transition-colors"
            >
              <MessageSquare size={13} /> WhatsApp
            </a>
          )}
          {service.contact.email && (
            <button
              onClick={() => setEnquiring(true)}
              className="flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-[#10182c] text-[12px] font-bold py-2.5 px-3 rounded-[10px] transition-colors"
            >
              <Mail size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Enquiry panel */}
      <AnimatePresence>
        {enquiring && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gray-100"
          >
            <div className="p-5 bg-[#f9fafb] space-y-3">
              <p className="text-[12px] font-bold text-[#10182c]">Send a quick enquiry</p>
              <input type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-[8px] px-3 py-2 text-[13px] focus:outline-none focus:border-[#c85212]" />
              <input type="tel" placeholder="Your phone number" className="w-full border border-gray-200 rounded-[8px] px-3 py-2 text-[13px] focus:outline-none focus:border-[#c85212]" />
              <textarea placeholder="Brief message..." rows={2} className="w-full border border-gray-200 rounded-[8px] px-3 py-2 text-[13px] focus:outline-none focus:border-[#c85212] resize-none" />
              <div className="flex gap-2">
                <button onClick={() => setEnquiring(false)} className="flex-1 border border-gray-200 text-gray-500 text-[12px] font-bold py-2 rounded-[8px] hover:bg-gray-100 transition-colors">Cancel</button>
                <button onClick={() => setEnquiring(false)} className="flex-1 bg-[#c85212] text-white text-[12px] font-bold py-2 rounded-[8px] hover:bg-[#a6430f] transition-colors">Send Enquiry</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const filtered = SERVICES.filter(s => {
    const matchCat = activeCategory === "all" || s.category === activeCategory;
    const matchSearch = search === "" ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.tagline.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  }).sort((a, b) => {
    if (sort === "featured") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    if (sort === "rating") return b.rating - a.rating;
    if (sort === "reviews") return b.reviews - a.reviews;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#f9fafb] font-['Mulish',sans-serif]">
      <SharedNavbar />

      {/* Hero */}
      <div className="bg-[#10182c] pt-14 pb-12 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#fbff79]/10 border border-[#fbff79]/25 text-[#fbff79] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
            <Wrench size={12} /> Find a Service
          </div>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-white text-[36px] md:text-[52px] leading-tight tracking-[-1px] mb-3 max-w-[700px]">
            Trusted services for<br />
            <span className="text-[#c85212]">every stage</span> of renting
          </h1>
          <p className="text-white/60 text-[16px] max-w-[500px] mb-8">
            Vetted plumbers, cleaners, lawyers, movers, and more — contact them directly, no middleman.
          </p>

          {/* Search bar */}
          <div className="flex gap-3 max-w-[680px]">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search service or location..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-[12px] text-[14px] bg-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#c85212]/30 text-[#10182c]"
              />
            </div>
            <Link
              to="/services/list-your-service"
              className="shrink-0 bg-[#c85212] hover:bg-[#a6430f] text-white font-bold text-[14px] px-6 py-3.5 rounded-[12px] transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              List Your Service <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-bold whitespace-nowrap transition-colors shrink-0 ${
                activeCategory === cat.id
                  ? "bg-[#10182c] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-10">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <p className="text-[#10182c] font-bold text-[16px]">
            {filtered.length} service{filtered.length !== 1 ? "s" : ""} found
            {activeCategory !== "all" && <span className="text-gray-400 font-normal"> in {CATEGORIES.find(c => c.id === activeCategory)?.label}</span>}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-[13px]">Sort by</span>
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 border border-gray-200 rounded-[10px] text-[13px] text-[#10182c] focus:outline-none focus:border-[#c85212] bg-white cursor-pointer font-bold"
              >
                <option value="featured">Featured first</option>
                <option value="rating">Highest rated</option>
                <option value="reviews">Most reviewed</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(s => <ServiceCard key={s.id} service={s} />)}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-gray-400">
              <Search size={40} className="mx-auto mb-4 opacity-30" />
              <p className="text-[16px]">No services match your search.</p>
              <button onClick={() => { setSearch(""); setActiveCategory("all"); }} className="mt-4 text-[#c85212] font-bold text-[14px] hover:underline">Clear filters</button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-14 bg-[#10182c] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Montserrat',sans-serif] font-bold text-white text-[22px] mb-1">Are you a service provider?</p>
            <p className="text-white/60 text-[15px]">Submit your business — it takes 2 minutes and goes live after a quick review.</p>
          </div>
          <Link
            to="/services/list-your-service"
            className="shrink-0 bg-[#fbff79] hover:bg-[#f0f550] text-[#10182c] font-bold text-[14px] px-7 py-3.5 rounded-[14px] transition-colors whitespace-nowrap"
          >
            List Your Service →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
