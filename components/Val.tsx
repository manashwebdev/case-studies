import type { ReactNode } from "react";

export function isPlaceholder(value: string) {
  return /^\[[^\]]+\]$/.test(value.trim());
}

// Renders text and shows any [BRACKETED] part as visible placeholder text.
export function Val({ children }: { children: string }): ReactNode {
  const parts = children.split(/(\[[^\]]+\])/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        /^\[[^\]]+\]$/.test(part) ? (
          <span key={i} className="ph">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
