import type { LearningRecordInput } from "@/data/learningRecords";

const record: LearningRecordInput = {
  id: 16,
  date: "2026年11月",
  category: "UI",
  title: "ユーザビリティ10原則とHIG①",
  description: "ニールセンのユーザビリティ10原則とAppleのHuman Interface Guidelinesを照らし合わせ、「システム状態の視認性」と「システムと現実世界の一致」について考えてみました。",
  content: [
    {
      type: "body",
      text: [
        "UIデザインを学ぶうえで、ユーザビリティに関する原則を理解することは大切です。その代表的なものの一つに、ヤコブ・ニールセンが提唱した「ユーザビリティ10原則」があります。これはユーザが使いやすいインターフェースを設計するための10個の指針で構成されており、現在でもUIの評価や改善に広く活用されています。",
      ],
    },
    {
      type: "link",
      href: "https://www.nngroup.com/articles/ten-usability-heuristics/",
      label: "10 Usability Heuristics for User Interface Design",
      note: "Nielsen Norman Group",
    },
    {
      type: "body",
      text: [
        "一方Appleが公開している「Human Interface Guidelines（以下、HIG）」にも、優れたユーザ体験を実現するためのさまざまな設計指針がまとめられています。今回はニールセンのユーザビリティ10原則とAppleのHIGを照らし合わせながら、それぞれの原則が具体的にどのようなUIとして表現されているのかを考えていきます。",
      ],
    },
    {
      type: "link",
      href: "https://developer.apple.com/jp/design/human-interface-guidelines/",
      label: "ヒューマンインターフェイスガイドライン",
      note: "Apple",
    },
    { type: "heading", text: "① システム状態の視認性" },
    {
      type: "body",
      text: [
        "ユーザが今、どのシステムのどの状態にいるのかを画面上で可視化することが重要です。例えば、特定のモードを選択していればそのモード中であることを明示し、OSのファイルのように階層構造になっている場合は、ユーザが今どの階層にいるかを画面上で示す（例：パスコントロールやパンくずリストなど）と親切です。",
        "また、ユーザがアクションを起こした際、その操作が受け付けられたことがすぐに分かると安心してサービスを利用できます。例えばフォーム送信後に「送信完了」の画面や通知が表示されないと、正しく送信できたかが分からず不安になってしまいます。",
        "それと同じように処理に時間がかかるプログラムを実行する際、進捗状況（インジケータ等）が見えないと、タスクが完了したのか実行中なのか判断がつきません。ユーザに安心感を持って操作してもらうために、現在の状態を常に画面上で示すことが大切です。",
      ],
    },
    { type: "subheading", text: "AppleのHuman Interface Guidelines" },
    {
      type: "body",
      text: [
        "AppleのHIGでは「明確なフィードバックを提供する」というデザイン原則を設けており、次のように説明されています。",
      ],
    },
    {
      type: "quote",
      text: "ユーザがアプリを使用しているときに何が起こっているかについて、明確な合図を提供します。コントロールが利用可能な場合には表示し、コンテンツが変化したときにはそれを示して、アラートの表示や選択肢の提示にはシステムのパターンを使用します。一貫したフィードバックを提供することで、ユーザは状況を常に把握し、自分で操作しているという感覚を持つことができます。",
      source: "デザインの原則 | Apple Developer Documentation",
      href: "https://developer.apple.com/jp/design/human-interface-guidelines/design-principles#Familiarity",
    },
    {
      type: "body",
      text: [
        "HIGには、進行状況インジケータやステータスバー、階層を示すパスコントロールなど、システムの状態を伝えるためのコンポーネントが豊富に用意されています。アプリの利便性を高めるには、ユーザに状態を逐一知らせる仕組みづくりを怠ってはいけません。",
      ],
    },
    { type: "heading", text: "② システムと現実世界の一致" },
    {
      type: "body",
      text: [
        "私たちは日々、さまざまな記号や概念の意味を触れながら生活しています。そして日々触れる概念や記号によって、私たちは様々なメンタルモデルを立てます。アプリ上のデザインは、その操作を日常で使われている記号やルールに合わせないといけません。",
        "アプリを使用するユーザは、使用するアイコンによってその意味を感覚的にイメージします。例えば、ゴミ箱アイコンは「データをゴミ箱に移動・削除する」、ホームアイコンは「ホーム画面に戻る」、歯車アイコンは「設定メニューを開く」といった予期（メンタルモデル）を抱きます。",
      ],
    },
    {
      type: "body",
      text: [
        "ユーザが日々の経験から培った予期と、実際のアプリの挙動を一致させることが利便性の向上につながります。そのためには、人々が言葉や記号を見てどのような動作を予測するのかを注意深く観察し、デザインに反映する必要があります。",
      ],
    },
    { type: "subheading", text: "AppleのHuman Interface Guidelines" },
    {
      type: "body",
      text: [
        "AppleのHIGでは「ユーザがすでに知っていることを基盤にする」というデザイン原則を設けており、次のように説明されています。",
      ],
    },
    {
      type: "quote",
      text: "ユーザがすでに理解しているコンセプトを利用することで、すぐに馴染んでもらうことができます。既存の物理的パターンとデジタル的パターンをベースに体験を組み立て、デザイン全体で一貫して適用します。",
      source: "デザインの原則 | Apple Developer Documentation",
      href: "https://developer.apple.com/jp/design/human-interface-guidelines/design-principles#Familiarity",
    },
    {
      type: "body",
      text: [
        "質の高いデザインを作るためには、人々が日常生活の中でどのような予測を行っているのか、どのような記号になじみがあるのかを深く観察し、それをデザインへと転用していく姿勢が不可欠です。",
  ],
    },
    { type: "heading", text: "結び" },
    {
      type: "body",
      text: [
        "今回は「①システム状態の視認性」と「②システムと現実世界の一致」についてまとめてみました。次回以降もユーザビリティ10原則とHuman Interface Guidelinesの比較を続けていきます。",
      ],
    },
    {
      type: "link",
      href: "/learning/17",
      label: "次回：ユーザビリティ10原則とHIG②",
      note: "「ユーザーの制御と自由」と「一貫性と標準」",
    },
  ],
};

export default record;
