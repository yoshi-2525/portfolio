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
      <div className="grid grid-cols-[2fr_3fr] md:grid-cols-[380px_1fr] items-stretch">
        {/* Image — fills the card height, which is the same for every card (image left, text right at every width) */}
        <div className="relative overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            src={work.listImage}
            alt={work.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text — line counts are fixed so every card has the same height.
            Mobile: title 2 lines, subtitle 1, no description. Desktop: title 1, subtitle 1, description 3. */}
        <div className="p-4 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2 md:mb-3">
              <span
                className="font-kaku font-medium text-xs tracking-[1px] px-3 py-1 rounded-full border border-current"
                style={{ color: work.accentColor }}
              >
                {work.category}
              </span>
              <span className="font-kaku font-medium text-xs text-[#888] tracking-[0.5px]">
                {work.year}
              </span>
            </div>

            <h2 className="font-maru font-bold text-[#222] text-lg leading-7 h-14 line-clamp-2 tracking-[1px] md:text-3xl md:leading-9 md:h-auto md:line-clamp-1 md:tracking-[1.5px] mb-1">
              {work.title}
            </h2>
            <p
              className="font-kaku font-medium text-xs md:text-sm tracking-[0.5px] mb-3 md:mb-5 line-clamp-1"
              style={{ color: work.accentColor }}
            >
              {work.subtitle}
            </p>

            <p className="max-md:hidden font-kaku font-medium text-[#333] text-base leading-relaxed tracking-[0.5px] mb-5 line-clamp-3 min-h-[4.875em]">
              {work.listDescription}
            </p>
          </div>

          <CardDetailLink color={work.accentColor} />
        </div>
      </div>
    </Link>
  );
}
