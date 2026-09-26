import type { CSSProperties } from "react";

export type Principle = {
  no: string;
  title: string;
  color: string;
  accentColor: string;
  image: string;
  summary: string;
  body: string[];
};

type CommitmentNavItemProps = {
  principle: Principle;
  isActive: boolean;
  onClick: () => void;
  index?: number;
};

export default function CommitmentNavItem({ principle, isActive, onClick, index = 0 }: CommitmentNavItemProps) {
  return (
      <button
        onClick={onClick}
        className={`text-left rounded-[16px] border-2 px-5 py-4 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 animate-fade-in-up ${
          isActive ? "border-[var(--accent)]" : "border-border-gray hover:border-[var(--accent)]"
        }`}
        style={{
          "--accent": principle.accentColor,
          backgroundColor: isActive ? principle.color : "white",
          animationDelay: `${index * 100 + 120}ms`,
        } as CSSProperties}
      >
      <span
        className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-xs tracking-[1px] block mb-1"
        style={{ color: isActive ? principle.accentColor : "#aaa" }}
      >
        {principle.no}
      </span>
      <span
        className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-base tracking-[0.8px] block"
        style={{ color: isActive ? "#222" : "#666" }}
      >
        {principle.title}
      </span>
    </button>
  );
}
