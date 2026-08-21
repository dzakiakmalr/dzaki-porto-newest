import { Reveal } from "@/components/ui/Reveal";
import { MapPin, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="rounded-card bg-surface p-8 shadow-md sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr,1.4fr]">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-3xl font-bold text-text">
                  About me
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <MapPin size={16} className="text-brand-500" />
                    Pontianak, Kalimantan Barat
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <GraduationCap size={16} className="text-brand-500" />
                    Informatics, Universitas Sebelas Maret
                  </div>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-clay-100 px-3 py-1 text-xs font-semibold text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    Currently interning at FlyRank AI
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-text-muted">
                <p>
                  I&apos;m an Informatics student (graduating 2026) who builds
                  AI-native products from idea to live. Right now that means
                  shipping{" "}
                  <span className="font-semibold text-text">Langganin</span>{" "}
                  as a Frontend AI Engineer intern at FlyRank AI, and previously
                  building a real Admin Panel for Merpati Solo Bakery and a
                  cloud/ML capstone with Bangkit Academy.
                </p>
                <p>
                  My belief: technology should not only work well, it should
                  feel effortless. I use AI as a working partner through
                  design, code, and deploy — but I stay in the loop, making the
                  decisions and owning the result.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}