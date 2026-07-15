import { motion } from "motion/react";

const primaryItems = [
  "Trusted Reviews",
  "Real Experiences",
  "Community Powered",
  "Verified Residents",
];

const secondaryItems = [
  "Smart Housing Decisions",
  "Honest Insights",
  "Local Voices",
  "Transparent Ratings",
];

function MarqueeTrack({
  items,
  duration,
  reverse = false,
}: {
  items: string[];
  duration: number;
  reverse?: boolean;
}) {
  const direction = reverse ? ["-50%", "0%"] : ["0%", "-50%"];

  return (
    <motion.div
      animate={{ x: direction }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      }}
      className="flex items-center shrink-0"
    >
      {[...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center shrink-0">
          <span className="font-['Montserrat',sans-serif] font-bold text-white text-[14px] md:text-[20px] lg:text-[26px] uppercase tracking-[2px] whitespace-nowrap px-4 md:px-6 lg:px-8">
            {item}
          </span>
          <span className="text-[#c85212] text-[16px] md:text-[22px] lg:text-[28px] shrink-0">
            ✦
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export function MarqueeBanner() {
  return (
    <div className="bg-[#10182c] w-full overflow-hidden flex flex-col">
      {/* Primary row */}
      <div className="h-[32px] md:h-[46px] lg:h-[52px] flex items-center">
        <MarqueeTrack items={primaryItems} duration={22} />
      </div>
      {/* Secondary row - reversed */}
      <div className="h-[28px] md:h-[38px] lg:h-[44px] flex items-center opacity-30 border-t border-white/5">
        <MarqueeTrack
          items={secondaryItems}
          duration={28}
          reverse
        />
      </div>
    </div>
  );
}
