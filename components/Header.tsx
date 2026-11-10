import Link from "next/link";
import { site } from "@/content/projects";

const linkCls = "inline-flex min-h-[44px] items-center font-mono text-sm font-medium uppercase hover:text-accent";

export function Header() {
  return (
    <header className="border-b-[3px] border-ink">
      <div className="wrap flex min-h-[64px] items-center justify-between gap-4">
        <Link href="/" className={linkCls}>
          {site.name}
        </Link>
        <nav aria-label="Main" className="flex gap-6">
          <Link href="/#work" className={linkCls}>
            Work
          </Link>
          <Link href="/#contact" className={linkCls}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
