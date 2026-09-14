import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import DreamCard from "@/components/DreamCard";
import { dreams } from "@/data/dreams";

export default function DreamsPage() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(90deg, rgb(250, 242, 235) 0%, rgb(250, 242, 235) 100%)" }}
    >
      {/* Header */}
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading
          eyebrow="FUTURE DREAMS"
          title="わたしの将来の夢"
          description={
            <>
              創作を通して為したいことを書き留めています。<br />
              私に見せたい景色を、ここに描いています。
            </>
          }
        />

        {/* Dream cards */}
        <div className="flex flex-col gap-6">
          {dreams.map((dream) => (
            <DreamCard
              key={dream.id}
              dream={dream}
              isOpen={expanded === dream.id}
              onToggle={() => setExpanded(expanded === dream.id ? null : dream.id)}
            />
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-[#d57563] border-2 border-[#222] rounded-full px-10 py-4">
            <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-white text-lg tracking-[1.5px]">
              ただひたすらに、ものを創り続ける
            </p>
          </div>
        </div>
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
