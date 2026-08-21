import { Reveal } from "@/components/ui/Reveal";
import { MapPin, GraduationCap, Briefcase, BadgeCheck } from "lucide-react";

const FACTS = [
  {
    Icon: MapPin,
    text: "From Pontianak, West Kalimantan. Based in Surakarta, Central Java.",
  },
  {
    Icon: GraduationCap,
    text: "Informatics, Universitas Sebelas Maret. Class of 2026.",
  },
  {
    Icon: Briefcase,
    text: "Front-end AI Engineering intern at FlyRank AI. Since June 2026.",
  },
];

const KEY_SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "AI-assisted development",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="rounded-card bg-surface p-8 shadow-md sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="mb-3 font-display text-3xl font-bold text-text">
                  Who I am
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-text-muted">
                  I build AI-native products that get used. Langganin grew out
                  of a fear I had as a student, of falling behind on a free
                  trial and getting charged without warning. So my way of
                  working is simple. Find a real problem, then make the
                  simplest thing that solves it.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {FACTS.map(({ Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-start gap-2 text-sm text-text-muted"
                  >
                    <Icon size={16} className="mt-0.5 shrink-0 text-brand-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-subtle">
                  Tools I work with most
                </p>
                <div className="flex flex-wrap gap-2">
                  {KEY_SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-pill bg-clay-100 px-3 py-1.5 text-xs font-semibold text-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="flex items-center gap-2 border-t border-clay-200 pt-4 text-xs text-text-subtle">
                <BadgeCheck size={14} className="text-brand-500" />
                Open to frontend roles. An email is the fastest way to reach me.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}