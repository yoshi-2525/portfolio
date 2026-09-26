import imgTheme01 from "@/imports/1920WLight/10fd8431ae6d9c2d06134d8fb03827958358aaad.png";
import imgHero from "@/imports/1920WLight/f37733317dc2f43e92a86618c5a3d5f13af1f741.png";
import imgDreamsHero from "@/imports/1920WLight/a9ac80ec745b07e07c3edd921ec5b28762ff0782.png";
import imgIdea from "@/imports/images/idea.png";
import imgBookshelf from "@/imports/images/bookshelf.png";
import imgHell from "@/imports/images/hell.png";
import { cardColors, accentColors } from "@/styles/palette";

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
  image: string;
  description: string;
  process: WorksContentCard[];
  color: string;
  accentColor: string;
};

export const works: Work[] = [
  {
    id: 1,
    title: "わたしのポートフォリオ",
    subtitle: "Book Curation App",
    category: "アプリ開発",
    year: "2025",
    image: imgTheme01,
    description:
      "憧れの人物が選んだ本を一覧できるキュレーションアプリ。膨大な選択肢に圧倒されがちな読書を、「尊敬する人の推薦」というフィルターで親しみやすくしました。",
    process: [
      {
        heading: "制作の背景",
        image: imgTheme01,
        body: ["本を読みたいと思っても選べない、という課題を解決するため制作しました。"],
      },
      {
        heading: "参考サイトの調査",
        image: imgBookshelf,
        body: [
          "初めてサイトを作成するので、参考とすべきサイトを調査しました。",
          "日本語の文字をたくさん表示させる想定だったので、文字がたくさん表示されていても読みやすくなっているサイトを選び、文字の配色やフォント選びの参考にしました。",
        ],
      },
      {
        heading: "載せたい情報の考案",
        image: imgTheme01,
        body: ["わたしのことを表現するために、このサイトに何を載せることについて考えました。私は常日頃、日々流れる時間の中で様々なことを考え、感じ取っています。そして人生経験を積み、内面に流れる思考や感情の波の中で、大切したいものが段々と増えてきました。",
          "私の大切にしたいものを誰かにしっかり伝えるために、作品集のほかにもデザインのこだわりや学習記録、将来の夢をこのサイトに載せています。"]
      },
      {
        heading: "Figmaでの制作",
        image: imgTheme01,
        body: ["figmamakeを使って、AIと"],
      }, 
      {
        heading: "Claude Codeを利用しながら開発",
        image: imgTheme01,
        body: ["ClaudeCodeにたくさん手伝ってもらいながら、TypeScriptをベースに、Reactを用いたフロントエンド開発を行い、Tailwind CSSでスタイリングを実装しました。"],
      },
      {
        heading: "デザインの統一",
        image: imgTheme01,
        body: ["カードの色や文字の大きさ、ホバー時の動作など、デザインに一貫性を持たせることを意識しました。再利用可能なパーツはコンポーネント化し、共通のカラースタイルはCSSファイルで定義することによって、デザインの変更時の修正漏れを防ぎ、保守性の高い設計を目指しました。"],
      },         
                 
    ],
    color: cardColors.blue,
    accentColor: accentColors.blue,
  },
  {
    id: 2,
    title: "哲学ワークショップ",
    subtitle: "Philosophy Workshop App",
    category: "アプリ開発",
    year: "2025",
    image: imgIdea,
    description:
      "哲学を身近にするためのワークショップ開催支援アプリ。参加者が気軽に哲学的な問いを持ち寄り、対話できる場を設計しました。",
    process: [
      {
        heading: "制作の背景",
        image: imgIdea,
        body: ["日々の生活に哲学的な視点を取り入れることで、内面を豊かにしてほしいという思いから制作しました。"],
      },
      {
        heading: "その後",
        image: imgHell,
        body: ["学会発表のテーマにもなりました。"],
      },
    ],
    color: cardColors.coral,
    accentColor: accentColors.coral,
  },
  {
    id: 3,
    title: "ポートフォリオサイト",
    subtitle: "Personal Portfolio",
    category: "Web デザイン",
    year: "2026",
    image: imgHero,
    description:
      "このサイト自体が作品のひとつ。創造的な衝動の軌跡を残すことをテーマに、Figma でデザインし React + Tailwind で実装しました。",
    process: [
      {
        heading: "制作の背景",
        image: imgHero,
        body: ["デザインと実装をひとりで完結させる力を示す場として制作しました。"],
      },
      {
        heading: "こだわったポイント",
        image: imgDreamsHero,
        body: ["Zen Maru Gothic の温かみと、コーラルカラーのアクセントで「ものづくりの人」らしさを表現しています。"],
      },
    ],
    color: cardColors.purple,
    accentColor: accentColors.purple,
  },
];
