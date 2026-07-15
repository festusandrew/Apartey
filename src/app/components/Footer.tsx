import { useState } from "react";
import imgApartey2 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import svgPaths from "../imports/svg-832hvynkq3";
import { motion } from "motion/react";
import { AnimatedSection } from "./ScrollAnimations";
import { toast } from "sonner@2.0.3";
import { Link } from "react-router";

function FacebookIcon() {
  return (
    <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 22 22">
      <path d={svgPaths.p21912c00} fill="white" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 22 22">
      <path d={svgPaths.p29edb600} fill="white" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 22 22">
      <path d={svgPaths.pba64e00} fill="white" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 22 22">
      <path d={svgPaths.p293a2b80} fill="white" />
    </svg>
  );
}

function NigeriaFlag() {
  return (
    <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
      <g clipPath="url(#ng)">
        <path d={svgPaths.p37dad580} fill="#008000" />
        <path d={svgPaths.p50edb00} fill="#F9F9F9" />
      </g>
      <defs>
        <clipPath id="ng">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
}

function EstoniaFlag() {
  return (
    <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
      <g clipPath="url(#ee)">
        <path d={svgPaths.p165f8700} fill="#F9F9F9" />
        <path d={svgPaths.p3637d200} fill="#42ADE2" />
        <path d={svgPaths.p2f4b7500} fill="#3E4347" />
      </g>
      <defs>
        <clipPath id="ee">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 32 32">
      <path
        d={svgPaths.p32c19dc0}
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeRegion, setActiveRegion] = useState("Nigeria");

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks for subscribing!");
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="bg-[#3a414e] w-full overflow-hidden relative">
      {/* Newsletter Section */}
      <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 pt-16 md:pt-20 relative">
        {/* Newsletter Card - centered on top */}
        <AnimatedSection variant="scaleUp" className="flex justify-center mb-12 md:mb-16">
          <div className="bg-[rgba(117,122,131,0.15)] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-16 w-full max-w-[900px] flex flex-col items-center">
            {/* Logo */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="flex items-center gap-1 mb-6"
            >
              <div className="w-[50px] h-[40px] overflow-hidden relative">
                <img
                  src={imgApartey2}
                  alt="Apartey"
                  className="absolute h-[320%] left-[-17%] top-[-110%] w-[131%] max-w-none"
                />
              </div>
            </motion.div>

            {/* Email Input */}
            <div className="w-full max-w-[700px] mb-5">
              <div className="bg-[#757a83] rounded-[24px] md:rounded-[32px] flex items-center h-[70px] md:h-[90px] px-6 md:px-10 relative overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Enter your email address"
                  className="bg-transparent border-none outline-none font-['Mulish',sans-serif] text-[#f7f7f7] text-[14px] md:text-[18px] tracking-[0.4px] flex-1 placeholder:text-[#f7f7f7]/60 mr-[120px]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  disabled={submitted}
                  className="bg-white rounded-full px-4 md:px-8 py-2.5 md:py-3 flex items-center gap-2 shrink-0 absolute right-3 md:right-4 cursor-pointer hover:bg-[#f5f5f5] transition-colors disabled:opacity-70"
                >
                  <span className="font-['Mulish',sans-serif] font-bold text-[#3a414e] text-[14px] md:text-[18px] tracking-[0.4px]">
                    {submitted ? "Sent!" : "Submit"}
                  </span>
                  {!submitted && <ArrowRight />}
                </motion.button>
              </div>
            </div>

            {/* Subtitle */}
            <p className="font-['Mulish',sans-serif] text-[#f7f7f7] text-[14px] md:text-[18px] opacity-60 tracking-[0.4px] text-center">
              2,000+ users end their week inspired. Join us today.
            </p>
          </div>
        </AnimatedSection>

        {/* Footer Content */}
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 pb-12 md:pb-16">
            {/* Left - About */}
            <div className="lg:max-w-[450px]">
              <p className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] tracking-[0.4px] leading-[1.5] mb-8">
                Apartey is a community-powered rent intelligence platform designed to help renters make
                better, smarter housing decisions.
              </p>
              <p className="font-['Mulish',sans-serif] text-[#757a83] text-[14px] md:text-[17px] tracking-[0.4px]">
                © 2025 Apartey. All rights reserved.
              </p>
            </div>

            {/* Right - Link Columns */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {/* Company */}
              <div>
                <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[16px] md:text-[20px] tracking-[0.4px] mb-5">
                  Company
                </h4>
                <div className="flex flex-col gap-3">
                  <Link to="/about" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    About us
                  </Link>
                  <Link to="/blog" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    Blog
                  </Link>
                  <Link to="/earn" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    Partner with Us
                  </Link>
                </div>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[16px] md:text-[20px] tracking-[0.4px] mb-5">
                  Support
                </h4>
                <div className="flex flex-col gap-3">
                  <Link to="/contact" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    Contact us
                  </Link>
                  <a href="#" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    FAQ
                  </a>
                  <Link to="/earn" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    Refer & Earn
                  </Link>
                  <div className="flex gap-2.5 mt-2">
                    {[
                      { icon: <FacebookIcon />, label: "Facebook" },
                      { icon: <InstagramIcon />, label: "Instagram" },
                      { icon: <XIcon />, label: "X" },
                      { icon: <LinkedinIcon />, label: "LinkedIn" },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href="#"
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="hover:opacity-70 transition-opacity"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[16px] md:text-[20px] tracking-[0.4px] mb-5">
                  Legal
                </h4>
                <div className="flex flex-col gap-3">
                  <a href="#" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    Privacy Policy
                  </a>
                  <a href="#" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    Terms of Service
                  </a>
                  <Link to="/cookies" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    Cookies Settings
                  </Link>
                  <a href="#" className="font-['Mulish',sans-serif] text-white text-[14px] md:text-[17px] hover:text-[#c85212] transition-colors hover:translate-x-1 inline-block">
                    Content Policy
                  </a>
                </div>
              </div>

              {/* Region */}
              <div>
                <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[16px] md:text-[20px] tracking-[0.4px] mb-5">
                  Region
                </h4>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setActiveRegion("Nigeria")}
                    className={`flex items-center gap-2.5 border rounded-full px-4 py-1.5 w-fit transition-all cursor-pointer ${
                      activeRegion === "Nigeria"
                        ? "bg-white/9 border-white"
                        : "border-transparent hover:border-white/30"
                    }`}
                  >
                    <NigeriaFlag />
                    <span className={`font-['Mulish',sans-serif] text-[#f7f7f7] text-[14px] md:text-[17px] tracking-[0.4px] ${activeRegion !== "Nigeria" ? "opacity-60" : ""}`}>
                      Nigeria
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveRegion("Estonia")}
                    className={`flex items-center gap-2.5 border rounded-full px-4 py-1.5 w-fit transition-all cursor-pointer ${
                      activeRegion === "Estonia"
                        ? "bg-white/9 border-white"
                        : "border-transparent hover:border-white/30"
                    }`}
                  >
                    <EstoniaFlag />
                    <span className={`font-['Mulish',sans-serif] text-[#f7f7f7] text-[14px] md:text-[17px] tracking-[0.4px] ${activeRegion !== "Estonia" ? "opacity-60" : ""}`}>
                      Estonia
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}