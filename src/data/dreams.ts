import type { Dream } from "@/components/DreamCard";
import { cardColors, accentColors } from "@/styles/palette";

export const dreams: Dream[] = [
  {
    id: 1,
    title: "社会に有意義なものを創りあげる",
    subtitle: "誰かに何かをもたらすことで意義が生まれる",
    description:
      "誰かに何かをもたらすことで、私は生きる意義が生まれるのではないかと思っています。移り変わりの激しい世の中で、誰に何を届けたいか、世の中にどのような影響をもたらしたいのかをしっかり考え、誰かの内面を豊かにできる製品を創りつづけていきたいです。",
    color: cardColors.blue,
    accentColor: accentColors.blue
  },
  {
    id: 2,
    title: "現象学とデザインの組み合わせ",
    subtitle: "先達の智慧を借りながら、私なりの理論を構築する",
    description:
      "ゼロからプロダクトを作り上げる力を持つエンジニアを目指しています。フロントエンドだけでなく、バックエンドやインフラまで理解し、ひとりでもサービスをリリースできる能力を身につけたいと考えています。",
    color: cardColors.coral,
    accentColor: accentColors.coral,
  },
  {
    id: 3,
    title: "展示会・ワークショップの開催",
    subtitle: "美学と技術の交差点で考える",
    description:
      "哲学・美学の視点からデジタルプロダクトを捉え、「良いデザインとは何か」という問いに答えを持つ研究者でありたい。学会発表や論文執筆を通じて、創造的な知見を社会に還元したいと思っています。",
    color: cardColors.purple,
    accentColor: accentColors.purple,
  },
  {
    id: 4,
    title: "欲望のエデュケーション",
    subtitle: "人々の欲望を洗練させる",
    description:
      "哲学・美学の視点からデジタルプロダクトを捉え、「良いデザインとは何か」という問いに答えを持つ研究者でありたい。学会発表や論文執筆を通じて、創造的な知見を社会に還元したいと思っています。",
    color: cardColors.green,
    accentColor: accentColors.green,
  },
  {
    id: 5,
    title: "クリエイティブの土台を作る",
    subtitle: "人々が創造的な活動に没頭できるような環境を創る",
    description:
      "哲学・美学の視点からデジタルプロダクトを捉え、「良いデザインとは何か」という問いに答えを持つ研究者でありたい。学会発表や論文執筆を通じて、創造的な知見を社会に還元したいと思っています。",
    color: cardColors.gray,
    accentColor: accentColors.gray,
  },
];
