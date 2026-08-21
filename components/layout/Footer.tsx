import { GitFork, AtSign, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl border-t border-clay-200 py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-text">
            Dzaki Alqadrie
          </p>
          <p className="text-xs text-text-subtle">
            Frontend AI Engineer building AI-native products.
          </p>
        </div>

        <div className="flex items-center gap-2">
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
    </footer>
  );
}