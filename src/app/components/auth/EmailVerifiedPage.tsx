import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { AuthLayout } from "./AuthLayout";
import svgPaths from "../../imports/svg-1omeerz5t8";
import { ArrowRight, Sparkles } from "lucide-react";

export function EmailVerifiedPage() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center py-4"
      >
        {/* Success animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.15,
          }}
          className="relative w-[100px] h-[100px] mb-7"
        >
          {/* Background glow */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute inset-0 rounded-full bg-[#c85212]/[0.06]"
          />
          <svg
            className="w-full h-full relative z-10"
            fill="none"
            viewBox="0 0 131.75 131.75"
          >
            <motion.path
              d={svgPaths.p1c172080}
              stroke="#c85212"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: "easeInOut" }}
            />
          </svg>
          {/* Sparkle accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="absolute -top-1 -right-1"
          >
            <Sparkles className="w-5 h-5 text-[#fbff79]" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <h1 className="font-['Montserrat',sans-serif] font-bold text-[#10182c] text-[26px] sm:text-[30px] leading-[1.15] tracking-[-0.5px] mb-2.5">
            Email verified
          </h1>
          <p className="font-['Mulish',sans-serif] text-[#7f8694] text-[14px] sm:text-[15px] tracking-[0.1px] leading-[1.55] max-w-[340px] mx-auto mb-8">
            Congratulations! Your email has been verified. You're all set to
            explore Apartey.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.4 }}
          className="w-full"
        >
          <motion.button
            type="button"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.005, boxShadow: "0 4px 20px rgba(200,82,18,0.25)" }}
            whileTap={{ scale: 0.995 }}
            className="w-full bg-gradient-to-r from-[#c85212] to-[#d4621f] text-white font-['Mulish',sans-serif] font-bold text-[14px] tracking-[0.3px] py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_2px_12px_rgba(200,82,18,0.2)]"
          >
            Go to Dashboard
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </AuthLayout>
  );
}
