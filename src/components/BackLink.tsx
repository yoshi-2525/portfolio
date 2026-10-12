import type { ReactNode } from "react";
import { Link } from "react-router";

type BackLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

export default function BackLink({ to, children, className = "" }: BackLinkProps) {
  return (
    <Link
      to={to}
      className={`self-start inline-flex items-center gap-2 font-maru font-bold text-accent-coral text-base tracking-[1px] hover:opacity-70 transition-opacity ${className}`}
    >
      ← {children}
    </Link>
  );
}
