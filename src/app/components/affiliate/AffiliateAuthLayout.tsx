import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Coins, Gift, Users, TrendingUp } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Coins, value: "100 pts", label: "Per qualified referral" },
  { icon: Gift, value: "₦50k", label: "Top gift card reward" },
  { icon: Users, value: "No limit", label: "Refer as many as you like" },
];

interface AffiliateAuthLayoutProps {
  children: React.ReactNode;
}

export function AffiliateAuthLayout({ children }: AffiliateAuthLayoutProps) {
  return (
    <div className="min-h-screen flex bg-[#f8f9fb] font-['Mulish',sans-serif]">
      {/* ─── Left panel ─── */}
      <div className="hidden lg:flex lg:w-[48%] xl:w-[45%] relative overflow-hidden bg-[#10182c]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c85212]/25 blur-[110px]" />
          <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-[#fbff79]/10 blur-[90px]" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 text-white w-full">
          <Link to="/earn" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[14px] font-bold w-fit">
            <ArrowLeft size={16} /> Back to Refer &amp; Earn
          </Link>

          <div className="max-w-[420px]">
            <span className="inline-flex items-center gap-2 bg-[#c85212]/20 border border-[#c85212]/30 text-[#fbff79] text-[11px] font-black uppercase tracking-[3px] px-4 py-2 rounded-full mb-7">
              <TrendingUp size={13} /> Affiliate Program
            </span>
            <h2 className="font-['Montserrat',sans-serif] font-black text-[34px] xl:text-[42px] leading-[1.1] tracking-[-1px] mb-5">
              Turn referrals into <span className="text-[#c85212]">gift cards.</span>
            </h2>
            <p className="text-white/60 text-[16px] leading-relaxed">
              Your affiliate account is separate from any renter, homeowner, or agent profile. One place to track points and redeem rewards.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-10">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="bg-white/[0.04] border border-white/10 rounded-[16px] p-4">
                  <h.icon size={18} className="text-[#c85212] mb-2" />
                  <div className="font-['Montserrat',sans-serif] font-black text-[18px]">{h.value}</div>
                  <div className="text-white/50 text-[11px] leading-tight mt-1">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-white/40 text-[12px]">&copy; 2026 Apartey. All rights reserved.</p>
        </div>
      </div>

      {/* ─── Form area ─── */}
      <div className="flex-1 flex flex-col">
        <div className="lg:hidden px-6 pt-6">
          <Link to="/earn" className="inline-flex items-center gap-2 text-[#7f8694] hover:text-[#10182c] transition-colors text-[14px] font-bold">
            <ArrowLeft size={16} /> Back to Refer &amp; Earn
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 md:px-16 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[460px]"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] border border-[#e8eaed]/60 p-6 sm:p-8 lg:p-10">
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
