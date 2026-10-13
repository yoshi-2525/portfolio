type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description: string[];
  illustrationSrc?: string;
};

export default function PageHeading({ eyebrow, title, description, illustrationSrc }: PageHeadingProps) {
  const text = (
    <div>
      <p className="font-kaku font-medium text-[#d57563] text-[11px] sm:text-xs md:text-sm tracking-[1px] mb-1 sm:mb-2 md:mb-3">
        {eyebrow}
      </p>
      <h1 className="font-maru font-bold text-accent-blue text-2xl sm:text-4xl md:text-5xl tracking-[2px] sm:tracking-[3px] md:tracking-[4px] leading-tight mb-2 sm:mb-4 md:mb-6">
        {title}
      </h1>
      <p className="font-maru font-bold text-[#222] text-xs sm:text-base md:text-xl tracking-[0.5px] md:tracking-[1px] leading-relaxed max-w-2xl">
        {description.map((line, i) => (
          <span key={i}>
            {line}
            {i < description.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );

  if (!illustrationSrc) {
    return <div className="mb-10 md:mb-16">{text}</div>;
  }

  // Text left, illustration right at every width; sizes step down on smaller screens.
  return (
    <div className="mb-10 md:mb-16 flex flex-row items-center gap-4 sm:gap-8 lg:gap-12">
      <div className="min-w-0 flex-1 animate-fade-in-left">{text}</div>
      <div className="w-[42%] lg:w-[525px] shrink-0 aspect-[525/284] rounded-[16px] sm:rounded-[24px] md:rounded-[40px] border-2 border-border-dark overflow-hidden animate-fade-in-right" style={{ animationDelay: "150ms" }}>
        <img
          fetchPriority="high"
          src={illustrationSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
