import { ExternalLink, GitFork } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  const supporting = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="font-display text-3xl font-bold text-text">
              More work
            </h2>
            <p className="max-w-xl text-justify text-text-muted">
              Two more real projects to show range, client work and cloud
              infrastructure.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          {supporting.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <article className="flex h-full flex-col gap-4 rounded-card clay-gradient p-6 shadow-clay transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-clay-hover sm:p-7 lg:flex-row">
                <div className="flex flex-1 flex-col">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-text">
                      {project.title}
                    </h3>
                    <span className="whitespace-nowrap rounded-pill bg-surface px-2.5 py-1 text-xs font-semibold text-brand-600">
                      {project.tagline}
                    </span>
                  </div>

                  <p className="text-justify text-sm leading-relaxed text-text-muted">
                    <span className="font-semibold text-text">Problem.</span>{" "}
                    {project.problem}
                  </p>
                  <p className="mt-2 text-justify text-sm leading-relaxed text-text-muted">
                    <span className="font-semibold text-text">What I did.</span>{" "}
                    {project.did}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag.label}
                        label={tag.label}
                        color={tag.color}
                        logo={tag.logo}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 flex-row items-center gap-3 lg:flex-col lg:items-start lg:justify-center">
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