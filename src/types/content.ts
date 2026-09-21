export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "body"; text: string }
  | { type: "image"; image: string };
