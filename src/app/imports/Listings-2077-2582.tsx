import svgPaths from "./svg-00esar1qkl";
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

function Frame9() {
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

function Frame18() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 top-1/2">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[#3a414e] text-[22px] tracking-[0.644px]">Submit</p>
      <SiArrowRightDuotone />
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[84px] left-[calc(50%+285.5px)] overflow-clip rounded-[40px] top-[calc(50%+0.5px)] w-[243px]">
      <Frame18 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#757a83] h-[119px] overflow-clip relative rounded-[32px] shrink-0 w-full">
      <Frame17 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[40px] not-italic opacity-60 text-[#f7f7f7] text-[22px] top-[55px] tracking-[0.644px]">Enter your email address</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Frame16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px] w-full whitespace-pre-wrap">2,000+ users end their week inspired. Join us today.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[27px] items-center left-[calc(50%-0.5px)] top-[209px] w-[880px]">
      <div className="h-[101px] relative shrink-0 w-[248px]" data-name="apartey 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(117,122,131,0.15)] h-[559px] left-[calc(50%-0.5px)] overflow-clip rounded-[80px] top-[-188px] w-[993px]">
      <Frame20 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#757a83] text-[22px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">© 2025 Apartey. All rights reserved.</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-start justify-center left-[110px] top-[490px] w-[536px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px] w-[min-content] whitespace-pre-wrap">Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions.</p>
      <Frame12 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start not-italic relative shrink-0 text-[22px] w-[99px]">
      <p className="relative shrink-0 w-full">About us</p>
      <p className="relative shrink-0 w-full">Blog</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center leading-[1.22] relative shrink-0 text-white tracking-[0.644px] w-[113px] whitespace-pre-wrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[24px] w-[min-content]">Company</p>
      <Frame22 />
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

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px]">Contact us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px] w-[min-content] whitespace-pre-wrap">FAQ</p>
      <SocialIcons />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[115px]">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[24px] text-white tracking-[0.644px] w-full whitespace-pre-wrap">Support</p>
      <Frame23 />
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

function Frame25() {
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

function Frame13() {
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

function Frame14() {
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
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[171px]">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[24px] text-white tracking-[0.644px] w-full whitespace-pre-wrap">Region</p>
      <Container />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex gap-[77px] items-start left-[743px] top-[490px]">
      <Frame27 />
      <Frame26 />
      <Frame25 />
      <Frame24 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#3a414e] bottom-0 h-[796px] left-0 overflow-clip w-[1728px]">
      <div className="absolute h-[116.491px] left-[89px] top-[365px] w-[286px]" data-name="apartey 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
      <Frame15 />
      <Frame21 />
      <Frame28 />
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[32px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #D9D9D9)" id="Ellipse 99" r="16" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] left-[10px] text-[#4e5562] text-[21px] top-[16px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">2</p>
      </div>
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
          <circle cx="16" cy="16" fill="var(--fill-0, #D9D9D9)" id="Ellipse 99" r="16" />
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

function Frame30() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(50%-0.43px)] top-[calc(50%+0.43px)] w-[879px]">
      <Frame8 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[22px] text-center tracking-[0.644px] w-full">
        <p className="leading-[1.22] whitespace-pre-wrap">{`🏠 Let's start your property review journey! Tell us about your place.`}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#3a414e] h-[203px] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-[1446px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame30 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-b border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Enter your Address</p>
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
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[17.91px] text-[#99a1af] text-[23.875px] top-[17.06px]">Apartment Address</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <Dropdown />
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

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container2 />
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[18px]">e.g. 210 Quai de Bercy, Paris, France</p>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-[215px] relative rounded-[17.054px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[17.054px]" />
      <div className="content-stretch flex flex-col items-start pb-[1.705px] pt-[42.634px] px-[42.634px] relative size-full">
        <Frame31 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[63.098px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.705px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[40.929px] left-0 text-[#101828] text-[27.286px] top-[-3.41px]">Stay Details</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[34.107px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Number of Rooms</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[27.286px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2857 27.2857">
        <g id="Icon">
          <path d={svgPaths.p33ba2580} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27381" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[64.804px] relative rounded-[6.821px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[578px] items-center px-[20.464px] py-[13.643px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1e1e1e] text-[23.875px]">1</p>
          <Icon />
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
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">Number of Occupants</p>
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
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[18.76px] text-[#1e1e1e] text-[23.875px] top-[17.05px]">1</p>
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
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] min-h-px min-w-px relative text-[#364153] text-[23.875px] whitespace-pre-wrap">When did you leave this property?</p>
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

function Text() {
  return (
    <div className="h-[34.107px] relative shrink-0 w-[112.634px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[34.107px] relative shrink-0 text-[#364153] text-[23.875px]">I am still living here</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[13.643px] items-center relative shrink-0 w-full" data-name="Label">
      <Checkbox />
      <Text />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[27.286px]" data-name="Icon">
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

function TextInput1() {
  return (
    <div className="absolute h-[64.804px] left-0 rounded-[6.821px] top-0 w-[428.045px]" data-name="Text Input">
      <div className="content-stretch flex gap-[251px] items-center overflow-clip px-[20.464px] py-[13.643px] relative rounded-[inherit] size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#99a1af] text-[23.875px]">MM/YYY</p>
        <Icon2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[6.821px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[64.804px] relative shrink-0 w-full" data-name="Container">
      <TextInput1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[13.643px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Label4 />
      <Container11 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[40.929px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container10 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white h-[501px] relative rounded-[17.054px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.705px] border-solid inset-0 pointer-events-none rounded-[17.054px]" />
      <div className="content-stretch flex flex-col gap-[40.929px] items-start pb-[1.705px] pt-[42.634px] px-[42.634px] relative size-full">
        <Heading />
        <Container5 />
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

function Container12() {
  return (
    <div className="content-stretch flex gap-[27.286px] h-[85px] items-center justify-end pt-[13.643px] relative shrink-0 w-[1403px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[54.571px] items-start relative shrink-0 w-full" data-name="Form">
      <Section />
      <Section1 />
      <Container12 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
      <Form />
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 pt-[54.571px] px-[40.929px] top-[354px] w-[1528px]" data-name="Container">
      <Frame29 />
    </div>
  );
}

export default function Listings() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Listings">
      <Frame9 />
      <Frame4 />
      <Frame11 />
      <Container1 />
    </div>
  );
}