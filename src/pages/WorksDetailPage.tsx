import { useState } from "react";
import { Link, useParams } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import { works } from "@/data/works";

export default function WorksDetailPage() {
  const { id } = useParams<{ id: string }>();
  const work = works.find((w) => w.id === Number(id));
  const [activeCard, setActiveCard] = useState(0);

  if (!work) {
    return (
      <div className="min-h-screen bg-page-bg">
        <SiteHeader />
        <main className="max-w-3xl mx-auto px-8 py-24 text-center">
          <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#aaa] text-xl tracking-[1px] mb-8">
            該当する作品が見つかりませんでした
          </p>
          <Link
            to="/works"
            className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#d57563] text-sm tracking-[1px] hover:opacity-70 transition-opacity"
          >
            ← 作品集一覧へ戻る
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-page-bg">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <Link
          to="/works"
          className="inline-flex items-center gap-2 font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px] text-[#888] hover:text-[#222] transition-colors mb-10"
        >
          ← 作品集一覧へ戻る
        </Link>

        <article
          className="rounded-[20px] border-2 border-[#222] overflow-hidden"
          style={{ backgroundColor: work.color }}
        >
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: 320 }}>
            <img
              src={work.image}
              alt={work.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-10">
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

            <h1 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-3xl tracking-[1.5px] mb-1">
              {work.title}
            </h1>
            <p
              className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-sm tracking-[0.5px] mb-5"
              style={{ color: work.accentColor }}
            >
              {work.subtitle}
            </p>

            <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-base leading-relaxed tracking-[0.5px] mb-5">
              {work.description}
            </p>

            <div className="border-t-2 border-[#222] pt-8">
              <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xl tracking-[1px] mb-6">
                創作過程
              </h2>

              <div key={work.id} className="flex items-center gap-4">
                <button
                  onClick={() => setActiveCard((c) => c - 1)}
                  disabled={activeCard === 0}
                  aria-label="前の項目へ"
                  className="shrink-0 w-16 h-16 rounded-full border-2 border-[#222] bg-white flex items-center justify-center transition-opacity disabled:opacity-30 disabled:cursor-default"
                  style={{ color: work.accentColor }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <div className="flex-1 min-w-0 overflow-hidden">
                  <div
                    className="flex gap-4 transition-transform duration-[400ms] ease-out"
                    style={{ transform: `translateX(calc(6% - ${activeCard} * (82% + 1rem)))` }}
                  >
                    {work.process.map((card, i) => (
                      <div
                        key={i}
                        className={`shrink-0 w-[82%] rounded-[16px] border-2 border-[#222] overflow-hidden bg-white transition-opacity duration-[400ms] ${
                          i === activeCard ? "opacity-100" : "opacity-50 shadow-lg"
                        }`}
                      >
                        <img
                          src={card.image}
                          alt=""
                          className="w-full aspect-[16/9] object-cover border-b-2 border-[#222]"
                        />
                        <div className="p-6 flex flex-col gap-3">
                          <h3 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-lg tracking-[1px]">
                            {card.heading}
                          </h3>
                          {card.body.map((paragraph, j) => (
                            <p
                              key={j}
                              className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-base leading-loose tracking-[0.6px]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveCard((c) => c + 1)}
                  disabled={activeCard === work.process.length - 1}
                  aria-label="次の項目へ"
                  className="shrink-0 w-16 h-16 rounded-full border-2 border-[#222] bg-white flex items-center justify-center transition-opacity disabled:opacity-30 disabled:cursor-default"
                  style={{ color: work.accentColor }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-10 py-8 mt-16 border-t border-[#e0d8d0]">
        <Link
          to="/works"
          className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#d57563] text-xs tracking-[1.1px] hover:opacity-70 transition-opacity"
        >
          ← 作品集一覧へ戻る
        </Link>
        <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xs tracking-[1.1px]">
          © 2026 Yoshitaka Inui. All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
