import svgPaths from "./svg-kz3cog0xm2";
import imgApartey1 from "figma:asset/7d425bbf61d32feb50fb9bfbd3b2ace1146e5ed1.png";
import imgAvatar from "figma:asset/2f1190870d753151f58657595136f67c584b5c8c.png";

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
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.22] relative shrink-0 text-[#c85212] text-[21px] tracking-[0.644px]">About</p>
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/phone">
          <path d={svgPaths.p375d9e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#c85212] h-[46px] overflow-clip relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[53px]">
      <LucidePhone />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Glassmorphism />
      <Frame2 />
    </div>
  );
}

function LucideUserRound() {
  return (
    <div className="absolute left-[335.86px] size-[24px] top-[11px]" data-name="lucide/user-round">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/user-round" opacity="0.3">
          <path d={svgPaths.p27acb400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p28c65188} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.8)] tracking-[0.644px]">Login</p>
      <Frame3 />
      <div className="relative shrink-0 size-[46px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <circle cx="23" cy="23" fill="var(--fill-0, #D9D9D9)" id="Ellipse 83" r="23" />
        </svg>
      </div>
      <LucideUserRound />
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[214px] items-center justify-center left-[calc(50%-0.18px)] top-[calc(50%+0.5px)]">
      <div className="h-[82px] relative shrink-0 w-[200px]" data-name="apartey 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.51%] left-[-17.1%] max-w-none top-[-109.62%] w-[130.55%]" src={imgApartey1} />
        </div>
      </div>
      <PageLinks />
      <Frame4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[143px] left-1/2 overflow-clip top-0 w-[1728px]">
      <Frame5 />
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

function IconFacebook() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon / Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon / Facebook">
          <path d={svgPaths.p21912c00} fill="var(--fill-0, #344054)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconInstagram() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon / Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon / Instagram">
          <path d={svgPaths.p29edb600} fill="var(--fill-0, #344054)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconX() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon / X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon / X">
          <path d={svgPaths.pba64e00} fill="var(--fill-0, #344054)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconLinkdin() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon / Linkdin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon / Linkdin">
          <path d={svgPaths.p293a2b80} fill="var(--fill-0, #344054)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Social icons">
      <IconFacebook />
      <IconInstagram />
      <IconX />
      <IconLinkdin />
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

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center justify-center relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="textContent">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[1.02] min-w-full relative shrink-0 text-[#0d4949] text-[72px] tracking-[-1.512px] w-[min-content]">About us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] not-italic opacity-60 relative shrink-0 text-[#1e1e1e] text-[22px] tracking-[0.644px] w-[764px]">Your trusted platform for authentic property reviews and insights</p>
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

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-[150px] w-[924px]">
      <Div />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c85212] border-l-7 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[26px] py-[19px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[rgba(0,0,0,0.4)] tracking-[0.644px] whitespace-pre-wrap">
            <span className="font-['Mulish:Italic',sans-serif] italic leading-[1.22] text-[21px]">{`"We are building the resource we wish existed when we were hunting for our own apartments — honest reviews from real people who’ve actually lived there" `}</span>
            <span className="leading-[1.22] text-[22px]">— Apartey Founding Team</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="textContent">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.256px]">What Makes Us Different</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="div">
      <TextContent1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1506px]">
      <Div1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] items-center justify-center leading-[1.22] left-[calc(50%+0.17px)] text-[rgba(0,0,0,0.4)] top-[calc(50%+0.5px)] tracking-[0.644px] w-[442px] whitespace-pre-wrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">Verified Reviews</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[22px] w-full">{`All reviews are from verified tenants who have actually lived in the properties they're reviewing, ensuring authentic feedback you can trust.`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white flex-[1_0_0] h-[309px] min-h-px min-w-px overflow-clip relative rounded-[12px]">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] items-center justify-center leading-[1.22] left-[calc(50%+0.17px)] text-[rgba(0,0,0,0.4)] top-[calc(50%-12.5px)] tracking-[0.644px] w-[442px] whitespace-pre-wrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">Comprehensive Ratings</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[22px] w-full">Our detailed rating system covers everything from maintenance response times to noise levels, giving you the complete picture.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white flex-[1_0_0] h-[309px] min-h-px min-w-px overflow-clip relative rounded-[12px]">
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] items-center justify-center leading-[1.22] left-[calc(50%+0.17px)] text-[rgba(0,0,0,0.4)] top-[calc(50%-12.5px)] tracking-[0.644px] w-[442px] whitespace-pre-wrap">
      <p className="font-['Mulish:Bold',sans-serif] font-bold relative shrink-0 text-[21px] w-full">Community Focused</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[22px] w-full">{`We're building a community of renters helping renters, creating a more transparent and fair rental marketplace for everyone.`}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white flex-[1_0_0] h-[309px] min-h-px min-w-px overflow-clip relative rounded-[12px]">
      <Frame18 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1535px]">
      <Frame8 />
      <Frame1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0 w-[1531px]">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.256px]">Our Mission</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.22] min-w-full not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.4)] tracking-[0.644px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">To eliminate regret from renting decisions by building a trusted platform that encourages transparency, accountability, and data-driven insights in the housing market through the reviews of past renters.</p>
        <p className="mb-0">{`Apartey was founded with a simple but powerful mission: to bring transparency and trust to the rental market. We believe that everyone deserves to know exactly what they're getting into before signing a lease.`}</p>
        <p>By creating a platform where renters can share their authentic experiences, we help future tenants make informed decisions while also providing property managers with valuable feedback to improve their offerings.</p>
      </div>
      <Frame15 />
      <Frame9 />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[#101828] text-[32px] text-center tracking-[0.256px] w-full whitespace-pre-wrap">Meet our team</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[768px]" data-name="Heading and supporting text">
      <HeadingAndSubheading />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[32px] relative w-full">
        <Content5 />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[40px] shrink-0 size-[80px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
        <div className="absolute bg-[#c7b9da] inset-0 rounded-[40px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgAvatar} />
      </div>
    </div>
  );
}

function NameAndRole() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Name and role">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#101828] text-[18px] w-full">Olivia Rhye</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#c85212] text-[16px] w-full">{`Founder & CEO`}</p>
    </div>
  );
}

function NameAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Name and supporting text">
      <NameAndRole />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social icon">
          <path d={svgPaths.p22672000} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p3fb91680} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social icon">
          <path clipRule="evenodd" d={svgPaths.pb474f00} fill="var(--fill-0, #98A2B3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Social icons">
      <SocialIcon />
      <SocialIcon1 />
      <SocialIcon2 />
    </div>
  );
}

function TextAndSocialLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Text and social links">
      <NameAndSupportingText />
      <SocialIcons1 />
    </div>
  );
}

function TeamMember() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="_Team member">
      <Avatar />
      <TextAndSocialLinks />
    </div>
  );
}

function TeamMemberWrap() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Team member wrap">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <TeamMember />
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[40px] shrink-0 size-[80px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
        <div className="absolute bg-[#c7b9da] inset-0 rounded-[40px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgAvatar} />
      </div>
    </div>
  );
}

function NameAndRole1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Name and role">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#101828] text-[18px] w-full">Olivia Rhye</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#c85212] text-[16px] w-full">{`Founder & CEO`}</p>
    </div>
  );
}

function NameAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Name and supporting text">
      <NameAndRole1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
    </div>
  );
}

function SocialIcon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social icon">
          <path d={svgPaths.p22672000} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p3fb91680} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social icon">
          <path clipRule="evenodd" d={svgPaths.pb474f00} fill="var(--fill-0, #98A2B3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Social icons">
      <SocialIcon3 />
      <SocialIcon4 />
      <SocialIcon5 />
    </div>
  );
}

function TextAndSocialLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Text and social links">
      <NameAndSupportingText1 />
      <SocialIcons2 />
    </div>
  );
}

function TeamMember1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="_Team member">
      <Avatar1 />
      <TextAndSocialLinks1 />
    </div>
  );
}

function TeamMemberWrap1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Team member wrap">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <TeamMember1 />
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative rounded-[40px] shrink-0 size-[80px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
        <div className="absolute bg-[#c7b9da] inset-0 rounded-[40px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[40px] size-full" src={imgAvatar} />
      </div>
    </div>
  );
}

function NameAndRole2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Name and role">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#101828] text-[18px] w-full">Olivia Rhye</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#c85212] text-[16px] w-full">{`Founder & CEO`}</p>
    </div>
  );
}

function NameAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Name and supporting text">
      <NameAndRole2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#667085] text-[16px] w-full">Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
    </div>
  );
}

function SocialIcon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social icon">
          <path d={svgPaths.p22672000} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p3fb91680} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social icon">
          <path clipRule="evenodd" d={svgPaths.pb474f00} fill="var(--fill-0, #98A2B3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Social icons">
      <SocialIcon6 />
      <SocialIcon7 />
      <SocialIcon8 />
    </div>
  );
}

function TextAndSocialLinks2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Text and social links">
      <NameAndSupportingText2 />
      <SocialIcons3 />
    </div>
  );
}

function TeamMember2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="_Team member">
      <Avatar2 />
      <TextAndSocialLinks2 />
    </div>
  );
}

function TeamMemberWrap2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Team member wrap">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <TeamMember2 />
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <TeamMemberWrap />
      <TeamMemberWrap1 />
      <TeamMemberWrap2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] h-[386px] items-start left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] w-[1531px]">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white h-[475px] overflow-clip relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="textContent">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] text-center tracking-[0.256px]">Get in touch</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] h-[124px] items-center justify-center relative shrink-0" data-name="div">
      <TextContent2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[72px] leading-[1.22] not-italic overflow-hidden relative shrink-0 text-[22px] text-[rgba(0,0,0,0.4)] text-center text-ellipsis tracking-[0.644px] w-[587px] whitespace-pre-wrap">{`Have questions, feedback, or want to partner with us? We'd love to hear from you!`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Div2 />
    </div>
  );
}

function ButtonFilledStandard() {
  return (
    <div className="bg-[#c85212] content-stretch flex items-center justify-center px-[38.462px] py-[24.615px] relative rounded-[5.931px] shrink-0 w-[498px]" data-name="buttonFilledStandard">
      <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[1.08] relative shrink-0 text-[32px] text-white tracking-[0.256px]">Contact us</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-[1159.264px]">
      <Frame6 />
      <ButtonFilledStandard />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame21 />
      <Frame7 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-0 top-[373px] w-[1728px]">
      <Frame14 />
      <Frame20 />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="About Page">
      <Frame11 />
      <MacBookPro />
      <Frame10 />
      <Frame19 />
    </div>
  );
}