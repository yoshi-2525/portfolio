import React from "react";
import imgProfile from "@/imports/images/typing.png";
import SiteHeader from "@/components/SiteHeader";
import { cardColors } from "@/styles/palette";

const profileInfo = [
  { label: "名前", value: "Inui Yoshitaka" },
  { label: "なりたい職業", value: "UI/UXデザイナー、アプリケーションエンジニア" },
  { label: "できること", value: "Figma、React、デザインシステム運用、TypeScript" },
  { label: "趣味", value: "ヨガ、読書、散歩、音楽" }
];

const timeline = [
  {
    year: "2023",
    title: "IT企業に新卒入社",
    description: "APM製品を扱っている製品の企業に入社し、QAエンジニアとして製品の機能テストを遂行。",
    color: cardColors.blue,
  },
  {
    year: "2025",
    title: "部署移動でサービスエンジニアに従事",
    description: "ジョブローテで部署を移動し、サービスの問い合わせやインシデントの対応、構築業務等を遂行。",
    color: cardColors.coral,
  },
  {
    year: "2026.04",
    title: "UI/UXデザインの学習を本格的に開始",
    description: "東京デザインプレックス研究所に通い、本格的にUI/UXについての学習をはじめ、基礎的な知識を習得。",
    color: cardColors.purple,
  },
  {
    year: "2026.08",
    title: "プログラミングの学習を本格的に開始",
    description: "東京デジタルアカデミー若手エンジニアコースのReact上級コースを受講。ReactやNext.jsの基礎的な知識を習得。",
    color: cardColors.green,
  },
  {
    year: "2026.09",
    title: "UI/UXデザイナーを本格的に目指す",
    description: "個人プロダクト開発とデザイン研究を継続。創造への衝動を形にし続ける。",
    color: cardColors.amber,
    isCurrent: true,
  },
];

export default function ProfilePage() {
  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      <SiteHeader />

      <main className="max-w-5xl mx-auto px-8 pt-16 pb-12">

        {/* Hero: photo + basic info */}
        <section className="flex flex-col md:flex-row gap-16 items-start mb-20">
          {/* Profile photo */}
          <div className="shrink-0 animate-fade-in-left">
            <div
              className="rounded-full border-3 border-border-dark overflow-hidden"
              style={{ width: 330, height: 330 }}
            >
              <img
                src={imgProfile}
                alt="Inui Yoshitaka のプロフィール写真"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 animate-fade-in-right" style={{ animationDelay: "120ms" }}>
            <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#d57563] text-sm tracking-[1px] mb-2">
              PROFILE
            </p>
            <h1 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-5xl tracking-[2px] mb-12 leading-tight">
              わたしのプロフィール
            </h1>

            <div className="grid grid-cols-[120px_1fr] gap-y-4 gap-x-6">
              {profileInfo.map(({ label, value }) => (
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
        <div className="border-t-2 border-[#c2c4c3] mb-20" />

        {/* Timeline */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#d57563] text-sm tracking-[1px] mb-3">
            TIMELINE
          </p>
          <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-accent-blue text-4xl tracking-[2px] mb-10">
            経歴
          </h2>

          <div className="relative">
            <div className="flex flex-col gap-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="relative flex gap-8 items-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  {/* Vertical line segment (first row starts at the bubble) */}
                  <div
                    className={`absolute left-[52px] bottom-0 w-0.5 bg-border-gray ${
                      index === 0 ? "top-1/2" : "-top-8"
                    }`}
                  />
                  {/* Year bubble */}
                  <div
                    className="shrink-0 w-[104px] flex justify-center"
                  >
                    <div
                      className={`font-['Zen_Maru_Gothic:Bold',sans-serif] text-base tracking-[1px] px-5 py-1.5 rounded-full border-2 border-border-dark z-10 relative ${
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
                    className="flex-1 rounded-[16px] border-2 border-border-dark p-6 mb-2"
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
      </main>

      {/* Footer */}
      <footer className="text-right px-10 py-8 mt-16 border-t border-border-gray">
        <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xs tracking-[1.1px]">
          © 2026 Yoshitaka Inui. All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
