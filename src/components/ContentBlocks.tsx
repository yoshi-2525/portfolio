import type { ContentBlock } from "@/data/learningRecords";

type ContentBlocksProps = {
  blocks: ContentBlock[];
  className?: string;
};

export default function ContentBlocks({ blocks, className = "" }: ContentBlocksProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {blocks.map((block, i) => {
        // Spacing is set per block: tight under a heading, wide between sections, extra wide before a heading.
        const prev = blocks[i - 1];
        const spacing =
          i === 0 ? "" : prev.type === "heading" ? "mt-3" : block.type === "heading" ? "mt-12" : "mt-8";
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className={`font-maru font-bold text-[#222] text-2xl tracking-[1px] ${spacing}`}
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "image") {
          return (
            <img
              key={i}
              loading="lazy"
              decoding="async"
              src={block.image}
              alt=""
              className={`w-full rounded-[16px] border-2 border-border-dark object-cover ${spacing}`}
            />
          );
        }
        // A body block is one section; its paragraphs sit closer together than the gap between sections.
        return (
          <section key={i} className={`flex flex-col gap-6 ${spacing}`}>
            {block.text.map((paragraph, j) => (
              <p
                key={j}
                className="font-kaku font-medium text-[#333] text-base leading-loose tracking-[0.6px]"
              >
                {paragraph}
              </p>
            ))}
          </section>
        );
      })}
    </div>
  );
}
