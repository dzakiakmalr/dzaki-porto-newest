import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-text">Skills</h2>
            <p className="max-w-xl text-text-muted">
              Honest about levels — the things I use most in real builds are
              frontend, backend/cloud, and AI-assisted workflow.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="h-full rounded-card bg-surface p-6 shadow-md">
                <h3 className="mb-4 font-display text-lg font-bold text-brand-600">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-pill bg-clay-100 px-3 py-1.5 text-xs font-semibold text-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}