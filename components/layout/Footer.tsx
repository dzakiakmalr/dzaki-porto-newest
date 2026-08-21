import { GitFork, AtSign, Mail, FileDown, BadgeCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl border-t border-clay-200 py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-text">
            Dzaki Alqadrie
          </p>
          <p className="text-xs text-text-subtle">
            Frontend AI Engineer building products people use.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/CV_Dzaki.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
            className="flex h-9 items-center gap-1.5 rounded-pill bg-clay-100 px-3 text-xs font-semibold text-text-muted transition-colors hover:bg-clay-200 hover:text-text focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
          >
            <FileDown size={16} />
            CV
          </a>
          {[
            {
              href: "https://github.com/kulinerkita",
              label: "GitHub",
              Icon: GitFork,
            },
            {
              href: "https://www.linkedin.com/in/alqadrie28/",
              label: "LinkedIn",
              Icon: AtSign,
            },
            { href: `mailto:dzakirabbania@gmail.com`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-clay-100 hover:text-text focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-text-subtle">
          <BadgeCheck size={14} className="text-brand-500" />
          FlyRank AI Fluency Internship
        </span>
      </div>

      <p className="mt-3 text-center text-[11px] text-text-subtle">
        © {new Date().getFullYear()} Dzaki Alqadrie
      </p>
    </footer>
  );
}