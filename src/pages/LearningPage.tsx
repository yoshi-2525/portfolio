import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import LearningRecordCard from "@/components/LearningRecordCard";
import LearningCategoryFilter from "@/components/LearningCategoryFilter";
import { records, categories } from "@/data/learningRecords";
import { pageHeadings } from "@/data/pageHeadings";

export default function LearningPage() {
  const [active, setActive] = useState("すべて");

  const filtered = active === "すべて" ? records : records.filter((r) => r.category === active);

  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading {...pageHeadings.learning} />

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
      <footer className="text-right px-10 py-8 mt-16 border-t border-border-gray">
        <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xs tracking-[1.1px]">
          © 2026 Yoshitaka Inui. All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
