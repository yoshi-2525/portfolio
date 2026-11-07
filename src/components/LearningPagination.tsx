type LearningPaginationProps = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
};

export default function LearningPagination({
  currentPage,
  totalPages,
  onChange,
  className = "",
}: LearningPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  const stepClass =
    "font-maru font-bold px-4 py-2 text-sm tracking-[0.8px] text-ink-666 transition-colors enabled:hover:text-accent-coral disabled:opacity-40 disabled:cursor-default";

  return (
    <nav aria-label="ページ送り" className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <button type="button" onClick={() => onChange(currentPage - 1)} disabled={isFirst} className={stepClass}>
        ← 前へ
      </button>

      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onChange(page)}
            aria-current={isActive ? "page" : undefined}
            className={`font-maru font-bold w-10 h-10 rounded-full border-2 text-sm tracking-[0.8px] transition-all ${
              isActive
                ? "bg-accent-coral border-accent-coral text-white"
                : "bg-surface-white text-ink-666 border-border-gray hover:border-accent-coral hover:text-accent-coral"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button type="button" onClick={() => onChange(currentPage + 1)} disabled={isLast} className={stepClass}>
        次へ →
      </button>
    </nav>
  );
}
