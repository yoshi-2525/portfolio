import type { LearningRecord } from "@/components/LearningRecordCard";
import { cardColors, accentColors } from "@/styles/palette";
import imgDreamsHero from "@/imports/1920WLight/a9ac80ec745b07e07c3edd921ec5b28762ff0782.png";


// Single source of truth: every valid category, its color, and its filter/display order.
// Records reference a category by name; the color and the filter list are both derived
// from this array instead of being defined or extracted separately.
export const LEARNING_CATEGORIES = [
  { name: "哲学", color: cardColors.blue, accentColor: accentColors.blue },
  { name: "社会学", color: cardColors.coral, accentColor: accentColors.coral },
  { name: "プログラミング", color: cardColors.purple, accentColor: accentColors.purple },
  { name: "UI/UX", color: cardColors.green, accentColor: accentColors.green },
  { name: "デザイン", color: cardColors.amber, accentColor: accentColors.brown },
  { name: "設計", color: cardColors.peach, accentColor: accentColors.gray },
] as const;

export type LearningCategory = (typeof LEARNING_CATEGORIES)[number]["name"];

const categoryColors = Object.fromEntries(
  LEARNING_CATEGORIES.map(({ name, color, accentColor }) => [name, { color, accentColor }]),
) as Record<LearningCategory, { color: string; accentColor: string }>;

type LearningRecordInput = Omit<LearningRecord, "color" | "accentColor" | "category"> & {
  category: LearningCategory;
};

const recordInputs: LearningRecordInput[] = [
  {
    id: 1,
    date: "2026年09月",
    category: "哲学",
    title: "ハイテガー哲学とデザイン",
    description: "Server Components、use() フック、アクションなど、React 19 の主要な新機能を実践的に学習しました。",
    content: [
      { type: "heading", text: "私たちが存在することの意義を問う" },
      {
        type: "body",
        text: "わたしがこの世界に存在していることの意義を徹底的に考え抜いてみると、どうもそのような意味は見つかることがなく、生きてる意味なんてないことを悟ってしまいます。",
      },
      {
        type: "body",
        text: "この世は出口のない地獄で、死ぬまで終わりがなく、この世に存在し続けることを強いられています。",
      },
      { type: "heading", text: "実践したこと" },
      {
        type: "body",
        text: "小さなサンプルアプリを作成し、Server Components でのデータフェッチや use() フックの挙動、アクション経由のフォーム送信を実際に試しました。",
      },
      { type: "image", image: imgDreamsHero },
      {
        type: "body",
        text: "今後、実際のプロジェクトでどの機能をどこに導入できそうか、引き続き整理していきます。",
      },
    ],
  },
  {
    id: 2,
    date: "2026年08月",
    category: "デザイン",
    title: "Figma コンポーネント設計",
    description: "デザインシステムの観点からコンポーネントのバリアントやオートレイアウトを深く理解しました。",
    content: [
      { type: "heading", text: "学んだきっかけ" },
      {
        type: "body",
        text: "デザインシステムの一貫性を高めるために、Figma のバリアント機能とオートレイアウトをより深く理解したいと思ったのがきっかけです。",
      },
      { type: "heading", text: "実践したこと" },
      {
        type: "body",
        text: "既存のUIパーツをバリアントとして再構成し、オートレイアウトを組み合わせて再利用しやすいコンポーネントを設計しました。",
      },
      { type: "image", image: imgDreamsHero },
      {
        type: "body",
        text: "実際のコンポーネント作成例を交えながら、今後もこの設計パターンを振り返っていきます。",
      },
    ],
  },
  {
    id: 3,
    date: "2026年07月",
    category: "哲学",
    title: "ニーチェと生のデザイン",
    description: "ニヒリズムに陥ってもなお、自分の生きる根源的な意味を見つけ出そうとする姿勢に、感嘆の意を表せざるをえません。",
    content: [
      { type: "heading", text: "ニヒリズム" },
      {
        type: "body",
        text: "この世のにある事実や真理やというものは、どうも主観的で、突き詰めると客観的に正しいことなんて存在しない気がします。",
      },
      {
        type: "body",
        text: "私たちが認識する世界は、私たちの欲望に従ってできているかのようです。",
      },
      { type: "heading", text: "実践したこと" },
      {
        type: "body",
        text: "サンプルコードを書きながら、条件型・テンプレートリテラル型・infer キーワードを使った型定義パターンをいくつか確認しました。",
      },
      { type: "image", image: imgDreamsHero },
      {
        type: "body",
        text: "実務での活用例も、今後この記事に追記していきます。",
      },
    ],
  },
  {
    id: 4,
    date: "2026年06月",
    category: "UI/UX",
    title: "アクセシビリティ設計",
    description: "WCAG 2.1 のガイドラインに沿ったインクルーシブなUI設計の原則と実装方法を学習しました。",
    content: [
      { type: "heading", text: "学んだきっかけ" },
      {
        type: "body",
        text: "WCAG 2.1 のガイドラインに沿ったインクルーシブなUI設計を実装レベルで理解したいと思ったのがきっかけです。",
      },
      { type: "heading", text: "実践したこと" },
      {
        type: "body",
        text: "コントラスト比やキーボード操作、支援技術への対応など、主要な達成基準を読み解きながら実装時のポイントを整理しました。",
      },
      { type: "image", image: imgDreamsHero },
      {
        type: "body",
        text: "今後の画面設計でも、この基準をチェックリストとして活用していきます。",
      },
    ],
  },
  {
    id: 5,
    date: "2026年05月",
    category: "社会学",
    title: "ウェーバーから学ぶ社会への理解",
    description: "新しい CSS ファースト設定、@theme ディレクティブ、Lightning CSS コンパイラを使いこなしました。",
    content: [
      { type: "heading", text: "学んだきっかけ" },
      {
        type: "body",
        text: "Tailwind CSS v4 で追加された CSS ファースト設定や @theme ディレクティブを理解したいと思い学習しました。",
      },
      { type: "heading", text: "実践したこと" },
      {
        type: "body",
        text: "新しい CSS ファースト設定と @theme ディレクティブ、Lightning CSS コンパイラを実際にこのポートフォリオのカラートークン設計に反映しました。",
      },
      { type: "image", image: imgDreamsHero },
      {
        type: "body",
        text: "今後も新しいユーティリティやディレクティブが追加された際は、随時試していきます。",
      },
    ],
  },
  {
    id: 6,
    date: "2026年04月",
    category: "哲学",
    title: "ベルクソンの流れ",
    description: "フロントエンドにおけるレイヤードアーキテクチャの設計原則と依存性の逆転について学びました。",
    content: [
      { type: "heading", text: "学んだきっかけ" },
      {
        type: "body",
        text: "フロントエンドにおけるレイヤードアーキテクチャの設計原則と依存性の逆転について理解を深めたいと思ったのがきっかけです。",
      },
      { type: "heading", text: "実践したこと" },
      {
        type: "body",
        text: "依存性の逆転の原則を、レイヤー分割の具体例とともに学びました。",
      },
      { type: "image", image: imgDreamsHero },
      {
        type: "body",
        text: "今後、規模の大きい機能を作る際の設計方針として活用していきます。",
      },
    ],
  },
];

export const records: LearningRecord[] = recordInputs.map((r) => ({
  ...r,
  ...categoryColors[r.category],
}));

export const categories = ["すべて", ...LEARNING_CATEGORIES.map((c) => c.name)];
