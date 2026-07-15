import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.02] relative shrink-0 text-[72px] text-black tracking-[-1.512px]">Verify Email</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[#7f7f7f] text-[22px] text-center tracking-[0.644px] w-[min-content] whitespace-pre-wrap">We have sent you a four digit code in your email</p>
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

function Select() {
  return (
    <div className="flex-[1_0_0] h-[145px] min-h-px min-w-px relative rounded-[13.636px]" data-name="Select">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border-[#cad0d9] border-[1.704px] border-solid inset-0 pointer-events-none rounded-[13.636px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Select />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[136px] items-start min-h-px min-w-px relative">
      <Frame6 />
    </div>
  );
}

function Select1() {
  return (
    <div className="flex-[1_0_0] h-[145px] min-h-px min-w-px relative rounded-[13.636px]" data-name="Select">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border-[#cad0d9] border-[1.704px] border-solid inset-0 pointer-events-none rounded-[13.636px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Select1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[136px] items-start min-h-px min-w-px relative">
      <Frame7 />
    </div>
  );
}

function Select2() {
  return (
    <div className="flex-[1_0_0] h-[145px] min-h-px min-w-px relative rounded-[13.636px]" data-name="Select">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border-[#cad0d9] border-[1.704px] border-solid inset-0 pointer-events-none rounded-[13.636px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Select2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[136px] items-start min-h-px min-w-px relative">
      <Frame8 />
    </div>
  );
}

function Select3() {
  return (
    <div className="flex-[1_0_0] h-[145px] min-h-px min-w-px relative rounded-[13.636px]" data-name="Select">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border-[#cad0d9] border-[1.704px] border-solid inset-0 pointer-events-none rounded-[13.636px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Select3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[136px] items-start min-h-px min-w-px relative">
      <Frame9 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0 w-[687px]">
      <Frame1 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
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

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[22px] text-black text-center tracking-[0.644px] w-[625px] whitespace-pre-wrap">Resend code</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] h-[528.578px] items-center justify-center left-[calc(50%+0.5px)] top-[calc(50%-0.21px)] w-[689px]">
      <Frame3 />
      <Frame15 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function MacBookPro() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[1117px] left-1/2 overflow-clip top-1/2 w-[864px]" data-name="MacBook Pro 16' - 4">
      <Frame4 />
      <div className="-translate-x-1/2 absolute h-[82px] left-1/2 top-[117px] w-[200px]" data-name="apartey 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmail() {
  return (
    <div className="bg-white relative size-full" data-name="verify email">
      <MacBookPro />
    </div>
  );
}