import { useState } from "react";
import { Link } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import { works } from "@/data/works";
import imgDreamsHero from "@/imports/1920WLight/a9ac80ec745b07e07c3edd921ec5b28762ff0782.png";


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
        <PageHeading
          eyebrow="WORKS"
          title="作品集"
          description={
            <>
              ただひたすらにものを創り続けた記録です。<br />
              デザインから実装まで、ひとつひとつ手がけてきました。
            </>
          }
          illustrationSrc={imgDreamsHero}
        />

        {/* Works list */}
        <div className="flex flex-col gap-8">
          {filtered.map((work) => (
              <Link
                key={work.id}
                to={`/works/${work.id}`}
                className="block rounded-[20px] border-2 border-[#222] overflow-hidden hover:shadow-lg transition-shadow"
                style={{ backgroundColor: work.color }}
              >
                {/* Main row */}
                <div className="grid md:grid-cols-[380px_1fr] items-stretch">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ minHeight: 240 }}>
                    <img
                      src={work.image}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs tracking-[1px] px-3 py-1 rounded-full border border-current"
                          style={{ color: work.accentColor }}
                        >
                          {work.category}
                        </span>
                        <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs text-[#888] tracking-[0.5px]">
                          {work.year}
                        </span>
                      </div>

                      <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-3xl tracking-[1.5px] mb-1">
                        {work.title}
                      </h2>
                      <p
                        className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-sm tracking-[0.5px] mb-5"
                        style={{ color: work.accentColor }}
                      >
                        {work.subtitle}
                      </p>

                      <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-base leading-relaxed tracking-[0.5px] mb-5">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-10 py-8 mt-16 border-t border-[#e0d8d0]">
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
