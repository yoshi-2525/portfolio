import type { CSSProperties } from "react";
import { Link } from "react-router";
import CardDetailLink from "@/components/CardDetailLink";
import type { ContentBlock } from "@/data/learningRecords";

export type LearningRecord = {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
  color: string;
  accentColor: string;
  content: ContentBlock[];
};

type LearningRecordCardProps = {
  record: LearningRecord;
  index?: number;
};

export default function LearningRecordCard({ record, index = 0 }: LearningRecordCardProps) {
  return (
    <Link
      to={`/learning/${record.id}`}
      className="h-full flex flex-col rounded-[20px] border-2 border-border-gray shadow hover:border-[var(--accent)] overflow-hidden group hover:shadow-lg transition-shadow animate-fade-in-up"
      style={{
        "--accent": record.accentColor,
        backgroundColor: record.color,
        animationDelay: `${index * 100}ms`,
      } as CSSProperties}
    >

      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-center justify-between mb-4">
          <span
            className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-xs tracking-[1px] px-3 py-1 rounded-full bg-white"
            style={{ color: record.accentColor }}
          >
            {record.category}
          </span>
          <span className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs text-[#666] tracking-[0.5px]">
            {record.date}
          </span>
        </div>

        <h2 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-2xl tracking-[1px] mb-3 leading-snug">
          {record.title}
        </h2>

        <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#444] text-sm tracking-[0.5px] leading-relaxed mb-5">
          {record.description}
        </p>

        <CardDetailLink color={record.accentColor} className="mt-auto" />
      </div>
    </Link>
  );
}
