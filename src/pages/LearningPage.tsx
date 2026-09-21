import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import LearningRecordCard from "@/components/LearningRecordCard";
import LearningCategoryFilter from "@/components/LearningCategoryFilter";
import { records, categories } from "@/data/learningRecords";
import imgDreamsHero from "@/imports/1920WLight/a9ac80ec745b07e07c3edd921ec5b28762ff0782.png";

export default function LearningPage() {
  const [active, setActive] = useState("すべて");

  const filtered = active === "すべて" ? records : records.filter((r) => r.category === active);

  return (
    <div
      className="min-h-screen bg-page-bg"
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

        {/* Record cards */}
        <div key={active} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((record, i) => (
            <LearningRecordCard key={record.id} record={record} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#aaa] text-xl tracking-[1px]">
              該当する記録がありません
            </p>
          </div>
        )}
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
