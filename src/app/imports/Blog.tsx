import svgPaths from "./svg-0fx88xaz86";
import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import imgImage8 from "figma:asset/283a9cba8d924b3c1da8d99aad3275c0ae3d36cc.png";
import imgImage9 from "figma:asset/094ad79142b11e4db48c945ec035889217795159.png";

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
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[#c85212] text-[21px] tracking-[0.644px]">Blog</p>
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

function Frame24() {
  return (
    <div className="bg-[#c85212] h-[46px] overflow-clip relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[53px]">
      <LucidePhone />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Glassmorphism />
      <Frame24 />
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

function Frame26() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">Login</p>
      <Frame25 />
      <div className="relative shrink-0 size-[46px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <circle cx="23" cy="23" fill="var(--fill-0, #D9D9D9)" id="Ellipse 83" r="23" />
        </svg>
      </div>
      <LucideUserRound />
    </div>
  );
}

function Frame27() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[214px] items-center justify-center left-[calc(50%-0.18px)] top-[calc(50%+0.5px)]">
      <div className="h-[82px] relative shrink-0 w-[200px]" data-name="apartey 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
      <PageLinks />
      <Frame26 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[143px] left-1/2 overflow-clip top-0 w-[1728px]">
      <Frame27 />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center justify-center relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="textContent">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.02] min-w-full relative shrink-0 text-[#0d4949] text-[72px] tracking-[-1.512px] w-[min-content]">Apartey Blog</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.4)] tracking-[0.644px] w-[764px]">{`Insights, tips, and stories about real estate and living spaces `}</p>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col h-[194px] items-center justify-center relative shrink-0 w-full" data-name="div">
      <TextContent />
    </div>
  );
}

function Frame29() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[150px] w-[924px]">
      <Div />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="textContent">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.256px] w-[156px] whitespace-pre-wrap">All Articles</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col h-[100px] items-start justify-center relative shrink-0" data-name="div">
      <TextContent1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[15px] items-center left-[1348px] top-[39px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">See all</p>
      <div className="h-0 relative shrink-0 w-[92px]">
        <div className="absolute inset-[-7.36px_-1.09%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 14.7279">
            <path d={svgPaths.p32af030} fill="var(--stroke-0, black)" id="Arrow 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.18px] top-[275.93px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px] w-[427px] whitespace-pre-wrap">{`Converting Your Home to a Rental: 6 Tips to Protect You & Your Property.`}</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[#c3c3c3] h-[267px] left-[-8px] overflow-clip top-[-16px] w-[512px]">
      <div className="absolute h-[336px] left-[-95px] top-[-35px] w-[702px]" data-name="image 8">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage8} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[481px] overflow-clip relative rounded-[16.073px] shrink-0 w-[496px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[calc(50%-208px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[394px] tracking-[0.644px] w-[427px] whitespace-pre-wrap">{`Converting Your Home to a Rental: 6 Tips to Protect You & Your Property.`}</p>
      <Frame7 />
      <Frame17 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.18px] top-[275.93px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px] w-[427px] whitespace-pre-wrap">Understanding Local Rental Regulations: What You Need to Know.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[#c3c3c3] h-[267px] left-[-8px] overflow-clip top-[-16px] w-[512px]">
      <div className="absolute h-[336px] left-[-95px] top-[-35px] w-[702px]" data-name="image 8">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage8} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[481px] overflow-clip relative rounded-[16.073px] shrink-0 w-[496px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[calc(50%-208px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[394px] tracking-[0.644px] w-[427px] whitespace-pre-wrap">Understanding Local Rental Regulations: What You Need to Know.</p>
      <Frame8 />
      <Frame18 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.18px] top-[275.93px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px] w-[427px] whitespace-pre-wrap">{`Setting the Right Rental Price: How to Evaluate Your Property's Worth.`}</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[#c3c3c3] h-[267px] left-[-8px] overflow-clip top-[-16px] w-[512px]">
      <div className="absolute h-[336px] left-[-95px] top-[-35px] w-[702px]" data-name="image 8">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage8} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[481px] overflow-clip relative rounded-[16.073px] shrink-0 w-[496px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[calc(50%-208px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[394px] tracking-[0.644px] w-[427px] whitespace-pre-wrap">{`Setting the Right Rental Price: How to Evaluate Your Property's Worth.`}</p>
      <Frame9 />
      <Frame19 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.18px] top-[275.93px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px] w-[427px] whitespace-pre-wrap">Preparing Your Home for Tenants: Essential Maintenance Checklist.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[#c3c3c3] h-[267px] left-[-8px] overflow-clip top-[-16px] w-[512px]">
      <div className="absolute h-[336px] left-[-95px] top-[-35px] w-[702px]" data-name="image 8">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage8} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white h-[481px] overflow-clip relative rounded-[16.073px] shrink-0 w-[496px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[calc(50%-208px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[394px] tracking-[0.644px] w-[427px] whitespace-pre-wrap">Preparing Your Home for Tenants: Essential Maintenance Checklist.</p>
      <Frame13 />
      <Frame20 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.18px] top-[275.93px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px] w-[427px] whitespace-pre-wrap">Choosing the Right Tenants: Screening Tips for Homeowners.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[#c3c3c3] h-[267px] left-[-8px] overflow-clip top-[-16px] w-[512px]">
      <div className="absolute h-[336px] left-[-95px] top-[-35px] w-[702px]" data-name="image 8">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage8} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white h-[481px] overflow-clip relative rounded-[16.073px] shrink-0 w-[496px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[calc(50%-208px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[394px] tracking-[0.644px] w-[427px] whitespace-pre-wrap">Choosing the Right Tenants: Screening Tips for Homeowners.</p>
      <Frame14 />
      <Frame21 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.18px] top-[275.93px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px] w-[427px] whitespace-pre-wrap">Creating a Solid Rental Agreement: Key Clauses to Include.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[#c3c3c3] h-[267px] left-[-8px] overflow-clip top-[-16px] w-[512px]">
      <div className="absolute h-[336px] left-[-95px] top-[-35px] w-[702px]" data-name="image 8">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage8} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white h-[481px] overflow-clip relative rounded-[16.073px] shrink-0 w-[496px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.22] left-[calc(50%-208px)] not-italic overflow-hidden text-[22px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[394px] tracking-[0.644px] w-[427px] whitespace-pre-wrap">Creating a Solid Rental Agreement: Key Clauses to Include.</p>
      <Frame15 />
      <Frame22 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-center flex flex-wrap gap-[24.109947204589844px_24.11px] items-center relative shrink-0 w-[1537px]">
      <Frame />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[50px] items-start left-[calc(45.83%+63.5px)] top-[1084px] w-[1535px]">
      <Div1 />
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function LucideSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/search" opacity="0.4">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 21L16.7 16.7" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideSearch1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/search">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 21L16.7 16.7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFilledStandard() {
  return (
    <div className="bg-[#c85212] content-stretch flex gap-[6px] items-center justify-center px-[27.4px] py-[13.7px] relative rounded-[6.85px] shrink-0" data-name="buttonFilledStandard">
      <LucideSearch1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px]">{`Search `}</p>
    </div>
  );
}

function InputStandard() {
  return (
    <div className="bg-white content-stretch flex gap-[13.7px] items-center px-[20.55px] py-[13.7px] relative rounded-[6.85px] shrink-0 w-[732px]" data-name="inputStandard">
      <div aria-hidden="true" className="absolute border-[#8f8f8f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[6.85px]" />
      <LucideSearch />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-h-px min-w-px not-italic opacity-60 overflow-hidden relative text-[#1e1e1e] text-[22px] text-ellipsis tracking-[0.644px] whitespace-nowrap">Search Articles ...</p>
      <ButtonFilledStandard />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="form">
      <InputStandard />
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="email">
      <Form />
    </div>
  );
}

function Frame28() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-[354px] w-[732px]">
      <Email />
    </div>
  );
}

function Frame23() {
  return <div className="absolute bg-[#c3c3c3] h-[267px] left-[-8px] top-[-16px] w-[512px]" />;
}

function Frame1() {
  return (
    <div className="bg-white h-[481px] overflow-clip relative rounded-[16.073px] shrink-0 w-[935px]">
      <Frame23 />
      <div className="absolute h-[677px] right-[-0.33px] top-[-81px] w-[1013.335px]" data-name="image 8">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage9} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#c85212] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic overflow-hidden relative shrink-0 text-[22px] text-ellipsis text-white tracking-[0.644px]">Renting</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[0.256px] w-[427px] whitespace-pre-wrap">{`Converting Your Home to a Rental: 6 Tips to Protect You & Your Property.`}</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full">
      <Frame32 />
      <Frame16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[64px] leading-[1.22] not-italic overflow-hidden relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] text-ellipsis tracking-[0.644px] w-[408px] whitespace-pre-wrap">{`Converting Your Home to a Rental: 6 Tips to Protect You & Your Property.`}</p>
    </div>
  );
}

function ButtonFilledStandard1() {
  return (
    <div className="bg-[#c85212] content-stretch flex items-center justify-center px-[27.4px] py-[13.7px] relative rounded-[6.85px] shrink-0" data-name="buttonFilledStandard">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px]">Read Article</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[427px]">
      <Frame31 />
      <ButtonFilledStandard1 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex gap-[73px] items-center left-[88px] top-[488px]">
      <Frame1 />
      <Frame33 />
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

export default function Blog() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Blog">
      <Frame30 />
      <Frame29 />
      <Frame12 />
      <Frame28 />
      <Frame34 />
      <MacBookPro />
    </div>
  );
}