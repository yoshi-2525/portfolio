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
      className="rounded-[20px] border-2 border-[#222] overflow-hidden"
      style={{ backgroundColor: principle.color }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={principle.image}
          alt={principle.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-5 left-7">
          <span
            className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-5xl tracking-[3px] opacity-90"
            style={{ color: "white" }}
          >
            {principle.no}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 py-8">
        <p
          className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs tracking-[1.5px] mb-2 uppercase"
          style={{ color: principle.accentColor }}
        >
          {principle.en}
        </p>
        <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-4xl tracking-[2px] mb-4 leading-tight">
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
        <div className="flex flex-col gap-5 mb-8">
          {principle.body.map((para, i) => (
            <p
              key={i}
              className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#444] text-base leading-loose tracking-[0.5px]"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {principle.tags.map((tag) => (
            <span
              key={tag}
              className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs px-3 py-1.5 rounded-full bg-white border border-[#ccc] text-[#555] tracking-[0.5px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <div className="flex justify-between items-center px-8 py-5 border-t-2 border-[#222] bg-white/40">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px] disabled:opacity-30 transition-opacity"
          style={{ color: principle.accentColor }}
        >
          ← 前へ
        </button>
        <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs text-[#888] tracking-[1px]">
          {index + 1} / {total}
        </span>
        <button
          onClick={onNext}
          disabled={index === total - 1}
          className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px] disabled:opacity-30 transition-opacity"
          style={{ color: principle.accentColor }}
        >
          次へ →
        </button>
      </div>
    </div>
  );
}
