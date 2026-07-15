import svgPaths from "./svg-pekeildcc9";
import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import imgImage from "figma:asset/f7c2f282be7eec8079411bbade462753dff030e5.png";

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

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[143px] left-1/2 overflow-clip top-0 w-[1728px]">
      <Frame3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_2068_802)" id="icon">
          <path d={svgPaths.p455bc00} fill="var(--fill-0, #E8E8E8)" id="Vector" />
          <path d={svgPaths.p306c000} fill="var(--fill-0, #C1C0BF)" id="Vector_2" />
          <path d={svgPaths.p3b83ee00} fill="var(--fill-0, #D85151)" id="Vector_3" />
          <path d={svgPaths.p3c474f70} fill="var(--fill-0, #C92D2D)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_2068_802">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.22] relative shrink-0 text-[#4e5562] tracking-[0.644px] w-full whitespace-pre-wrap" data-name="text">
      <p className="font-['Mulish:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">Help center</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[22px] w-full">Check out Apartey helpful blog articles for answers and tips.</p>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="item">
      <Icon />
      <Text />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[83.62%_0_10.81%_70.32%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9926 3.56368">
        <g id="Group">
          <path d={svgPaths.p21248b00} fill="var(--fill-0, #FC9231)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[14.82%_0.38%_39.64%_38.86%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8866 29.1442">
        <g id="Group">
          <path d={svgPaths.p12d16c70} fill="var(--fill-0, #3D7A81)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.61%_17.22%_8.61%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.9796 52.9797">
        <g id="Group">
          <path d={svgPaths.p32c6e6c0} fill="var(--fill-0, #FC9231)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[38.32%_17.22%_8.61%_2.26%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.5319 33.9641">
        <g id="Group">
          <path d={svgPaths.p151fa4f0} fill="var(--fill-0, #F67804)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[38.32%_17.22%_8.61%_2.26%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[60.27%_17.22%_19.88%_59.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2057 12.6994">
        <g id="Group">
          <path d={svgPaths.p2be7c8f0} fill="var(--fill-0, #F67804)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[60.27%_17.22%_19.88%_59.02%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[8.61%_68.88%_67.63%_11.27%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6994 15.2058">
        <g id="Group">
          <path d={svgPaths.p51b2300} fill="var(--fill-0, #F67804)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[8.61%_68.88%_67.63%_11.27%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[8.61%_17.22%_8.61%_0]" data-name="Group">
      <Group4 />
      <Group5 />
      <Group7 />
      <Group9 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.61%_0]" data-name="Group">
      <Group1 />
      <Group2 />
      <div className="absolute inset-[24.18%_20.9%_59.08%_70.68%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.39154 10.7153">
          <path d={svgPaths.pf7a8e00} fill="var(--fill-0, #F9F6F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.45%_6.84%_58.81%_82.63%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.73878 10.7152">
          <path d={svgPaths.p3409f900} fill="var(--fill-0, #F9F6F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.45%_6.84%_69.72%_91.37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.14641 3.73473">
          <path d={svgPaths.p26552880} fill="var(--fill-0, #DDDAEC)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.18%_32.3%_59.08%_56.09%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.42655 10.7149">
          <path d={svgPaths.p108ec780} fill="var(--fill-0, #F9F6F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.38%_44.16%_58.6%_45.32%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.72956 10.8895">
          <path d={svgPaths.p7a56f00} fill="var(--fill-0, #F9F6F9)" id="Vector" />
        </svg>
      </div>
      <Group3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="icon">
      <Group />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#333d4c]" data-name="links">
      <p className="font-['Mulish:Bold',sans-serif] font-bold opacity-80 relative shrink-0 text-[21px]">support@example.com</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[22px]">(234) 555-0120</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.22] relative shrink-0 tracking-[0.644px] w-full" data-name="text">
      <p className="font-['Mulish:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#4e5562] text-[21px] w-[min-content] whitespace-pre-wrap">Contact support</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full not-italic relative shrink-0 text-[#4e5562] text-[22px] w-[min-content] whitespace-pre-wrap">Contact us and we will be happy to help you!</p>
      <Links />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="item">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[7.77%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.0001 54.0559">
        <g id="Group">
          <path d={svgPaths.p32f93100} fill="var(--fill-0, #ECF2F2)" id="Vector" />
          <path d={svgPaths.p1f739400} fill="var(--fill-0, #D8E4E6)" id="Vector_2" />
          <path d={svgPaths.p3f263000} fill="var(--fill-0, #3D7A81)" id="Vector_3" />
          <path d={svgPaths.p1dcdf000} fill="var(--fill-0, #2D595E)" id="Vector_4" />
          <path d={svgPaths.p348e3d00} fill="var(--fill-0, #2D595E)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="icon">
      <Group11 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.22] relative shrink-0 text-[#4e5562] tracking-[0.644px] w-full whitespace-pre-wrap" data-name="text">
      <p className="font-['Mulish:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">Community (Coming Soon)</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[22px] w-full">Engage in real-time conversations with other users. Our community feature lets you connect instantly, ask questions, share experiences, and stay in the loop all in a safe, responsive environment.</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="item">
      <Icon2 />
      <Text2 />
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="content-stretch flex gap-[72px] items-start relative shrink-0 w-[1296px]" data-name="contact details">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#4e5562] w-full whitespace-pre-wrap" data-name="text">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.02] relative shrink-0 text-[72px] tracking-[-1.512px] w-full">Get in touch!</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] tracking-[0.644px] w-full">Fill out the form and we will contact you within 24 hours.</p>
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="inputs">
      <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start px-[18px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[22px] tracking-[0.644px] whitespace-pre-wrap">Full name *</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#cad0d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start px-[18px] py-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[22px] tracking-[0.644px] whitespace-pre-wrap">Email *</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#cad0d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="bg-[#fafafa] h-[140px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start px-[18px] py-[12px] relative size-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[22px] tracking-[0.644px] whitespace-pre-wrap">Your message</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#cad0d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-center pb-[72px] pt-[48px] px-[96px] relative shrink-0 w-[648px]" data-name="Form">
      <Text3 />
      <Inputs />
      <div className="bg-[#c85212] relative rounded-[8px] shrink-0 w-full" data-name="Dark Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Submit form</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[8px] shrink-0" data-name="contact form">
      <div className="h-[628px] relative shrink-0 w-[648px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Form />
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[96px] items-center left-1/2 pb-[112px] top-[420px]" data-name="Content">
      <ContactDetails />
      <ContactForm />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center justify-center relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="textContent">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.02] min-w-full relative shrink-0 text-[#0d4949] text-[72px] tracking-[-1.512px] w-[min-content]">Contact us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[#1e1e1e] text-[22px] tracking-[0.644px] w-[764px]">{`We're here to help with all your needs and questions about the Apartey services.`}</p>
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

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[150px] w-[924px]">
      <Div />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[#667085] text-[22px] tracking-[0.644px] w-full whitespace-pre-wrap">{`Apartey is a community-powered rent intelligence platform designed to help renters make better, smarter housing decisions. It’s a space where renters share honest reviews, experiences, and insights about the homes they've lived in.`}</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Content3 />
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
      <Content2 />
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

function Content5() {
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

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Content">
      <Content5 />
      <SocialIcons />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[42px] items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Content4 />
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
      <Content1 />
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

export default function ContactPage() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Contact Page">
      <Frame5 />
      <Content />
      <Frame4 />
      <MacBookPro />
    </div>
  );
}