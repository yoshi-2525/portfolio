import { useState } from "react";
import { Link } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";
import { pageHeadings } from "@/data/pageHeadings";

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered =
    activeCategory === "すべて" ? works : works.filter((w) => w.category === activeCategory);

  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading {...pageHeadings.works} />

        {/* Works list */}
        <div className="flex flex-col gap-8">
          {filtered.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-10 py-8 mt-16 border-t border-border-gray">
        <Link to="/" className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#d57563] text-xs tracking-[1.1px] hover:opacity-70 transition-opacity">
          ← ホームへ戻る
        </Link>
        <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xs tracking-[1.1px]">
          © 2026 Yoshitaka Inui. All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
