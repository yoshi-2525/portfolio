import imgTheme01 from "@/imports/1920WLight/10fd8431ae6d9c2d06134d8fb03827958358aaad.png";
import { cardColors, accentColors } from "@/styles/palette";

export type Work = {
  id: number;
  no: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  year: string;
  image: string;
  thumbnail?: string;
  useThumbnail: boolean;
  description: string;
  detail: string;
  color: string;
  accentColor: string;
};

export const works: Work[] = [
  {
    id: 1,
    no: "01",
    title: "憧れ人の選書",
    subtitle: "Book Curation App",
    category: "アプリ開発",
    tags: ["React", "TypeScript", "Figma"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=500&fit=crop&auto=format",
    thumbnail: imgTheme01,
    useThumbnail: true,
    description:
      "憧れの人物が選んだ本を一覧できるキュレーションアプリ。膨大な選択肢に圧倒されがちな読書を、「尊敬する人の推薦」というフィルターで親しみやすくしました。",
    detail:
      "本を読みたいと思っても選べない、という課題を解決するため制作。Figma でプロトタイプを繰り返し検証し、シンプルながら発見のある UI を目指しました。",
    color: cardColors.blue,
    accentColor: accentColors.blue,
  },
  {
    id: 2,
    no: "02",
    title: "哲学ワークショップ",
    subtitle: "Philosophy Workshop App",
    category: "アプリ開発",
    tags: ["React", "デザインシステム", "UX設計"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1597392580482-798e53c7aa33?w=800&h=500&fit=crop&auto=format",
    useThumbnail: false,
    description:
      "哲学を身近にするためのワークショップ開催支援アプリ。参加者が気軽に哲学的な問いを持ち寄り、対話できる場を設計しました。",
    detail:
      "日々の生活に哲学的な視点を取り入れることで、内面を豊かにしてほしいという思いから制作。学会発表のテーマにもなりました。",
    color: cardColors.coral,
    accentColor: accentColors.coral,
  },
  {
    id: 3,
    no: "03",
    title: "ポートフォリオサイト",
    subtitle: "Personal Portfolio",
    category: "Web デザイン",
    tags: ["Figma", "React", "Tailwind CSS"],
    year: "2026",
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=800&h=500&fit=crop&auto=format",
    useThumbnail: false,
    description:
      "このサイト自体が作品のひとつ。創造的な衝動の軌跡を残すことをテーマに、Figma でデザインし React + Tailwind で実装しました。",
    detail:
      "デザインと実装をひとりで完結させる力を示す場として制作。Zen Maru Gothic の温かみと、コーラルカラーのアクセントで「ものづくりの人」らしさを表現しています。",
    color: cardColors.purple,
    accentColor: accentColors.purple,
  },
  {
    id: 4,
    no: "04",
    title: "デザインシステム構築",
    subtitle: "Design System",
    category: "デザイン設計",
    tags: ["Figma", "デザインシステム", "トークン設計"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=800&h=500&fit=crop&auto=format",
    useThumbnail: false,
    description:
      "社内プロダクトのUIコンポーネントを整理・体系化したデザインシステム。カラートークン・タイポグラフィ・スペーシングを定義し、開発速度と品質を向上させました。",
    detail:
      "エンジニアとデザイナーの認識齟齬をなくすことを目的に主導。Figma Variables と Storybook を連携させたドキュメント体制を整備しました。",
    color: cardColors.green,
    accentColor: accentColors.green,
  },
];
