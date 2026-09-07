"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Reveal } from "@/components/ui/Reveal";
import { Mail } from "lucide-react";

const FORMSPREE_ID = "mjyvapkb";

export function ContactCTA() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="glass-panel rounded-card p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-3 max-w-md text-justify text-text-muted">
              Tell me what you&apos;re building and who you need. The quickest way
              to reach me is email, or you can leave a message below.
            </p>

            <a
              href="mailto:dzakirabbania@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-pill bg-brand-500 px-8 py-3 text-sm font-bold text-white shadow-clay transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:bg-brand-600 hover:shadow-clay-hover active:shadow-pressed active:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
            >
              <Mail size={16} />
              Email me at dzakirabbania@gmail.com
            </a>

            {state.succeeded ? (
              <p className="mx-auto mt-8 max-w-md rounded-card bg-surface p-6 text-center text-sm font-semibold text-success shadow-sm">
                Thanks, I&apos;ll be in touch. Talk soon.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left"
              >
                <label className="flex flex-col gap-1 text-sm font-semibold text-text">
                  Name
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-pill border border-transparent bg-surface-soft px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:border-brand-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
                  />
                </label>

                <label className="flex flex-col gap-1 text-sm font-semibold text-text">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-pill border border-transparent bg-surface-soft px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:border-brand-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
                  />
                </label>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-xs font-medium text-danger"
                />

                <label className="flex flex-col gap-1 text-sm font-semibold text-text">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="What are you building?"
                    className="resize-none rounded-card border border-transparent bg-surface-soft px-4 py-3 text-sm text-text placeholder:text-text-subtle focus:border-brand-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
                  />
                </label>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-xs font-medium text-danger"
                />

                {state.errors && (
                  <p className="text-center text-sm font-semibold text-danger">
                    Something went wrong. Please email me directly at
                    dzakirabbania@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="mt-1 rounded-pill bg-brand-500 px-7 py-3 text-sm font-bold text-white shadow-clay transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:bg-brand-600 hover:shadow-clay-hover active:shadow-pressed active:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none disabled:opacity-60"
                >
                  {state.submitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
