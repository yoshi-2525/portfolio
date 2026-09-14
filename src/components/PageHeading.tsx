import type { ReactNode } from "react";

type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
};

export default function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <div className="mb-16">
      <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#d57563] text-sm tracking-[1px] mb-3">
        {eyebrow}
      </p>
      <h1 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#3280cf] text-6xl tracking-[4px] leading-tight mb-6">
        {title}
      </h1>
      <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xl tracking-[1px] leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  );
}
