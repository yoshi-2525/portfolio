import type { ContentBlock } from "@/data/learningRecords";

type ContentBlocksProps = {
  blocks: ContentBlock[];
  className?: string;
};

export default function ContentBlocks({ blocks, className = "" }: ContentBlocksProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {blocks.map((block, i) => {
        // Spacing is set per block: tightest under a subheading, tight under a heading,
        // wide between sections, extra wide before a heading.
        const prev = blocks[i - 1];
        const spacing =
          i === 0
            ? ""
            : prev.type === "subheading"
              ? "mt-1"
              : prev.type === "heading"
                ? "mt-3"
                : block.type === "heading"
                  ? "mt-12"
                  : "mt-8";
        if (block.type === "subheading") {
          return (
            <h3
              key={i}
              className={`font-maru font-bold text-[#222] text-lg tracking-[1px] ${spacing}`}
            >
              {block.text}
            </h3>
          );
        }
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
          // The caption, when present, sits centered under the image and doubles as its alt text.
          return (
            <figure key={i} className={`w-full max-w-xl mx-auto flex flex-col gap-3 ${spacing}`}>
              <img
                loading="lazy"
                decoding="async"
                src={block.image}
                alt={block.caption ?? ""}
                className="w-full rounded-[16px] border-2 border-border-dark object-cover"
              />
              {block.caption && (
                <figcaption className="font-kaku font-medium text-ink-666 text-sm leading-relaxed tracking-[0.6px] text-center whitespace-pre-line">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }
        // A body block is one section; its paragraphs sit closer together than the gap between sections.
        // "\n" inside a paragraph is rendered as a line break (whitespace-pre-line).
        return (
          <section key={i} className={`flex flex-col gap-6 ${spacing}`}>
            {block.text.map((paragraph, j) => (
              <p
                key={j}
                className="font-kaku font-medium text-[#333] text-base leading-loose tracking-[0.6px] whitespace-pre-line"
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
