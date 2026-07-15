import { useState } from "react";
import { Link } from "react-router";
import {
  MapPin, Bed, Calendar, DollarSign, Search,
  Filter, MessageSquare, Sofa, Dog, Clock, ChevronDown, Home
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import imgApartey3 from "../../imports/Listings/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import imgApartey2 from "../../imports/Listings/7d97c15a290f03c437ad64a9a8b65a1473428e78.png";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";

export type RenterRequirement = {
  id: string;
  renterName: string;
  initials: string;
  postedDate: string;
  location: string;
  budgetMin: number;
  budgetMax: number;
  currency: string;
  bedrooms: number;
  moveInDate: string;
  leaseTerm: string;
  furnished: boolean;
  petsAllowed: boolean;
  propertyType: string;
  notes: string;
  active: boolean;
};

export const BOARD_LISTINGS: RenterRequirement[] = [
  {
    id: "r1", renterName: "Yakubu A.", initials: "YA", postedDate: "2 days ago",
    location: "Lekki, Lagos", budgetMin: 400000, budgetMax: 600000, currency: "NGN",
    bedrooms: 2, moveInDate: "Aug 2026", leaseTerm: "12 months",
    furnished: true, petsAllowed: false, propertyType: "Apartment",
    notes: "Looking for a clean, secure 2-bed apartment in Lekki Phase 1 or 2. Must have 24/7 power and good water supply.",
    active: true,
  },
  {
    id: "r2", renterName: "Amara K.", initials: "AK", postedDate: "3 days ago",
    location: "Ibadan, Oyo", budgetMin: 150000, budgetMax: 250000, currency: "NGN",
    bedrooms: 3, moveInDate: "Jul 2026", leaseTerm: "12 months",
    furnished: false, petsAllowed: true, propertyType: "Duplex / House",
    notes: "Relocating for work. Need a spacious house for a family of 4 with a small dog. Quiet neighbourhood preferred.",
    active: true,
  },
  {
    id: "r3", renterName: "Chidi O.", initials: "CO", postedDate: "5 days ago",
    location: "Abuja, FCT", budgetMin: 700000, budgetMax: 1200000, currency: "NGN",
    bedrooms: 3, moveInDate: "Sep 2026", leaseTerm: "24 months",
    furnished: true, petsAllowed: false, propertyType: "Apartment",
    notes: "Professional couple looking for a fully furnished 3-bed in Asokoro or Maitama. Gym and parking essential.",
    active: true,
  },
  {
    id: "r4", renterName: "Fatima B.", initials: "FB", postedDate: "1 week ago",
    location: "Port Harcourt, Rivers", budgetMin: 200000, budgetMax: 350000, currency: "NGN",
    bedrooms: 2, moveInDate: "Aug 2026", leaseTerm: "6 months",
    furnished: true, petsAllowed: false, propertyType: "Apartment / Studio",
    notes: "Short-term contract worker. Need a furnished apartment close to GRA. Flexible on size.",
    active: true,
  },
  {
    id: "r5", renterName: "Emeka N.", initials: "EN", postedDate: "1 week ago",
    location: "Enugu", budgetMin: 100000, budgetMax: 180000, currency: "NGN",
    bedrooms: 2, moveInDate: "Jul 2026", leaseTerm: "12 months",
    furnished: false, petsAllowed: false, propertyType: "Flat",
    notes: "Looking for a self-contained or mini flat in a safe neighbourhood. Student-friendly area preferred.",
    active: true,
  },
  {
    id: "r6", renterName: "Ngozi T.", initials: "NT", postedDate: "2 weeks ago",
    location: "Victoria Island, Lagos", budgetMin: 1000000, budgetMax: 2000000, currency: "NGN",
    bedrooms: 4, moveInDate: "Oct 2026", leaseTerm: "12 months",
    furnished: true, petsAllowed: true, propertyType: "Penthouse / Luxury",
    notes: "Executive looking for a luxury fully furnished 4-bed on VI or Ikoyi. Must have pool, gym and concierge.",
    active: true,
  },
];

function formatBudget(min: number, max: number, currency: string) {
  const fmt = (n: number) =>
    n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1000 ? `${(n / 1000).toFixed(0)}K` : String(n);
  return `${currency} ${fmt(min)} – ${fmt(max)}`;
}

function RequirementCard({
  req,
  onMessage,
}: {
  req: RenterRequirement;
  onMessage: (req: RenterRequirement) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md hover:border-[#c85212]/20 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Card header */}
      <div className="bg-[#10182c] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#c85212] flex items-center justify-center shrink-0">
            <span className="font-['Montserrat',sans-serif] font-bold text-white text-[14px]">{req.initials}</span>
          </div>
          <div>
            <p className="font-['Mulish',sans-serif] font-bold text-white text-[14px]">{req.renterName}</p>
            <p className="text-white/40 text-[11px] flex items-center gap-1"><Clock size={10} /> {req.postedDate}</p>
          </div>
        </div>
        <span className="bg-[#fbff79] text-[#10182c] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
          Active
        </span>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Budget + location */}
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 bg-[#c85212]/10 text-[#c85212] text-[13px] font-bold px-3 py-1.5 rounded-full">
            <DollarSign size={12} /> {formatBudget(req.budgetMin, req.budgetMax, req.currency)} / yr
          </span>
          <span className="flex items-center gap-1.5 bg-gray-100 text-[#10182c] text-[13px] font-medium px-3 py-1.5 rounded-full">
            <MapPin size={12} className="text-[#c85212]" /> {req.location}
          </span>
        </div>

        {/* Specs row */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-gray-500">
          <span className="flex items-center gap-1.5"><Bed size={14} className="text-[#c85212]" /> {req.bedrooms} bed{req.bedrooms > 1 ? "s" : ""}</span>
          <span className="flex items-center gap-1.5"><Home size={14} className="text-[#c85212]" /> {req.propertyType}</span>
          <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#c85212]" /> {req.moveInDate}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#c85212]" /> {req.leaseTerm}</span>
          {req.furnished && <span className="flex items-center gap-1.5"><Sofa size={14} className="text-[#c85212]" /> Furnished</span>}
          {req.petsAllowed && <span className="flex items-center gap-1.5"><Dog size={14} className="text-[#c85212]" /> Pets ok</span>}
        </div>

        {/* Notes */}
        <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3 border-t border-gray-100 pt-3">
          "{req.notes}"
        </p>

        {/* CTA */}
        <button
          onClick={() => onMessage(req)}
          className="mt-auto w-full bg-[#10182c] hover:bg-[#1a2642] text-white font-bold text-[13px] py-3 rounded-[12px] transition-colors flex items-center justify-center gap-2"
        >
          <MessageSquare size={14} /> Message Renter
        </button>
      </div>
    </motion.div>
  );
}

function MessageModal({ req, onClose }: { req: RenterRequirement; onClose: () => void }) {
  const [message, setMessage] = useState(
    `Hi ${req.renterName.split(" ")[0]}, I saw your requirement on Apartey and I have a property that might be a great fit — `
  );
  const [sent, setSent] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[24px] w-full max-w-[500px] overflow-hidden shadow-2xl"
      >
        <div className="bg-[#10182c] px-6 py-5">
          <p className="text-white/50 text-[12px] mb-1">Messaging renter</p>
          <h3 className="font-['Montserrat',sans-serif] font-bold text-white text-[17px]">{req.renterName}</h3>
          <p className="text-white/50 text-[12px] mt-0.5 flex items-center gap-1"><MapPin size={11} /> {req.location} · {formatBudget(req.budgetMin, req.budgetMax, req.currency)}</p>
        </div>
        <div className="p-6">
          {sent ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={22} className="text-green-500" />
              </div>
              <h4 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[17px] mb-2">Message sent!</h4>
              <p className="text-gray-500 text-[14px]">{req.renterName} will receive your message and can reply via their Apartey inbox.</p>
              <button onClick={onClose} className="mt-5 text-[#c85212] font-bold text-[13px] hover:underline">Close</button>
            </div>
          ) : (
            <>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-[14px] resize-none focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all mb-4"
              />
              <div className="flex gap-3">
                <button onClick={onClose} className="flex-1 border border-gray-200 text-[#10182c] font-bold text-[13px] py-3 rounded-[12px] hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button
                  onClick={() => setSent(true)}
                  disabled={!message.trim()}
                  className="flex-1 bg-[#c85212] hover:bg-[#a6430f] disabled:opacity-40 text-white font-bold text-[13px] py-3 rounded-[12px] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} /> Send Message
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function RenterBoardPage() {
  const [search, setSearch] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState("Any");
  const [messagingReq, setMessagingReq] = useState<RenterRequirement | null>(null);

  const filtered = BOARD_LISTINGS.filter((r) => {
    const matchSearch =
      r.location.toLowerCase().includes(search.toLowerCase()) ||
      r.propertyType.toLowerCase().includes(search.toLowerCase()) ||
      r.notes.toLowerCase().includes(search.toLowerCase());
    const matchBeds = bedroomFilter === "Any" || r.bedrooms === Number(bedroomFilter);
    return matchSearch && matchBeds;
  });

  return (
    <div className="min-h-screen bg-[#f9fafb] font-['Inter',sans-serif]">
      <SharedNavbar transparent={false} />

      {/* Hero */}
      <div className="bg-[#10182c] py-14 px-6 md:px-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#fbff79]/15 border border-[#fbff79]/30 text-[#fbff79] text-[12px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
          Renter Board
        </div>
        <h1 className="font-['Montserrat',sans-serif] font-bold text-white text-[36px] md:text-[52px] leading-tight tracking-[-1px] mb-3">
          Renters looking for homes
        </h1>
        <p className="text-white/60 text-[16px] md:text-[18px] max-w-[560px] mx-auto">
          Browse verified renters who have posted exactly what they need. If you have a match — message them directly.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-100 px-6 md:px-16 py-4">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[220px]">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search location, property type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-[10px] text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all"
            />
          </div>
          <div className="relative">
            <select
              value={bedroomFilter}
              onChange={(e) => setBedroomFilter(e.target.value)}
              className="appearance-none pl-4 pr-8 py-2.5 border border-gray-200 rounded-[10px] text-[14px] text-[#10182c] focus:outline-none focus:border-[#c85212] bg-white cursor-pointer"
            >
              <option value="Any">Any bedrooms</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n} bed{n > 1 ? "s" : ""}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <p className="text-gray-400 text-[13px] ml-auto">
            {filtered.length} renter{filtered.length !== 1 ? "s" : ""} looking
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-10">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((req) => (
                <RequirementCard key={req.id} req={req} onMessage={setMessagingReq} />
              ))}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-gray-400 text-[16px]">
              No requirements match your search.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Post requirement CTA */}
        <div className="mt-14 bg-[#10182c] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Montserrat',sans-serif] font-bold text-white text-[22px] mb-1">Are you a renter?</p>
            <p className="text-white/60 text-[15px]">Post your requirement and let verified homeowners, agents and property managers come to you.</p>
          </div>
          <Link
            to="/profile"
            className="shrink-0 bg-[#fbff79] hover:bg-[#f0f550] text-[#10182c] font-bold text-[14px] px-7 py-3.5 rounded-[14px] transition-colors whitespace-nowrap"
          >
            Post My Requirement →
          </Link>
        </div>
      </div>

      <Footer />

      {/* Message modal */}
      <AnimatePresence>
        {messagingReq && (
          <MessageModal req={messagingReq} onClose={() => setMessagingReq(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
