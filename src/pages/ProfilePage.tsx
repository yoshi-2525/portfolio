import React from "react";
import imgProfile from "@/imports/1920WLight/bdbe7ab60c7cedfdf13d0d0825db141c6ad80d55.png";
import SiteHeader from "@/components/SiteHeader";
import { cardColors } from "@/styles/palette";

const skills = [
  { name: "Figma", level: 90, note: "コンポーネント設計・デザインシステム" },
  { name: "React", level: 80, note: "React 19 / フック / 状態管理" },
  { name: "TypeScript", level: 75, note: "型設計・型安全なAPI連携" },
  { name: "デザインシステム", level: 85, note: "トークン設計・コンポーネント運用" },
  { name: "UI/UX設計", level: 70, note: "ユーザーリサーチ・プロトタイピング" },
];

const timeline = [
  {
    year: "2022",
    title: "IT企業に新卒入社",
    description: "サービスエンジニアとしてキャリアをスタート。SaaSプロダクトの設計・保守に携わる。",
    color: cardColors.blue,
  },
  {
    year: "2023",
    title: "フロントエンド開発に傾倒",
    description: "React / TypeScript を独学で習得。社内ツールのUI改善プロジェクトを主導。",
    color: cardColors.coral,
  },
  {
    year: "2024",
    title: "Figma・デザインに本格参入",
    description: "デザインとエンジニアリングの橋渡しとしてデザインシステム運用を担当。Figma を深く学ぶ。",
    color: cardColors.purple,
  },
  {
    year: "2025",
    title: "学会発表・ポートフォリオ制作",
    description: "哲学ワークショップアプリを開発。ウェブサイトをリニューアルし、ポートフォリオを公開。",
    color: cardColors.green,
  },
  {
    year: "2026",
    title: "UI/UXデザイナーを本格的に目指す",
    description: "個人プロダクト開発とデザイン研究を継続。創造への衝動を形にし続ける。",
    color: cardColors.amber,
    isCurrent: true,
  },
];

export default function ProfilePage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(90deg, rgb(250, 242, 235) 0%, rgb(250, 242, 235) 100%)" }}
    >
      <SiteHeader />

      <main className="max-w-5xl mx-auto px-8 py-16">

        {/* Hero: photo + basic info */}
        <section className="flex flex-col md:flex-row gap-12 items-start mb-20">
          {/* Profile photo */}
          <div className="shrink-0">
            <div
              className="rounded-full border-3 border-[#222] overflow-hidden"
              style={{ width: 220, height: 220 }}
            >
              <img
                src={imgProfile}
                alt="Inui Yoshitaka のプロフィール写真"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#d57563] text-sm tracking-[1px] mb-2">
              PROFILE
            </p>
            <h1 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-5xl tracking-[2px] mb-1 leading-tight">
              わたしのプロフィール
            </h1>
            <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#3280cf] text-2xl tracking-[1px] mb-8">
              Inui Yoshitaka
            </p>

            <div className="grid grid-cols-[120px_1fr] gap-y-4 gap-x-6">
              {[
                { label: "名前", value: "Inui Yoshitaka" },
                { label: "経歴", value: "新卒からIT企業でサービスエンジニアに従事。現在4年目。" },
                { label: "なりたい職業", value: "UI/UXデザイナー、アプリケーションエンジニア" },
                { label: "できること", value: "Figma、React、デザインシステム運用、TypeScript" },
              ].map(({ label, value }) => (
                <React.Fragment key={label}>
                  <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#888] text-base tracking-[0.8px] leading-relaxed">
                    {label}
                  </span>
                  <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#222] text-base tracking-[0.8px] leading-relaxed">
                    {value}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-[#e0d8d0] mb-20" />

        {/* Skills */}
        <section className="mb-20">
          <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#d57563] text-sm tracking-[1px] mb-3">
            SKILLS
          </p>
          <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#3280cf] text-4xl tracking-[2px] mb-10">
            できること
          </h2>

          <div className="flex flex-col gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-baseline mb-2">
                  <div className="flex items-baseline gap-4">
                    <span className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-lg tracking-[1px]">
                      {skill.name}
                    </span>
                    <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#888] text-sm tracking-[0.5px]">
                      {skill.note}
                    </span>
                  </div>
                  <span className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#3280cf] text-sm tracking-[0.5px]">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2.5 bg-white border border-[#ddd] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#3280cf] transition-all"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-[#e0d8d0] mb-20" />

        {/* Timeline */}
        <section className="mb-20">
          <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#d57563] text-sm tracking-[1px] mb-3">
            TIMELINE
          </p>
          <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#3280cf] text-4xl tracking-[2px] mb-10">
            経歴
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[52px] top-0 bottom-0 w-0.5 bg-[#e0d8d0]" />

            <div className="flex flex-col gap-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start">
                  {/* Year bubble */}
                  <div
                    className="shrink-0 w-[104px] flex justify-center"
                  >
                    <div
                      className={`font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px] px-3 py-1.5 rounded-full border-2 border-[#222] z-10 relative ${
                        item.isCurrent
                          ? "bg-[#d57563] text-white"
                          : "bg-white text-[#222]"
                      }`}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-[16px] border-2 border-[#222] p-6 mb-2"
                    style={{ backgroundColor: item.color }}
                  >
                    <h3 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xl tracking-[1px] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#444] text-sm tracking-[0.5px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section>
          <div
            className="rounded-[20px] border-2 border-[#222] px-12 py-10 text-center"
            style={{ backgroundColor: cardColors.sand }}
          >
            <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#d57563] text-4xl tracking-[3px] mb-6">
              創作への思い
            </p>
            <div className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-lg leading-loose tracking-[0.8px] max-w-2xl mx-auto">
              <p>創造性、洞察、ひらめき、アイデア、美学、審美…</p>
              <p>このような言葉に魅せられながら、私はこの世に生かされてきました。</p>
              <p>わたしの心の中にある穴も、この言葉とともに癒えていくようです。</p>
              <p className="mt-4">
                わたしのポートフォリオでは、創造的な衝動に駆られ続けるわたしの軌跡を残していきます。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-right px-10 py-8 mt-16 border-t border-[#e0d8d0]">
        <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xs tracking-[1.1px]">
          © 2026 Yoshitaka Inui. All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
