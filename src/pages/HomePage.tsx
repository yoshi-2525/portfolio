import React from "react";
import { Link } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import { cardColors, accentColors } from "@/styles/palette";
import imgHero from "@/imports/1920WLight/f37733317dc2f43e92a86618c5a3d5f13af1f741.png";
import imgTheme01 from "@/imports/1920WLight/10fd8431ae6d9c2d06134d8fb03827958358aaad.png";
import imgProfile from "@/imports/1920WLight/bdbe7ab60c7cedfdf13d0d0825db141c6ad80d55.png";

const navCards = [
  {
    to: "/learning",
    label: "学習記録",
    title: "学習した記録",
    description: "価値あるものを創作するために必要な知識をまとめています。",
    color: cardColors.blue,
  },
  {
    to: "/commitment",
    label: "こだわり",
    title: "創作へのこだわり",
    description: "デザインからプログラミング、設計まで、私のデザインにおけるこだわりを書き留めています。",
    color: cardColors.coral,
  },
  {
    to: "/dreams",
    label: "将来の夢",
    title: "わたしの将来の夢",
    description: "ものづくりを通して為したいことを書き留めています。",
    color: cardColors.gray,
  },
  {
    to: "/profile",
    label: "プロフィール",
    title: "プロフィール",
    description: "簡単なプロフィールを書いています。",
    color: cardColors.amber,
  },
];

const featuredWorks = [
  {
    no: "01",
    title: "憧れ人の選書",
    description:
      "憧れの人物が選んだ本を一覧できるキュレーションアプリ。膨大な選択肢に圧倒されがちな読書を、「尊敬する人の推薦」というフィルターで親しみやすくしました。",
  },
  {
    no: "02",
    title: "哲学ワークショップ",
    description:
      "哲学を身近にするためのワークショップ開催支援アプリ。参加者が気軽に哲学的な問いを持ち寄り、対話できる場を設計しました。",
  },
];

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(90deg, rgb(250, 242, 235) 0%, rgb(250, 242, 235) 100%)" }}
    >
      <SiteHeader />

      <main>
        <div className="max-w-6xl mx-auto px-8 pt-16 pb-20">
          {/* Hero */}
          <div className="relative flex flex-col md:flex-row md:items-center gap-10 pb-10 mb-10 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gradient-to-r after:from-transparent after:via-[#d57563] after:to-transparent">
            <h1 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#3280cf] text-4xl sm:text-5xl lg:text-6xl tracking-[4px] leading-tight shrink-0">
              <span className="block whitespace-nowrap">ただひたすらに</span>
              <span className="block whitespace-nowrap">ものを創る</span>
            </h1>

            {/* Decorative bracket accent */}
            <div className="relative hidden lg:block shrink-0" style={{ width: 180, height: 220 }} aria-hidden="true">
              <div className="absolute left-0 top-0 rounded-tr-[20px] border-t-2 border-r-2 border-[#222]" style={{ width: 120, height: 130 }} />
              <div className="absolute right-0 bottom-0 rounded-bl-[20px] border-b-2 border-l-2 border-[#222]" style={{ width: 130, height: 140 }} />
            </div>

            <div className="relative w-full max-w-md mx-auto md:mx-0 md:flex-1">
              <div className="rounded-[24px] border-2 border-[#222] overflow-hidden aspect-[4/3]">
                <img
                  src={imgHero}
                  alt="デスクで作業する筆者のイラスト"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full border-2 border-[#222]"
                style={{ backgroundColor: "#faf2eb" }}
              />
            </div>
          </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-12 mb-16">
              <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#d57563] text-5xl tracking-[3px] shrink-0">
                創作への思い
              </h2>
              <div className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#222] text-base leading-loose tracking-[0.8px] max-w-3xl">
                <p>創造性、洞察、ひらめき、アイデア・・・・</p>
                <p>このような言葉に魅せられながら、私はこの世に生かされてきました。</p>
                <p>わたしのポートフォリオでは、創造的な衝動に駆られ続けるわたしの軌跡を残していきます。</p>
              </div>
            </div>

          {/* Quick links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mb-16">
            {navCards.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="relative block rounded-[20px] border-2 border-[#222] p-12 pt-12 hover:shadow-lg transition-shadow"
                style={{ backgroundColor: card.color }}
              >
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#d57563] border-2 border-[#222] text-white text-sm font-['Zen_Maru_Gothic:Bold',sans-serif] tracking-[1.1px] px-6 py-2 rounded-full whitespace-nowrap">
                  {card.label}
                </span>

                <div className="border-2 border-[#4f4f4f] rounded-lg aspect-[16/9] mb-6" />

                <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#3280cf] text-2xl tracking-[1px] mb-2">
                  {card.title}
                </h2>
                <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#222] text-base tracking-[0.5px] leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Creation thoughts + featured works */}
        <section
          className="mx-4 md:mx-8 my-4 rounded-[48px] px-8 py-16"
          style={{ backgroundColor: cardColors.peach }}
        >
          <div className="max-w-5xl mx-auto">

            <div className="flex justify-center mb-10">
              <span className="bg-[#3280cf] border-2 border-[#222] text-white text-sm font-['Zen_Maru_Gothic:Bold',sans-serif] tracking-[1.1px] rounded-full px-6 py-2">
                研究テーマ
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {featuredWorks.map((work) => (
                <Link
                  key={work.no}
                  to="/works"
                  className="bg-white rounded-[20px] border-2 border-[#222] overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="p-6" style={{ backgroundColor: cardColors.sand }}>
                    <img
                      src={imgTheme01}
                      alt=""
                      className="w-full h-36 object-cover rounded-[8px] border-2 border-[#222]"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#3280cf] text-2xl tracking-[1.5px]">
                        {work.title}
                      </h3>
                      <span
                        className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-3xl tracking-[1px]"
                        style={{ color: accentColors.coral }}
                      >
                        {work.no}
                      </span>
                    </div>
                    <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#222] text-sm tracking-[0.5px] leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Profile teaser */}
        <div className="max-w-6xl mx-auto px-8 py-20">
          <Link to="/profile" className="flex flex-col md:flex-row gap-10 items-center md:items-start group">
            <div
              className="shrink-0 rounded-full border-3 border-[#222] overflow-hidden"
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
      <footer className="text-right px-10 py-8 border-t border-[#e0d8d0]">
        <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xs tracking-[1.1px]">
          © 2026 Yoshitaka Inui. All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
