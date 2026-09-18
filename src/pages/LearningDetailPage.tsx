import { useState } from "react";
import { Link, useParams } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import LearningCategoryFilter from "@/components/LearningCategoryFilter";
import LearningNavItem from "@/components/LearningNavItem";
import { records, categories } from "@/data/learningRecords";
import imgDreamsHero from "@/imports/1920WLight/a9ac80ec745b07e07c3edd921ec5b28762ff0782.png";

export default function LearningDetailPage() {
  const { id } = useParams<{ id: string }>();
  const record = records.find((r) => r.id === Number(id));
  const [active, setActive] = useState("すべて");
  const filtered = active === "すべて" ? records : records.filter((r) => r.category === active);

  if (!record) {
    return (
      <div
        className="min-h-screen"
        style={{ background: "linear-gradient(90deg, rgb(250, 242, 235) 0%, rgb(250, 242, 235) 100%)" }}
      >
        <SiteHeader />
        <main className="max-w-3xl mx-auto px-8 py-24 text-center">
          <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#aaa] text-xl tracking-[1px] mb-8">
            該当する記録が見つかりませんでした
          </p>
          <Link
            to="/learning"
            className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#d57563] text-sm tracking-[1px] hover:opacity-70 transition-opacity"
          >
            ← 学習記録一覧へ戻る
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(90deg, rgb(250, 242, 235) 0%, rgb(250, 242, 235) 100%)" }}
    >
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading
          eyebrow="LEARNING LOG"
          title="学習した記録"
          description={
            <>
              価値あるものを創作するために必要な知識をまとめています。<br />
              日々の学びの軌跡を、ここに刻んでいきます。
            </>
          }
          illustrationSrc={imgDreamsHero}
        />

        <LearningCategoryFilter categories={categories} active={active} onChange={setActive} />

        {/* Two-panel layout: detail (left) + record navigation (right) */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
          
          {/* Right: navigation between records */}
          
          <nav className="flex flex-col gap-4 sticky top-8">
          <Link
            to="/learning"
            className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#666] text-xm tracking-[1.1px] hover:text-[#222] transition-colors"
          >
          ← 学習記録一覧へ戻る
        </Link>
            {filtered.map((r) => (
              <LearningNavItem key={r.id} record={r} isActive={r.id === record.id} />
            ))}
          </nav>
          {/* Left: detail */}
          <article
            className="rounded-[20px] border-2 border-[#222] overflow-hidden"
            style={{ backgroundColor: record.color }}
          >
            <div className="h-1.5 bg-[#d57563]" />

            <div className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-8">
                <span
                  className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-xs tracking-[1px] px-3 py-1 rounded-full border border-current"
                  style={{ color: record.accentColor }}
                >
                  {record.category}
                </span>
                <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs text-[#666] tracking-[0.5px]">
                  {record.date}
                </span>
              </div>
              
              <h1 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-3xl tracking-[1.5px] mb-6 leading-snug">
                {record.title}
              </h1>

              <div className="border-t-2 border-[#222] pt-8 flex flex-col gap-4">
                {record.content.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={i}
                        className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-2xl tracking-[1px] mt-4"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "image") {
                    return (
                      <img
                        key={i}
                        src={block.image}
                        alt=""
                        className="w-full rounded-[16px] border-2 border-[#222] object-cover"
                      />
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-base leading-loose tracking-[0.6px]"
                    >
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </div>
          </article>

        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-10 py-8 mt-16 border-t border-[#e0d8d0]">
        <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xs tracking-[1.1px]">
          © 2026 Yoshitaka Inui. All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
