export type Principle = {
  no: string;
  title: string;
  en: string;
  color: string;
  accentColor: string;
  image: string;
  summary: string;
  body: string[];
  tags: string[];
};

type CommitmentNavItemProps = {
  principle: Principle;
  isActive: boolean;
  onClick: () => void;
};

export default function CommitmentNavItem({ principle, isActive, onClick }: CommitmentNavItemProps) {
  return (
    <button
      onClick={onClick}
      className="text-left rounded-[16px] border-2 px-5 py-4 transition-all"
      style={{
        borderColor: isActive ? principle.accentColor : "#e0d8d0",
        backgroundColor: isActive ? principle.color : "white",
      }}
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
