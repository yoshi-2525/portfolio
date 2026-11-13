import type { ComponentType } from "react";
import { BookOpen, Footprints, Music } from "lucide-react";
import YogaIcon from "@/components/icons/YogaIcon";
import imgProfile from "@/imports/images/typing.webp";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeading from "@/components/PageHeading";
import { accentColors, cardColors, type AccentColorKey, type CardColorKey } from "@/styles/palette";
import { pageHeadings } from "@/data/pageHeadings";

const profile = {
  name: "Inui Yoshitaka",
  role: "UI/UX Designer / QA Engineer / Service Engineer",
  intro: "新卒からIT企業でQA業務やインシデント等を行い、現在はUI/UXデザイナーになることを志しています。",
};

const skills: { label: string; color: CardColorKey & AccentColorKey }[] = [
  { label: "Figma", color: "coral" },
  { label: "React", color: "blue" },
  { label: "TypeScript", color: "purple" },
  { label: "デザインシステム運用", color: "green" },
];

const hobbies: { label: string; Icon: ComponentType<{ size?: number; "aria-hidden"?: boolean | "true" }>; color: CardColorKey & AccentColorKey }[] = [
  { label: "ヨガ", Icon: YogaIcon, color: "green" },
  { label: "読書", Icon: BookOpen, color: "coral" },
  { label: "散歩", Icon: Footprints, color: "blue" },
  { label: "音楽", Icon: Music, color: "purple" },
];

const timeline = [
  {
    year: "2023.04",
    title: "IT企業に新卒入社",
    description: "APM製品を扱っている製品の企業に入社し、QAエンジニアとして製品の機能テストを遂行。",
    color: cardColors.blue,
  },
  {
    year: "2025.04",
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
  }
];

export default function ProfilePage() {
  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-8 pt-16 pb-12">
        <PageHeading {...pageHeadings.profile} />

        {/* Divider */}
        <div className="border-t-2 border-divider mb-12" />

        {/* Photo + basic info */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-center mb-12">
          {/* Profile photo: offset circle behind */}
          <div className="shrink-0 animate-fade-in-left">
            <div className="relative" style={{ width: 280, height: 280 }}>
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-card-blue border-2 border-border-dark translate-x-3 translate-y-3"
              />
              <div className="relative w-full h-full rounded-full border-3 border-border-dark overflow-hidden">
                <img
                  fetchPriority="high"
                  src={imgProfile}
                  alt="Inui Yoshitaka のプロフィール写真"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Basic info */}
          <div className="flex-1 w-full animate-fade-in-right" style={{ animationDelay: "120ms" }}>
            <h2 className="font-maru font-bold text-ink-222 text-4xl tracking-[3px] mb-2">
              {profile.name}
            </h2>
            <p className="font-kaku font-medium text-ink-666 text-base tracking-[1px] mb-4">
              {profile.role}
            </p>
            <p className="font-kaku font-medium text-ink-444 text-base tracking-[0.5px] leading-relaxed mb-4">
              {profile.intro}
            </p>

            <p className="font-kaku font-medium text-accent-coral text-sm tracking-[1px] mb-3">
              SKILLS
            </p>
            <ul className="flex flex-wrap gap-2 mb-6">
              {skills.map(({ label, color }) => (
                <li
                  key={label}
                  className="font-maru font-bold text-ink-222 text-sm tracking-[1px] rounded-full border px-4 py-1.5"
                  style={{ backgroundColor: cardColors[color], borderColor: accentColors[color] }}
                >
                  {label}
                </li>
              ))}
            </ul>

            <p className="font-kaku font-medium text-accent-coral text-sm tracking-[1px] mb-3">
              HOBBIES
            </p>
            <ul className="flex flex-wrap gap-3">
              {hobbies.map(({ label, Icon, color }) => (
                <li
                  key={label}
                  className="flex flex-col items-center gap-1 w-22 rounded-2xl border border-border-dark py-3"
                >
                  <span
                    className="flex items-center justify-center w-12 h-12 rounded-full"
                    style={{ backgroundColor: cardColors[color], color: accentColors[color] }}
                  >
                    <Icon aria-hidden="true" size={24} />
                  </span>
                  <span className="font-maru font-bold text-ink-444 text-sm tracking-[1px]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-divider mb-12" />

        {/* Timeline */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <p className="font-kaku font-medium text-accent-coral text-sm tracking-[1px] mb-3">
            TIMELINE
          </p>
          <h2 className="font-maru font-bold text-accent-blue text-4xl tracking-[3px] mb-10">
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
                    className={`absolute left-13 bottom-0 w-0.5 bg-border-gray ${
                      index === 0 ? "top-1/2" : "-top-8"
                    }`}
                  />
                  {/* Year bubble */}
                  <div
                    className="shrink-0 w-26 flex justify-center"
                  >
                    <div
                      className="font-maru font-bold text-base tracking-[1px] px-5 py-1.5 rounded-full border-2 border-border-dark z-10 relative bg-white text-ink-222"
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl border-2 border-border-dark p-6 mb-2"
                    style={{ backgroundColor: item.color }}
                  >
                    <h3 className="font-maru font-bold text-ink-222 text-xl tracking-[1px] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-kaku font-medium text-ink-444 text-sm tracking-[0.5px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
