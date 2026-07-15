import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  ChevronLeft, Star, MapPin, Phone, MessageSquare, Mail,
  CheckCircle, Clock, Briefcase, Shield, Share2, Copy,
  Check, ArrowRight, Home
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";
import { SERVICES, CATEGORY_LABELS } from "./servicesData";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={14} className={i <= Math.round(rating) ? "fill-[#c85212] text-[#c85212]" : "fill-gray-200 text-gray-200"} />
      ))}
    </div>
  );
}

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id) ?? SERVICES[0];
  const related = SERVICES.filter(s => s.category === service.category && s.id !== service.id).slice(0, 3);

  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryPhone, setEnquiryPhone] = useState("");
  const [enquiryMsg, setEnquiryMsg] = useState("");
  const [enquirySent, setEnquirySent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] font-['Mulish',sans-serif]">
      <SharedNavbar />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8">

        {/* Back */}
        <Link to="/services" className="inline-flex items-center gap-1.5 text-[#c85212] text-[13px] font-medium hover:underline mb-6">
          <ChevronLeft size={15} /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left column — main content ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Hero card */}
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 md:p-8">
              <div className="flex items-start gap-5">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-[20px] bg-[#10182c] flex items-center justify-center shrink-0 shadow-md">
                  <span className="font-['Montserrat',sans-serif] font-bold text-white text-[32px]">{service.name.charAt(0)}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[24px] md:text-[28px] leading-tight">{service.name}</h1>
                        {service.verified && (
                          <span className="flex items-center gap-1 bg-green-50 text-green-600 text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0">
                            <CheckCircle size={11} /> Verified
                          </span>
                        )}
                        {service.featured && (
                          <span className="flex items-center gap-1 bg-[#fbff79] text-[#10182c] text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0">
                            <Star size={10} className="fill-[#10182c]" /> Featured
                          </span>
                        )}
                      </div>
                      <p className="text-[#c85212] font-bold text-[15px]">{service.tagline}</p>
                    </div>
                    <button onClick={handleCopy} className="flex items-center gap-1.5 border border-gray-200 hover:border-[#c85212]/40 text-gray-500 hover:text-[#c85212] text-[12px] font-bold px-3 py-2 rounded-[10px] transition-colors shrink-0">
                      {copied ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Share</>}
                    </button>
                  </div>

                  {/* Rating + meta */}
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-[13px]">
                    <div className="flex items-center gap-1.5">
                      <StarRow rating={service.rating} />
                      <span className="font-bold text-[#10182c]">{service.rating}</span>
                      <span className="text-gray-400">({service.reviews} reviews)</span>
                    </div>
                    <span className="flex items-center gap-1 text-gray-500"><MapPin size={13} className="text-[#c85212]" />{service.location}</span>
                    <span className="flex items-center gap-1 text-gray-500"><Shield size={13} className="text-[#c85212]" />{CATEGORY_LABELS[service.category]}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {service.tags.map(t => (
                  <span key={t} className="bg-gray-100 text-[#10182c] text-[12px] font-medium px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[18px] mb-4">About</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">{service.fullDescription ?? service.description}</p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
                {[
                  { icon: <Briefcase size={16} className="text-[#c85212]" />, value: `${service.yearsInBusiness ?? "—"} yrs`, label: "In business" },
                  { icon: <CheckCircle size={16} className="text-[#c85212]" />, value: `${(service.jobsCompleted ?? 0).toLocaleString()}+`, label: "Jobs done" },
                  { icon: <Clock size={16} className="text-[#c85212]" />, value: service.responseTime, label: "Response" },
                  { icon: <Star size={16} className="text-[#c85212]" />, value: String(service.rating), label: "Rating" },
                ].map(s => (
                  <div key={s.label} className="text-center p-3 bg-[#f9fafb] rounded-[12px]">
                    <div className="flex justify-center mb-1">{s.icon}</div>
                    <p className="font-bold text-[#10182c] text-[15px]">{s.value}</p>
                    <p className="text-gray-400 text-[11px] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[18px] mb-4">Details</h2>
              <div className="space-y-0">
                {[
                  ["Pricing", service.pricing],
                  ["Working hours", service.workingHours ?? "Contact for hours"],
                  ["Coverage", service.location],
                  ...(service.certifications ? [["Certifications", service.certifications] as [string,string]] : []),
                  ...(service.website ? [["Website", service.website] as [string,string]] : []),
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between py-3.5 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 text-[14px] shrink-0 mr-4">{label}</span>
                    {label === "Website" ? (
                      <a href={value} target="_blank" rel="noopener noreferrer" className="text-[#c85212] text-[14px] font-medium hover:underline text-right">{value}</a>
                    ) : (
                      <span className="text-[#10182c] font-medium text-[14px] text-right">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            {service.serviceReviews && service.serviceReviews.length > 0 && (
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[18px]">
                    Reviews <span className="text-gray-400 font-normal text-[16px]">({service.reviews})</span>
                  </h2>
                  <div className="flex items-center gap-1.5 bg-[#fbff79]/30 px-3 py-1.5 rounded-full">
                    <Star size={13} className="fill-[#c85212] text-[#c85212]" />
                    <span className="font-bold text-[#10182c] text-[14px]">{service.rating}</span>
                  </div>
                </div>
                <div className="space-y-5">
                  {service.serviceReviews.map((r, i) => (
                    <div key={i} className="border-b border-gray-100 last:border-0 pb-5 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#10182c]/10 flex items-center justify-center font-bold text-[#10182c] text-[14px]">
                            {r.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-[#10182c] text-[14px]">{r.author}</p>
                            <p className="text-gray-400 text-[11px]">Verified client · {r.date}</p>
                          </div>
                        </div>
                        <StarRow rating={r.rating} />
                      </div>
                      <p className="text-gray-600 text-[14px] leading-relaxed ml-12">"{r.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related services */}
            {related.length > 0 && (
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 md:p-8">
                <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[18px] mb-5">
                  Other {CATEGORY_LABELS[service.category]} providers
                </h2>
                <div className="space-y-4">
                  {related.map(r => (
                    <Link key={r.id} to={`/services/${r.id}`} className="flex items-center gap-4 p-3 rounded-[14px] hover:bg-gray-50 transition-colors group">
                      <div className="w-12 h-12 rounded-[12px] bg-[#10182c] flex items-center justify-center text-white font-bold text-[18px] shrink-0">
                        {r.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#10182c] text-[14px] group-hover:text-[#c85212] transition-colors">{r.name}</p>
                        <div className="flex items-center gap-2 mt-0.5 text-[12px] text-gray-400">
                          <StarRow rating={r.rating} />
                          <span>{r.rating} ({r.reviews})</span>
                          <span>·</span>
                          <span>{r.pricing}</span>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-[#c85212] transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Right column — sticky contact sidebar ── */}
          <div>
            <div className="sticky top-[80px] space-y-4">

              {/* Contact card */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6">
                <h3 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[16px] mb-4">Contact provider</h3>

                <div className="space-y-3">
                  {service.contact.phone && (
                    <a href={`tel:${service.contact.phone}`} className="flex items-center justify-center gap-2 w-full bg-[#10182c] hover:bg-[#1a2642] text-white font-bold text-[14px] py-3.5 rounded-[14px] transition-colors">
                      <Phone size={16} /> Call {service.contact.phone}
                    </a>
                  )}
                  {service.contact.whatsapp && (
                    <a href={`https://wa.me/${service.contact.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold text-[14px] py-3.5 rounded-[14px] transition-colors">
                      <MessageSquare size={16} /> WhatsApp
                    </a>
                  )}
                  {service.contact.email && (
                    <button onClick={() => setEnquiryOpen(o => !o)} className="flex items-center justify-center gap-2 w-full border-2 border-[#c85212] text-[#c85212] hover:bg-[#c85212] hover:text-white font-bold text-[14px] py-3.5 rounded-[14px] transition-colors">
                      <Mail size={16} /> Send Enquiry
                    </button>
                  )}
                </div>

                {/* Enquiry form */}
                <AnimatePresence>
                  {enquiryOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-4 mt-4 border-t border-gray-100">
                        {enquirySent ? (
                          <div className="text-center py-4">
                            <CheckCircle size={28} className="text-green-500 mx-auto mb-2" />
                            <p className="font-bold text-[#10182c] text-[14px]">Enquiry sent!</p>
                            <p className="text-gray-400 text-[12px] mt-1">The provider will contact you directly.</p>
                          </div>
                        ) : (
                          <form onSubmit={handleEnquiry} className="space-y-3">
                            <input value={enquiryName} onChange={e => setEnquiryName(e.target.value)} placeholder="Your name" required className="w-full border border-gray-200 rounded-[10px] px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212]" />
                            <input value={enquiryPhone} onChange={e => setEnquiryPhone(e.target.value)} placeholder="Your phone / WhatsApp" required className="w-full border border-gray-200 rounded-[10px] px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212]" />
                            <textarea value={enquiryMsg} onChange={e => setEnquiryMsg(e.target.value)} placeholder="Brief message..." rows={3} className="w-full border border-gray-200 rounded-[10px] px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#c85212] resize-none" />
                            <button type="submit" className="w-full bg-[#c85212] hover:bg-[#a6430f] text-white font-bold text-[13px] py-2.5 rounded-[10px] transition-colors">Send</button>
                          </form>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-center text-gray-400 text-[11px] mt-4">
                  You contact them directly — no middleman
                </p>
              </div>

              {/* Quick info card */}
              <div className="bg-[#10182c] rounded-[24px] p-5 space-y-3">
                <h3 className="font-bold text-white text-[14px]">Quick info</h3>
                {[
                  { icon: <Clock size={13} />, label: service.workingHours ?? "Contact for hours" },
                  { icon: <MapPin size={13} />, label: service.location },
                  { icon: <Star size={13} className="fill-white" />, label: `${service.rating} / 5 from ${service.reviews} reviews` },
                  { icon: <CheckCircle size={13} />, label: service.verified ? "Verified by Apartey" : "Unverified — use caution" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-white/70 text-[12px]">
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* List your service prompt */}
              <div className="bg-[#f9fafb] border border-gray-200 rounded-[20px] p-5 text-center">
                <Home size={20} className="text-[#c85212] mx-auto mb-2" />
                <p className="font-bold text-[#10182c] text-[13px] mb-1">Are you a service provider?</p>
                <p className="text-gray-400 text-[12px] mb-3">Get listed on Apartey in under 2 minutes.</p>
                <Link to="/services/list-your-service" className="block w-full bg-[#c85212] hover:bg-[#a6430f] text-white font-bold text-[12px] py-2.5 rounded-[10px] transition-colors">
                  List Your Service →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
