import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Gift, Copy, Check, ChevronDown, Share2, CreditCard, ArrowRight, Users,
  UserPlus, FileText, Coins, TrendingUp, LayoutDashboard
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AffiliateNavbar } from "./affiliate/AffiliateNavbar";
import { Footer } from "./Footer";
import { useAuth } from "./AuthContext";

// Points awarded for each qualifying referral (friend publishes a listing or verified review)
const POINTS_PER_REFERRAL = 100;

const GIFT_CARDS = [
  { value: "₦5,000 Gift Card", cost: 500, brand: "Apartey partner brands", giftSymbol: "💳", color: "from-orange-50 to-orange-100/40", border: "border-orange-100" },
  { value: "₦10,000 Gift Card", cost: 1000, brand: "Apartey partner brands", giftSymbol: "🎁", color: "from-emerald-50 to-emerald-100/40", border: "border-emerald-100" },
  { value: "₦25,000 Gift Card", cost: 2500, brand: "Premium retail partners", giftSymbol: "🏆", color: "from-purple-50 to-purple-100/40", border: "border-purple-100" },
  { value: "₦50,000 Gift Card", cost: 5000, brand: "Premium retail partners", giftSymbol: "💎", color: "from-blue-50 to-blue-100/40", border: "border-blue-100" },
];

const STEPS = [
  { icon: <UserPlus size={20} />, label: "Get Your Link", sub: "Sign up to claim your unique affiliate link from the dashboard." },
  { icon: <Share2 size={20} />, label: "Share the Link", sub: "Distribute it on social media, WhatsApp groups, or direct messages." },
  { icon: <Users size={20} />, label: "Friends Contribute", sub: "Invited friends must write a verified renter review or post a house listing." },
  { icon: <Coins size={20} />, label: "Earn & Redeem", sub: "Collect points automatically and redeem them for gift cards anytime." },
];

const FAQS = [
  {
    q: "How do I earn points?",
    a: `You earn ${POINTS_PER_REFERRAL} points every time a friend signs up with your link and publishes a property listing or submits a verified review. Points stack up in your dashboard balance automatically.`
  },
  {
    q: "What counts as a qualifying referral?",
    a: "A referral is recorded when your friend signs up using your link and publishes a property listing or submits a verified review. Simple visits or signups alone do not qualify, as we reward helpful database contributors."
  },
  {
    q: "How do I redeem my points for a gift card?",
    a: "Head to your affiliate dashboard, pick any gift card whose point cost you can afford, and hit Redeem. Your balance is deducted instantly and the digital gift card is emailed to your profile address within 24 hours."
  },
  {
    q: "Is there an upper limit on how many friends I can refer?",
    a: "There are no limits. You keep accumulating points for as long as your link continues to invite active contributors, and you can redeem as many gift cards as your balance allows."
  }
];

export function AffiliatesPage() {
  const navigate = useNavigate();
  const { isAffiliateSignedIn } = useAuth();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [simulatedReferrals, setSimulatedReferrals] = useState(10);

  const goToDashboard = () => {
    // Affiliate accounts are separate — signed-in affiliates go to the dashboard,
    // everyone else is sent to the affiliate signup.
    navigate(isAffiliateSignedIn ? "/affiliate/dashboard" : "/affiliate/signup");
  };

  const simulatedPoints = simulatedReferrals * POINTS_PER_REFERRAL;
  const affordableCards = GIFT_CARDS.filter(c => simulatedPoints >= c.cost);
  const topAffordable = affordableCards[affordableCards.length - 1] || null;
  const nextCard = GIFT_CARDS.find(c => simulatedPoints < c.cost) || null;

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#10182c] font-['Mulish',sans-serif] overflow-x-hidden">
      <AffiliateNavbar activePage="Program" />

      {/* ── HERO SECTION (DARK STYLE) ── */}
      <section className="bg-[#10182c] text-white pt-24 pb-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c85212]/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#fbff79]/10 blur-[80px]" />
        </div>

        <div className="relative max-w-[1100px] mx-auto px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-[#c85212]/20 border border-[#c85212]/30 text-[#fbff79] text-[11px] font-black uppercase tracking-[3px] px-5 py-2 rounded-full mb-8">
              🎁 REFER &amp; EARN
            </span>
            <h1 className="font-['Montserrat',sans-serif] font-black text-white text-[38px] md:text-[58px] leading-[1.08] tracking-[-2px] mb-6">
              Refer friends. Earn points.<br />
              <span className="text-[#c85212]">Redeem for gift cards.</span>
            </h1>
            <p className="text-white/60 text-[18px] md:text-[21px] max-w-[640px] mx-auto mb-10 leading-relaxed font-medium">
              Invite friends to contribute verified housing reviews or list properties. Earn {POINTS_PER_REFERRAL} points for every qualified referral and turn your balance into gift cards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={goToDashboard}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[15px] px-8 py-4.5 rounded-[14px] transition-all hover:scale-[1.02]"
              >
                {isAffiliateSignedIn ? <>Go to Dashboard <LayoutDashboard size={16} /></> : <>Join &amp; Get Your Link <ArrowRight size={16} /></>}
              </button>
              <a
                href="#rewards"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-[15px] px-8 py-4.5 rounded-[14px] transition-all"
              >
                View Gift Cards
              </a>
            </div>

            {!isAffiliateSignedIn && (
              <p className="text-white/50 text-[14px] mt-6">
                Already an affiliate?{" "}
                <button
                  onClick={() => navigate("/affiliate/signin")}
                  className="text-[#fbff79] font-bold hover:underline"
                >
                  Sign in
                </button>
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE POINTS CALCULATOR ── */}
      <section id="rewards" className="py-20 md:py-24 max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#c85212] font-black text-[12px] uppercase tracking-[3px] block mb-3">🔥 POINTS CALCULATOR</span>
          <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[42px] mb-4">See what your points unlock</h2>
          <p className="text-gray-500 text-[16px] max-w-[520px] mx-auto">Drag the slider to simulate qualified referrals and watch your points balance grow into gift cards.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-[32px] p-6 md:p-10 shadow-sm space-y-8 relative overflow-hidden">

          {/* Simulated points controller */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50 p-5 rounded-[20px] border border-gray-250">
            <div>
              <div className="text-gray-400 text-[11px] font-black uppercase tracking-wider">Qualified Referrals</div>
              <div className="text-[28px] font-black text-[#c85212] mt-0.5">{simulatedReferrals} Friends</div>
              <div className="text-[13px] font-bold text-[#10182c] mt-1 flex items-center gap-1.5">
                <Coins size={14} className="text-[#c85212]" /> {simulatedPoints.toLocaleString()} points earned
              </div>
            </div>

            <div className="w-full sm:w-[320px] space-y-2">
              <input
                type="range"
                min="0"
                max="60"
                value={simulatedReferrals}
                onChange={e => setSimulatedReferrals(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c85212]"
              />
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>0 Referrals</span>
                <span>60 Referrals</span>
              </div>
            </div>
          </div>

          {/* Detailed Preview Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
            <div className="bg-gray-50 border border-gray-100 rounded-[20px] p-6 space-y-3">
              <div className="text-[11px] text-emerald-600 font-black uppercase tracking-wider flex items-center gap-1.5">
                <Check size={14} /> You Can Redeem Now
              </div>
              {topAffordable ? (
                <>
                  <div className="text-[20px] font-black text-[#10182c]">{topAffordable.value}</div>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    With {simulatedPoints.toLocaleString()} points you can claim up to a {topAffordable.value.toLowerCase()} redeemable at {topAffordable.brand}.
                  </p>
                </>
              ) : (
                <>
                  <div className="text-[20px] font-black text-[#10182c]">Keep going!</div>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    Refer a few more friends to reach your first gift card at {GIFT_CARDS[0].cost} points.
                  </p>
                </>
              )}
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-[20px] p-6 space-y-3 relative opacity-85">
              {nextCard ? (
                <>
                  <div className="text-[11px] text-[#c85212] font-black uppercase tracking-wider">
                    ⚡ Next Gift Card ({nextCard.cost.toLocaleString()} pts)
                  </div>
                  <div className="text-[20px] font-black text-[#10182c]">{nextCard.value}</div>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    You only need <strong className="text-[#10182c]">{Math.ceil((nextCard.cost - simulatedPoints) / POINTS_PER_REFERRAL)}</strong> more qualified referrals to unlock this reward.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-4 text-center">
                  <span className="text-[28px] mb-2">🎉</span>
                  <div className="text-[16px] font-black text-[#c85212]">Top Tier Unlocked!</div>
                  <p className="text-gray-400 text-[12px] mt-1">You can redeem the highest-value gift card available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── GIFT CARD CATALOGUE ── */}
      <section className="py-20 bg-white border-y border-gray-150">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c85212] font-black text-[12px] uppercase tracking-[3px] block mb-3">🎁 REWARDS CATALOGUE</span>
            <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[42px]">Redeem points for gift cards</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GIFT_CARDS.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`bg-gradient-to-br ${card.color} border ${card.border} rounded-[24px] p-6 text-center hover:scale-[1.02] transition-all`}
              >
                <div className="text-[40px] mb-3">{card.giftSymbol}</div>
                <h4 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[18px] mb-1">{card.value}</h4>
                <p className="text-gray-500 text-[12px] mb-4">{card.brand}</p>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-extrabold text-[#c85212] bg-white/70 border border-[#c85212]/20 px-3 py-1.5 rounded-full">
                  <Coins size={13} /> {card.cost.toLocaleString()} points
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={goToDashboard}
              className="inline-flex items-center gap-2 bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[15px] px-8 py-4 rounded-[16px] transition-all hover:scale-[1.02]"
            >
              <TrendingUp size={16} /> Start earning points
            </button>
          </div>
        </div>
      </section>

      {/* ── FOUR STEPS TIMELINE ── */}
      <section className="py-20 max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#c85212] font-black text-[12px] uppercase tracking-[3px] block mb-3">📋 SIMPLE METHODOLOGY</span>
          <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[42px]">How it works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-[24px] p-6 text-center hover:border-[#c85212] transition-all relative"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#10182c] text-white text-[13px] font-black flex items-center justify-center shadow-md">
                {idx + 1}
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center mx-auto mb-4 mt-2 text-[#c85212]">
                {s.icon}
              </div>
              <h4 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[15px] mb-2">{s.label}</h4>
              <p className="text-gray-400 text-[13px] leading-relaxed">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-24 max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#c85212] font-black text-[12px] uppercase tracking-[3px] block mb-3">❓ FAQ</span>
          <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[38px]">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-transparent border border-gray-200 rounded-[20px] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-all focus:outline-none"
                >
                  <span className="font-bold text-[16px] text-[#10182c] pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#c85212] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[14px] text-gray-500 leading-relaxed border-t border-gray-150">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SHARE BAND CTA ── */}
      <section className="bg-[#c85212] py-16 md:py-20 overflow-hidden relative text-white">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#fbff79] blur-[80px]" />
        </div>
        <div className="relative max-w-[800px] mx-auto px-6 text-center z-10">
          <h2 className="font-['Montserrat',sans-serif] font-black text-white text-[30px] md:text-[38px] mb-3 leading-tight">Ready to start earning?</h2>
          <p className="text-white/85 text-[15px] md:text-[16px] max-w-[500px] mx-auto mb-8">Open your dashboard, grab your referral link, and turn every qualified referral into points toward gift cards.</p>

          <button
            onClick={goToDashboard}
            className="inline-flex items-center gap-2 bg-[#10182c] hover:bg-[#1a2642] text-white font-extrabold text-[15px] px-9 py-5 rounded-[16px] transition-all hover:scale-[1.02]"
          >
            <LayoutDashboard size={16} /> Open Affiliate Dashboard
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
