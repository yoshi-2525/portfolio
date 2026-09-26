import React, { type CSSProperties } from "react";
import { Link } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import WorkCard from "@/components/WorkCard";
import { cardColors, accentColors } from "@/styles/palette";
import imgProfile from "@/imports/1920WLight/bdbe7ab60c7cedfdf13d0d0825db141c6ad80d55.png";
import { pageHeadings } from "@/data/pageHeadings";
import { works } from "@/data/works";
import homeImg from "@/imports/images/typing.png";

const navCardConfig = [
  { key: "learning", color: cardColors.blue, accentColor: accentColors.blue },
  { key: "commitment", color: cardColors.coral, accentColor: accentColors.coral },
  { key: "dreams", color: cardColors.gray, accentColor: accentColors.gray },
  { key: "profile", color: cardColors.amber, accentColor: accentColors.brown },
] as const;

const navCards = navCardConfig.map(({ key, color, accentColor }) => {
  const { to, label, title, description, illustrationSrc: image } = pageHeadings[key];
  return { to, label, title, description, color, accentColor, image };
});

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      <SiteHeader />

      <main>
        <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">
          {/* Hero */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-16">
            <h1 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-accent-blue text-4xl sm:text-5xl lg:text-6xl tracking-[4px] leading-tight shrink-0 animate-fade-in-left">
              <span className="block whitespace-nowrap">ただひたすらに</span>
              <span className="block whitespace-nowrap">ものを創る</span>
            </h1>


            <div className="relative w-full max-w-xl mx-auto md:mx-0 md:shrink-0 animate-fade-in-right" style={{ animationDelay: "120ms" }}>
              <div className="rounded-[24px] border-1 border-border-dark overflow-hidden">
                <img
                  src={homeImg}
                  alt="デスクで作業する筆者のイラスト"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-12 my-12 p-8 rounded-[24px] bg-[#FAFAFA] border border-border-dark animate-fade-in-left" style={{ animationDelay: "150ms" }}>
              <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#d57563] text-4xl tracking-[3px] shrink-0">
                創作への思い
              </h2>
              <div className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#222] text-base leading-loose tracking-[0.8px] max-w-3xl">
                <p>創造性、洞察、ひらめき、アイデア・・・・</p>
                <p>このような言葉に魅せられながら、私はこの世に生かされてきました。</p>
                <p>わたしのポートフォリオでは、創造的な衝動に駆られ続けるわたしの軌跡を残していきます。</p>
              </div>
            </div>

        {/* Divider */}
        <div className="border-t-2 border-[#c2c4c3] my-10" />            

          {/* Quick links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mb-4 py-8">
            {navCards.map((card, index) => (
              <Link
                key={card.to}
                to={card.to}
                className="relative block rounded-[20px] border-2 border-border-gray hover:border-[var(--accent)] p-12 pt-12 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all animate-fade-in-up"
                style={{
                  "--accent": card.accentColor,
                  backgroundColor: card.color,
                  animationDelay: `${index * 100 + 120}ms`,
                } as CSSProperties}
              >
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#d57563] text-white text-base font-['Zen_Maru_Gothic:Bold',sans-serif] tracking-[1.1px] px-6 py-2 rounded-full whitespace-nowrap">
                  {card.label}
                </span>

                <div className="border-1 border-border-dark rounded-lg aspect-[16/9] mb-6 overflow-hidden">
                  <img src={card.image} alt="" className="w-full h-full object-cover" />
                </div>

                <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-accent-blue text-2xl tracking-[1px] mb-2">
                  {card.title}
                </h2>
                <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#222] text-base tracking-[0.5px] leading-relaxed">
                  {card.description.join("")}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-8">
          <div className="border-t-2 border-[#c2c4c3] my-10" />
        </div>

        {/* Creation thoughts + featured works */}
        <section
          className="max-w-6xl mx-auto rounded-[48px] p-8"
          //style={{ backgroundColor: cardColors.gray }}
        >

          <div className="max-w-6xl mx-auto py-4">

            <div className="flex mb-10">
              <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-accent-blue text-4xl tracking-[3px] shrink-0">
                作品集
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {works.slice(0, 2).map((work, i) => (
                <WorkCard key={work.id} work={work} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Profile teaser */}
        <div className="max-w-6xl mx-auto px-8 py-8">
          <Link to="/profile" className="flex flex-col md:flex-row gap-10 items-center md:items-start group">
            <div
              className="shrink-0 rounded-full border-3 border-border-dark overflow-hidden"
              style={{ width: 180, height: 180 }}
            >
              <img
                src={imgProfile}
                alt="Inui Yoshitaka のプロフィール写真"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-3xl tracking-[1.5px] mb-6 group-hover:text-[#d57563] transition-colors">
                わたしのプロフィール
              </h2>
              <div className="grid grid-cols-[110px_1fr] gap-y-3 gap-x-6">
                {[
                  { label: "名前", value: "Inui Yoshitaka" },
                  { label: "経歴", value: "新卒からIT企業でサービスエンジニアに従事。現在4年目。" },
                  { label: "なりたい職業", value: "UI/UXデザイナー、アプリケーションエンジニア" },
                  { label: "できること", value: "Figma、React、デザインシステム運用、TypeScript" },
                ].map(({ label, value }) => (
                  <React.Fragment key={label}>
                    <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#888] text-sm tracking-[0.5px]">
                      {label}
                    </span>
                    <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#222] text-sm tracking-[0.5px]">
                      {value}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-right px-10 py-8 border-t border-border-gray">
        <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xs tracking-[1.1px]">
          © 2026 Yoshitaka Inui. All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
