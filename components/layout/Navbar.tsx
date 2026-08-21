"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass-panel-strong mx-auto flex max-w-5xl items-center justify-between rounded-pill py-2 pl-3 pr-2">
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
          <Button variant="primary" href="#contact" size="md">
            Get In Touch
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Button
            variant="secondary"
            href="#contact"
            size="md"
            className="mr-1"
          >
            Contact
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
          </div>
        </div>
      )}
    </header>
  );
}