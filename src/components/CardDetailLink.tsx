type CardDetailLinkProps = {
  color: string;
  className?: string;
};

export default function CardDetailLink({ color, className = "" }: CardDetailLinkProps) {
  return (
    <span
      className={`self-end inline-flex items-center gap-2 font-maru font-bold text-sm tracking-[1px] opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:opacity-100 ${className}`}
      style={{ color }}
    >
      詳しく見る →
    </span>
  );
}
