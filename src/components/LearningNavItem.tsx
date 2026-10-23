import type { CSSProperties } from "react";
import { Link } from "react-router";
import type { LearningRecord } from "@/components/LearningRecordCard";

type LearningNavItemProps = {
  record: LearningRecord;
  isActive: boolean;
};

export default function LearningNavItem({ record, isActive }: LearningNavItemProps) {
  return (
    <Link
      to={`/learning/${record.id}`}
      className={`block text-left rounded-xl md:rounded-2xl border-2 px-3.5 py-2.5 md:px-5 md:py-4 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
        isActive ? "border-[var(--accent)]" : "border-border-gray hover:border-[var(--accent)]"
      }`}
      style={{
        "--accent": record.accentColor,
        backgroundColor: isActive ? record.color : "white",
      } as CSSProperties}
    >
      <span
        className="font-maru font-bold text-[10px] md:text-xs tracking-[1px] block mb-0.5 md:mb-1"
        style={{ color: isActive ? record.accentColor : "#aaa" }}
      >
        {record.date}
      </span>
      <span
        className="font-maru font-bold text-sm tracking-[0.8px] leading-snug block"
        style={{ color: isActive ? "#222" : "#666" }}
      >
        {record.title}
      </span>
    </Link>
  );
}
