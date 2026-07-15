import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronRight,
  Mail,
} from "lucide-react";
import imgHeroBg from "figma:asset/383ef4428327f3cabc0f78335048e898e5ee9586.png";
import imgApartey2 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import svgPaths from "../imports/svg-u114kfou8c";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ScrollAnimations";

/* ─── SVG Icon Components (from Figma import) ─── */
function ShieldIcon({ className = "w-7 h-7", stroke = "#FBFF79" }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 31 31">
      <path d={svgPaths.p1dd8280} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.56" />
    </svg>
  );
}

function VerifiedIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.pcbf1880} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.pd934477} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function BarChartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.p50dda80} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M19.1849 18.1207V9.59371" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M13.8564 18.1174V5.32687" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M8.52531 18.1174V14.9198" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function CommunityIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.p2ea307c0} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p24659800} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.pe730a20} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p597c000} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function DSAIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.p36dfa800} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p154de900} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M7.46255 22.3845H18.1213" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M12.7911 3.19867V22.3845" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p3c8c000} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function LockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.p644dbf0} stroke="#10182C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p3db7b00} stroke="#10182C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function GlobeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 31 31">
      <path d={svgPaths.p2978fc00} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.56" />
      <path d={svgPaths.p15008100} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.56" />
      <path d="M2.55852 15.3487H28.1396" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.56" />
    </svg>
  );
}

function EyeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.p186f8c80} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p261ec300} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function FileIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.pfa41800} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p3b391900} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M10.6589 9.59207H8.52711" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M17.0541 13.8589H8.52711" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M17.0541 18.1158H8.52711" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function TrashIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d="M3.19776 6.39578H22.3836" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p20589a40} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p3c4f0780} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M10.6597 11.7218V18.1171" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M14.9216 11.7218V18.1171" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function RestrictIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.p31fd2d80} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p35c6bb80} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function DownloadIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.p34d36900} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p28cb6f00} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d="M12.7907 15.99V3.1995" stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function ObjectIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 26 26">
      <path d={svgPaths.p12f5ae80} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p3853c480} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
      <path d={svgPaths.p29f7eb00} stroke="#C85212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.13" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 21 21">
      <path d={svgPaths.p11af2800} stroke="#FBFF79" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71" />
      <path d={svgPaths.p322345e0} stroke="#FBFF79" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71" />
    </svg>
  );
}

/* Social icons for footer */
function FacebookFooterIcon() {
  return (
    <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 18 18">
      <path d={svgPaths.pbfb0a00} fill="white" />
    </svg>
  );
}
function InstagramFooterIcon() {
  return (
    <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 18 18">
      <path d={svgPaths.p349562f0} fill="white" />
    </svg>
  );
}
function XFooterIcon() {
  return (
    <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 18 17">
      <path d={svgPaths.p57cff80} fill="white" />
    </svg>
  );
}
function LinkedInFooterIcon() {
  return (
    <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 18 18">
      <path d={svgPaths.p7d0ab00} fill="white" />
    </svg>
  );
}
function NigeriaFlag() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
      <g clipPath="url(#ng)">
        <path d={svgPaths.p37dad580} fill="#008000" />
        <path d={svgPaths.p50edb00} fill="#F9F9F9" />
      </g>
      <defs><clipPath id="ng"><rect fill="white" height="16" width="16" /></clipPath></defs>
    </svg>
  );
}
function EstoniaFlag() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
      <g clipPath="url(#ee)">
        <path d={svgPaths.p165f8700} fill="#F9F9F9" />
        <path d={svgPaths.p3637d200} fill="#42ADE2" />
        <path d={svgPaths.p2f4b7500} fill="#3E4347" />
      </g>
      <defs><clipPath id="ee"><rect fill="white" height="16" width="16" /></clipPath></defs>
    </svg>
  );
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-['Space_Grotesk',sans-serif] text-white text-[48px] md:text-[60px] lg:text-[72px] tracking-[-2.5px]">
        {count}{suffix}
      </p>
      <p className="font-['Mulish',sans-serif] text-white/50 text-[14px] md:text-[16px] tracking-[0.6px] uppercase mt-1">
        {label}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 1: HERO
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative bg-[#10182c] min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,24,44,0.8)] via-[rgba(16,24,44,0.64)] to-[rgba(16,24,44,0.8)]" />

      {/* Decorative rings */}
      <div className="absolute top-[170px] right-[-100px] md:right-[-50px] w-[400px] md:w-[640px] h-[400px] md:h-[640px] border border-[rgba(200,82,18,0.1)] rounded-full opacity-40" />
      <div className="absolute top-[230px] right-[-30px] md:right-[50px] w-[280px] md:w-[448px] h-[280px] md:h-[448px] border border-[rgba(251,255,121,0.08)] rounded-full opacity-30" />
      <div className="absolute bottom-[-200px] left-[-300px] w-[600px] md:w-[900px] h-[600px] md:h-[900px] border border-[rgba(255,255,255,0.03)] rounded-full rotate-[-155deg]" />

      {/* Decorative dots */}
      <div className="absolute top-[275px] left-[15%] w-2 h-2 rounded-full bg-[#c85212] opacity-22 hidden md:block" />
      <div className="absolute top-[512px] left-[33%] w-2 h-2 rounded-full bg-[#c85212] opacity-16 hidden md:block" />
      <div className="absolute top-[724px] left-[51%] w-2 h-2 rounded-full bg-[#c85212] opacity-32 hidden md:block" />
      <div className="absolute top-[285px] right-[33%] w-2 h-2 rounded-full bg-[#c85212] opacity-16 hidden lg:block" />
      <div className="absolute top-[496px] right-[15%] w-2 h-2 rounded-full bg-[#c85212] opacity-32 hidden lg:block" />

      {/* Navbar */}
      <SharedNavbar activePage="About" transparent />

      {/* Hero content */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-24 lg:pt-32">
        {/* Breadcrumb */}
        <AnimatedSection variant="fadeUp" delay={0}>
          <div className="flex items-center gap-2.5 mb-10">
            <Link to="/" className="font-['Mulish',sans-serif] text-white/40 text-[14px] md:text-[16px] tracking-[0.64px] hover:text-white/60 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-white/20" />
            <span className="font-['Mulish',sans-serif] text-[#c85212] text-[14px] md:text-[16px] tracking-[0.64px]">
              About
            </span>
          </div>
        </AnimatedSection>

        {/* Heading */}
        <AnimatedSection variant="fadeUp" delay={0.1}>
          <h1 className="font-['Montserrat',sans-serif] text-white text-[48px] md:text-[68px] lg:text-[87px] tracking-[-2.5px] leading-[1.05] max-w-[700px]">
            Transparency in housing,{" "}
            <span className="text-[#c85212]">built on trust</span>
          </h1>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <p className="font-['Mulish',sans-serif] text-white/84 text-[16px] md:text-[20px] lg:text-[23px] tracking-[0.26px] leading-[1.7] max-w-[660px] mt-6 md:mt-8">
            A community-powered rent intelligence platform designed with privacy-first principles and full compliance with EU data protection regulations.
          </p>
        </AnimatedSection>
      </div>

      {/* Stats row */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 mt-16 md:mt-24 pb-12 md:pb-16">
        <AnimatedSection variant="fadeUp" delay={0.3}>
          <div className="border-t border-white/[0.06] pt-10 md:pt-12">
            <div className="grid grid-cols-3 gap-6 md:gap-16 max-w-[1100px] mx-auto">
              <AnimatedCounter target={0} suffix="+" label="Verified Reviews" />
              <AnimatedCounter target={0} suffix="+" label="Properties Listed" />
              <AnimatedCounter target={0} suffix="%" label="GDPR Compliant" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 2: MISSION
   ═══════════════════════════════════════════════════════ */
function MissionSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Decorative */}
      <div className="absolute top-[-192px] right-0 w-[384px] h-[384px] rounded-full bg-[rgba(200,82,18,0.02)] hidden lg:block" />

      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left column */}
          <AnimatedSection variant="fadeLeft">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[rgba(200,82,18,0.06)] rounded-full px-5 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#c85212]" />
                <span className="font-['Mulish',sans-serif] text-[#c85212] text-[13px] md:text-[15px] tracking-[1.28px] uppercase">
                  Our Mission
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-['Montserrat',sans-serif] font-['Space_Grotesk',sans-serif] text-[#10182c] text-[36px] md:text-[48px] lg:text-[59px] tracking-[-1.9px] leading-[1.1] mb-8">
                Eliminating regret{" "}
                <span className="text-[#c85212]">from renting decisions</span>
              </h2>

              {/* Description */}
              <div className="font-['Mulish',sans-serif] text-[#667085] text-[16px] md:text-[18px] lg:text-[20px] tracking-[0.13px] leading-[1.75] space-y-4 max-w-[700px]">
                <p>
                  To eliminate regret from renting decisions by building a trusted platform that encourages transparency, accountability, and data-driven insights in the housing market through the reviews of past renters.
                </p>
                <p>
                  Apartey was founded with a simple but powerful mission: to bring transparency and trust to the rental market. We believe that everyone deserves to know exactly what they're getting into before signing a lease.
                </p>
                <p>
                  By creating a platform where renters can share their authentic experiences, we help future tenants make informed decisions while also providing property managers with valuable feedback to improve their offerings.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right column */}
          <AnimatedSection variant="fadeRight" delay={0.15}>
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Quote card */}
              <div className="relative bg-[#10182c] rounded-[20px] p-8 md:p-10 overflow-hidden">
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-[154px] h-[154px] rounded-bl-full" style={{ backgroundImage: "linear-gradient(225deg, rgba(200,82,18,0.2) 0%, transparent 100%)" }} />
                {/* Accent bar */}
                <div className="absolute top-[168px] left-0 w-[10px] h-[82px] bg-[#c85212] rounded-r-full rounded-bl-full" />

                <p className="font-['Mulish',sans-serif] italic text-white/70 text-[16px] md:text-[18px] lg:text-[22px] leading-[1.7] mb-6 relative z-10">
                  "We are building the resource we wish existed when we were hunting for our own apartments — honest reviews from real people who've actually lived there."
                </p>
                <p className="font-['Mulish',sans-serif] text-[#c85212] text-[15px] md:text-[18px] tracking-[0.38px] relative z-10">
                  — Apartey Founding Team
                </p>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: <VerifiedIcon />, title: "Verified Reviews", desc: "Only from real tenants" },
                  { icon: <BarChartIcon />, title: "Deep Ratings", desc: "Noise, maintenance, safety" },
                  { icon: <CommunityIcon />, title: "Community First", desc: "Renters helping renters" },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-[#fafafa] border border-[rgba(0,0,0,0.04)] rounded-[18px] p-5"
                  >
                    <div className="bg-[rgba(200,82,18,0.08)] rounded-[13px] w-[46px] h-[46px] flex items-center justify-center mb-4">
                      {card.icon}
                    </div>
                    <h4 className="font-['Mulish',sans-serif] font-bold text-[#10182c] text-[15px] md:text-[18px] tracking-[0.13px] mb-1">
                      {card.title}
                    </h4>
                    <p className="font-['Mulish',sans-serif] text-[#667085] text-[14px] md:text-[16px]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3: TRUST & COMPLIANCE
   ═══════════════════════════════════════════════════════ */
function TrustComplianceSection() {
  return (
    <section className="relative bg-[#fafafa] overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <AnimatedSection variant="fadeUp">
          <div className="text-center mb-16 md:mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[rgba(16,24,44,0.04)] rounded-full px-5 py-2 mb-6">
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p329bdf80} stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
              </svg>
              <span className="font-['Mulish',sans-serif] text-[rgba(16,24,44,0.6)] text-[13px] md:text-[15px] tracking-[1.28px] uppercase">
                Trust & Compliance
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-['Montserrat',sans-serif] text-[#10182c] text-[36px] md:text-[48px] lg:text-[59px] tracking-[-1.9px] leading-[1.1]">
              Built for the{" "}
              <span className="text-[#c85212]">EU standard</span>
            </h2>

            {/* Description */}
            <p className="font-['Mulish',sans-serif] text-[#667085] text-[16px] md:text-[18px] lg:text-[22px] leading-[1.65] tracking-[0] mt-6 max-w-[710px] mx-auto">
              Operating across Nigeria and Estonia, we hold ourselves to the highest EU data protection standards — not because we have to, but because trust demands it.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* GDPR card - large dark card */}
          <AnimatedSection variant="fadeUp" delay={0.1} className="lg:col-span-7">
            <div className="relative bg-[#10182c] rounded-[20px] p-8 md:p-10 lg:p-12 overflow-hidden min-h-[340px] md:min-h-[429px]">
              {/* Corner gradient */}
              <div className="absolute top-0 right-0 w-[211px] h-[211px] rounded-bl-full opacity-60" style={{ backgroundImage: "linear-gradient(225deg, rgba(200,82,18,0.37) 0%, transparent 100%)" }} />
              {/* Bottom left gradient */}
              <div className="absolute bottom-0 left-0 w-[100px] h-[100px] rounded-tr-full" style={{ backgroundImage: "linear-gradient(45deg, rgba(251,255,121,0.1) 0%, transparent 100%)" }} />

              <div className="relative z-10">
                <div className="bg-white/[0.08] rounded-[18px] w-[61px] h-[61px] flex items-center justify-center mb-8">
                  <ShieldIcon className="w-[31px] h-[31px]" />
                </div>

                <h3 className="font-['Montserrat',sans-serif] text-white text-[24px] md:text-[28px] lg:text-[33px] tracking-[-0.64px] mb-5">
                  GDPR Compliant by Design
                </h3>

                <p className="font-['Mulish',sans-serif] text-white/50 text-[15px] md:text-[17px] lg:text-[19px] leading-[1.7] max-w-[640px] mb-8">
                  As an EU-registered entity operating under the General Data Protection Regulation (EU 2016/679), we implement privacy by design and by default across every feature of the Apartey platform.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {["Data Minimization", "Purpose Limitation", "Storage Limitation", "Accountability"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2 font-['Mulish',sans-serif] text-white/60 text-[13px] md:text-[15px] tracking-[0.38px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Digital Services Act */}
          <AnimatedSection variant="fadeUp" delay={0.2} className="lg:col-span-5">
            <div className="bg-white border border-[rgba(0,0,0,0.04)] rounded-[20px] p-8 md:p-10 min-h-[340px] md:min-h-[429px]">
              <div className="bg-[rgba(200,82,18,0.08)] rounded-[18px] w-[56px] h-[56px] flex items-center justify-center mb-8">
                <DSAIcon />
              </div>

              <h3 className="font-['Montserrat',sans-serif] text-[#10182c] text-[20px] md:text-[23px] lg:text-[26px] tracking-[-0.38px] mb-4">
                Digital Services Act
              </h3>

              <p className="font-['Mulish',sans-serif] text-[#667085] text-[15px] md:text-[17px] lg:text-[18px] leading-[1.65] max-w-[406px]">
                We comply with the EU Digital Services Act (DSA), ensuring transparent content moderation, clear reporting mechanisms, and accountability for user-generated reviews.
              </p>
            </div>
          </AnimatedSection>

          {/* End-to-End Encryption */}
          <AnimatedSection variant="fadeUp" delay={0.25} className="lg:col-span-5">
            <div className="bg-white border border-[rgba(0,0,0,0.04)] rounded-[20px] p-8 md:p-10 min-h-[260px] md:min-h-[303px]">
              <div className="bg-[rgba(16,24,44,0.06)] rounded-[18px] w-[56px] h-[56px] flex items-center justify-center mb-8">
                <LockIcon />
              </div>

              <h3 className="font-['Montserrat',sans-serif] text-[#10182c] text-[20px] md:text-[23px] lg:text-[26px] tracking-[-0.38px] mb-4">
                End-to-End Encryption
              </h3>

              <p className="font-['Mulish',sans-serif] text-[#667085] text-[15px] md:text-[17px] lg:text-[18px] leading-[1.65] max-w-[406px]">
                All personal data is encrypted in transit and at rest. We will never sell your data to third parties.
              </p>
            </div>
          </AnimatedSection>

          {/* Cross-Border Data Transfers */}
          <AnimatedSection variant="fadeUp" delay={0.3} className="lg:col-span-7">
            <div className="relative bg-[rgba(200,82,18,0.05)] border border-[rgba(200,82,18,0.08)] rounded-[20px] p-8 md:p-10 lg:p-12 min-h-[260px] md:min-h-[303px]">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="shrink-0">
                  <div className="bg-[rgba(200,82,18,0.08)] rounded-[18px] w-[61px] h-[61px] flex items-center justify-center">
                    <GlobeIcon />
                  </div>
                </div>
                <div>
                  <h3 className="font-['Montserrat',sans-serif] text-[#10182c] text-[20px] md:text-[23px] lg:text-[26px] tracking-[-0.38px] mb-3">
                    Cross-Border Data Transfers
                  </h3>

                  <p className="font-['Mulish',sans-serif] text-[#667085] text-[15px] md:text-[17px] lg:text-[18px] leading-[1.65] mb-6">
                    Apartey can be used from anywhere in the world. When we transfer personal data outside the European Economic Area (EEA), we protect it using European Commission–approved Standard Contractual Clauses (SCCs). Data belonging to EU users is securely hosted within the EEA on GDPR-compliant infrastructure.
                  </p>

                  {/* Location flags */}
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[16px]">🇪🇪</span>
                      <span className="font-['Mulish',sans-serif] text-[rgba(16,24,44,0.7)] text-[14px] md:text-[16px] tracking-[0.26px]">
                        Estonia HQ
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[16px]">🇳🇬</span>
                      <span className="font-['Mulish',sans-serif] text-[rgba(16,24,44,0.7)] text-[14px] md:text-[16px] tracking-[0.26px]">
                        Nigeria Operations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4: DATA RIGHTS
   ═══════════════════════════════════════════════════════ */
const RIGHTS_CARDS = [
  { icon: <EyeIcon />, title: "Right of Access", desc: "Request a copy of all personal data we hold about you at any time." },
  { icon: <FileIcon />, title: "Right to Rectification", desc: "Correct or update any inaccurate personal data we store." },
  { icon: <TrashIcon />, title: "Right to Erasure", desc: "Request deletion of your personal data ('right to be forgotten')." },
  { icon: <RestrictIcon />, title: "Right to Restrict", desc: "Limit how we process your personal data in certain circumstances." },
  { icon: <DownloadIcon />, title: "Right to Portability", desc: "Receive your data in a structured, machine-readable format." },
  { icon: <ObjectIcon />, title: "Right to Object", desc: "Object to processing based on legitimate interests or direct marketing." },
];

function DataRightsSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Decorative */}
      <div className="absolute top-[722px] left-[-256px] w-[512px] h-[512px] rounded-full bg-[rgba(251,255,121,0.04)] hidden lg:block" />

      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <AnimatedSection variant="fadeLeft">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 bg-[rgba(16,24,44,0.04)] rounded-full px-5 py-2 mb-6">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <g clipPath="url(#dr)">
                    <path d={svgPaths.p16998f00} stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
                    <path d={svgPaths.p1812b600} stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
                    <path d={svgPaths.p2c99e20} stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
                    <path d={svgPaths.p3adccf00} stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
                    <path d="M1.49138 11.9406H1.49884" stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
                    <path d={svgPaths.p24567400} stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
                    <path d={svgPaths.p18cc5500} stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
                    <path d={svgPaths.pd63f300} stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
                    <path d={svgPaths.p24283180} stroke="#10182C" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49" />
                  </g>
                  <defs><clipPath id="dr"><rect fill="white" height="18" width="18" /></clipPath></defs>
                </svg>
                <span className="font-['Mulish',sans-serif] text-[rgba(16,24,44,0.6)] text-[13px] md:text-[15px] tracking-[1.28px] uppercase">
                  Your Rights
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-['Montserrat',sans-serif] font-['Space_Grotesk',sans-serif] text-[#10182c] text-[36px] md:text-[44px] lg:text-[54px] tracking-[-1.5px] leading-[1.1] mb-6">
                Your data,{" "}
                <span className="text-[#c85212]">your control</span>
              </h2>

              {/* Description */}
              <p className="font-['Mulish',sans-serif] text-[#667085] text-[16px] md:text-[18px] lg:text-[19px] leading-[1.7] max-w-[520px] mb-10">
                You have comprehensive rights regarding your personal data. We make it easy to exercise every single one.
              </p>
            </AnimatedSection>

            {/* Get in Touch card */}
            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className="bg-[#10182c] rounded-[20px] p-8 md:p-9">
                <div className="flex items-center gap-4 mb-3">
                  <MailIcon />
                  <span className="font-['Mulish',sans-serif] text-white/60 text-[13px] md:text-[15px] tracking-[0.64px] uppercase">
                    Get in Touch
                  </span>
                </div>

                <p className="font-['Mulish',sans-serif] text-white text-[16px] md:text-[19px] mb-2">
                  Have a question or request?
                </p>

                <a href="mailto:support@apartey.com" className="font-['Mulish',sans-serif] text-[#c85212] text-[15px] md:text-[18px] hover:text-[#e8863a] transition-colors">
                  support@apartey.com
                </a>

                <p className="font-['Mulish',sans-serif] text-white/40 text-[14px] md:text-[16px] leading-[1.6] mt-6 max-w-[473px]">
                  Reach out to our team anytime — we typically respond within 24 hours.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column - Rights grid */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {RIGHTS_CARDS.map((card) => (
                <StaggerItem key={card.title}>
                  <div className="bg-[#fafafa] border border-[rgba(0,0,0,0.03)] rounded-[18px] p-6 md:p-7 min-h-[200px] md:min-h-[217px]">
                    <div className="bg-[rgba(200,82,18,0.08)] rounded-[13px] w-[46px] h-[46px] flex items-center justify-center mb-5">
                      {card.icon}
                    </div>
                    <h4 className="font-['Montserrat',sans-serif] text-[#10182c] text-[17px] md:text-[20px] tracking-[-0.26px] mb-2">
                      {card.title}
                    </h4>
                    <p className="font-['Mulish',sans-serif] text-[#667085] text-[14px] md:text-[16px] leading-[1.6] max-w-[336px]">
                      {card.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 5: CTA
   ═══════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative bg-[#10182c] overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[640px] h-[400px] md:h-[640px] rounded-bl-full" style={{ backgroundImage: "linear-gradient(225deg, rgba(200,82,18,0.1) 0%, transparent 100%)" }} />
      <div className="absolute top-[-269px] left-[16%] w-[750px] md:w-[1185px] h-[750px] md:h-[1185px] border border-[rgba(255,255,255,0.02)] rounded-full hidden md:block" />

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 text-center">
        <AnimatedSection variant="fadeUp">
          <h2 className="font-['Space_Grotesk',sans-serif] text-white text-[36px] md:text-[52px] lg:text-[67px] tracking-[-1.9px] leading-[1.08] max-w-[550px] mx-auto">
            Ready to rent{" "}
            <span className="text-[#c85212]">with confidence?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <p className="font-['Mulish',sans-serif] text-white/40 text-[16px] md:text-[19px] lg:text-[22px] leading-[1.65] max-w-[600px] mx-auto mt-6">
            Have questions, feedback, or want to partner with us? We'd love to hear from you. Your privacy is always protected.
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="mt-10 md:mt-12">
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(200,82,18,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#c85212] text-white rounded-full px-8 md:px-10 py-4 md:py-5 font-['Mulish',sans-serif] font-bold text-[17px] md:text-[20px] tracking-[0.51px] cursor-pointer hover:bg-[#b84a10] transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 6: FOOTER
   ═══════════════════════════════════════════════════════ */
function FooterSection() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-[#3a414e] overflow-hidden">
      {/* Newsletter area */}
      <div className="relative z-10 max-w-[993px] mx-auto -mt-0">
        <div className="bg-[rgba(117,122,131,0.15)] rounded-[40px] md:rounded-[80px] mx-4 md:mx-6 px-6 md:px-12 pt-24 md:pt-40 pb-10 md:pb-16 text-center -mt-[100px] md:-mt-[188px] relative overflow-hidden">
          {/* Logo */}
          <div className="relative h-[70px] md:h-[101px] w-[172px] md:w-[248px] mx-auto mb-6">
            <img src={imgApartey2} alt="Apartey" className="absolute h-[321%] left-[-17%] top-[-110%] w-[131%] max-w-none" />
          </div>

          {/* Email input */}
          <div className="relative bg-[#757a83] rounded-[24px] md:rounded-[32px] overflow-hidden max-w-[880px] mx-auto h-[80px] md:h-[100px] lg:h-[119px] flex items-center px-4 md:px-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border-none outline-none font-['Inter',sans-serif] text-[#f7f7f7] text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] placeholder:text-[#f7f7f7]/60"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-[28px] md:rounded-[40px] px-6 md:px-10 py-3 md:py-5 flex items-center gap-3 cursor-pointer shrink-0"
            >
              <span className="font-['Mulish',sans-serif] font-bold text-[#3a414e] text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px]">
                Submit
              </span>
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 32 32">
                <path d={svgPaths.p32c19dc0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              </svg>
            </motion.button>
          </div>

          <p className="font-['Inter',sans-serif] text-[#f7f7f7]/60 text-[14px] md:text-[18px] lg:text-[22px] tracking-[0.64px] mt-5 md:mt-7">
            2,000+ users end their week inspired. Join us today.
          </p>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="relative h-[80px] md:h-[116px] w-[200px] md:w-[286px] mb-6">
              <img src={imgApartey2} alt="Apartey" className="absolute h-[321%] left-[-17%] top-[-110%] w-[131%] max-w-none" />
            </div>

            <p className="font-['Inter',sans-serif] text-white text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] leading-[1.5] max-w-[536px] mb-8">
              Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions.
            </p>

            <p className="font-['Inter',sans-serif] text-[#757a83] text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px]">
              &copy; 2025 Apartey. All rights reserved.
            </p>
          </div>

          {/* Right columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-16">
            {/* Company */}
            <div>
              <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[18px] md:text-[22px] lg:text-[24px] tracking-[0.64px] mb-5">
                Company
              </h4>
              <div className="flex flex-col gap-4">
                <Link to="/about" className="font-['Inter',sans-serif] text-white text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] hover:text-white/80 transition-colors">
                  About us
                </Link>
                <a href="#" className="font-['Inter',sans-serif] text-white text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] hover:text-white/80 transition-colors">
                  Blog
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[18px] md:text-[22px] lg:text-[24px] tracking-[0.64px] mb-5">
                Support
              </h4>
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="font-['Inter',sans-serif] text-white text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] hover:text-white/80 transition-colors">
                  Contact us
                </Link>
                <a href="#" className="font-['Inter',sans-serif] text-white text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] hover:text-white/80 transition-colors">
                  FAQ
                </a>
                <div className="flex items-center gap-2.5 mt-1">
                  <FacebookFooterIcon />
                  <InstagramFooterIcon />
                  <XFooterIcon />
                  <LinkedInFooterIcon />
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[18px] md:text-[22px] lg:text-[24px] tracking-[0.64px] mb-5">
                Legal
              </h4>
              <div className="flex flex-col gap-4 md:gap-6">
                <a href="#" className="font-['Inter',sans-serif] text-white text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] hover:text-white/80 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="font-['Inter',sans-serif] text-white text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] hover:text-white/80 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="font-['Inter',sans-serif] text-white text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] hover:text-white/80 transition-colors">
                  Cookies Settings
                </a>
                <a href="#" className="font-['Inter',sans-serif] text-white text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px] hover:text-white/80 transition-colors">
                  Content Policy
                </a>
              </div>
            </div>

            {/* Region */}
            <div>
              <h4 className="font-['Mulish',sans-serif] font-bold text-white text-[18px] md:text-[22px] lg:text-[24px] tracking-[0.64px] mb-5">
                Region
              </h4>
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="inline-flex items-center gap-2.5 bg-white/[0.09] border border-white rounded-full px-5 py-1.5 w-fit">
                  <NigeriaFlag />
                  <span className="font-['Inter',sans-serif] text-[#f7f7f7] text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px]">
                    Nigeria
                  </span>
                </div>
                <div className="inline-flex items-center gap-2.5 rounded-full px-5 py-1.5 w-fit">
                  <EstoniaFlag />
                  <span className="font-['Inter',sans-serif] text-[#f7f7f7]/60 text-[16px] md:text-[20px] lg:text-[22px] tracking-[0.64px]">
                    Estonia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN ABOUT PAGE
   ═══════════════════════════════════════════════════════ */
import { SharedNavbar } from "./SharedNavbar";

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <MissionSection />
      <TrustComplianceSection />
      <DataRightsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

export default AboutPage;