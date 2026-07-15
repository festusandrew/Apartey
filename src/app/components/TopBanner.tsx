import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Zap, Gift, Ticket, Shirt } from "lucide-react";

const promos = [
  {
    id: "keys",
    icon: <Zap className="w-3.5 h-3.5 text-[#fbff79]" />,
    iconBg: "bg-[#fbff79]/15",
    textBefore: "Win Freebies with Apartey Keys! Write a",
    highlight: "review",
    textAfter: "and earn free Keys instantly.",
    cta: "Get Free Keys",
  },
  {
    id: "referral",
    icon: <Gift className="w-3.5 h-3.5 text-[#ff6b9d]" />,
    iconBg: "bg-[#ff6b9d]/15",
    textBefore: "Refer a friend to Apartey and stand a chance to win",
    highlight: "VIP cinema tickets",
    textAfter: "or exclusive merch!",
    cta: "Refer & Win",
  },
  {
    id: "cinema",
    icon: <Ticket className="w-3.5 h-3.5 text-[#a78bfa]" />,
    iconBg: "bg-[#a78bfa]/15",
    textBefore: "Share Apartey with your mates —",
    highlight: "every referral",
    textAfter: "enters you into our VIP cinema & merch giveaway!",
    cta: "Start Referring",
  },
];

export function TopBanner() {
  const [visible, setVisible] = useState(true);
  const [activePromo, setActivePromo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePromo((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = promos[activePromo];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#10182c] w-full overflow-hidden relative"
        >
          {/* Subtle gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#c85212]/10 via-transparent to-[#fbff79]/5" />

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-3 md:py-3.5 flex items-center justify-between gap-4"
          >
            {/* Left side - promo text */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className={`shrink-0 w-[28px] h-[28px] ${current.iconBg} rounded-full flex items-center justify-center`}
              >
                {current.icon}
              </motion.div>
              <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                <span className="font-['Mulish',sans-serif] text-white/80 text-[13px] md:text-[14px] leading-[1.3]">
                  {current.textBefore}
                </span>
                <motion.span
                  animate={{ color: ["#fbff79", "#ffd700", "#fbff79"] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="font-['Montserrat',sans-serif] font-bold text-[#fbff79] text-[14px] md:text-[16px] tracking-[-0.3px]"
                >
                  {current.highlight}
                </motion.span>
                <span className="font-['Mulish',sans-serif] text-white/80 text-[13px] md:text-[14px] leading-[1.3]">
                  {current.textAfter}
                </span>
              </div>
            </div>

            {/* CTA + Close */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Progress dots */}
              <div className="hidden md:flex items-center gap-1.5 mr-1">
                {promos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePromo(i)}
                    className={`w-[6px] h-[6px] rounded-full transition-all duration-300 cursor-pointer ${
                      i === activePromo
                        ? "bg-[#fbff79] w-[18px]"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#fbff79] text-[#10182c] font-['Mulish',sans-serif] font-bold text-[12px] md:text-[13px] uppercase tracking-[0.5px] px-4 md:px-6 py-2 md:py-2.5 rounded-full shadow-[0px_0px_16px_0px_rgba(251,255,121,0.25)] hover:brightness-105 transition-all whitespace-nowrap cursor-pointer"
              >
                {current.cta}
              </motion.button>
              <button
                onClick={() => setVisible(false)}
                className="text-white/30 hover:text-white/70 transition-colors cursor-pointer p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}