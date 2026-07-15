import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 text-black">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.02] relative shrink-0 text-[72px] tracking-[-1.512px]">Reset your password</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-center tracking-[0.644px] w-[min-content] whitespace-pre-wrap">{`Enter your email and we'll send you a link to reset your password`}</p>
    </div>
  );
}

function Select() {
  return (
    <div className="relative rounded-[13.636px] shrink-0 w-full" data-name="Select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[27.271px] py-[17.044px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-76 relative shrink-0 text-[#4e5562] text-[22px] tracking-[0.644px] whitespace-nowrap">
            <p className="leading-[1.22]">example@email.com</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cad0d9] border-[1.704px] border-solid inset-0 pointer-events-none rounded-[13.636px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] relative shrink-0 text-[#4e5562] text-[21px] tracking-[0.644px] w-full">
        <p className="leading-[1.22] whitespace-pre-wrap">Email</p>
      </div>
      <Select />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function ButtonFilledStandard() {
  return (
    <div className="bg-[#c85212] relative rounded-[6.85px] shrink-0 w-full" data-name="buttonFilledStandard">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[27.4px] py-[13.7px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-white tracking-[0.644px]">Send reset link</p>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center justify-center relative shrink-0 w-full">
      <Frame2 />
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[36px] h-[528.578px] items-center justify-center left-[calc(50%+0.5px)] top-[calc(50%-0.21px)] w-[689px]">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center tracking-[0.644px] w-full whitespace-pre-wrap">
        <span className="leading-[1.22] text-[22px]">{`Remember your password? `}</span>
        <span className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] text-[#c85212] text-[21px]">Sign in</span>
      </p>
    </div>
  );
}

function MacBookPro() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[1117px] left-1/2 overflow-clip top-1/2 w-[864px]" data-name="MacBook Pro 16' - 4">
      <Frame6 />
      <div className="-translate-x-1/2 absolute h-[82px] left-1/2 top-[117px] w-[200px]" data-name="apartey 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
    </div>
  );
}

export default function ResetEmail() {
  return (
    <div className="bg-white relative size-full" data-name="Reset email">
      <MacBookPro />
    </div>
  );
}