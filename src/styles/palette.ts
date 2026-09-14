/**
 * Card color design tokens.
 *
 * Source of truth for the values lives in `src/index.css` (`@theme` block),
 * which also generates Tailwind utilities (e.g. `bg-card-blue`, `text-accent-coral`).
 * These exports let data-driven card lists (Learning/Works/Commitment/Dreams/Profile)
 * reference the same tokens via inline styles.
 */

export const cardColors = {
  blue: "var(--color-card-blue)",
  coral: "var(--color-card-coral)",
  purple: "var(--color-card-purple)",
  green: "var(--color-card-green)",
  amber: "var(--color-card-amber)",
  peach: "var(--color-card-peach)",
  sand: "var(--color-card-sand)",
  gray: "var(--color-card-gray)",
} as const;

export const accentColors = {
  blue: "var(--color-accent-blue)",
  coral: "var(--color-accent-coral)",
  purple: "var(--color-accent-purple)",
  green: "var(--color-accent-green)",
  brown: "var(--color-accent-brown)",
} as const;

export type CardColorKey = keyof typeof cardColors;
export type AccentColorKey = keyof typeof accentColors;
