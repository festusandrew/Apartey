import { AnimatedSection } from "./ScrollAnimations";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ThumbsUp, MessageCircle, Shield, Home, Loader2, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router";

type ReviewReply = { ownerName: string; text: string };

type Review = {
  id: number;
  address: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  helpful: number;
  replies: number;
  verified: boolean;
  ownerReply?: ReviewReply;
};

const ALL_REVIEWS: Review[] = [
  {
    id: 1,
    address: "14 Shoreditch High St",
    location: "London E1",
    rating: 4.5,
    review: "Brilliant location right in the heart of East London. The flat was well-maintained and the homeowner was responsive. Only slight issue was street noise on weekends, but ear plugs sorted that. Would absolutely recommend!",
    date: "Jan 24, 2026",
    helpful: 23,
    replies: 2,
    verified: true,
    ownerReply: {
      ownerName: "James A. (Homeowner)",
      text: "Thank you so much for the kind words! The street noise is something we're actively working on — secondary glazing is being installed this spring. Really glad you enjoyed the location as much as we do.",
    },
  },
  {
    id: 2,
    address: "7 Clifton Crescent",
    location: "Bristol BS8",
    rating: 4.0,
    review: "Gorgeous Victorian conversion with loads of character. The communal gardens were a lovely touch, and Clifton Village is just a short walk away. Parking can be tricky but the area more than makes up for it.",
    date: "Jan 18, 2026",
    helpful: 18,
    replies: 1,
    verified: true,
    ownerReply: {
      ownerName: "Claire M. (Homeowner)",
      text: "So pleased you loved Clifton! Parking is the one thing we can't fix unfortunately — the area's charm is worth it though. Thank you for being a wonderful tenant.",
    },
  },
  {
    id: 3,
    address: "22 Deansgate Square",
    location: "Manchester M15",
    rating: 3.5,
    review: "Modern build with fantastic city views from the 12th floor. The concierge service is excellent. Gym and pool are great amenities. Slightly overpriced for the area but the quality of finish justifies it.",
    date: "Jan 10, 2026",
    helpful: 12,
    replies: 0,
    verified: false,
  },
  {
    id: 4,
    address: "3 Royal Crescent",
    location: "Bath BA1",
    rating: 5.0,
    review: "An absolute gem. Georgian architecture with all the modern comforts inside. The homeowner went above and beyond — left a welcome basket and a guide to the best local spots. Genuinely felt like home from day one.",
    date: "Dec 30, 2025",
    helpful: 41,
    replies: 1,
    verified: true,
    ownerReply: {
      ownerName: "Patricia H. (Homeowner)",
      text: "It was our absolute pleasure! We always want tenants to feel at home from day one. Hope Bath treated you as well as you deserve — the welcome basket is a small gesture for such wonderful people.",
    },
  },
  {
    id: 5,
    address: "18 Princes Street",
    location: "Edinburgh EH2",
    rating: 4.5,
    review: "Stunning views of the castle from the living room. The flat itself is bright, spacious and tastefully decorated. Heating could be more consistent in winter but overall a fantastic place to live.",
    date: "Dec 15, 2025",
    helpful: 29,
    replies: 1,
    verified: true,
    ownerReply: {
      ownerName: "Alistair F. (Homeowner)",
      text: "Thank you for the honest feedback on the heating — we've since upgraded to a smart Nest thermostat. Should be much more consistent for future tenants. Glad you loved the castle views!",
    },
  },
  {
    id: 6,
    address: "55 Lark Lane",
    location: "Liverpool L17",
    rating: 3.5,
    review: "Lovely bohemian neighbourhood with brilliant independent cafes and a real community feel. The property itself needed a few fixes on arrival but the agent sorted them out within a week. Good value for the area.",
    date: "Nov 28, 2025",
    helpful: 9,
    replies: 0,
    verified: false,
  },
];

const PAGE_SIZE = 3;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-[14px] h-[14px] ${i <= Math.round(rating) ? "fill-[#FBC948] text-[#FBC948]" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-[#10182c]/6 p-5 md:p-6 relative overflow-hidden hover:border-[#c85212]/15 hover:shadow-[0_12px_40px_rgba(16,24,44,0.08)] transition-all duration-400"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c85212] via-[#c85212]/60 to-transparent" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] bg-[#10182c]/5 rounded-xl flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-[#c85212]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[16px] md:text-[18px] leading-[1.2] tracking-[0.1px]">
                {review.address}
              </h4>
              {review.verified && <Shield className="w-3.5 h-3.5 text-[#4CAF50]" />}
            </div>
            <p className="font-['Mulish',sans-serif] text-[#10182c]/45 text-[13px] tracking-[0.3px] mt-0.5">
              {review.location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-[#FBC948]/10 rounded-full px-2.5 py-1 shrink-0">
          <span className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[14px] tracking-[0.2px]">
            {review.rating.toFixed(1)}
          </span>
          <Star className="w-[14px] h-[14px] fill-[#FBC948] text-[#FBC948]" />
        </div>
      </div>

      <div className="mb-4">
        <StarRating rating={review.rating} />
      </div>

      <p className="font-['Mulish',sans-serif] text-[#10182c]/65 text-[14px] md:text-[15px] leading-[1.65] tracking-[0.2px] mb-5">
        {review.review}
      </p>

      {/* Homeowner reply */}
      {review.ownerReply && (
        <div className="border-l-2 border-[#c85212]/50 pl-4 bg-[#fff9f6] rounded-r-[12px] p-4 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#c85212] flex items-center justify-center shrink-0">
              <Home className="w-3 h-3 text-white" />
            </div>
            <span className="font-['Mulish',sans-serif] font-bold text-[#c85212] text-[12px] tracking-[0.3px]">
              {review.ownerReply.ownerName}
            </span>
          </div>
          <p className="font-['Mulish',sans-serif] text-[#10182c]/70 text-[13px] leading-[1.6] tracking-[0.2px]">
            "{review.ownerReply.text}"
          </p>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-[#10182c]/6">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-[#10182c]/40 hover:text-[#c85212] transition-colors cursor-pointer">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span className="font-['Mulish',sans-serif] text-[12px] tracking-[0.3px]">
              Helpful ({review.helpful})
            </span>
          </button>
          <button className="flex items-center gap-1.5 text-[#10182c]/40 hover:text-[#c85212] transition-colors cursor-pointer">
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="font-['Mulish',sans-serif] text-[12px] tracking-[0.3px]">
              {review.replies} {review.replies === 1 ? "reply" : "replies"}
            </span>
          </button>
        </div>
        <span className="font-['Mulish',sans-serif] text-[#10182c]/35 text-[12px] tracking-[0.3px]">
          {review.date}
        </span>
      </div>
    </motion.div>
  );
}

export function CommunityInsights() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);

  const visibleReviews = ALL_REVIEWS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_REVIEWS.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, ALL_REVIEWS.length));
      setIsLoading(false);
    }, 700);
  };

  return (
    <section id="insights" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fb] via-white to-[#fdf8f5]" />

      <div className="relative max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <AnimatedSection variant="fadeUp" className="mb-12 md:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-[3px] rounded-full bg-[#c85212]" />
            <span className="font-['Mulish',sans-serif] text-[#c85212] text-[12px] md:text-[13px] uppercase tracking-[2px]">
              Community Reviews
            </span>
          </div>
          <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.5px]">
            Recent Community Insights
          </h2>
          <p className="font-['Mulish',sans-serif] text-[#10182c]/60 text-[15px] md:text-[17px] tracking-[0.2px] mt-3 max-w-[480px]">
            See what verified residents are saying — and how homeowners respond.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Reviews column */}
          <div className="flex flex-col gap-4 flex-1 lg:max-w-[50%]">
            <AnimatePresence mode="popLayout">
              {visibleReviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </AnimatePresence>

            {hasMore ? (
              <motion.button
                onClick={handleLoadMore}
                disabled={isLoading}
                whileHover={isLoading ? {} : { scale: 1.02 }}
                whileTap={isLoading ? {} : { scale: 0.98 }}
                className="w-full py-3.5 rounded-xl border-2 border-dashed border-[#10182c]/10 hover:border-[#c85212]/30 text-[#10182c]/40 hover:text-[#c85212] font-['Mulish',sans-serif] text-[14px] tracking-[0.3px] cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Loading…</>
                ) : (
                  <>Load More Reviews ({ALL_REVIEWS.length - visibleCount} remaining)</>
                )}
              </motion.button>
            ) : (
              <div className="w-full py-3.5 rounded-xl bg-[#10182c]/3 text-center text-[#10182c]/35 font-['Mulish',sans-serif] text-[13px] tracking-[0.3px]">
                You've seen all {ALL_REVIEWS.length} reviews
              </div>
            )}

            {/* Read all reviews CTA */}
            <Link
              to="/reviews"
              className="flex items-center justify-center gap-2 w-full mt-2 py-3.5 bg-[#10182c] hover:bg-[#1a2642] text-white font-['Mulish',sans-serif] font-bold text-[14px] tracking-[0.3px] rounded-xl transition-colors group"
            >
              Read All Reviews
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Map column */}
          <AnimatedSection
            variant="fadeRight"
            delay={0.3}
            className="flex-1 min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden relative"
          >
            <div className="w-full h-full relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Map showing property locations"
                className="w-full h-full object-cover rounded-2xl min-h-[400px] lg:min-h-[700px] group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10182c]/20 to-transparent rounded-2xl" />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-[30%] left-[40%] bg-[#c85212] rounded-full w-[32px] h-[32px] flex items-center justify-center shadow-lg ring-4 ring-[#c85212]/20"
              >
                <MapPin className="w-4 h-4 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[50%] left-[60%] bg-[#10182c] rounded-full w-[28px] h-[28px] flex items-center justify-center shadow-lg ring-4 ring-[#10182c]/20"
              >
                <MapPin className="w-3.5 h-3.5 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 1 }}
                className="absolute top-[65%] left-[35%] bg-[#c85212] rounded-full w-[24px] h-[24px] flex items-center justify-center shadow-lg ring-4 ring-[#c85212]/20"
              >
                <MapPin className="w-3 h-3 text-white" />
              </motion.div>

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg flex items-center gap-2 cursor-pointer hover:bg-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#c85212]" />
                  <span className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[14px] tracking-[0.3px]">
                    View Full Map
                  </span>
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
