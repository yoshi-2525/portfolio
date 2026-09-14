import type { Dream } from "@/components/DreamCard";
import { cardColors, accentColors } from "@/styles/palette";

export const dreams: Dream[] = [
  {
    id: 1,
    title: "UI/UXデザイナー",
    subtitle: "美しく、使いやすいものを創る",
    description:
      "人の心を動かすインターフェースを設計し、使う人が自然と笑顔になるようなプロダクトを生み出したい。デザインとエンジニアリングの両方を深く理解したデザイナーとして、チームの橋渡しになりたいと思っています。",
    icon: "✦",
    color: cardColors.blue,
    accentColor: accentColors.blue,
    progress: 65,
    steps: ["Figma を極める", "デザインシステムを構築する", "ユーザーリサーチを学ぶ", "ポートフォリオを充実させる"],
  },
  {
    id: 2,
    title: "プロダクトエンジニア",
    subtitle: "アイデアをコードで形にする",
    description:
      "ゼロからプロダクトを作り上げる力を持つエンジニアを目指しています。フロントエンドだけでなく、バックエンドやインフラまで理解し、ひとりでもサービスをリリースできる能力を身につけたいと考えています。",
    icon: "◈",
    color: cardColors.coral,
    accentColor: accentColors.coral,
    progress: 50,
    steps: ["React を極める", "Next.js でフルスタック開発", "バックエンドAPI設計を学ぶ", "個人サービスをリリースする"],
  },
  {
    id: 3,
    title: "創造的な研究者",
    subtitle: "美学と技術の交差点で考える",
    description:
      "哲学・美学の視点からデジタルプロダクトを捉え、「良いデザインとは何か」という問いに答えを持つ研究者でありたい。学会発表や論文執筆を通じて、創造的な知見を社会に還元したいと思っています。",
    icon: "❋",
    color: cardColors.purple,
    accentColor: accentColors.purple,
    progress: 30,
    steps: ["美学・哲学の文献を読む", "デザイン研究の方法論を習得する", "学会に参加する", "論文を執筆する"],
  },
];
