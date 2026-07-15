import imgFrame1000005769 from "figma:asset/51b1e4604ff3d0ec01fa712110198624e96357c6.png";
import { motion } from "motion/react";
import { AnimatedSection } from "./ScrollAnimations";
import { Pen, AlertTriangle, Star, Users } from "lucide-react";

export function ShareExperience() {
  return (
    <section className="relative w-full min-h-[380px] md:min-h-[440px] lg:min-h-[500px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={imgFrame1000005769}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#10182c]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#10182c]/40 via-transparent to-[#10182c]/60" />
      </div>

      {/* Floating animated accents */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.06, 0.12, 0.06] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[10%] right-[15%] w-[200px] h-[200px] rounded-full bg-[#c85212]"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[10%] left-[10%] w-[150px] h-[150px] rounded-full bg-[#fbff79]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1728px] mx-auto flex flex-col items-center justify-center h-full py-16 md:py-24 px-6">
        {/* Stats row */}
        <AnimatedSection variant="fadeUp" className="mb-8 md:mb-10">
          <div className="flex items-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center">
                <Star className="w-4 h-4 text-[#fbff79]" />
              </div>
              <div>
                <span className="font-['Montserrat',sans-serif] font-bold text-white text-[20px] md:text-[24px] tracking-[-0.3px]">
                  50K+
                </span>
                <p className="font-['Mulish',sans-serif] text-white/40 text-[10px] md:text-[11px] tracking-[0.5px] uppercase">
                  Reviews
                </p>
              </div>
            </div>
            <div className="w-px h-[32px] bg-white/15" />
            <div className="flex items-center gap-2">
              <div className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-[#fbff79]" />
              </div>
              <div>
                <span className="font-['Montserrat',sans-serif] font-bold text-white text-[20px] md:text-[24px] tracking-[-0.3px]">
                  30K+
                </span>
                <p className="font-['Mulish',sans-serif] text-white/40 text-[10px] md:text-[11px] tracking-[0.5px] uppercase">
                  Members
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection variant="fadeUp" delay={0.1} className="text-center mb-10 md:mb-12">
          <h2 className="font-['Montserrat',sans-serif] font-bold text-white text-[28px] md:text-[40px] lg:text-[52px] leading-[1.1] tracking-[-0.5px] mb-4">
            Ready to Share Your{" "}
            <span className="text-[#c85212]">Experience?</span>
          </h2>
          <p className="font-['Mulish',sans-serif] text-white/55 text-[15px] md:text-[17px] tracking-[0.2px] max-w-[520px] mx-auto leading-[1.6]">
            Help others find their perfect home by sharing your honest review.
            Your insights make a real difference in someone's housing journey.
          </p>
        </AnimatedSection>

        {/* Buttons */}
        <AnimatedSection variant="fadeUp" delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[600px]">
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 40px rgba(200,82,18,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 bg-[#c85212] text-white font-['Mulish',sans-serif] font-bold text-[16px] md:text-[18px] py-4 md:py-5 rounded-xl leading-[1.02] hover:bg-[#b0480f] transition-colors cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Pen className="w-4 h-4" />
              Leave a Review
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 border border-white/30 text-white font-['Mulish',sans-serif] font-bold text-[16px] md:text-[18px] py-4 md:py-5 rounded-xl leading-[1.02] cursor-pointer backdrop-blur-sm hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <AlertTriangle className="w-4 h-4" />
              Report an Issue
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
