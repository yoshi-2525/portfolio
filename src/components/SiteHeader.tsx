import { useState } from "react";
import { Link, useLocation } from "react-router";
import { pageHeadings } from "@/data/pageHeadings";

const NAV = [
  { label: "ホーム", to: "/" },
  ...Object.values(pageHeadings).map(({ label, to }) => ({ label, to })),
];

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-8 py-4 border-b-2 border-border-gray bg-page-bg">
      <Link
        to="/"
        className="order-2 md:order-1 font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-2xl tracking-[1.76px]"
      >
        わたしのポートフォリオ
      </Link>

      {/* Desktop nav */}
      <nav className="order-3 hidden md:flex gap-1 items-center">
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

      {/* Mobile menu trigger */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        className="order-1 md:hidden flex flex-col gap-1.5 p-2"
        aria-label="メニューを開く"
        aria-expanded={isMenuOpen}
      >
        <span className="block w-6 h-0.5 bg-[#222]" />
        <span className="block w-6 h-0.5 bg-[#222]" />
        <span className="block w-6 h-0.5 bg-[#222]" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in drawer */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 max-w-[80vw] bg-page-bg border-r-2 border-border-gray z-50 flex flex-col gap-1 p-6 pt-8 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="self-start p-2 mb-4 text-2xl text-[#222]"
          aria-label="メニューを閉じる"
        >
          ×
        </button>
        {NAV.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            onClick={() => setIsMenuOpen(false)}
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
