import Link from "next/link";
import type { ReactNode } from "react";
import { Val, isPlaceholder } from "./Val";

type Props = {
  href: string;
  variant?: "black" | "red" | "outline";
  children: ReactNode;
};

export function Button({ href, variant = "black", children }: Props) {
  // Full class names must appear in the source so Tailwind does not remove them.
  const styles = {
    black: "btn btn-black",
    red: "btn btn-red",
    outline: "btn btn-outline",
  };
  const cls = styles[variant];

  if (isPlaceholder(href)) {
    return (
      <span className="btn btn-ph">
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
