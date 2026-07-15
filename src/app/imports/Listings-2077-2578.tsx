import svgPaths from "./svg-kbg3bylzdj";
import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center justify-center relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="textContent">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.02] min-w-full relative shrink-0 text-[72px] text-white tracking-[-1.512px] w-[min-content]">Write a Property Review</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px] w-[764px]">Share your honest opinion about a property to help others make informed decisions.</p>
    </div>
  );
}

function Div() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[194px] items-center justify-center left-1/2 top-[calc(50%-33px)] w-[924px]" data-name="div">
      <TextContent />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#10182c] h-[380px] left-1/2 overflow-clip top-[143px] w-[1728px]">
      <Div />
    </div>
  );
}

function PageLink() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="pageLink1">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">Home</p>
    </div>
  );
}

function PageLink1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="pageLink2">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[#c85212] text-[21px] tracking-[0.644px]">Listings</p>
    </div>
  );
}

function PageLink2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="pageLink4">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">Insights</p>
    </div>
  );
}

function PageLink3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="pageLink4">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">About</p>
    </div>
  );
}

function PageLink4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="pageLink5">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">Blog</p>
    </div>
  );
}

function PageLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="pageLinks">
      <PageLink />
      <PageLink1 />
      <PageLink2 />
      <PageLink3 />
      <PageLink4 />
    </div>
  );
}

function Glassmorphism() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Glassmorphism">
      <div className="backdrop-blur-[10px] bg-[rgba(219,97,29,0.2)] border-[rgba(255,255,255,0.5)] border-b-3 border-l-3 border-solid border-t-3 col-1 h-[46px] ml-0 mt-0 rounded-bl-[6px] rounded-tl-[6px] row-1 shadow-[0px_30px_60px_-15px_rgba(219,97,29,0.15)] w-[170px]" data-name="Rectangle" />
      <p className="col-1 font-['Inter:Regular',sans-serif] font-normal leading-[1.22] ml-[32px] mt-[10px] not-italic relative row-1 text-[#333] text-[22px] tracking-[0.644px]">Contact us</p>
    </div>
  );
}

function LucidePhone() {
  return (
    <div className="absolute left-[15px] size-[24px] top-[11px]" data-name="lucide/phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/phone">
          <path d={svgPaths.p375d9e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#c85212] h-[46px] overflow-clip relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[53px]">
      <LucidePhone />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Glassmorphism />
      <Frame />
    </div>
  );
}

function LucideUserRound() {
  return (
    <div className="absolute left-[335.86px] size-[24px] top-[11px]" data-name="lucide/user-round">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/user-round" opacity="0.3">
          <path d={svgPaths.p27acb400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p28c65188} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">Login</p>
      <Frame1 />
      <div className="relative shrink-0 size-[46px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <circle cx="23" cy="23" fill="var(--fill-0, #D9D9D9)" id="Ellipse 83" r="23" />
        </svg>
      </div>
      <LucideUserRound />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[214px] items-center justify-center left-[calc(50%-0.18px)] top-[calc(50%+0.5px)]">
      <div className="h-[82px] relative shrink-0 w-[200px]" data-name="apartey 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
      <PageLinks />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[143px] left-1/2 overflow-clip top-0 w-[1728px]">
      <Frame3 />
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

function Frame21() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 top-1/2">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[#3a414e] text-[22px] tracking-[0.644px]">Submit</p>
      <SiArrowRightDuotone />
    </div>
  );
}

function Frame20() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[84px] left-[calc(50%+285.5px)] overflow-clip rounded-[40px] top-[calc(50%+0.5px)] w-[243px]">
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#757a83] h-[119px] overflow-clip relative rounded-[32px] shrink-0 w-full">
      <Frame20 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[40px] not-italic opacity-60 text-[#f7f7f7] text-[22px] top-[55px] tracking-[0.644px]">Enter your email address</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Frame19 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px] w-full whitespace-pre-wrap">2,000+ users end their week inspired. Join us today.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[27px] items-center left-[calc(50%-0.5px)] top-[209px] w-[880px]">
      <div className="h-[101px] relative shrink-0 w-[248px]" data-name="apartey 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(117,122,131,0.15)] h-[559px] left-[calc(50%-0.5px)] overflow-clip rounded-[80px] top-[-188px] w-[993px]">
      <Frame23 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#757a83] text-[22px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">© 2025 Apartey. All rights reserved.</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-start justify-center left-[110px] top-[490px] w-[536px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px] w-[min-content] whitespace-pre-wrap">Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions.</p>
      <Frame15 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start not-italic relative shrink-0 text-[22px] w-[99px]">
      <p className="relative shrink-0 w-full">About us</p>
      <p className="relative shrink-0 w-full">Blog</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center leading-[1.22] relative shrink-0 text-white tracking-[0.644px] w-[113px] whitespace-pre-wrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[24px] w-[min-content]">Company</p>
      <Frame25 />
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

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px]">Contact us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px] w-[min-content] whitespace-pre-wrap">FAQ</p>
      <SocialIcons />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[115px]">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[24px] text-white tracking-[0.644px] w-full whitespace-pre-wrap">Support</p>
      <Frame26 />
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

function Frame28() {
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

function Frame16() {
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

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[6px] relative rounded-[40px] shrink-0">
      <EmojioneFlagForEstonia />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px]">Estonia</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[99px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[171px]">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[24px] text-white tracking-[0.644px] w-full whitespace-pre-wrap">Region</p>
      <Container />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex gap-[77px] items-start left-[743px] top-[490px]">
      <Frame30 />
      <Frame29 />
      <Frame28 />
      <Frame27 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#3a414e] bottom-0 h-[796px] left-0 overflow-clip w-[1728px]">
      <div className="absolute h-[116.491px] left-[89px] top-[365px] w-[286px]" data-name="apartey 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
      <Frame18 />
      <Frame24 />
      <Frame31 />
    </div>
  );
}

function LucideCheck() {
  return (
    <div className="absolute left-[3.5px] size-[24px] top-[4px]" data-name="lucide/check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/check">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #C85212)" id="Ellipse 100" r="16" />
        </svg>
      </div>
      <LucideCheck />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">Property Details</p>
      </div>
    </div>
  );
}

function LucideCheck1() {
  return (
    <div className="absolute left-[3.5px] size-[24px] top-[4px]" data-name="lucide/check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/check">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #C85212)" id="Ellipse 100" r="16" />
        </svg>
      </div>
      <LucideCheck1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">Experience and Ratings</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #D9D9D9)" id="Ellipse 94" r="16" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] left-[10px] text-[#4e5562] text-[21px] top-[16px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">3</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[24px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">Submit Review</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[54px] items-center relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(50%-0.43px)] top-[calc(50%+0.43px)] w-[879px]">
      <Frame8 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[22px] text-center tracking-[0.644px] w-full">
        <p className="leading-[1.22] whitespace-pre-wrap">{`🌟 You're doing great! Now let's dive into your experience.`}</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#3a414e] h-[203px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-[1446px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame33 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-b border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[63.098px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.705px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40.929px] left-0 text-[#101828] text-[27.286px] top-[-3.41px]">Property Details</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Property type</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-473.24px] size-0 top-[-740.12px]" data-name="Option" />;
}

function Option1() {
  return <div className="absolute left-[-473.24px] size-0 top-[-740.12px]" data-name="Option" />;
}

function Option2() {
  return <div className="absolute left-[-473.24px] size-0 top-[-740.12px]" data-name="Option" />;
}

function Option3() {
  return <div className="absolute left-[-473.24px] size-0 top-[-740.12px]" data-name="Option" />;
}

function Option4() {
  return <div className="absolute left-[-473.24px] size-0 top-[-740.12px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-[-0.85px] rounded-[6.821px] top-0 w-[1360.875px]" data-name="Dropdown">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[17.91px] text-[#99a1af] text-[23.875px] top-[17.06px]">Apartment</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute right-[31.55px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p11721040} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <Dropdown />
      <Icon />
    </div>
  );
}

function Container3() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label />
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[40.92856979370117px] gap-y-[40.92856979370117px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[112.554px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-[301.848px] relative rounded-[17.054px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[17.054px]" />
      <div className="content-stretch flex flex-col gap-[40.929px] items-start pb-[1.705px] pt-[42.634px] px-[42.634px] relative size-full">
        <Heading />
        <Container2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[63.098px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.705px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40.929px] left-0 text-[#101828] text-[27.286px] top-[-3.41px]">{`Financial & Stay Details`}</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Rent</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[64.804px] relative rounded-[6.821px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[20.464px] py-[13.643px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">Enter amount</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label1 />
      <TextInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Billing cycle</p>
    </div>
  );
}

function Option5() {
  return <div className="absolute left-[-1174.14px] size-0 top-[-1096.54px]" data-name="Option" />;
}

function Option6() {
  return <div className="absolute left-[-1174.14px] size-0 top-[-1096.54px]" data-name="Option" />;
}

function Option7() {
  return <div className="absolute left-[-1174.14px] size-0 top-[-1096.54px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[659.973px]" data-name="Dropdown">
      <Option5 />
      <Option6 />
      <Option7 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[18.76px] text-[#99a1af] text-[23.875px] top-[17.05px]">Monthly</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[612.22px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p21d88d80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <Dropdown1 />
      <Icon1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label2 />
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-x-[40.92856979370117px] gap-y-[40.92856979370117px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[112.554px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Duration of stay</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[64.804px] left-0 rounded-[6.821px] top-0 w-[428.045px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[20.464px] py-[13.643px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">Enter duration</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Option8() {
  return <div className="absolute left-[-914.92px] size-0 top-[-1250.03px]" data-name="Option" />;
}

function Option9() {
  return <div className="absolute left-[-914.92px] size-0 top-[-1250.03px]" data-name="Option" />;
}

function Dropdown2() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[218.286px]" data-name="Dropdown">
      <Option8 />
      <Option9 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[26.43px] text-[#99a1af] text-[23.875px] top-[17.06px]">Month</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[177.36px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p33ba2580} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[64.804px] left-[441.69px] top-0 w-[218.286px]" data-name="Container">
      <Dropdown2 />
      <Icon2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <TextInput1 />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label3 />
      <Container12 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Security deposit</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-[64.804px] relative rounded-[6.821px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[20.464px] py-[13.643px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">Enter amount</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label4 />
      <TextInput2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-x-[40.92856979370117px] gap-y-[40.92856979370117px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[112.554px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container14 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Agent/Broker fee</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="h-[64.804px] relative rounded-[6.821px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[20.464px] py-[13.643px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">Enter amount</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label5 />
      <TextInput3 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Estimated monthly utility costs</p>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="h-[64.804px] relative rounded-[6.821px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[20.464px] py-[13.643px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">Enter amount</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label6 />
      <TextInput4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="gap-x-[40.92856979370117px] gap-y-[40.92856979370117px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[112.554px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Cost of repairs</p>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[34.107px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Homeowner</p>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64.804px] items-center left-0 px-[28.991px] py-[1.705px] rounded-[6.821px] top-0 w-[151.084px]" data-name="Label">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[34.107px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Tenant</p>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64.804px] items-center left-[171.55px] px-[28.991px] py-[1.705px] rounded-[6.821px] top-0 w-[127.928px]" data-name="Label">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[34.107px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Shared</p>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64.804px] items-center left-[319.94px] px-[28.991px] py-[1.705px] rounded-[6.821px] top-0 w-[131.179px]" data-name="Label">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
      <Text2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <Label8 />
      <Label9 />
      <Label10 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[20.464px] h-[119.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Label7 />
      <Container19 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Move-in date</p>
    </div>
  );
}

function DatePicker() {
  return <div className="absolute border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[426.339px]" data-name="Date Picker" />;
}

function Icon3() {
  return (
    <div className="absolute left-[378.59px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d="M9.09579 2.27215V6.81977" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
          <path d="M18.1888 2.27215V6.81977" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
          <path d={svgPaths.p36d85400} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
          <path d="M3.41016 11.3718H23.8744" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <DatePicker />
      <Icon3 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[20.46px] text-[#99a1af] text-[23.875px] top-[18.76px]">MM-DD-YYY</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label11 />
      <Container22 />
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Move-out date</p>
    </div>
  );
}

function DatePicker1() {
  return <div className="absolute border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[426.339px]" data-name="Date Picker" />;
}

function Icon4() {
  return (
    <div className="absolute left-[378.59px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d="M9.09607 2.27215V6.81977" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
          <path d="M18.1891 2.27215V6.81977" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
          <path d={svgPaths.p26a52480} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
          <path d="M3.41044 11.3718H23.8747" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <DatePicker1 />
      <Icon4 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[20.46px] text-[#99a1af] text-[23.875px] top-[18.76px]">MM-DD-YYY</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label12 />
      <Container24 />
    </div>
  );
}

function Container20() {
  return (
    <div className="gap-x-[40.92856979370117px] gap-y-[40.92856979370117px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[112.554px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[40.929px] h-[733.304px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container10 />
      <Container15 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white h-[922.598px] relative rounded-[17.054px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[17.054px]" />
      <div className="content-stretch flex flex-col gap-[40.929px] items-start pb-[1.705px] pt-[42.634px] px-[42.634px] relative size-full">
        <Heading1 />
        <Container5 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[63.098px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.705px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40.929px] left-0 text-[#101828] text-[27.286px] top-[-3.41px]">{`Ratings & Review`}</p>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Overall experience rating</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[36px] relative shrink-0 w-[180px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 36">
        <g id="Frame 1000004838">
          <path d={svgPaths.p21cc0880} id="Star 5" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3369580} id="Star 6" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3f081200} id="Star 7" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3b721b00} id="Star 8" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3b286400} id="Star 9" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label13 />
      <Frame9 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Value for money rating</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[36px] relative shrink-0 w-[180px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 36">
        <g id="Frame 1000004838">
          <path d={svgPaths.p21cc0880} id="Star 5" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3369580} id="Star 6" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3f081200} id="Star 7" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3b721b00} id="Star 8" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3b286400} id="Star 9" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label14 />
      <Frame10 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Noise level rating</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[36px] relative shrink-0 w-[180px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 36">
        <g id="Frame 1000004838">
          <path d={svgPaths.p21cc0880} id="Star 5" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3369580} id="Star 6" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3f081200} id="Star 7" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3b721b00} id="Star 8" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
          <path d={svgPaths.p3b286400} id="Star 9" stroke="var(--stroke-0, #D9D9D9)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label15 />
      <Frame11 />
    </div>
  );
}

function Container26() {
  return (
    <div className="gap-x-[40.92856979370117px] gap-y-[40.92856979370117px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Overall area assessment</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[57.876px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Quiet</p>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64.804px] min-h-px min-w-px relative rounded-[6.821px]" data-name="Label">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.705px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[59.314px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Noisy</p>
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="bg-white flex-[1_0_0] h-[64.804px] min-h-px min-w-px relative rounded-[6.821px]" data-name="Label">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.705px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[20.464px] h-[64.804px] items-start relative shrink-0 w-full" data-name="Container">
      <Label17 />
      <Label18 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[20.464px] h-[119.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Label16 />
      <Container31 />
    </div>
  );
}

function Label19() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Your review</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[235.339px] relative rounded-[6.821px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[20.464px] py-[13.643px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#99a1af] text-[23.875px]">Write your review here...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[13.643px] h-[293.321px] items-start relative shrink-0 w-full" data-name="Container">
      <Label19 />
      <TextArea />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[40.929px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container30 />
      <Container32 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white h-[775.938px] relative rounded-[17.054px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[17.054px]" />
      <div className="content-stretch flex flex-col gap-[40.929px] items-start pb-[1.705px] pt-[42.634px] px-[42.634px] relative size-full">
        <Heading2 />
        <Container25 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[63.098px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.705px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40.929px] left-0 text-[#101828] text-[27.286px] top-[-3.41px]">{`Amenities & Facilities`}</p>
    </div>
  );
}

function Label20() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Building facilities</p>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[112.634px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Parking lot</p>
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox />
      <Text5 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[145.861px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Good security</p>
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox1 />
      <Text6 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[164.194px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Swimming pool</p>
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox2 />
      <Text7 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[48.043px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Gym</p>
      </div>
    </div>
  );
}

function Label24() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox3 />
      <Text8 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[84.309px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Elevator</p>
      </div>
    </div>
  );
}

function Label25() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox4 />
      <Text9 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[120.308px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Playground</p>
      </div>
    </div>
  );
}

function Label26() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox5 />
      <Text10 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[162.942px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Security system</p>
      </div>
    </div>
  );
}

function Label27() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Label">
      <Checkbox6 />
      <Text11 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[56.783px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">CCTV</p>
      </div>
    </div>
  );
}

function Label28() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Label">
      <Checkbox7 />
      <Text12 />
    </div>
  );
}

function Container35() {
  return (
    <div className="gap-x-[20.464284896850586px] gap-y-[20.464284896850586px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[143.25px] relative shrink-0 w-full" data-name="Container">
      <Label21 />
      <Label22 />
      <Label23 />
      <Label24 />
      <Label25 />
      <Label26 />
      <Label27 />
      <Label28 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[20.464px] h-[197.821px] items-start relative shrink-0 w-full" data-name="Container">
      <Label20 />
      <Container35 />
    </div>
  );
}

function Label29() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">{`Appliances & fixtures`}</p>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[120.015px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Dishwasher</p>
      </div>
    </div>
  );
}

function Label30() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox8 />
      <Text13 />
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[160.33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Air Conditioner</p>
      </div>
    </div>
  );
}

function Label31() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox9 />
      <Text14 />
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[186.097px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Washing machine</p>
      </div>
    </div>
  );
}

function Label32() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox10 />
      <Text15 />
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[124.997px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Refrigerator</p>
      </div>
    </div>
  );
}

function Label33() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox11 />
      <Text16 />
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[55.451px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Oven</p>
      </div>
    </div>
  );
}

function Label34() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox12 />
      <Text17 />
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[113.886px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Microwave</p>
      </div>
    </div>
  );
}

function Label35() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox13 />
      <Text18 />
    </div>
  );
}

function Checkbox14() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[135.976px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Water heater</p>
      </div>
    </div>
  );
}

function Label36() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Label">
      <Checkbox14 />
      <Text19 />
    </div>
  );
}

function Checkbox15() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[105.705px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Generator</p>
      </div>
    </div>
  );
}

function Label37() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Label">
      <Checkbox15 />
      <Text20 />
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-x-[20.464284896850586px] gap-y-[20.464284896850586px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[143.25px] relative shrink-0 w-full" data-name="Container">
      <Label30 />
      <Label31 />
      <Label32 />
      <Label33 />
      <Label34 />
      <Label35 />
      <Label36 />
      <Label37 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[20.464px] h-[197.821px] items-start relative shrink-0 w-full" data-name="Container">
      <Label29 />
      <Container37 />
    </div>
  );
}

function Label38() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Utilities included in rent</p>
    </div>
  );
}

function Checkbox16() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[62.405px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Water</p>
      </div>
    </div>
  );
}

function Label39() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox16 />
      <Text21 />
    </div>
  );
}

function Checkbox17() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[100.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Electricity</p>
      </div>
    </div>
  );
}

function Label40() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox17 />
      <Text22 />
    </div>
  );
}

function Checkbox18() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[166.299px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Trash Collection</p>
      </div>
    </div>
  );
}

function Label41() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox18 />
      <Text23 />
    </div>
  );
}

function Checkbox19() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[137.654px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Internet/WiFi</p>
      </div>
    </div>
  );
}

function Label42() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox19 />
      <Text24 />
    </div>
  );
}

function Checkbox20() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[38.664px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Gas</p>
      </div>
    </div>
  );
}

function Label43() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox20 />
      <Text25 />
    </div>
  );
}

function Checkbox21() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[93.635px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Cable TV</p>
      </div>
    </div>
  );
}

function Label44() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox21 />
      <Text26 />
    </div>
  );
}

function Container39() {
  return (
    <div className="gap-x-[20.464284896850586px] gap-y-[20.464284896850586px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[88.679px] relative shrink-0 w-full" data-name="Container">
      <Label39 />
      <Label40 />
      <Label41 />
      <Label42 />
      <Label43 />
      <Label44 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[20.464px] h-[143.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Label38 />
      <Container39 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[40.929px] h-[620.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container36 />
      <Container38 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white h-[810.045px] relative rounded-[17.054px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[17.054px]" />
      <div className="content-stretch flex flex-col gap-[40.929px] items-start pb-[1.705px] pt-[42.634px] px-[42.634px] relative size-full">
        <Heading3 />
        <Container33 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[63.098px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.705px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40.929px] left-0 text-[#101828] text-[27.286px] top-[-3.41px]">Utility Services Quality</p>
    </div>
  );
}

function Label45() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Electricity reliability</p>
    </div>
  );
}

function Option10() {
  return <div className="absolute left-[-473.24px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option11() {
  return <div className="absolute left-[-473.24px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option12() {
  return <div className="absolute left-[-473.24px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option13() {
  return <div className="absolute left-[-473.24px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option14() {
  return <div className="absolute left-[-473.24px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Dropdown3() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[426.339px]" data-name="Dropdown">
      <Option10 />
      <Option11 />
      <Option12 />
      <Option13 />
      <Option14 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[378.59px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p1bd719e0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <Dropdown3 />
      <Icon5 />
    </div>
  );
}

function Container41() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label45 />
      <Container42 />
    </div>
  );
}

function Label46() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Water supply</p>
    </div>
  );
}

function Option15() {
  return <div className="absolute left-[-940.5px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option16() {
  return <div className="absolute left-[-940.5px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option17() {
  return <div className="absolute left-[-940.5px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option18() {
  return <div className="absolute left-[-940.5px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option19() {
  return <div className="absolute left-[-940.5px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Dropdown4() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[426.339px]" data-name="Dropdown">
      <Option15 />
      <Option16 />
      <Option17 />
      <Option18 />
      <Option19 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[378.59px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p33ba2580} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <Dropdown4 />
      <Icon6 />
    </div>
  );
}

function Container43() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label46 />
      <Container44 />
    </div>
  );
}

function Label47() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Internet speed</p>
    </div>
  );
}

function Option20() {
  return <div className="absolute left-[-1407.77px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option21() {
  return <div className="absolute left-[-1407.77px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option22() {
  return <div className="absolute left-[-1407.77px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option23() {
  return <div className="absolute left-[-1407.77px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option24() {
  return <div className="absolute left-[-1407.77px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Option25() {
  return <div className="absolute left-[-1407.77px] size-0 top-[-3942.78px]" data-name="Option" />;
}

function Dropdown5() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[426.339px]" data-name="Dropdown">
      <Option20 />
      <Option21 />
      <Option22 />
      <Option23 />
      <Option24 />
      <Option25 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[378.59px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p65a400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <Dropdown5 />
      <Icon7 />
    </div>
  );
}

function Container45() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label47 />
      <Container46 />
    </div>
  );
}

function Container40() {
  return (
    <div className="gap-x-[40.92856979370117px] gap-y-[40.92856979370117px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[112.554px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container43 />
      <Container45 />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-white h-[301.848px] relative rounded-[17.054px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[17.054px]" />
      <div className="content-stretch flex flex-col gap-[40.929px] items-start pb-[1.705px] pt-[42.634px] px-[42.634px] relative size-full">
        <Heading4 />
        <Container40 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[63.098px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.705px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40.929px] left-0 text-[#101828] text-[27.286px] top-[-3.41px]">{`Homeowner & Tenant Information`}</p>
    </div>
  );
}

function Label48() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Homeowner languages spoken</p>
    </div>
  );
}

function Checkbox22() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[74.876px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">English</p>
      </div>
    </div>
  );
}

function Label49() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox22 />
      <Text27 />
    </div>
  );
}

function Checkbox23() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[70.506px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Estonian</p>
      </div>
    </div>
  );
}

function Label50() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox23 />
      <Text28 />
    </div>
  );
}

function Checkbox24() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[73.091px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Spanish</p>
      </div>
    </div>
  );
}

function Label51() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox24 />
      <Text29 />
    </div>
  );
}

function Checkbox25() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[64.91px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">French</p>
      </div>
    </div>
  );
}

function Label52() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox25 />
      <Text30 />
    </div>
  );
}

function Checkbox26() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[48.443px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Italian</p>
      </div>
    </div>
  );
}

function Label53() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox26 />
      <Text31 />
    </div>
  );
}

function Checkbox27() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[60.407px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">German</p>
      </div>
    </div>
  );
}

function Label54() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox27 />
      <Text32 />
    </div>
  );
}

function Checkbox28() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[60.407px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Other</p>
      </div>
    </div>
  );
}

function Label55() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Label">
      <Checkbox28 />
      <Text33 />
    </div>
  );
}

function Container49() {
  return (
    <div className="gap-x-[20.464284896850586px] gap-y-[20.464284896850586px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[143.25px] relative shrink-0 w-full" data-name="Container">
      <Label49 />
      <Label50 />
      <Label51 />
      <Label52 />
      <Label53 />
      <Label54 />
      <Label55 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[20.464px] h-[143.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Label48 />
      <Container49 />
    </div>
  );
}

function Label56() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Your living situation</p>
    </div>
  );
}

function Checkbox29() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[64.324px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Single</p>
      </div>
    </div>
  );
}

function Label57() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox29 />
      <Text34 />
    </div>
  );
}

function Checkbox30() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[74.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Couple</p>
      </div>
    </div>
  );
}

function Label58() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox30 />
      <Text35 />
    </div>
  );
}

function Checkbox31() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[81.671px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Student</p>
      </div>
    </div>
  );
}

function Label59() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Label">
      <Checkbox31 />
      <Text36 />
    </div>
  );
}

function Checkbox32() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[208.853px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Family with children</p>
      </div>
    </div>
  );
}

function Label60() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox32 />
      <Text37 />
    </div>
  );
}

function Checkbox33() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[73.224px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Retiree</p>
      </div>
    </div>
  );
}

function Label61() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox33 />
      <Text38 />
    </div>
  );
}

function Checkbox34() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[223.189px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Working professional</p>
      </div>
    </div>
  );
}

function Label62() {
  return (
    <div className="col-3 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Label">
      <Checkbox34 />
      <Text39 />
    </div>
  );
}

function Checkbox35() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[91.183px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Disabled</p>
      </div>
    </div>
  );
}

function Label63() {
  return (
    <div className="col-1 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Label">
      <Checkbox35 />
      <Text40 />
    </div>
  );
}

function Checkbox36() {
  return (
    <div className="relative rounded-[3.411px] shrink-0 size-[27.286px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[3.411px]" />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[60.407px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">Other</p>
      </div>
    </div>
  );
}

function Label64() {
  return (
    <div className="col-2 content-stretch flex gap-[13.643px] items-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Label">
      <Checkbox36 />
      <Text41 />
    </div>
  );
}

function Container51() {
  return (
    <div className="gap-x-[20.464284896850586px] gap-y-[20.464284896850586px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[143.25px] relative shrink-0 w-full" data-name="Container">
      <Label57 />
      <Label58 />
      <Label59 />
      <Label60 />
      <Label61 />
      <Label62 />
      <Label63 />
      <Label64 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[20.464px] h-[197.821px] items-start relative shrink-0 w-full" data-name="Container">
      <Label56 />
      <Container51 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[98.911px] h-[477.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container50 />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-white h-[649.741px] relative rounded-[17.054px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[17.054px]" />
      <div className="content-stretch flex flex-col gap-[40.929px] items-start pb-[1.705px] pt-[42.634px] px-[42.634px] relative size-full">
        <Heading5 />
        <Container47 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[63.098px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.705px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40.929px] left-0 text-[#101828] text-[27.286px] top-[-3.41px]">{`Accessibility & Nearby Locations`}</p>
    </div>
  );
}

function Label65() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Nearest grocery store</p>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="absolute h-[64.804px] left-0 rounded-[6.821px] top-0 w-[482.616px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[20.464px] py-[13.643px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">Distance</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Option26() {
  return <div className="absolute left-[-969.5px] size-0 top-[-4925.07px]" data-name="Option" />;
}

function Option27() {
  return <div className="absolute left-[-969.5px] size-0 top-[-4925.07px]" data-name="Option" />;
}

function Dropdown6() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[163.714px]" data-name="Dropdown">
      <Option26 />
      <Option27 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-48.6px)] text-[#1e1e1e] text-[23.875px] top-[17.05px]">Miles</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[122.78px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p2d9a7740} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[64.804px] left-[496.26px] top-0 w-[163.714px]" data-name="Container">
      <Dropdown6 />
      <Icon8 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <TextInput5 />
      <Container55 />
    </div>
  );
}

function Container53() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label65 />
      <Container54 />
    </div>
  );
}

function Label66() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Nearest park</p>
    </div>
  );
}

function TextInput6() {
  return (
    <div className="absolute h-[64.804px] left-0 rounded-[6.821px] top-0 w-[482.616px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[20.464px] py-[13.643px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">Distance</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Option28() {
  return <div className="absolute left-[-1670.4px] size-0 top-[-4925.07px]" data-name="Option" />;
}

function Option29() {
  return <div className="absolute left-[-1670.4px] size-0 top-[-4925.07px]" data-name="Option" />;
}

function Dropdown7() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[163.714px]" data-name="Dropdown">
      <Option28 />
      <Option29 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-48.6px)] text-[#1e1e1e] text-[23.875px] top-[17.05px]">Miles</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[122.79px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p1de10d80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[64.804px] left-[496.26px] top-0 w-[163.714px]" data-name="Container">
      <Dropdown7 />
      <Icon9 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <TextInput6 />
      <Container58 />
    </div>
  );
}

function Container56() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label66 />
      <Container57 />
    </div>
  );
}

function Label67() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Nearest restaurant</p>
    </div>
  );
}

function TextInput7() {
  return (
    <div className="absolute h-[64.804px] left-0 rounded-[6.821px] top-0 w-[482.616px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[20.464px] py-[13.643px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">Distance</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Option30() {
  return <div className="absolute left-[-969.5px] size-0 top-[-5078.55px]" data-name="Option" />;
}

function Option31() {
  return <div className="absolute left-[-969.5px] size-0 top-[-5078.55px]" data-name="Option" />;
}

function Dropdown8() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[163.714px]" data-name="Dropdown">
      <Option30 />
      <Option31 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-48.6px)] text-[#1e1e1e] text-[23.875px] top-[17.05px]">Miles</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[122.78px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p235764c0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[64.804px] left-[496.26px] top-0 w-[163.714px]" data-name="Container">
      <Dropdown8 />
      <Icon10 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <TextInput7 />
      <Container61 />
    </div>
  );
}

function Container59() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Label67 />
      <Container60 />
    </div>
  );
}

function Label68() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Nearest bus stop</p>
    </div>
  );
}

function TextInput8() {
  return (
    <div className="absolute h-[64.804px] left-0 rounded-[6.821px] top-0 w-[482.616px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[20.464px] py-[13.643px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">Distance</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Option32() {
  return <div className="absolute left-[-1670.4px] size-0 top-[-5078.55px]" data-name="Option" />;
}

function Option33() {
  return <div className="absolute left-[-1670.4px] size-0 top-[-5078.55px]" data-name="Option" />;
}

function Dropdown9() {
  return (
    <div className="absolute bg-white border-[#d1d5dc] border-[1.705px] border-solid h-[64.804px] left-0 rounded-[6.821px] top-0 w-[163.714px]" data-name="Dropdown">
      <Option32 />
      <Option33 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-48.6px)] text-[#1e1e1e] text-[23.875px] top-[17.05px]">Miles</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[122.79px] size-[27.286px] top-[18.76px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p2f2f4200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[64.804px] left-[496.26px] top-0 w-[163.714px]" data-name="Container">
      <Dropdown9 />
      <Icon11 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <TextInput8 />
      <Container64 />
    </div>
  );
}

function Container62() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[13.643px] items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Label68 />
      <Container63 />
    </div>
  );
}

function Container52() {
  return (
    <div className="gap-x-[40.92856979370117px] gap-y-[40.92856979370117px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[266.036px] relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container56 />
      <Container59 />
      <Container62 />
    </div>
  );
}

function Section6() {
  return (
    <div className="bg-white h-[455.33px] relative rounded-[17.054px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[17.054px]" />
      <div className="content-stretch flex flex-col gap-[40.929px] items-start pb-[1.705px] pt-[42.634px] px-[42.634px] relative size-full">
        <Heading6 />
        <Container52 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[71.625px] relative rounded-[6.821px] shrink-0 w-[222.149px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[42.634px] py-[18.759px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px] text-center">Previous</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f54900] h-[71px] relative rounded-[6.821px] shrink-0 w-[364px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] left-[calc(50%-0.36px)] text-[23.875px] text-center text-white top-[15.35px]">Continue</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[27.286px] h-[85px] items-center justify-end pt-[13.643px] relative shrink-0 w-[1403px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[54.571px] h-[4780.116px] items-start relative shrink-0 w-full" data-name="Form">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Container65 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
      <Form />
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[4966px] items-start left-1/2 pt-[54.571px] px-[40.929px] top-[354px] w-[1528px]" data-name="Container">
      <Frame32 />
    </div>
  );
}

export default function Listings() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Listings">
      <Frame12 />
      <Frame4 />
      <Frame14 />
      <Container1 />
    </div>
  );
}