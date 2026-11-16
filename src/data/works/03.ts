import type { Work } from "@/data/works";
import { cardColors, accentColors } from "@/styles/palette";
// 仮の画像。画像ができたら src/imports/images/works/dashboard/ に置き、下の import を差し替える
import imgPlaceholder from "@/imports/1920WLight/10fd8431ae6d9c2d06134d8fb03827958358aaad.webp";
import imgDashboardTimeline from "@/imports/images/works/dashboard/timeline.webp";
import imgDashboardCalendar from "@/imports/images/works/dashboard/calendar.webp";
import imgDashboardLoad from "@/imports/images/works/dashboard/load.webp";
import imgDashboardList from "@/imports/images/works/dashboard/list.webp";
import imgDashboardPersona from "@/imports/images/works/dashboard/persona.png";
import imgDashboardCustomerJourney from "@/imports/images/works/dashboard/customerjourney.png";

const work: Work = {
  id: 3,
  title: "問い合わせダッシュボード",
  subtitle: "Inquiry Dashboard",
  category: "アプリ開発",
  year: "2026",
  listImage: imgPlaceholder,
  detailImage: imgPlaceholder,
  // githubUrl: "https://github.com/yoshi-2525/",
  listDescription: "（作品一覧のカードに表示する短い紹介文）",
  detailDescription: [
    { type: "heading", text: "アプリを作成したきっかけ" },
    { type: "body", 
      text: ["私は仕事で問い合わせ対応を行っているのですが、使用しているソフトが全体を管理する画面が備わっておらず、問い合わせに対応するメンバーがどのような状況なのかを把握するのが難しい状態でした。そこで私のUI/UXの学習経験を積むためにも、自分なりに問い合わせの全量をすぐに把握できるダッシュボードを作成することにしました。",
      ]},
    { type: "heading", text: "タイムライン" },
    { type: "image", image: imgDashboardTimeline, wide: true },
    { type: "body",
      text: ["問い合わせのステータス遷移や、コメント・返信の履歴を時系列で可視化する画面を設計・実装しました。対応が長期化している案件やボトルネックとなっている箇所、問い合わせの完了時期を一画面で直感的に把握できるようになっています。",
      ]},
    { type: "subheading", text: "画面遷移なしでの詳細を確認" },
    { type: "body",
      text: ["タイムライン上のコメント・返信アイコンにカーソルを合わせるだけで、メッセージ内容をポップアップ表示しています。これにより詳細ページへ移動する手間を省き、やり取りを一つの画面でスムーズに確認できるようにしています。",
      ]},
    { type: "subheading", text: "時間軸の視認性向上" },
    { type: "body",
      text: ["縦スクロール時も日付ヘッダーを上部に固定（スティッキー表示）し、ページの下部でもどの時点のやり取りかを照らし合わせられるようにしました。また土日・祝日を色分けすることで、対応が長期化している原因が「営業日ベースで遅れているのか、休日をまたいだためか」をすぐに判別できるようになっています。",
      ]},
    { type: "subheading", text: "柔軟なフィルタリングと表示切替" },
    { type: "body",
      text: ["担当者やステータスで絞り込む機能を用意しているため、メンバー個人の抱える問い合わせの状況やチーム全体の対応状況をタイムライン上で即座に把握できます。また週表示に切り替えることで、中長期的な視点から全体の動向を俯瞰することも可能です。",
      ]},
    { type: "heading", text: "カレンダー" },
    { type: "image", image: imgDashboardCalendar, wide: true },
    { type: "body",
      text: ["新規問い合わせの発生やステータス変更などのイベントが「いつ・何件起きたのか」を可視化するため、カレンダー形式で件数を表示する画面を設計・実装しました。日付ごとのイベント発生数を一目で把握できます。",
      ]},
    { type: "subheading", text: "日付のクリックで詳細画面が右に表示" },
    { type: "body",
      text: ["カレンダーの日付をクリックすると、その日に発生したイベントの詳細が画面右側に表示されます。気になった日付を選択するだけですぐに詳細を確認できるため、当日何が起きたのかを素早く把握できます。",
      ]},
    { type: "heading", text: "負荷状況" },
    { type: "image", image: imgDashboardLoad, wide: true },
    { type: "body",
      text: ["メンバー別の対応件数を一覧化することで、「誰に負荷が集中しているか」「対応に偏りがないか」を一目で判断できるようにしました。さらに、各項目をクリックすると該当者が担当する問い合わせ一覧へ直接遷移する設計を取り入れ、問い合わせ全体の状況把握からメンバー個別の確認までをシームレスに行えるようにしています。",
      ]},
    { type: "heading", text: "問い合わせ一覧" },
    { type: "image", image: imgDashboardList, wide: true },
    { type: "body",
      text: ["新規問い合わせの発生やステータス変更などのイベントが「いつ・何件起きたのか」を可視化するため、カレンダー形式で件数を表示する画面を設計・実装しました。日付ごとのイベント発生数を一目で把握できます。",
      ]},      
  ],
  process: [
    {
      heading: "ペルソナ",
      image: imgDashboardPersona,
      body: ["まず本サービスのターゲットとなる企業やユーザー像の定義から着手しました。「問い合わせの全体像を可視化できるダッシュボードを作りたい」という構想をがあったため、BtoB SaaS企業のカスタマーサービスマネージャーをペルソナに設定しています。このペルソナは「メンバーごとの負荷状況をリアルタイムに把握できていない」という課題を抱えており、その結果、新規問い合わせを誰にアサインすべきかを判断することに時間がかかっています。"],
    },
    {
      heading: "カスタマージャーニーマップ",
      image: imgDashboardCustomerJourney,
      body: ["次にマネージャーの問い合わせ管理業務における一連の体験を可視化するため、仮説ベースでカスタマージャニーマップを作成しました。自分なりに業務を想定して整理した結果、新規問い合わせを受けた時に「メンバーの負荷状況を踏まえて適切にアサインしたい」と考えているものの、誰がどのような対応状況にあるかを瞬時に把握できないという課題が浮かび上がりました。また現在滞留している問い合わせやその原因についても、すぐに確認できる手段がなく管理に手間取っている点も課題として設定しています。"],
    },
    {
      heading: "画面設計",
      image: imgDashboardCustomerJourney,
      body: ["これらの仮説課題に対し、2つのアプローチでUIを設計しました。まずメンバーごとの負荷状況を直感的に把握できるよう、各自の担当件数をグラフで可視化したダッシュボードを設計しました。さらに滞留している問い合わせの原因を素早く特定するため、ステータス変更やコメントの履歴を時系列で表示するタイムラインも設計し、個々の問い合わせの全体的な流れを視覚的に追えるようにしています。なおこれら2つの画面はClaudeと連携しながらベースを作成し、ある程度完成したらClaude Codeで実装しています。"],
    },
    {
      heading: "継続的な改善",
      image: imgDashboardCustomerJourney,
      body: ["実装したプロトタイプを実際に操作しながら、使い勝手に違和感を持った箇所はその都度改善を重ね、アプリの操作性を高めました。具体的には画面遷移すべき箇所へ適切なリンクを設置したほか、関連し合う項目同士を近づけ、関係のない項目とは適度な余白で距離を離すことで、情報のまとまりを明確にしています。また私自身の業務経験から「担当者やステータスで絞り込んで検索したい」というニーズが高いと判断し、問い合わせ一覧にフィルタ機能を追加しました。さらにタイムラインは時系列の連続性を保ったまま閲覧できるよう、横スクロールで日付を直感的に移動できるデザインを採用しています。"],
    },    
  ],
  color: cardColors.purple,
  accentColor: accentColors.purple,
};

export default work;
