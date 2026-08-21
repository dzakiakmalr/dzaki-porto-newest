import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkles } from "lucide-react";

const stats = [
  { value: "3+", label: "Real products shipped" },
  { value: "2026", label: "Informatics grad, UNS" },
  { value: "AI", label: "Native workflow" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 pb-20 pt-32 lg:grid-cols-2 lg:py-36">
        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-clay-100 px-3 py-1 text-xs font-semibold text-brand-600">
              <Sparkles size={14} />
              Currently interning at FlyRank AI
            </span>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-6xl">
                Dzaki Alqadrie
              </h1>
              <p className="font-display text-2xl font-semibold text-brand-500 sm:text-3xl">
                Frontend AI Engineer
              </p>
            </div>

            <p className="max-w-md text-lg leading-relaxed text-text-muted">
              I build AI-native products from idea to live — not just demos. The
              one I&apos;m shipping now is{" "}
              <a
                href="https://langganin.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-500 underline decoration-brand-500/40 underline-offset-4 hover:decoration-brand-500"
              >
                Langganin
              </a>
              , a subscription tracker built for Indonesia.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg" href="#contact">
                Get In Touch
              </Button>
              <Button variant="secondary" size="lg" href="#projects">
                See My Work
              </Button>
            </div>

            <div className="mt-2 flex flex-wrap gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold tabular-nums text-text">
                    {s.value}
                  </span>
                  <span className="text-xs text-text-subtle">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
            <div className="rounded-card clay-gradient shadow-clay p-6">
              <div className="mb-4">
                <p className="font-display text-lg font-bold text-text">
                  Langganin
                </p>
                <p className="text-xs text-text-subtle">
                  Subscription tracker · built for Indonesia
                </p>
              </div>

              <div className="rounded-[14px] bg-surface p-4 shadow-md">
                <div className="mb-3 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-text-subtle">Monthly total</p>
                    <p className="font-display text-2xl font-bold tabular-nums text-text">
                      Rp 696.000
                    </p>
                  </div>
                  <span className="rounded-pill bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                    Active
                  </span>
                </div>
                <div className="flex gap-2">
                  {["Netflix", "Spotify", "ChatGPT"].map((n) => (
                    <span
                      key={n}
                      className="rounded-[8px] bg-clay-100 px-2 py-1 text-[11px] font-semibold text-text-muted"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-3 text-xs text-text-subtle">
                Recurring · reminders · multi-currency
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}