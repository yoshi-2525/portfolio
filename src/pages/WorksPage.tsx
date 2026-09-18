import { useState } from "react";
import { Link } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import PageHeading from "@/components/PageHeading";
import { works } from "@/data/works";
import imgDreamsHero from "@/imports/1920WLight/a9ac80ec745b07e07c3edd921ec5b28762ff0782.png";

const categories = ["すべて", "アプリ開発", "Web デザイン", "デザイン設計"];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered =
    activeCategory === "すべて" ? works : works.filter((w) => w.category === activeCategory);

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(90deg, rgb(250, 242, 235) 0%, rgb(250, 242, 235) 100%)" }}
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

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-['Zen_Maru_Gothic:Bold',sans-serif] px-5 py-2 rounded-full border-2 text-sm tracking-[0.8px] transition-all ${
                activeCategory === cat
                  ? "bg-[#d57563] border-[#d57563] text-white"
                  : "bg-white border-[#222] text-[#222] hover:border-[#d57563] hover:text-[#d57563]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Works list */}
        <div className="flex flex-col gap-8">
          {filtered.map((work) => {
            const isOpen = openId === work.id;
            return (
              <article
                key={work.id}
                className="rounded-[20px] border-2 border-[#222] overflow-hidden"
                style={{ backgroundColor: work.color }}
              >
                {/* Main row */}
                <div className="grid md:grid-cols-[380px_1fr] items-stretch">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ minHeight: 240 }}>
                    <img
                      src={work.useThumbnail ? work.thumbnail : work.image}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Number overlay */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-4xl tracking-[2px] opacity-80"
                        style={{ color: work.accentColor }}
                      >
                        {work.no}
                      </span>
                    </div>
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

                      <div className="flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs px-3 py-1 rounded-full bg-white border border-[#ccc] text-[#555] tracking-[0.5px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Toggle button */}
                    <button
                      onClick={() => setOpenId(isOpen ? null : work.id)}
                      className="mt-6 self-start flex items-center gap-2 font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px] transition-colors"
                      style={{ color: work.accentColor }}
                    >
                      <span>{isOpen ? "閉じる" : "詳しく見る"}</span>
                      <span
                        className="inline-block transition-transform text-lg"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        +
                      </span>
                    </button>
                  </div>
                </div>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="border-t-2 border-[#222] px-8 py-6 bg-white bg-opacity-60">
                    <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-base leading-loose tracking-[0.6px]">
                      {work.detail}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
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
