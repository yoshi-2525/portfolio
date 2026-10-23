import imgLearnLog from "@/imports/images/learnlog.webp";
import imgCommitment from "@/imports/images/commitment.webp";
import imgWorks from "@/imports/images/works2.webp";
import imgDreamsHero from "@/imports/images/dream.webp";
import imgProfile from "@/imports/images/profile2.webp";

export type PageHeadingContent = {
  to: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string[];
  illustrationSrc: string;
};

export const pageHeadings = {
  works: {
    to: "/works",
    label: "作品集",
    eyebrow: "WORKS",
    title: "作品集",
    description: [
      "創作物をここに書き記しています。",
    ],
    illustrationSrc: imgWorks,
  },
  learning: {
    to: "/learning",
    label: "学習記録",
    eyebrow: "LEARNING LOG",
    title: "学習した記録",
    description: [
      "価値あるものを創作するために必要な知識をまとめています。",
    ],
    illustrationSrc: imgLearnLog,
  },
  commitment: {
    to: "/commitment",
    label: "こだわり",
    eyebrow: "DESIGN PHILOSOPHY",
    title: "創作へのこだわり",
    description: ["私がものを創るうえで大切にしている姿勢を書き留めています。"],
    illustrationSrc: imgCommitment,
  },
  dreams: {
    to: "/dreams",
    label: "将来の夢",
    eyebrow: "FUTURE DREAMS",
    title: "わたしの将来の夢",
    description: [
      "創作を通して為したいことを書き留めています。",     
    ],
    illustrationSrc: imgDreamsHero,
  },
  profile: {
    to: "/profile",
    label: "プロフィール",
    eyebrow: "PROFILE",
    title: "プロフィール",
    description: ["簡単なプロフィールを書いています。"],
    illustrationSrc: imgProfile,
  },
} satisfies Record<string, PageHeadingContent>;
