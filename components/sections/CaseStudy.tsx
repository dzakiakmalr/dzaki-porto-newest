import { ExternalLink, GitFork, Sparkles, Quote, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { HeroPreview } from "@/components/sections/HeroPreview";

const TAGS = [
  { label: "Next.js", color: "#3D6FCC", logo: "/nextjs.svg" },
  { label: "TypeScript", color: "#2F8F5E", logo: "/typescript.svg" },
  { label: "Tailwind", color: "#C77B1E", logo: "/tailwindcss.svg" },
  { label: "AI-assisted", color: "#E26B43", logo: "/ai-assisted.svg" },
];

const EMAIL = "dzakirabbania@gmail.com";

export function CaseStudy() {
  return (
    <section id="case-study" className="scroll-mt-24 pb-12 pt-4 sm:pt-8 lg:pt-12">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
              <Sparkles size={14} />
              Featured case study
            </span>
            <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
                Langganin started with a problem I actually had
              </h2>
            <p className="text-text-muted">
              This is the live product behind my whole claim. It&apos;s open
              source, publicly available, and the kind of tool I&apos;d want
              myself.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="rounded-card clay-gradient p-6 shadow-clay sm:p-7">
                <div className="mb-3 flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <Badge
                      key={tag.label}
                      label={tag.label}
                      color={tag.color}
                      logo={tag.logo}
                    />
                  ))}
                </div>

                <div className="mb-3 flex items-start gap-3">
                  <Quote size={20} className="mt-0.5 shrink-0 text-brand-500" />
                  <p className="font-display text-lg font-semibold text-text">
                    A subscription tracker for when a free trial runs out
                    without warning.
                  </p>
                </div>

                <div className="space-y-4 text-sm leading-relaxed">
                  <p className="text-text-muted">
                    <span className="font-semibold text-text">The problem.</span>{" "}
                    As a student, I couldn&apos;t afford the shock of a surprise
                    charge the day an AI trial ended. There was nowhere to see
                    all my subscriptions, when they renewed, or what they cost
                    each month, let alone with local payment methods.
                  </p>
                  <p className="text-text-muted">
                    <span className="font-semibold text-text">What I did.</span>{" "}
                    Built the frontend end to end as a Frontend AI Engineer
                    intern at FlyRank AI. The spending overview, the renewal
                    calendar, the tracking, and the &quot;Ask AI&quot; helper, all
                    on Next.js, TypeScript, and Tailwind.
                  </p>
                  <p className="text-text">
                    <span className="font-semibold text-text">Outcome.</span>{" "}
                    A live product you can open right now. Rupiah and
                    multi-currency, Indonesian and English, with reminders built
                    in.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://langganin.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-pill bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-clay transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:bg-brand-600 hover:shadow-clay-hover focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
                >
                  <ExternalLink size={16} />
                  Open Langganin
                </a>
                <a
                  href="https://github.com/kulinerkita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-pill px-5 py-3 text-sm font-semibold text-text-muted transition-colors hover:bg-clay-100 hover:text-text focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
                >
                  <GitFork size={16} />
                  View repo
                </a>
              </div>

              <p className="rounded-card bg-surface p-4 text-xs leading-relaxed text-text-muted shadow-md">
                <span className="font-semibold text-text">Honest note:</span>{" "}
                the landing page is live and open for anyone to see. The backend
                is still in progress, so I&apos;m showing the design and the build
                process here, not user numbers I don&apos;t have yet.
              </p>
            </div>

            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-24">
                <HeroPreview />
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600"
          >
            Want the full story, the build decisions, and the trade-offs I
            made along the way? Then email me.
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}