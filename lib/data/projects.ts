export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  did: string;
  outcome: string;
  differentNext: string;
  tags: { label: string; color: string }[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "langganin",
    title: "Langganin",
    tagline: "Subscription & trial tracker, built for Indonesia.",
    problem:
      "People (especially in Indonesia) keep getting surprise charges from subscriptions and trials they forgot to cancel — there was no single place to see all active subscriptions, renewal dates, and total monthly spend, especially supporting local payment methods.",
    did:
      "Built the frontend of Langganin as Frontend AI Engineer intern at FlyRank AI — the spending dashboard, renewal calendar, subscription tracking, and the 'Ask AI' assistant — with an AI-assisted development workflow on Next.js + TypeScript + Tailwind.",
    outcome:
      "Shipped a live product (langganin.vercel.app) with Rupiah + multi-currency support, Bahasa Indonesia/English localization, and reminders via Email, WhatsApp, and Google Calendar.",
    differentNext:
      "Log proper user metrics first so we could put a number on how it performs, instead of relying on anecdotes.",
    tags: [
      { label: "Next.js", color: "#3D6FCC" },
      { label: "TypeScript", color: "#2F8F5E" },
      { label: "Tailwind", color: "#C77B1E" },
      { label: "AI-assisted", color: "#E26B43" },
    ],
    demoUrl: "https://langganin.vercel.app",
    repoUrl: "https://github.com/kulinerkita",
    featured: true,
  },
  {
    slug: "merpati-solo-bakery",
    title: "Merpati Solo Bakery Admin Panel",
    tagline: "Digital management system for a bakery.",
    problem:
      "Merpati Solo Bakery needed a digital system to manage products, track orders, and engage customers — previously done manually and not centralized.",
    did:
      "Independently crafted user personas and high-fidelity designs from scratch in Figma, then built the frontend architecture with Next.js, React, and TypeScript using an AI-native development workflow to prototype and scale quickly.",
    outcome:
      "Drastically shortened the development cycle while keeping clean code and a seamless user experience.",
    differentNext:
      "Capture before/after metrics so the impact has concrete numbers.",
    tags: [
      { label: "Next.js", color: "#3D6FCC" },
      { label: "React", color: "#C77B1E" },
      { label: "TypeScript", color: "#2F8F5E" },
      { label: "Figma", color: "#E26B43" },
    ],
  },
  {
    slug: "kulinerkita",
    title: "KulinerKita",
    tagline: "Personalized food recommendation app for Surakarta.",
    problem:
      "Tourists and locals in Surakarta needed personalized food recommendations — not a generic list — while supporting the local culinary MSME ecosystem.",
    did:
      "Built the cloud infrastructure and server-side logic (Bangkit Academy capstone): deployed a serverless modular app on Google Cloud (Cloud Run + App Engine), built REST APIs with Node.js/Express, managed Cloud SQL (MySQL), and integrated machine learning for real-time personalized suggestions.",
    outcome:
      "Finished the capstone mobile app, open-sourced on GitHub.",
    differentNext:
      "Spend more time on the ML evaluation and data quality upfront.",
    tags: [
      { label: "Google Cloud", color: "#3D6FCC" },
      { label: "Node.js", color: "#2F8F5E" },
      { label: "Express", color: "#C77B1E" },
      { label: "MySQL", color: "#E26B43" },
    ],
    repoUrl: "https://github.com/kulinerkita",
  },
];