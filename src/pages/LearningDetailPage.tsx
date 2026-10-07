import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackLink from "@/components/BackLink";
import PageHeading from "@/components/PageHeading";
import LearningCategoryFilter from "@/components/LearningCategoryFilter";
import LearningNavItem from "@/components/LearningNavItem";
import { records, categories } from "@/data/learningRecords";
import { pageHeadings } from "@/data/pageHeadings";

export default function LearningDetailPage() {
  const { id } = useParams<{ id: string }>();
  const record = records.find((r) => r.id === Number(id));
  const [active, setActive] = useState("すべて");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const filtered = active === "すべて" ? records : records.filter((r) => r.category === active);

  if (!record) {
    return (
      <div className="min-h-screen bg-page-bg">
        <SiteHeader />
        <main className="max-w-3xl mx-auto px-8 py-24 text-center">
          <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#aaa] text-xl tracking-[1px] mb-8">
            該当する記録が見つかりませんでした
          </p>
          <BackLink to="/learning">学習記録一覧へ戻る</BackLink>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading {...pageHeadings.learning} />

        <LearningCategoryFilter categories={categories} active={active} onChange={setActive} />

        {/* Two-panel layout: navigation (left) + detail (right) */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">

          {/* Left: navigation between records */}
          <nav className="flex flex-col gap-4 md:sticky md:top-8">
            <BackLink to="/learning">学習記録一覧へ戻る</BackLink>
            {filtered.map((r) => (
              <LearningNavItem key={r.id} record={r} isActive={r.id === record.id} />
            ))}
          </nav>
          {/* Right: detail */}
          <article
            className="rounded-[20px] border-2 border-border-dark overflow-hidden"
            style={{ backgroundColor: record.color }}
          >
            <div className="h-1.5 bg-[#d57563]" />

            <div className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-8">
                <span
                  className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-xs tracking-[1px] px-3 py-1 rounded-full bg-white"
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

              <div className="border-t-2 border-border-dark pt-8 flex flex-col">
                {record.content.map((block, i) => {
                  // Spacing is set per block: tight under a heading, wide between sections, extra wide before a heading.
                  const prev = record.content[i - 1];
                  const spacing =
                    i === 0 ? "" : prev.type === "heading" ? "mt-3" : block.type === "heading" ? "mt-12" : "mt-8";
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={i}
                        className={`font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-2xl tracking-[1px] ${spacing}`}
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
                        className={`w-full rounded-[16px] border-2 border-border-dark object-cover ${spacing}`}
                      />
                    );
                  }
                  // A body block is one section; its paragraphs sit closer together than the gap between sections.
                  return (
                    <section key={i} className={`flex flex-col gap-6 ${spacing}`}>
                      {block.text.map((paragraph, j) => (
                        <p
                          key={j}
                          className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-base leading-loose tracking-[0.6px]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </section>
                  );
                })}
              </div>
            </div>
          </article>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
