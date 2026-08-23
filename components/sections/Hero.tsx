import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { HeroPreview } from "@/components/sections/HeroPreview";
import { GlassName } from "@/components/sections/GlassName";

const EMAIL = "dzakirabbania@gmail.com";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 pb-16 pt-32 lg:grid-cols-2 lg:pb-20 lg:pt-36">
        <Reveal>
          <div className="flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-clay-100 px-3 py-1 text-xs font-semibold text-brand-600">
              <Sparkles size={14} />
              Front-end AI Engineer · currently at FlyRank AI
            </span>

            <div className="flex flex-col gap-2">
              <GlassName />
              <p className="font-display text-2xl font-semibold text-brand-500 sm:text-3xl">
                I build products people actually use.
              </p>
            </div>

            <p className="max-w-md text-justify text-lg leading-relaxed text-text-muted">
              Langganin started from a problem I lived through. As a student, I
              can&apos;t afford a surprise charge when a free AI trial runs out, so
              I built something to keep track of subscriptions. It&apos;s live now,{" "}
              <a
                href="https://langganin.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-500 underline decoration-brand-500/40 underline-offset-4 hover:decoration-brand-500"
              >
                and you can open it here
              </a>
              . Find a real problem, then make the simplest fix. That&apos;s how I
              work.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg" href={`mailto:${EMAIL}`}>
                Email me
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="https://langganin.vercel.app"
              >
                Open Langganin
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-6">
            <div className="clay-icon flex h-40 w-40 items-center justify-center overflow-hidden rounded-full shadow-clay ring-2 ring-surface sm:h-44 sm:w-44">
              <Image
                src="/profilephoto.JPG"
                alt="Dzaki Alqadrie"
                width={176}
                height={176}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="w-full">
              <HeroPreview />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}