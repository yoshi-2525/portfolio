import type { ReactNode } from "react";

type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  illustrationSrc?: string;
};

export default function PageHeading({ eyebrow, title, description, illustrationSrc }: PageHeadingProps) {
  const text = (
    <div>
      <p className="font-['Zen_Kaku_Gothic_Antique:Medium',sans-serif] text-[#d57563] text-sm tracking-[1px] mb-3">
        {eyebrow}
      </p>
      <h1 className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#3280cf] text-5xl tracking-[4px] leading-tight mb-6">
        {title}
      </h1>
      <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xl tracking-[1px] leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  );

  if (!illustrationSrc) {
    return <div className="mb-16">{text}</div>;
  }

  return (
    <div className="mb-16 flex flex-col md:flex-row md:items-center gap-12">
      <div className="min-w-0 md:flex-1 animate-fade-in-left">{text}</div>
      <div className="w-full md:w-[525px] md:shrink-0 aspect-[525/284] rounded-[40px] border-2 border-[#222] overflow-hidden animate-fade-in-right" style={{ animationDelay: "150ms" }}>
        <img
          src={illustrationSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
