import { useState } from "react";
import { Link } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import CommitmentNavItem from "@/components/CommitmentNavItem";
import CommitmentCard from "@/components/CommitmentCard";
import { principles } from "@/data/principles";
import { pageHeadings } from "@/data/pageHeadings";

export default function CommitmentPage() {
  const [active, setActive] = useState<number>(0);
  const current = principles[active];

  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading {...pageHeadings.commitment} />

        {/* Two-panel layout */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Left: principle list */}
          <nav className="flex flex-col gap-4 sticky top-8">
            {principles.map((p, i) => (
              <CommitmentNavItem
                key={p.no}
                principle={p}
                isActive={active === i}
                onClick={() => setActive(i)}
                index={i}
              />
            ))}
          </nav>

          {/* Right: detail */}
          <CommitmentCard
            key={current.no}
            principle={current}
            index={active}
            total={principles.length}
            onPrev={() => setActive((a) => Math.max(0, a - 1))}
            onNext={() => setActive((a) => Math.min(principles.length - 1, a + 1))}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-10 py-8 border-t border-border-gray">
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
