import { Link, useLocation } from "react-router";

const NAV = [
  { label: "ホーム", to: "/" },
  { label: "作品集", to: "/works" },
  { label: "学習記録", to: "/learning" },
  { label: "こだわり", to: "/commitment" },
  { label: "将来の夢", to: "/dreams" },
  { label: "プロフィール", to: "/profile" },
];

export default function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b-2 border-[#e0d8d0] bg-page-bg">
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
            className={`font-['Zen_Maru_Gothic:Bold',sans-serif] text-[17.6px] tracking-[1.1px] px-3 py-3 hover:text-[#d57563] transition-colors ${
              pathname === to ? "text-[#d57563]" : "text-[#222]"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
