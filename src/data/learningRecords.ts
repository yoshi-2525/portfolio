import type { LearningRecord } from "@/components/LearningRecordCard";
import { cardColors, accentColors } from "@/styles/palette";
import imgDreamsHero from "@/imports/1920WLight/a9ac80ec745b07e07c3edd921ec5b28762ff0782.png";

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "body"; text: string }
  | { type: "image"; image: string };

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
    date: "2026年08月",
    category: "哲学",
    title: "ベルクソンとデザイン",
    description: "私たちは命が尽き果てるまで、終わることのない経験の持続が私たちの生を織りなしています。その思考とデザイン論を組み合わせてみました。",
    content: [
      { type: "heading", text: "終わることのない経験の持続" },
      {
        type: "body",
        text: "私たちは何かを常に経験しながら、終わりの見えない生を送り続けています。数え切れないほどの経験は、過去のものとして切り離されずに、今この瞬間の私たちの中にも持続しています。過去の経験が現在に浸透しながら、その時々の経験の質を形づくります。そしてその経験が次に私たちが受け取るものの意味づけを変えていきます。",
      },
      { type: "heading", text: "多種多様な意味づけのしかた" },
      {
        type: "body",
        text: "同じ景色を見ているはずでも、その景色の見え方や意味づけの仕方は、各個人によって変わります。それは私たちがそれぞれ異なる過去を生きてきたからです。例えば4月に咲く桜を見れば、そこから思い起こされるものは十人十色でしょう。",
      },
      {
        type: "body",
        text: "桜を見て思い出すものは、その桜を見た時の場所や天気、たまたま聴いていた音楽、直前に経験したことなど、数え切れないほどの複雑な文脈が絡まっています。そのためふと蘇る記憶や味わう感情というのは、その場に立ってみないとわかりません。",
      },
      {
        type: "body",
        text: "大好きな人と花見に行った記憶に懐かしさを感じることもあれば、新しくできた友達とサークル選びに胸を躍らせる大学の時の記憶に未熟さを感じることもあります。桜を見ているときの温度や吹いている風、花びらの散り方等、その時の情感が、私たちに気づかせてくれる面影を変えてくれます。",
      },
      {
        type: "body",
        text: "今日も日々私たちは何かの感覚を受け取り、それまでに生きてきた経験と重ね合わせながらその感覚に意味を与えています。その過程は私たちが生きている間、終わることなく続いていくのでしょう。そしてこれまでの経験が現在の私たちの中に持続しているからこそ、未来に受け取る感覚もこれまでとは異なる意味を持って現れます。",
      },
      { type: "heading", text: "優れたデザインを生み出すには" },
      {
        type: "body",
        text: "デザインというのは各人が受け取る感覚や、そこから生まれる経験や意味を探究し続けることなのかもしれません。ものを使う際、私たちは意識的にも無意識的にも、様々な感覚を受け取っています。作ったものに対して、使ってくれる人はどんな感覚を味わうのでしょうか。それまでに積み重ねてきた経験と創られたものが重なり合うことによって、どのような意味が生まれるのでしょうか。",
      },
      {
        type: "body",
        text: "優れたデザインを生み出すには、利用者が受け取る感覚だけでなく、その人がこれまでに積み重ねてきた経験も考えなければいけません。同じ感覚を受けたつもりでも、意味づけのされ方は、使う人によって当然異なります",
      },
      {
        type: "body",
        text: "作り手の意図と受け手の経験との間にあるギャップをなくすのではなく、そのギャップを含めてデザインを行わなければいけません。そして受け手がものを使うことによって新たな意味の生まれることが、優れたデザインを生み出すことに繋がるのでしょう。",
      },                
    ],
  },
    {
    id: 7,
    date: "2026年08月",
    category: "社会学",
    title: "加速する社会",
    description: "意味を見いだせなくなった加速する社会の中でのデザイン",
    content: [
      { type: "heading", text: "終わることのない経験の持続" },
      {
        type: "body",
        text: "私たちは何かを常に経験しながら、終わりの見えない生を送り続けています。数え切れないほどの経験は、過去のものとして切り離されずに、今この瞬間の私たちの中にも持続しています。過去の経験が現在に浸透しながら、その時々の経験の質を形づくります。そしてその経験が次に私たちが受け取るものの意味づけを変えていきます。",
      },
      { type: "heading", text: "多種多様な意味づけのしかた" },
      {
        type: "body",
        text: "同じ景色を見ているはずでも、その景色の見え方や意味づけの仕方は、各個人によって変わります。それは私たちがそれぞれ異なる過去を生きてきたからです。例えば4月に咲く桜を見れば、そこから思い起こされるものは十人十色でしょう。",
      },
      {
        type: "body",
        text: "桜を見て思い出すものは、その桜を見た時の場所や天気、たまたま聴いていた音楽、直前に経験したことなど、数え切れないほどの複雑な文脈が絡まっています。そのためふと蘇る記憶や味わう感情というのは、その場に立ってみないとわかりません。",
      },
      {
        type: "body",
        text: "大好きな人と花見に行った記憶に懐かしさを感じることもあれば、新しくできた友達とサークル選びに胸を躍らせる大学の時の記憶に未熟さを感じることもあります。桜を見ているときの温度や吹いている風、花びらの散り方等、その時の情感が、私たちに気づかせてくれる面影を変えてくれます。",
      },
      {
        type: "body",
        text: "今日も日々私たちは何かの感覚を受け取り、それまでに生きてきた経験と重ね合わせながらその感覚に意味を与えています。その過程は私たちが生きている間、終わることなく続いていくのでしょう。そしてこれまでの経験が現在の私たちの中に持続しているからこそ、未来に受け取る感覚もこれまでとは異なる意味を持って現れます。",
      },
      { type: "heading", text: "優れたデザインを生み出すには" },
      {
        type: "body",
        text: "デザインというのは各人が受け取る感覚や、そこから生まれる経験や意味を探究し続けることなのかもしれません。ものを使う際、私たちは意識的にも無意識的にも、様々な感覚を受け取っています。作ったものに対して、使ってくれる人はどんな感覚を味わうのでしょうか。それまでに積み重ねてきた経験と創られたものが重なり合うことによって、どのような意味が生まれるのでしょうか。",
      },
      {
        type: "body",
        text: "優れたデザインを生み出すには、利用者が受け取る感覚だけでなく、その人がこれまでに積み重ねてきた経験も考えなければいけません。同じ感覚を受けたつもりでも、意味づけのされ方は、使う人によって当然異なります",
      },
      {
        type: "body",
        text: "作り手の意図と受け手の経験との間にあるギャップをなくすのではなく、そのギャップを含めてデザインを行わなければいけません。そして受け手がものを使うことによって新たな意味の生まれることが、優れたデザインを生み出すことに繋がるのでしょう。",
      },                
    ],
  },
];

export const records: LearningRecord[] = recordInputs.map((r) => ({
  ...r,
  ...categoryColors[r.category],
}));

export const categories = ["すべて", ...LEARNING_CATEGORIES.map((c) => c.name)];
