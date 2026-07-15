import svgPaths from "./svg-3dgdnruewe";
import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import imgRectangle6 from "figma:asset/f59da83f293ec665620621de885d780630206bd7.png";
import imgFrame35 from "figma:asset/edceb707ce9f55684ea576c367e586c80ada14bb.png";

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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">Listings</p>
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

function Frame18() {
  return (
    <div className="bg-[#c85212] h-[46px] overflow-clip relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[53px]">
      <LucidePhone />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Glassmorphism />
      <Frame18 />
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

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">Login</p>
      <Frame19 />
      <div className="relative shrink-0 size-[46px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <circle cx="23" cy="23" fill="var(--fill-0, #D9D9D9)" id="Ellipse 83" r="23" />
        </svg>
      </div>
      <LucideUserRound />
    </div>
  );
}

function Frame21() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[214px] items-center justify-center left-[calc(50%-0.18px)] top-[calc(50%+0.5px)]">
      <div className="h-[82px] relative shrink-0 w-[200px]" data-name="apartey 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
      <PageLinks />
      <Frame20 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[143px] left-1/2 overflow-clip top-0 w-[1728px]">
      <Frame21 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[#0d4949] text-[32px] tracking-[0.256px] w-full">119 Okene Market Road, Okene, Kogi</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px] w-full">Abattoir kogi, Nigeria</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[20.829px] relative shrink-0 w-[104.143px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.143 20.8286">
        <g id="Frame 10">
          <path d={svgPaths.p31dfa880} fill="var(--fill-0, #FACC16)" id="Star 1" />
          <path d={svgPaths.p2402daf0} fill="var(--fill-0, #FACC16)" id="Star 2" />
          <path d={svgPaths.p221e600} fill="var(--fill-0, #FACC16)" id="Star 3" />
          <path d={svgPaths.p20030d00} fill="var(--fill-0, #FACC16)" id="Star 5" />
          <g id="Star 4">
            <path d={svgPaths.p31d84680} stroke="var(--stroke-0, #CAD0D9)" strokeWidth="0.771429" />
            <path d={svgPaths.p31d84680} stroke="var(--stroke-1, #CAD0D9)" strokeWidth="0.771429" />
            <path d={svgPaths.p31d84680} stroke="var(--stroke-2, #CAD0D9)" strokeWidth="0.771429" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[14px] h-[26px] items-center relative shrink-0 w-[267.314px]">
      <Frame />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.644px]">4.0 (28 reviews)</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[538px]">
      <Frame32 />
      <Frame1 />
    </div>
  );
}

function LucideFlag() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[17px] top-[calc(50%-0.5px)]" data-name="lucide/flag">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="lucide/flag" opacity="0.8">
          <path d={svgPaths.p22a09700} fill="var(--fill-0, #1E1E1E)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function LikeButton() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6px] items-center left-[643px] py-[8px] top-[calc(50%-462.5px)]" data-name="like button">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[4.69%_6.01%_4.69%_4.69%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2884 14.5001">
            <path clipRule="evenodd" d={svgPaths.p1913eb00} fill="var(--fill-0, #C85212)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[#6c727f] text-[22px] tracking-[0.644px]">7</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[rgba(202,208,217,0.4)] content-stretch flex items-center justify-center px-[9px] py-[4px] relative rounded-[12px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.4)] tracking-[0.644px]">Air Conditioning</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(202,208,217,0.4)] content-stretch flex items-center justify-center px-[9px] py-[4px] relative rounded-[12px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.4)] tracking-[0.644px]">Parking</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[rgba(202,208,217,0.4)] content-stretch flex items-center justify-center px-[9px] py-[4px] relative rounded-[12px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.4)] tracking-[0.644px]">WI-FI</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[rgba(202,208,217,0.4)] content-stretch flex items-center justify-center px-[9px] py-[4px] relative rounded-[12px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.4)] tracking-[0.644px]">Swimming Pool</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[rgba(202,208,217,0.4)] content-stretch flex items-center justify-center px-[9px] py-[4px] relative rounded-[12px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.4)] tracking-[0.644px]">Gym</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[51px] top-[880px]">
      <Frame27 />
      <Frame29 />
      <Frame28 />
      <Frame31 />
      <Frame30 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white h-[1002px] relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] left-[96.5px] text-[32px] text-[rgba(0,0,0,0.8)] text-center top-[41px] tracking-[0.256px]">Review</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[405px] leading-[1.22] left-[calc(50%-334px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.4)] text-ellipsis top-[104px] tracking-[0.644px] w-[671px] whitespace-pre-wrap">{`Great location but there were some maintenance issues during my stay. The apartment is spacious and well-designed with modern amenities. The kitchen is fully equipped and the living room has comfortable furniture.  The neighborhood is quite convenient with several restaurants and grocery stores within walking distance. Public transportation is easily accessible and it's only a short ride to the city center.  However, I did experience some issues with the plumbing and the air conditioning unit was quite noisy. The property manager was responsive when I reported these problems, but the fixes were temporary at best.  Noise levels can be a concern, especially on weekends when neighbors tend to have gatherings. The walls are relatively thin, so this is something to keep in mind if you're sensitive to noise.  Overall, considering the price point and location, it's a good value but be prepared to deal with some minor inconveniences.`}</p>
        <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[272px] leading-[0] left-[calc(50%-334px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.4)] text-ellipsis top-[502px] tracking-[0.644px] w-[671px] whitespace-pre-wrap">
          <p className="leading-[1.22] mb-0">Pros</p>
          <ul className="list-disc mb-0">
            <li className="mb-0 ms-[33px]">
              <span className="leading-[1.22]">Great location</span>
            </li>
            <li className="mb-0 ms-[33px]">
              <span className="leading-[1.22]">Responsive management</span>
            </li>
            <li className="mb-0 ms-[33px]">
              <span className="leading-[1.22]">Spacious rooms</span>
            </li>
            <li className="ms-[33px]">
              <span className="leading-[1.22]">Modern design</span>
            </li>
          </ul>
          <p className="leading-[1.22] mb-0">Cons</p>
          <ul className="list-disc">
            <li className="mb-0 ms-[33px]">
              <span className="leading-[1.22]">Maintenance issues</span>
            </li>
            <li className="mb-0 ms-[33px]">
              <span className="leading-[1.22]">Noise from neighbors</span>
            </li>
            <li className="mb-0 ms-[33px]">
              <span className="leading-[1.22]">Thin walls</span>
            </li>
            <li className="ms-[33px]">
              <span className="leading-[1.22]">Inconsistent water pressure</span>
            </li>
          </ul>
        </div>
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold h-[28px] leading-[1.22] left-[calc(50%-328px)] overflow-hidden text-[21px] text-[rgba(0,0,0,0.4)] text-ellipsis top-[842px] tracking-[0.644px] w-[671px] whitespace-nowrap">Amenities</p>
        <Frame26 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(202,208,217,0.4)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame33 />
      <div className="absolute left-[699px] rounded-[8px] size-[36px] top-[108px]">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <LucideFlag />
        </div>
        <div aria-hidden="true" className="absolute border border-[#cad0d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <LikeButton />
      <Frame25 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start relative shrink-0 w-[758px]">
      <div className="h-[468px] relative rounded-[8px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle6} />
      </div>
      <Frame34 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[20.829px] relative shrink-0 w-[83.314px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.3143 20.8286">
        <g id="Frame 10">
          <g id="Star 1">
            <path d={svgPaths.pf37ee70} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.pf37ee70} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.pf37ee70} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
          <g id="Star 2">
            <path d={svgPaths.p36367780} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36367780} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36367780} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
          <g id="Star 3">
            <path d={svgPaths.p36b5bc00} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36b5bc00} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36b5bc00} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
          <g id="Star 4">
            <path d={svgPaths.p1e6b2000} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p1e6b2000} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p1e6b2000} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <Frame3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.644px]">4.0 (28 reviews)</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-start left-[255px] top-[41px] w-[267.314px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px]">No 1. kumuye strt...</p>
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[137px] left-[30px] top-[55px] w-[160px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame35} />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#fafafa] h-[231px] overflow-clip relative shrink-0 w-full">
      <Frame11 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[99px] leading-[1.22] left-[calc(50%-91.5px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.4)] text-ellipsis top-[116px] tracking-[0.644px] w-[410px] whitespace-pre-wrap">{`"Great location but maintenance issues were a constant problem during my stay..."`}</p>
      <Frame9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[20.829px] relative shrink-0 w-[83.314px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.3143 20.8286">
        <g id="Frame 10">
          <g id="Star 1">
            <path d={svgPaths.pf37ee70} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.pf37ee70} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.pf37ee70} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
          <g id="Star 2">
            <path d={svgPaths.p36367780} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36367780} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36367780} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
          <g id="Star 3">
            <path d={svgPaths.p36b5bc00} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36b5bc00} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36b5bc00} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
          <g id="Star 4">
            <path d={svgPaths.p1e6b2000} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p1e6b2000} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p1e6b2000} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.644px]">4.0 (28 reviews)</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-start left-[255px] top-[41px] w-[267.314px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px]">No 1. kumuye strt...</p>
      <Frame4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[137px] left-[30px] top-[55px] w-[160px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame35} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#fafafa] h-[231px] overflow-clip relative shrink-0 w-full">
      <Frame13 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[99px] leading-[1.22] left-[calc(50%-91.5px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.4)] text-ellipsis top-[111px] tracking-[0.644px] w-[410px] whitespace-pre-wrap">{`"Great location but maintenance issues were a constant problem during my stay..."`}</p>
      <Frame14 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[20.829px] relative shrink-0 w-[83.314px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.3143 20.8286">
        <g id="Frame 10">
          <g id="Star 1">
            <path d={svgPaths.pf37ee70} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.pf37ee70} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.pf37ee70} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
          <g id="Star 2">
            <path d={svgPaths.p36367780} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36367780} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36367780} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
          <g id="Star 3">
            <path d={svgPaths.p36b5bc00} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36b5bc00} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p36b5bc00} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
          <g id="Star 4">
            <path d={svgPaths.p1e6b2000} stroke="var(--stroke-0, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p1e6b2000} stroke="var(--stroke-1, black)" strokeWidth="0.771429" />
            <path d={svgPaths.p1e6b2000} stroke="var(--stroke-2, black)" strokeWidth="0.771429" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <Frame7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.644px]">4.0 (28 reviews)</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-start left-[255px] top-[41px] w-[267.314px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px]">No 1. kumuye strt...</p>
      <Frame6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute h-[137px] left-[30px] top-[55px] w-[160px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame35} />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#fafafa] h-[231px] overflow-clip relative shrink-0 w-full">
      <Frame16 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[99px] leading-[1.22] left-[calc(50%-91.5px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.4)] text-ellipsis top-[111px] tracking-[0.644px] w-[410px] whitespace-pre-wrap">{`"Great location but maintenance issues were a constant problem during my stay..."`}</p>
      <Frame17 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[36px] top-[94px] w-[693px]">
      <Frame8 />
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white h-[784px] relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame22 />
        <p className="-translate-x-1/2 absolute font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] left-[165.5px] text-[32px] text-[rgba(0,0,0,0.8)] text-center top-[46px] tracking-[0.256px]">Similar Properties</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(202,208,217,0.4)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ButtonFilledStandard() {
  return (
    <div className="bg-[#c85212] relative rounded-[6.85px] shrink-0 w-full" data-name="buttonFilledStandard">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[27.4px] py-[13.7px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px]">Leave a Review</p>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ButtonFilledStandard />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[758px]">
      <Frame10 />
      <Frame24 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[16px] items-start justify-center left-1/2 top-[244px]">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function LucideChevronLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/chevron-left">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/chevron-left">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[98px] top-[193px]">
      <LucideChevronLeft />
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[21px] text-[rgba(0,0,0,0.6)] text-center tracking-[0.644px]">Back to Reviews</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[#667085] text-[22px] tracking-[0.644px] w-full whitespace-pre-wrap">{`Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions. It’s a space where renters share honest reviews, experiences, and insights about the homes they've lived in.`}</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content2 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[578px]" data-name="Column">
      <div className="h-[82px] relative shrink-0 w-[200px]" data-name="apartey 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
      <Content1 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-h-px min-w-px not-italic relative text-[#667085] text-[22px] tracking-[0.644px] whitespace-pre-wrap">Reviews</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-h-px min-w-px not-italic relative text-[#667085] text-[22px] tracking-[0.644px] whitespace-pre-wrap">Home listings</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-h-px min-w-px not-italic relative text-[#667085] text-[22px] tracking-[0.644px] whitespace-pre-wrap">Insights</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-h-px min-w-px not-italic relative text-[#667085] text-[22px] tracking-[0.644px] whitespace-pre-wrap">About</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-h-px min-w-px not-italic relative text-[#667085] text-[22px] tracking-[0.644px] whitespace-pre-wrap">Blog</p>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer link">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Product() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative" data-name="Product">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[#101828] text-[32px] tracking-[0.256px] w-full whitespace-pre-wrap">Links</p>
      <FooterLink />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px min-w-px relative self-stretch" data-name="Footer links">
      <Product />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <FooterLinks />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[1.22] not-italic relative shrink-0 text-[#667085] text-[21px] tracking-[0.644px] w-full" data-name="Container">
      <p className="relative shrink-0 w-full">+1 (123) 456-7890</p>
      <p className="relative shrink-0 w-full">hello@apartey.com</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Content">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[#101828] text-[32px] tracking-[0.256px] w-full">Contact:</p>
      <Container />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Social icons">
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / Facebook">
        <div className="absolute inset-[9.24%_9.09%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.934">
            <path d={svgPaths.pbfb0a00} fill="var(--fill-0, #344054)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / Instagram">
        <div className="absolute inset-[9.09%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p349562f0} fill="var(--fill-0, #344054)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / X">
        <div className="absolute inset-[13.02%_9.09%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16.2698">
            <path d={svgPaths.p57cff80} fill="var(--fill-0, #344054)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Icon / Linkdin">
        <div className="absolute inset-[9.09%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p7d0ab00} fill="var(--fill-0, #344054)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Content">
      <Content4 />
      <SocialIcons />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[42px] items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Content3 />
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end leading-[1.22] relative shrink-0 text-right underline" data-name="Footer Links">
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">Privacy Policy</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">Terms of Service</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0">Cookies Settings</p>
    </div>
  );
}

function Credits1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal items-center justify-between min-h-px min-w-px not-italic relative text-[#667085] text-[22px] tracking-[0.644px]" data-name="Credits">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 whitespace-nowrap">
        <p className="leading-[1.22]">© 2025 Apartey. All rights reserved.</p>
      </div>
      <FooterLinks1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-between pt-[32px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-solid border-t inset-0 pointer-events-none" />
      <Credits1 />
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Credits">
      <Row />
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[20px] items-center left-1/2 overflow-clip pb-[48px] pt-[64px] px-[64px] top-1/2 w-[1530px]" data-name="Footer / 20 /">
      <Content />
      <Credits />
    </div>
  );
}

function MacBookPro() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 h-[428px] left-1/2 overflow-clip rounded-tl-[40px] rounded-tr-[40px] w-[1728px]" data-name="MacBook Pro 16' - 2">
      <Footer />
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Reviews">
      <Frame23 />
      <Frame37 />
      <Frame38 />
      <MacBookPro />
    </div>
  );
}