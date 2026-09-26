import type { Principle } from "@/components/CommitmentNavItem";

type CommitmentCardProps = {
  principle: Principle;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function CommitmentCard({ principle, index, total, onPrev, onNext }: CommitmentCardProps) {
  return (
    <div
      className="rounded-[20px] border-2 border-border-dark overflow-hidden animate-fade-in-right"
      style={{ backgroundColor: principle.color, animationDelay: "150ms" }}
    >
      <div className="px-8 pt-8 pb-0">
        <img
          src={principle.image}
          alt={principle.title}
          className="w-full h-full rounded-[16px] border-2 border-border-dark object-cover"
        />
      </div>

      {/* Body */}
      <div className="px-8 py-8">
        <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-4xl tracking-[2px] mb-8 leading-tight">
          {principle.title}
        </h2>

        {/* Summary callout */}
        <div
          className="border-l-4 pl-5 mb-8"
          style={{ borderColor: principle.accentColor }}
        >
          <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-lg leading-relaxed tracking-[0.6px]">
            {principle.summary}
          </p>
        </div>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-5">
          {principle.body.map((para, i) => (
            <p
              key={i}
              className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-base leading-loose tracking-[0.5px]"
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <div className="flex justify-between items-center px-8 py-5 border-t-2 border-border-dark bg-white/40">
        {index > 0 ? (
          <button
            onClick={onPrev}
            className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px] transition-opacity"
            style={{ color: principle.accentColor }}
          >
            ← 前へ
          </button>
        ) : (
          <span />
        )}
        <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs text-[#888] tracking-[1px]">
          {index + 1} / {total}
        </span>
        {index < total - 1 ? (
          <button
            onClick={onNext}
            className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px] transition-opacity"
            style={{ color: principle.accentColor }}
          >
            次へ →
          </button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
