import type { LearningRecord } from "@/components/LearningRecordCard";
import { cardColors } from "@/styles/palette";

export const records: LearningRecord[] = [
  {
    date: "2026年09月",
    category: "フロントエンド",
    title: "React 19 新機能",
    description: "Server Components、use() フック、アクションなど、React 19 の主要な新機能を実践的に学習しました。",
    tags: ["React", "TypeScript"],
    color: cardColors.blue,
  },
  {
    date: "2026年08月",
    category: "デザイン",
    title: "Figma コンポーネント設計",
    description: "デザインシステムの観点からコンポーネントのバリアントやオートレイアウトを深く理解しました。",
    tags: ["Figma", "Design System"],
    color: cardColors.coral,
  },
  {
    date: "2026年07月",
    category: "TypeScript",
    title: "型システムの深化",
    description: "条件型、テンプレートリテラル型、infer キーワードを活用した高度な型定義を学びました。",
    tags: ["TypeScript", "型設計"],
    color: cardColors.purple,
  },
  {
    date: "2026年06月",
    category: "UI/UX",
    title: "アクセシビリティ設計",
    description: "WCAG 2.1 のガイドラインに沿ったインクルーシブなUI設計の原則と実装方法を学習しました。",
    tags: ["アクセシビリティ", "WCAG"],
    color: cardColors.green,
  },
  {
    date: "2026年05月",
    category: "CSS",
    title: "Tailwind CSS v4",
    description: "新しい CSS ファースト設定、@theme ディレクティブ、Lightning CSS コンパイラを使いこなしました。",
    tags: ["CSS", "Tailwind"],
    color: cardColors.amber,
  },
  {
    date: "2026年04月",
    category: "設計",
    title: "クリーンアーキテクチャ",
    description: "フロントエンドにおけるレイヤードアーキテクチャの設計原則と依存性の逆転について学びました。",
    tags: ["設計", "アーキテクチャ"],
    color: cardColors.peach,
  },
];
