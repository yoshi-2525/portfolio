import type { Work } from "@/data/works";
import { cardColors, accentColors } from "@/styles/palette";
import imgPortfolioClip from "@/imports/images/works/portfolio/designClip.webp";
import imgPortfolioClaude from "@/imports/images/works/portfolio/claudeCode.webp";
import imgPortfolioCommitment from "@/imports/images/works/portfolio/commitment.webp";
import imgPortfolioDesignSystem from "@/imports/images/works/portfolio/designSystem.webp";
import imgPortfolioLearnLog from "@/imports/images/works/portfolio/learnLog.webp";
import imgPortfolioHomeList from "@/imports/images/works/portfolio/homeList.webp";
import imgPortfolioHomeDetail from "@/imports/images/works/portfolio/homeDetail.webp";
import imgTyping from "@/imports/images/typing.webp";
import imgPortfolioExhibition from "@/imports/images/works/portfolio/exhibition.webp";

const work: Work = {
  id: 1,
  title: "わたしのポートフォリオ",
  subtitle: "My Portfolio",
  category: "サイト制作",
  year: "2026",
  listImage: imgPortfolioHomeList,
  detailImage: imgPortfolioHomeDetail,
  githubUrl: "https://github.com/yoshi-2525/portfolio",
  listDescription:
    "わたしを表現するためのサイトを製作してみました。私の表現方法をじっくり考え、言葉をたくさん書きたかったため、大量の日本語が表示されても、苦にならないデザインを心がけました。",
  detailDescription: [
    { type: "heading", text: "アプリの内容" },
    { type: "body", text: ["デザインの練習と自分の表現力を高めるため、わたしという人間を体表現するためのサイトを制作しました。自分自身の言葉や思考を紡ぎ、そのままの温度感で受け取ってもらえる場所を目指しました。わたしの表現したいことがサイト上で表せるように、私の大切にしたい雰囲気をこのサイトで再現し、私の大切にしたい言葉をここに書き綴っています。"] },
    { type: "heading", text: "デザインのこだわり" },
    { type: "subheading", text: "やわらかな配色" },
    { type: "body", text: [
      "背景には温かみのあるベージュを使い、白い画面よりも目に優しく、長く文章を読んでいても疲れにくい雰囲気を作るようにしました。作品や記事のカードには青・赤・紫・緑などの淡い色を選び、それぞれに対応するアクセントカラーを添えることで、やわらかさを保ちながらも内容の違いがひと目でわかるようにしています。",
    ] },
    { type: "subheading", text: "タイトルの手書きフォント" },
    { type: "body", text: [
      "自分自身の考えを丁寧に書き留めているようなイメージを表現するため、タイトルには手書きフォントを取り入れました。言葉に作り手の思いが宿るような質感を目指し、複数の候補の中から、飾り気がなく誠実さを感じられる「ぴょすふぉんとふりぃ」を選んでいます。",
    ] },
    { type: "subheading", text: "デザインの一貫性" },
    { type: "body", text: [
      "サイト全体に統一感を持たせるため、色やフォント、ホバー時の動きなど、繰り返し使う要素はスタイルやコンポーネントとして登録し、どのページでも同じルールで表示されるようにしました。特にクリックできるカードは、カーソルを合わせると枠線がアクセントカラーに変わり、ふわりと浮き上がるため、どこを押せばよいかが自然と伝わるようにしています。",
    ] },
    { type: "subheading", text: "学習記事のカード" },
    { type: "body", text: [
      "一つひとつの学習記事を「自身の言葉で紡いだ作品」として見てもらいたいと考え、リスト形式ではなく独立したカードデザインを採用しました。エッセイを読むような感覚で気軽に触れてもらえるよう、一覧全体の美しさや視認性に気を配り、1ページにつき3×3のグリッド形式でゆとりを持って配置しています。",
    ] },
  ],
  process: [
    {
      heading: "制作の背景",
      image: imgTyping,
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
      image: imgPortfolioExhibition,
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
};

export default work;
