import Link from "next/link";
import type { Project } from "@/content/projects";
import { Val } from "./Val";

export function CaseRow({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const cols = [
    { label: "Problem", text: project.problem },
    { label: "Built", text: project.built },
    { label: "Result", text: project.result },
  ];
  return (
    <li>
      <Link
        href={`/work/${project.slug}`}
        className="group grid gap-6 py-8 md:grid-cols-[1.1fr_1fr_1fr_1fr] md:gap-8 md:py-10"
      >
        <div>
          <span className="label !text-accent">{num}</span>
          <h3 className="mt-2 text-3xl leading-none group-hover:text-accent md:text-4xl">
            {project.name}
          </h3>
        </div>
        {cols.map((c) => (
          <div key={c.label}>
            <span className="label">{c.label}</span>
            <p className="mt-2 leading-snug">
              <Val>{c.text}</Val>
            </p>
          </div>
        ))}
      </Link>
    </li>
  );
}
