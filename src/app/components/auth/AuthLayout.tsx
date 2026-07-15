import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgApartey from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import { Link, useLocation } from "react-router";
import { Building2, Shield, Star, Quote, ArrowLeft } from "lucide-react";

const AUTH_IMAGE =
  "https://images.unsplash.com/photo-1763888597244-8eeb23043c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwaG91c2UlMjBleHRlcmlvciUyMHR3aWxpZ2h0JTIwd2FybSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzE0MjIwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const trustItems = [
  { icon: Building2, value: "50K+", label: "Verified Properties" },
  { icon: Star, value: "4.8", label: "Trust Score" },
  { icon: Shield, value: "100%", label: "GDPR Compliant" },
];

const testimonials = [
  {
    text: "Apartey made finding our dream apartment in Tallinn so much easier. The verified reviews gave us real confidence.",
    author: "Sarah K.",
    role: "Renter in Tallinn",
    rating: 5,
  },
  {
    text: "As a homeowner, I've never had such quality tenants. The transparency on this platform is unmatched.",
    author: "Michael O.",
    role: "Homeowner in Lagos",
    rating: 5,
  },
  {
    text: "Our agency's conversion rate jumped 28% after listing on Apartey. The lead quality is exceptional.",
    author: "Elena M.",
    role: "Broker in Tartu",
    rating: 5,
  },
];

// Step definitions for progress tracking
const signUpSteps = [
  { path: "/signup", label: "Account" },
  { path: "/signup/role", label: "Role" },
  { path: "/verify-email", label: "Verify" },
];

interface AuthLayoutProps {
  children: React.ReactNode;
  showBackToSignIn?: boolean;
}

export function AuthLayout({ children, showBackToSignIn }: AuthLayoutProps) {
  const location = useLocation();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Determine if we're in sign-up flow for step indicator
  const currentStepIdx = signUpSteps.findIndex(
    (s) => s.path === location.pathname
  );
  const isSignUpFlow = currentStepIdx !== -1;

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex bg-[#f8f9fb]">
      {/* ─── Left Panel ─── */}
      <div className="hidden lg:flex lg:w-[50%] xl:w-[46%] relative overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1022] via-[#10182c] to-[#1a2540]" />

        {/* Background image with blend */}
        <div className="absolute inset-0">
          <img
            src={AUTH_IMAGE}
            alt=""
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10182c] via-[#10182c]/60 to-transparent" />
        </div>

        {/* Animated geometric accents */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] rounded-full border border-white/[0.04]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[150px] -left-[150px] w-[400px] h-[400px] rounded-full border border-[#c85212]/[0.08]"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[12%] w-3 h-3 rounded-full bg-[#c85212]/30"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[35%] left-[15%] w-2 h-2 rounded-full bg-[#fbff79]/20"
        />
        <motion.div
          animate={{ x: [-10, 10, -10], y: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[55%] right-[25%] w-1.5 h-1.5 rounded-full bg-white/15"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-8 xl:p-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 shrink-0 group">
            <div className="w-[46px] h-[37px] overflow-hidden relative">
              <img
                src={imgApartey}
                alt="Apartey"
                className="absolute h-[320%] left-[-17%] top-[-110%] w-[131%] max-w-none"
              />
            </div>
            <span className="font-['Poppins',sans-serif] text-white text-[21px] italic group-hover:text-white/80 transition-colors">
              apartey
            </span>
          </Link>

          {/* Middle content */}
          <div className="flex-1 flex flex-col justify-center max-w-[400px] py-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="font-['Space_Grotesk',sans-serif] text-[#c85212] text-[13px] tracking-[2px] uppercase mb-4">
                Trusted Platform
              </p>
              <h2 className="font-['Montserrat',sans-serif] font-bold text-white text-[30px] xl:text-[36px] leading-[1.1] tracking-[-0.8px]">
                Where trust meets
                <br />
                <span className="bg-gradient-to-r from-[#c85212] to-[#e8863a] bg-clip-text text-transparent">
                  real estate.
                </span>
              </h2>
              <p className="font-['Mulish',sans-serif] text-white/50 text-[15px] mt-5 leading-[1.75] tracking-[0.15px]">
                Join thousands of renters, homeowners, and agents building
                transparent property experiences across Europe and Africa.
              </p>
            </motion.div>

            {/* Trust stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-3"
            >
              {trustItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-3.5 text-center"
                >
                  <item.icon className="w-4 h-4 text-[#c85212] mx-auto mb-2" />
                  <p className="font-['Montserrat',sans-serif] font-bold text-white text-[18px] tracking-[-0.3px] leading-none">
                    {item.value}
                  </p>
                  <p className="font-['Mulish',sans-serif] text-white/40 text-[11px] tracking-[0.3px] mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Testimonial carousel */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-5 relative overflow-hidden">
                {/* Quote icon */}
                <Quote className="w-5 h-5 text-[#c85212]/40 mb-3" />

                {/* Testimonial text */}
                <div className="h-[72px] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={testimonialIdx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="font-['Mulish',sans-serif] text-white/65 text-[14px] leading-[1.65] tracking-[0.1px] italic">
                        "{testimonials[testimonialIdx].text}"
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Author + dots */}
                <div className="flex items-center justify-between mt-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={testimonialIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="font-['Mulish',sans-serif] font-bold text-white text-[13px] tracking-[0.2px]">
                        {testimonials[testimonialIdx].author}
                      </p>
                      <p className="font-['Mulish',sans-serif] text-white/35 text-[12px] tracking-[0.2px]">
                        {testimonials[testimonialIdx].role}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setTestimonialIdx(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                          i === testimonialIdx
                            ? "w-5 bg-[#c85212]"
                            : "w-1.5 bg-white/20 hover:bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="shrink-0 flex items-center justify-between">
            <p className="font-['Mulish',sans-serif] text-white/25 text-[11px] tracking-[0.4px]">
              &copy; 2026 Apartey. EU regulated platform.
            </p>
            <div className="flex gap-4">
              <span className="font-['Mulish',sans-serif] text-white/25 text-[11px] tracking-[0.3px] hover:text-white/40 cursor-pointer transition-colors">
                Privacy
              </span>
              <span className="font-['Mulish',sans-serif] text-white/25 text-[11px] tracking-[0.3px] hover:text-white/40 cursor-pointer transition-colors">
                Terms
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Right Panel ─── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        {/* Top bar: mobile logo + back */}
        <div className="flex items-center justify-between px-6 sm:px-10 pt-6 pb-2 lg:pt-8 lg:pb-4">
          {/* Mobile logo */}
          <Link
            to="/"
            className="lg:hidden flex items-center gap-1 shrink-0"
          >
            <div className="w-[40px] h-[32px] overflow-hidden relative">
              <img
                src={imgApartey}
                alt="Apartey"
                className="absolute h-[320%] left-[-17%] top-[-110%] w-[131%] max-w-none"
              />
            </div>
            <span className="font-['Poppins',sans-serif] text-[#10182c] text-[18px] italic">
              apartey
            </span>
          </Link>
          {/* Spacer for desktop */}
          <div className="hidden lg:block" />
          {/* Back to home */}
          <Link
            to="/"
            className="flex items-center gap-1.5 font-['Mulish',sans-serif] text-[#7f8694] text-[13px] tracking-[0.2px] hover:text-[#10182c] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
        </div>

        {/* Step indicator for sign-up flow */}
        {isSignUpFlow && (
          <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-4">
            <div className="max-w-[520px] mx-auto">
              <div className="flex items-center gap-2">
                {signUpSteps.map((step, i) => (
                  <div key={step.path} className="flex items-center gap-2 flex-1">
                    <div className="flex items-center gap-2 flex-1">
                      <motion.div
                        initial={false}
                        animate={{
                          backgroundColor:
                            i <= currentStepIdx
                              ? "#c85212"
                              : "rgba(202,208,217,0.4)",
                        }}
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      >
                        <span
                          className={`font-['Mulish',sans-serif] font-bold text-[12px] ${
                            i <= currentStepIdx
                              ? "text-white"
                              : "text-[#a0a8b4]"
                          }`}
                        >
                          {i + 1}
                        </span>
                      </motion.div>
                      <span
                        className={`font-['Mulish',sans-serif] text-[13px] tracking-[0.2px] hidden sm:block ${
                          i <= currentStepIdx
                            ? "text-[#10182c] font-bold"
                            : "text-[#a0a8b4]"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < signUpSteps.length - 1 && (
                      <div className="flex-1 h-px mx-1">
                        <motion.div
                          initial={false}
                          animate={{
                            backgroundColor:
                              i < currentStepIdx
                                ? "#c85212"
                                : "rgba(202,208,217,0.3)",
                          }}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Form area */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-6 lg:py-10">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[520px]"
          >
            {/* Card wrapper */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] border border-[#e8eaed]/60 p-6 sm:p-8 lg:p-10">
              {children}
            </div>
          </motion.div>
        </div>

        {/* Mobile bottom */}
        <div className="lg:hidden px-6 pb-6 text-center">
          <p className="font-['Mulish',sans-serif] text-[#a0a8b4] text-[11px] tracking-[0.3px]">
            &copy; 2026 Apartey. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
