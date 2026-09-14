import type { Principle } from "@/components/CommitmentNavItem";
import { cardColors, accentColors } from "@/styles/palette";

export const principles: Principle[] = [
  {
    no: "01",
    title: "ものづくり地獄の住人になる",
    en: "Embrace Whitespace",
    color: cardColors.blue,
    accentColor: accentColors.blue,
    image: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=900&h=560&fit=crop&auto=format",
    summary: "創作活動は常に不満が残り、終わりのない地獄である",
    body: [
      "コンテンツを詰め込みすぎると、ユーザーはどこを見ればいいかわからなくなります。余白は視線の流れをコントロールし、重要な要素に自然と目が向くよう誘導する役割を持っています。",
      "私がデザインするとき、最初に取り組むのは「何を削るか」です。情報を加えることよりも、削ることの方が難しく、そして価値があると考えています。余白はその削ることの結果として生まれます。",
    ],
    tags: ["レイアウト", "視覚設計", "情報整理"],
  },
  {
    no: "02",
    title: "とにかく量をこなす",
    en: "Typography as Personality",
    color: cardColors.coral,
    accentColor: accentColors.coral,
    image: "https://images.unsplash.com/photo-1719639945389-dbaba215bb8b?w=900&h=560&fit=crop&auto=format",
    summary: "創作活動の質と量は比例するので、とにかく量をこなすことを意識する",
    body: [
      "タイポグラフィはデザインの中でもっとも見落とされやすい要素のひとつです。しかし実際には、ユーザーがプロダクトに触れる時間の大半は文字を読む時間であり、書体の選択はブランドの第一印象を左右します。",
      "私はフォントを選ぶとき、そのプロダクトが「どんな声で話すか」をイメージします。温かみのある丸みを帯びた書体か、鋭く知性的なサンセリフか。文字はデザインの皮膚であり、触感です。",
    ],
    tags: ["タイポグラフィ", "ブランディング", "UI"],
  },
  {
    no: "03",
    title: "知識の幅を広げる",
    en: "Color as Emotion",
    color: cardColors.sand,
    accentColor: accentColors.brown,
    image: "https://images.unsplash.com/photo-1608536212673-d604ad47eced?w=900&h=560&fit=crop&auto=format",
    summary: "色を使うことは感情を選ぶこと。多用するのではなく、使う場所を見極める。",
    body: [
      "色が多すぎるデザインは、感情を伝えるどころか混乱を招きます。私は原則として、1つのプライマリカラーと1つのアクセントカラーに絞ってデザインを組み立てます。それ以外の色は、テキストと背景の明度差のコントロールで表現します。",
      "このポートフォリオで使っているコーラルのアクセントは「創造への情熱」を、ブルーのヘッディングは「知性と誠実さ」を意図して選んでいます。色は恣意的に選ぶものではなく、言葉と同じように意味を持たせるものだと思っています。",
    ],
    tags: ["カラー理論", "感情設計", "アクセシビリティ"],
  },
  {
    no: "04",
    title: "インタラクションは会話",
    en: "Interaction as Dialogue",
    color: cardColors.purple,
    accentColor: accentColors.purple,
    image: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=900&h=560&fit=crop&auto=format",
    summary: "ボタンを押した瞬間、アプリはユーザーに答える。その応答の質がUXの品質を決める。",
    body: [
      "マイクロインタラクションは、ユーザーとプロダクトのあいだに生まれる小さな会話です。ホバー時のわずかな色変化、クリック後のフィードバック、ローディング中の動き。これらはすべて「今、ちゃんと動いていますよ」というメッセージです。",
      "私はインタラクションを設計するとき、「ユーザーがこのボタンを押したら、次に何を感じるべきか」から考えます。驚きではなく、安心感。予測可能でありながら、少しだけ気持ちよい応答。それが良いインタラクションの条件だと思っています。",
    ],
    tags: ["マイクロインタラクション", "UX", "モーション"],
  },
  {
    no: "05",
    title: "システムとして設計する",
    en: "Design as a System",
    color: cardColors.green,
    accentColor: accentColors.green,
    image: "https://images.unsplash.com/photo-1490013616775-3ca8865fb129?w=900&h=560&fit=crop&auto=format",
    summary: "個々の画面を作るのではなく、一貫したルールの集合体を設計する。",
    body: [
      "デザインシステムを構築する経験を通じて、「一貫性」がプロダクトの信頼性に直結することを学びました。ボタンのサイズ、余白のリズム、カラートークンの命名規則——これらがばらついているプロダクトは、ユーザーに無意識の不安感を与えます。",
      "私がデザインするときは、まず「このコンポーネントは他のどの文脈でも使えるか」を自問します。特定の画面のためだけに作られた要素は、スケールしません。再利用可能で、予測可能で、ドキュメント化できる——それが私のこだわる設計の姿勢です。",
    ],
    tags: ["デザインシステム", "コンポーネント設計", "Figma"],
  },
];
