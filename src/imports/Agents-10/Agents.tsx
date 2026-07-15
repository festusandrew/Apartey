import svgPaths from "./svg-hzfagafw7h";
import imgImageWithFallback from "./c3fbd87a8a516fc11db0e9d6246f65ef746a6373.png";
import imgImageWithFallback1 from "./52e5b8873e1de077d6ec4a745a4bf61c5dd7203d.png";
import imgApartey11 from "./ceea96867297c8ec4ca85c873ab1b3ef0f4753b7.png";

function Heading() {
  return (
    <div className="h-[57.372px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[57.372px] left-0 text-[#10182c] text-[38.248px] top-[-0.91px] tracking-[-0.9562px] whitespace-nowrap">My Portfolio</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-0 text-[#6a7282] text-[19.124px] top-[-0.91px] whitespace-nowrap">Manage your active and expired listings.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[91.523px] relative shrink-0 w-[354.65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.464px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[27.32px] size-[24.588px] top-[15.71px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5881 24.5881">
        <g id="Icon">
          <path d="M5.12244 12.2929H19.4655" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M12.294 5.12141V19.4645" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#10182c] h-[56.006px] relative rounded-[16.392px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] shrink-0 w-[194.215px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[115.1px] text-[19.124px] text-center text-white top-[12.75px] whitespace-nowrap">{` Add Property`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[91.523px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#c85212] h-[2.732px] left-0 top-[44.39px] w-[150.873px]" data-name="Container" />;
}

function Button1() {
  return (
    <div className="absolute h-[47.127px] left-0 top-0 w-[150.873px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-[75.86px] text-[#c85212] text-[20.49px] text-center top-[-0.91px] whitespace-nowrap">All Listings</p>
      <Container4 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[47.127px] left-[161.8px] top-0 w-[185.734px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-[92.86px] text-[#6a7282] text-[20.49px] text-center top-[-0.91px] whitespace-nowrap">Active Listings</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[47.127px] left-[358.46px] top-0 w-[198.128px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-[100.22px] text-[#6a7282] text-[20.49px] text-center top-[-0.91px] whitespace-nowrap">Inactive Listings</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[47.127px] left-[567.52px] top-0 w-[251.317px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-[125.86px] text-[#6a7282] text-[20.49px] text-center top-[-0.91px] whitespace-nowrap">Most Viewed Listings</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[47.127px] left-[829.76px] top-0 w-[268.022px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-[134.35px] text-[#6a7282] text-[20.49px] text-center top-[-0.91px] whitespace-nowrap">Most Enquiries Listings</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[48.038px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.911px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[29.028px] items-start left-[21.86px] overflow-clip top-[21.86px] w-[247.703px]" data-name="Heading 4">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[29.028px] relative shrink-0 text-[#1a1a1a] text-[23.222px] whitespace-nowrap">Modern 2-Bed Flat in Islington</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[17.758px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7581 17.7581">
        <g clipPath="url(#clip0_6004_36105)" id="Icon">
          <path d={svgPaths.p45e6c00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47984" />
          <path d={svgPaths.p2d53f600} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47984" />
        </g>
        <defs>
          <clipPath id="clip0_6004_36105">
            <rect fill="white" height="17.7581" width="17.7581" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[24.588px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.588px] left-0 text-[#6b7280] text-[16.392px] top-[-0.91px] whitespace-nowrap">Islington, London</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[141.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.464px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Icon1 />
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[95.535px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-0 text-[#10182c] text-[19.124px] top-[-0.91px] whitespace-nowrap">£2,500/mo</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[28.686px] items-center justify-between left-[21.86px] top-[56.35px] w-[247.703px]" data-name="Container">
      <Container9 />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[40.98px] relative shrink-0 w-[82.871px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-0 text-[#9ca3af] text-[13.66px] top-[-0.45px] tracking-[0.683px] uppercase w-[49.176px]">Total Views</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[29.511px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] left-0 text-[#1a1a1a] text-[16.392px] top-[-0.91px] whitespace-nowrap">245</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[82.871px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[5.464px] h-[102.451px] items-start justify-center left-0 pl-[16.392px] py-[15.709px] rounded-[16.392px] top-0 w-[115.655px]" data-name="Container">
      <Text2 />
      <Container12 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20.49px] relative shrink-0 w-[82.871px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-0 text-[#9ca3af] text-[13.66px] top-[-0.45px] tracking-[0.683px] uppercase whitespace-nowrap">Enquiries</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[17.758px] relative shrink-0 w-[16.662px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6625 17.7581">
        <g id="Icon">
          <path d={svgPaths.pc539180} id="Vector" stroke="var(--stroke-0, #F97316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.38854" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[58.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] left-0 text-[#f97316] text-[16.392px] top-[calc(50%-12.83px)] whitespace-nowrap">14 Total</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[82.871px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.196px] items-center relative size-full">
        <Icon2 />
        <Text5 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[5.464px] h-[102.451px] items-start justify-center left-[132.05px] pl-[16.392px] py-[13.66px] rounded-[16.392px] top-0 w-[115.655px]" data-name="Container">
      <Text4 />
      <Container14 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[102.451px] left-[21.86px] top-[106.89px] w-[247.703px]" data-name="Container">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[#e5e7eb] h-[1.366px] left-[21.86px] top-[228.47px] w-[247.703px]" data-name="Container" />;
}

function Text6() {
  return (
    <div className="absolute h-[22.539px] left-[65.57px] top-[2.39px] w-[35.474px]" data-name="Text">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-0 text-[#6b7280] text-[15.026px] top-[-0.45px] tracking-[0.7513px] uppercase whitespace-nowrap">Live</p>
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-white left-[4.43px] rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] size-[19.124px] top-[4.1px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="absolute h-[27.32px] left-0 rounded-[30557050px] top-0 w-[54.64px]" data-name="Container">
      <div aria-hidden="true" className="absolute bg-[#1dbf73] inset-0 pointer-events-none rounded-[30557050px]" />
      <Container19 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.732px_5.464px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[101.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text6 />
        <Container18 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.35%_8.34%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0346 20.0344">
            <path d={svgPaths.p2c57a800} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.18%_8.34%_29.16%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0348 10.9281">
            <path d={svgPaths.p2c05d80} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.18%_8.32%_45.82%_66.68%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.28538 7.28538">
            <path d={svgPaths.p13fad900} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="flex-[1_0_0] h-[21.856px] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[21.856px] relative shrink-0 w-[60.104px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[27.32px] items-center justify-between left-[21.86px] top-[248.96px] w-[247.703px]" data-name="Container">
      <Container17 />
      <Container20 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[298.131px] left-0 top-[204.9px] w-[291.415px]" data-name="Container">
      <Heading1 />
      <Container8 />
      <Container10 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[204.901px] left-0 top-0 w-[291.415px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#1dbf73] content-stretch flex h-[28.231px] items-start left-[21.86px] px-[13.66px] py-[5.464px] rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] top-[27.32px] w-[80.993px]" data-name="Text">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] relative shrink-0 text-[13.66px] text-white tracking-[0.683px] uppercase whitespace-nowrap">ACTIVE</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[204.901px] left-0 overflow-clip rounded-tl-[21.856px] rounded-tr-[21.856px] top-0 w-[291.415px]" data-name="Container">
      <ImageWithFallback />
      <Text7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[503.032px] overflow-clip relative rounded-[21.856px] shadow-[0px_5.464px_16.392px_0px_rgba(0,0,0,0.08)] shrink-0 w-[291.415px]" data-name="Container">
      <Container7 />
      <Container21 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[29.028px] items-start left-[21.86px] overflow-clip top-[21.86px] w-[247.703px]" data-name="Heading 4">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[29.028px] relative shrink-0 text-[#1a1a1a] text-[23.222px] whitespace-nowrap">Spacious Studio in Camden</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[17.758px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7581 17.7581">
        <g clipPath="url(#clip0_6004_36044)" id="Icon">
          <path d={svgPaths.p6c1d800} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47984" />
          <path d={svgPaths.p2eed5300} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47984" />
        </g>
        <defs>
          <clipPath id="clip0_6004_36044">
            <rect fill="white" height="17.7581" width="17.7581" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[24.588px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.588px] left-0 text-[#6b7280] text-[16.392px] top-[-0.91px] whitespace-nowrap">Camden, London</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[141.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.464px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Icon5 />
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[95.535px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-0 text-[#10182c] text-[19.124px] top-[-0.91px] whitespace-nowrap">£1,800/mo</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[28.686px] items-center justify-between left-[21.86px] top-[56.35px] w-[247.703px]" data-name="Container">
      <Container25 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[40.98px] relative shrink-0 w-[82.871px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-0 text-[#9ca3af] text-[13.66px] top-[-0.45px] tracking-[0.683px] uppercase w-[49.176px]">Total Views</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[29.511px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] left-0 text-[#1a1a1a] text-[16.392px] top-[-0.91px] whitespace-nowrap">432</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[82.871px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[5.464px] h-[102.451px] items-start justify-center left-0 pl-[16.392px] py-[15.709px] rounded-[16.392px] top-0 w-[115.655px]" data-name="Container">
      <Text10 />
      <Container28 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20.49px] relative shrink-0 w-[82.871px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-0 text-[#9ca3af] text-[13.66px] top-[-0.45px] tracking-[0.683px] uppercase whitespace-nowrap">Enquiries</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[17.758px] relative shrink-0 w-[16.662px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6625 17.7581">
        <g id="Icon">
          <path d={svgPaths.p22db0100} id="Vector" stroke="var(--stroke-0, #F97316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.38854" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[58.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] left-0 text-[#f97316] text-[16.392px] top-[calc(50%-12.83px)] whitespace-nowrap">32 Total</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[82.871px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.196px] items-center relative size-full">
        <Icon6 />
        <Text13 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[5.464px] h-[102.451px] items-start justify-center left-[132.05px] pl-[16.392px] py-[13.66px] rounded-[16.392px] top-0 w-[115.655px]" data-name="Container">
      <Text12 />
      <Container30 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[102.451px] left-[21.86px] top-[106.89px] w-[247.703px]" data-name="Container">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-[#e5e7eb] h-[1.366px] left-[21.86px] top-[228.47px] w-[247.703px]" data-name="Container" />;
}

function Text14() {
  return (
    <div className="absolute h-[22.539px] left-[65.57px] top-[2.39px] w-[63.591px]" data-name="Text">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-0 text-[#6b7280] text-[15.026px] top-[-0.45px] tracking-[0.7513px] uppercase whitespace-nowrap">Hidden</p>
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-white right-[5.5px] rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] size-[19.124px] top-[4.1px]" data-name="Container" />;
}

function Container34() {
  return (
    <div className="absolute h-[27.32px] left-0 rounded-[30557050px] top-0 w-[54.64px]" data-name="Container">
      <div aria-hidden="true" className="absolute bg-[#e5e7eb] inset-0 pointer-events-none rounded-[30557050px]" />
      <Container35 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.732px_5.464px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[129.159px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text14 />
        <Container34 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.34%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0346 20.0344">
            <path d={svgPaths.p2c57a800} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.18%_8.34%_29.16%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0348 10.9281">
            <path d={svgPaths.p2c05d80} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.18%_8.33%_45.82%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.28538 7.28538">
            <path d={svgPaths.p13fad900} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="flex-[1_0_0] h-[21.856px] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[21.856px] relative shrink-0 w-[60.104px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[27.32px] items-center justify-between left-[21.86px] top-[248.96px] w-[247.703px]" data-name="Container">
      <Container33 />
      <Container36 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[298.131px] left-0 top-[204.9px] w-[291.415px]" data-name="Container">
      <Heading2 />
      <Container24 />
      <Container26 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[204.901px] left-0 top-0 w-[291.415px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#6a7282] content-stretch flex h-[28.231px] items-start left-[21.86px] px-[13.66px] py-[5.464px] rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] top-[27.32px] w-[90.441px]" data-name="Text">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] relative shrink-0 text-[13.66px] text-white tracking-[0.683px] uppercase whitespace-nowrap">EXPIRED</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[204.901px] left-0 overflow-clip rounded-tl-[21.856px] rounded-tr-[21.856px] top-0 w-[291.415px]" data-name="Container">
      <ImageWithFallback1 />
      <Text15 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[503.032px] overflow-clip relative rounded-[21.856px] shadow-[0px_5.464px_16.392px_0px_rgba(0,0,0,0.08)] shrink-0 w-[291.415px]" data-name="Container">
      <Container23 />
      <Container37 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[29.028px] items-start left-[21.86px] overflow-clip top-[21.86px] w-[247.703px]" data-name="Heading 4">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[29.028px] relative shrink-0 text-[#1a1a1a] text-[23.222px] whitespace-nowrap">Modern 2-Bed Flat in Islington</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[17.758px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7581 17.7581">
        <g clipPath="url(#clip0_6004_36105)" id="Icon">
          <path d={svgPaths.p45e6c00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47984" />
          <path d={svgPaths.p2d53f600} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47984" />
        </g>
        <defs>
          <clipPath id="clip0_6004_36105">
            <rect fill="white" height="17.7581" width="17.7581" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[1_0_0] h-[24.588px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.588px] left-0 text-[#6b7280] text-[16.392px] top-[-0.91px] whitespace-nowrap">Islington, London</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[141.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.464px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Icon9 />
        <Text16 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[95.535px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-0 text-[#10182c] text-[19.124px] top-[-0.91px] whitespace-nowrap">£2,500/mo</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[28.686px] items-center justify-between left-[21.86px] top-[56.35px] w-[247.703px]" data-name="Container">
      <Container41 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[40.98px] relative shrink-0 w-[82.871px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-0 text-[#9ca3af] text-[13.66px] top-[-0.45px] tracking-[0.683px] uppercase w-[49.176px]">Total Views</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[29.511px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] left-0 text-[#1a1a1a] text-[16.392px] top-[-0.91px] whitespace-nowrap">245</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[82.871px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text19 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[5.464px] h-[102.451px] items-start justify-center left-0 pl-[16.392px] py-[15.709px] rounded-[16.392px] top-0 w-[115.655px]" data-name="Container">
      <Text18 />
      <Container44 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20.49px] relative shrink-0 w-[82.871px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-0 text-[#9ca3af] text-[13.66px] top-[-0.45px] tracking-[0.683px] uppercase whitespace-nowrap">Enquiries</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[17.758px] relative shrink-0 w-[16.662px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6625 17.7581">
        <g id="Icon">
          <path d={svgPaths.pc539180} id="Vector" stroke="var(--stroke-0, #F97316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.38854" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[58.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] left-0 text-[#f97316] text-[16.392px] top-[calc(50%-12.83px)] whitespace-nowrap">14 Total</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[82.871px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.196px] items-center relative size-full">
        <Icon10 />
        <Text21 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[5.464px] h-[102.451px] items-start justify-center left-[132.05px] pl-[16.392px] py-[13.66px] rounded-[16.392px] top-0 w-[115.655px]" data-name="Container">
      <Text20 />
      <Container46 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[102.451px] left-[21.86px] top-[106.89px] w-[247.703px]" data-name="Container">
      <Container43 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return <div className="absolute bg-[#e5e7eb] h-[1.366px] left-[21.86px] top-[228.47px] w-[247.703px]" data-name="Container" />;
}

function Text22() {
  return (
    <div className="absolute h-[22.539px] left-[65.57px] top-[2.39px] w-[35.474px]" data-name="Text">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-0 text-[#6b7280] text-[15.026px] top-[-0.45px] tracking-[0.7513px] uppercase whitespace-nowrap">Live</p>
    </div>
  );
}

function Container51() {
  return <div className="absolute bg-white left-[4.43px] rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] size-[19.124px] top-[4.1px]" data-name="Container" />;
}

function Container50() {
  return (
    <div className="absolute h-[27.32px] left-0 rounded-[30557050px] top-0 w-[54.64px]" data-name="Container">
      <div aria-hidden="true" className="absolute bg-[#1dbf73] inset-0 pointer-events-none rounded-[30557050px]" />
      <Container51 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.732px_5.464px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[101.042px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text22 />
        <Container50 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.35%_8.34%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0346 20.0344">
            <path d={svgPaths.p2c57a800} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.18%_8.34%_29.16%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0348 10.9281">
            <path d={svgPaths.p2c05d80} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.18%_8.32%_45.82%_66.68%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.28538 7.28538">
            <path d={svgPaths.p13fad900} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="flex-[1_0_0] h-[21.856px] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[21.856px] relative shrink-0 w-[60.104px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex h-[27.32px] items-center justify-between left-[21.86px] top-[248.96px] w-[247.703px]" data-name="Container">
      <Container49 />
      <Container52 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[298.131px] left-0 top-[204.9px] w-[291.415px]" data-name="Container">
      <Heading3 />
      <Container40 />
      <Container42 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[204.901px] left-0 top-0 w-[291.415px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[#1dbf73] content-stretch flex h-[28.231px] items-start left-[21.86px] px-[13.66px] py-[5.464px] rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] top-[27.32px] w-[80.993px]" data-name="Text">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] relative shrink-0 text-[13.66px] text-white tracking-[0.683px] uppercase whitespace-nowrap">ACTIVE</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[204.901px] left-0 overflow-clip rounded-tl-[21.856px] rounded-tr-[21.856px] top-0 w-[291.415px]" data-name="Container">
      <ImageWithFallback2 />
      <Text23 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white h-[503.032px] overflow-clip relative rounded-[21.856px] shadow-[0px_5.464px_16.392px_0px_rgba(0,0,0,0.08)] shrink-0 w-[291.415px]" data-name="Container">
      <Container39 />
      <Container53 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[29.028px] items-start left-[21.86px] overflow-clip top-[21.86px] w-[247.703px]" data-name="Heading 4">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[29.028px] relative shrink-0 text-[#1a1a1a] text-[23.222px] whitespace-nowrap">Spacious Studio in Camden</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[17.758px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7581 17.7581">
        <g clipPath="url(#clip0_6004_36044)" id="Icon">
          <path d={svgPaths.p6c1d800} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47984" />
          <path d={svgPaths.p2eed5300} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47984" />
        </g>
        <defs>
          <clipPath id="clip0_6004_36044">
            <rect fill="white" height="17.7581" width="17.7581" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] h-[24.588px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.588px] left-0 text-[#6b7280] text-[16.392px] top-[-0.91px] whitespace-nowrap">Camden, London</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[141.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.464px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Icon13 />
        <Text24 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[95.535px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-0 text-[#10182c] text-[19.124px] top-[-0.91px] whitespace-nowrap">£1,800/mo</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex h-[28.686px] items-center justify-between left-[21.86px] top-[56.35px] w-[247.703px]" data-name="Container">
      <Container57 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[40.98px] relative shrink-0 w-[82.871px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-0 text-[#9ca3af] text-[13.66px] top-[-0.45px] tracking-[0.683px] uppercase w-[49.176px]">Total Views</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[29.511px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] left-0 text-[#1a1a1a] text-[16.392px] top-[-0.91px] whitespace-nowrap">432</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[82.871px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text27 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[5.464px] h-[102.451px] items-start justify-center left-0 pl-[16.392px] py-[15.709px] rounded-[16.392px] top-0 w-[115.655px]" data-name="Container">
      <Text26 />
      <Container60 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[20.49px] relative shrink-0 w-[82.871px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-0 text-[#9ca3af] text-[13.66px] top-[-0.45px] tracking-[0.683px] uppercase whitespace-nowrap">Enquiries</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[17.758px] relative shrink-0 w-[16.662px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6625 17.7581">
        <g id="Icon">
          <path d={svgPaths.p22db0100} id="Vector" stroke="var(--stroke-0, #F97316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.38854" />
        </g>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[58.013px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] left-0 text-[#f97316] text-[16.392px] top-[calc(50%-12.83px)] whitespace-nowrap">32 Total</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[82.871px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.196px] items-center relative size-full">
        <Icon14 />
        <Text29 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[5.464px] h-[102.451px] items-start justify-center left-[132.05px] pl-[16.392px] py-[13.66px] rounded-[16.392px] top-0 w-[115.655px]" data-name="Container">
      <Text28 />
      <Container62 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[102.451px] left-[21.86px] top-[106.89px] w-[247.703px]" data-name="Container">
      <Container59 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return <div className="absolute bg-[#e5e7eb] h-[1.366px] left-[21.86px] top-[228.47px] w-[247.703px]" data-name="Container" />;
}

function Text30() {
  return (
    <div className="absolute h-[22.539px] left-[65.57px] top-[2.39px] w-[63.591px]" data-name="Text">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-0 text-[#6b7280] text-[15.026px] top-[-0.45px] tracking-[0.7513px] uppercase whitespace-nowrap">Hidden</p>
    </div>
  );
}

function Container67() {
  return <div className="absolute bg-white right-[5.5px] rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] size-[19.124px] top-[4.1px]" data-name="Container" />;
}

function Container66() {
  return (
    <div className="absolute h-[27.32px] left-0 rounded-[30557050px] top-0 w-[54.64px]" data-name="Container">
      <div aria-hidden="true" className="absolute bg-[#e5e7eb] inset-0 pointer-events-none rounded-[30557050px]" />
      <Container67 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.732px_5.464px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[129.159px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text30 />
        <Container66 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.34%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0346 20.0344">
            <path d={svgPaths.p2c57a800} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.18%_8.34%_29.16%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0348 10.9281">
            <path d={svgPaths.p2c05d80} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.18%_8.33%_45.82%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.28538 7.28538">
            <path d={svgPaths.p13fad900} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="flex-[1_0_0] h-[21.856px] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[21.856px] relative shrink-0 w-[60.104px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex h-[27.32px] items-center justify-between left-[21.86px] top-[248.96px] w-[247.703px]" data-name="Container">
      <Container65 />
      <Container68 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[298.131px] left-0 top-[204.9px] w-[291.415px]" data-name="Container">
      <Heading4 />
      <Container56 />
      <Container58 />
      <Container63 />
      <Container64 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[204.901px] left-0 top-0 w-[291.415px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute bg-[#6a7282] content-stretch flex h-[28.231px] items-start left-[21.86px] px-[13.66px] py-[5.464px] rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] top-[27.32px] w-[90.441px]" data-name="Text">
      <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] relative shrink-0 text-[13.66px] text-white tracking-[0.683px] uppercase whitespace-nowrap">EXPIRED</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[204.901px] left-0 overflow-clip rounded-tl-[21.856px] rounded-tr-[21.856px] top-0 w-[291.415px]" data-name="Container">
      <ImageWithFallback3 />
      <Text31 />
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-white h-[503.032px] overflow-clip relative rounded-[21.856px] shadow-[0px_5.464px_16.392px_0px_rgba(0,0,0,0.08)] shrink-0 w-[291.415px]" data-name="Container">
      <Container55 />
      <Container69 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[33px] items-center left-0 top-0">
      <Container6 />
      <Container22 />
      <Container38 />
      <Container54 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[503.032px] relative shrink-0 w-full" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-[258px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] left-[-0.03px] text-[#10182c] text-[18.314px] top-[-1px] w-[258px]">Modern 2-Bed Flat in Islington</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[14.244px] top-[2.8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2445 14.2445">
        <g id="Icon">
          <path d={svgPaths.p14aaf900} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18704" />
          <path d={svgPaths.p1cce1a80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18704" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.841px] relative shrink-0 w-[122.35px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon17 />
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[19.841px] left-[18.32px] text-[#6a7282] text-[13.227px] top-[-0.68px] whitespace-nowrap">{` Islington, London`}</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[258px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading5 />
        <Container75 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex h-[42px] items-start justify-between left-[8.11px] pr-[-34.763px] top-0 w-[256px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Text32() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[70.459px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.57px] text-[#10182c] text-[16.279px] text-center top-0 whitespace-nowrap">245</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[70.459px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[35.69px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Views</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[12.21px] pr-[0.678px] top-[12.21px] w-[71.138px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.678px] border-solid inset-0 pointer-events-none" />
      <Text32 />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[70.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.58px] text-[#10182c] text-[16.279px] text-center top-0 whitespace-nowrap">112</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[70.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[36.43px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Clicks</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[91.49px] pr-[0.678px] top-[12.21px] w-[71.148px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.678px] border-solid inset-0 pointer-events-none" />
      <Text34 />
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[71.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.8px] text-[#c85212] text-[16.279px] text-center top-0 whitespace-nowrap">14</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[71.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[35.78px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Leads</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[170.78px] top-[12.21px] w-[71.138px]" data-name="Container">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#f3f4f6] border-[0.678px] border-solid h-[65.457px] left-[8.14px] rounded-[14.244px] top-[74.8px] w-[255.489px]" data-name="Container">
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[18.314px] relative shrink-0 w-[106.145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[18.314px] left-0 text-[#6a7282] text-[12.21px] top-[-0.68px] tracking-[0.6105px] uppercase whitespace-nowrap">Listing Status</p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[18.314px] left-0 top-[1.02px] w-[36.3px]" data-name="Text">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[18.314px] left-0 text-[#00a63e] text-[12.21px] top-[-0.68px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Text40() {
  return <div className="bg-white rounded-[22760230px] shrink-0 size-[14.244px]" data-name="Text" />;
}

function Container83() {
  return (
    <div className="absolute bg-[#10b981] content-stretch flex h-[20.349px] items-center left-[44.44px] pl-[16.279px] rounded-[22760230px] top-0 w-[36.629px]" data-name="Container">
      <Text40 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[20.349px] relative shrink-0 w-[81.068px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text39 />
        <Container83 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[45.447px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.678px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.678px] relative size-full">
          <Text38 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16.279px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p3b6d2270} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-white content-stretch flex h-[33.915px] items-center justify-center left-0 pl-[31.721px] pr-[31.732px] py-[0.678px] rounded-[14.244px] top-0 w-[79.733px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
      <Icon18 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16.279px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p250a780} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
          <path d={svgPaths.p1cf9b500} id="Vector_2" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex h-[33.915px] items-center justify-center left-[87.87px] pl-[31.721px] pr-[31.732px] py-[0.678px] rounded-[14.244px] top-0 w-[79.733px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ffedd4] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[31.73px] size-[16.279px] top-[8.82px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p1902e480} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Text41() {
  return <div className="absolute bg-[#fb2c36] border-[0.678px] border-solid border-white left-[63.46px] rounded-[22760230px] size-[8.14px] top-[4.07px]" data-name="Text" />;
}

function Button16() {
  return (
    <div className="absolute bg-[rgba(200,82,18,0.1)] h-[33.915px] left-[175.75px] rounded-[14.244px] top-0 w-[79.744px]" data-name="Button">
      <Icon20 />
      <Text41 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[33.915px] relative shrink-0 w-full" data-name="Container">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Container80() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-start left-[calc(50%-0.15px)] top-[151.54px] w-[255.489px]" data-name="Container">
      <Container81 />
      <Container84 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[241px] left-[13px] top-[208px] w-[272px]" data-name="Container">
      <Container73 />
      <Container76 />
      <Container80 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[187px] left-0 top-0 w-[272px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Text43() {
  return <div className="absolute bg-white left-[12.21px] opacity-79 rounded-[22760230px] size-[6.105px] top-[9.41px]" data-name="Text" />;
}

function Text42() {
  return (
    <div className="absolute bg-[#10b981] h-[24.928px] left-[12.21px] rounded-[22760230px] shadow-[0px_1.017px_3.052px_0px_rgba(0,0,0,0.1),0px_1.017px_2.035px_0px_rgba(0,0,0,0.1)] top-[12.21px] w-[69.908px]" data-name="Text">
      <Text43 />
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[16.788px] left-[24.42px] text-[11.192px] text-white top-[3.73px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[182px] left-[13px] overflow-clip rounded-[16.279px] top-[13px] w-[272px]" data-name="Container">
      <ImageWithFallback4 />
      <Text42 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white h-[461px] relative rounded-[24.419px] shrink-0 w-[298px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container72 />
        <Container85 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[24.419px]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-[258px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] left-[-0.03px] text-[#10182c] text-[18.314px] top-[-1px] w-[258px]">Charming Studio Apartment in Shoreditch</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[14.244px] top-[2.8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2445 14.2445">
        <g id="Icon">
          <path d={svgPaths.p14aaf900} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18704" />
          <path d={svgPaths.p1cce1a80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18704" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon21 />
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[19.841px] left-[18.73px] text-[#6a7282] text-[13.227px] top-[-1.08px] w-[123px]">Shoreditch, London</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[258px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading6 />
        <Container90 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex h-[42px] items-start justify-between left-[8.11px] pr-[-34.763px] top-0 w-[256px]" data-name="Container">
      <Container89 />
    </div>
  );
}

function Text44() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[70.459px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.57px] text-[#10182c] text-[16.279px] text-center top-0 whitespace-nowrap">320</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[70.459px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[35.69px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Views</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[12.21px] pr-[0.678px] top-[12.21px] w-[71.138px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.678px] border-solid inset-0 pointer-events-none" />
      <Text44 />
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[70.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.58px] text-[#10182c] text-[16.279px] text-center top-0 whitespace-nowrap">145</p>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[70.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[36.43px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Clicks</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[91.49px] pr-[0.678px] top-[12.21px] w-[71.148px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.678px] border-solid inset-0 pointer-events-none" />
      <Text46 />
      <Text47 />
    </div>
  );
}

function Text48() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[71.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.8px] text-[#c85212] text-[16.279px] text-center top-0 whitespace-nowrap">20</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[71.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[35.78px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Leads</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[170.78px] top-[12.21px] w-[71.138px]" data-name="Container">
      <Text48 />
      <Text49 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#f3f4f6] border-[0.678px] border-solid h-[65.457px] left-[8.14px] rounded-[14.244px] top-[74.8px] w-[255.489px]" data-name="Container">
      <Container92 />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[18.314px] relative shrink-0 w-[106.145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[18.314px] left-0 text-[#6a7282] text-[12.21px] top-[-0.68px] tracking-[0.6105px] uppercase whitespace-nowrap">Listing Status</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute h-[18.314px] left-0 top-[1.02px] w-[36.3px]" data-name="Text">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[18.314px] left-[-12px] text-[#6a7282] text-[12.21px] top-[-0.68px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Text52() {
  return <div className="bg-white rounded-[22760230px] shrink-0 size-[14.244px]" data-name="Text" />;
}

function Container98() {
  return (
    <div className="absolute bg-[#d1d5dc] content-stretch flex h-[20.349px] items-center left-[44.44px] pl-[4px] rounded-[22760230px] top-0 w-[36.629px]" data-name="Container">
      <Text52 />
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[20.349px] relative shrink-0 w-[81.068px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text51 />
        <Container98 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[45.447px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.678px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.678px] relative size-full">
          <Text50 />
          <Container97 />
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16.279px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p3b6d2270} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-white content-stretch flex h-[33.915px] items-center justify-center left-0 pl-[31.721px] pr-[31.732px] py-[0.678px] rounded-[14.244px] top-0 w-[79.733px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16.279px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p250a780} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
          <path d={svgPaths.p1cf9b500} id="Vector_2" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex h-[33.915px] items-center justify-center left-[87.87px] pl-[31.721px] pr-[31.732px] py-[0.678px] rounded-[14.244px] top-0 w-[79.733px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ffedd4] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
      <Icon23 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[31.73px] size-[16.279px] top-[8.82px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p1902e480} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Text53() {
  return <div className="absolute bg-[#fb2c36] border-[0.678px] border-solid border-white left-[63.46px] rounded-[22760230px] size-[8.14px] top-[4.07px]" data-name="Text" />;
}

function Button19() {
  return (
    <div className="absolute bg-[rgba(200,82,18,0.1)] h-[33.915px] left-[175.75px] rounded-[14.244px] top-0 w-[79.744px]" data-name="Button">
      <Icon24 />
      <Text53 />
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[33.915px] relative shrink-0 w-full" data-name="Container">
      <Button17 />
      <Button18 />
      <Button19 />
    </div>
  );
}

function Container95() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-start left-[calc(50%-0.15px)] top-[151.54px] w-[255.489px]" data-name="Container">
      <Container96 />
      <Container99 />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[241px] left-[13px] top-[208px] w-[272px]" data-name="Container">
      <Container88 />
      <Container91 />
      <Container95 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute h-[187px] left-0 top-0 w-[272px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Text55() {
  return <div className="absolute bg-white left-[12.21px] opacity-79 rounded-[22760230px] size-[6.105px] top-[9.41px]" data-name="Text" />;
}

function Text54() {
  return (
    <div className="absolute bg-[#6a7282] h-[25px] left-[11.84px] rounded-[22760230px] top-[12px] w-[75px]" data-name="Text">
      <Text55 />
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[16.788px] left-[24.42px] text-[11.192px] text-white top-[3.73px] whitespace-nowrap">Inactive</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[182px] left-[13px] overflow-clip rounded-[16.279px] top-[13px] w-[272px]" data-name="Container">
      <ImageWithFallback5 />
      <Text54 />
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-white h-[461px] relative rounded-[24.419px] shrink-0 w-[298px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container87 />
        <Container100 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[24.419px]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-[258px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] left-[-0.03px] text-[#10182c] text-[18.314px] top-[-1px] w-[258px]">Modern 2-Bed Flat in Islington</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-0 size-[14.244px] top-[2.8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2445 14.2445">
        <g id="Icon">
          <path d={svgPaths.p14aaf900} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18704" />
          <path d={svgPaths.p1cce1a80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18704" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.841px] relative shrink-0 w-[122.35px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon25 />
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[19.841px] left-[18.32px] text-[#6a7282] text-[13.227px] top-[-0.68px] whitespace-nowrap">{` Islington, London`}</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[258px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading7 />
        <Container105 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex h-[42px] items-start justify-between left-[8.11px] pr-[-34.763px] top-0 w-[256px]" data-name="Container">
      <Container104 />
    </div>
  );
}

function Text56() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[70.459px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.57px] text-[#10182c] text-[16.279px] text-center top-0 whitespace-nowrap">245</p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[70.459px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[35.69px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Views</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[12.21px] pr-[0.678px] top-[12.21px] w-[71.138px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.678px] border-solid inset-0 pointer-events-none" />
      <Text56 />
      <Text57 />
    </div>
  );
}

function Text58() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[70.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.58px] text-[#10182c] text-[16.279px] text-center top-0 whitespace-nowrap">112</p>
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[70.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[36.43px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Clicks</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[91.49px] pr-[0.678px] top-[12.21px] w-[71.148px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.678px] border-solid inset-0 pointer-events-none" />
      <Text58 />
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[71.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.8px] text-[#c85212] text-[16.279px] text-center top-0 whitespace-nowrap">14</p>
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[71.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[35.78px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Leads</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[170.78px] top-[12.21px] w-[71.138px]" data-name="Container">
      <Text60 />
      <Text61 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#f3f4f6] border-[0.678px] border-solid h-[65.457px] left-[8.14px] rounded-[14.244px] top-[74.8px] w-[255.489px]" data-name="Container">
      <Container107 />
      <Container108 />
      <Container109 />
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[18.314px] relative shrink-0 w-[106.145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[18.314px] left-0 text-[#6a7282] text-[12.21px] top-[-0.68px] tracking-[0.6105px] uppercase whitespace-nowrap">Listing Status</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute h-[18.314px] left-0 top-[1.02px] w-[36.3px]" data-name="Text">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[18.314px] left-0 text-[#00a63e] text-[12.21px] top-[-0.68px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Text64() {
  return <div className="bg-white rounded-[22760230px] shrink-0 size-[14.244px]" data-name="Text" />;
}

function Container113() {
  return (
    <div className="absolute bg-[#10b981] content-stretch flex h-[20.349px] items-center left-[44.44px] pl-[16.279px] rounded-[22760230px] top-0 w-[36.629px]" data-name="Container">
      <Text64 />
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[20.349px] relative shrink-0 w-[81.068px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text63 />
        <Container113 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[45.447px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.678px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.678px] relative size-full">
          <Text62 />
          <Container112 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16.279px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p3b6d2270} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-white content-stretch flex h-[33.915px] items-center justify-center left-0 pl-[31.721px] pr-[31.732px] py-[0.678px] rounded-[14.244px] top-0 w-[79.733px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16.279px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p250a780} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
          <path d={svgPaths.p1cf9b500} id="Vector_2" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex h-[33.915px] items-center justify-center left-[87.87px] pl-[31.721px] pr-[31.732px] py-[0.678px] rounded-[14.244px] top-0 w-[79.733px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ffedd4] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[31.73px] size-[16.279px] top-[8.82px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p1902e480} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Text65() {
  return <div className="absolute bg-[#fb2c36] border-[0.678px] border-solid border-white left-[63.46px] rounded-[22760230px] size-[8.14px] top-[4.07px]" data-name="Text" />;
}

function Button22() {
  return (
    <div className="absolute bg-[rgba(200,82,18,0.1)] h-[33.915px] left-[175.75px] rounded-[14.244px] top-0 w-[79.744px]" data-name="Button">
      <Icon28 />
      <Text65 />
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[33.915px] relative shrink-0 w-full" data-name="Container">
      <Button20 />
      <Button21 />
      <Button22 />
    </div>
  );
}

function Container110() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-start left-[calc(50%-0.15px)] top-[151.54px] w-[255.489px]" data-name="Container">
      <Container111 />
      <Container114 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[241px] left-[13px] top-[208px] w-[272px]" data-name="Container">
      <Container103 />
      <Container106 />
      <Container110 />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="absolute h-[187px] left-0 top-0 w-[272px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Text67() {
  return <div className="absolute bg-white left-[12.21px] opacity-79 rounded-[22760230px] size-[6.105px] top-[9.41px]" data-name="Text" />;
}

function Text66() {
  return (
    <div className="absolute bg-[#10b981] h-[24.928px] left-[12.21px] rounded-[22760230px] shadow-[0px_1.017px_3.052px_0px_rgba(0,0,0,0.1),0px_1.017px_2.035px_0px_rgba(0,0,0,0.1)] top-[12.21px] w-[69.908px]" data-name="Text">
      <Text67 />
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[16.788px] left-[24.42px] text-[11.192px] text-white top-[3.73px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[182px] left-[13px] overflow-clip rounded-[16.279px] top-[13px] w-[272px]" data-name="Container">
      <ImageWithFallback6 />
      <Text66 />
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-white h-[461px] relative rounded-[24.419px] shrink-0 w-[298px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container102 />
        <Container115 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[24.419px]" />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-[258px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[22px] left-[-0.03px] text-[#10182c] text-[18.314px] top-[-1px] w-[258px]">Charming Studio Apartment in Shoreditch</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-0 size-[14.244px] top-[2.8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2445 14.2445">
        <g id="Icon">
          <path d={svgPaths.p14aaf900} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18704" />
          <path d={svgPaths.p1cce1a80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18704" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon29 />
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[19.841px] left-[18.73px] text-[#6a7282] text-[13.227px] top-[-1.08px] w-[123px]">Shoreditch, London</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[258px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0 w-[256px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading8 />
        <Container120 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute content-stretch flex h-[42px] items-start justify-between left-[8.11px] pr-[-34.763px] top-0 w-[256px]" data-name="Container">
      <Container119 />
    </div>
  );
}

function Text68() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[70.459px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.57px] text-[#10182c] text-[16.279px] text-center top-0 whitespace-nowrap">320</p>
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[70.459px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[35.69px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Views</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[12.21px] pr-[0.678px] top-[12.21px] w-[71.138px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.678px] border-solid inset-0 pointer-events-none" />
      <Text68 />
      <Text69 />
    </div>
  );
}

function Text70() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[70.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.58px] text-[#10182c] text-[16.279px] text-center top-0 whitespace-nowrap">145</p>
      </div>
    </div>
  );
}

function Text71() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[70.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[36.43px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Clicks</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[91.49px] pr-[0.678px] top-[12.21px] w-[71.148px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r-[0.678px] border-solid inset-0 pointer-events-none" />
      <Text70 />
      <Text71 />
    </div>
  );
}

function Text72() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[71.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.419px] left-[35.8px] text-[#c85212] text-[16.279px] text-center top-0 whitespace-nowrap">20</p>
      </div>
    </div>
  );
}

function Text73() {
  return (
    <div className="h-[15.262px] relative shrink-0 w-[71.138px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[15.262px] left-[35.78px] text-[#99a1af] text-[10.175px] text-center top-[-0.34px] uppercase whitespace-nowrap">Leads</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.681px] items-start left-[170.78px] top-[12.21px] w-[71.138px]" data-name="Container">
      <Text72 />
      <Text73 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#f3f4f6] border-[0.678px] border-solid h-[65.457px] left-[8.14px] rounded-[14.244px] top-[74.8px] w-[255.489px]" data-name="Container">
      <Container122 />
      <Container123 />
      <Container124 />
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[18.314px] relative shrink-0 w-[106.145px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[18.314px] left-0 text-[#6a7282] text-[12.21px] top-[-0.68px] tracking-[0.6105px] uppercase whitespace-nowrap">Listing Status</p>
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute h-[18.314px] left-0 top-[1.02px] w-[36.3px]" data-name="Text">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[18.314px] left-[-12px] text-[#6a7282] text-[12.21px] top-[-0.68px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Text76() {
  return <div className="bg-white rounded-[22760230px] shrink-0 size-[14.244px]" data-name="Text" />;
}

function Container128() {
  return (
    <div className="absolute bg-[#d1d5dc] content-stretch flex h-[20.349px] items-center left-[44.44px] pl-[4px] rounded-[22760230px] top-0 w-[36.629px]" data-name="Container">
      <Text76 />
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[20.349px] relative shrink-0 w-[81.068px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text75 />
        <Container128 />
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[45.447px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.678px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.678px] relative size-full">
          <Text74 />
          <Container127 />
        </div>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16.279px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p3b6d2270} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute bg-white content-stretch flex h-[33.915px] items-center justify-center left-0 pl-[31.721px] pr-[31.732px] py-[0.678px] rounded-[14.244px] top-0 w-[79.733px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
      <Icon30 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16.279px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p250a780} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
          <path d={svgPaths.p1cf9b500} id="Vector_2" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute bg-[#fff7ed] content-stretch flex h-[33.915px] items-center justify-center left-[87.87px] pl-[31.721px] pr-[31.732px] py-[0.678px] rounded-[14.244px] top-0 w-[79.733px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ffedd4] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[14.244px]" />
      <Icon31 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[31.73px] size-[16.279px] top-[8.82px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2794 16.2794">
        <g id="Icon">
          <path d={svgPaths.p1902e480} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35662" />
        </g>
      </svg>
    </div>
  );
}

function Text77() {
  return <div className="absolute bg-[#fb2c36] border-[0.678px] border-solid border-white left-[63.46px] rounded-[22760230px] size-[8.14px] top-[4.07px]" data-name="Text" />;
}

function Button25() {
  return (
    <div className="absolute bg-[rgba(200,82,18,0.1)] h-[33.915px] left-[175.75px] rounded-[14.244px] top-0 w-[79.744px]" data-name="Button">
      <Icon32 />
      <Text77 />
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[33.915px] relative shrink-0 w-full" data-name="Container">
      <Button23 />
      <Button24 />
      <Button25 />
    </div>
  );
}

function Container125() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-start left-[calc(50%-0.15px)] top-[151.54px] w-[255.489px]" data-name="Container">
      <Container126 />
      <Container129 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute h-[241px] left-[13px] top-[208px] w-[272px]" data-name="Container">
      <Container118 />
      <Container121 />
      <Container125 />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="absolute h-[187px] left-0 top-0 w-[272px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Text79() {
  return <div className="absolute bg-white left-[12.21px] opacity-79 rounded-[22760230px] size-[6.105px] top-[9.41px]" data-name="Text" />;
}

function Text78() {
  return (
    <div className="absolute bg-[#6a7282] h-[25px] left-[11.84px] rounded-[22760230px] top-[12px] w-[75px]" data-name="Text">
      <Text79 />
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[16.788px] left-[24.42px] text-[11.192px] text-white top-[3.73px] whitespace-nowrap">Inactive</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute h-[182px] left-[13px] overflow-clip rounded-[16.279px] top-[13px] w-[272px]" data-name="Container">
      <ImageWithFallback7 />
      <Text78 />
    </div>
  );
}

function Container116() {
  return (
    <div className="bg-white h-[461px] relative rounded-[24.419px] shrink-0 w-[298px]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container117 />
        <Container130 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.678px] border-solid inset-0 pointer-events-none rounded-[24.419px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[24.58px] items-center left-0 top-0">
      <Container71 />
      <Container86 />
      <Container101 />
      <Container116 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[461px] relative shrink-0 w-[1264px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32.784px] items-start min-h-px relative w-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
      <Container70 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1275px] items-start left-0 overflow-clip pl-[43.712px] pr-[64.658px] pt-[43.712px] top-[109px] w-[1372px]" data-name="Main Content">
      <Container />
    </div>
  );
}

function Text80() {
  return (
    <div className="flex-[1_0_0] h-[27.32px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[27.32px] left-0 text-[#99a1af] text-[19.124px] top-[0.45px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Text81() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[5.478px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[27.32px] left-0 text-[#d1d5dc] text-[19.124px] top-[0.45px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[70.435px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Mulish:Bold',sans-serif] font-bold leading-[27.32px] left-0 text-[#10182c] text-[19.124px] top-[0.45px] whitespace-nowrap">listings</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="flex-[1_0_0] h-[27.32px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-center relative size-full">
        <Text80 />
        <Text81 />
        <Text82 />
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[197.132px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container132 />
      </div>
    </div>
  );
}

function Icon33() {
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

function Text83() {
  return <div className="absolute bg-[#c85212] border-[2.732px] border-solid border-white left-[30.05px] rounded-[30557050px] size-[10.928px] top-[8.2px]" data-name="Text" />;
}

function Button26() {
  return (
    <div className="absolute left-[343.35px] rounded-[30557050px] size-[49.176px] top-[2.73px]" data-name="Button">
      <Icon33 />
      <Text83 />
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[413.687px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button26 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[109.281px] items-center justify-between left-0 pb-[0.911px] px-[43.712px] top-0 w-[1372.383px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.911px] border-solid inset-0 pointer-events-none" />
      <Container131 />
      <Container133 />
    </div>
  );
}

function AgentProfilePage() {
  return (
    <div className="absolute h-[1384px] left-[355px] overflow-clip top-0 w-[1373px]" data-name="AgentProfilePage">
      <MainContent />
      <Header />
    </div>
  );
}

function Container134() {
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

function Icon34() {
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

function Container136() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon34 />
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[51px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[142.791px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container136 />
        <Text84 />
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shadow-[0px_5.464px_8.196px_0px_rgba(0,0,0,0.1),0px_2.732px_5.464px_0px_rgba(0,0,0,0.1)] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[146.803px] relative size-full">
        <Container135 />
      </div>
    </div>
  );
}

function Icon35() {
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

function Container138() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Text85() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[28px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[96.816px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container138 />
        <Text85 />
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[192.778px] relative size-full">
        <Container137 />
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.66%_8.34%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4411 22.5391">
            <path d={svgPaths.p177b6bc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.34%] left-[37.51%] right-[37.49%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.19605 6.14704">
            <path d={svgPaths.p35e2f640} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.34%] right-[66.62%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.29%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[50.01%] right-[49.95%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_49.95%_58.34%_50.01%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_49.95%_41.67%_50.01%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_33.29%_58.34%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_33.29%_41.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.66%_66.62%_58.34%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.62%_41.67%_33.34%]" data-name="Vector">
        <div className="absolute inset-[-1.02px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05926 2.04901">
            <path d="M1.02451 1.02451H1.03475" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[50.5px] text-[19.124px] text-center text-white top-[-0.91px] whitespace-nowrap">Portfolio</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[140.372px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container140 />
        <Text86 />
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-[#c85212] h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[149.222px] relative size-full">
        <Container139 />
      </div>
    </div>
  );
}

function Icon37() {
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

function Container142() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[80.908px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[40.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Enquiries</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[121.888px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container142 />
        <Text87 />
      </div>
    </div>
  );
}

function Text88() {
  return (
    <div className="bg-[#c85212] h-[28.003px] relative rounded-[30557050px] shrink-0 w-[39.899px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-[20.43px] text-[15.026px] text-center text-white top-[2.28px] whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[21.856px] relative size-full">
        <Container141 />
        <Text88 />
      </div>
    </div>
  );
}

function Icon38() {
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

function Container144() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Text89() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[72.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Teams and Roles</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[96.816px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container144 />
        <Text89 />
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[192.778px] relative size-full">
        <Container143 />
      </div>
    </div>
  );
}

function Icon39() {
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

function Container146() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon39 />
      </div>
    </div>
  );
}

function Text90() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[99.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[92.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Pre-Screened Queue</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[29px] relative shrink-0 w-[242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container146 />
        <Text90 />
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[149.222px] relative size-full">
        <Container145 />
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

function Text91() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-0 text-[19.124px] text-[rgba(255,255,255,0.6)] top-[-0.91px] whitespace-nowrap">Rewards</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center px-[21.856px] relative size-full">
        <Icons8Trophy />
        <Text91 />
      </div>
    </div>
  );
}

function Icon40() {
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

function Container148() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon40 />
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[99.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[99.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Property Management</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[29px] relative shrink-0 w-[242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container148 />
        <Text92 />
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[149.222px] relative size-full">
        <Container147 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.16%_8.33%_29.17%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5391 12.2941">
            <path d={svgPaths.p351f7d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.16%_8.33%_45.84%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.19605 8.19605">
            <path d={svgPaths.p2d70c480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon41 />
      </div>
    </div>
  );
}

function Text93() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[43px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Analytics</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[154.074px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container150 />
        <Text93 />
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[135.519px] relative size-full">
        <Container149 />
      </div>
    </div>
  );
}

function Icon42() {
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

function J1() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="j9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon42 />
      </div>
    </div>
  );
}

function J2() {
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
          <J1 />
          <J2 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[1023px] relative shrink-0 w-[355px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start overflow-clip pl-[21.856px] pt-[32.784px] relative rounded-[inherit] size-full">
        <Button27 />
        <Button28 />
        <Button29 />
        <Button30 />
        <Button31 />
        <Button32 />
        <Button33 />
        <Button34 />
        <Button35 />
        <Link />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.539px] left-0 text-[15.026px] text-[rgba(255,255,255,0.6)] top-[-0.91px] uppercase whitespace-nowrap">My Organizations</p>
    </div>
  );
}

function Container153() {
  return (
    <div className="flex-[1_0_0] h-[49.176px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[158.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container153 />
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center mb-[-2px] relative shrink-0" data-name="Button">
      <Container152 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-[-48.36px] text-[17.758px] text-white top-[-0.91px] whitespace-nowrap">Okonkwo Properties Ltd</p>
    </div>
  );
}

function Container155() {
  return (
    <div className="flex-[1_0_0] h-[49.176px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[158.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container155 />
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="content-stretch flex h-[73px] items-center justify-center mb-[-2px] px-[49px] relative shrink-0" data-name="Button">
      <Container154 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[2px] relative shrink-0">
      <Button36 />
      <Button37 />
    </div>
  );
}

function Container151() {
  return (
    <div className="relative shrink-0 w-[355px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.911px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[22.767px] px-[21.856px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="bg-[rgba(200,82,18,0.2)] relative rounded-[30557050px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[32.784px] relative shrink-0 text-[#c85212] text-[21.856px] text-center whitespace-nowrap">MD</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-0 text-[17.758px] text-white top-[-0.91px] whitespace-nowrap">Michael D.</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.539px] left-0 text-[15.026px] text-[rgba(255,255,255,0.6)] top-[-0.45px] whitespace-nowrap">Agent</p>
    </div>
  );
}

function Container159() {
  return (
    <div className="flex-[1_0_0] h-[49.176px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[158.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container158 />
        <Container159 />
      </div>
    </div>
  );
}

function Icon43() {
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

function Button38() {
  return (
    <div className="content-stretch flex gap-[80px] h-[98.353px] items-center pb-[0.911px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[0.911px] border-solid inset-0 pointer-events-none" />
      <Container157 />
      <div className="flex items-center justify-center relative shrink-0 size-[21.856px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon43 />
        </div>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="h-[107px] relative shrink-0 w-[355px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.911px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end pt-[22.767px] px-[21.856px] relative size-full">
        <Button38 />
      </div>
    </div>
  );
}

function J() {
  return (
    <div className="absolute bg-[#10182c] content-stretch flex flex-col h-[1384px] items-start left-0 top-0 w-[355px]" data-name="j9">
      <Container134 />
      <Navigation />
      <Container151 />
      <Container156 />
    </div>
  );
}

function Ai() {
  return (
    <div className="absolute bg-[#f5f6f8] h-[1384px] left-0 top-0 w-[1728px]" data-name="ai">
      <AgentProfilePage />
      <J />
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