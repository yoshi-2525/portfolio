import { useState } from "react";
import { Link } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import CommitmentNavItem from "@/components/CommitmentNavItem";
import CommitmentCard from "@/components/CommitmentCard";
import { principles } from "@/data/principles";

export default function CommitmentPage() {
  const [active, setActive] = useState<number>(0);
  const current = principles[active];

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(90deg, rgb(250, 242, 235) 0%, rgb(250, 242, 235) 100%)" }}
    >
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading
          eyebrow="DESIGN PHILOSOPHY"
          title="創作へのこだわり"
          description={
            <>
              デザインからプログラミング、設計まで、<br />
              私がものを創るうえで大切にしていることを書き留めています。
            </>
          }
        />

        {/* Two-panel layout */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Left: principle list */}
          <nav className="flex flex-col gap-2 sticky top-8">
            {principles.map((p, i) => (
              <CommitmentNavItem
                key={p.no}
                principle={p}
                isActive={active === i}
                onClick={() => setActive(i)}
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
      <footer className="flex items-center justify-between px-10 py-8 border-t border-[#e0d8d0]">
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
