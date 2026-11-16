import type { ContentBlock } from "@/data/learningRecords";

// One card = one image + one heading + any number of body paragraphs.
export type WorksContentCard = {
  heading: string;
  image: string;
  body: string[];
};

export type Work = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  // 作品一覧のカード（WorkCard）で使う画像
  listImage: string;
  // 作品詳細ページの上部で使う画像
  detailImage: string;
  // 作品一覧のカード（WorkCard）で使う短い紹介文
  listDescription: string;
  // 作品詳細ページで使う紹介文。学習記録の content と同じく、見出し・本文・画像のブロックを並べる
  detailDescription: ContentBlock[];
  // GitHub リポジトリの URL（ないときは省略）
  githubUrl?: string;
  process: WorksContentCard[];
  color: string;
  accentColor: string;
};

// One work per file: src/data/works/NN.ts default-exports a Work.
// Adding a file is enough to publish it; no list to register it in.
const workInputs = Object.values(
  import.meta.glob<Work>("./works/[0-9]*.ts", { eager: true, import: "default" }),
);

// Newest first: display order is id descending, regardless of file order.
export const works: Work[] = [...workInputs].sort((a, b) => b.id - a.id);
