import svgPaths from "./svg-5j1y0k2l1k";
import imgImage from "./c87e9ecf1d79bbbf193ff51cf2053568acf1381e.png";
import imgImage1 from "./616a4f81616381fc7e5390bd595740bb53a25843.png";
import imgImage2 from "./f37733317dc2f43e92a86618c5a3d5f13af1f741.png";
import imgImage3 from "./19860cf83240c46847635e464efa669cdb12724b.png";
import imgTheme01Png from "./10fd8431ae6d9c2d06134d8fb03827958358aaad.png";
import imgProfilePng from "./bdbe7ab60c7cedfdf13d0d0825db141c6ad80d55.png";

function HeaderLeft() {
  return (
    <div className="content-stretch flex items-center justify-center py-[7px] relative shrink-0" data-name="HeaderLeft">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[40px] tracking-[1.76px] whitespace-nowrap">
        <p className="leading-[26.4px]">わたしのポートフォリオ</p>
      </div>
    </div>
  );
}

function DotHRedSvg() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[3px] left-1/2 w-[12px]" data-name="dot_h_red.svg">
      <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 12 3" width="12">
        <g id="dot_h_red.svg">
          <path clipRule="evenodd" d={svgPaths.p3eb07d00} fill="#D57563" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DotHRedSvgClip() {
  return (
    <div className="absolute inset-[0_0.37px_0.41px_0] overflow-clip" data-name="dot_h_red.svg clip">
      <DotHRedSvg />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[8px] py-[11px] relative shrink-0" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] h-[25px] justify-center leading-[0] not-italic relative shrink-0 text-[#d57563] text-[17.6px] tracking-[1.1px] w-[56.462px]">
        <p className="leading-[17.6px]">ホーム</p>
      </div>
      <DotHRedSvgClip />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[15px] relative shrink-0 w-[52px]" data-name="作品">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[17.6px] tracking-[1.1px] whitespace-nowrap">
        <p className="leading-[17.6px]">作品</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[15px] relative shrink-0" data-name="学習記録">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[17.6px] tracking-[1.1px] w-full">
        <p className="leading-[17.6px]">学習記録</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[15px] relative shrink-0" data-name="こだわり">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[17.6px] tracking-[1.1px] whitespace-nowrap">
        <p className="leading-[17.6px]">こだわり</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[15px] relative shrink-0" data-name="将来の夢">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[17.6px] tracking-[1.1px] whitespace-nowrap">
        <p className="leading-[17.6px]">将来の夢</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[15px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[17.6px] tracking-[1.1px] whitespace-nowrap">
        <p className="leading-[17.6px]">プロフィール</p>
      </div>
    </div>
  );
}

function IconMailSvg() {
  return (
    <div className="-translate-x-1/2 absolute h-[21.667px] left-1/2 top-0 w-[26px]" data-name="icon_mail.svg">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.6667" preserveAspectRatio="none" viewBox="0 0 26 21.6667" width="26">
        <g clipPath="url(#clip0_0_23)" id="icon_mail.svg">
          <path d={svgPaths.p2a280600} fill="#222222" id="Vector" />
          <path d={svgPaths.p54d8100} fill="#222222" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_23">
            <rect fill="white" height="21.6667" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMailSvgClip() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="icon_mail.svg clip">
      <IconMailSvg />
    </div>
  );
}

function ItemLink() {
  return (
    <div className="h-[41px] relative shrink-0 w-[57.05px]" data-name="Item → Link">
      <IconMailSvgClip />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#222] text-[11px] top-[35px] tracking-[1.1px] w-[57.425px]">
        <p className="leading-[11px]">CONTACT</p>
      </div>
    </div>
  );
}

function HederRight() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="HederRight">
      <Item />
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Frame />
      <ItemLink />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-[40px] py-[25px] right-0 top-0" data-name="Header">
      <HeaderLeft />
      <HederRight />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-0.24px] py-[12px] top-[65.38px]" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3280cf] text-[76px] tracking-[7.6px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">ただひたすらに</p>
        <p className="leading-[1.5]">ものを創る</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[402.05px] size-[532.75px] top-[394.06px]">
      <div className="absolute flex items-center justify-center left-0 size-[532.75px] top-0">
        <div className="flex-none rotate-60">
          <div className="bg-[#faf2eb] border-3 border-[#faf2eb] border-solid relative rounded-[195px] size-[390px]" data-name="Background+Border" />
        </div>
      </div>
      <div className="absolute flex h-[363.875px] items-center justify-center left-0 top-0 w-[435.25px]">
        <div className="flex-none rotate-60">
          <div className="border-[#222] border-b-3 border-l-3 border-solid border-t-3 h-[390px] relative rounded-bl-[192px] rounded-tl-[192px] w-[195px]" data-name="Border" />
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute aspect-[751.1599731445312/713.5900268554688] border-3 border-[#333] border-solid left-[741.76px] right-[-74.06px] top-[167.38px]" data-name="Border">
      <div className="absolute h-[707.59px] left-0 opacity-0 top-0 w-[745.16px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.31%] left-0 max-w-none top-[-2.65%] w-full" src={imgImage} />
        </div>
      </div>
      <div className="absolute h-[707.59px] left-0 opacity-0 top-0 w-[745.16px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.31%] left-0 max-w-none top-[-2.65%] w-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute h-[707.59px] left-0 top-0 w-[745.16px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Frame3 />
    </div>
  );
}

function DotVBlueSvg() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] left-0 top-1/2 w-[3px]" data-name="dot_v_blue.svg">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 3 12" width="3">
        <g id="dot_v_blue.svg">
          <path clipRule="evenodd" d={svgPaths.p1cb70} fill="#3280CF" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DotVBlueSvgClip() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="dot_v_blue.svg clip">
      <DotVBlueSvg />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute h-[130.64px] left-[35.09px] opacity-0 top-[90.63px] w-[93.05px]" data-name="Background">
      <DotVBlueSvgClip />
      <div className="-translate-y-1/2 absolute flex h-[130.941px] items-center justify-center left-[6.05px] top-[65.47px] w-[87px]">
        <div className="flex-none rotate-90">
          <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] h-[87px] justify-center leading-[0] not-italic relative text-[#3280cf] text-[60.5px] tracking-[4.838px] w-[130.941px]">
            <p className="leading-[90.72px]">働く</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute bg-[#faf2eb] bottom-[-115.19px] h-[455.52px] left-[-122.87px] rounded-[20px] w-[178.55px]" data-name="Heading 3">
      <div className="absolute border-[#222] border-r-3 border-solid border-t-3 h-[367.41px] right-0 rounded-tr-[20px] top-0 w-[74.41px]" data-name="Border" />
      <Background />
      <div className="-translate-y-1/2 absolute flex h-[261.48px] items-center justify-center left-[41.14px] top-[352.01px] w-[87px]">
        <div className="flex-none rotate-90">
          <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] h-[87px] justify-center leading-[0] not-italic opacity-0 relative text-[#222] text-[60.5px] tracking-[4.838px] w-[261.48px]">
            <p className="leading-[90.72px]">ときも、</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute bg-[#faf2eb] h-[474px] right-[-122.53px] rounded-[20px] top-[-174.7px] w-[198px]" data-name="Heading 3">
      <div className="absolute border-[#222] border-b-3 border-l-3 border-solid bottom-[0.13px] h-[382.09px] left-0 rounded-bl-[20px] w-[84.56px]" data-name="Border" />
    </div>
  );
}

function Off() {
  return (
    <div className="absolute aspect-[584.22998046875/555.02001953125] border-3 border-[#333] border-solid left-0 right-[834.63px] top-[388.08px]" data-name="off">
      <Heading1 />
      <Heading2 />
      <div className="absolute h-[549.02px] left-0 opacity-0 top-0 w-[578.23px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="-translate-x-1/2 absolute h-[1018.2px] left-[calc(50%-0.01px)] top-[199.45px] w-[1418.86px]" data-name="Section">
      <Heading />
      <Border />
      <Off />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#d57563] border-2 border-[#222] border-solid content-stretch flex items-center justify-center left-[303px] px-[32px] py-[8px] rounded-[1920px] top-[-29.05px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[1.1px] whitespace-nowrap">
        <p className="leading-[33px]">学習記録</p>
      </div>
    </div>
  );
}

function Frame9() {
  return <div className="border-2 border-[#4f4f4f] border-solid h-[263px] relative rounded-[8px] shrink-0 w-[478px]" />;
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3280cf] text-[40px] tracking-[2.8333px] whitespace-nowrap">
        <p className="leading-[42.502px]">学習した記録</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4.906px] relative shrink-0 w-full" data-name="テキストリスト">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#222] text-[24px] tracking-[1px]">
        <p className="leading-[1.5]">価値あるものを創作するために必要な知識をまとめています。</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center px-[8px] py-[16px] relative shrink-0 w-full" data-name="Background">
      <Heading3 />
      <Component5 />
    </div>
  );
}

function CardContents() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[45px] py-[8px] right-[45px] top-[101px]" data-name="CardContents">
      <Frame9 />
      <Background1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#eaf3ff] border-2 border-[#4f4f4f] border-solid h-[790px] relative rounded-[39.249px] shrink-0 w-[778px]" data-name="Section">
      <Link />
      <CardContents />
    </div>
  );
}

function Component4() {
  return (
    <div className="col-1 content-stretch flex items-center justify-self-start relative row-1 self-start shrink-0" data-name="学習した記録">
      <Section1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#d57563] border-2 border-[#222] border-solid content-stretch flex items-center justify-center left-[303px] px-[32px] py-[8px] rounded-[1920px] top-[-29.05px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[1.1px] whitespace-nowrap">
        <p className="leading-[33px]">こだわり</p>
      </div>
    </div>
  );
}

function Frame10() {
  return <div className="border-2 border-[#4f4f4f] border-solid h-[263px] relative rounded-[8px] shrink-0 w-[478px]" />;
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3280cf] text-[40px] tracking-[2.8333px] whitespace-nowrap">
        <p className="leading-[42.502px]">創作へのこだわり</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4.906px] relative shrink-0 w-full" data-name="テキストリスト">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#222] text-[24px] tracking-[1px]">
        <p className="leading-[1.5]">デザインからプログラミング、設計まで、私のデザインにおけるこだわりを書き留めています。</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center px-[8px] py-[16px] relative shrink-0 w-full" data-name="Background">
      <Heading4 />
      <Component7 />
    </div>
  );
}

function CardContents1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[45px] py-[8px] right-[45px] top-[101px]" data-name="CardContents">
      <Frame10 />
      <Background2 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#ffe5e5] border-2 border-[#4f4f4f] border-solid h-[790px] relative rounded-[40px] shrink-0 w-[778px]" data-name="Section">
      <Link1 />
      <CardContents1 />
    </div>
  );
}

function Component6() {
  return (
    <div className="col-2 content-stretch flex items-center justify-self-start relative row-1 self-start shrink-0" data-name="学習した記録">
      <Section2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[#d57563] border-2 border-[#222] border-solid content-stretch flex items-center justify-center left-[303px] px-[32px] py-[8px] rounded-[1920px] top-[-29.05px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[1.1px] whitespace-nowrap">
        <p className="leading-[33px]">将来の夢</p>
      </div>
    </div>
  );
}

function Frame11() {
  return <div className="border-2 border-[#4f4f4f] border-solid h-[263px] relative rounded-[8px] shrink-0 w-[478px]" />;
}

function Heading5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3280cf] text-[40px] tracking-[2.8333px] whitespace-nowrap">
        <p className="leading-[42.502px]">わたしの将来の夢</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4.906px] relative shrink-0 w-full" data-name="テキストリスト">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#222] text-[24px] tracking-[1px]">
        <p className="leading-[1.5]">ものづくりを通して為したいことを書き留めています。</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center px-[8px] py-[16px] relative shrink-0 w-full" data-name="Background">
      <Heading5 />
      <Component9 />
    </div>
  );
}

function CardContents2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[45px] py-[8px] right-[45px] top-[101px]" data-name="CardContents">
      <Frame11 />
      <Background3 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#f7f7f7] border-2 border-[#4f4f4f] border-solid h-[790px] relative rounded-[39.249px] shrink-0 w-[778px]" data-name="Section">
      <Link2 />
      <CardContents2 />
    </div>
  );
}

function Component8() {
  return (
    <div className="col-1 content-stretch flex items-center justify-self-start relative row-2 self-start shrink-0" data-name="学習した記録">
      <Section3 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#d57563] border-2 border-[#222] border-solid content-stretch flex items-center justify-center left-[278px] px-[32px] py-[8px] rounded-[1920px] top-[-29px]" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[1.1px] whitespace-nowrap">
        <p className="leading-[33px]">プロフィール</p>
      </div>
    </div>
  );
}

function Frame13() {
  return <div className="border-2 border-[#4f4f4f] border-solid h-[263px] relative rounded-[8px] shrink-0 w-[478px]" />;
}

function Heading6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3280cf] text-[40px] tracking-[2.8333px] whitespace-nowrap">
        <p className="leading-[42.502px]">プロフィール</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4.906px] relative shrink-0 w-full" data-name="テキストリスト">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#222] text-[24px] tracking-[1px]">
        <p className="leading-[1.5]">簡単なプロフィールを書いています。</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center px-[8px] py-[16px] relative shrink-0 w-full" data-name="Background">
      <Heading6 />
      <Component11 />
    </div>
  );
}

function CardContents3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[45px] py-[8px] right-[45px] top-[101px]" data-name="CardContents">
      <Frame13 />
      <Background4 />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#ffeecf] border-2 border-[#4f4f4f] border-solid h-[790px] relative rounded-[39.249px] shrink-0 w-[778px]" data-name="Section">
      <Link3 />
      <CardContents3 />
    </div>
  );
}

function Component10() {
  return (
    <div className="col-2 content-stretch flex items-center justify-self-start relative row-2 self-start shrink-0" data-name="学習した記録">
      <Section4 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute gap-x-[138px] gap-y-[138px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] left-[123.32px] top-[1296.83px] w-[1698px]">
      <Component4 />
      <Component6 />
      <Component8 />
      <Component10 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-[#d57563] border-2 border-[#222] border-solid h-[59px] left-0 rounded-[1920px] top-0 w-[176px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] h-[32px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[22px] text-center text-white top-[calc(50%-0.5px)] tracking-[1.1px] w-[92.753px]">
        <p className="leading-[33px]">お知らせ</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="[word-break:break-word] absolute font-['Zen_Maru_Gothic:Bold',sans-serif] inset-[0_0_0_206px] leading-[0] not-italic text-[#222] tracking-[1.1px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-0 right-[1080.08px] text-[15.4px] top-[11px]">
        <p className="leading-[23.1px]">2025年08月20日</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[33px] justify-center left-0 right-[1035.66px] text-[22px] top-[39.61px]">
        <p className="leading-[33px]">学会発表の予定</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute h-[59px] left-0 right-0 top-0" data-name="Item">
      <Link4 />
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute bg-[#d57563] border-2 border-[#222] border-solid h-[59px] left-0 rounded-[1920px] top-0 w-[176px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] h-[32px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[22px] text-center text-white top-[calc(50%-0.5px)] tracking-[1.1px] w-[92.753px]">
        <p className="leading-[33px]">お知らせ</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="[word-break:break-word] absolute font-['Zen_Maru_Gothic:Bold',sans-serif] inset-[0_0_0_206px] leading-[0] not-italic text-[#222] tracking-[1.1px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-0 right-[1083.53px] text-[15.4px] top-[11px]">
        <p className="leading-[23.1px]">2025年07月11日</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[33px] justify-center left-0 right-[804.64px] text-[22px] top-[39.61px]">
        <p className="leading-[33px]">ウェブサイトをリニューアルしました</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute h-[59px] left-0 right-0 top-[99px]" data-name="Item">
      <Link6 />
      <Link7 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute inset-[0_182.09px_0_0]" data-name="List">
      <Item1 />
      <Item2 />
    </div>
  );
}

function IconArrowRightSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[19px] top-1/2" data-name="icon_arrow_right.svg">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_20)" id="icon_arrow_right.svg">
          <path d={svgPaths.p72ed240} fill="#D57563" id="Vector" />
          <path d={svgPaths.p33210a00} fill="#222222" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_20">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+52.65px)] overflow-clip size-[19px] top-[calc(50%-34.89px)]" data-name="Image">
      <IconArrowRightSvg />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute border-[#222] border-l-3 border-solid bottom-0 left-[1403.69px] top-0 w-[182.09px]" data-name="Link">
      <Image />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] h-[51.39px] justify-center leading-[0] left-[calc(50%+52.26px)] not-italic text-[#222] text-[17.6px] text-center top-[calc(50%+17.31px)] tracking-[1.1px] w-[74.98px]">
        <p className="leading-[26.4px] mb-0">ニュース</p>
        <p className="leading-[26.4px]">一覧へ</p>
      </div>
    </div>
  );
}

function SectionKey() {
  return (
    <div className="-translate-x-1/2 absolute h-[158px] left-[calc(50%+17.21px)] top-[3176.83px] w-[1585.78px]" data-name="Section - key">
      <List />
      <Link8 />
    </div>
  );
}

function Background6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d57563] text-[64.9px] tracking-[5.192px] whitespace-nowrap">
        <p className="leading-[97.35px]">創作への思い</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[22px] tracking-[1.1px] whitespace-nowrap">
        <p className="leading-[38.5px] mb-0">創造性、洞察、ひらめき、アイデア、美学、審美…</p>
        <p className="leading-[38.5px] mb-0">このような言葉に魅せられながら、私はこの世に生かされてきました。</p>
        <p className="leading-[38.5px] mb-0">わたしの心の中にある穴も、この言葉とともに癒えていくようです。</p>
        <p className="leading-[38.5px]">わたしのポートフォリオでは、創造的な衝動に駆られ続けるわたしの軌跡を残していきます。</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex h-[174px] items-center justify-between left-[124.32px] pl-[120px] pr-[40px] top-[176.14px] w-[1696px]">
      <Background6 />
      <Frame1 />
    </div>
  );
}

function Theme01Png() {
  return (
    <div className="absolute aspect-[912.1300048828125/516] left-[163.78px] right-[163.78px] top-[122.84px]" data-name="theme01.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTheme01Png} />
      </div>
    </div>
  );
}

function No01Svg() {
  return (
    <div className="h-[67px] relative shrink-0 w-[81px]" data-name="no01.svg">
      <svg className="absolute block inset-0 size-full" fill="none" height="67" preserveAspectRatio="none" viewBox="0 0 81 67" width="81">
        <g id="no01.svg">
          <path d={svgPaths.p712c280} fill="#D57563" id="Vector" />
          <path d={svgPaths.p29e67680} fill="#D57563" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3280cf] text-[40px] tracking-[2.8333px] whitespace-nowrap">
        <p className="leading-[42.502px]">憧れ人の選書</p>
      </div>
      <No01Svg />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4.906px] relative shrink-0 w-full" data-name="テキストリスト">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#222] text-[10.793px] tracking-[0.5397px]">
        <p className="leading-[18.888px] mb-0">本を読みたいと思っても、どんな本を読めばいいかわからず、結局膨大な選択肢に圧倒されてしまい、読結局読めずに終わってしまいます。</p>
        <p className="leading-[18.888px] mb-0">ただ憧れている推しのあの人に近づけることができれば、何となく読む気が湧いていきます。</p>
        <p className="leading-[18.888px]">「私の大好きな人の本の大好きな本」は、普通の人気の本よりも、頑張って読む気が強くなるでしょう。「憧れの人の選書」では、様々な有名人の選んだ本をまとめています。そして私たちの内面をあこがれの人に近づけることができます。</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8.831px] items-center left-[122.83px] py-[29.437px] right-[122.84px] top-[395.62px]" data-name="Background">
      <Heading7 />
      <Component12 />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-white border-[#222] border-[1.472px] border-solid h-[790.103px] relative rounded-[39.249px] shrink-0 w-[778px]" data-name="Section">
      <Theme01Png />
      <div className="absolute bg-[#f5e9de] h-[253.155px] left-[163.78px] right-[163.78px] top-[122.84px]" data-name="Background" />
      <div className="absolute border-[#222] border-[1.472px] border-solid h-[253.155px] left-[163.78px] right-[163.78px] top-[122.84px]" data-name="Border" />
      <div className="absolute flex h-[191.496px] items-center justify-center left-[398.97px] right-[184.59px] top-[395.42px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-50cqw,-50cqh)] rotate-135 w-[hypot(-50cqw,50cqh)]">
          <div className="bg-white relative rounded-[67.704px] size-full" data-name="Background" />
        </div>
      </div>
      <Background7 />
    </div>
  );
}

function Theme01Png1() {
  return (
    <div className="absolute aspect-[912.1300048828125/516] left-[163.78px] right-[163.78px] top-[122.84px]" data-name="theme01.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTheme01Png} />
      </div>
    </div>
  );
}

function No01Svg1() {
  return (
    <div className="h-[67px] relative shrink-0 w-[81px]" data-name="no01.svg">
      <svg className="absolute block inset-0 size-full" fill="none" height="67" preserveAspectRatio="none" viewBox="0 0 81 67" width="81">
        <g id="no01.svg">
          <path d={svgPaths.p712c280} fill="#D57563" id="Vector" />
          <path d={svgPaths.p29e67680} fill="#D57563" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3280cf] text-[40px] tracking-[2.8333px] whitespace-nowrap">
        <p className="leading-[42.502px]">哲学ワークショップ</p>
      </div>
      <No01Svg1 />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4.906px] relative shrink-0 w-full" data-name="テキストリスト">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#222] text-[10.793px] tracking-[0.5397px]">
        <p className="leading-[18.888px]">哲学を身近にするために、哲学のワークショップを開催するためのアプリを作ってみました。哲学というと敷居が高く、普通の人は敬遠しがちですが、私たちは知らぬ間に哲学っぽい考え方もしています。て日々の生活に哲学的な要素を少しだけ取り入れられれば、その分自分の内面も少しだけ豊かになっていきます。</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8.831px] items-center left-[122.83px] py-[29.437px] right-[122.84px] top-[395.62px]" data-name="Background">
      <Heading8 />
      <Component13 />
    </div>
  );
}

function Section6() {
  return (
    <div className="bg-white border-[#222] border-[1.472px] border-solid h-[790.103px] relative rounded-[39.249px] shrink-0 w-[778px]" data-name="Section">
      <Theme01Png1 />
      <div className="absolute bg-[#f5e9de] h-[253.155px] left-[163.78px] right-[163.78px] top-[122.84px]" data-name="Background" />
      <div className="absolute border-[#222] border-[1.472px] border-solid h-[253.155px] left-[163.78px] right-[163.78px] top-[122.84px]" data-name="Border" />
      <div className="absolute flex h-[191.496px] items-center justify-center left-[398.97px] right-[184.59px] top-[395.42px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-50cqw,-50cqh)] rotate-135 w-[hypot(-50cqw,50cqh)]">
          <div className="bg-white relative rounded-[67.704px] size-full" data-name="Background" />
        </div>
      </div>
      <Background8 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex gap-[47px] items-center left-[167px] top-[622.64px]">
      <Section5 />
      <Section6 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="74.9899" preserveAspectRatio="none" viewBox="0 0 316.944 74.9899" width="316.944">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p19031100} fill="#3280CF" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p2934f900} fill="#222222" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[30.71%_8.52%_33.73%_7.45%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="26.6733" preserveAspectRatio="none" viewBox="0 0 266.368 26.6733" width="266.368">
        <g id="Group">
          <path d={svgPaths.p18aa6f00} fill="white" id="Vector" />
          <path d={svgPaths.p11f9ac00} fill="white" id="Vector_2" />
          <path d={svgPaths.p9814a00} fill="white" id="Vector_3" />
          <path d={svgPaths.p3b143780} fill="white" id="Vector_4" />
          <path d={svgPaths.p28bb4000} fill="white" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ThemeSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[75px] left-1/2 overflow-clip top-1/2 w-[316.97px]" data-name="theme.svg">
      <Group />
      <Group1 />
    </div>
  );
}

function Heading2HomeLead() {
  return (
    <div className="absolute h-[75px] left-[166.92px] overflow-clip right-[166.92px] top-[584.64px]" data-name="Heading 2 - home_lead → 研究テーマ">
      <ThemeSvg />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#f5e9de] h-[1634px] left-[17.32px] right-[-17.32px] rounded-[100px] top-[3451.83px]" data-name="Background">
      <Frame2 />
      <Frame14 />
      <Heading2HomeLead />
    </div>
  );
}

function ProfilePng() {
  return (
    <div className="pointer-events-none relative rounded-[166.92px] shrink-0 size-[333.84px]" data-name="profile.png">
      <div className="absolute inset-0 overflow-hidden rounded-[166.92px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfilePng} />
      </div>
      <div aria-hidden className="absolute border-3 border-[#222] border-solid inset-0 rounded-[166.92px]" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[35.2px] tracking-[1.76px] whitespace-nowrap">
        <p className="leading-[52.8px]">わたしのプロフィール</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[123px]">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[26.4px]">名前</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[26.4px]">経歴</p>
      </div>
      <div className="flex flex-col h-[25px] justify-center relative shrink-0 w-full">
        <p className="leading-[26.4px]">なりたい職業</p>
      </div>
      <div className="flex flex-col h-[25px] justify-center relative shrink-0 w-full">
        <p className="leading-[26.4px]">できること</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[494px]">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[26.4px]">Inui Yoshitaka</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[26.4px]">新卒からIT企業でサービスエンジニアに従事。現在4年目。</p>
      </div>
      <div className="flex flex-col h-[25px] justify-center relative shrink-0 w-full">
        <p className="leading-[26.4px]">UI/UXデザイナー、アプリケーションエンジニア</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[26.4px]">Figma、React、デザインシステム運用、Typescript</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] gap-[45px] items-center leading-[0] not-italic relative shrink-0 text-[#222] text-[17.6px] tracking-[1.1px] w-full">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-[662px]">
      <Heading9 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[83px] items-center left-0 top-0">
      <ProfilePng />
      <Frame7 />
    </div>
  );
}

function SectionAreaBg() {
  return (
    <div className="-translate-x-1/2 absolute h-[333.84px] left-[calc(50%+35.28px)] top-[5193.83px] w-[1251.92px]" data-name="Section - area_bg">
      <Frame8 />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 242, 235) 0%, rgb(250, 242, 235) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="1920w light">
      <Header />
      <Section />
      <Frame12 />
      <SectionKey />
      <Background5 />
      <SectionAreaBg />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Zen_Maru_Gothic:Bold',sans-serif] h-[19px] justify-center leading-[0] left-[1541.32px] not-italic text-[#222] text-[13.2px] top-[5537.33px] tracking-[1.1px] w-[297.346px]">
        <p className="leading-[19.8px]">© 2026 Yoshitaka Inui. All Right Reserved.</p>
      </div>
    </div>
  );
}