import { Val } from "./Val";

export function FactsBar({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-1 border-y-[3px] border-ink md:grid-cols-4">
      {facts.map((f) => (
        <div
          key={f.label}
          className="border-b border-ink py-4 last:border-b-0 md:border-b-0 md:border-r md:px-4 md:first:pl-0 md:last:border-r-0"
        >
          <dt className="label">{f.label}</dt>
          <dd className="mt-1 font-semibold leading-snug">
            <Val>{f.value}</Val>
          </dd>
        </div>
      ))}
    </dl>
  );
}
