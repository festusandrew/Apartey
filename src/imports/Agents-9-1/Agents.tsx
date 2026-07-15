import svgPaths from "./svg-tpr74lwax2";
import imgImageWithFallback from "./ac1d5d923adf47901d5ebe03f5db35759e5f9d87.png";
import imgImageWithFallback1 from "./2a41ab3985a888c2a3bc219c19ead918100ba886.png";
import imgApartey11 from "./ceea96867297c8ec4ca85c873ab1b3ef0f4753b7.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5881 24.5881">
        <g id="Icon">
          <path d={svgPaths.p61bd880} id="Vector" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M19.4637 12.2931H5.12058" id="Vector_2" stroke="var(--stroke-0, #10182C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[30557050px] shrink-0 size-[54.64px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15.026px] py-[0.911px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[69.211px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[19.124px] shrink-0 size-[71.032px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.911px] relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[19.124px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_-1.366px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[43.712px] min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[43.712px] left-0 text-[#10182c] text-[43.712px] top-[0.91px] tracking-[-1.0928px] whitespace-nowrap">2 Pankshin Road</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#dbeafe] h-[25.954px] relative rounded-[10.928px] shrink-0 w-[98.096px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-[10.93px] text-[#1447e6] text-[13.66px] top-[2.28px] tracking-[0.683px] uppercase whitespace-nowrap">occupied</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16.392px] h-[43.712px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Text />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[21.856px] top-[4.44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p35a97a80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.pb7f0c80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[30.735px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon1 />
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[30.735px] left-[27.32px] text-[#6a7282] text-[20.49px] top-[-0.91px] whitespace-nowrap">{` Plateau, Nigeria`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[85.375px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start relative size-full">
        <Container6 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[85.375px] relative shrink-0 w-[649.124px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Button />
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[27.32px] size-[21.856px] top-[20.72px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p1dd49e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#10182c] h-[63.292px] left-0 rounded-[21.856px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] top-0 w-[191.768px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[112.37px] text-[19.124px] text-center text-white top-[16.39px] whitespace-nowrap">{` Edit Details`}</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[50.542px] relative rounded-[16.392px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] shrink-0 w-[175.361px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[87.82px] text-[#10182c] text-[19.124px] text-center top-[10.01px] whitespace-nowrap">Management</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[50.542px] relative rounded-[16.392px] shrink-0 w-[161.345px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[80.82px] text-[#6a7282] text-[19.124px] text-center top-[10.01px] whitespace-nowrap">Public View</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(243,244,246,0.8)] content-stretch flex h-[63.292px] items-start left-[208.16px] pb-[0.911px] pl-[6.375px] pr-[0.911px] pt-[6.375px] rounded-[21.856px] top-0 w-[349.456px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.911px] border-[rgba(229,231,235,0.5)] border-solid inset-0 pointer-events-none rounded-[21.856px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)]" />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[63.292px] relative shrink-0 w-[557.616px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
        <Container8 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[85.375px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container3 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-0 text-[#99a1af] text-[15.026px] top-[-0.45px] tracking-[0.7513px] uppercase whitespace-nowrap">Occupancy Status</p>
    </div>
  );
}

function Text1() {
  return <div className="bg-[#10b981] rounded-[30557050px] shrink-0 size-[13.66px]" data-name="Text" />;
}

function Text2() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[137.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Montserrat:Bold',sans-serif] font-bold leading-[27.32px] left-0 text-[#10182c] text-[27.32px] top-[-0.91px] whitespace-nowrap">occupied</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[10.928px] h-[27.32px] items-center relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[60.787px] relative shrink-0 w-[168.175px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32.784px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7842 32.7842">
        <g id="Icon">
          <path d={svgPaths.p1ade1080} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d={svgPaths.p19f37c40} id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d="M10.9287 8.19757H10.9424" id="Vector_3" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d="M21.8568 8.19757H21.8705" id="Vector_4" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d="M16.3928 8.19757H16.4064" id="Vector_5" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d="M16.3928 13.6616H16.4064" id="Vector_6" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d="M16.3928 19.1256H16.4064" id="Vector_7" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d="M21.8568 13.6616H21.8705" id="Vector_8" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d="M21.8568 19.1256H21.8705" id="Vector_9" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d="M10.9287 13.6616H10.9424" id="Vector_10" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d="M10.9287 19.1256H10.9424" id="Vector_11" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] relative rounded-[30557050px] shrink-0 size-[65.568px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.392px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white content-stretch flex h-[132.958px] items-center justify-between left-0 px-[33.695px] py-[0.911px] rounded-[32.784px] top-0 w-[399.472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[32.784px]" />
      <Container12 />
      <Container15 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-0 text-[#99a1af] text-[15.026px] top-[-0.45px] tracking-[0.7513px] uppercase whitespace-nowrap">Financial Status</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[27.32px] left-0 text-[#10182c] text-[27.32px] top-[-0.91px] whitespace-nowrap">Up to date</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[60.787px] relative shrink-0 w-[155.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32.784px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7842 32.7842">
        <g id="Icon">
          <path d={svgPaths.p1af8c600} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d={svgPaths.p2a1a0500} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[30557050px] shrink-0 size-[65.568px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.392px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white content-stretch flex h-[132.958px] items-center justify-between left-[432.26px] px-[33.695px] py-[0.911px] rounded-[32.784px] top-0 w-[399.486px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[32.784px]" />
      <Container17 />
      <Container20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-0 text-[#99a1af] text-[15.026px] top-[-0.45px] tracking-[0.7513px] uppercase whitespace-nowrap">Active Issues</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[27.32px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[27.32px] left-0 text-[#10182c] text-[27.32px] top-[-0.91px] whitespace-nowrap">0 Pending</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[27.32px] items-center relative shrink-0 w-full" data-name="Container">
      <Text3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[60.787px] relative shrink-0 w-[147.443px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32.784px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7842 32.7842">
        <g id="Icon">
          <path d={svgPaths.p37cbfb80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
          <path d={svgPaths.p2ad84c80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[30557050px] shrink-0 size-[65.568px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.392px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-white content-stretch flex h-[132.958px] items-center justify-between left-[864.53px] px-[33.695px] py-[0.911px] rounded-[32.784px] top-0 w-[399.472px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[32.784px]" />
      <Container22 />
      <Container25 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[132.958px] relative shrink-0 w-[1264.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container11 />
        <Container16 />
        <Container21 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36.882px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[36.882px] left-0 text-[#10182c] text-[24.588px] top-[-1.37px] whitespace-nowrap">Current Tenant</p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[81.96px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[30557050px] shrink-0 size-[87.425px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[2.732px] relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
      <div aria-hidden="true" className="absolute border-[2.732px] border-solid border-white inset-0 pointer-events-none rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_-1.366px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[40.98px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[40.98px] left-0 text-[#10182c] text-[27.32px] top-[-0.45px] whitespace-nowrap">Yakubu M.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[26.637px] left-0 text-[#6a7282] text-[17.758px] top-[-0.91px] whitespace-nowrap">Rent: Mar 26, 2026 - Apr 26, 2026</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] h-[73.081px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.464px] items-start relative size-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[87.425px] relative shrink-0 w-[391.66px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[27.32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3202 27.3202">
        <g id="Icon">
          <path d={svgPaths.p507d000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white relative rounded-[30557050px] shrink-0 size-[65.568px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[19.124px] py-[0.911px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[27.32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3202 27.3202">
        <g id="Icon">
          <path d={svgPaths.p598a900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
          <path d={svgPaths.p10919ee0} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[65.568px] min-w-px relative rounded-[30557050px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[19.124px] py-[0.911px] relative size-full">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[65.568px] relative shrink-0 w-[142.065px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-start relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f8f9fc] h-[132.958px] relative rounded-[27.32px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[22.767px] py-[0.911px] relative size-full">
          <Container30 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white h-[286.406px] relative rounded-[32.784px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[32.784px]" />
      <div className="content-stretch flex flex-col gap-[27.32px] items-start pb-[0.911px] pt-[44.623px] px-[44.623px] relative size-full">
        <Heading1 />
        <Container29 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[27.32px] top-[4.78px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3202 27.3202">
        <g id="Icon">
          <path d={svgPaths.p216112c8} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
          <path d={svgPaths.p277e7c0} id="Vector_2" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[36.882px] relative shrink-0 w-[353.284px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon8 />
        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[36.882px] left-[38.25px] text-[#10182c] text-[24.588px] top-[-1.37px] whitespace-nowrap">{` Marketing & Promotions`}</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[36.882px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[340.648px] relative size-full">
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32.784px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7842 32.7842">
        <g id="Icon">
          <path d={svgPaths.p3d573b80} fill="var(--fill-0, #C85212)" id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.73202" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[rgba(200,82,18,0.1)] relative rounded-[16.392px] shrink-0 size-[65.568px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.392px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[30.735px] relative shrink-0 w-[215.445px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] whitespace-nowrap">Premium Ad</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] h-[25.954px] relative rounded-[30557050px] shrink-0 w-[75.529px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[20.49px] left-[10.93px] text-[#10b981] text-[13.66px] top-[2.28px] tracking-[0.683px] uppercase whitespace-nowrap">Active</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex gap-[10.928px] h-[30.735px] items-center left-0 top-0 w-[384.588px]" data-name="Container">
      <Heading4 />
      <Text4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[53.274px] left-0 top-[36.2px] w-[384.588px]" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[26.637px] left-0 text-[#6a7282] text-[17.758px] top-[-0.91px] w-[355.162px]">Your property is currently boosted in search results.</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[94.354px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[0] left-0 text-[#c85212] text-[0px] top-[-0.91px] whitespace-nowrap">
          <span className="leading-[24.588px] text-[16.392px]">1,240</span>
          <span className="font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] text-[#10182c] text-[16.392px]">{` Views`}</span>
        </p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[67.93px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[0] left-0 text-[#c85212] text-[0px] top-[-0.91px] whitespace-nowrap">
          <span className="leading-[24.588px] text-[16.392px]">54</span>
          <span className="font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] text-[#10182c] text-[16.392px]">{` Clicks`}</span>
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-[144.512px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[24.588px] left-0 text-[#99a1af] text-[16.392px] top-[-0.91px] whitespace-nowrap">• 5 days remaining</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[21.856px] h-[24.588px] items-center left-0 top-[100.4px] w-[384.588px]" data-name="Container">
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] h-[124.99px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container40 />
        <Paragraph2 />
        <Container41 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[124.99px] relative shrink-0 w-[472.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-start relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#10182c] h-[55.779px] relative rounded-[16.392px] shrink-0 w-[143.602px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.911px] border-solid border-white inset-0 pointer-events-none rounded-[16.392px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-[72.27px] text-[17.758px] text-center text-white top-[13.66px] whitespace-nowrap">Manage Ad</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f8f9fc] h-[153px] relative rounded-[27.32px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.911px] border-[rgba(200,82,18,0.2)] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[28.231px] py-[0.911px] relative size-full">
          <Container37 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-center justify-center relative shrink-0 w-full">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white h-[286px] relative rounded-[32.784px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[32.784px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[44.623px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[36.882px] relative shrink-0 w-[343.523px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[36.882px] left-0 text-[#10182c] text-[24.588px] top-[-1.37px] whitespace-nowrap">{`Maintenance & Equipment`}</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[21.856px] top-[3.41px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d="M4.55127 10.9277H17.3007" id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d="M10.9278 4.5512V17.3006" id="Vector_2" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[110.789px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon10 />
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[70.45px] text-[#c85212] text-[19.124px] text-center top-[-0.91px] whitespace-nowrap">{` Add Item`}</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[36.882px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading5 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.588px] left-0 text-[#6a7282] text-[16.392px] top-[-0.91px] tracking-[0.8196px] uppercase whitespace-nowrap">Item Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[57.828px] relative rounded-[16.392px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16.392px] py-[13.66px] relative size-full">
          <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[19.124px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">e.g. AC Unit</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[16.392px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[176.938_0_0] h-[90.612px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.196px] items-start relative size-full">
        <Label />
        <TextInput />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[24.588px] left-0 text-[#6a7282] text-[16.392px] top-[-0.91px] tracking-[0.8196px] uppercase whitespace-nowrap">Scheduled Date</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <g id="Group">
            <path d={svgPaths.p3a01c880} id="Vector" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p8758600} fill="var(--fill-0, black)" id="Vector_2" />
            <path d="M4.5 0.5V3.5M14.5 0.5V3.5" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LetsIconsDateTodayLight() {
  return (
    <div className="-translate-y-1/2 absolute opacity-50 overflow-clip right-[25.82px] size-[24px] top-[calc(50%-0.02px)]" data-name="lets-icons:date-today-light">
      <Group />
    </div>
  );
}

function DatePicker() {
  return (
    <div className="h-[57.828px] relative rounded-[16.392px] shrink-0 w-full" data-name="Date Picker">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[normal] left-[16.84px] text-[#0a0a0a] text-[19.124px] top-[16.91px] whitespace-nowrap">DD/MM/YYY</p>
        <LetsIconsDateTodayLight />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[16.392px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[176.938_0_0] h-[90.612px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.196px] items-start relative size-full">
        <Label1 />
        <DatePicker />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#c85212] h-[56.006px] relative rounded-[16.392px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] shrink-0 w-[110.362px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[55.28px] text-[19.124px] text-center text-white top-[12.75px] whitespace-nowrap">Save</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f8f9fc] h-[147.074px] relative rounded-[27.32px] shrink-0 w-[693.932px]" data-name="Container">
      <div className="content-stretch flex gap-[21.856px] items-end overflow-clip pb-[28.231px] pt-[0.911px] px-[28.231px] relative rounded-[inherit] size-full">
        <Container45 />
        <Container46 />
        <Button8 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.911px] border-[rgba(200,82,18,0.2)] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[27.32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3202 27.3202">
        <g id="Icon">
          <path d={svgPaths.p15653200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
          <path d={svgPaths.p1344f80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white h-[65.568px] relative rounded-[30557050px] shrink-0 w-[64.957px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[18.811px] pr-[18.826px] py-[0.911px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[61.47px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] w-[79.228px]">Heating System</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[49.176px] leading-[24.588px] relative shrink-0 text-[16.392px] w-full whitespace-nowrap" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal left-0 text-[#99a1af] top-[-0.91px]">{`Scheduled for: `}</p>
      <p className="absolute font-['Mulish:Medium',sans-serif] font-medium left-0 text-[#4a5565] top-[23.68px]">20-08-2026</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[116.111px] relative shrink-0 w-[153.605px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.464px] items-start relative size-full">
        <Heading6 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[116.111px] relative shrink-0 w-[240.417px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_8.34%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0346 20.0344">
            <path d={svgPaths.p2c57a800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[25.01%] left-1/4 right-1/4 top-[24.99%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7494 12.7494">
            <path d={svgPaths.p3d60dc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[25.01%] left-1/4 right-1/4 top-[24.99%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7494 12.7494">
            <path d={svgPaths.p10c593c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[39.159px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l-[0.911px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start pl-[17.303px] relative size-full">
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[#f8f9fc] content-stretch flex h-[172.572px] items-center justify-between left-0 px-[28.231px] py-[0.911px] rounded-[27.32px] top-0 w-[336.038px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <Container49 />
      <Container52 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[27.32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3202 27.3202">
        <g id="Icon">
          <path d={svgPaths.p2731c0f0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
          <path d={svgPaths.p3426500} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white h-[65.568px] relative rounded-[30557050px] shrink-0 w-[57.842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[15.254px] pr-[15.268px] py-[0.911px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[61.47px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] w-[106.549px]">Ventilation System</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[49.176px] leading-[24.588px] relative shrink-0 text-[16.392px] w-full whitespace-nowrap" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal left-0 text-[#99a1af] top-[-0.91px]">{`Scheduled for: `}</p>
      <p className="absolute font-['Mulish:Medium',sans-serif] font-medium left-0 text-[#4a5565] top-[23.68px]">10-12-2026</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] h-[116.111px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.464px] items-start relative size-full">
        <Heading7 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[116.111px] relative shrink-0 w-[240.417px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_8.34%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0346 20.0344">
            <path d={svgPaths.p2c57a800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
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
      <div className="absolute bottom-[25.01%] left-1/4 right-1/4 top-[24.99%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7494 12.7494">
            <path d={svgPaths.p3d60dc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[25.01%] left-1/4 right-1/4 top-[24.99%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7494 12.7494">
            <path d={svgPaths.p10c593c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[39.159px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l-[0.911px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start pl-[17.303px] relative size-full">
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[#f8f9fc] content-stretch flex h-[172.572px] items-center justify-between left-[357.89px] px-[28.231px] py-[0.911px] rounded-[27.32px] top-0 w-[336.038px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <Container54 />
      <Container57 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[27.32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3202 27.3202">
        <g id="Icon">
          <path d={svgPaths.p23d66500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
          <path d={svgPaths.p23410500} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-white relative rounded-[360px] shrink-0 size-[65px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[360px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12.906px] py-[0.911px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[61.47px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] w-[129.771px]">Refrigeration System</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[49.176px] leading-[24.588px] relative shrink-0 text-[16.392px] w-full whitespace-nowrap" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal left-0 text-[#99a1af] top-[-0.91px]">{`Scheduled for: `}</p>
      <p className="absolute font-['Mulish:Medium',sans-serif] font-medium left-0 text-[#4a5565] top-[23.68px]">05-11-2026</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[116.111px] relative shrink-0 w-[165.429px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.464px] items-start relative size-full">
        <Heading8 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[116.111px] relative shrink-0 w-[240.417px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.34%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0346 20.0344">
            <path d={svgPaths.p2c57a800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7494 12.7494">
            <path d={svgPaths.p3d60dc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7494 12.7494">
            <path d={svgPaths.p10c593c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[39.159px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l-[0.911px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start pl-[17.303px] relative size-full">
        <Button13 />
        <Button14 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute bg-[#f8f9fc] content-stretch flex h-[172.572px] items-center justify-between left-0 px-[28.231px] py-[0.911px] rounded-[27.32px] top-[194.43px] w-[336.038px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <Container59 />
      <Container62 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[27.32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3202 27.3202">
        <g id="Icon">
          <path d={svgPaths.pa528c00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
          <path d={svgPaths.p97e5d00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.27668" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-white relative rounded-[30557050px] shrink-0 size-[65.568px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[19.124px] py-[0.911px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[30.735px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] whitespace-nowrap">Water Heater</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[49.176px] leading-[24.588px] relative shrink-0 text-[16.392px] w-full whitespace-nowrap" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal left-0 text-[#99a1af] top-[-0.91px]">{`Scheduled for: `}</p>
      <p className="absolute font-['Mulish:Medium',sans-serif] font-medium left-0 text-[#4a5565] top-[23.68px]">22-09-2026</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="flex-[1_0_0] h-[85.375px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.464px] items-start relative size-full">
        <Heading9 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[85.375px] relative shrink-0 w-[221.165px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.34%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0346 20.0344">
            <path d={svgPaths.p2c57a800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7494 12.7494">
            <path d={svgPaths.p3d60dc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7494 12.7494">
            <path d={svgPaths.p10c593c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[21.856px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[39.159px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l-[0.911px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start pl-[17.303px] relative size-full">
        <Button15 />
        <Button16 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[#f8f9fc] content-stretch flex h-[172.572px] items-center justify-between left-[357.89px] px-[28.231px] py-[0.911px] rounded-[27.32px] top-[194.43px] w-[336.038px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <Container64 />
      <Container67 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[367.001px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container53 />
      <Container58 />
      <Container63 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-white h-[681px] relative rounded-[32.784px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[32.784px]" />
      <div className="content-stretch flex flex-col gap-[32.784px] items-start pb-[0.911px] pt-[44.623px] px-[44.623px] relative size-full">
        <Container43 />
        <Container44 />
        <Container47 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[32.784px] left-[10.93px] top-[22.43px] w-[163.75px]" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[32.784px] left-[16.39px] text-[#10182c] text-[21.856px] top-0 whitespace-nowrap">Past Tenants</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-white h-[55.779px] left-0 rounded-[19.124px] top-0 w-[327.842px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[49.176px] pr-[21.856px] py-[13.66px] relative rounded-[inherit] size-full">
        <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[17.758px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Search tenants...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[19.124px]" />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[16.39px] size-[21.856px] top-[16.96px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p1c13f80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p23edf600} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[55.779px] left-[344.23px] top-[10.93px] w-[327.842px]" data-name="Container">
      <TextInput1 />
      <Icon23 />
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#f8f9fc] h-[77.635px] relative rounded-[27.32px] shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container70 />
    </div>
  );
}

function ImageWithFallback2() {
  return <div className="h-[52.819px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container74() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[30557050px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.911px] relative rounded-[inherit] size-full">
        <ImageWithFallback2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[30.735px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] whitespace-nowrap">Joy Johnson</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.588px] left-0 text-[#6a7282] text-[16.392px] top-[-0.91px] whitespace-nowrap">Lease: Jan 1, 2026 - Dec 31, 2026</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="flex-[1_0_0] h-[58.055px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.732px] items-start relative size-full">
        <Heading11 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[58.055px] relative shrink-0 w-[331.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p24d32080} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-white relative rounded-[30557050px] shrink-0 size-[49.176px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p2fcce600} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p283cb0e0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-white flex-[1_0_0] h-[49.176px] min-w-px relative rounded-[30557050px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
          <Icon25 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[109.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-start relative size-full">
        <Button17 />
        <Button18 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[103.589px] relative rounded-[27.32px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[22.767px] py-[0.911px] relative size-full">
          <Container73 />
          <Container76 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback3() {
  return <div className="h-[52.819px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container79() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[30557050px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.911px] relative rounded-[inherit] size-full">
        <ImageWithFallback3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[30.735px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] whitespace-nowrap">Michael Smith</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.588px] left-0 text-[#6a7282] text-[16.392px] top-[-0.91px] whitespace-nowrap">Lease: Feb 1, 2026 - Jan 31, 2027</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="flex-[1_0_0] h-[58.055px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.732px] items-start relative size-full">
        <Heading12 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[58.055px] relative shrink-0 w-[330.019px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p2df90400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white relative rounded-[30557050px] shrink-0 size-[49.176px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p1427e500} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p477140} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-white flex-[1_0_0] h-[49.176px] min-w-px relative rounded-[30557050px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
          <Icon27 />
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[109.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-start relative size-full">
        <Button19 />
        <Button20 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[103.589px] relative rounded-[27.32px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[22.767px] py-[0.911px] relative size-full">
          <Container78 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback4() {
  return <div className="h-[52.819px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container84() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[30557050px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.911px] relative rounded-[inherit] size-full">
        <ImageWithFallback4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[30.735px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] whitespace-nowrap">Emily Davis</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.588px] left-0 text-[#6a7282] text-[16.392px] top-[-0.91px] whitespace-nowrap">Lease: Mar 1, 2026 - Feb 28, 2027</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="flex-[1_0_0] h-[58.055px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.732px] items-start relative size-full">
        <Heading13 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[58.055px] relative shrink-0 w-[335.028px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container84 />
        <Container85 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.pe70ad32} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-white relative rounded-[30557050px] shrink-0 size-[49.176px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p2a957980} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p2188ef00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-white flex-[1_0_0] h-[49.176px] min-w-px relative rounded-[30557050px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
          <Icon29 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[109.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-start relative size-full">
        <Button21 />
        <Button22 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[103.589px] relative rounded-[27.32px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[22.767px] py-[0.911px] relative size-full">
          <Container83 />
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback5() {
  return <div className="h-[52.819px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container89() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[30557050px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.911px] relative rounded-[inherit] size-full">
        <ImageWithFallback5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[30.735px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] whitespace-nowrap">Daniel Lee</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.588px] left-0 text-[#6a7282] text-[16.392px] top-[-0.91px] whitespace-nowrap">Lease: Apr 1, 2026 - Mar 31, 2027</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="flex-[1_0_0] h-[58.055px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.732px] items-start relative size-full">
        <Heading14 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[58.055px] relative shrink-0 w-[335.213px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container89 />
        <Container90 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p1f8ea760} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-white relative rounded-[30557050px] shrink-0 size-[49.176px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p17d98480} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p3896b5e0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-white flex-[1_0_0] h-[49.176px] min-w-px relative rounded-[30557050px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
          <Icon31 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[109.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-start relative size-full">
        <Button23 />
        <Button24 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[103.589px] relative rounded-[27.32px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[22.767px] py-[0.911px] relative size-full">
          <Container88 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback6() {
  return <div className="h-[52.819px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container94() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[30557050px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.911px] relative rounded-[inherit] size-full">
        <ImageWithFallback6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[30.735px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[30.735px] left-0 text-[#10182c] text-[20.49px] top-[-0.91px] whitespace-nowrap">Sophie Brown</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24.588px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[24.588px] left-0 text-[#6a7282] text-[16.392px] top-[-0.91px] whitespace-nowrap">Lease: May 1, 2026 - Apr 30, 2027</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="flex-[1_0_0] h-[58.055px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.732px] items-start relative size-full">
        <Heading15 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[58.055px] relative shrink-0 w-[337.888px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[21.856px] items-center relative size-full">
        <Container94 />
        <Container95 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p64b0280} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-white relative rounded-[30557050px] shrink-0 size-[49.176px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p2bd1cf0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p2362fb80} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-white flex-[1_0_0] h-[49.176px] min-w-px relative rounded-[30557050px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[30557050px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13.66px] py-[0.911px] relative size-full">
          <Icon33 />
        </div>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-[109.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-start relative size-full">
        <Button25 />
        <Button26 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[103.589px] relative rounded-[27.32px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[27.32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[22.767px] py-[0.911px] relative size-full">
          <Container93 />
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[16.392px] h-[583.513px] items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container77 />
      <Container82 />
      <Container87 />
      <Container92 />
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-white h-[783.178px] relative rounded-[32.784px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[32.784px]" />
      <div className="content-stretch flex flex-col gap-[32.784px] items-start pb-[0.911px] pt-[44.623px] px-[44.623px] relative size-full">
        <Container69 />
        <Container71 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[1682.922px] items-start left-0 top-0 w-[783.178px]" data-name="Container">
      <Container28 />
      <Container34 />
      <Container42 />
      <Container68 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[40.98px] left-[43.71px] top-[43.71px] w-[349.698px]" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[40.98px] left-0 text-[27.32px] text-white top-[-0.45px] whitespace-nowrap">Financials</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-0 text-[#99a1af] text-[15.026px] top-[-0.45px] tracking-[0.7513px] uppercase whitespace-nowrap">Rent Amount</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[49.176px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[0] left-0 text-[0px] text-white top-0 whitespace-nowrap">
        <span className="leading-[49.176px] text-[49.176px]">£2,000</span>
        <span className="font-['Montserrat:Regular',sans-serif] font-normal leading-[21.856px] text-[#99a1af] text-[21.856px]">/Mo</span>
      </p>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.928px] h-[82.643px] items-start left-[43.71px] top-[117.48px] w-[349.698px]" data-name="Container">
      <Paragraph12 />
      <Container100 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[90.498px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-0 text-[#d1d5dc] text-[19.124px] top-[-0.91px] whitespace-nowrap">Due Date:</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[117.79px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-0 text-[19.124px] text-white top-[-0.91px] whitespace-nowrap">Apr 26, 2026</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex h-[62.381px] items-center justify-between left-[43.71px] pb-[0.911px] top-[232.9px] w-[349.698px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.911px] border-solid inset-0 pointer-events-none" />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[21.856px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[87.49%_42.8%_8.34%_42.77%]" data-name="Vector">
        <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.97622 2.73209">
            <path d={svgPaths.pa8b9100} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.32%_8.35%_66.68%_83.32%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64276 7.28545">
            <path d={svgPaths.p15733900} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.32%_12.51%_29.18%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2131 15.4814">
            <path d={svgPaths.p3e3c8100} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.32%_83.35%_66.68%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.64276 7.28545">
            <path d={svgPaths.pa6844c0} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute bg-[rgba(200,82,18,0.1)] content-stretch flex flex-col items-start left-0 pt-[8.196px] px-[8.196px] rounded-[30557050px] size-[38.248px] top-[2.73px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-0 text-[#10182c] text-[19.124px] top-[-0.91px] whitespace-nowrap">Auto-Reminders</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="font-['Mulish:Regular',sans-serif] font-normal h-[40.98px] leading-[20.49px] relative shrink-0 text-[#6a7282] text-[16.392px] w-full whitespace-nowrap" data-name="Paragraph">
      <p className="absolute left-0 top-[-0.91px]">Notify Renter</p>
      <p className="absolute left-0 top-[19.58px]">before due date</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.732px] h-[72.398px] items-start left-[54.64px] top-0 w-[149.592px]" data-name="Container">
      <Heading17 />
      <Paragraph13 />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute h-[72.398px] left-[27.32px] top-[27.32px] w-[204.232px]" data-name="Container">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Text10() {
  return <div className="bg-white rounded-[30557050px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] shrink-0 size-[21.856px]" data-name="Text" />;
}

function Container106() {
  return (
    <div className="absolute bg-[#c85212] content-stretch flex h-[32.784px] items-center left-[262.27px] pl-[32.784px] rounded-[30557050px] top-[47.13px] w-[60.104px]" data-name="Container">
      <Text10 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute bg-white h-[127.039px] left-[43.71px] rounded-[27.32px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] top-[328.07px] w-[349.698px]" data-name="Container">
      <Container103 />
      <Container106 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute h-[28.686px] left-[27.32px] top-[27.32px] w-[295.058px]" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-0 text-[#10182c] text-[19.124px] top-[-0.91px] whitespace-nowrap">Send Documents</p>
    </div>
  );
}

function Paragraph14() {
  return <div className="h-[24.588px] shrink-0 w-full" data-name="Paragraph" />;
}

function Icon35() {
  return (
    <div className="absolute left-[57.39px] size-[21.856px] top-[16.96px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p1ecfd3e0} id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p2b01d1e0} id="Vector_2" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d="M10.9279 2.73387V13.6619" id="Vector_3" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#f8f9fc] h-[55.779px] relative rounded-[16.392px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[16.392px]" />
      <Icon35 />
      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-[163.44px] text-[#4a5565] text-[17.758px] text-center top-[13.66px] whitespace-nowrap">SeIect documents</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col gap-[8.196px] h-[88.563px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Button27 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-[62.05px] size-[21.856px] top-[19.81px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p1f87b500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p1841ac00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[#c85212] h-[61.47px] relative rounded-[16.392px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <Icon36 />
      <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[165.97px] text-[19.124px] text-center text-white top-[15.48px] whitespace-nowrap">{` Send to Renter`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] items-start left-[27.32px] top-[68.01px] w-[295.058px]">
      <Container108 />
      <Button28 />
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute bg-white h-[300px] left-[43.4px] rounded-[27.32px] shadow-[0px_1.366px_4.098px_0px_rgba(0,0,0,0.1),0px_1.366px_2.732px_0px_rgba(0,0,0,0.1)] top-[477.31px] w-[350px]" data-name="Container">
      <Heading18 />
      <Frame />
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[#10182c] drop-shadow-[0px_10.928px_20.49px_rgba(16,24,44,0.12)] h-[897.24px] relative rounded-[32.784px] shrink-0 w-full" data-name="Container">
      <Heading16 />
      <Container99 />
      <Container101 />
      <Container102 />
      <Container107 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[36.882px] relative shrink-0 w-[149.991px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[36.882px] left-0 text-[#10182c] text-[24.588px] top-[-1.37px] whitespace-nowrap">Documents</p>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-0 size-[21.856px] top-[2.39px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d="M4.54989 10.9292H17.2993" id="Vector" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d="M10.9264 4.55272V17.3021" id="Vector_2" stroke="var(--stroke-0, #C85212)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-[132.19px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon37 />
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-[79.59px] text-[#c85212] text-[17.758px] text-center top-[-0.91px] whitespace-nowrap">{` Upload New`}</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex h-[36.882px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading19 />
      <Button29 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5881 24.5881">
        <g id="Icon">
          <path d={svgPaths.p554ae00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d={svgPaths.p1389a880} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M10.2458 9.21976H8.19683" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M16.3929 13.3178H8.19683" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M16.3929 17.4158H8.19683" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
        </g>
      </svg>
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-[#f8f9fc] relative rounded-[19.124px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15.026px] relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-0 text-[#10182c] text-[17.758px] top-[-0.91px] whitespace-nowrap">Rent_Agreement.pdf</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.539px] left-0 text-[#6a7282] text-[15.026px] top-[-0.45px] whitespace-nowrap">2.4 MB</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="flex-[1_0_0] h-[51.908px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.732px] items-start relative size-full">
        <Heading20 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[247.077px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container114 />
        <Container115 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p135a6400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p8dcd100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d="M10.9284 2.73333V13.6614" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="relative rounded-[13.66px] shrink-0 size-[43.712px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.928px] relative size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <Icon39 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p22587000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p27612000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div className="flex-[1_0_0] h-[43.712px] min-w-px relative rounded-[13.66px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.928px] relative size-full">
          <Icon40 />
        </div>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[43.712px] relative shrink-0 w-[98.353px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-start relative size-full">
        <Button30 />
        <Button31 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-[#f8f9fc] content-stretch flex h-[95px] items-center justify-between pl-[20.035px] pr-[0.911px] py-[0.911px] relative rounded-[21.856px] shrink-0 w-[376px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[21.856px]" />
      <Container113 />
      <Container116 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5881 24.5881">
        <g id="Icon">
          <path d={svgPaths.p554ae00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d={svgPaths.p1389a880} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M10.2458 9.21976H8.19683" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M16.3929 13.3178H8.19683" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M16.3929 17.4158H8.19683" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="bg-[#f8f9fc] relative rounded-[19.124px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15.026px] relative size-full">
        <Icon41 />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-0 text-[#10182c] text-[17.758px] top-[-0.91px] whitespace-nowrap">Project_Report...</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.539px] left-0 text-[#6a7282] text-[15.026px] top-[-0.45px] whitespace-nowrap">3.1 MB</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="flex-[1_0_0] h-[51.908px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.732px] items-start relative size-full">
        <Heading21 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[247.077px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container119 />
        <Container120 />
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p135a6400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p8dcd100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d="M10.9284 2.73333V13.6614" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="relative rounded-[13.66px] shrink-0 size-[43.712px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.928px] relative size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <Icon42 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p22587000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p27612000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button33() {
  return (
    <div className="flex-[1_0_0] h-[43.712px] min-w-px relative rounded-[13.66px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.928px] relative size-full">
          <Icon43 />
        </div>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[43.712px] relative shrink-0 w-[98.353px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-start relative size-full">
        <Button32 />
        <Button33 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-[#f8f9fc] content-stretch flex h-[95px] items-center justify-between pl-[20.035px] pr-[0.911px] py-[0.911px] relative rounded-[21.856px] shrink-0 w-[376px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[21.856px]" />
      <Container118 />
      <Container121 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5881 24.5881">
        <g id="Icon">
          <path d={svgPaths.p554ae00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d={svgPaths.p1389a880} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M10.2458 9.21976H8.19683" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M16.3929 13.3178H8.19683" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
          <path d="M16.3929 17.4158H8.19683" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04901" />
        </g>
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="bg-[#f8f9fc] relative rounded-[19.124px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15.026px] relative size-full">
        <Icon44 />
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-0 text-[#10182c] text-[17.758px] top-[-0.91px] whitespace-nowrap">Invoice_January.pdf</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.539px] left-0 text-[#6a7282] text-[15.026px] top-[-0.45px] whitespace-nowrap">1.2 MB</p>
    </div>
  );
}

function Container125() {
  return (
    <div className="flex-[1_0_0] h-[51.908px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.732px] items-start relative size-full">
        <Heading22 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[247.077px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container124 />
        <Container125 />
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p135a6400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p8dcd100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d="M10.9284 2.73333V13.6614" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button34() {
  return (
    <div className="relative rounded-[13.66px] shrink-0 size-[43.712px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.928px] relative size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <Icon45 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[21.856px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8561 21.8561">
        <g id="Icon">
          <path d={svgPaths.p22587000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
          <path d={svgPaths.p27612000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.82134" />
        </g>
      </svg>
    </div>
  );
}

function Button35() {
  return (
    <div className="flex-[1_0_0] h-[43.712px] min-w-px relative rounded-[13.66px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.928px] relative size-full">
          <Icon46 />
        </div>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[43.712px] relative shrink-0 w-[98.353px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-start relative size-full">
        <Button34 />
        <Button35 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="bg-[#f8f9fc] content-stretch flex h-[95px] items-center justify-between pl-[20.035px] pr-[0.911px] py-[0.911px] relative rounded-[21.856px] shrink-0 w-[376px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[21.856px]" />
      <Container123 />
      <Container126 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col gap-[16.392px] h-[316.914px] items-start relative shrink-0 w-full" data-name="Container">
      <Container112 />
      <Container117 />
      <Container122 />
    </div>
  );
}

function Container109() {
  return (
    <div className="bg-white h-[470.362px] relative rounded-[32.784px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.911px] border-solid inset-0 pointer-events-none rounded-[32.784px]" />
      <div className="content-stretch flex flex-col gap-[27.32px] items-start pb-[0.911px] pt-[44.623px] px-[44.623px] relative size-full">
        <Container110 />
        <Container111 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[43.712px] h-[1682.922px] items-start left-[826.89px] top-0 w-[437.123px]" data-name="Container">
      <Container98 />
      <Container109 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[1682.922px] relative shrink-0 w-[1264.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container27 />
        <Container97 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[43.712px] h-[1859.592px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container26 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[10.928px] h-[1955.896px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container9 />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="content-stretch flex flex-col h-[2473px] items-start overflow-clip pl-[43.712px] pr-[64.658px] pt-[43.712px] relative shrink-0 w-[1373px]" data-name="Main Content">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[1556.14px] items-start relative shrink-0 w-full" data-name="Container">
      <MainContent1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2661px] items-center overflow-clip pt-[32px] right-0 top-[109px] w-[1372px]" data-name="Main Content">
      <Container />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[99.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Medium',sans-serif] font-medium leading-[27.32px] left-0 text-[#99a1af] text-[19.124px] top-[0.45px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[5.478px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[27.32px] left-0 text-[#d1d5dc] text-[19.124px] top-[0.45px] whitespace-nowrap">/</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] h-[27.32px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute capitalize font-['Mulish:Bold',sans-serif] font-bold leading-[27.32px] left-0 text-[#10182c] text-[19.124px] top-[0.45px] whitespace-nowrap">Property Management</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="flex-[1_0_0] h-[27.32px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.928px] items-center relative size-full">
        <Text11 />
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[27.32px] relative shrink-0 w-[228.508px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container128 />
      </div>
    </div>
  );
}

function Icon47() {
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

function Text14() {
  return <div className="absolute bg-[#c85212] border-[2.732px] border-solid border-white left-[30.05px] rounded-[30557050px] size-[10.928px] top-[8.2px]" data-name="Text" />;
}

function Button36() {
  return (
    <div className="absolute left-[343.01px] rounded-[30557050px] size-[49.176px] top-[2.73px]" data-name="Button">
      <Icon47 />
      <Text14 />
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[413.687px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button36 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[109.281px] items-center justify-between left-0 pb-[0.911px] px-[43.712px] top-0 w-[1372.383px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.911px] border-solid inset-0 pointer-events-none" />
      <Container127 />
      <Container129 />
    </div>
  );
}

function J() {
  return (
    <div className="absolute h-[2873px] left-[355px] overflow-clip top-0 w-[1373px]" data-name="j9">
      <MainContent />
      <Header />
    </div>
  );
}

function Container130() {
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

function Icon48() {
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

function Container132() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon48 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[28.686px] left-[51px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[142.791px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container132 />
        <Text15 />
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[146.803px] relative size-full">
        <Container131 />
      </div>
    </div>
  );
}

function Icon49() {
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

function Container134() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon49 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[28px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[96.816px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container134 />
        <Text16 />
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[192.778px] relative size-full">
        <Container133 />
      </div>
    </div>
  );
}

function Icon50() {
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

function Container136() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon50 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[50.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Portfolio</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[140.372px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container136 />
        <Text17 />
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[149.222px] relative size-full">
        <Container135 />
      </div>
    </div>
  );
}

function Icon51() {
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

function Container138() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon51 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[80.908px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[40.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Enquiries</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[121.888px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container138 />
        <Text18 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#c85212] h-[28.003px] relative rounded-[30557050px] shrink-0 w-[39.899px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Bold',sans-serif] font-bold leading-[22.539px] left-[20.43px] text-[15.026px] text-center text-white top-[2.28px] whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[21.856px] relative size-full">
        <Container137 />
        <Text19 />
      </div>
    </div>
  );
}

function Icon52() {
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

function Container140() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon52 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[72.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Teams and Roles</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[96.816px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container140 />
        <Text20 />
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[192.778px] relative size-full">
        <Container139 />
      </div>
    </div>
  );
}

function Icon53() {
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

function Container142() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon53 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[99.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[92.5px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Pre-Screened Queue</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[29px] relative shrink-0 w-[242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container142 />
        <Text21 />
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[149.222px] relative size-full">
        <Container141 />
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

function Text22() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-0 text-[19.124px] text-[rgba(255,255,255,0.6)] top-[-0.91px] whitespace-nowrap">Rewards</p>
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center px-[21.856px] relative size-full">
        <Icons8Trophy />
        <Text22 />
      </div>
    </div>
  );
}

function Icon54() {
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

function Container144() {
  return (
    <div className="relative shrink-0 size-[24.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon54 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[99.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[99.5px] text-[19.124px] text-center text-white top-[-0.91px] whitespace-nowrap">Property Management</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[29px] relative shrink-0 w-[242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container144 />
        <Text23 />
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="bg-[#c85212] h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[149.222px] relative size-full">
        <Container143 />
      </div>
    </div>
  );
}

function Icon55() {
  return (
    <div className="h-[24.588px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.16%_8.33%_29.17%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5391 12.2941">
            <path d={svgPaths.p351f7d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.04901" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.16%_8.33%_45.84%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.19605 8.19605">
            <path d={svgPaths.p2d70c480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.04901" />
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
        <Icon55 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] h-[28.686px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Mulish:Regular',sans-serif] font-normal leading-[28.686px] left-[43px] text-[19.124px] text-[rgba(255,255,255,0.7)] text-center top-[-0.91px] whitespace-nowrap">Analytics</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[28.686px] relative shrink-0 w-[154.074px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container146 />
        <Text24 />
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="h-[61.47px] relative rounded-[19.124px] shrink-0 w-[311.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pl-[21.856px] pr-[135.519px] relative size-full">
        <Container145 />
      </div>
    </div>
  );
}

function Icon56() {
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
        <Icon56 />
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
    <div className="h-[2257px] relative shrink-0 w-[355px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.928px] items-start overflow-clip pl-[21.856px] pt-[32.784px] relative rounded-[inherit] size-full">
        <Button37 />
        <Button38 />
        <Button39 />
        <Button40 />
        <Button41 />
        <Button42 />
        <Button43 />
        <Button44 />
        <Button45 />
        <Link />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.539px] left-0 text-[15.026px] text-[rgba(255,255,255,0.6)] top-[-0.91px] uppercase whitespace-nowrap">My Organizations</p>
    </div>
  );
}

function Container149() {
  return (
    <div className="flex-[1_0_0] h-[49.176px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[158.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container149 />
      </div>
    </div>
  );
}

function Button46() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-center mb-[-2px] relative shrink-0" data-name="Button">
      <Container148 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-[-48.36px] text-[17.758px] text-white top-[-0.91px] whitespace-nowrap">Okonkwo Properties Ltd</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="flex-[1_0_0] h-[49.176px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[158.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container151 />
      </div>
    </div>
  );
}

function Button47() {
  return (
    <div className="content-stretch flex h-[73px] items-center justify-center mb-[-2px] px-[49px] relative shrink-0" data-name="Button">
      <Container150 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[2px] relative shrink-0">
      <Button46 />
      <Button47 />
    </div>
  );
}

function Container147() {
  return (
    <div className="relative shrink-0 w-[355px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.911px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[22.767px] px-[21.856px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="bg-[rgba(200,82,18,0.2)] relative rounded-[30557050px] shrink-0 size-[54.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[32.784px] relative shrink-0 text-[#c85212] text-[21.856px] text-center whitespace-nowrap">MD</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[26.637px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Bold',sans-serif] font-bold leading-[26.637px] left-0 text-[17.758px] text-white top-[-0.91px] whitespace-nowrap">Michael D.</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[22.539px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Mulish:Regular',sans-serif] font-normal leading-[22.539px] left-0 text-[15.026px] text-[rgba(255,255,255,0.6)] top-[-0.45px] whitespace-nowrap">Agent</p>
    </div>
  );
}

function Container155() {
  return (
    <div className="flex-[1_0_0] h-[49.176px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph20 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="h-[54.64px] relative shrink-0 w-[158.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16.392px] items-center relative size-full">
        <Container154 />
        <Container155 />
      </div>
    </div>
  );
}

function Icon57() {
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

function Button48() {
  return (
    <div className="content-stretch flex gap-[80px] h-[98.353px] items-center pb-[0.911px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[0.911px] border-solid inset-0 pointer-events-none" />
      <Container153 />
      <div className="flex items-center justify-center relative shrink-0 size-[21.856px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Icon57 />
        </div>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[107px] relative shrink-0 w-[355px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.911px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end pt-[22.767px] px-[21.856px] relative size-full">
        <Button48 />
      </div>
    </div>
  );
}

function J1() {
  return (
    <div className="absolute bg-[#10182c] content-stretch flex flex-col h-[2614px] items-start left-0 top-0 w-[355px]" data-name="j9">
      <Container130 />
      <Navigation />
      <Container147 />
      <Container152 />
    </div>
  );
}

function Ai() {
  return (
    <div className="absolute bg-[#f5f6f8] h-[2614px] left-0 top-0 w-[1728px]" data-name="ai">
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