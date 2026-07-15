import { useState } from "react";
import { Link, useParams } from "react-router";
import { ChevronLeft, MapPin, Star, ThumbsUp, Flag, Edit3, Home, MessageSquare } from "lucide-react";
import imgApartey3 from "../../imports/Listings/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import imgApartey2 from "../../imports/Listings/7d97c15a290f03c437ad64a9a8b65a1473428e78.png";
import imgCard1 from "../../imports/Listings/9ccf35c1a9fbbd63fd7831e49225db7d77f0a2ac.png";

type Reply = { ownerName: string; text: string; date: string };

interface ReviewDetail {
  id: string;
  breadcrumb: string;
  propertyTitle: string;
  rating: number;
  votes: number;
  reviewer: string;
  date: string;
  reviewText: string;
  reply?: Reply;
  stayDetails: { label: string; value: string }[];
  costDetails: { label: string; value: string }[];
  facilities: string[];
  accessibility: { label: string; value: string }[];
  appliances: string;
  languages: string;
  quickStats: { rooms: number; occupants: number; rent: string };
}

const REVIEWS: Record<string, ReviewDetail> = {
  "1": {
    id: "1",
    breadcrumb: "Benin city, Oka, Edo, Nigeria",
    propertyTitle: "7-Duplex 2, Liberty Street, Benin city, Oka, Edo, Nigeria.",
    rating: 4.0,
    votes: 4,
    reviewer: "Anonymous Reviewer",
    date: "February 24, 2026",
    reviewText: "Beautiful environment, very secure. For the property, the rooms are quite small, other than that it's a 7/10 experience.",
    reply: {
      ownerName: "Sarah O. (Homeowner)",
      date: "Feb 26, 2026",
      text: "Thank you for your honest review! We're glad you found the environment secure. We are actively working on improving the room layouts in our next renovation cycle. Your feedback is invaluable to us.",
    },
    stayDetails: [
      { label: "Rooms", value: "3" },
      { label: "Occupants", value: "4" },
      { label: "Date Left", value: "Feb 28, 2026" },
      { label: "Furnished", value: "No" },
      { label: "Central Heating", value: "No" },
      { label: "Private Heating", value: "No" },
    ],
    costDetails: [
      { label: "Rent Type", value: "Yearly" },
      { label: "Rent", value: "2,000,000 NGN" },
      { label: "Security Deposit", value: "Required" },
      { label: "Deposit Amount", value: "200,000 NGN" },
      { label: "Agent/Broker Fee", value: "Not required" },
      { label: "Fixed Utility Cost", value: "No" },
    ],
    facilities: ["Parking lot", "Security system"],
    accessibility: [
      { label: "Nearest Grocery Store", value: "0-10 min walk" },
      { label: "Nearest Park", value: "0-10 min walk" },
      { label: "Nearest Restaurant", value: "0-5 min walk" },
      { label: "Nearest Bus stop", value: "0-5 min walk" },
    ],
    appliances: "None",
    languages: "English",
    quickStats: { rooms: 3, occupants: 4, rent: "2,000,000 NGN" },
  },
  "2": {
    id: "2",
    breadcrumb: "Victoria Island, Lagos, Nigeria",
    propertyTitle: "12 Freedom Way, Victoria Island, Lagos, Nigeria.",
    rating: 3.0,
    votes: 8,
    reviewer: "John Doe",
    date: "December 03, 2024",
    reviewText: "Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!",
    reply: {
      ownerName: "Sarah O. (Homeowner)",
      date: "Dec 05, 2024",
      text: "Thank you so much for the kind words, John! It was a pleasure having you as a tenant. We're glad the space felt like home — hope your next chapter is just as great!",
    },
    stayDetails: [
      { label: "Rooms", value: "2" },
      { label: "Occupants", value: "2" },
      { label: "Date Left", value: "Nov 30, 2024" },
      { label: "Furnished", value: "Yes" },
      { label: "Central Heating", value: "Yes" },
      { label: "Private Heating", value: "No" },
    ],
    costDetails: [
      { label: "Rent Type", value: "Monthly" },
      { label: "Rent", value: "450,000 NGN" },
      { label: "Security Deposit", value: "Required" },
      { label: "Deposit Amount", value: "900,000 NGN" },
      { label: "Agent/Broker Fee", value: "Required" },
      { label: "Fixed Utility Cost", value: "Yes" },
    ],
    facilities: ["Swimming Pool", "Gym", "24/7 Security", "Generator"],
    accessibility: [
      { label: "Nearest Grocery Store", value: "0-5 min walk" },
      { label: "Nearest Park", value: "5-10 min drive" },
      { label: "Nearest Restaurant", value: "0-2 min walk" },
      { label: "Nearest Bus stop", value: "0-3 min walk" },
    ],
    appliances: "Refrigerator, Air Conditioner, Microwave",
    languages: "English",
    quickStats: { rooms: 2, occupants: 2, rent: "450,000 NGN" },
  },
  "3": {
    id: "3",
    breadcrumb: "Lekki, Lagos, Nigeria",
    propertyTitle: "15 Lekki Phase 1, Lagos, Nigeria.",
    rating: 4.0,
    votes: 5,
    reviewer: "Tunde K.",
    date: "December 03, 2024",
    reviewText: "Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!",
    reply: {
      ownerName: "Sarah O. (Homeowner)",
      date: "Dec 06, 2024",
      text: "Hi Tunde, we really appreciate your honest feedback! We've taken note of your comments and are working on a few improvements. Thank you for being a great tenant.",
    },
    stayDetails: [
      { label: "Rooms", value: "3" },
      { label: "Occupants", value: "3" },
      { label: "Date Left", value: "Oct 15, 2024" },
      { label: "Furnished", value: "Partially" },
      { label: "Central Heating", value: "No" },
      { label: "Private Heating", value: "Yes" },
    ],
    costDetails: [
      { label: "Rent Type", value: "Yearly" },
      { label: "Rent", value: "3,500,000 NGN" },
      { label: "Security Deposit", value: "Required" },
      { label: "Deposit Amount", value: "350,000 NGN" },
      { label: "Agent/Broker Fee", value: "Not required" },
      { label: "Fixed Utility Cost", value: "No" },
    ],
    facilities: ["Parking lot", "Security system", "Swimming Pool"],
    accessibility: [
      { label: "Nearest Grocery Store", value: "0-5 min walk" },
      { label: "Nearest Park", value: "0-10 min walk" },
      { label: "Nearest Restaurant", value: "0-5 min walk" },
      { label: "Nearest Bus stop", value: "0-10 min walk" },
    ],
    appliances: "Air Conditioner, Water Heater",
    languages: "English, Yoruba",
    quickStats: { rooms: 3, occupants: 3, rent: "3,500,000 NGN" },
  },
};

// Fallback for IDs 4-6
const FALLBACK_REVIEW = REVIEWS["1"];

function StarRating({ rating, size = 18 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(rating) ? "fill-[#c85212] text-[#c85212]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-gray-500 text-[14px]">{label}</span>
      <span className="text-[#10182c] font-medium text-[14px]">{value}</span>
    </div>
  );
}

const SIMILAR_REVIEWS = [
  { id: "2", title: "12 Freedom Way", location: "Lagos", rating: 4.4, reviews: 28, img: imgCard1 },
  { id: "3", title: "8 Deansgate Penthouse", location: "Manchester", rating: 4.1, reviews: 35, img: imgCard1 },
];

export function ReviewDetailPage() {
  const { id } = useParams();
  const review = REVIEWS[id ?? ""] ?? FALLBACK_REVIEW;
  const [helpful, setHelpful] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Inter',sans-serif]">

      {/* Navbar */}
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

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">

        {/* Back link */}
        <Link to="/reviews" className="inline-flex items-center gap-1.5 text-[#c85212] text-[14px] font-medium hover:underline mb-6">
          <ChevronLeft size={16} /> Back to Reviews
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* ── Main content ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Header */}
            <div>
              <div className="flex items-center gap-1.5 text-[#c85212] text-[13px] font-medium mb-2">
                <MapPin size={14} className="shrink-0" />
                {review.breadcrumb}
              </div>
              <h1 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[26px] md:text-[32px] leading-tight mb-4">
                {review.propertyTitle}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[24px]">{review.rating.toFixed(1)}</span>
                  <StarRating rating={review.rating} />
                  <span className="text-gray-400 text-[13px]">{review.votes} votes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-[13px]">
                  <span className="font-medium text-[#10182c]">{review.reviewer}</span>
                  <span>·</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setHelpful((h) => !h)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-[10px] border text-[14px] font-medium transition-colors ${helpful ? "bg-[#10182c] text-white border-[#10182c]" : "border-gray-200 text-[#10182c] hover:bg-gray-50"}`}
              >
                <ThumbsUp size={15} /> Helpful
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-[10px] border border-gray-200 text-[14px] font-medium text-[#10182c] hover:bg-gray-50 transition-colors">
                <Flag size={15} /> Report
              </button>
              <Link
                to="/write-review"
                className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-[#c85212] hover:bg-[#a6430f] text-white text-[14px] font-bold transition-colors ml-auto"
              >
                <Edit3 size={15} /> Write a Review
              </Link>
            </div>

            {/* Review text */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 space-y-6">
              <div>
                <h2 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[18px] mb-4">Review</h2>
                <p className="text-gray-600 text-[15px] leading-relaxed">{review.reviewText}</p>
              </div>

              {/* Homeowner reply — always visible on the detail page */}
              {review.reply && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare size={15} className="text-[#c85212]" />
                    <span className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[15px]">Homeowner Response</span>
                  </div>
                  <div className="border-l-4 border-[#c85212] bg-[#fff9f6] rounded-r-[16px] p-5">
                    {/* Owner identity row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-[#c85212] flex items-center justify-center shrink-0 shadow-sm">
                        <Home size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="font-['Mulish',sans-serif] font-bold text-[#c85212] text-[14px]">
                          {review.reply.ownerName}
                        </p>
                        <p className="text-[12px] text-gray-400">{review.reply.date}</p>
                      </div>
                    </div>
                    {/* Reply body */}
                    <p className="text-[15px] text-gray-700 leading-relaxed italic">
                      "{review.reply.text}"
                    </p>
                  </div>
                </div>
              )}

              {/* No reply state */}
              {!review.reply && (
                <div className="flex items-center gap-2 text-gray-400 text-[13px] bg-gray-50 rounded-[12px] px-4 py-3">
                  <MessageSquare size={14} />
                  The homeowner has not responded to this review yet.
                </div>
              )}
            </div>

            {/* Stay Details */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6">
              <h2 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[18px] mb-2">Stay Details</h2>
              {review.stayDetails.map((d) => <DetailRow key={d.label} {...d} />)}
            </div>

            {/* Cost Details */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6">
              <h2 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[18px] mb-2">Cost Details</h2>
              {review.costDetails.map((d) => <DetailRow key={d.label} {...d} />)}
            </div>

            {/* Building Facilities */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6">
              <h2 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[18px] mb-4">Building Facilities</h2>
              <div className="flex flex-wrap gap-2">
                {review.facilities.map((f) => (
                  <span key={f} className="bg-gray-100 text-[#10182c] text-[13px] font-medium px-3 py-1.5 rounded-full">{f}</span>
                ))}
              </div>
            </div>

            {/* Accessibility */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6">
              <h2 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[18px] mb-2">Accessibility</h2>
              {review.accessibility.map((d) => <DetailRow key={d.label} {...d} />)}
            </div>

            {/* Appliances */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6">
              <h2 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[18px] mb-2">Appliances / Fixtures</h2>
              <p className="text-gray-500 text-[14px]">{review.appliances}</p>
            </div>

            {/* Language */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6">
              <h2 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[18px] mb-2">Homeowner Language(s)</h2>
              <p className="text-gray-500 text-[14px]">{review.languages}</p>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">

            {/* Similar Reviews */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-5">
              <h3 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[16px] mb-4">Similar Reviews</h3>
              <div className="space-y-4">
                {SIMILAR_REVIEWS.filter((r) => r.id !== id).slice(0, 2).map((r) => (
                  <Link key={r.id} to={`/reviews/${r.id}`} className="flex gap-3 items-center group cursor-pointer">
                    <div className="w-[70px] h-[56px] rounded-[10px] overflow-hidden shrink-0">
                      <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                      <p className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[13px] group-hover:text-[#c85212] transition-colors">{r.title}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <StarRating rating={r.rating} size={11} />
                        <span className="text-gray-400 text-[11px]">{r.rating} ({r.reviews})</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/reviews" className="mt-4 flex items-center gap-1 text-[#c85212] text-[13px] font-bold hover:underline">
                View All Reviews →
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-5">
              <h3 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[16px] mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[28px]">{review.quickStats.rooms}</p>
                  <p className="text-gray-400 text-[12px]">Rooms</p>
                </div>
                <div className="text-center">
                  <p className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[28px]">{review.quickStats.occupants}</p>
                  <p className="text-gray-400 text-[12px]">Occupants</p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 text-center">
                <p className="font-['Mulish',sans-serif] font-bold text-[#c85212] text-[20px]">{review.quickStats.rent}</p>
                <p className="text-gray-400 text-[12px]">Yearly Rent</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#3a414e] text-white mt-16">
        <div className="max-w-[900px] mx-auto px-6 pt-16 pb-10 flex flex-col items-center gap-6">
          <img src={imgApartey2} alt="Apartey" className="h-[60px] object-contain" />
          <div className="bg-[#757a83] rounded-[32px] flex items-center overflow-hidden w-full max-w-[600px]">
            <input type="email" placeholder="Enter your email address" className="flex-1 bg-transparent px-6 py-4 text-white/60 text-[16px] outline-none placeholder:text-white/40" />
            <button className="bg-white text-[#3a414e] font-bold px-8 py-4 rounded-[32px] text-[16px] m-1 hover:bg-gray-100 transition-colors whitespace-nowrap">Submit →</button>
          </div>
          <p className="text-white/50 text-[15px]">2,000+ users end their week inspired. Join us today.</p>
        </div>
        <div className="border-t border-white/10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img src={imgApartey2} alt="Apartey" className="h-[50px] object-contain mb-4" />
            <p className="text-white/60 text-[13px] leading-relaxed max-w-[260px]">Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions.</p>
            <p className="text-[#757a83] text-[12px] mt-4">© 2025 Apartey. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-['Mulish',sans-serif] font-bold text-[16px] mb-3">Company</h4>
            <div className="flex flex-col gap-2.5 text-white/70 text-[14px]">
              <Link to="/about" className="hover:text-white transition-colors">About us</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-['Mulish',sans-serif] font-bold text-[16px] mb-3">Support</h4>
            <div className="flex flex-col gap-2.5 text-white/70 text-[14px]">
              <a href="#" className="hover:text-white transition-colors">Contact us</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="font-['Mulish',sans-serif] font-bold text-[16px] mb-3">Legal</h4>
            <div className="flex flex-col gap-2.5 text-white/70 text-[14px]">
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
