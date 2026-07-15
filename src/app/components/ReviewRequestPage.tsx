import { useState } from "react";
import { useParams, Link } from "react-router";
import { Star, MapPin, ChevronLeft, Check, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner@2.0.3";
import imgApartey3 from "../../imports/Listings/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";

// In a real app this would be fetched from the API via the property ID.
// We mock a lookup from the IDs used in the dashboards.
const PROPERTY_LOOKUP: Record<string, { title: string; location: string; homeowner: string }> = {
  "1": { title: "2 Pankshin Road, Pankshin", location: "Plateau, Nigeria", homeowner: "Michael Okafor" },
  "2": { title: "10 Oyo Street, Ibadan", location: "Oyo, Nigeria", homeowner: "Michael Okafor" },
  "3": { title: "15 Enugu Avenue, Enugu", location: "Enugu, Nigeria", homeowner: "Michael Okafor" },
  "4": { title: "Victoria Island Flat", location: "Lagos, Nigeria", homeowner: "Michael Okafor" },
};

const FALLBACK = { title: "Apartey Property", location: "Nigeria", homeowner: "the homeowner" };

const CATEGORIES = [
  { id: "overall", label: "Overall Experience" },
  { id: "value", label: "Value for Money" },
  { id: "condition", label: "Property Condition" },
  { id: "communication", label: "Communication" },
  { id: "noise", label: "Noise Level" },
];

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i)}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            size={28}
            className={
              i <= (hover || value)
                ? "fill-[#c85212] text-[#c85212]"
                : "fill-gray-200 text-gray-200"
            }
          />
        </button>
      ))}
    </div>
  );
}

export function ReviewRequestPage() {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTY_LOOKUP[id ?? ""] ?? FALLBACK;

  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [reviewText, setReviewText] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const overallRating = ratings["overall"] ?? 0;
  const canSubmit = overallRating > 0 && reviewText.trim().length > 20;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center px-4 font-['Inter',sans-serif]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[24px] shadow-lg border border-gray-100 p-10 max-w-[480px] w-full text-center"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <Check size={28} className="text-green-500" />
          </div>
          <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[24px] mb-2">
            Review submitted!
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-2">
            Thank you for reviewing <strong>{property.title}</strong>. Your feedback helps future renters make better decisions.
          </p>
          <div className="flex items-center justify-center gap-0.5 my-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} className={i <= overallRating ? "fill-[#c85212] text-[#c85212]" : "fill-gray-200 text-gray-200"} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              to="/reviews"
              className="flex-1 bg-[#10182c] hover:bg-[#1a2642] text-white font-bold text-[14px] py-3 rounded-[12px] transition-colors text-center"
            >
              Read more reviews
            </Link>
            <Link
              to="/"
              className="flex-1 border border-gray-200 hover:bg-gray-50 text-[#10182c] font-bold text-[14px] py-3 rounded-[12px] transition-colors text-center"
            >
              Back to home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] font-['Inter',sans-serif]">
      {/* Navbar */}
      <nav className="bg-white h-[64px] flex items-center px-6 border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between w-full max-w-[900px] mx-auto">
          <Link to="/">
            <img src={imgApartey3} alt="Apartey" className="h-[32px] object-contain" />
          </Link>
          <Link to="/reviews" className="flex items-center gap-1.5 text-[#c85212] text-[13px] font-medium hover:underline">
            <ChevronLeft size={15} /> All Reviews
          </Link>
        </div>
      </nav>

      <div className="max-w-[680px] mx-auto px-4 py-10">

        {/* Property header */}
        <div className="bg-[#10182c] rounded-[20px] p-6 mb-8 text-white">
          <p className="text-white/50 text-[12px] uppercase tracking-widest mb-1">Reviewing</p>
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[22px] leading-snug mb-1">
            {property.title}
          </h1>
          <div className="flex items-center gap-1.5 text-white/60 text-[13px]">
            <MapPin size={13} className="text-[#c85212]" />
            {property.location}
          </div>
          <p className="text-white/40 text-[13px] mt-2">
            {property.homeowner} has invited you to share your experience.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Star ratings per category */}
          <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[17px]">Rate your experience</h2>
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="flex items-center justify-between gap-4">
                <span className="text-[14px] text-gray-600 min-w-[160px]">{cat.label}</span>
                <StarPicker
                  value={ratings[cat.id] ?? 0}
                  onChange={(v) => setRatings((prev) => ({ ...prev, [cat.id]: v }))}
                />
              </div>
            ))}
          </div>

          {/* Written review */}
          <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 space-y-3">
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[17px]">Write your review</h2>
            <p className="text-gray-400 text-[13px]">Be honest — your review helps future renters make better decisions.</p>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={5}
              placeholder="Describe your experience living here. What was great? What could be improved?"
              className="w-full border border-gray-200 rounded-[12px] px-4 py-3 text-[14px] resize-none focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all"
            />
            <p className={`text-[12px] text-right ${reviewText.length < 20 ? "text-gray-300" : "text-green-500"}`}>
              {reviewText.length} / 20 min characters
            </p>
          </div>

          {/* Identity */}
          <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[17px]">Your identity</h2>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setAnonymous((a) => !a)}
                className={`w-10 h-6 rounded-full transition-colors relative ${anonymous ? "bg-[#c85212]" : "bg-gray-200"}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${anonymous ? "left-4.5" : "left-0.5"}`} />
              </div>
              <span className="text-[14px] text-[#10182c]">Post anonymously</span>
            </label>
            <AnimatePresence>
              {!anonymous && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (e.g. Amara O.)"
                    className="w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#c85212] focus:ring-1 focus:ring-[#c85212]/20 transition-all"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit || submitting}
            className="w-full bg-[#c85212] hover:bg-[#a6430f] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-[15px] py-4 rounded-[14px] transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            {submitting ? (
              <span className="animate-pulse">Submitting…</span>
            ) : (
              <><Send size={16} /> Submit Review</>
            )}
          </button>

          <p className="text-center text-gray-400 text-[12px]">
            By submitting, you agree to Apartey's{" "}
            <Link to="/cookies" className="text-[#c85212] hover:underline">review guidelines</Link>.
          </p>
        </form>
      </div>
    </div>
  );
}
