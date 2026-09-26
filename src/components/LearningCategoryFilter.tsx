type LearningCategoryFilterProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function LearningCategoryFilter({ categories, active, onChange }: LearningCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`font-['Zen_Maru_Gothic:Bold',sans-serif] px-5 py-2 rounded-full border-2 text-sm tracking-[0.8px] transition-all ${
            active === cat
              ? "bg-[#d57563] border-[#d57563] text-white"
              : "bg-white text-[#666] border-border-gray hover:border-[#d57563] hover:text-[#d57563]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
