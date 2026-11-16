import type { Work } from "@/data/works";
import { cardColors, accentColors } from "@/styles/palette";
import imgWorkshopPersona from "@/imports/images/works/workshop/persona_man.webp";
import imgWorkshopStory from "@/imports/images/works/workshop/story.webp";
import imgWorkshopKeyList from "@/imports/images/works/workshop/TAIWA_43_key.webp";
import imgWorkshopKeyDetail from "@/imports/images/works/workshop/TAIWA_31_key.webp";
import imgWorkshopDesignSystem from "@/imports/images/works/workshop/designSystem.webp";
import imgWorkshopClaude from "@/imports/images/works/workshop/claudeCode.webp";
import imgWorkshopConcept from "@/imports/images/works/workshop/TAIWA_169_key.webp";
import imgWorkshopInfoArch from "@/imports/images/works/workshop/infoArch.webp";
import imgWorkshopCodeReview from "@/imports/images/works/workshop/codeReview.webp";
import imgWorkshopKaizen from "@/imports/images/works/workshop/kaizen.webp";
import imgWorkshopBackground from "@/imports/images/works/workshop/background.webp";

const work: Work = {
  id: 2,
  title: "対話型ワークショップ管理アプリ「TAIWA」",
  subtitle: "Workshop App",
  category: "アプリ開発",
  year: "2026",
  githubUrl: "https://github.com/yoshi-2525/workshop-app",
  listImage: imgWorkshopKeyList,
  detailImage: imgWorkshopKeyDetail,
  listDescription:
    "哲学を身近にするためのワークショップ開催支援アプリ。参加者が気軽に哲学的な問いを持ち寄り、対話できる場を設計しました。",
  detailDescription: [
    { type: "heading", text: "アプリにアクセス" },
    {
      type: "link",
      href: "https://taiwa-workshop.com/",
      label: "TAIWA",
      note: "TAIWA — 対話を通してモヤモヤを掬う。",
    },
    { type: "body", text: 
      ["参加者ログイン：sato@example.com/password123\n主催者ログイン：shiraishi@example.com/password123"] },
    { type: "heading", text: "コンセプト" },
    { type: "body", text: 
      ["会社でやりたくもない仕事を終えた帰り道。行かなければ雰囲気を感じて、付き合いで行った飲み会の帰り道。友達との食事会で、同じ時間を過ごさなくなったことですれ違いを感じた夜。",
      "「本当にみんなこの生活に楽しんでいるのかな？」とみんなが楽しめている社交の場に取り残されている感覚を抱きます。「自分が本当に送りたい人生はこれなのか？」そういった事を自分に問い、自分の描きたかった人生を送れていないようで、月明かりの夜空に少しだけ心に違和感を感じます。",
      "明日も日常が進んでいくだけなので、この違和感を掬ってくれる人はいません。社会はこの違和感を無視する方が円滑に回るので、この違和感は押し殺した方がいいのでしょう。ただこの違和感を押し殺すと、自分が自分でなくなるようで何とも無視できず、周りから取り残されているような気がしてしまいます。",
      "「TAIWA」というアプリは、心の中で様々な違和感やモヤモヤを抱える人たちが、対話でその違和感を言語化あうことによって、参加者同士で心のモヤモヤを掬いあう場を提供します。"] },
    { type: "heading", text: "デザインのこだわり" },
    { type: "subheading", text: "紙の質感" },
    { type: "body", text: 
      ["コンセプトである『月明かりに灯る夜空』とアプリの世界観の親和性を高めるため、背景は夜空を思わせる深みのある色にし、アクセントカラーには月や星をイメージできる色を選定しました。さらにワークショップのカードの右下に折り目をつけたり、紙の表面に細かい凹凸の陰影を足すことによって、手触りのある紙のような質感を表現しています。"] },
    { type: "subheading", text: "情報設計" },
    { type: "body", text: 
      ["ペルソナのユースケースを想定し、ワークショップ詳細画面からの遷移を意識して情報設計や画面設計を行いました。主催者ページへの移動や関連ワークショップの検索、問い合わせといったアクションがスムーズに行えるよう動線を整えています。他にも関連するページのリンクを同ページに設置することによって、ユーザの操作性や回遊性を高める工夫をしました。"]},
    { type: "subheading", text: "対話のルール" },
    { type: "body", text:
      [ "『対話の場』というアプリのコンセプトを表現するため、ヘッダーには対話のルールを提示しました。またトップ画面に椅子を並べたイラストを掲載することで、オープンに話し合える空気感や、対話を重んじる姿勢を直感的に感じられるな表現を心がけました。",] },
    { type: "subheading", text: "管理者側の設定" },
    { type: "body", text:
      [ "管理者側の設定では、公開後の料金変更や定員削減など、参加者に不利益の生じる内容の編集をあらかじめ制限しています。これにより参加者の承諾なくワークショップの内容が変更されるのを防ぎ、安心して利用できる状態を担保しています。また管理者向け機能として、アプリ上で参加者の出欠状況を一覧・管理できる仕様にし、当日の運営の負担を軽減しています"] },      
  ],
  process: [
    {
      heading: "制作の背景",
      image: imgWorkshopBackground,
      body: ["私は哲学の本を読むことが好きで、『哲学的な対話を深められるアプリを作りたい』という思いから制作を開始しました。またオブジェクト指向UI（OOUI）の学習を兼ねて、ユーザーの目的の中心となる『ワークショップ』をキーオブジェクトにして、タスク中心ではなくオブジェクトを中心に画面や動線を組み立てていきました。"],
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
      image: imgWorkshopClaude,
      body: ["本来のフローであれば、機能設計やコンセプト設計をすべきですが、AIでアプリを作ってみたいという思いを強く持っていたので、まずはClaudeCodeを使用して、簡単なワークショップのアプリ作ってみました。",
        "最初はAIが作った感が丸出しで機能も不足していたので、ペルソナがアプリを使う際にどんなことが必要になるのかを考え、このアプリの改善策を考え続けました。そして作成してほしい機能をClaude Codeを使用して、実装し続けていくことによって、徐々に利便性や完成度の高いアプリになっていきました。"]
    },
    {
      heading: "コンセプト設計",
      image: imgWorkshopConcept,
      body: ["ある程度アプリの形が整った段階で、サービスのコンセプトを明確にしました。対話型ワークショップであることを伝えるとともに、参加者に対話することの有意義さを感じてもらいたいと考え、サービス名を「TAIWA」としました。",
        "また、夜の帰り道に抱える心のモヤモヤを優しく掬い上げる場にしたいという思いから、夜空をモチーフにデザインしました。さらに、参加者が安心して対話に臨めるよう、対話のルールを掲載するなど、安心して参加できる環境づくりを意識して、デザインや情報設計を工夫しました。"
      ]
    },
    {
      heading: "情報設計",
      image: imgWorkshopInfoArch,
      body: ["まずワークショップを中心となるオブジェクトとして捉え、そこから情報設計を行い、必要な機能を組み立てていきました。ワークショップには定員や参加費など、さまざまな情報が紐づいています。ワークショップの各項目について、設定できる値の上限・下限や編集の可否などを、実際の利用シーンを想定しながら検討しました。",
        "本来であれば事前に設計図を作成したうえで開発を進めるべきですが、今回はアプリを実際に作りながら、利用者がどのように操作するのかを常にイメージし、頭の中で情報設計を進めました。その過程で必要だと判断した機能を順次追加し、利用者の視点を意識しながらアプリを形にしていきました。"
      ]
    },
    {
      heading: "デザインシステムの作成",
      image: imgWorkshopDesignSystem,
      body: ["デザインに一貫性を持たせるため、Figma MCPを活用し、Claudeを使ってデザインシステムを作成しました。これによりFigma上のデザインとコードの各要素の対応関係が明確になり、共通のデザイン要素を再利用しやすくなりました。",
        "デザインシステムを整備したことによって、Claudeに新しい機能の追加を依頼しても、既存のデザインとの一貫性を保った画面を作成できるようになりました。またデザインに微修正が必要な場合は、Figma上で修正したフレームをClaudeと連携させることで、その変更をコードに反映しやすい仕組みを構築しました。"
      ]
    },
    {
      heading: "コードのリファクタリング",
      image: imgWorkshopCodeReview,
      body: ["Claudeのコードレビュー用のサブエージェントを作成し、プログラミングスクールの講師にもコードを確認していただきながら、Claudeが生成したコードを継続的に改善できるようにしました。",
        "特にコンポーネント化できる部分は積極的に共通化し、処理を効率化できる箇所についても、Claudeにレビューを依頼して改善に取り組みました。またコードをただ生成するだけでなく、自分自身のコードの理解を深めるために、各ファイルの役割や処理の流れを把握することも意識しました。"
      ]
    },
    {
      heading: "このアプリをよりよくするために",
      image: imgWorkshopKaizen,
      body: ["主催者は選抜形式にするのか？それとも参加者にレビューして貰うのか？等、このワークショップを安心できる場にするための品質保証の仕組みが備わっていません。",
        "利用者・主催者ともに安心してワークショップに参加してもらうためには、「利用者に危ない人はいないか？」や「この対話の場は怪しくないか？」等をきちんと確認しないといけないです。この確認の仕組みを考慮できていないので、この仕組みを考えていくことが、このアプリの改善点と考えています。"
      ]
    },
  ],
  color: cardColors.coral,
  accentColor: accentColors.coral,
};

export default work;
