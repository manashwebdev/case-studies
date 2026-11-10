import Link from "next/link";
import type { ReactNode } from "react";
import { Val, isPlaceholder } from "./Val";

type Props = {
  href: string;
  variant?: "black" | "red" | "outline";
  children: ReactNode;
};

export function Button({ href, variant = "black", children }: Props) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center px-6 py-3 font-mono text-sm font-medium";
  const styles = {
    black: "bg-ink text-white hover:bg-accent",
    red: "bg-accent text-white hover:bg-ink",
    outline: "border-2 border-ink bg-white text-ink hover:bg-ink hover:text-white",
  };
  const cls = `${base} ${styles[variant]}`;

  if (isPlaceholder(href)) {
    return (
      <span className={`${base} border border-dashed border-accent bg-white text-ink`}>
        {children}&nbsp;<Val>{href}</Val>
      </span>
    );
  }
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  if (href.startsWith("http")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
