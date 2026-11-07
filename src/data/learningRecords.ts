import type { LearningRecord } from "@/components/LearningRecordCard";
import { cardColors, accentColors } from "@/styles/palette";

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "body"; text: string[] }
  | { type: "image"; image: string; caption?: string }
  // Quoted passage from another source. `source` names where it comes from; `href` links that name.
  | { type: "quote"; text: string; source?: string; href?: string }
  // External reference shown as a clickable card. `note` is an optional one-line description.
  | { type: "link"; href: string; label: string; note?: string };

// Single source of truth: every valid category, its color, and its filter/display order.
// Records reference a category by name; the color and the filter list are both derived
// from this array instead of being defined or extracted separately.
export const LEARNING_CATEGORIES = [
  { name: "哲学", color: cardColors.blue, accentColor: accentColors.blue },
  { name: "社会学", color: cardColors.coral, accentColor: accentColors.coral },
  { name: "UI", color: cardColors.purple, accentColor: accentColors.purple },
  { name: "UX", color: cardColors.green, accentColor: accentColors.green },
  { name: "デザイン", color: cardColors.amber, accentColor: accentColors.brown },
] as const;

export type LearningCategory = (typeof LEARNING_CATEGORIES)[number]["name"];

const categoryColors = Object.fromEntries(
  LEARNING_CATEGORIES.map(({ name, color, accentColor }) => [name, { color, accentColor }]),
) as Record<LearningCategory, { color: string; accentColor: string }>;

export type LearningRecordInput = Omit<LearningRecord, "color" | "accentColor" | "category"> & {
  category: LearningCategory;
};

// One article per file: src/data/learning/NN.ts default-exports a LearningRecordInput.
// Adding a file is enough to publish it; no list to register it in.
const recordInputs = Object.values(
  import.meta.glob<LearningRecordInput>("./learning/[0-9]*.ts", { eager: true, import: "default" }),
);

// Newest first: display order is id descending, regardless of file order.
export const records: LearningRecord[] = recordInputs
  .map((r) => ({
    ...r,
    ...categoryColors[r.category],
  }))
  .sort((a, b) => b.id - a.id);

export const categories = ["すべて", ...LEARNING_CATEGORIES.map((c) => c.name)];
