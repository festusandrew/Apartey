import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 text-black">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.02] relative shrink-0 text-[72px] tracking-[-1.512px]">Let’s get started</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-center tracking-[0.644px] w-[min-content] whitespace-pre-wrap">Tell us a bit about yourself so we can tailor your experience</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4e5562] text-[21px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">I am a</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[23px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <circle cx="11.5" cy="11.5" id="Ellipse 92" r="10.5" stroke="var(--stroke-0, #C85212)" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[21px] text-black tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">Renter</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame7 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[#1e1e1e] text-[22px] tracking-[0.644px] w-full">
        <p className="leading-[1.22] whitespace-pre-wrap">Share your rental experience or explore honest reviews.</p>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="relative rounded-[13.636px] self-stretch shrink-0 w-[269px]" data-name="Select">
      <div className="content-stretch flex items-start overflow-clip px-[27.271px] py-[17.044px] relative rounded-[inherit] size-full">
        <Frame8 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c85212] border-[1.704px] border-solid inset-0 pointer-events-none rounded-[13.636px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[23px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <circle cx="11.5" cy="11.5" id="Ellipse 92" r="10.5" stroke="var(--stroke-0, #CAD0D9)" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[21px] text-black tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">Homeowner</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame10 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[#1e1e1e] text-[22px] tracking-[0.644px] w-full">
        <p className="leading-[1.22] whitespace-pre-wrap">Showcase your property and earn trust through reviews.</p>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="relative rounded-[13.636px] self-stretch shrink-0 w-[269px]" data-name="Select">
      <div className="content-stretch flex items-start overflow-clip px-[27.271px] py-[17.044px] relative rounded-[inherit] size-full">
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#cad0d9] border-[1.704px] border-solid inset-0 pointer-events-none rounded-[13.636px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[23px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <circle cx="11.5" cy="11.5" id="Ellipse 92" r="10.5" stroke="var(--stroke-0, #CAD0D9)" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[21px] text-black tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">Developer/Broker</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame12 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic opacity-60 relative shrink-0 text-[#1e1e1e] text-[22px] tracking-[0.644px] w-[min-content]">
        <p className="leading-[1.22] whitespace-pre-wrap">Highlight your listings with transparent renter insights.</p>
      </div>
    </div>
  );
}

function Select2() {
  return (
    <div className="relative rounded-[13.636px] self-stretch shrink-0 w-[269px]" data-name="Select">
      <div className="content-stretch flex items-start overflow-clip px-[27.271px] py-[17.044px] relative rounded-[inherit] size-full">
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border-[#cad0d9] border-[1.704px] border-solid inset-0 pointer-events-none rounded-[13.636px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Select />
      <Select1 />
      <Select2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[6px] shrink-0 size-[32px]">
        <div aria-hidden="true" className="absolute border-2 border-[#4e5562] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#1e1e1e] text-[22px] tracking-[0.644px] whitespace-nowrap">
        <p className="leading-[1.22]">I agree to the terms of use and privacy policy</p>
      </div>
    </div>
  );
}

function ButtonFilledStandard() {
  return (
    <div className="bg-[#c85212] relative rounded-[6.85px] shrink-0 w-full" data-name="buttonFilledStandard">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[27.4px] py-[13.7px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px]">Continue</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[53.4px] items-start relative shrink-0 w-full">
      <ButtonFilledStandard />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] h-[529px] items-center justify-center left-[calc(50%+0.5px)] top-1/2 w-[760px]">
      <Frame3 />
      <Frame1 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function MacBookPro() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[1117px] left-[calc(50%+0.5px)] overflow-clip top-1/2 w-[1109px]" data-name="MacBook Pro 16' - 4">
      <Frame4 />
      <div className="-translate-x-1/2 absolute h-[82px] left-[calc(50%+0.5px)] top-[117px] w-[200px]" data-name="apartey 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
    </div>
  );
}

export default function Continue() {
  return (
    <div className="bg-white relative size-full" data-name="Continue">
      <MacBookPro />
    </div>
  );
}