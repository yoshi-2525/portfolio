import { Fragment } from "react";
import { Link } from "react-router";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbProps = {
  // The last item is the current page and is rendered without a link.
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-['Zen_Maru_Gothic:Bold',sans-serif] text-sm leading-5 tracking-[1px]">
        {items.map((item, i) => {
          const isCurrent = i === items.length - 1;
          return (
            <Fragment key={`${item.label}-${i}`}>
              {i > 0 && (
                <li aria-hidden="true" className="text-ink-888">
                  /
                </li>
              )}
              <li className={isCurrent ? "min-w-0 max-w-full" : ""}>
                {isCurrent || !item.to ? (
                  <span aria-current={isCurrent ? "page" : undefined} className="block truncate text-ink-222">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.to}
                    className="text-ink-666 underline underline-offset-4 hover:text-accent-coral transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
