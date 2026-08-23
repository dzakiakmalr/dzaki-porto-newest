"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Mail } from "lucide-react";

export function ContactCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const data = new FormData(form);
    const plain = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Object.entries(plain).map(([k, v]) => [k, String(v)])
        ).toString(),
      });

      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                name="bot-field"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

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

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 rounded-pill bg-brand-500 px-7 py-3 text-sm font-bold text-white shadow-clay transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:bg-brand-600 hover:shadow-clay-hover active:shadow-pressed active:translate-y-0 focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "sent" && (
                <p className="text-center text-sm font-semibold text-success">
                  Thanks, I&apos;ll be in touch.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm font-semibold text-danger">
                  Something went wrong. Please try emailing me directly at
                  dzakirabbania@gmail.com.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}