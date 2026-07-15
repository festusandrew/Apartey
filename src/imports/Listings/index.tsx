import svgPaths from "./svg-bjz7gd4yjr";
import imgApartey2 from "./7d97c15a290f03c437ad64a9a8b65a1473428e78.png";
import imgApartey3 from "./7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import imgImageWithFallback from "./9ccf35c1a9fbbd63fd7831e49225db7d77f0a2ac.png";

function TextContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[22px] items-center justify-center relative shrink-0 text-center whitespace-nowrap" data-name="textContent">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.02] relative shrink-0 text-[72px] text-white tracking-[-1.512px]">Community Reviews</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px]">See what real residents are saying about properties in your area.</p>
    </div>
  );
}

function LucideSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/search">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="2" />
          <path d="M21 21L16.7 16.7" id="Vector_2" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[20px] items-center justify-center left-[26.05px] top-1/2">
      <LucideSearch />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(30,30,30,0.4)] tracking-[0.644px] whitespace-nowrap">Search address or neighborhood...</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white h-[89px] relative rounded-[12px] shrink-0 w-[978px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame74 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CarbonLocation({ className }: { className?: string }) {
  return (
    <div className={className || "relative shrink-0 size-[24px]"} data-name="carbon:location">
      <div className="absolute bottom-[43.75%] left-[34.37%] right-[34.38%] top-1/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
          <path d={svgPaths.p34f30a70} fill="var(--fill-0, #C85212)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.25%_15.62%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 21">
          <path d={svgPaths.p28063a00} fill="var(--fill-0, #C85212)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="content-stretch flex h-[34.089px] items-center justify-center relative shrink-0 w-[27.271px]" data-name="Arrow">
      <div className="overflow-clip relative shrink-0 size-[23.862px]" data-name="Icon">
        <div className="absolute inset-[33.85%_21.35%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6711 7.70551">
            <path clipRule="evenodd" d={svgPaths.p331b3000} fill="var(--fill-0, #10182C)" fillRule="evenodd" id=" Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#10182c] text-[22px] tracking-[0.644px] w-[100.142px]">
        <p className="leading-[1.22]">All Cities</p>
      </div>
      <Arrow />
    </div>
  );
}

function Frame84() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[17px] items-center left-[calc(50%+0.71px)] top-[calc(50%-0.46px)]">
      <CarbonLocation />
      <Frame86 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white h-[89px] relative rounded-[12px] shrink-0 w-[211px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame84 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex h-[34.089px] items-center justify-center relative shrink-0 w-[27.271px]" data-name="Arrow">
      <div className="overflow-clip relative shrink-0 size-[23.862px]" data-name="Icon">
        <div className="absolute inset-[33.85%_21.35%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6711 7.70551">
            <path clipRule="evenodd" d={svgPaths.p331b3000} fill="var(--fill-0, #10182C)" fillRule="evenodd" id=" Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#10182c] text-[22px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">Any Rating</p>
      </div>
      <Arrow1 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[17px] items-center left-[calc(50%+0.71px)] top-[calc(50%-0.46px)]">
      <div className="relative shrink-0 size-[32px]">
        <div className="absolute inset-[13.98%_15.42%_19.63%_15.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1307 21.2451">
            <path d={svgPaths.p38689300} id="Star 26" stroke="var(--stroke-0, #C85212)" />
          </svg>
        </div>
      </div>
      <Frame87 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white h-[89px] relative rounded-[12px] shrink-0 w-[245px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame85 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[12px] items-start px-[33px] py-[18px] relative rounded-[24px] shrink-0">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame52 />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-1/2 top-1/2">
      <TextContent />
      <Frame83 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#10182c] h-[389px] left-1/2 overflow-clip top-[99px] w-[1728px]">
      <Frame82 />
    </div>
  );
}

function SiArrowRightDuotone() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="si:arrow-right-duotone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="si:arrow-right-duotone">
          <path d={svgPaths.p2589c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 top-1/2">
      <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[#3a414e] text-[22px] tracking-[0.644px] whitespace-nowrap">Submit</p>
      <SiArrowRightDuotone />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[84px] left-[calc(50%+285.5px)] overflow-clip rounded-[40px] top-[calc(50%+0.5px)] w-[243px]">
      <Frame8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#757a83] h-[119px] overflow-clip relative rounded-[32px] shrink-0 w-full">
      <Frame7 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[40px] not-italic opacity-60 text-[#f7f7f7] text-[22px] top-[55px] tracking-[0.644px] whitespace-nowrap">Enter your email address</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Frame6 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px] w-full">2,000+ users end their week inspired. Join us today.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[27px] items-center left-[calc(50%-0.5px)] top-[209px] w-[880px]">
      <div className="h-[101px] relative shrink-0 w-[248px]" data-name="apartey 3">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgApartey2} />
      </div>
      <Frame9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(117,122,131,0.15)] h-[559px] left-[calc(50%-0.5px)] overflow-clip rounded-[80px] top-[-188px] w-[993px]">
      <Frame10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#757a83] text-[22px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">© 2025 Apartey. All rights reserved.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-start justify-center left-[110px] top-[490px] w-[536px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px] w-[min-content]">Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions.</p>
      <Frame2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start not-italic relative shrink-0 text-[22px] w-[99px]">
      <p className="relative shrink-0 w-full">About us</p>
      <p className="relative shrink-0 w-full">Blog</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start justify-center leading-[1.22] relative shrink-0 text-white tracking-[0.644px] w-[113px]">
      <p className="font-['Mulish:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[24px] w-[min-content]">Company</p>
      <Frame12 />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Social icons">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / Facebook">
        <div className="absolute inset-[9.24%_9.09%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.934">
            <path d={svgPaths.pbfb0a00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / Instagram">
        <div className="absolute inset-[9.09%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p349562f0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / X">
        <div className="absolute inset-[13.02%_9.09%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16.2698">
            <path d={svgPaths.p57cff80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / Linkdin">
        <div className="absolute inset-[9.09%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p7d0ab00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px] whitespace-nowrap">Contact us</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px] w-[min-content]">FAQ</p>
      <SocialIcons />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[115px]">
      <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[24px] text-white tracking-[0.644px] w-full">Support</p>
      <Frame13 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start justify-center not-italic relative shrink-0 text-[22px] w-full whitespace-nowrap" data-name="Footer Links">
      <p className="relative shrink-0">Privacy Policy</p>
      <p className="relative shrink-0">Terms of Service</p>
      <p className="relative shrink-0">Cookies Settings</p>
      <p className="relative shrink-0">Content Policy</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start justify-center leading-[1.22] relative shrink-0 text-white tracking-[0.644px] w-[183px]">
      <p className="font-['Mulish:Bold',sans-serif] font-bold relative shrink-0 text-[24px] w-full">Legal</p>
      <FooterLinks />
    </div>
  );
}

function EmojioneFlagForNigeria() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="emojione:flag-for-nigeria">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6137_1572)" id="emojione:flag-for-nigeria">
          <path d={svgPaths.p37dad580} fill="var(--fill-0, #008000)" id="Vector" />
          <path d={svgPaths.p50edb00} fill="var(--fill-0, #F9F9F9)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6137_1572">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.09)] content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[6px] relative rounded-[40px] shrink-0">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40px]" />
      <EmojioneFlagForNigeria />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px] whitespace-nowrap">Nigeria</p>
    </div>
  );
}

function EmojioneFlagForEstonia() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="emojione:flag-for-estonia">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6137_1562)" id="emojione:flag-for-estonia">
          <path d={svgPaths.p165f8700} fill="var(--fill-0, #F9F9F9)" id="Vector" />
          <path d={svgPaths.p3637d200} fill="var(--fill-0, #42ADE2)" id="Vector_2" />
          <path d={svgPaths.p2f4b7500} fill="var(--fill-0, #3E4347)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_6137_1562">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[6px] relative rounded-[40px] shrink-0">
      <EmojioneFlagForEstonia />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[#f7f7f7] text-[22px] tracking-[0.644px] whitespace-nowrap">Estonia</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[99px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[171px]">
      <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[24px] text-white tracking-[0.644px] w-full">Region</p>
      <Container />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex gap-[77px] items-start left-[743px] top-[490px]">
      <Frame17 />
      <Frame16 />
      <Frame15 />
      <Frame14 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#3a414e] bottom-0 h-[796px] left-0 overflow-clip w-[1728px]">
      <div className="absolute h-[116.491px] left-[89px] top-[365px] w-[286px]" data-name="apartey 2">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgApartey2} />
      </div>
      <Frame5 />
      <Frame11 />
      <Frame18 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="content-stretch flex h-[34.089px] items-center justify-center relative shrink-0 w-[27.271px]" data-name="Arrow">
      <div className="overflow-clip relative shrink-0 size-[23.862px]" data-name="Icon">
        <div className="absolute inset-[33.85%_21.35%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6711 7.70551">
            <path clipRule="evenodd" d={svgPaths.p331b3000} fill="var(--fill-0, #4E5562)" fillRule="evenodd" id=" Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="relative rounded-[13.636px] shrink-0 w-[199px]" data-name="Select">
      <div className="content-stretch flex gap-[17.044px] items-center overflow-clip px-[27.271px] py-[17.044px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#4e5562] text-[22px] tracking-[0.644px]">
          <p className="leading-[1.22]">Newest</p>
        </div>
        <Arrow2 />
      </div>
      <div aria-hidden className="absolute border-[#cad0d9] border-[1.704px] border-solid inset-0 pointer-events-none rounded-[13.636px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex gap-[24px] items-center justify-center ml-0 mt-0 relative row-1" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px] whitespace-nowrap">Sort by</p>
      <Select />
    </div>
  );
}

function SortOptions() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Sort Options">
      <Container1 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#0d4949] text-[50px] text-center tracking-[0.256px] whitespace-nowrap">6 Reviews Found</p>
      <SortOptions />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[18.709px] whitespace-nowrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#1e1e1e] tracking-[0.2993px]">12 Freedom Way, Lagos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[rgba(30,30,30,0.8)] tracking-[0.753px]">John Doe</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #10182C)" id="Ellipse 128" r="32" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] left-[18px] text-[24px] text-white top-[18px] tracking-[0.644px] whitespace-nowrap">JD</p>
      <Frame19 />
    </div>
  );
}

function Frame26() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame28() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame30() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame31() {
  return <div className="bg-[#f3f4f6] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame32() {
  return <div className="bg-[#f3f4f6] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame26 />
      <Frame28 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Medium_Italic',sans-serif] font-medium italic leading-[1.22] relative shrink-0 text-[22px] text-[rgba(30,30,30,0.8)] tracking-[0.644px] w-full">{`Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.054 1">
            <line id="Line 43" opacity="0.1" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.8" x2="453.054" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(30,30,30,0.8)] w-full">Dec 03, 2024</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+0.03px)] top-[calc(50%+0.5px)] w-[453.054px]">
      <Frame27 />
      <Frame29 />
      <Frame34 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white h-[479px] relative rounded-[24px] shrink-0 w-[499px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame33 />
        <div className="absolute flex items-center justify-center left-[403px] top-[-43px]">
          <div className="flex-none rotate-180">
            <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative text-[#f3f4f6] text-[160px] tracking-[0.256px] whitespace-nowrap">“</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(17,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[18.709px] whitespace-nowrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#1e1e1e] tracking-[0.2993px]">12 Freedom Way, Lagos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[rgba(30,30,30,0.8)] tracking-[0.753px]">John Doe</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #10182C)" id="Ellipse 128" r="32" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] left-[18px] text-[24px] text-white top-[18px] tracking-[0.644px] whitespace-nowrap">JD</p>
      <Frame20 />
    </div>
  );
}

function Frame39() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame40() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame41() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame42() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame43() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame39 />
      <Frame40 />
      <Frame41 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Medium_Italic',sans-serif] font-medium italic leading-[1.22] relative shrink-0 text-[22px] text-[rgba(30,30,30,0.8)] tracking-[0.644px] w-full">{`Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.054 1">
            <line id="Line 43" opacity="0.1" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.8" x2="453.054" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(30,30,30,0.8)] w-full">Dec 03, 2024</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+0.03px)] top-[calc(50%+0.5px)] w-[453.054px]">
      <Frame37 />
      <Frame38 />
      <Frame44 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white h-[479px] relative rounded-[24px] shrink-0 w-[499px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame36 />
        <div className="absolute flex items-center justify-center left-[403px] top-[-43px]">
          <div className="flex-none rotate-180">
            <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative text-[#f3f4f6] text-[160px] tracking-[0.256px] whitespace-nowrap">“</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(17,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[18.709px] whitespace-nowrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#1e1e1e] tracking-[0.2993px]">12 Freedom Way, Lagos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[rgba(30,30,30,0.8)] tracking-[0.753px]">John Doe</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #10182C)" id="Ellipse 128" r="32" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] left-[18px] text-[24px] text-white top-[18px] tracking-[0.644px] whitespace-nowrap">JD</p>
      <Frame21 />
    </div>
  );
}

function Frame49() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame50() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame51() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame55() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame56() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Medium_Italic',sans-serif] font-medium italic leading-[1.22] relative shrink-0 text-[22px] text-[rgba(30,30,30,0.8)] tracking-[0.644px] w-full">{`Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.054 1">
            <line id="Line 43" opacity="0.1" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.8" x2="453.054" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(30,30,30,0.8)] w-full">Dec 03, 2024</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+0.03px)] top-[calc(50%+0.5px)] w-[453.054px]">
      <Frame47 />
      <Frame48 />
      <Frame57 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white h-[479px] relative rounded-[24px] shrink-0 w-[499px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame46 />
        <div className="absolute flex items-center justify-center left-[403px] top-[-43px]">
          <div className="flex-none rotate-180">
            <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative text-[#f3f4f6] text-[160px] tracking-[0.256px] whitespace-nowrap">“</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(17,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame35 />
      <Frame45 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[18.709px] whitespace-nowrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#1e1e1e] tracking-[0.2993px]">12 Freedom Way, Lagos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[rgba(30,30,30,0.8)] tracking-[0.753px]">John Doe</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #10182C)" id="Ellipse 128" r="32" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] left-[18px] text-[24px] text-white top-[18px] tracking-[0.644px] whitespace-nowrap">JD</p>
      <Frame22 />
    </div>
  );
}

function Frame62() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame63() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame64() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame65() {
  return <div className="bg-[#f3f4f6] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame66() {
  return <div className="bg-[#f3f4f6] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame62 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Medium_Italic',sans-serif] font-medium italic leading-[1.22] relative shrink-0 text-[22px] text-[rgba(30,30,30,0.8)] tracking-[0.644px] w-full">{`Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.054 1">
            <line id="Line 43" opacity="0.1" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.8" x2="453.054" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(30,30,30,0.8)] w-full">Dec 03, 2024</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+0.03px)] top-[calc(50%+0.5px)] w-[453.054px]">
      <Frame60 />
      <Frame61 />
      <Frame67 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white h-[479px] relative rounded-[24px] shrink-0 w-[499px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame59 />
        <div className="absolute flex items-center justify-center left-[403px] top-[-43px]">
          <div className="flex-none rotate-180">
            <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative text-[#f3f4f6] text-[160px] tracking-[0.256px] whitespace-nowrap">“</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(17,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[18.709px] whitespace-nowrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#1e1e1e] tracking-[0.2993px]">12 Freedom Way, Lagos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[rgba(30,30,30,0.8)] tracking-[0.753px]">John Doe</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #10182C)" id="Ellipse 128" r="32" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] left-[18px] text-[24px] text-white top-[18px] tracking-[0.644px] whitespace-nowrap">JD</p>
      <Frame23 />
    </div>
  );
}

function Frame78() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame79() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame80() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame81() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame88() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame78 />
      <Frame79 />
      <Frame80 />
      <Frame81 />
      <Frame88 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Medium_Italic',sans-serif] font-medium italic leading-[1.22] relative shrink-0 text-[22px] text-[rgba(30,30,30,0.8)] tracking-[0.644px] w-full">{`Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.054 1">
            <line id="Line 43" opacity="0.1" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.8" x2="453.054" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(30,30,30,0.8)] w-full">Dec 03, 2024</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+0.03px)] top-[calc(50%+0.5px)] w-[453.054px]">
      <Frame70 />
      <Frame72 />
      <Frame89 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white h-[479px] relative rounded-[24px] shrink-0 w-[499px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame69 />
        <div className="absolute flex items-center justify-center left-[403px] top-[-43px]">
          <div className="flex-none rotate-180">
            <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative text-[#f3f4f6] text-[160px] tracking-[0.256px] whitespace-nowrap">“</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(17,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[18.709px] whitespace-nowrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#1e1e1e] tracking-[0.2993px]">12 Freedom Way, Lagos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[rgba(30,30,30,0.8)] tracking-[0.753px]">John Doe</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #10182C)" id="Ellipse 128" r="32" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] left-[18px] text-[24px] text-white top-[18px] tracking-[0.644px] whitespace-nowrap">JD</p>
      <Frame24 />
    </div>
  );
}

function Frame94() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame95() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame96() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame97() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame98() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame94 />
      <Frame95 />
      <Frame96 />
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Medium_Italic',sans-serif] font-medium italic leading-[1.22] relative shrink-0 text-[22px] text-[rgba(30,30,30,0.8)] tracking-[0.644px] w-full">{`Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.054 1">
            <line id="Line 43" opacity="0.1" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.8" x2="453.054" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(30,30,30,0.8)] w-full">Dec 03, 2024</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+0.03px)] top-[calc(50%+0.5px)] w-[453.054px]">
      <Frame92 />
      <Frame93 />
      <Frame99 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-white h-[479px] relative rounded-[24px] shrink-0 w-[499px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame91 />
        <div className="absolute flex items-center justify-center left-[403px] top-[-43px]">
          <div className="flex-none rotate-180">
            <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative text-[#f3f4f6] text-[160px] tracking-[0.256px] whitespace-nowrap">“</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(17,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame58 />
      <Frame68 />
      <Frame90 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[18.709px] whitespace-nowrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#1e1e1e] tracking-[0.2993px]">12 Freedom Way, Lagos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[rgba(30,30,30,0.8)] tracking-[0.753px]">John Doe</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #10182C)" id="Ellipse 128" r="32" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] left-[18px] text-[24px] text-white top-[18px] tracking-[0.644px] whitespace-nowrap">JD</p>
      <Frame104 />
    </div>
  );
}

function Frame106() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame107() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame108() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame109() {
  return <div className="bg-[#f3f4f6] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame110() {
  return <div className="bg-[#f3f4f6] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame106 />
      <Frame107 />
      <Frame108 />
      <Frame109 />
      <Frame110 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Medium_Italic',sans-serif] font-medium italic leading-[1.22] relative shrink-0 text-[22px] text-[rgba(30,30,30,0.8)] tracking-[0.644px] w-full">{`Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.054 1">
            <line id="Line 43" opacity="0.1" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.8" x2="453.054" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(30,30,30,0.8)] w-full">Dec 03, 2024</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+0.03px)] top-[calc(50%+0.5px)] w-[453.054px]">
      <Frame103 />
      <Frame105 />
      <Frame111 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-white h-[479px] relative rounded-[24px] shrink-0 w-[499px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame102 />
        <div className="absolute flex items-center justify-center left-[403px] top-[-43px]">
          <div className="flex-none rotate-180">
            <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative text-[#f3f4f6] text-[160px] tracking-[0.256px] whitespace-nowrap">“</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(17,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame115() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[18.709px] whitespace-nowrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#1e1e1e] tracking-[0.2993px]">12 Freedom Way, Lagos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[rgba(30,30,30,0.8)] tracking-[0.753px]">John Doe</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #10182C)" id="Ellipse 128" r="32" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] left-[18px] text-[24px] text-white top-[18px] tracking-[0.644px] whitespace-nowrap">JD</p>
      <Frame115 />
    </div>
  );
}

function Frame117() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame118() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame119() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame120() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame121() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame117 />
      <Frame118 />
      <Frame119 />
      <Frame120 />
      <Frame121 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Medium_Italic',sans-serif] font-medium italic leading-[1.22] relative shrink-0 text-[22px] text-[rgba(30,30,30,0.8)] tracking-[0.644px] w-full">{`Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.054 1">
            <line id="Line 43" opacity="0.1" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.8" x2="453.054" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(30,30,30,0.8)] w-full">Dec 03, 2024</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+0.03px)] top-[calc(50%+0.5px)] w-[453.054px]">
      <Frame114 />
      <Frame116 />
      <Frame122 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-white h-[479px] relative rounded-[24px] shrink-0 w-[499px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame113 />
        <div className="absolute flex items-center justify-center left-[403px] top-[-43px]">
          <div className="flex-none rotate-180">
            <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative text-[#f3f4f6] text-[160px] tracking-[0.256px] whitespace-nowrap">“</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(17,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame126() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[18.709px] whitespace-nowrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative shrink-0 text-[#1e1e1e] tracking-[0.2993px]">12 Freedom Way, Lagos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[rgba(30,30,30,0.8)] tracking-[0.753px]">John Doe</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #10182C)" id="Ellipse 128" r="32" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] left-[18px] text-[24px] text-white top-[18px] tracking-[0.644px] whitespace-nowrap">JD</p>
      <Frame126 />
    </div>
  );
}

function Frame128() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame129() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame130() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame131() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame132() {
  return <div className="bg-[#c85212] h-[12px] relative rounded-[12px] shrink-0 w-[84px]" />;
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame128 />
      <Frame129 />
      <Frame130 />
      <Frame131 />
      <Frame132 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Mulish:Medium_Italic',sans-serif] font-medium italic leading-[1.22] relative shrink-0 text-[22px] text-[rgba(30,30,30,0.8)] tracking-[0.644px] w-full">{`Living at 12 Freedom Way was fantastic! The apartment was modern and spacious, with great amenities. The neighborhood is lively and safe. I'd definitely recommend it to anyone looking for a great place to live!`}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.054 1">
            <line id="Line 43" opacity="0.1" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.8" x2="453.054" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(30,30,30,0.8)] w-full">Dec 03, 2024</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%+0.03px)] top-[calc(50%+0.5px)] w-[453.054px]">
      <Frame125 />
      <Frame127 />
      <Frame133 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="bg-white h-[479px] relative rounded-[24px] shrink-0 w-[499px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame124 />
        <div className="absolute flex items-center justify-center left-[403px] top-[-43px]">
          <div className="flex-none rotate-180">
            <p className="[word-break:break-word] font-['Mulish:Bold',sans-serif] font-bold leading-[1.08] relative text-[#f3f4f6] text-[160px] tracking-[0.256px] whitespace-nowrap">“</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(17,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame101 />
      <Frame112 />
      <Frame123 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame71 />
      <Frame77 />
      <Frame100 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[104px] top-[561px] w-[1525px]">
      <Frame75 />
      <Frame73 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[90.83px] ml-0 mt-0 relative row-1 w-[223px]" data-name="apartey 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey3} />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[51.162px] relative rounded-[42917844px] shrink-0 w-[103.084px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.86px] left-[51.58px] text-[#10182c] text-[17.907px] text-center top-[11.51px] tracking-[0.3837px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[51.162px] relative rounded-[42917844px] shrink-0 w-[117.753px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.86px] left-[58.58px] not-italic text-[17.907px] text-[rgba(30,30,30,0.8)] text-center top-[11.51px] tracking-[0.3837px] whitespace-nowrap">Listings</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] h-[51.162px] min-w-px relative rounded-[42917844px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.86px] left-[60.08px] not-italic text-[17.907px] text-[rgba(30,30,30,0.8)] text-center top-[11.51px] tracking-[0.3837px] whitespace-nowrap">Insights</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[51.162px] relative rounded-[42917844px] shrink-0 w-[103.823px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.86px] left-[53.36px] not-italic text-[17.907px] text-[rgba(30,30,30,0.8)] text-center top-[11.51px] tracking-[0.3837px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[51.162px] relative rounded-[42917844px] shrink-0 w-[90.173px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.86px] left-[45.08px] not-italic text-[17.907px] text-[rgba(30,30,30,0.8)] text-center top-[11.51px] tracking-[0.3837px] whitespace-nowrap">Blog</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[69.069px] relative rounded-[42917844px] shrink-0 w-[577.272px]" data-name="Container">
      <div aria-hidden className="absolute border-[1.279px] border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[42917844px]" />
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

function Container5() {
  return <div className="absolute bg-[rgba(255,255,255,0.53)] h-[28px] left-[52px] top-[8px] w-px" data-name="Container" />;
}

function ImageWithFallback() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(30,30,30,0)] relative rounded-[33554400px] shadow-[0px_0px_0px_2px_rgba(30,30,30,0.4)] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#e8e8e8] content-stretch flex gap-[10px] h-[44px] items-center left-[65px] pl-[6px] rounded-[33554400px] top-0 w-[74px]" data-name="Container">
      <Container7 />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[11px] size-[18px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
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

function Container8() {
  return (
    <div className="absolute bg-[rgba(30,30,30,0.1)] left-0 rounded-[33554400px] size-[40px] top-[2px]" data-name="Container">
      <Icon1 />
      <Text />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[139px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container5 />
        <Container6 />
        <Container8 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[70.348px] items-center justify-between left-[calc(50%+0.21px)] top-[15px] w-[1482.422px]" data-name="Container">
      <Group />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="absolute bg-white h-[99px] left-0 overflow-clip top-0 w-[1728px]">
      <Container2 />
    </div>
  );
}

export default function Listings() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Listings">
      <Frame />
      <Frame1 />
      <Frame76 />
      <Frame134 />
    </div>
  );
}