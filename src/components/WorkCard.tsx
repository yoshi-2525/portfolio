import type { CSSProperties } from "react";
import { Link } from "react-router";
import CardDetailLink from "@/components/CardDetailLink";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
  index?: number;
};

export default function WorkCard({ work, index = 0 }: WorkCardProps) {
  return (
    <Link
      to={`/works/${work.id}`}
      className="group block rounded-[20px] border-2 border-border-gray shadow hover:border-[var(--accent)] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all animate-fade-in-left"
      style={{
        "--accent": work.accentColor,
        backgroundColor: work.color,
        animationDelay: `${index * 120 + 240}ms`,
      } as CSSProperties}
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

          <CardDetailLink color={work.accentColor} />
        </div>
      </div>
    </Link>
  );
}
