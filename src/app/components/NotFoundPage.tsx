import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowLeft, Home, Search, ChevronRight, Menu, X } from "lucide-react";
import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import svgPaths from "../imports/svg-u114kfou8c";
import { motion, AnimatePresence } from "motion/react";
import { SharedNavbar } from "./SharedNavbar";

/* ═══════════════════════════════════════════════════════
   404 NOT FOUND PAGE
   ═══════════════════════════════════════════════════════ */
export function NotFoundPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Derive a readable page name from the path
  const pageName = location.pathname.replace(/^\//, "").replace(/-/g, " ") || "this page";

  return (
    <div className="bg-[#10182c] min-h-screen relative overflow-hidden flex flex-col">
      {/* ───── Decorative elements ───── */}
      <div className="absolute top-[60px] right-[-100px] md:right-[-40px] w-[400px] md:w-[640px] h-[400px] md:h-[640px] border border-[rgba(200,82,18,0.08)] rounded-full opacity-40" />
      <div className="absolute top-[140px] right-[0px] md:right-[80px] w-[260px] md:w-[440px] h-[260px] md:h-[440px] border border-[rgba(251,255,121,0.05)] rounded-full opacity-30" />
      <div className="absolute bottom-[-250px] left-[-300px] w-[600px] md:w-[900px] h-[600px] md:h-[900px] border border-[rgba(255,255,255,0.02)] rounded-full" />
      <div className="absolute top-[220px] left-[8%] w-1.5 h-1.5 rounded-full bg-[#c85212] opacity-25 hidden md:block" />
      <div className="absolute top-[400px] left-[22%] w-1.5 h-1.5 rounded-full bg-[#c85212] opacity-15 hidden md:block" />
      <div className="absolute top-[300px] right-[18%] w-1.5 h-1.5 rounded-full bg-[#fbff79] opacity-20 hidden lg:block" />
      <div className="absolute bottom-[200px] right-[30%] w-1.5 h-1.5 rounded-full bg-[#c85212] opacity-20 hidden lg:block" />

      {/* ───── Navbar ───── */}
      <SharedNavbar transparent />

      {/* ───── 404 Content ───── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="flex items-center gap-2 mb-10"
        >
          <Link to="/" className="font-['Mulish',sans-serif] text-white/40 text-[14px] tracking-[0.64px] hover:text-white/60 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/20" />
          <span className="font-['Mulish',sans-serif] text-[#c85212] text-[14px] tracking-[0.64px] capitalize">{pageName}</span>
        </motion.div>

        {/* Big 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6"
        >
          <span className="font-['Montserrat',sans-serif] font-bold text-[120px] md:text-[180px] lg:text-[220px] leading-none tracking-[-6px] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.12] to-white/[0.03] select-none">
            404
          </span>
          {/* Glowing accent behind the number */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-[#c85212]/[0.06] blur-[80px]" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-['Montserrat',sans-serif] text-white text-[28px] md:text-[40px] lg:text-[48px] tracking-[-1.5px] leading-[1.1] text-center mb-4"
        >
          Page <span className="text-[#c85212]">Not Found</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-['Mulish',sans-serif] text-white/45 text-[16px] md:text-[19px] leading-[1.6] text-center max-w-[520px] mb-10"
        >
          Sorry, the page you're looking for doesn't exist yet or has been moved. Let's get you back on track.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/"
            className="flex items-center gap-2.5 bg-[#c85212] hover:bg-[#b84a10] text-white rounded-full px-7 py-3.5 font-['Mulish',sans-serif] font-bold text-[15px] tracking-[0.38px] transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-2.5 bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 text-white/80 hover:text-white rounded-full px-7 py-3.5 font-['Mulish',sans-serif] text-[15px] tracking-[0.38px] transition-all backdrop-blur-sm"
          >
            <Search className="w-4 h-4" />
            Browse Blog
          </Link>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[700px]"
        >
          {[
            { label: "About Apartey", desc: "Learn about our mission", href: "/about" },
            { label: "Read Our Blog", desc: "Tips & insights", href: "/blog" },
            { label: "Sign Up Free", desc: "Join the community", href: "/signup" },
          ].map((card) => (
            <Link
              key={card.label}
              to={card.href}
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#c85212]/30 rounded-[16px] p-5 text-center transition-all duration-300"
            >
              <p className="font-['Mulish',sans-serif] font-bold text-white text-[15px] mb-1 group-hover:text-[#c85212] transition-colors">{card.label}</p>
              <p className="font-['Mulish',sans-serif] text-white/35 text-[13px]">{card.desc}</p>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* ───── Minimal footer ───── */}
      <div className="relative z-10 border-t border-white/[0.06] py-6 px-6">
        <p className="font-['Mulish',sans-serif] text-white/25 text-[13px] text-center">
          &copy; 2025 Apartey. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
