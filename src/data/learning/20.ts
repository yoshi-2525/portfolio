import type { LearningRecordInput } from "@/data/learningRecords";

const record: LearningRecordInput = {
  id: 20,
  date: "2026年11月",
  category: "UI",
  title: "ユーザビリティ10原則とHIG④",
  description: "ニールセンのユーザビリティ10原則とAppleのHuman Interface Guidelinesを照らし合わせ、「柔軟性と効率性の確保」と「シンプルで洗練されたデザイン」について考えてみました。",
  content: [
    {
      type: "body",
      text: [
        "今回もニールセンのユーザビリティ10原則とAppleのHIGを照らし合わせながら、「⑦ 柔軟性と効率性の確保」と「⑧ シンプルで洗練されたデザイン」の2つの原則について、具体的に考えていきます。",
      ],
    },
    {
      type: "link",
      href: "https://www.nngroup.com/articles/ten-usability-heuristics/",
      label: "10 Usability Heuristics for User Interface Design",
      note: "Nielsen Norman Group",
    },
    {
      type: "link",
      href: "https://developer.apple.com/jp/design/human-interface-guidelines/",
      label: "ヒューマンインターフェイスガイドライン",
      note: "Apple",
    },
    { type: "heading", text: "⑦ 柔軟性と効率性の確保" },
    {
      type: "body",
      text: [
        "アプリケーションを使うユーザーはアプリに慣れていない初心者から、毎日のように触る熟練者までさまざまです。その習熟度合いや利用環境に沿って、それぞれに適した操作方法を用意しなければなりません。特に日常的に使用する複雑なツールでは、キーボードショートカットを提供したり、コマンドや自動化によって操作を簡易的にしたりしないと、熟練者はフラストレーションを感じてしまいます。例えば、Excel、Figma、VS Codeなどは、一通りの操作がキーボード上で素早く行えるよう設計されています。",
        "アプリを使う人は多種多様であり、幅広いユーザーが利用することを想定しなければなりません。初心者に向けては適宜ヘルプやチュートリアル、補足を設け、熟練者には効率的なショートカットを提供する。このようにユーザー層の広さに応じた柔軟性が求められます。",
        "また、近年ではアクセシビリティの重要性がますます高まっています。年齢、身体的なハンディキャップ、利用するデバイスや環境に関わらず、すべての人が情報や操作にアクセスし、快適に利用できる配慮が不可欠です。",
      ],
    },
    { type: "subheading", text: "AppleのHuman Interface Guidelines" },
    {
      type: "body",
      text: [
        "AppleのHIGでもデザイン原則に柔軟性が掲げられており、次のように説明されています。",
      ],
    },
    {
      type: "quote",
      text: "ユーザがそれぞれ個性的であるように、ソフトウェアの利用方法もひとり一人異なります。デザインでこれを意識すればするほど、ユーザは気軽に使えるようになります。自分以外の経験にも目を向け、できるだけ多くのデバイス、操作の種類、および視点に対応するよう努めてください。",
      source: "デザインの原則 | Apple Developer Documentation",
      href: "https://developer.apple.com/jp/design/human-interface-guidelines/design-principles#Flexibility",
    },
    {
      type: "body",
      text: [
        "私たちが作るアプリは多様な人々が使うため、画一的な操作を押し付けるのではなく、それぞれの状況に合わせた選択肢を用意するデザインが求められます。",
      ],
    },
    { type: "heading", text: "⑧ シンプルで洗練されたデザイン" },
    {
      type: "body",
      text: [
        "画面の情報量が多すぎたり、色を多用しすぎたりしていると、ユーザーに不要な認知的負荷がかかり、その画面が何を示しているのかが分からなくなってしまいます。そのため画面に表示する情報量や使用する色は、できる限り削ぎ落とすべきです。",
        "一画面の中で「ユーザーに最も見てほしい情報（プライマリーな情報）」を明確にし、それを強調して表示すれば、ユーザーは迷うことなく何を見るべきかを理解できます。ページにあらゆる要素を詰め込むのではなく、十分な余白や適切な間隔（スペーシング）を有効に活用して、認知的負荷を高めない工夫が必要です。",
      ],
    },
    { type: "subheading", text: "AppleのHuman Interface Guidelines" },
    {
      type: "body",
      text: [
        "AppleのHIGでもデザイン原則に「シンプルさ（Simplicity）」があります。",
      ],
    },
    {
      type: "quote",
      text: "うまくデザインされた体験では、不要なものが排除され、すべての要素が適切に配置されています。インターフェイスが論理的に整理されていて、移動が容易であれば、より作業しやすくなります。",
      source: "デザインの原則 | Apple Developer Documentation",
      href: "https://developer.apple.com/jp/design/human-interface-guidelines/design-principles#Simplicity",
    },
    {
      type: "body",
      text: [
        "洗練されたアプリは、総じて非常にシンプルな印象を与えます。不要な装飾を削ぎ落とし本当に必要な情報のみを表示すること。アプリを洗練させるためには、何が重要で何が不要かを見極める目を養い、不要な要素を積極的に省いていくセンスが欠かせません。そしてこうして生まれた余白こそが、プロダクト全体の品質を高めてくれます。",
      ],
    },
    { type: "heading", text: "まとめ" },
    {
      type: "body",
      text: [
        "今回はユーザビリティ10原則の中から「⑦ 柔軟性と効率性の確保」と「⑧ シンプルで洗練されたデザイン」をまとめてみました。次回も引き続き、残りの原則をまとめていきます。",
      ],
    },
    {
      type: "link",
      href: "/learning/21",
      label: "次回：ユーザビリティ10原則とHIG⑤",
      note: "「エラー発見と回復のしやすさ」と「ヘルプとドキュメンテーション」",
    },
  ],
};

export default record;
