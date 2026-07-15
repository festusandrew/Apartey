import svgPaths from "./svg-h4ek4f9qmt";
import imgApartey11 from "./ceea96867297c8ec4ca85c873ab1b3ef0f4753b7.png";

function SolarLockOutline() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[52px] top-1/2" data-name="solar:lock-outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="solar:lock-outline">
          <path clipRule="evenodd" d={svgPaths.p1ed46880} fill="var(--fill-0, #C85212)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(200,82,18,0.1)] overflow-clip relative rounded-[360px] shrink-0 size-[136px]">
      <SolarLockOutline />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col font-['Mulish:SemiBold',sans-serif] font-semibold gap-[12px] items-center justify-center relative shrink-0 w-full whitespace-nowrap" data-name="Heading and subheading">
      <p className="leading-[24px] relative shrink-0 text-[#c85212] text-[16px]">Pricing</p>
      <p className="leading-[60px] relative shrink-0 text-[#101828] text-[48px] tracking-[-0.96px]">Unlock Analytics</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[768px]" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#667085] text-[20px] text-center w-full">Upgrade to Plus to see basic performance, or Pro for deep audience and portfolio insights.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Content />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-center py-[20px] relative shrink-0 w-full" data-name="Header section">
      <Frame />
      <Container />
    </div>
  );
}

function Price() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Price">
      <p className="-translate-x-1/2 absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[60px] left-[calc(50%+0.5px)] text-[#101828] text-[48px] text-center top-0 tracking-[-0.96px] whitespace-nowrap">$60/mth</p>
    </div>
  );
}

function HeadingAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-center w-full" data-name="Heading and supporting text">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#101828] text-[20px] w-full">Apartey Plus</p>
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">For active managers.</p>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pt-[40px] px-[32px] relative size-full">
          <Price />
          <HeadingAndSupportingText1 />
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Manage up to 20 properties</p>
    </div>
  );
}

function CheckItemText() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon />
      <TextWrap />
    </div>
  );
}

function CheckIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Verified Business Badge</p>
    </div>
  );
}

function CheckItemText1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon1 />
      <TextWrap1 />
    </div>
  );
}

function CheckIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Reputation Management tools</p>
    </div>
  );
}

function CheckItemText2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon2 />
      <TextWrap2 />
    </div>
  );
}

function CheckIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Limited Team Access</p>
    </div>
  );
}

function CheckItemText3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon3 />
      <TextWrap3 />
    </div>
  );
}

function CheckIcon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Priority chat and email support</p>
    </div>
  );
}

function CheckItemText4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon4 />
      <TextWrap4 />
    </div>
  );
}

function CheckItems() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Check items">
      <CheckItemText />
      <CheckItemText1 />
      <CheckItemText2 />
      <CheckItemText3 />
      <CheckItemText4 />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start pb-[40px] pt-[32px] px-[32px] relative size-full">
        <CheckItems />
      </div>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[#c85212] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Get started</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c85212] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <ButtonBase />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Button />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start pb-[32px] px-[32px] relative size-full">
        <Actions />
      </div>
    </div>
  );
}

function PricingTierCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative rounded-[16px]" data-name="_Pricing tier card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header />
      <Content2 />
      <Footer />
    </div>
  );
}

function HandDrawnArrow() {
  return (
    <div className="h-[30px] relative w-[61.957px]" data-name="Hand-drawn arrow">
      <div className="absolute inset-[0_-0.16%_0_-0.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.3712 30">
          <g id="Hand-drawn arrow">
            <path d={svgPaths.p485edc0} fill="var(--fill-0, #C85212)" id="Vectors" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Price1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Price">
      <p className="-translate-x-1/2 absolute font-['Mulish:SemiBold',sans-serif] font-semibold leading-[60px] left-[calc(50%+0.5px)] text-[#101828] text-[48px] text-center top-0 tracking-[-0.96px] whitespace-nowrap">$100/mth</p>
      <div className="absolute flex h-[56.959px] items-center justify-center right-[109.86px] top-[-65.67px] w-[68.656px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-150">
          <HandDrawnArrow />
        </div>
      </div>
      <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[20px] right-[110.5px] text-[#c85212] text-[14px] top-[-70px] translate-x-full whitespace-nowrap">Most popular!</p>
    </div>
  );
}

function HeadingAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-center w-full" data-name="Heading and supporting text">
      <p className="font-['Mulish:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#101828] text-[20px] w-full">Apartey Pro</p>
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">{`For top managers & power users.`}</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pt-[40px] px-[32px] relative size-full">
          <Price1 />
          <HeadingAndSupportingText2 />
        </div>
      </div>
    </div>
  );
}

function CheckIcon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Unlimited properties</p>
    </div>
  );
}

function CheckItemText5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon5 />
      <TextWrap5 />
    </div>
  );
}

function CheckIcon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Advanced Analytics Dashboard</p>
    </div>
  );
}

function CheckItemText6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon6 />
      <TextWrap6 />
    </div>
  );
}

function CheckIcon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Pre-screened Renter Queue access</p>
    </div>
  );
}

function CheckItemText7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon7 />
      <TextWrap7 />
    </div>
  );
}

function CheckIcon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Property Management toolkit</p>
    </div>
  );
}

function CheckItemText8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon8 />
      <TextWrap8 />
    </div>
  );
}

function CheckIcon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check icon">
          <rect fill="var(--fill-0, #D1FADF)" height="24" rx="12" width="24" />
          <path clipRule="evenodd" d={svgPaths.p3695d500} fill="var(--fill-0, #12B76A)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TextWrap9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Full Team provisioning limits</p>
    </div>
  );
}

function CheckItemText9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
      <CheckIcon9 />
      <TextWrap9 />
    </div>
  );
}

function CheckItems1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Check items">
      <CheckItemText5 />
      <CheckItemText6 />
      <CheckItemText7 />
      <CheckItemText8 />
      <CheckItemText9 />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start pb-[40px] pt-[32px] px-[32px] relative size-full">
        <CheckItems1 />
      </div>
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="bg-[#c85212] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Get started</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c85212] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <ButtonBase1 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Button1 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start pb-[32px] px-[32px] relative size-full">
        <Actions1 />
      </div>
    </div>
  );
}

function PricingTierCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative rounded-[16px]" data-name="_Pricing tier card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header1 />
      <Content3 />
      <Footer1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <PricingTierCard />
      <PricingTierCard1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Content1 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[533px] items-center pb-[16px] relative shrink-0 w-full" data-name="Section">
      <Container1 />
    </div>
  );
}

function PricingPageHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1005px] items-center overflow-clip relative shrink-0 w-full" data-name="Pricing page header">
      <HeaderSection />
      <Section />
      <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#667085] text-[20px] text-center w-full">Plans are billed monthly. Cancel anytime.</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1598px] items-start left-0 overflow-clip pl-[43.712px] pr-[64.658px] pt-[43.712px] top-[109px] w-[1372px]" data-name="Main Content">
      <PricingPageHeader />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[99.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[27.32px] left-0 text-[#99a1af] text-[19.124px] top-[0.45px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[5.478px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[27.32px] left-0 text-[#d1d5dc] text-[19.124px] top-[0.45px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[27.32px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Mulish:Bold',sans-serif] font-bold leading-[27.32px] left-0 text-[#10182c] text-[19.124px] top-[0.45px] whitespace-nowrap">Analytics</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[27.32px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-center relative size-full">
        <Text />
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[228.508px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[10.93px] size-[27.32px] top-[10.93px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3202 27.3202">
        <g id="Icon">
          <path d={svgPaths.p2c8f5800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
          <path d={svgPaths.p2910000} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-[#c85212] border-[2.732px] border-solid border-white left-[30.05px] rounded-[30557050px] size-[10.928px] top-[8.2px]" data-name="Text" />;
}

function Button2() {
  return (
    <div className="absolute left-[343.01px] rounded-[30557050px] size-[49.176px] top-[2.73px]" data-name="Button">
      <Icon />
      <Text3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[413.687px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[109.281px] items-center justify-between left-0 pb-[0.911px] px-[43.712px] top-0 w-[1372.383px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.911px] border-solid inset-0 pointer-events-none" />
      <Container2 />
      <Container4 />
    </div>
  );
}

function J() {
  return (
    <div className="absolute h-[1707px] left-[355px] overflow-clip top-0 w-[1373px]" data-name="j9">
      <MainContent />
      <Header2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[109.281px] relative shrink-0 w-[355.162px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.911px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[0.911px] pl-[43.712px] relative size-full">
        <div className="h-[57.236px] relative shrink-0 w-[175px]" data-name="apartey (1) 1">
          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[442.48%] left-[-25.18%] max-w-none top-[-171.24%] w-[144.72%]" src={imgApartey11} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[12.51%] right-[58.33%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.22055 11.2696">
            <path d={svgPaths.peb07af0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.49%_66.67%_58.34%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.22055 7.17154">
            <path d={svgPaths.p3e366800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[58.34%] right-[12.49%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.22055 11.2696">
            <path d={svgPaths.peb07af0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.66%_58.33%_12.5%_12.51%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.22055 7.17154">
            <path d={svgPaths.p3e366800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[51px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[142.791px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container7 />
        <Text4 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[146.803px] relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.84%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3921 8.19605">
            <path d={svgPaths.p2fc4500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2451 10.2451">
            <path d={svgPaths.p14711480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[28px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[96.816px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container9 />
        <Text5 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[192.778px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.66%_8.34%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4411 22.5391">
            <path d={svgPaths.p177b6bc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.34%] left-[37.51%] right-[37.49%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.19605 6.14704">
            <path d={svgPaths.p35e2f640} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.34%] right-[66.62%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.29%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[50.01%] right-[49.95%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_49.95%_58.34%_50.01%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_49.95%_41.67%_50.01%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_33.29%_58.34%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_33.29%_41.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_66.62%_58.34%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.62%_41.67%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[50.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Portfolio</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[140.372px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container11 />
        <Text6 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[149.222px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_12.49%_12.5%_12.51%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4901 20.4901">
            <path d={svgPaths.p88d4c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[80.908px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[40.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Enquiries</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[121.888px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container13 />
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#c85212] h-[28.003px] relative rounded-[30557050px] shrink-0 w-[39.899px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-[20.43px] text-[15.026px] text-center text-white top-[2.28px] whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[21.856px] relative size-full">
        <Container12 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.84%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3921 8.19605">
            <path d={svgPaths.p2fc4500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2451 10.2451">
            <path d={svgPaths.p14711480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[72.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Teams and Roles</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[96.816px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container15 />
        <Text9 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[192.778px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.66%_8.34%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4411 22.5391">
            <path d={svgPaths.p177b6bc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.34%] left-[37.51%] right-[37.49%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.19605 6.14704">
            <path d={svgPaths.p35e2f640} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.34%] right-[66.62%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.29%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[50.01%] right-[49.95%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_49.95%_58.34%_50.01%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_49.95%_41.67%_50.01%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_33.29%_58.34%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_33.29%_41.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_66.62%_58.34%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.62%_41.67%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[99.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[92.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Pre-Screened Queue</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[29px] relative shrink-0 w-[242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container17 />
        <Text10 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[149.222px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Icons8Trophy() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icons8:trophy">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icons8:trophy">
          <path d={svgPaths.p3298e700} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-0 text-[19.124px] text-[rgba(255,255,255,0.6)] top-[-0.91px] whitespace-nowrap">Rewards</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center px-[21.856px] relative size-full">
        <Icons8Trophy />
        <Text11 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.66%_8.34%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4411 22.5391">
            <path d={svgPaths.p177b6bc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.34%] left-[37.51%] right-[37.49%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.19605 6.14704">
            <path d={svgPaths.p35e2f640} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.34%] right-[66.62%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.29%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[50.01%] right-[49.95%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_49.95%_58.34%_50.01%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_49.95%_41.67%_50.01%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_33.29%_58.34%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_33.29%_41.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_66.62%_58.34%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.62%_41.67%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[99.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[99.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Property Management</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[29px] relative shrink-0 w-[242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container19 />
        <Text12 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[149.222px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.16%_8.33%_29.17%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5391 12.2941">
            <path d={svgPaths.p351f7d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.16%_8.33%_45.84%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.19605 8.19605">
            <path d={svgPaths.p2d70c480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[43px] text-[19.124px] text-center text-white top-[-0.91px] whitespace-nowrap">Analytics</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[154.074px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container21 />
        <Text13 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#c85212] h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[135.519px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.41%_8.34%_12.44%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5261 22.5391">
            <path d={svgPaths.p1d21f700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_37.49%_37.5%_37.51%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.19605 8.19605">
            <path d={svgPaths.p2beac600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function J2() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="j9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function J3() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[72.228px]" data-name="j9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-0 text-[19.124px] text-[rgba(255,255,255,0.7)] top-[-0.91px] whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center pl-[21.856px] relative size-full">
          <J2 />
          <J3 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[831px] relative shrink-0 w-[355px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start overflow-clip pl-[21.856px] pt-[32.784px] relative rounded-[inherit] size-full">
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
        <Link />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.539px] left-0 text-[15.026px] text-[rgba(255,255,255,0.6)] top-[-0.91px] uppercase whitespace-nowrap">My Organizations</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[49.176px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[158.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center mb-[-2px] relative shrink-0" data-name="Button">
      <Container23 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-[-48.36px] text-[17.758px] text-white top-[-0.91px] whitespace-nowrap">Okonkwo Properties Ltd</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] h-[49.176px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[158.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex h-[73px] items-center justify-center mb-[-2px] px-[49px] relative shrink-0" data-name="Button">
      <Container25 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[2px] relative shrink-0">
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[355px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.911px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[22.767px] px-[21.856px] relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[rgba(200,82,18,0.2)] relative rounded-[30557050px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[32.784px] relative shrink-0 text-[#c85212] text-[21.856px] text-center whitespace-nowrap">MD</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-0 text-[17.758px] text-white top-[-0.91px] whitespace-nowrap">Michael D.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.539px] left-0 text-[15.026px] text-[rgba(255,255,255,0.6)] top-[-0.45px] whitespace-nowrap">Agent</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] h-[49.176px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[158.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p1d794650} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex gap-[80px] h-[98.353px] items-center pb-[0.911px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[0.911px] border-solid inset-0 pointer-events-none" />
      <Container28 />
      <div className="flex items-center justify-center relative shrink-0 size-[21.856px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[107px] relative shrink-0 w-[355px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.911px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end pt-[22.767px] px-[21.856px] relative size-full">
        <Button14 />
      </div>
    </div>
  );
}

function J1() {
  return (
    <div className="absolute bg-[#10182c] content-stretch flex flex-col h-[1187px] items-start left-0 top-0 w-[355px]" data-name="j9">
      <Container5 />
      <Navigation />
      <Container22 />
      <Container27 />
    </div>
  );
}

function Ai() {
  return (
    <div className="absolute bg-[#f5f6f8] h-[1593px] left-0 top-0 w-[1728px]" data-name="ai">
      <J />
      <J1 />
    </div>
  );
}

function GrammarlyDesktopIntegration() {
  return <div className="absolute left-0 size-0 top-[698.48px]" data-name="Grammarly-desktop-integration" />;
}

export default function Agents() {
  return (
    <div className="bg-white relative size-full" data-name="Agents">
      <Ai />
      <GrammarlyDesktopIntegration />
    </div>
  );
}