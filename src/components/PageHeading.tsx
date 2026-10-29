type PageHeadingProps = {
  eyebrow: string;
  title: string;
  /* Kept for later use; not rendered at the moment. */
  description: string[];
  illustrationSrc?: string;
};

export default function PageHeading({ eyebrow, title, illustrationSrc }: PageHeadingProps) {
  const heading = (
    <>
      <p
        className="font-kaku font-medium text-accent-coral text-xs md:text-sm tracking-[1px] animate-fade-in-up motion-reduce:animate-none"
        style={{ animationDelay: "200ms" }}
      >
        {eyebrow}
      </p>
      {/* The title rises from behind a mask, one time only. */}
      <h1 className="overflow-hidden font-maru font-bold text-accent-blue text-3xl sm:text-4xl md:text-5xl tracking-[2px] sm:tracking-[3px] md:tracking-[4px] leading-tight">
        <span className="block animate-line-up motion-reduce:animate-none" style={{ animationDelay: "300ms" }}>
          {title}
        </span>
      </h1>
    </>
  );

  if (!illustrationSrc) {
    return <div className="mb-10 md:mb-16">{heading}</div>;
  }

  return (
    <div className="mb-10 md:mb-16">
      <div className="relative">
        {/* Illustration band: full content width, opens upward, then settles from a slight zoom. */}
        <div className="aspect-[16/9] md:aspect-auto md:h-[300px] lg:h-[380px] rounded-[24px] md:rounded-[40px] border-2 border-border-dark overflow-hidden bg-surface-white animate-unveil motion-reduce:animate-none">
          <img
            fetchPriority="high"
            src={illustrationSrc}
            alt=""
            className="w-full h-full object-cover object-[center_40%] animate-settle motion-reduce:animate-none"
          />
        </div>

        {/* Heading: sits below the band on small screens; from md it is a notch cut into the band's lower-left corner. */}
        <div className="mt-6 md:mt-0 md:absolute md:-left-0.5 md:-bottom-0.5 md:max-w-[min(600px,70%)] md:pt-4 md:pr-10 md:pl-0.5 md:bg-page-bg md:rounded-tr-[40px]">
          {heading}
        </div>
      </div>
    </div>
  );
}
