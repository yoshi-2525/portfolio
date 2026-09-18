export type Dream = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  accentColor: string;
};

type DreamCardProps = {
  dream: Dream;
  index: number;
  reverse?: boolean;
};

export default function DreamCard({ dream, index, reverse = false }: DreamCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`rounded-[20px] border-2 border-[#222] overflow-hidden transition-all ${
        reverse ? "animate-fade-in-right" : "animate-fade-in-left"
      }`}
      style={{ backgroundColor: dream.color, animationDelay: `${index * 120 + 120}ms` }}
    >
      <div className="px-8 py-8 grid md:grid-cols-2 gap-8">
        {/* Title */}
        <div
          className={`flex items-center gap-5 ${
            reverse ? "flex-row-reverse md:order-2" : "md:order-1"
          }`}
        >
          <span
            className="font-['Zen_Maru_Gothic:Bold',sans-serif] tabular-nums text-3xl w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#222] bg-white shrink-0"
            style={{ color: dream.accentColor }}
          >
            {number}
          </span>
          <div className={reverse ? "text-right" : undefined}>
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

        {/* Description */}
        <div className={reverse ? "md:order-1" : "md:order-2"}>
          <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#333] text-base leading-relaxed tracking-[0.5px]">
            {dream.description}
          </p>
        </div>
      </div>
    </div>
  );
}
