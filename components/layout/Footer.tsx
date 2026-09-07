import { Mail, FileDown } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

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

        <div className="flex items-center gap-2.5">
          <a
            href="/CV_Dzaki.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
            className="inline-flex h-9 items-center gap-1.5 rounded-pill bg-[#C62816] px-4 text-xs font-bold text-white shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:bg-[#A81F10] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#C62816]/40 focus-visible:outline-none"
          >
            <FileDown size={16} />
            Download CV
          </a>
          {[
            {
              href: "https://github.com/dzakiakmalr",
              label: "GitHub",
              Icon: GithubIcon,
            },
            {
              href: "https://www.linkedin.com/in/alqadrie28/",
              label: "LinkedIn",
              Icon: LinkedinIcon,
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

      <p className="mt-3 text-center text-[11px] text-text-subtle">
        © {new Date().getFullYear()} Dzaki Alqadrie
      </p>
    </footer>
  );
}
