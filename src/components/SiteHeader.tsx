import { Link } from "react-router";

const NAV = [
  { label: "ホーム", to: "/" },
  { label: "作品", to: "/works" },
  { label: "学習記録", to: "/learning" },
  { label: "こだわり", to: "/commitment" },
  { label: "将来の夢", to: "/dreams" },
  { label: "プロフィール", to: "/profile" },
];

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-10 py-6 border-b border-[#e0d8d0] bg-[#faf2eb]">
      <Link
        to="/"
        className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-2xl tracking-[1.76px]"
      >
        わたしのポートフォリオ
      </Link>
      <nav className="flex gap-1 items-center">
        {NAV.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[17.6px] tracking-[1.1px] px-3 py-3 text-[#222] hover:text-[#d57563] transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
