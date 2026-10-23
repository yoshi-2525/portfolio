import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackLink from "@/components/BackLink";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeading from "@/components/PageHeading";
import LearningCategoryFilter from "@/components/LearningCategoryFilter";
import LearningNavItem from "@/components/LearningNavItem";
import ContentBlocks from "@/components/ContentBlocks";
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
          <p className="font-maru font-bold text-[#aaa] text-xl tracking-[1px] mb-8">
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
        <Breadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", to: "/" },
            { label: pageHeadings.learning.label, to: pageHeadings.learning.to },
            { label: record.title },
          ]}
        />

        <PageHeading {...pageHeadings.learning} />

        <LearningCategoryFilter categories={categories} active={active} onChange={setActive} />

        <div className="mb-6">
          <BackLink to="/learning">学習記録一覧へ戻る</BackLink>
        </div>

        {/* Two-panel layout: navigation (left) + detail (right) */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">

          {/* Left: navigation between records */}
          <nav className="flex flex-col gap-4 md:sticky md:top-8">
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
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-maru font-bold text-xs tracking-[1px] px-3 py-1 rounded-full bg-white"
                  style={{ color: record.accentColor }}
                >
                  {record.category}
                </span>
                <span className="font-kaku font-medium text-xs text-[#666] tracking-[0.5px]">
                  {record.date}
                </span>
              </div>

              <h1 className="font-maru font-bold text-[#222] text-3xl tracking-[1.5px] mb-6 leading-snug">
                {record.title}
              </h1>

              <ContentBlocks blocks={record.content} className="border-t-2 border-border-dark pt-8" />
            </div>
          </article>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
