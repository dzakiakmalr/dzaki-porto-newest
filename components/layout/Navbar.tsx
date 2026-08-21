"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const EMAIL = "dzakirabbania@gmail.com";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass-nav mx-auto flex max-w-5xl items-center justify-between rounded-pill py-2 pl-3 pr-2">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-pill p-1.5 focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
        >
          <span className="clay-icon flex h-8 w-8 items-center justify-center rounded-full font-display text-sm font-bold text-brand-500">
            D
          </span>
          <span className="font-display text-sm font-semibold text-text">
            Dzaki Alqadrie
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-pill px-4 py-2 text-sm font-semibold text-text-muted transition-colors hover:bg-clay-100 hover:text-text focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="primary" href={`mailto:${EMAIL}`} size="md">
            Email me
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Button
            variant="primary"
            href={`mailto:${EMAIL}`}
            size="md"
            className="mr-1"
          >
            Email me
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-pill text-text-muted transition-colors hover:bg-clay-100 hover:text-text focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-panel-solid mx-auto mt-2 max-w-5xl rounded-card p-2 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-pill px-4 py-3 text-sm font-semibold text-text transition-colors hover:bg-clay-100 focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 rounded-pill bg-brand-500 px-4 py-3 text-center text-sm font-bold text-white shadow-clay transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:shadow-clay-hover"
            >
              Email me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}