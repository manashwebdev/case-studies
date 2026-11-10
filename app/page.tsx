import { Button } from "@/components/Button";
import { CaseRow } from "@/components/CaseRow";
import { Val, isPlaceholder } from "@/components/Val";
import { projects, site } from "@/content/projects";

export default function Home() {
  const mail = `mailto:${site.email}`;
  return (
    <main id="main">
      <section className="wrap grid gap-10 py-14 md:grid-cols-[7fr_5fr] md:items-end md:gap-12 md:py-24">
        <h1 className="text-[clamp(3rem,10vw,7.5rem)] leading-[0.95]">
          Case studies<span className="text-accent">.</span>
        </h1>
        <div className="grid gap-6">
          <p className="max-w-[34ch] text-lg leading-snug md:text-xl">
            Full stack developer. React, Next.js, Node.js. Each project: the problem, what I built, the result.
          </p>
          <div>
            <Button href={mail}>Contact me</Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-h" className="wrap grid gap-6 pb-14 md:grid-cols-[1fr_2fr] md:gap-12 md:pb-20">
        <h2 id="about-h" className="text-2xl leading-none md:text-3xl">
          About
        </h2>
        <div className="grid max-w-[65ch] gap-4 text-lg leading-relaxed">
          {site.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </section>

      <section id="work" aria-labelledby="work-h" className="wrap">
        <h2 id="work-h" className="sr-only">
          Work
        </h2>
        <ul className="divide-y divide-ink border-y-[3px] border-ink">
          {projects.map((p, i) => (
            <CaseRow key={p.slug} project={p} index={i} />
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          <Val>{site.proof}</Val>
        </p>
      </section>

      <section id="contact" aria-labelledby="contact-h" className="wrap py-16 md:py-24">
        <h2 id="contact-h" className="text-[clamp(2.25rem,7vw,5rem)] leading-[0.95]">
          Have an MVP to build?
        </h2>
        <div className="mt-8">
          <Button href={mail} variant="red">
            {site.email}
          </Button>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6">
          {site.socials.map((s) => (
            <li key={s.label}>
              {isPlaceholder(s.href) ? (
                <span className="inline-flex min-h-[44px] items-center font-mono text-sm font-medium">
                  {s.label}&nbsp;<Val>{s.href}</Val>
                </span>
              ) : (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center font-mono text-sm font-medium underline underline-offset-4 hover:text-accent"
                >
                  {s.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
