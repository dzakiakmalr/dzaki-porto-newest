import { ExternalLink, GitFork } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="font-display text-3xl font-bold text-text">
              Selected work
            </h2>
            <p className="max-w-xl text-text-muted">
              Each one is a small story — the problem, what I did, and what came
              of it. Langganin is featured; the others show range.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <article
                className={`flex h-full flex-col rounded-card clay-gradient p-6 shadow-clay transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-clay-hover ${
                  project.featured ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-text">
                    {project.title}
                  </h3>
                  <span className="whitespace-nowrap rounded-pill bg-surface px-2.5 py-1 text-xs font-semibold text-brand-600">
                    {project.tagline}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-text-muted">
                  <span className="font-semibold text-text">The problem.</span>{" "}
                  {project.problem}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  <span className="font-semibold text-text">What I did.</span>{" "}
                  {project.did}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text">
                  <span className="font-semibold text-text">Outcome.</span>{" "}
                  {project.outcome}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag.label} label={tag.label} color={tag.color} />
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-5">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-pill bg-brand-500 px-4 py-2 text-xs font-bold text-white shadow-clay transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:shadow-clay-hover focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-pill px-4 py-2 text-xs font-semibold text-text-muted transition-colors hover:bg-clay-100 hover:text-text focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
                    >
                      <GitFork size={14} />
                      Repo
                      Repo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}