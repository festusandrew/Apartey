import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
  Copy, Check, Share2, Users, Clock, CheckCircle2, Gift,
  LogIn, LogOut, FileText, ArrowRight, TrendingUp,
  ChevronLeft, ChevronRight, Banknote, Wallet
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner@2.0.3";
import { AffiliateNavbar } from "./affiliate/AffiliateNavbar";
import { Footer } from "./Footer";
import { useAuth } from "./AuthContext";

const REWARD_PER_REFERRAL = 5000; // ₦5,000 reward per qualified referral

const REFERRAL_LINK = "https://apartey.com/ref/yourprofile2025";

const GIFT_CARDS = [
  { id: "gc-5k", value: "₦5,000 Gift Card", cost: 5000, brand: "Apartey partner brands", giftSymbol: "💳", color: "from-orange-50 to-orange-100/40", border: "border-orange-100" },
  { id: "gc-10k", value: "₦10,000 Gift Card", cost: 10000, brand: "Apartey partner brands", giftSymbol: "🎁", color: "from-emerald-50 to-emerald-100/40", border: "border-emerald-100" },
  { id: "gc-25k", value: "₦25,000 Gift Card", cost: 25000, brand: "Premium retail partners", giftSymbol: "🏆", color: "from-purple-50 to-purple-100/40", border: "border-purple-100" },
  { id: "gc-50k", value: "₦50,000 Gift Card", cost: 50000, brand: "Premium retail partners", giftSymbol: "💎", color: "from-blue-50 to-blue-100/40", border: "border-blue-100" },
];

type ReferralStatus = "qualified" | "pending";

interface Referral {
  id: number;
  name: string;
  action: string;
  date: string;
  status: ReferralStatus;
}

interface Redemption {
  id: number;
  card: string;
  cost: number;
  date: string;
}

// Mock referral activity
const INITIAL_REFERRALS: Referral[] = [
  { id: 1, name: "Ada O.", action: "Published a listing", date: "Jul 14, 2026", status: "qualified" },
  { id: 2, name: "Chidi N.", action: "Submitted a verified review", date: "Jul 12, 2026", status: "qualified" },
  { id: 3, name: "Blessing A.", action: "Signed up — awaiting first contribution", date: "Jul 11, 2026", status: "pending" },
  { id: 4, name: "Tunde K.", action: "Submitted a verified review", date: "Jul 8, 2026", status: "qualified" },
  { id: 5, name: "Ngozi E.", action: "Signed up — awaiting first contribution", date: "Jul 6, 2026", status: "pending" },
  { id: 6, name: "Samuel B.", action: "Published a listing", date: "Jul 2, 2026", status: "qualified" },
];

// How many items each paginated section shows per page
const REFERRALS_PER_PAGE = 4;
const GIFT_CARDS_PER_PAGE = 2;
const REDEMPTIONS_PER_PAGE = 4;

interface PagerProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  label: string;
}

// Compact page controls shared by the dashboard's paginated sections
function Pager({ page, totalPages, onChange, label }: PagerProps) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-between gap-3 mt-5 pt-4 border-t border-gray-100">
      <span className="text-gray-400 text-[12px]">
        Page {page} of {totalPages} · {label}
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-[#10182c] transition-colors enabled:hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-[#10182c] transition-colors enabled:hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export function AffiliateDashboardPage() {
  const navigate = useNavigate();
  const { isAffiliateSignedIn, affiliateSignOut, affiliateName } = useAuth();

  const [referrals] = useState<Referral[]>(INITIAL_REFERRALS);
  const [redemptions, setRedemptions] = useState<Redemption[]>([]);
  const [redeemedValue, setRedeemedValue] = useState(0);
  const [copied, setCopied] = useState(false);

  // Current page per paginated section (1-based)
  const [referralPage, setReferralPage] = useState(1);
  const [giftCardPage, setGiftCardPage] = useState(1);
  const [redemptionPage, setRedemptionPage] = useState(1);

  const qualifiedCount = useMemo(
    () => referrals.filter(r => r.status === "qualified").length,
    [referrals]
  );
  const pendingCount = referrals.length - qualifiedCount;

  const lifetimeEarnings = qualifiedCount * REWARD_PER_REFERRAL;
  const balance = lifetimeEarnings - redeemedValue;

  // ── Pagination slices ──
  const referralPages = Math.max(1, Math.ceil(referrals.length / REFERRALS_PER_PAGE));
  const pagedReferrals = referrals.slice(
    (referralPage - 1) * REFERRALS_PER_PAGE,
    referralPage * REFERRALS_PER_PAGE
  );

  const giftCardPages = Math.max(1, Math.ceil(GIFT_CARDS.length / GIFT_CARDS_PER_PAGE));
  const pagedGiftCards = GIFT_CARDS.slice(
    (giftCardPage - 1) * GIFT_CARDS_PER_PAGE,
    giftCardPage * GIFT_CARDS_PER_PAGE
  );

  const redemptionPages = Math.max(1, Math.ceil(redemptions.length / REDEMPTIONS_PER_PAGE));
  const safeRedemptionPage = Math.min(redemptionPage, redemptionPages);
  const pagedRedemptions = redemptions.slice(
    (safeRedemptionPage - 1) * REDEMPTIONS_PER_PAGE,
    safeRedemptionPage * REDEMPTIONS_PER_PAGE
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(REFERRAL_LINK).then(() => {
      setCopied(true);
      toast.success("Referral link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join me on Apartey",
        text: "Sign up on Apartey with my referral link.",
        url: REFERRAL_LINK,
      }).catch(() => {});
    } else {
      handleCopy();
    }
  };

  const handleRedeem = (card: typeof GIFT_CARDS[0]) => {
    if (balance < card.cost) {
      toast.error("Insufficient balance to redeem this gift card");
      return;
    }
    setRedeemedValue(prev => prev + card.cost);
    setRedemptions(prev => [
      {
        id: Date.now(),
        card: card.value,
        cost: card.cost,
        date: "Just now",
      },
      ...prev,
    ]);
    toast.success(`Redeemed ${card.value}! Gift card code sent to your business email.`);
  };

  // ── AFFILIATE AUTH GATE (independent from the main platform login) ──
  if (!isAffiliateSignedIn) {
    return (
      <div className="min-h-screen bg-[#f5f6f8] text-[#10182c] font-['Mulish',sans-serif] overflow-x-hidden flex flex-col">
        <AffiliateNavbar activePage="Program" />
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-[28px] shadow-sm max-w-[440px] w-full p-9 text-center"
          >
            <div className="w-16 h-16 rounded-[20px] bg-[#c85212]/10 border border-[#c85212]/20 flex items-center justify-center mx-auto mb-6">
              <Banknote size={28} className="text-[#c85212]" />
            </div>
            <h1 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[26px] mb-3">
              Sign in to your affiliate account
            </h1>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              Your affiliate account is separate from any renter or homeowner profile. Sign in or register your business to track referrals and claim ₦5,000 gift cards.
            </p>
            <button
              onClick={() => navigate("/affiliate/signin")}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[15px] py-4 rounded-[14px] transition-all hover:scale-[1.02]"
            >
              <LogIn size={16} /> Sign in
            </button>
            <button
              onClick={() => navigate("/affiliate/signup")}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 bg-[#10182c] hover:bg-[#1a2642] text-white font-bold text-[14px] py-3.5 rounded-[14px] transition-all"
            >
              Register Affiliate Business
            </button>
            <button
              onClick={() => navigate("/earn")}
              className="w-full mt-3 text-gray-500 hover:text-[#10182c] font-bold text-[14px] py-2 transition-colors"
            >
              Learn about Refer &amp; Earn
            </button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const nextCard = GIFT_CARDS.find(c => balance < c.cost) || null;

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#10182c] font-['Mulish',sans-serif] overflow-x-hidden">
      <AffiliateNavbar activePage="Dashboard" />

      {/* ── HEADER ── */}
      <section className="bg-[#10182c] text-white pt-16 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c85212]/20 blur-[100px]" />
        </div>
        <div className="relative max-w-[1100px] mx-auto px-6 z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#c85212]/20 border border-[#c85212]/30 text-[#fbff79] text-[11px] font-black uppercase tracking-[3px] px-4 py-2 rounded-full mb-5">
                <Banknote size={13} className="text-[#fbff79]" /> Affiliate Business Dashboard
              </span>
              <h1 className="font-['Montserrat',sans-serif] font-black text-white text-[32px] md:text-[42px] leading-tight">
                Welcome back{affiliateName ? `, ${affiliateName.split(" ")[0]}` : ""} 👋
              </h1>
              <p className="text-white/60 text-[16px] md:text-[18px] mt-2 max-w-[560px]">
                Track your client referrals and redeem ₦5,000 gift cards instantly.
              </p>
            </div>
            <button
              onClick={() => {
                affiliateSignOut();
                navigate("/earn");
              }}
              className="hidden sm:inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-[13px] px-4 py-2.5 rounded-[12px] transition-all shrink-0"
            >
              <LogOut size={15} /> Sign out
            </button>
          </div>
        </div>
      </section>

      {/* ── STAT CARDS ── */}
      <section className="max-w-[1100px] mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="bg-white border border-gray-200 rounded-[24px] p-7 shadow-sm"
          >
            <div className="flex items-center gap-2 text-gray-400 text-[11px] font-black uppercase tracking-wider mb-3">
              <Wallet size={15} className="text-[#c85212]" /> Available Earnings
            </div>
            <div className="text-[36px] font-black text-[#c85212] leading-none">₦{balance.toLocaleString()}</div>
            <p className="text-gray-500 text-[13px] mt-3">
              ₦{lifetimeEarnings.toLocaleString()} earned · ₦{redeemedValue.toLocaleString()} redeemed
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.4 }}
            className="bg-white border border-gray-200 rounded-[24px] p-7 shadow-sm"
          >
            <div className="flex items-center gap-2 text-gray-400 text-[11px] font-black uppercase tracking-wider mb-3">
              <CheckCircle2 size={15} className="text-emerald-600" /> Qualified Referrals
            </div>
            <div className="text-[36px] font-black text-[#10182c] leading-none">{qualifiedCount}</div>
            <p className="text-gray-500 text-[13px] mt-3">
              {pendingCount} pending · ₦{REWARD_PER_REFERRAL.toLocaleString()} each
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.4 }}
            className="bg-white border border-gray-200 rounded-[24px] p-7 shadow-sm"
          >
            <div className="flex items-center gap-2 text-gray-400 text-[11px] font-black uppercase tracking-wider mb-3">
              <Gift size={15} className="text-purple-600" /> Gift Cards Redeemed
            </div>
            <div className="text-[36px] font-black text-[#10182c] leading-none">{redemptions.length}</div>
            <p className="text-gray-500 text-[13px] mt-3">
              {nextCard ? `₦${(nextCard.cost - balance).toLocaleString()} to next card` : "Top tier unlocked"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── REFERRAL LINK ── */}
      <section className="max-w-[1100px] mx-auto px-6 mt-8">
        <div className="bg-white border border-gray-200 rounded-[24px] p-7 shadow-sm">
          <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[20px] mb-1">Your referral link</h2>
          <p className="text-gray-500 text-[14px] mb-5">
            Share this link. You earn ₦{REWARD_PER_REFERRAL.toLocaleString()} when a friend or client signs up and publishes a listing or verified review.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-[16px] p-3.5 flex-1 min-w-0">
              <FileText size={16} className="text-gray-400 shrink-0" />
              <span className="text-[#10182c] text-[13px] flex-1 truncate font-mono">{REFERRAL_LINK}</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className={`flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-[16px] text-[14px] font-extrabold transition-all ${
                  copied ? "bg-emerald-500 text-white" : "bg-[#c85212] hover:bg-[#b0460d] text-white"
                }`}
              >
                {copied ? <><Check size={15} /> Copied!</> : <><Copy size={15} /> Copy</>}
              </button>
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-[16px] text-[14px] font-bold bg-[#10182c] hover:bg-[#1a2642] text-white transition-all"
              >
                <Share2 size={15} /> Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN GRID: REFERRALS + REDEEM ── */}
      <section className="max-w-[1100px] mx-auto px-6 mt-8 pb-4 grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Recent referrals */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-[24px] p-7 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <Users size={18} className="text-[#c85212]" />
            <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[20px]">Recent referrals</h2>
          </div>
          <div className="space-y-3">
            {pagedReferrals.map(r => (
              <div key={r.id} className="flex items-start gap-3 p-3.5 rounded-[16px] border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[13px] font-black text-[#10182c] shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[14px] text-[#10182c] truncate">{r.name}</span>
                    {r.status === "qualified" ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                        <CheckCircle2 size={11} /> +₦{REWARD_PER_REFERRAL.toLocaleString()}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full shrink-0">
                        <Clock size={11} /> Pending
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-[12px] mt-0.5 truncate">{r.action}</p>
                  <p className="text-gray-300 text-[11px] mt-0.5">{r.date}</p>
                </div>
              </div>
            ))}
          </div>
          <Pager
            page={referralPage}
            totalPages={referralPages}
            onChange={setReferralPage}
            label={`${referrals.length} total`}
          />
        </div>

        {/* Redeem gift cards */}
        <div className="lg:col-span-3 bg-white border border-gray-200 rounded-[24px] p-7 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Gift size={18} className="text-[#c85212]" />
            <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[20px]">Redeem Gift Cards</h2>
          </div>
          <p className="text-gray-500 text-[14px] mb-5">
            You have <strong className="text-[#c85212]">₦{balance.toLocaleString()}</strong> available balance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pagedGiftCards.map(card => {
              const canRedeem = balance >= card.cost;
              return (
                <div
                  key={card.id}
                  className={`bg-gradient-to-br ${card.color} border ${card.border} rounded-[20px] p-5 flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-[32px] leading-none">{card.giftSymbol}</div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#c85212] bg-white/70 border border-[#c85212]/20 px-2.5 py-1 rounded-full">
                      <Banknote size={12} /> {card.value}
                    </span>
                  </div>
                  <h4 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[16px]">{card.value}</h4>
                  <p className="text-gray-500 text-[12px] mb-4">{card.brand}</p>
                  <button
                    onClick={() => handleRedeem(card)}
                    disabled={!canRedeem}
                    className={`mt-auto w-full py-3 rounded-[14px] text-[13px] font-extrabold transition-all flex items-center justify-center gap-1.5 ${
                      canRedeem
                        ? "bg-[#c85212] hover:bg-[#b0460d] text-white hover:scale-[1.02]"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                    }`}
                  >
                    {canRedeem ? <>Redeem <ArrowRight size={14} /></> : `Need ₦${(card.cost - balance).toLocaleString()} more`}
                  </button>
                </div>
              );
            })}
          </div>
          <Pager
            page={giftCardPage}
            totalPages={giftCardPages}
            onChange={setGiftCardPage}
            label={`${GIFT_CARDS.length} rewards`}
          />
        </div>
      </section>

      {/* ── REDEMPTION HISTORY ── */}
      <section className="max-w-[1100px] mx-auto px-6 mt-8 pb-20">
        <div className="bg-white border border-gray-200 rounded-[24px] p-7 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <History size={18} className="text-[#c85212]" />
            <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[20px]">Redemption history</h2>
          </div>

          <AnimatePresence initial={false}>
            {redemptions.length === 0 ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center mx-auto mb-4">
                  <Gift size={22} className="text-gray-300" />
                </div>
                <p className="text-gray-400 text-[14px]">No redemptions yet. Select a gift card above to redeem.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {pagedRedemptions.map(r => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between gap-3 p-4 rounded-[16px] border border-gray-100 bg-gray-50/60"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-bold text-[14px] text-[#10182c]">{r.card}</p>
                        <p className="text-gray-400 text-[12px]">{r.date}</p>
                      </div>
                    </div>
                    <span className="text-[13px] font-extrabold text-[#c85212] flex items-center gap-1 shrink-0">
                      <Banknote size={13} /> -₦{r.cost.toLocaleString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
          <Pager
            page={safeRedemptionPage}
            totalPages={redemptionPages}
            onChange={setRedemptionPage}
            label={`${redemptions.length} total`}
          />
        </div>


        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/earn")}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#10182c] font-bold text-[14px] transition-colors"
          >
            <TrendingUp size={15} /> Learn more about how earnings work
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
