import type { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section
      aria-labelledby={`${id}-h`}
      className="grid gap-6 border-t border-ink py-10 md:grid-cols-[1fr_2fr] md:gap-12 md:py-14"
    >
      <h2 id={`${id}-h`} className="text-2xl leading-none md:text-3xl">
        {title}
      </h2>
      <div className="max-w-[65ch] text-lg leading-relaxed">{children}</div>
    </section>
  );
}
