import { useState } from "react";
import { Link } from "react-router";
import { Home, Search, ChevronDown, MapPin, Star, MessageCircle, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import imgApartey2 from "../../imports/Listings/7d97c15a290f03c437ad64a9a8b65a1473428e78.png";
import imgApartey3 from "../../imports/Listings/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";

type Reply = { ownerName: string; text: string; date: string };

type Review = {
  id: number;
  initials: string;
  property: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  reply?: Reply;
};

const REVIEWS: Review[] = [
  {
    id: 1, initials: "JD", property: "12 Freedom Way, Lagos", author: "John Doe", rating: 3, date: "Dec 03, 2024",
    text: "Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!",
    reply: { ownerName: "Sarah O. (Homeowner)", date: "Dec 05, 2024", text: "Thank you so much for the kind words, John! It was a pleasure having you as a tenant. We're glad the space felt like home — hope your next chapter is just as great!" },
  },
  {
    id: 2, initials: "AM", property: "12 Freedom Way, Lagos", author: "Amara M.", rating: 4, date: "Dec 03, 2024",
    text: "Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!",
  },
  {
    id: 3, initials: "TK", property: "12 Freedom Way, Lagos", author: "Tunde K.", rating: 3, date: "Dec 03, 2024",
    text: "Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!",
    reply: { ownerName: "Sarah O. (Homeowner)", date: "Dec 06, 2024", text: "Hi Tunde, we really appreciate your honest feedback! We've taken note of your comments and are working on a few improvements. Thank you for being a great tenant." },
  },
  {
    id: 4, initials: "JD", property: "12 Freedom Way, Lagos", author: "John Doe", rating: 3, date: "Dec 03, 2024",
    text: "Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!",
  },
  {
    id: 5, initials: "JD", property: "12 Freedom Way, Lagos", author: "John Doe", rating: 3, date: "Dec 03, 2024",
    text: "Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!",
    reply: { ownerName: "Sarah O. (Homeowner)", date: "Dec 07, 2024", text: "Thank you for taking the time to leave a review! We're constantly working to improve the property and tenant experience. Looking forward to seeing you thrive in your new home." },
  },
  {
    id: 6, initials: "JD", property: "12 Freedom Way, Lagos", author: "John Doe", rating: 3, date: "Dec 03, 2024",
    text: "Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!",
  },
];

function RatingBar({ rating }: { rating: number }) {
  return (
    <div className="flex gap-2 items-center w-full">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="h-[12px] rounded-full flex-1"
          style={{ background: i <= rating ? "#c85212" : "#f3f4f6" }}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [replyOpen, setReplyOpen] = useState(false);
  const replyCount = review.reply ? 1 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-[24px] p-8 relative overflow-hidden flex flex-col gap-6 shadow-sm border border-[#f3f4f6] group-hover:border-[#c85212]/30 group-hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      {/* Decorative quote */}
      <p className="absolute top-[-40px] right-6 font-['Mulish',sans-serif] font-bold text-[160px] leading-none text-[#f3f4f6] select-none rotate-180">"</p>

      {/* Avatar + property */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="relative w-16 h-16 shrink-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#10182c" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-['Mulish',sans-serif] font-bold text-white text-[20px] tracking-wide">
            {review.initials}
          </span>
        </div>
        <div>
          <p className="font-['Mulish',sans-serif] font-bold text-[#1e1e1e] text-[17px] leading-tight">{review.property}</p>
          <p className="font-['Inter',sans-serif] text-[rgba(30,30,30,0.8)] text-[15px] mt-0.5">{review.author}</p>
        </div>
      </div>

      {/* Rating bar */}
      <RatingBar rating={review.rating} />

      {/* Review text */}
      <div className="flex flex-col gap-6">
        <p className="font-['Mulish',sans-serif] italic text-[rgba(30,30,30,0.8)] text-[16px] leading-[1.6]">
          "{review.text}"
        </p>
        <div className="border-t border-[rgba(30,30,30,0.1)]" />
        <div className="flex items-center justify-between">
          <p className="font-['Manrope',sans-serif] font-medium text-[rgba(30,30,30,0.8)] text-[12px]">{review.date}</p>

          {/* Reply toggle button */}
          {replyCount > 0 && (
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setReplyOpen((o) => !o); }}
              className="flex items-center gap-1.5 text-[13px] font-['Mulish',sans-serif] font-bold text-[#c85212] hover:text-[#a6430f] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {replyCount} {replyCount === 1 ? "reply" : "replies"}
              {replyOpen
                ? <ChevronUp className="w-3.5 h-3.5" />
                : <ChevronDown className="w-3.5 h-3.5" />
              }
            </button>
          )}
        </div>
      </div>

      {/* Collapsible homeowner reply */}
      <AnimatePresence>
        {replyOpen && review.reply && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-l-2 border-[#c85212]/50 pl-4 bg-[#fff9f6] rounded-r-[12px] p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#c85212] flex items-center justify-center shrink-0">
                  <Home className="w-3 h-3 text-white" />
                </div>
                <span className="font-['Mulish',sans-serif] font-bold text-[#c85212] text-[12px]">
                  {review.reply.ownerName}
                </span>
                <span className="text-[11px] text-gray-400">· {review.reply.date}</span>
              </div>
              <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(30,30,30,0.8)] leading-[1.6]">
                "{review.reply.text}"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  const filtered = REVIEWS.filter(
    (r) =>
      r.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Inter',sans-serif]">

      {/* ── Navbar ── */}
      <nav className="bg-white h-[60px] md:h-[80px] flex items-center px-6 md:px-16 border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={imgApartey3} alt="Apartey" className="h-[32px] md:h-[40px] w-auto object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-[15px] text-[#1e1e1e]/70">
            <Link to="/" className="hover:text-[#c85212] transition-colors">Home</Link>
            <Link to="/listings" className="hover:text-[#c85212] transition-colors">Listings</Link>
            <Link to="/reviews" className="text-[#c85212] font-bold">Insights</Link>
            <Link to="/about" className="hover:text-[#c85212] transition-colors">About</Link>
            <Link to="/blog" className="hover:text-[#c85212] transition-colors">Blog</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/renter" className="text-[14px] text-[#1e1e1e]/70 hover:text-[#c85212] transition-colors hidden md:block">Sign In</Link>
            <Link to="/renter" className="bg-[#10182c] text-white text-[13px] font-bold px-4 py-2 rounded-full hover:bg-[#1a2642] transition-colors">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="bg-[#10182c] py-14 md:py-20 px-6 md:px-16 text-center">
        <h1 className="font-['Mulish',sans-serif] font-bold text-white text-[40px] md:text-[60px] lg:text-[72px] tracking-[-1.5px] leading-tight mb-3">
          Community Reviews
        </h1>
        <p className="text-[#f7f7f7]/80 text-[16px] md:text-[20px] mb-10">
          See what real residents are saying about properties in your area.
        </p>

        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1e1e1e]/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search address or neighborhood..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white rounded-[12px] h-[56px] pl-12 pr-4 text-[16px] text-[#1e1e1e] placeholder:text-[#1e1e1e]/40 outline-none border border-white/40 focus:ring-2 focus:ring-[#c85212]/30"
            />
          </div>
          <button className="bg-white/10 border border-white/20 text-white rounded-[12px] h-[56px] px-6 flex items-center gap-2 text-[15px] whitespace-nowrap hover:bg-white/20 transition-colors">
            <MapPin className="w-4 h-4 text-[#c85212]" /> All Cities <ChevronDown className="w-4 h-4 opacity-60" />
          </button>
          <button className="bg-white/10 border border-white/20 text-white rounded-[12px] h-[56px] px-6 flex items-center gap-2 text-[15px] whitespace-nowrap hover:bg-white/20 transition-colors">
            <Star className="w-4 h-4 text-[#c85212]" /> Any Rating <ChevronDown className="w-4 h-4 opacity-60" />
          </button>
        </div>
      </div>

      {/* ── Reviews grid ── */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-12">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-['Mulish',sans-serif] font-bold text-[#0d4949] text-[32px] md:text-[44px] tracking-tight">
            {filtered.length} Review{filtered.length !== 1 ? "s" : ""} Found
          </h2>
          <div className="flex items-center gap-3 text-[15px] text-[rgba(0,0,0,0.8)]">
            <span>Sort by</span>
            <button className="border border-[#cad0d9] rounded-[12px] px-5 py-2.5 flex items-center gap-2 hover:border-[#c85212] transition-colors">
              {sortBy} <ChevronDown className="w-4 h-4 text-[#4e5562]" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((review) => (
                <Link key={review.id} to={`/reviews/${review.id}`} className="block group">
                  <ReviewCard review={review} />
                </Link>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-20 text-[#1e1e1e]/40 text-[18px]"
            >
              No reviews match your search.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-[#3a414e] text-white mt-16">
        {/* Newsletter strip */}
        <div className="max-w-[900px] mx-auto px-6 pt-16 pb-10 flex flex-col items-center gap-6">
          <img src={imgApartey2} alt="Apartey" className="h-[60px] object-contain" />
          <div className="bg-[#757a83] rounded-[32px] flex items-center overflow-hidden w-full max-w-[600px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent px-6 py-4 text-white/60 text-[16px] outline-none placeholder:text-white/40"
            />
            <button className="bg-white text-[#3a414e] font-bold px-8 py-4 rounded-[32px] text-[16px] m-1 hover:bg-gray-100 transition-colors whitespace-nowrap">
              Submit →
            </button>
          </div>
          <p className="text-white/50 text-[15px]">2,000+ users end their week inspired. Join us today.</p>
        </div>

        <div className="border-t border-white/10" />

        {/* Links */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img src={imgApartey2} alt="Apartey" className="h-[50px] object-contain mb-4" />
            <p className="text-white/60 text-[14px] leading-relaxed max-w-[300px]">
              Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions.
            </p>
            <p className="text-[#757a83] text-[13px] mt-6">© 2025 Apartey. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-['Mulish',sans-serif] font-bold text-[18px] mb-4">Company</h4>
            <div className="flex flex-col gap-3 text-white/70 text-[15px]">
              <Link to="/about" className="hover:text-white transition-colors">About us</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-['Mulish',sans-serif] font-bold text-[18px] mb-4">Support</h4>
            <div className="flex flex-col gap-3 text-white/70 text-[15px]">
              <a href="#" className="hover:text-white transition-colors">Contact us</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="font-['Mulish',sans-serif] font-bold text-[18px] mb-4">Legal</h4>
            <div className="flex flex-col gap-3 text-white/70 text-[15px]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies Settings</Link>
              <a href="#" className="hover:text-white transition-colors">Content Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
