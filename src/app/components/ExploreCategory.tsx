import { useState } from "react";
import imgFrame1000005731 from "figma:asset/6aed3d3eb4df36240098e152e315b63fbf82579f.png";
import imgFrame1000005732 from "figma:asset/5a236e0a4d889cc800d48ef8414feb415ffad340.png";
import imgFrame1000005733 from "figma:asset/76a03b412cfa8bdef052c649d29903b384281855.png";
import imgFrame1000005734 from "figma:asset/c4cde75c2aad9b82faf95384b37e364c53f79bdc.png";
import imgFrame1000005735 from "figma:asset/890ee7c79f476d4ce6197726379ad30fc7e4f586.png";
import imgFrame1000005736 from "figma:asset/c057d6664a91644631ae2548b82da110ecaf6526.png";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./ScrollAnimations";
import { motion } from "motion/react";
import { ArrowRight, PawPrint, Building, Home, Repeat2, Crown, Landmark } from "lucide-react";

const categories = [
  { name: "Pet-Friendly", image: imgFrame1000005731, count: 342, icon: <PawPrint className="w-4 h-4" />, accent: "#4CAF50" },
  { name: "New Building", image: imgFrame1000005732, count: 128, icon: <Building className="w-4 h-4" />, accent: "#2196F3" },
  { name: "Apartments", image: imgFrame1000005733, count: 1_240, icon: <Home className="w-4 h-4" />, accent: "#c85212" },
  { name: "Home Swaps", image: imgFrame1000005734, count: 89, icon: <Repeat2 className="w-4 h-4" />, accent: "#9C27B0" },
  { name: "Luxury Homes", image: imgFrame1000005735, count: 215, icon: <Crown className="w-4 h-4" />, accent: "#FF9800" },
  { name: "Penthouse", image: imgFrame1000005736, count: 76, icon: <Landmark className="w-4 h-4" />, accent: "#607D8B" },
];

export function ExploreCategory() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="explore" className="relative w-full overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f9fb] to-white" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10182c 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Header */}
        <AnimatedSection variant="fadeUp" className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-[3px] rounded-full bg-[#c85212]" />
                <span className="font-['Mulish',sans-serif] text-[#c85212] text-[12px] md:text-[13px] uppercase tracking-[2px]">
                  Browse Categories
                </span>
              </div>
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-0.5px]">
                Explore by Category
              </h2>
              <p className="font-['Mulish',sans-serif] text-[#10182c]/60 text-[15px] md:text-[17px] tracking-[0.2px] mt-3 max-w-[400px]">
                Find the perfect lifestyle match from our curated property collections.
              </p>
            </div>
            <motion.button
              whileHover={{ gap: "12px" }}
              className="flex items-center gap-2 text-[#c85212] font-['Mulish',sans-serif] font-bold text-[15px] tracking-[0.3px] cursor-pointer group"
            >
              View All Categories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Category Cards */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5"
          staggerDelay={0.08}
        >
          {categories.map((cat, index) => (
            <StaggerItem key={cat.name} variant="scaleUp">
              <motion.div
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[220px] md:h-[250px] lg:h-[280px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
              >
                {/* Background image */}
                <div className="absolute inset-0 bg-[#10182c]" />
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10182c] via-[#10182c]/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                {/* Accent glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-2xl md:rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${cat.accent}, transparent 70%)`,
                  }}
                />

                {/* Count badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1 group-hover:bg-white/25 transition-colors duration-300">
                    <span className="font-['Mulish',sans-serif] text-white text-[11px] tracking-[0.3px]">
                      {cat.count.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-white/60 group-hover:text-white transition-colors duration-300">
                      {cat.icon}
                    </span>
                  </div>
                  <p className="font-['Mulish',sans-serif] font-bold text-white text-[16px] md:text-[18px] leading-[1.2] tracking-[0.2px]">
                    {cat.name}
                  </p>
                  <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="font-['Mulish',sans-serif] text-white/70 text-[12px] tracking-[0.3px]">
                      Explore
                    </span>
                    <ArrowRight className="w-3 h-3 text-white/70" />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
