export type Dream = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  accentColor: string;
  progress: number;
  steps: string[];
};

type DreamCardProps = {
  dream: Dream;
  isOpen: boolean;
  onToggle: () => void;
};

export default function DreamCard({ dream, isOpen, onToggle }: DreamCardProps) {
  return (
    <div
      className="rounded-[20px] border-2 border-[#222] overflow-hidden transition-all"
      style={{ backgroundColor: dream.color }}
    >
      {/* Header row */}
      <button className="w-full text-left" onClick={onToggle}>
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-5">
            <span
              className="text-3xl w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#222] bg-white shrink-0"
              style={{ color: dream.accentColor }}
            >
              {dream.icon}
            </span>
            <div>
              <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-2xl tracking-[1.5px]">
                {dream.title}
              </h2>
              <p
                className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-sm tracking-[0.5px] mt-0.5"
                style={{ color: dream.accentColor }}
              >
                {dream.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Progress */}
            <div className="hidden md:block">
              <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs text-[#888] tracking-[0.5px] mb-1 text-right">
                進捗 {dream.progress}%
              </p>
              <div className="w-32 h-2 bg-white rounded-full border border-[#ddd] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${dream.progress}%`, backgroundColor: dream.accentColor }}
                />
              </div>
            </div>

            <span
              className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-xl transition-transform"
              style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="px-8 pb-8 grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-base leading-relaxed tracking-[0.5px]">
              {dream.description}
            </p>
          </div>

          <div>
            <p
              className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px] mb-4"
              style={{ color: dream.accentColor }}
            >
              ステップ
            </p>
            <ol className="flex flex-col gap-3">
              {dream.steps.map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ backgroundColor: dream.accentColor }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-sm tracking-[0.5px]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
