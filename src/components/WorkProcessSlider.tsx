import { useState } from "react";
import type { WorksContentCard } from "@/data/works";

type WorkProcessSliderProps = {
  process: WorksContentCard[];
  accentColor: string;
};

export default function WorkProcessSlider({ process, accentColor }: WorkProcessSliderProps) {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="flex items-center gap-4">
      {activeCard > 0 ? (
        <button
          onClick={() => setActiveCard((c) => c - 1)}
          aria-label="前の項目へ"
          className="shrink-0 w-16 h-16 rounded-full border-2 border-border-gray bg-white flex items-center justify-center opacity-50 transition-opacity hover:opacity-100"
          style={{ color: accentColor }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      ) : (
        <span className="shrink-0 w-16 h-16" />
      )}

      <div className="flex-1 min-w-0">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-[400ms] ease-out"
            style={{ transform: `translateX(calc(6% - ${activeCard} * (82% + 1rem)))` }}
          >
            {process.map((card, i) => (
              <div
                key={i}
                className={`shrink-0 w-[82%] rounded-[16px] border-2 border-border-dark overflow-hidden bg-white transition-opacity duration-[400ms] flex flex-col ${
                  i === activeCard ? "opacity-100" : "opacity-50 shadow-lg"
                }`}
              >
                <img
                  src={card.image}
                  alt=""
                  className="w-full aspect-[16/9] object-cover border-b-2 border-border-dark"
                />
                <div className="p-6 flex flex-col gap-3 flex-1">
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
                <p
                  className="bg-white/40 py-3 text-center font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px]"
                  style={{ color: accentColor }}
                >
                  {i + 1}/{process.length}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeCard < process.length - 1 ? (
        <button
          onClick={() => setActiveCard((c) => c + 1)}
          aria-label="次の項目へ"
          className="shrink-0 w-16 h-16 rounded-full border-2 border-border-gray bg-white flex items-center justify-center opacity-70 transition-opacity shadow hover:opacity-100"
          style={{ color: accentColor }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      ) : (
        <span className="shrink-0 w-16 h-16" />
      )}
    </div>
  );
}
