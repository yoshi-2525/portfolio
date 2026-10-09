import { useEffect, useRef, useState } from "react";
import type { WorksContentCard } from "@/data/works";

type WorkProcessSliderProps = {
  process: WorksContentCard[];
  accentColor: string;
};

export default function WorkProcessSlider({ process, accentColor }: WorkProcessSliderProps) {
  const [activeCard, setActiveCard] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const activeCardRef = useRef(activeCard);
  activeCardRef.current = activeCard;

  const lastIndex = process.length - 1;
  const goTo = (index: number) => setActiveCard(Math.max(0, Math.min(lastIndex, index)));

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // マウスではテキストを選択・コピーできるようにドラッグ移動しない
    if (e.pointerType === "mouse") return;
    dragStartX.current = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX.current;
    // 端のカードでは引っ張りに抵抗をつける
    const atEdge = (dx > 0 && activeCard === 0) || (dx < 0 && activeCard === lastIndex);
    setDragX(atEdge ? dx * 0.3 : dx);
  };

  const endDrag = () => {
    if (!isDragging) return;
    const width = viewportRef.current?.offsetWidth ?? 0;
    const threshold = Math.min(80, width * 0.15);
    if (dragX < -threshold) goTo(activeCard + 1);
    else if (dragX > threshold) goTo(activeCard - 1);
    setDragX(0);
    setIsDragging(false);
  };

  // トラックパッドの横スクロールで移動（ブラウザの戻る動作を防ぐため passive: false で登録）
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    let accumulated = 0;
    let locked = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      clearTimeout(timer);
      // スクロールが止まるまで次の移動を受け付けない（慣性スクロール対策）
      timer = setTimeout(() => {
        accumulated = 0;
        locked = false;
      }, 200);
      if (locked) return;
      accumulated += e.deltaX;
      if (Math.abs(accumulated) > 50) {
        const next = activeCardRef.current + (accumulated > 0 ? 1 : -1);
        setActiveCard(Math.max(0, Math.min(process.length - 1, next)));
        locked = true;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      clearTimeout(timer);
    };
  }, [process.length]);

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {activeCard > 0 ? (
        <button
          onClick={() => goTo(activeCard - 1)}
          aria-label="前の項目へ"
          className="shrink-0 w-9 h-9 sm:w-16 sm:h-16 rounded-full border-2 border-border-gray bg-white flex items-center justify-center opacity-70 transition-opacity shadow hover:opacity-100"
          style={{ color: accentColor }}
        >
          <svg className="w-5 h-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      ) : (
        <span className="shrink-0 w-9 h-9 sm:w-16 sm:h-16" />
      )}

      <div className="flex-1 min-w-0">
        <div
          ref={viewportRef}
          className="overflow-hidden touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div
            className={`flex gap-4 ease-out ${isDragging ? "" : "transition-transform duration-[400ms]"}`}
            style={{ transform: `translateX(calc(6% - ${activeCard} * (82% + 1rem) + ${dragX}px))` }}
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
                  draggable={false}
                  className="w-full aspect-[16/9] object-cover border-b-2 border-border-dark"
                />
                <div className="p-6 flex flex-col gap-5 flex-1">
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
                  className="py-3 text-center font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm tracking-[1px]"
                  style={{ color: accentColor }}
                >
                  {i + 1}/{process.length}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeCard < lastIndex ? (
        <button
          onClick={() => goTo(activeCard + 1)}
          aria-label="次の項目へ"
          className="shrink-0 w-9 h-9 sm:w-16 sm:h-16 rounded-full border-2 border-border-gray bg-white flex items-center justify-center opacity-70 transition-opacity shadow hover:opacity-100"
          style={{ color: accentColor }}
        >
          <svg className="w-5 h-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      ) : (
        <span className="shrink-0 w-9 h-9 sm:w-16 sm:h-16" />
      )}
    </div>
  );
}
