import imgTheme01 from "@/imports/1920WLight/10fd8431ae6d9c2d06134d8fb03827958358aaad.png";
import imgIdea from "@/imports/images/idea.png";
import imgBookshelf from "@/imports/images/bookshelf.png";
import imgHell from "@/imports/images/hell.png";
import imgWorkshopPersona from "@/imports/images/works/workshop/persona_man.png";
import imgWorkshopStory from "@/imports/images/works/workshop/story.png";
import { cardColors, accentColors } from "@/styles/palette";
import imgPortfolioClip from "@/imports/images/works/portfolio/designClip.png";
import imgPortfolioClaude from "@/imports/images/works/portfolio/claudeCode.png";
import imgPortfolioCommitment from "@/imports/images/works/portfolio/commitment.png";
import imgPortfolioDesignSystem from "@/imports/images/works/portfolio/designSystem.png";
import imgPortfolioLearnLog from "@/imports/images/works/portfolio/learnLog.png";
import imgPortfolioHomeList from "@/imports/images/works/portfolio/homeList.png";
import imgPortfolioHomeDetail from "@/imports/images/works/portfolio/homeDetail.png";

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
  description: string;
  process: WorksContentCard[];
  color: string;
  accentColor: string;
};

const workInputs: Work[] = [
  {
    id: 1,
    title: "わたしのポートフォリオ",
    subtitle: "My Portfolio",
    category: "サイト制作",
    year: "2026",
    listImage: imgPortfolioHomeList,
    detailImage: imgPortfolioHomeDetail,
    description:
      "わたしを表現するためのサイトを製作してみました。私の表現方法をじっくり考え、言葉をたくさん書きたかったため、大量の日本語が表示されても、苦にならないデザインを心がけました。",
    process: [
      {
        heading: "制作の背景",
        image: imgTheme01,
        body: ["「自分のやりたいこと」や「大切にしたいこと」、そして「デザインを通じて実現したいこと」を言葉で表現したい思いから、自分自身のサイトを制作することにしました。",
          "私は日頃から自分の内面に宿る感覚や、心の機微を大切にしています。そして周囲の価値観に流されるのではなく、自分らしくあることを大事にしています。そうした自分自身のあり方を表現したいと考えたため、「わたしのポートフォリオ」と名付けました。"
        ],
      },
      {
        heading: "参考サイトの調査",
        image: imgPortfolioClip,
        body: [
          "初めてサイトを作成するので、参考となるサイトを調査しました。参考にしたサイト集はWeb Design Clipです。このサイトから直感的にいいと感じたサイトをいくつかピックアップしました、",
          "日本語の文字をたくさん表示させる想定だったので、文字がたくさん表示されていても読みやすくなっているサイトを選び、サイトの配色やフォント選びの参考にしています。",
        ],
      },
      {
        heading: "載せたい情報の考案",
        image: imgTheme01,
        body: ["自分自身を表現するために、このサイトに何を載せるべきかを考えました。私たちは日々の流れる時間の中で、さまざまなことを考え、感じながら生きています。人生経験を重ねるにつれて、自分の中にある思考や感情も少しずつ変化し、大切にしたいものが増えていきました。",
          "私の大切にしたいものを誰かにしっかり伝えるために、このサイトでは作品集だけでなく、デザインへのこだわりや学習記録、将来の夢についても記載していくことを決めました。"]
      },
      {
        heading: "Claude Codeを利用しながらの開発",
        image: imgPortfolioClaude,
        body: ["ClaudeCodeにたくさん手伝ってもらいながら、TypeScriptをベースに、Reactを用いたフロントエンドの開発を行い、Tailwind CSSでスタイリングを実装しました。サイトの修正は基本Claudeに依頼しましたが、自分のわかる軽微な修正は開発者ツールを利用しながら自分で行うようにしました。",
          "納得できない箇所やわかりづらいと感じたところは、その都度プロンプトを通じて修正を依頼し、このサイトの利便性や認知的容易性を高めるために、サイトのデザインの最適化に取り組みました。"
        ],
      },
      {
        heading: "デザインの統一とデザインシステムの作成",
        image: imgPortfolioDesignSystem,
        body: ["カードの色や文字の大きさ、ホバー時の動作など、デザインに一貫性を持たせることを意識しました。再利用可能なパーツはコンポーネント化し、共通のカラースタイルはCSSファイルで定義することによって、デザインの変更時の修正漏れを防ぎ、保守性の高い設計を目指しました。",
          "また、Figma MCPを介してFigmaとClaude Codeを連携させ、Claude Codeを活用して、このサイトで使用しているデザイン要素をFigma上に整理・可視化しました。そうすることによってサイト全体で使用している色や文字のスタイルを一覧できるようになり、デザインの構成要素について把握しやすくしました。"
        ],
      },
      {
        heading: "「将来の夢」や「こだわり」等の記入",
        image: imgPortfolioCommitment,
        body: ["自分自身と向き合いながら将来的に実現したいことや、ものづくりを行う上で大切にしたい考え方を文章としてまとめました。「こだわり」のページでは、自分が尊敬するクリエイターの考え方を引用しながら、自分自身の価値観や創作に対する姿勢を表現しています。",
          "また、このページを設けることによって、自分が大切にしたいことや将来目指したい姿を客観的に把握できるようにしています。ページを見返すたびに、理想と現在の自分との間にどのようなギャップがあるのかを確認できるため、自己認識や自分自身のあり方を見つめ直すためにも活用しています。"
        ],
      },
      {
        heading: "学習記録の記入",
        image: imgPortfolioLearnLog,
        body: ["私は読書が大好きで、本を読むなかで考えたことや、自分なりに思考を深めていく過程を表現したいと考え、学習記録のページを設けました。そこでは自分の考えや学んだことを文章としてまとめています。",
          "哲学等の人文系の知識や、社会に関する知識、デザイン論、プログラミングなど、ジャンルを限定せず、幅広いテーマを扱うことを心がけています。具体的には、哲学書や社会学の本を読んで考えたこと、作業の効率化に役立つと感じたツール、デザインの理想的なあり方などを記録しています。"
        ],
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
    year: "2026",
    listImage: imgIdea,
    detailImage: imgIdea,
    description:
      "哲学を身近にするためのワークショップ開催支援アプリ。参加者が気軽に哲学的な問いを持ち寄り、対話できる場を設計しました。",
    process: [
      {
        heading: "制作の背景",
        image: imgIdea,
        body: ["日々の生活に哲学的な視点を取り入れることで、内面を豊かにしてほしいという思いから制作しました。"],
      },
      {
        heading: "ペルソナの選定",
        image: imgWorkshopPersona,
        body: ["アプリを創るために、参加者のペルソナを設定しました。ターゲットは30歳の社会人男性で、趣味は小説や映画鑑賞です。「表面上のコミュニケーションに疲れてしまっている」、「コンテンツをメタ的な視点や俯瞰してみるのが好き」、「みんなが楽しんでいるものを上手に楽しめない」等の特徴を持っています。",
          "アプリを設計する際は、考えたペルソナがアプリを使用することを想定しながら必要な機能やコンセプト等を考えていきました。"
        ],
      },
      {
        heading: "サービスストーリーマップの作成",
        image: imgWorkshopStory,
        body: ["サービスストーリーマップを作成し、このアプリを通してユーザーがどのようなことを実現してほしいのかを考えました。最終的なゴールは日常的に抱えている内面的なモヤモヤを仲間とともに言語化し続けていくことによって、心が穏やかになり自分の内面を豊かにしていくことです。",
          "その最終的なゴールを実現するために、どんな機能が必要なを考え、このサービスを使用する際のユーザー体験を考え、サービスを設計していきました。"]
      },
      {
        heading: "アプリ制作",
        image: imgHell,
        body: ["本来のフローであれば、機能設計やコンセプト設計をすべきですが、AIでアプリを作ってみたいという思いを強く持っていたので、まずはClaudeCodeを使用して、簡単なワークショップのアプリ作ってみました。",
          "最初はAIが作った感が丸出しで機能も不足していたので、ペルソナがアプリを使う際にどんなことが必要になるのかを考え、このアプリの改善策を考え続けました。そして作成してほしい機能をClaude Codeを使用して、実装し続けていくことによって、徐々に利便性や完成度の高いアプリになっていきました。"]
      },
      {
        heading: "コンセプト設計",
        image: imgHell,
        body: ["ある程度アプリがものになった段階で、このアプリのコンセプトを決めました。対話型ワークショップであることを示し、参加者に対話することの有意義さを感じてほしかったので、サービス名は「TAIWA」という名前にしています。",
          "また対話には守るべきルールがあるため、そのルールを掲載し、参加者が安心して対話できる"
        ]
      },
      {
        heading: "機能設計",
        image: imgHell,
        body: ["サービスストーリーマップを作成し、このアプリを通してユーザーがどのようなことを実現してほしいのかを考えました。最終的なゴールは日常的に抱えている内面的なモヤモヤを仲間とともに言語化し続けていくことによって、心が穏やかになり自分の内面を豊かにしていくことです。",
          "その最終的なゴールを実現するために、どんな機能が必要なを考え、このサービスを使用する際のユーザー体験を考え、サービスを設計していきました。"]
      },
      {
        heading: "デザインシステムの作成",
        image: imgHell,
        body: ["デザインに一貫性を持たせるため、Figma MCPを活用し、Claudeを使ってデザインシステムを作成しました。これによりFigma上のデザインとコードの各要素の対応関係が明確になり、共通のデザイン要素を再利用しやすくなりました。",
          "デザインシステムを整備したことによって、Claudeに新しい機能の追加を依頼しても、既存のデザインとの一貫性を保った画面を作成できるようになりました。またデザインに微修正が必要な場合は、Figma上で修正したフレームをClaudeと連携させることで、その変更をコードに反映しやすい仕組みを構築しました。"
        ]
      },
      {
        heading: "コードのリファクタリング",
        image: imgHell,
        body: ["Claudeのコードレビュー用のサブエージェントを作成し、プログラミングスクールの講師にもコードを確認していただきながら、Claudeが生成したコードを継続的に改善できるようにしました。",
          "特にコンポーネント化できる部分は積極的に共通化し、処理を効率化できる箇所についても、Claudeにレビューを依頼して改善に取り組みました。またコードをただ生成するだけでなく、自分自身のコードの理解を深めるために、各ファイルの役割や処理の流れを把握することも意識しました。"
        ]
      },
      {
        heading: "このアプリをよりよくするために",
        image: imgHell,
        body: ["主催者は選抜形式にするのか？それとも参加者にレビューして貰うのか？等、このワークショップを安心できる場にするための品質保証の仕組みが備わっていません。",
          "利用者・主催者ともに安心してワークショップに参加してもらうためには、「利用者に危ない人はいないか？」や「この対話の場は怪しくないか？」等をきちんと確認しないといけないです。この確認の仕組みを考慮できていないので、この仕組みを考えていくことが、このアプリの改善点と考えています。"
        ]
      },
    ],
    color: cardColors.coral,
    accentColor: accentColors.coral,
  },
];

// Newest first: display order is id descending, regardless of order in workInputs.
export const works: Work[] = [...workInputs].sort((a, b) => b.id - a.id);
