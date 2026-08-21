import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-text">
              Experience
            </h2>
            <p className="max-w-xl text-text-muted">
              Where I&apos;ve shipped real things, taught, and built infrastructure.
            </p>
          </div>
        </Reveal>

        <div className="relative pl-6">
          <div className="absolute left-1.5 top-0 h-full w-px border-l-2 border-dashed border-clay-200" />

          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05}>
                <div className="relative rounded-card bg-surface p-6 shadow-md">
                  <span className="absolute -left-6 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500" />
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-text">
                      {exp.role}
                    </h3>
                    <span className="rounded-pill bg-clay-100 px-3 py-1 text-xs font-semibold tabular-nums text-text-muted">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="mb-3 text-sm font-semibold text-brand-600">
                    {exp.company}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>
                  {exp.points.map((point) => (
                    <p
                      key={point}
                      className="mb-1.5 text-sm leading-relaxed text-text-muted"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}