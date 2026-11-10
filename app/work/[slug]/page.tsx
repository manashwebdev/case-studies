import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { FactsBar } from "@/components/FactsBar";
import { Section } from "@/components/Section";
import { Val } from "@/components/Val";
import { getNextProject, getProject, projects, site } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.name} case study`;
  const description = `${p.summary} Case study by ${site.name}: the problem, what was built and the result.`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `/work/${p.slug}`,
      siteName: site.name,
      type: "article",
    },
    twitter: { card: "summary", title: `${title} | ${site.name}`, description },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = getNextProject(p.slug);

  return (
    <main id="main">
      <article className="wrap py-10 md:py-16">
        <Link
          href="/#work"
          className="inline-flex min-h-[44px] items-center font-mono text-sm font-medium underline underline-offset-4 hover:text-accent"
        >
          Back to work
        </Link>

        <h1 className="mt-6 break-words text-[clamp(2.5rem,11vw,8rem)] leading-[0.95]">{p.name}</h1>
        <p className="mt-6 max-w-[40ch] text-xl leading-snug md:text-2xl">{p.summary}</p>

        <div className="mt-10 md:mt-14">
          <FactsBar
            facts={[
              { label: "Role", value: p.role },
              { label: "Timeline", value: p.timeline },
              { label: "Stack", value: p.stack.join(", ") },
              { label: "Year", value: p.year },
            ]}
          />
        </div>

        <div className="mt-10 md:mt-14">
          <Section id="overview" title="Overview">
            <p><Val>{p.overview}</Val></p>
          </Section>
          <Section id="problem" title="The problem">
            <p><Val>{p.problem}</Val></p>
          </Section>
          <Section id="built" title="What I built">
            <p><Val>{p.built}</Val></p>
          </Section>
          <Section id="features" title="Key features">
            <ul className="grid gap-3">
              {p.features.map((f) => (
                <li key={f} className="border-b border-ink pb-3 last:border-b-0">
                  <Val>{f}</Val>
                </li>
              ))}
            </ul>
          </Section>
          <Section id="result" title="Result">
            <p><Val>{p.result}</Val></p>
          </Section>
          <Section id="improve" title="What I would improve next">
            <p><Val>{p.improve}</Val></p>
          </Section>

          {p.screenshots.length > 0 && (
            <Section id="screenshots" title="Screenshots">
              <div className="grid gap-6">
                {p.screenshots.map((s) => (
                  <Image
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    width={s.width}
                    height={s.height}
                    sizes="(min-width: 1120px) 700px, 100vw"
                    className="h-auto w-full border border-ink"
                  />
                ))}
              </div>
            </Section>
          )}
        </div>

        <div className="flex flex-wrap gap-4 border-t border-ink py-10">
          <Button href={p.live}>Live demo</Button>
          <Button href={p.github} variant="outline">
            GitHub
          </Button>
        </div>

        <section aria-labelledby="cta-h" className="border-t-[3px] border-ink py-12 md:py-16">
          <h2 id="cta-h" className="text-[clamp(2rem,6vw,4rem)] leading-[0.95]">
            Want something similar?
          </h2>
          <div className="mt-6">
            <Button href={`mailto:${site.email}`} variant="red">
              Contact me
            </Button>
          </div>
        </section>

        <nav aria-label="Next project" className="border-t border-ink pt-6">
          <span className="label">Next project</span>
          <Link
            href={`/work/${next.slug}`}
            className="mt-2 flex min-h-[44px] items-center text-3xl font-extrabold hover:text-accent md:text-5xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            {next.name}
          </Link>
        </nav>
      </article>
    </main>
  );
}
