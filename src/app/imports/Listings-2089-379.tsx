import svgPaths from "./svg-a8y974knzd";
import imgImageWithFallback from "figma:asset/d914adc4fa5eab6dcecbc096a7880ce34233c241.png";
import imgImg from "figma:asset/edceb707ce9f55684ea576c367e586c80ada14bb.png";
import imgApartey2 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import imgImageWithFallback1 from "figma:asset/9ccf35c1a9fbbd63fd7831e49225db7d77f0a2ac.png";

function Section() {
  return <div className="h-0 shrink-0 w-full" data-name="Section" />;
}

function Div1() {
  return <div className="absolute border-[0.917px] border-[rgba(200,82,18,0.08)] border-solid left-[902.96px] opacity-40 rounded-[30759682px] size-[880.042px] top-[82.5px]" data-name="div" />;
}

function Div2() {
  return <div className="absolute border-[0.917px] border-[rgba(251,255,121,0.05)] border-solid left-[1012.96px] opacity-30 rounded-[30759682px] size-[605.029px] top-[192.51px]" data-name="div" />;
}

function Div3() {
  return <div className="absolute bg-[#c85212] left-[138.24px] opacity-25 rounded-[30759682px] size-[8.25px] top-[302.51px]" data-name="div" />;
}

function Div4() {
  return <div className="absolute bg-[#fbff79] left-[1408.71px] opacity-20 rounded-[30759682px] size-[8.25px] top-[165.01px]" data-name="div" />;
}

function MotionDiv() {
  return <div className="absolute bg-[#c85212] blur-[220.011px] left-[346.96px] opacity-3 rounded-[30759682px] size-[688.48px] top-[15px]" data-name="motion.div" />;
}

function ChevronLeft() {
  return (
    <div className="absolute left-0 size-[22.001px] top-[3.44px]" data-name="ChevronLeft">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0011 22.0011">
        <g id="ChevronLeft">
          <path d={svgPaths.p198c7a3c} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="1.83342" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[28.876px] relative shrink-0 w-[196.907px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ChevronLeft />
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.876px] left-[33px] text-[19.251px] text-[rgba(255,255,255,0.4)] top-[-0.91px] tracking-[0.88px]">Back to Reviews</p>
      </div>
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="absolute content-stretch flex h-[28.876px] items-center left-[132.01px] top-[88px] w-[1463.987px]" data-name="motion.div">
      <Link />
    </div>
  );
}

function MessageSquare() {
  return (
    <div className="absolute left-[22px] size-[19.251px] top-[11px]" data-name="MessageSquare">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="MessageSquare">
          <path d={svgPaths.p81649f0} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="absolute h-[24.751px] left-[52.25px] top-[8.25px] w-[176.152px]" data-name="span">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.751px] left-0 text-[16.501px] text-[rgba(255,255,255,0.5)] top-[-0.92px] tracking-[1.3751px] uppercase">Property Review</p>
    </div>
  );
}

function MotionDiv2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border-[0.917px] border-[rgba(255,255,255,0.08)] border-solid h-[43.085px] left-0 rounded-[30759682px] top-0 w-[252.239px]" data-name="motion.div">
      <MessageSquare />
      <Span />
    </div>
  );
}

function MotionH() {
  return (
    <div className="absolute h-[142.549px] left-0 top-[70.59px] w-[1100.053px]" data-name="motion.h1">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[71.283px] left-0 text-[66.003px] text-white top-0 tracking-[-2.0626px] w-[716.409px] whitespace-pre-wrap">12 Freedom Way, Lagos</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[266.075px] left-[132.01px] top-[171.88px] w-[1100.053px]" data-name="Container">
      <MotionDiv2 />
      <MotionH />
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute h-[437.959px] left-0 top-[126.51px] w-[1728px]" data-name="div">
      <MotionDiv1 />
      <Container />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#10182c] h-[718.472px] left-0 overflow-clip top-0 w-[1728px]" data-name="section">
      <Div1 />
      <Div2 />
      <Div3 />
      <Div4 />
      <MotionDiv />
      <Div5 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[71.503px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[30759682px] shadow-[0px_0px_0px_2.75px_white,0px_0px_0px_5.5px_rgba(200,82,18,0.15)] shrink-0 size-[71.503px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[35.064px] left-0 top-0 w-[157.603px]" data-name="h3">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[35.064px] left-0 text-[#10182c] text-[23.376px] top-0">John Doe</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[35.064px] relative shrink-0 w-full" data-name="Container">
      <H1 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute left-0 size-[16.501px] top-[5.16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5008 16.5008">
        <g id="Calendar">
          <path d="M5.50072 1.37439V4.12453" id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.37507" />
          <path d="M11.001 1.37439V4.12453" id="Vector_2" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.37507" />
          <path d={svgPaths.p1b123000} id="Vector_3" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.37507" />
          <path d="M2.06305 6.87466H14.4386" id="Vector_4" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="1.37507" />
        </g>
      </svg>
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[131.691px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Calendar />
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-[22px] text-[17.876px] text-[rgba(16,24,44,0.35)] top-[-0.91px]">{` Dec 03, 2025`}</p>
      </div>
    </div>
  );
}

function Span2() {
  return <div className="h-[26.814px] shrink-0 w-[78.98px]" data-name="span" />;
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16.501px] h-[26.814px] items-center relative shrink-0 w-full" data-name="Container">
      <Span1 />
      <Span2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[67.378px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.5px] items-start relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[71.503px] relative shrink-0 w-[409.369px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[22.001px] items-center relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function ThumbsUp() {
  return (
    <div className="absolute left-[20.17px] size-[19.251px] top-[15.69px]" data-name="ThumbsUp">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="ThumbsUp">
          <path d="M5.61645 8.02309V17.6485" id="Vector" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          <path d={svgPaths.p1a87d400} id="Vector_2" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function MotionButton() {
  return (
    <div className="h-[50.648px] relative rounded-[13.751px] shrink-0 w-[89.293px]" data-name="motion.button">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.917px] border-solid inset-0 pointer-events-none rounded-[13.751px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ThumbsUp />
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-[58.67px] text-[#6c727f] text-[17.876px] text-center top-[11px]">12</p>
      </div>
    </div>
  );
}

function Bookmark() {
  return (
    <div className="h-[19.251px] overflow-clip relative shrink-0 w-full" data-name="Bookmark">
      <div className="absolute inset-[12.49%_20.84%_12.51%_20.82%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.834 16.0424">
            <path d={svgPaths.p2a316800} id="Vector" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MotionButton1() {
  return (
    <div className="relative rounded-[13.751px] shrink-0 size-[43.085px]" data-name="motion.button">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.917px] border-solid inset-0 pointer-events-none rounded-[13.751px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.917px] pt-[11.917px] px-[11.917px] relative size-full">
        <Bookmark />
      </div>
    </div>
  );
}

function Share() {
  return (
    <div className="h-[19.251px] overflow-clip relative shrink-0 w-full" data-name="Share2">
      <div className="absolute inset-[8.31%_12.5%_66.69%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.41698 6.41698">
            <path d={svgPaths.p2fa1b480} id="Vector" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.49%_62.5%_37.51%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.41698 6.41698">
            <path d={svgPaths.p2fa1b480} id="Vector" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.68%_12.5%_8.32%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.41698 6.41698">
            <path d={svgPaths.p2fa1b480} id="Vector" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.3%_35.74%_27.12%_35.8%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.083 4.79695">
            <path d={svgPaths.p194a6880} id="Vector" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.11%_35.78%_56.31%_35.8%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.07498 4.79695">
            <path d={svgPaths.p246dbac0} id="Vector" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MotionButton2() {
  return (
    <div className="relative rounded-[13.751px] shrink-0 size-[43.085px]" data-name="motion.button">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.917px] border-solid inset-0 pointer-events-none rounded-[13.751px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.917px] pt-[11.917px] px-[11.917px] relative size-full">
        <Share />
      </div>
    </div>
  );
}

function Flag() {
  return (
    <div className="h-[19.251px] overflow-clip relative shrink-0 w-full" data-name="Flag">
      <div className="absolute inset-[8.31%_16.66%_33.36%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4382 12.834">
            <path d={svgPaths.p3af18e00} id="Vector" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.49%_83.33%_8.34%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-0.8px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.60424 7.2191">
            <path d="M0.802122 6.41698V0.802122" id="Vector" stroke="var(--stroke-0, #6C727F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MotionButton3() {
  return (
    <div className="relative rounded-[13.751px] shrink-0 size-[43.085px]" data-name="motion.button">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.917px] border-solid inset-0 pointer-events-none rounded-[13.751px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.917px] pt-[11.917px] px-[11.917px] relative size-full">
        <Flag />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[50.648px] relative shrink-0 w-[251.551px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.001px] items-center relative size-full">
        <MotionButton />
        <MotionButton1 />
        <MotionButton2 />
        <MotionButton3 />
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute content-stretch flex h-[71.503px] items-center justify-between left-[44.92px] top-[44.92px] w-[745.816px]" data-name="div">
      <Container2 />
      <Container7 />
    </div>
  );
}

function H() {
  return (
    <div className="h-[45.377px] relative shrink-0 w-full" data-name="h2">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[45.377px] left-0 text-[#10182c] text-[30.251px] top-[-0.46px] tracking-[-0.4125px]">Fantastic apartment in a vibrant location!</p>
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[85.254px] items-start left-[44.92px] top-[149.42px] w-[745.816px]" data-name="div">
      <H />
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute h-[668.282px] left-[44.92px] top-[262.18px] w-[745.816px]" data-name="div">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[37.127px] left-0 text-[20.626px] text-[rgba(16,24,44,0.55)] top-[-0.91px] tracking-[0.275px] w-[741.161px] whitespace-pre-wrap">{`Living at 12 Camden High Street was fantastic! The apartment was modern and spacious, with great amenities. The kitchen is fully equipped and the living room has comfortable furniture. The neighborhood is lively, vibrant, and surprisingly safe for such a central location.  The building management is incredibly responsive — any maintenance request I submitted was handled within 24 hours. The communal areas are kept spotless and the security is top-notch with 24/7 CCTV and key-fob access.  Public transportation is right at your doorstep with Camden Town tube station just a 2-minute walk away. There are countless restaurants, cafes, and the famous Camden Market within walking distance.  The only minor drawback was occasional noise from the high street on Friday and Saturday nights, but the double-glazed windows help significantly. Overall, considering the location and quality, it's exceptional value.`}</p>
    </div>
  );
}

function H2() {
  return (
    <div className="h-[30.939px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.939px] left-0 text-[20.626px] text-[rgba(16,24,44,0.8)] top-[-0.91px]">Amenities mentioned</p>
    </div>
  );
}

function Snowflake() {
  return (
    <div className="absolute left-[16.5px] size-[19.251px] top-[12.03px]" data-name="Snowflake">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Snowflake">
          <path d={svgPaths.pf3c8070} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p31e4a80} id="Vector_2" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p2a358900} id="Vector_3" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p26c77480} id="Vector_4" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p16a6a100} id="Vector_5" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p85ab1a0} id="Vector_6" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p9a2100} id="Vector_7" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p1e8b9000} id="Vector_8" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p27560d00} id="Vector_9" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p5052ae0} id="Vector_10" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p19569300} id="Vector_11" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p3089c700} id="Vector_12" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute bg-[#f5f6f7] border-[0.917px] border-[rgba(232,232,232,0.6)] border-solid h-[45.148px] left-0 rounded-[13.751px] top-0 w-[199.256px]" data-name="span">
      <Snowflake />
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-[44px] text-[17.876px] text-[rgba(16,24,44,0.55)] top-[7.34px] tracking-[0.275px]">Air Conditioning</p>
    </div>
  );
}

function Wifi() {
  return (
    <div className="absolute left-[16.5px] size-[19.251px] top-[12.03px]" data-name="Wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Wifi">
          <path d="M9.62505 16.0414H9.63307" id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p37876d00} id="Vector_2" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p1c153b80} id="Vector_3" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p28a5d980} id="Vector_4" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute bg-[#f5f6f7] border-[0.917px] border-[rgba(232,232,232,0.6)] border-solid h-[45.148px] left-[210.26px] rounded-[13.751px] top-0 w-[216.029px]" data-name="span">
      <Wifi />
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-[44px] text-[17.876px] text-[rgba(16,24,44,0.55)] top-[7.34px] tracking-[0.275px]">High-Speed Wi-Fi</p>
    </div>
  );
}

function Dumbbell() {
  return (
    <div className="absolute left-[16.5px] size-[19.251px] top-[12.03px]" data-name="Dumbbell">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Dumbbell">
          <path d={svgPaths.p37693d80} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p20744a00} id="Vector_2" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p3b3f4400} id="Vector_3" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p1aec6a80} id="Vector_4" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.pdfbb980} id="Vector_5" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute bg-[#f5f6f7] border-[0.917px] border-[rgba(232,232,232,0.6)] border-solid h-[45.148px] left-[437.29px] rounded-[13.751px] top-0 w-[101.425px]" data-name="span">
      <Dumbbell />
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-[44px] text-[17.876px] text-[rgba(16,24,44,0.55)] top-[7.34px] tracking-[0.275px]">Gym</p>
    </div>
  );
}

function Building() {
  return (
    <div className="absolute left-[16.5px] size-[19.251px] top-[12.03px]" data-name="Building2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Building2">
          <path d={svgPaths.p16f7ab80} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p13867600} id="Vector_2" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p1bffad00} id="Vector_3" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d="M8.02267 4.81528H11.2312" id="Vector_4" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d="M8.02267 8.02734H11.2312" id="Vector_5" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d="M8.02267 11.2287H11.2312" id="Vector_6" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d="M8.02267 14.4407H11.2312" id="Vector_7" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute bg-[#f5f6f7] border-[0.917px] border-[rgba(232,232,232,0.6)] border-solid h-[45.148px] left-[549.71px] rounded-[13.751px] top-0 w-[132.766px]" data-name="span">
      <Building />
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-[44px] text-[17.876px] text-[rgba(16,24,44,0.55)] top-[7.34px] tracking-[0.275px]">Laundry</p>
    </div>
  );
}

function Lock() {
  return (
    <div className="absolute left-[16.5px] size-[19.251px] top-[12.03px]" data-name="Lock">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Lock">
          <path d={svgPaths.pda8cb80} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p2c881b80} id="Vector_2" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Span7() {
  return (
    <div className="absolute bg-[#f5f6f7] border-[0.917px] border-[rgba(232,232,232,0.6)] border-solid h-[45.148px] left-0 rounded-[13.751px] top-[56.16px] w-[174.505px]" data-name="span">
      <Lock />
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-[44px] text-[17.876px] text-[rgba(16,24,44,0.55)] top-[7.33px] tracking-[0.275px]">24/7 Security</p>
    </div>
  );
}

function Building1() {
  return (
    <div className="absolute left-[16.5px] size-[19.251px] top-[12.03px]" data-name="Building2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Building2">
          <path d={svgPaths.p59fac80} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p2a688800} id="Vector_2" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d={svgPaths.p1e74500} id="Vector_3" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d="M8.02246 4.81114H11.231" id="Vector_4" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d="M8.02246 8.02321H11.231" id="Vector_5" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d="M8.02246 11.2245H11.231" id="Vector_6" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
          <path d="M8.02246 14.4366H11.231" id="Vector_7" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Span8() {
  return (
    <div className="absolute bg-[#f5f6f7] border-[0.917px] border-[rgba(232,232,232,0.6)] border-solid h-[45.148px] left-[185.51px] rounded-[13.751px] top-[56.16px] w-[146.803px]" data-name="span">
      <Building1 />
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-[44px] text-[17.876px] text-[rgba(16,24,44,0.55)] top-[7.33px] tracking-[0.275px]">Concierge</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[101.297px] relative shrink-0 w-full" data-name="Container">
      <Span3 />
      <Span4 />
      <Span5 />
      <Span6 />
      <Span7 />
      <Span8 />
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col gap-[16.501px] h-[148.736px] items-start relative shrink-0 w-full" data-name="div">
      <H2 />
      <Container8 />
    </div>
  );
}

function Span9() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[288.091px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-0 text-[17.876px] text-[rgba(16,24,44,0.35)] top-[-0.91px]">18 people found this review helpful</p>
      </div>
    </div>
  );
}

function ThumbsUp1() {
  return (
    <div className="absolute left-0 size-[19.251px] top-[3.78px]" data-name="ThumbsUp">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="ThumbsUp">
          <path d="M5.61649 8.02529V17.6508" id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.60424" />
          <path d={svgPaths.p2cf9700} id="Vector_2" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function MotionButton4() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[88.692px]" data-name="motion.button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ThumbsUp1 />
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.814px] left-[58.5px] text-[17.876px] text-[rgba(16,24,44,0.5)] text-center top-[-0.91px]">Helpful</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex h-[55.232px] items-center justify-between pt-[0.917px] relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-solid border-t-[0.917px] inset-0 pointer-events-none" />
      <Span9 />
      <MotionButton4 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[33.002px] items-start left-[44.92px] top-[930.46px] w-[745.816px]">
      <Div9 />
      <Div10 />
    </div>
  );
}

function MotionDiv3() {
  return (
    <div className="bg-white h-[1211.433px] relative rounded-[22.001px] shrink-0 w-[836.04px]" data-name="motion.div">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.917px] border-solid inset-0 pointer-events-none rounded-[22.001px] shadow-[0px_5.5px_27.501px_0px_rgba(0,0,0,0.04)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Div6 />
        <Div7 />
        <Div8 />
        <Frame19 />
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute left-[492.56px] size-[22.001px] top-[26.47px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0011 22.0011">
        <g id="ArrowRight">
          <path d="M4.58487 11.0029H17.4188" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83342" />
          <path d={svgPaths.p1c8a7300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83342" />
        </g>
      </svg>
    </div>
  );
}

function MotionDiv4() {
  return (
    <div className="bg-[#c85212] h-[74.941px] relative rounded-[16.501px] shrink-0 w-[835.654px]" data-name="motion.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.939px] left-[321.09px] text-[20.626px] text-white top-[21.09px] tracking-[0.5225px]">Leave a Review</p>
        <ArrowRight />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[33.002px] items-start left-0 top-0 w-[835.654px]" data-name="Container">
      <MotionDiv3 />
      <MotionDiv4 />
    </div>
  );
}

function Container9() {
  return <div className="absolute h-[1500.197px] left-[880.04px] top-[0.69px] w-[584.403px]" data-name="Container" />;
}

function MainContent() {
  return (
    <div className="absolute h-[1774.867px] left-[132.01px] top-[565.15px] w-[1463.987px]" data-name="Main Content">
      <Container1 />
      <Container9 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Section1 />
      <MainContent />
    </div>
  );
}

function Div() {
  return (
    <div className="bg-[#fafafa] h-[2029px] relative shrink-0 w-full" data-name="div">
      <Group1 />
    </div>
  );
}

function SR() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[749.87px] items-start left-0 top-0 w-[1728px]" data-name="sR">
      <Section />
      <Div />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[68.753px] left-0 top-0 w-[107.255px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[68.753px] left-[54.03px] text-[#10182c] text-[68.753px] text-center top-[-1.38px] tracking-[-2.7501px]">4.5</p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p153e8c80} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p23424880} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star2() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p8249c40} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star3() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p35e83b00} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="flex-[1_0_0] h-[19.251px] min-h-px min-w-px relative" data-name="Star">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.32%_8.33%_12.22%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6481 16.9024">
              <path d={svgPaths.p1a855000} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[2.75px] h-[19.251px] items-center left-0 top-[68.75px] w-[107.255px]" data-name="Container">
      <Star />
      <Star1 />
      <Star2 />
      <Star3 />
      <Star4 />
    </div>
  );
}

function P() {
  return <div className="absolute h-[24.751px] left-0 top-[93.5px] w-[107.255px]" data-name="p" />;
}

function Container10() {
  return (
    <div className="h-[118.256px] relative shrink-0 w-[107.255px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container11 />
        <Container12 />
        <P />
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute content-stretch flex gap-[27.501px] h-[93.505px] items-center left-[44.39px] top-[44.69px] w-[495.024px]" data-name="div">
      <Container10 />
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[45.377px] relative shrink-0 text-[#10182c] text-[30.251px] tracking-[-0.4125px]">Rating</p>
    </div>
  );
}

function Div12() {
  return <div className="bg-[#f0f0f0] h-[1.375px] shrink-0 w-full" data-name="div" />;
}

function BarChart() {
  return (
    <div className="relative shrink-0 size-[22.001px]" data-name="BarChart3">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0011 22.0011">
        <g id="BarChart3">
          <path d={svgPaths.p2a0c4c00} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83342" />
          <path d="M16.5003 15.5803V8.24659" id="Vector_2" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83342" />
          <path d="M11.9159 15.5839V4.58333" id="Vector_3" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83342" />
          <path d="M7.33412 15.5839V12.8337" id="Vector_4" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83342" />
        </g>
      </svg>
    </div>
  );
}

function H3() {
  return (
    <div className="h-[30.939px] relative shrink-0 w-[172.155px]" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.939px] left-0 text-[20.626px] text-[rgba(16,24,44,0.8)] top-[-0.91px]">Category Ratings</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[11.001px] h-[30.939px] items-center relative shrink-0 w-full" data-name="Container">
      <BarChart />
      <H3 />
    </div>
  );
}

function Span10() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[165.008px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-0 text-[17.876px] text-[rgba(16,24,44,0.6)] top-[-0.91px]">Overall Experience</p>
      </div>
    </div>
  );
}

function MotionDiv6() {
  return <div className="bg-[#4caf50] h-[6.875px] rounded-[30759682px] shrink-0 w-full" data-name="motion.div" />;
}

function Container16() {
  return (
    <div className="bg-[#f0f1f3] flex-[1_0_0] h-[6.875px] min-h-px min-w-px relative rounded-[30759682px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[10.327px] relative size-full">
          <MotionDiv6 />
        </div>
      </div>
    </div>
  );
}

function Span11() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[38.502px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.814px] left-[38.6px] text-[17.876px] text-[rgba(16,24,44,0.7)] text-right top-[-0.91px]">4.8</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[494.494px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.501px] items-center relative size-full">
        <Span10 />
        <Container16 />
        <Span11 />
      </div>
    </div>
  );
}

function Span12() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[165.008px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-0 text-[17.876px] text-[rgba(16,24,44,0.6)] top-[-0.91px]">Value for Money</p>
      </div>
    </div>
  );
}

function MotionDiv7() {
  return <div className="bg-[#facc16] h-[6.875px] rounded-[30759682px] shrink-0 w-full" data-name="motion.div" />;
}

function Container18() {
  return (
    <div className="bg-[#f0f1f3] flex-[1_0_0] h-[6.875px] min-h-px min-w-px relative rounded-[30759682px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[36.124px] relative size-full">
          <MotionDiv7 />
        </div>
      </div>
    </div>
  );
}

function Span13() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[38.502px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.814px] left-[38.6px] text-[17.876px] text-[rgba(16,24,44,0.7)] text-right top-[-0.91px]">4.3</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[494.494px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.501px] items-center relative size-full">
        <Span12 />
        <Container18 />
        <Span13 />
      </div>
    </div>
  );
}

function Span14() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[165.008px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-0 text-[17.876px] text-[rgba(16,24,44,0.6)] top-[-0.91px]">Noise Level</p>
      </div>
    </div>
  );
}

function MotionDiv8() {
  return <div className="bg-[#facc16] h-[6.875px] rounded-[30759682px] shrink-0 w-full" data-name="motion.div" />;
}

function Container20() {
  return (
    <div className="bg-[#f0f1f3] flex-[1_0_0] h-[6.875px] min-h-px min-w-px relative rounded-[30759682px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[77.405px] relative size-full">
          <MotionDiv8 />
        </div>
      </div>
    </div>
  );
}

function Span15() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[38.502px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.814px] left-[38.6px] text-[17.876px] text-[rgba(16,24,44,0.7)] text-right top-[-0.91px]">3.5</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[494.494px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.501px] items-center relative w-full">
        <Span14 />
        <Container20 />
        <Span15 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[16.501px] h-[200.072px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Div13() {
  return (
    <div className="content-stretch flex flex-col gap-[22.001px] h-[187.009px] items-start relative shrink-0 w-full" data-name="div">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27.501px] h-[215.885px] items-start left-[45.38px] top-[138.89px] w-[493.649px]">
      <Div12 />
      <Div13 />
    </div>
  );
}

function MotionDiv5() {
  return (
    <div className="bg-white h-[400.144px] relative rounded-[22.001px] shrink-0 w-full" data-name="motion.div">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.917px] border-solid inset-0 pointer-events-none rounded-[22.001px] shadow-[0px_5.5px_27.501px_0px_rgba(0,0,0,0.04)]" />
      <Div11 />
      <Frame20 />
    </div>
  );
}

function H4() {
  return (
    <div className="h-[35.064px] relative shrink-0 w-[199.284px]" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[35.064px] left-0 text-[23.376px] text-[rgba(16,24,44,0.8)] top-0">Similar Properties</p>
      </div>
    </div>
  );
}

function Span16() {
  return (
    <div className="h-[26.814px] relative shrink-0 w-[65.788px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-0 text-[#c85212] text-[17.876px] top-[-0.91px]">View all</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[90.984px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b-[0.917px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[0.917px] px-[44.002px] relative size-full">
          <H4 />
          <Span16 />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[116.881px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Div14() {
  return (
    <div className="h-[116.881px] relative rounded-[11.001px] shrink-0 w-[137.507px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Img />
      </div>
    </div>
  );
}

function H5() {
  return (
    <div className="absolute h-[28.876px] left-0 overflow-clip top-[14.78px] w-[338.653px]" data-name="h4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.876px] left-0 text-[#10182c] text-[19.251px] top-[-0.91px] tracking-[0.275px]">No 1. Kumuye Street</p>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute h-[24.751px] left-0 overflow-clip top-[46.41px] w-[338.653px]" data-name="p">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.751px] left-0 text-[16.501px] text-[rgba(16,24,44,0.4)] top-[-0.91px]">Abattoir, Kogi, Nigeria</p>
    </div>
  );
}

function Star5() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p39b4cb00} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star6() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p2e614b80} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star7() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p3ce3700} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star8() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p1d23cd80} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star9() {
  return (
    <div className="flex-[1_0_0] h-[19.251px] min-h-px min-w-px relative" data-name="Star">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.3%_8.33%_12.23%_8.32%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6481 16.9024">
              <path d={svgPaths.p1a855000} id="Vector" stroke="var(--stroke-0, #CAD0D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[19.251px] relative shrink-0 w-[107.255px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.75px] items-center relative size-full">
        <Star5 />
        <Star6 />
        <Star7 />
        <Star8 />
        <Star9 />
      </div>
    </div>
  );
}

function Span17() {
  return (
    <div className="h-[22.689px] relative shrink-0 w-[40.822px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.689px] left-0 text-[15.126px] text-[rgba(16,24,44,0.5)] top-[-0.46px]">4 (28)</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[8.25px] h-[22.689px] items-center left-0 top-[79.41px] w-[338.653px]" data-name="Container">
      <Container25 />
      <Span17 />
    </div>
  );
}

function Div15() {
  return (
    <div className="flex-[1_0_0] h-[116.881px] min-h-px min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <H5 />
        <P1 />
        <Container24 />
      </div>
    </div>
  );
}

function MotionDiv9() {
  return (
    <div className="bg-[#fafafa] h-[157.216px] relative rounded-[16.501px] shrink-0 w-[538.496px]" data-name="motion.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[22.001px] items-start overflow-clip pb-[0.917px] pt-[20.168px] px-[20.168px] relative rounded-[inherit] size-full">
        <Div14 />
        <Div15 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.917px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16.501px]" />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[116.881px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Div16() {
  return (
    <div className="h-[116.881px] relative rounded-[11.001px] shrink-0 w-[137.507px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Img1 />
      </div>
    </div>
  );
}

function H6() {
  return (
    <div className="absolute h-[28.876px] left-0 overflow-clip top-[14.78px] w-[338.653px]" data-name="h4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.876px] left-0 text-[#10182c] text-[19.251px] top-[-0.91px] tracking-[0.275px]">119 Okene Market Rd</p>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute h-[24.751px] left-0 overflow-clip top-[46.41px] w-[338.653px]" data-name="p">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.751px] left-0 text-[16.501px] text-[rgba(16,24,44,0.4)] top-[-0.92px]">Okene, Kogi, Nigeria</p>
    </div>
  );
}

function Star10() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p34d4ff00} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star11() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p469fef0} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star12() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p3c024400} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star13() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p57b3900} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star14() {
  return (
    <div className="flex-[1_0_0] h-[19.251px] min-h-px min-w-px relative" data-name="Star">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.31%_8.33%_12.23%_8.32%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6481 16.9024">
              <path d={svgPaths.p1a855000} id="Vector" stroke="var(--stroke-0, #CAD0D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[19.251px] relative shrink-0 w-[107.255px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.75px] items-center relative size-full">
        <Star10 />
        <Star11 />
        <Star12 />
        <Star13 />
        <Star14 />
      </div>
    </div>
  );
}

function Span18() {
  return (
    <div className="h-[22.689px] relative shrink-0 w-[53.341px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.689px] left-0 text-[15.126px] text-[rgba(16,24,44,0.5)] top-[-0.46px]">4.2 (15)</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[8.25px] h-[22.689px] items-center left-0 top-[79.41px] w-[338.653px]" data-name="Container">
      <Container27 />
      <Span18 />
    </div>
  );
}

function Div17() {
  return (
    <div className="flex-[1_0_0] h-[116.881px] min-h-px min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <H6 />
        <P2 />
        <Container26 />
      </div>
    </div>
  );
}

function MotionDiv10() {
  return (
    <div className="bg-[#fafafa] h-[157.216px] relative rounded-[16.501px] shrink-0 w-[538.496px]" data-name="motion.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[22.001px] items-start overflow-clip pb-[0.917px] pt-[20.168px] px-[20.168px] relative rounded-[inherit] size-full">
        <Div16 />
        <Div17 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.917px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16.501px]" />
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[116.881px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Div18() {
  return (
    <div className="h-[116.881px] relative rounded-[11.001px] shrink-0 w-[137.507px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Img2 />
      </div>
    </div>
  );
}

function H7() {
  return (
    <div className="absolute h-[28.876px] left-0 overflow-clip top-[14.78px] w-[338.653px]" data-name="h4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.876px] left-0 text-[#10182c] text-[19.251px] top-[-0.91px] tracking-[0.275px]">7 Allen Avenue</p>
    </div>
  );
}

function P3() {
  return (
    <div className="absolute h-[24.751px] left-0 overflow-clip top-[46.41px] w-[338.653px]" data-name="p">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.751px] left-0 text-[16.501px] text-[rgba(16,24,44,0.4)] top-[-0.91px]">Ikeja, Lagos, Nigeria</p>
    </div>
  );
}

function Star15() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p30a45100} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star16() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p3df5be00} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star17() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p130fc370} fill="var(--fill-0, #FACC16)" id="Vector" stroke="var(--stroke-0, #FACC16)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star18() {
  return (
    <div className="relative shrink-0 size-[19.251px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="Star">
          <path d={svgPaths.p7b78100} id="Vector" stroke="var(--stroke-0, #CAD0D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Star19() {
  return (
    <div className="flex-[1_0_0] h-[19.251px] min-h-px min-w-px relative" data-name="Star">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.3%_8.33%_12.23%_8.32%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6481 16.9024">
              <path d={svgPaths.p1a855000} id="Vector" stroke="var(--stroke-0, #CAD0D9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[19.251px] relative shrink-0 w-[107.255px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.75px] items-center relative size-full">
        <Star15 />
        <Star16 />
        <Star17 />
        <Star18 />
        <Star19 />
      </div>
    </div>
  );
}

function Span19() {
  return (
    <div className="h-[22.689px] relative shrink-0 w-[53.341px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.689px] left-0 text-[15.126px] text-[rgba(16,24,44,0.5)] top-[-0.47px]">3.8 (22)</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[8.25px] h-[22.689px] items-center left-0 top-[79.41px] w-[338.653px]" data-name="Container">
      <Container29 />
      <Span19 />
    </div>
  );
}

function Div19() {
  return (
    <div className="flex-[1_0_0] h-[116.881px] min-h-px min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <H7 />
        <P3 />
        <Container28 />
      </div>
    </div>
  );
}

function MotionDiv11() {
  return (
    <div className="bg-[#fafafa] h-[157.216px] relative rounded-[16.501px] shrink-0 w-[538.496px]" data-name="motion.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[22.001px] items-start overflow-clip pb-[0.917px] pt-[20.168px] px-[20.168px] relative rounded-[inherit] size-full">
        <Div18 />
        <Div19 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.917px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16.501px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[537.651px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[11px] items-start pl-[22.001px] pt-[22.001px] relative size-full">
        <MotionDiv9 />
        <MotionDiv10 />
        <MotionDiv11 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[630.468px] relative rounded-[22.001px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.917px] relative size-full">
          <Container22 />
          <Container23 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.917px] border-solid inset-0 pointer-events-none rounded-[22.001px] shadow-[0px_5.5px_27.501px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[68.753px] items-start relative shrink-0 w-full">
      <MotionDiv5 />
      <Container21 />
    </div>
  );
}

function Container31() {
  return <div className="absolute left-[419.32px] opacity-50 rounded-bl-[30759682px] size-[165.008px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(225deg, rgba(200, 82, 18, 0.2) 0%, rgba(0, 0, 0, 0) 100%)" }} />;
}

function H8() {
  return (
    <div className="absolute h-[33.002px] left-0 top-0 w-[507.328px]" data-name="h4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[33.002px] left-0 text-[22.001px] text-white top-0">Have questions about this property?</p>
    </div>
  );
}

function P4() {
  return (
    <div className="absolute h-[26.814px] left-0 top-[41.25px] w-[507.328px]" data-name="p">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.814px] left-0 text-[17.876px] text-[rgba(255,255,255,0.35)] top-[-0.91px]">Get in touch with our support team for more info.</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="absolute left-[129.67px] size-[19.251px] top-[17.54px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 19.2509">
        <g id="ArrowRight">
          <path d="M4.00955 9.62197H15.2393" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
          <path d={svgPaths.p3333e700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.60424" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#c85212] h-[54.315px] left-0 rounded-[13.751px] top-[90.07px] w-[176.424px]" data-name="Link">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.814px] left-[27.5px] text-[17.876px] text-white top-[12.84px]">Contact us</p>
      <ArrowRight1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[144.382px] left-[38.5px] top-[38.5px] w-[507.328px]" data-name="Container">
      <H8 />
      <P4 />
      <Link1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#10182c] h-[221.386px] overflow-clip relative rounded-[22.001px] shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[68.753px] h-[1389.504px] items-start left-[calc(58.33%+4.05px)] top-[562.4px] w-[584.403px]">
      <Frame21 />
      <Container30 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <SR />
      <Frame22 />
    </div>
  );
}

function SiArrowRightDuotone() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="si:arrow-right-duotone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="si:arrow-right-duotone">
          <path d={svgPaths.p32c19dc0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 top-1/2">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[#3a414e] text-[22px] tracking-[0.644px]">Submit</p>
      <SiArrowRightDuotone />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[84px] left-[calc(50%+285.5px)] overflow-clip rounded-[40px] top-[calc(50%+0.5px)] w-[243px]">
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#757a83] h-[119px] overflow-clip relative rounded-[32px] shrink-0 w-full">
      <Frame6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[40px] not-italic opacity-60 text-[#f7f7f7] text-[22px] top-[55px] tracking-[0.644px]">Enter your email address</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px] w-full whitespace-pre-wrap">2,000+ users end their week inspired. Join us today.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[27px] items-center left-[calc(50%-0.5px)] top-[209px] w-[880px]">
      <div className="h-[101px] relative shrink-0 w-[248px]" data-name="apartey 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey2} />
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(117,122,131,0.15)] h-[559px] left-[calc(50%-0.5px)] overflow-clip rounded-[80px] top-[-188px] w-[993px]">
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#757a83] text-[22px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">© 2025 Apartey. All rights reserved.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-start justify-center left-[110px] top-[490px] w-[536px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px] w-[min-content] whitespace-pre-wrap">Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions.</p>
      <Frame1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start not-italic relative shrink-0 text-[22px] w-[99px]">
      <p className="relative shrink-0 w-full">About us</p>
      <p className="relative shrink-0 w-full">Blog</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center leading-[1.22] relative shrink-0 text-white tracking-[0.644px] w-[113px] whitespace-pre-wrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[24px] w-[min-content]">Company</p>
      <Frame11 />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Social icons">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / Facebook">
        <div className="absolute inset-[9.24%_9.09%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.934">
            <path d={svgPaths.pbfb0a00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / Instagram">
        <div className="absolute inset-[9.09%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p349562f0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / X">
        <div className="absolute inset-[13.02%_9.09%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16.2698">
            <path d={svgPaths.p57cff80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / Linkdin">
        <div className="absolute inset-[9.09%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p7d0ab00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px]">Contact us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px] w-[min-content] whitespace-pre-wrap">FAQ</p>
      <SocialIcons />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[115px]">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[24px] text-white tracking-[0.644px] w-full whitespace-pre-wrap">Support</p>
      <Frame12 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start justify-center not-italic relative shrink-0 text-[22px] w-full" data-name="Footer Links">
      <p className="relative shrink-0">Privacy Policy</p>
      <p className="relative shrink-0">Terms of Service</p>
      <p className="relative shrink-0">Cookies Settings</p>
      <p className="relative shrink-0">Content Policy</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center leading-[1.22] relative shrink-0 text-white tracking-[0.644px] w-[183px]">
      <p className="font-['Mulish:Bold',sans-serif] font-bold relative shrink-0 text-[24px] w-full whitespace-pre-wrap">Legal</p>
      <FooterLinks />
    </div>
  );
}

function EmojioneFlagForNigeria() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="emojione:flag-for-nigeria">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2052_433)" id="emojione:flag-for-nigeria">
          <path d={svgPaths.p37dad580} fill="var(--fill-0, #008000)" id="Vector" />
          <path d={svgPaths.p50edb00} fill="var(--fill-0, #F9F9F9)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2052_433">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.09)] content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[6px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40px]" />
      <EmojioneFlagForNigeria />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px]">Nigeria</p>
    </div>
  );
}

function EmojioneFlagForEstonia() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="emojione:flag-for-estonia">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2052_514)" id="emojione:flag-for-estonia">
          <path d={svgPaths.p165f8700} fill="var(--fill-0, #F9F9F9)" id="Vector" />
          <path d={svgPaths.p3637d200} fill="var(--fill-0, #42ADE2)" id="Vector_2" />
          <path d={svgPaths.p2f4b7500} fill="var(--fill-0, #3E4347)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_2052_514">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[6px] relative rounded-[40px] shrink-0">
      <EmojioneFlagForEstonia />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px]">Estonia</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[99px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[171px]">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[24px] text-white tracking-[0.644px] w-full whitespace-pre-wrap">Region</p>
      <Container33 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex gap-[77px] items-start left-[743px] top-[490px]">
      <Frame16 />
      <Frame15 />
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#3a414e] bottom-0 h-[796px] left-0 overflow-clip w-[1728px]">
      <div className="absolute h-[116.491px] left-[89px] top-[365px] w-[286px]" data-name="apartey 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey2} />
        </div>
      </div>
      <Frame4 />
      <Frame10 />
      <Frame17 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[90.83px] ml-0 mt-0 relative row-1 w-[223px]" data-name="apartey 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey2} />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[51.162px] relative rounded-[42917844px] shrink-0 w-[103.084px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.86px] left-[51.58px] text-[#10182c] text-[17.907px] text-center top-[11.51px] tracking-[0.3837px]">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[51.162px] relative rounded-[42917844px] shrink-0 w-[117.753px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.86px] left-[58.58px] not-italic text-[17.907px] text-[rgba(30,30,30,0.8)] text-center top-[11.51px] tracking-[0.3837px]">Listings</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] h-[51.162px] min-h-px min-w-px relative rounded-[42917844px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.86px] left-[60.08px] not-italic text-[17.907px] text-[rgba(30,30,30,0.8)] text-center top-[11.51px] tracking-[0.3837px]">Insights</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[51.162px] relative rounded-[42917844px] shrink-0 w-[103.823px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.86px] left-[53.36px] not-italic text-[17.907px] text-[rgba(30,30,30,0.8)] text-center top-[11.51px] tracking-[0.3837px]">About</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[51.162px] relative rounded-[42917844px] shrink-0 w-[90.173px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.86px] left-[45.08px] not-italic text-[17.907px] text-[rgba(30,30,30,0.8)] text-center top-[11.51px] tracking-[0.3837px]">Blog</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[69.069px] relative rounded-[42917844px] shrink-0 w-[577.272px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.279px] border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[42917844px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.116px] items-center px-[11.511px] py-[1.279px] relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container37() {
  return <div className="absolute bg-[rgba(255,255,255,0.53)] h-[28px] left-[52px] top-[8px] w-px" data-name="Container" />;
}

function ImageWithFallback1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[rgba(30,30,30,0)] relative rounded-[33554400px] shadow-[0px_0px_0px_2px_rgba(30,30,30,0.4)] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#e8e8e8] content-stretch flex gap-[10px] h-[44px] items-center left-[65px] pl-[6px] rounded-[33554400px] top-0 w-[74px]" data-name="Container">
      <Container39 />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[11px] size-[18px] top-[11px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p985d280} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2ac55e70} id="Vector_2" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#c85212] left-[26px] rounded-[33554400px] shadow-[0px_0px_0px_0px_#10182c] size-[8px] top-[6px]" data-name="Text" />;
}

function Container40() {
  return (
    <div className="absolute bg-[rgba(30,30,30,0.1)] left-0 rounded-[33554400px] size-[40px] top-[2px]" data-name="Container">
      <Icon1 />
      <Text />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[44px] relative shrink-0 w-[139px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container37 />
        <Container38 />
        <Container40 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[70.348px] items-center justify-between left-[calc(50%+0.21px)] top-[15px] w-[1482.422px]" data-name="Container">
      <Group />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white h-[99px] left-0 overflow-clip top-0 w-[1728px]">
      <Container34 />
    </div>
  );
}

export default function Listings() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Listings">
      <Group2 />
      <Frame />
      <Frame18 />
    </div>
  );
}