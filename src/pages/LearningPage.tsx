import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import LearningRecordCard from "@/components/LearningRecordCard";
import { records } from "@/data/learningRecords";

const categories = ["すべて", "フロントエンド", "デザイン", "TypeScript", "UI/UX", "CSS", "設計"];

export default function LearningPage() {
  const [active, setActive] = useState("すべて");

  const filtered = active === "すべて" ? records : records.filter((r) => r.category === active);

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
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-['Zen_Maru_Gothic:Bold',sans-serif] px-5 py-2 rounded-full border-2 text-sm tracking-[0.8px] transition-all ${
                active === cat
                  ? "bg-[#d57563] border-[#d57563] text-white"
                  : "bg-white border-[#222] text-[#222] hover:border-[#d57563] hover:text-[#d57563]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Record cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((record, i) => (
            <LearningRecordCard key={i} record={record} />
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
