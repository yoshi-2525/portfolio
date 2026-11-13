import type { CSSProperties } from "react";
import { Link } from "react-router";
import type { LearningRecord } from "@/components/LearningRecordCard";

type LearningArticleNavProps = {
  prev?: LearningRecord;
  next?: LearningRecord;
  className?: string;
};

// 左のナビ（LearningNavItem の非選択状態）と同じ形・色にそろえる
function ArticleLink({ record, label, align }: { record: LearningRecord; label: string; align: "left" | "right" }) {
  return (
    <Link
      to={`/learning/${record.id}`}
      className={`block min-w-0 rounded-xl md:rounded-2xl border-2 border-border-gray bg-surface-white px-3.5 py-2.5 md:px-5 md:py-4 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 hover:border-[var(--accent)] ${
        align === "right" ? "text-right" : "text-left"
      }`}
      style={{ "--accent": record.accentColor } as CSSProperties}
    >
      <span className="font-maru font-bold text-[10px] md:text-xs tracking-[1px] block mb-0.5 md:mb-1" style={{ color: "#aaa" }}>
        {label}
      </span>
      <span className="font-maru font-bold text-sm tracking-[0.8px] leading-snug block text-ink-666 truncate">
        {record.title}
      </span>
    </Link>
  );
}

export default function LearningArticleNav({ prev, next, className = "" }: LearningArticleNavProps) {
  if (!prev && !next) return null;

  return (
    <nav aria-label="記事の移動" className={`grid grid-cols-2 gap-16 ${className}`}>
      {prev ? <ArticleLink record={prev} label="← 前の記事" align="left" /> : <span />}
      {next ? <ArticleLink record={next} label="次の記事 →" align="right" /> : <span />}
    </nav>
  );
}
