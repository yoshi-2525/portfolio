import BackLink from "@/components/BackLink";

type SiteFooterProps = {
  backLink?: { to: string; label: string };
};

export default function SiteFooter({ backLink }: SiteFooterProps) {
  return (
    <footer
      className={`flex items-center px-10 py-8 mt-16 border-t border-border-gray ${
        backLink ? "justify-between" : "justify-end"
      }`}
    >
      {backLink && <BackLink to={backLink.to}>{backLink.label}</BackLink>}
      <p className="font-['Zen_Maru_Gothic:Bold',sans-serif] text-[#222] text-xs tracking-[1.1px]">
        © 2026 Yoshitaka Inui. All Right Reserved.
      </p>
    </footer>
  );
}
