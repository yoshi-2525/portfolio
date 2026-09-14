export type LearningRecord = {
  date: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
};

type LearningRecordCardProps = {
  record: LearningRecord;
};

export default function LearningRecordCard({ record }: LearningRecordCardProps) {
  return (
    <div
      className="rounded-[20px] border-2 border-[#222] overflow-hidden group hover:shadow-lg transition-shadow"
      style={{ backgroundColor: record.color }}
    >
      {/* Color band */}
      <div className="h-1.5 bg-[#d57563]" />

      <div className="p-7">
        <div className="flex items-center justify-between mb-4">
          <span className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-xs text-[#3280cf] tracking-[1px]">
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

        <div className="flex flex-wrap gap-2">
          {record.tags.map((tag) => (
            <span
              key={tag}
              className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-xs px-3 py-1 rounded-full bg-white border border-[#ccc] text-[#555] tracking-[0.5px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
