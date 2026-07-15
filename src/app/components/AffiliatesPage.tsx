import { useState } from "react";
import { Link } from "react-router";
import {
  Gift, Copy, Check, ChevronDown, Share2, Ticket, ShoppingBag, Shirt,
  CreditCard, ArrowRight, Users, Star, Zap, UserPlus, FileText, Award
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";

const MILESTONES = [
  {
    count: 3,
    reward: "Apartey Tote Bag",
    icon: <ShoppingBag size={30} className="text-[#c85212]" />,
    description: "A sturdy, high-quality canvas tote bag—ideal for carrying daily items.",
    color: "from-orange-50 to-orange-100/40",
    border: "border-orange-100",
    badge: "bg-orange-50 text-[#c85212] border-orange-100",
    giftSymbol: "👜"
  },
  {
    count: 7,
    reward: "Cinema Tickets ×2",
    icon: <Ticket size={30} className="text-purple-600" />,
    description: "Two premium movie passes to any cinema, so you can bring a friend.",
    color: "from-purple-50 to-purple-100/40",
    border: "border-purple-100",
    badge: "bg-purple-50 text-purple-600 border-purple-100",
    giftSymbol: "🎬"
  },
  {
    count: 15,
    reward: "Apartey T-Shirt",
    icon: <Shirt size={30} className="text-blue-600" />,
    description: "Our signature high-grade branded tee, built for premium comfort.",
    color: "from-blue-50 to-blue-100/40",
    border: "border-blue-100",
    badge: "bg-blue-50 text-blue-600 border-blue-100",
    giftSymbol: "👕"
  },
  {
    count: 30,
    reward: "₦10,000 Gift Card",
    icon: <CreditCard size={30} className="text-emerald-600" />,
    description: "A digital shopping voucher redeemable instantly at any Apartey partner brand.",
    color: "from-emerald-50 to-emerald-100/40",
    border: "border-emerald-100",
    badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
    giftSymbol: "💳"
  },
];

const STEPS = [
  { icon: <UserPlus size={20} />, label: "Get Your URL", sub: "Create a free profile to obtain your unique link." },
  { icon: <Share2 size={20} />, label: "Share the Link", sub: "Distribute it on social media, WhatsApp groups, or direct messages." },
  { icon: <Users size={20} />, label: "Friends Submit Reviews", sub: "Invited friends must write verified renter reviews or post a house listing." },
  { icon: <Award size={20} />, label: "Earn Branded Merch", sub: "Milestone points build up automatically. Claim rewards instantly." },
];

const FAQS = [
  {
    q: "What counts as a qualifying referral?",
    a: "A referral is successfully recorded when your friend signs up using your link and publishes a property listing or submits a verified review. Simple visits do not qualify as we reward helpful database contributors."
  },
  {
    q: "Can I unlock multiple rewards?",
    a: "Yes! The milestone tracker is cumulative. When you reach 3, you get the tote bag. Reaching 7 gets you cinema tickets while retaining your previous rewards."
  },
  {
    q: "How are digital vouchers and merchandise delivered?",
    a: "Digital gift cards are emailed to your profile address within 24 hours of unlocking the milestone. Physical shirts and bags are shipped for free within 7 business days."
  },
  {
    q: "Is there an upper limit on how many friends I can refer?",
    a: "There are no limits! You will continue to build points and earn items for as long as your link continues to invite active contributors."
  }
];

const MOCK_LINK = "https://apartey.com/ref/yourprofile2025";

export function AffiliatesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [showLinkPanel, setShowLinkPanel] = useState(false);
  const [simulatedScore, setSimulatedScore] = useState(10);

  const handleCopy = () => {
    navigator.clipboard.writeText(MOCK_LINK).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const currentMilestone = MILESTONES.find(m => simulatedScore >= m.count) || MILESTONES[0];
  const nextMilestone = MILESTONES.find(m => simulatedScore < m.count) || null;

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#10182c] font-['Mulish',sans-serif] overflow-x-hidden">
      <SharedNavbar />

      {/* ── HERO SECTION (DARK STYLE) ── */}
      <section className="bg-[#10182c] text-white pt-24 pb-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c85212]/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#fbff79]/10 blur-[80px]" />
        </div>

        <div className="relative max-w-[1100px] mx-auto px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-[#c85212]/20 border border-[#c85212]/30 text-[#fbff79] text-[11px] font-black uppercase tracking-[3px] px-5 py-2 rounded-full mb-8">
              🎁 REFER & EARN
            </span>
            <h1 className="font-['Montserrat',sans-serif] font-black text-white text-[38px] md:text-[58px] leading-[1.08] tracking-[-2px] mb-6">
              Share Apartey with friends.<br />
              <span className="text-[#c85212]">Earn premium gifts.</span>
            </h1>
            <p className="text-white/60 text-[18px] md:text-[21px] max-w-[620px] mx-auto mb-10 leading-relaxed font-medium">
              Invite friends to contribute verified housing reviews or list properties. Climb the milestone ladder and claim tote bags, cinema tickets, and gift cards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowLinkPanel(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[15px] px-8 py-4.5 rounded-[14px] transition-all hover:scale-[1.02]"
              >
                Get Referral Link <ArrowRight size={16} />
              </button>
              <a
                href="#milestones"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-[15px] px-8 py-4.5 rounded-[14px] transition-all"
              >
                Reward Milestones
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE MILESTONES WIDGET ── */}
      <section id="milestones" className="py-20 md:py-24 max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#c85212] font-black text-[12px] uppercase tracking-[3px] block mb-3">🔥 LIVE MILESTONE VISUALIZER</span>
          <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[42px] mb-4">Unlocking rewards is simple</h2>
          <p className="text-gray-500 text-[16px] max-w-[500px] mx-auto">Drag the slider below to simulate your referral progress and see what rewards you unlock.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-[32px] p-6 md:p-10 shadow-sm space-y-8 relative overflow-hidden">
          
          {/* Simulated points controller */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50 p-5 rounded-[20px] border border-gray-250">
            <div>
              <div className="text-gray-400 text-[11px] font-black uppercase tracking-wider">Simulated Referrals</div>
              <div className="text-[28px] font-black text-[#c85212] mt-0.5">{simulatedScore} Friends Joined</div>
            </div>
            
            <div className="w-full sm:w-[320px] space-y-2">
              <input
                type="range"
                min="0"
                max="40"
                value={simulatedScore}
                onChange={e => setSimulatedScore(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c85212]"
              />
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>0 Referrals</span>
                <span>40 Referrals</span>
              </div>
            </div>
          </div>

          {/* Interactive Progress Bar */}
          <div className="relative pt-6">
            <div className="h-2 bg-gray-100 rounded-full relative">
              <div 
                className="h-full bg-gradient-to-r from-[#c85212] to-orange-400 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((simulatedScore / 30) * 100, 100)}%` }}
              />
            </div>

            {/* Checkpoints */}
            <div className="grid grid-cols-4 pt-4 text-center">
              {MILESTONES.map((m, idx) => {
                const isUnlocked = simulatedScore >= m.count;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black transition-all border ${
                      isUnlocked 
                        ? "bg-[#c85212] text-white border-[#c85212] scale-110 shadow-md" 
                        : "bg-gray-100 text-gray-400 border-gray-200"
                    }`}>
                      {m.count}
                    </div>
                    <span className={`text-[12px] font-bold mt-2 ${isUnlocked ? "text-[#c85212]" : "text-gray-400"}`}>
                      {m.reward.split(" ").slice(-1)[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Preview Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
            <div className="bg-gray-50 border border-gray-100 rounded-[20px] p-6 space-y-3">
              <div className="text-[11px] text-emerald-600 font-black uppercase tracking-wider flex items-center gap-1.5">
                <Check size={14} /> Unlocked Rewards
              </div>
              <div className="text-[20px] font-black text-[#10182c]">{currentMilestone.reward}</div>
              <p className="text-gray-500 text-[13px] leading-relaxed">{currentMilestone.description}</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-[20px] p-6 space-y-3 relative opacity-85">
              {nextMilestone ? (
                <>
                  <div className="text-[11px] text-[#c85212] font-black uppercase tracking-wider">
                    ⚡ Next Milestone Reward ({nextMilestone.count} refs required)
                  </div>
                  <div className="text-[20px] font-black text-[#10182c]">{nextMilestone.reward}</div>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    You only need <strong className="text-[#10182c]">{nextMilestone.count - simulatedScore}</strong> more friends to join to unlock this prize.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-4 text-center">
                  <span className="text-[28px] mb-2">🎉</span>
                  <div className="text-[16px] font-black text-[#c85212]">Ultimate Tier Reached!</div>
                  <p className="text-gray-400 text-[12px] mt-1">You have unlocked all currently available milestone items.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR STEPS TIMELINE ── */}
      <section className="py-20 bg-white border-y border-gray-150">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c85212] font-black text-[12px] uppercase tracking-[3px] block mb-3">📋 SIMPLE METHODOLOGY</span>
            <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[32px] md:text-[42px]">How referrals work</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-gray-50 border border-gray-200 rounded-[24px] p-6 text-center hover:border-[#c85212] transition-all relative"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#10182c] text-white text-[13px] font-black flex items-center justify-center shadow-md">
                  {idx + 1}
                </div>
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mx-auto mb-4 mt-2 text-[#c85212]">
                  {s.icon}
                </div>
                <h4 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[15px] mb-2">{s.label}</h4>
                <p className="text-gray-400 text-[13px] leading-relaxed">{s.sub}</p>
              </motion.div>
            ))}
          </div>
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

      {/* ── SHARE BAND WITH COPY FEEDBACK MODAL ── */}
      <section className="bg-[#c85212] py-16 md:py-20 overflow-hidden relative text-white">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#fbff79] blur-[80px]" />
        </div>
        <div className="relative max-w-[800px] mx-auto px-6 text-center z-10">
          <h2 className="font-['Montserrat',sans-serif] font-black text-white text-[30px] md:text-[38px] mb-3 leading-tight">Ready to invite friends?</h2>
          <p className="text-white/85 text-[15px] md:text-[16px] max-w-[500px] mx-auto mb-8">Generate your referral URL and share on group chats or posts to count your entries.</p>
          
          <button
            onClick={() => setShowLinkPanel(true)}
            className="inline-flex items-center gap-2 bg-[#10182c] hover:bg-[#1a2642] text-white font-extrabold text-[15px] px-9 py-5 rounded-[16px] transition-all hover:scale-[1.02]"
          >
            <Share2 size={16} /> Get Referral Link
          </button>
        </div>
      </section>

      {/* LINK DRAWER MODAL */}
      <AnimatePresence>
        {showLinkPanel && (
          <>
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
              onClick={() => setShowLinkPanel(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-[480px] bg-white border border-gray-200 rounded-[28px] shadow-2xl p-7 text-[#10182c]"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[20px]">Your referral link</h3>
                  <p className="text-gray-400 text-[13px]">Copy and paste this URL to earn milestone points.</p>
                </div>
                <button onClick={() => setShowLinkPanel(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
              </div>

              <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-150 rounded-[16px] p-3.5 mb-6">
                <FileText size={16} className="text-gray-400 shrink-0" />
                <span className="text-[#10182c] text-[13px] flex-1 truncate font-mono">{MOCK_LINK}</span>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-[12px] text-[12px] font-extrabold transition-all ${
                    copied 
                      ? "bg-emerald-500 text-white" 
                      : "bg-[#c85212] hover:bg-[#b0460d] text-white"
                  }`}
                >
                  {copied ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Copy</>}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleCopy}
                  className="bg-white border border-gray-250 hover:bg-gray-50 text-[#10182c] font-bold text-[14px] py-3.5 rounded-[14px] transition-all flex items-center justify-center gap-2"
                >
                  <Copy size={14} /> Duplicate Link
                </button>
                <button
                  onClick={() => setShowLinkPanel(false)}
                  className="bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[14px] py-3.5 rounded-[14px] transition-all"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
