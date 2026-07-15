import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Store, Users, ArrowRight, ShoppingBag, Ticket, Shirt, CreditCard,
  BarChart3, Globe, Zap, Gift, CheckCircle
} from "lucide-react";
import { SharedNavbar } from "./SharedNavbar";
import { Footer } from "./Footer";

const BUSINESS_PERKS = [
  "Listed in front of 40,000+ active renters",
  "Appear on property detail pages & dashboards",
  "Starter tier is completely free",
  "Analytics on clicks and referrals",
];

const INDIVIDUAL_REWARDS = [
  { icon: <ShoppingBag size={15} />, label: "Apartey tote bag", at: "3 referrals" },
  { icon: <Ticket size={15} />, label: "Cinema tickets ×2", at: "7 referrals" },
  { icon: <Shirt size={15} />, label: "Apartey t-shirt", at: "15 referrals" },
  { icon: <CreditCard size={15} />, label: "₦10,000 gift card", at: "30 referrals" },
];

export function AffiliateHubPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#10182c] font-['Mulish',sans-serif] overflow-x-hidden">
      <SharedNavbar />

      {/* ── HERO SECTION (DARK STYLE) ── */}
      <section className="bg-[#10182c] text-white pt-24 pb-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c85212]/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#fbff79]/10 blur-[80px]" />
        </div>

        <div className="relative max-w-[1000px] mx-auto px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-[#c85212]/20 border border-[#c85212]/30 text-[#fbff79] text-[11px] font-black uppercase tracking-[3px] px-4.5 py-2 rounded-full mb-8">
              <Gift size={14} className="text-[#fbff79]" /> Affiliate Partnerships
            </span>
            <h1 className="font-['Montserrat',sans-serif] font-black text-white text-[38px] md:text-[56px] leading-[1.08] tracking-[-2px] mb-8 max-w-[850px] mx-auto">
              Two ways to grow and <span className="text-[#c85212]">earn with Apartey</span>
            </h1>
            <p className="text-white/60 text-[18px] md:text-[21px] max-w-[620px] mx-auto leading-relaxed font-medium">
              Whether you represent an established local brand or just want to invite friends, we have custom referral pathways waiting for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMS DUAL CARDS ── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 -mt-10 pb-20 md:pb-28 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* CARD 1: BRAND PARTNER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-[32px] overflow-hidden flex flex-col hover:border-[#c85212] transition-colors shadow-sm"
          >
            {/* Header portion */}
            <div className="p-8 pb-4 relative overflow-hidden border-b border-gray-150 bg-gray-50/50">
              <div className="w-14 h-14 bg-[#c85212]/10 border border-[#c85212]/20 rounded-[18px] flex items-center justify-center mb-6">
                <Store size={26} className="text-[#c85212]" />
              </div>
              <span className="text-[#c85212] text-[11px] font-black uppercase tracking-[2px] block mb-1">For Brands & Stores</span>
              <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[28px] leading-tight">
                Brand Partner
              </h2>
              <p className="text-gray-500 text-[14.5px] mt-3 leading-relaxed">
                List your items—furniture, decor, smart utilities, or appliances—directly where local renters look to settle and furnish.
              </p>
            </div>

            {/* Content portion */}
            <div className="p-8 flex flex-col flex-1 space-y-8">
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Suitable for</p>
                <div className="flex flex-wrap gap-2">
                  {["Furniture Hubs", "Decor Boutiques", "Appliances", "Local suppliers", "Smart utilities"].map(t => (
                    <span key={t} className="bg-gray-100 border border-gray-200 text-gray-650 text-[12px] font-bold px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Program Perks</p>
                <div className="space-y-3">
                  {BUSINESS_PERKS.map(p => (
                    <div key={p} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#c85212] shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-[14px] leading-snug">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tiers indicator */}
              <div className="bg-gray-50 border border-gray-150 rounded-[20px] p-5 flex items-start gap-3">
                <BarChart3 size={18} className="text-[#10182c] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#10182c] font-bold text-[14px] mb-0.5">Flexible Listing Tiers</p>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Starter (Free) · Growth (₦25k) · Pro (₦75k). Upgrade or downgrade instantly.</p>
                </div>
              </div>

              {/* Action Actions */}
              <div className="mt-auto pt-6 flex flex-col gap-3">
                <button
                  onClick={() => navigate("/partners/apply")}
                  className="w-full bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[14px] py-4 rounded-[16px] transition-all hover:scale-[1.02] shadow-[0_4px_14px_rgba(200,82,18,0.25)] flex items-center justify-center gap-2"
                >
                  Apply as a Partner <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate("/partners")}
                  className="w-full bg-[#10182c] hover:bg-[#1a2642] text-white font-bold text-[14px] py-4 rounded-[16px] transition-all flex items-center justify-center gap-2"
                >
                  <Globe size={15} /> Explore Partner Program
                </button>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: REFER & EARN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-[32px] overflow-hidden flex flex-col hover:border-[#c85212] transition-colors shadow-sm"
          >
            {/* Header portion */}
            <div className="p-8 pb-4 relative overflow-hidden border-b border-gray-150 bg-gray-50/50">
              <div className="w-14 h-14 bg-[#c85212]/10 border border-[#c85212]/20 rounded-[18px] flex items-center justify-center mb-6">
                <Users size={26} className="text-[#c85212]" />
              </div>
              <span className="text-[#c85212] text-[11px] font-black uppercase tracking-[2px] block mb-1">For Individuals</span>
              <h2 className="font-['Montserrat',sans-serif] font-black text-[#10182c] text-[28px] leading-tight">
                Refer & Earn
              </h2>
              <p className="text-gray-500 text-[14.5px] mt-3 leading-relaxed">
                Invite friends to write reviews or share listings. Collect milestone points and exchange them for branded physical gifts or digital gift cards.
              </p>
            </div>

            {/* Content portion */}
            <div className="p-8 flex flex-col flex-1 space-y-8">
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Suitable for</p>
                <div className="flex flex-wrap gap-2">
                  {["Renters", "Property owners", "Agents", "Community Builders", "Movers"].map(t => (
                    <span key={t} className="bg-gray-100 border border-gray-200 text-gray-650 text-[12px] font-bold px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">Rewards Ladder</p>
                <div className="space-y-3">
                  {INDIVIDUAL_REWARDS.map((r, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#c85212] shrink-0">
                        {r.icon}
                      </div>
                      <span className="text-[#10182c] text-[14px] font-bold flex-1">{r.label}</span>
                      <span className="text-[11px] font-extrabold text-[#c85212] bg-[#c85212]/10 border border-[#c85212]/20 px-3 py-1 rounded-full">{r.at}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion criteria */}
              <div className="bg-gray-50 border border-gray-150 rounded-[20px] p-5 flex items-start gap-3">
                <Zap size={18} className="text-[#10182c] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#10182c] font-bold text-[14px] mb-0.5">What qualifies as a referral?</p>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Your invitee must complete a verified listing or publish a rental review on Apartey.</p>
                </div>
              </div>

              {/* Action Actions */}
              <div className="mt-auto pt-6 flex flex-col gap-3">
                <button
                  onClick={() => navigate("/affiliates")}
                  className="w-full bg-[#c85212] hover:bg-[#b0460d] text-white font-extrabold text-[14px] py-4 rounded-[16px] transition-all hover:scale-[1.02] shadow-[0_4px_14px_rgba(200,82,18,0.25)] flex items-center justify-center gap-2"
                >
                  Get Referral Link <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate("/affiliates")}
                  className="w-full bg-[#10182c] hover:bg-[#1a2642] text-white font-bold text-[14px] py-4 rounded-[16px] transition-all flex items-center justify-center gap-2"
                >
                  <Gift size={15} /> View Rewards Catalogue
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* COMPARATIVE SECTION TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-12 bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-3 text-center divide-x divide-gray-100 bg-gray-50 border-b border-gray-100">
            <div className="p-6">
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Details Comparison</p>
            </div>
            <div className="p-6">
              <p className="text-[14px] font-black text-[#10182c]">Brand Partner</p>
            </div>
            <div className="p-6">
              <p className="text-[14px] font-black text-[#c85212]">Refer & Earn</p>
            </div>
          </div>
          
          {[
            ["Intended Users", "Registered storefronts & local brands", "Individual community members"],
            ["Payout Structure", "Referrals & customer direct requests", "Milestone rewards & cards"],
            ["Pricing Terms", "Starter tier is free", "Always free"],
            ["Requirements", "Application review & approval", "Instant personal link registration"],
          ].map(([label, val1, val2], idx) => (
            <div key={idx} className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 text-[13px] hover:bg-gray-50/50 transition-colors">
              <div className="p-5 pl-7 text-gray-400 font-bold">{label}</div>
              <div className="p-5 text-center text-gray-600 font-medium">{val1}</div>
              <div className="p-5 text-center text-[#c85212]/90 font-medium">{val2}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
