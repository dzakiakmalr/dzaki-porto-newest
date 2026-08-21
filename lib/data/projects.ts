export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  did: string;
  outcome: string;
  differentNext: string;
  tags: { label: string; color: string; logo?: string }[];
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
      "People in Indonesia keep getting hit by surprise charges from subscriptions and trials they forgot to cancel. There was no single place to see every active subscription, its renewal date, and its monthly cost, especially with local payment methods.",
    did:
      "I built the frontend of Langganin as a Frontend AI Engineer intern at FlyRank AI. The spending dashboard, the renewal calendar, the subscription tracking, and the 'Ask AI' assistant, using an AI-assisted workflow on Next.js, TypeScript, and Tailwind.",
    outcome:
      "Shipped a live product (langganin.vercel.app) with Rupiah and multi-currency support, Indonesian and English localization, and reminders via email, WhatsApp, and Google Calendar.",
    differentNext:
      "Log proper user metrics first so we could put a number on how it performs, instead of relying on anecdotes.",
    tags: [
      { label: "Next.js", color: "#3D6FCC", logo: "/nextjs.svg" },
      { label: "TypeScript", color: "#2F8F5E", logo: "/typescript.svg" },
      { label: "Tailwind", color: "#C77B1E", logo: "/tailwindcss.svg" },
      { label: "AI-assisted", color: "#E26B43", logo: "/ai-assisted.svg" },
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
      "Merpati Solo Bakery needed a digital system to manage products, track orders, and engage customers. Before this, it was all done by hand and scattered across places.",
    did:
      "I designed the user personas and the high-fidelity UI from scratch in Figma, then built the frontend with Next.js, React, and TypeScript, using an AI-assisted workflow to prototype and scale quickly without cutting corners.",
    outcome:
      "Shipped a working admin panel and shortened the time to get from idea to a working product, while keeping the code clean and the experience smooth.",
    differentNext:
      "Capture before/after metrics so the impact has concrete numbers.",
    tags: [
      { label: "Next.js", color: "#3D6FCC", logo: "/nextjs.svg" },
      { label: "React", color: "#C77B1E", logo: "/react.svg" },
      { label: "TypeScript", color: "#2F8F5E", logo: "/typescript.svg" },
      { label: "Figma", color: "#E26B43", logo: "/figma.svg" },
    ],
  },
  {
    slug: "kulinerkita",
    title: "KulinerKita",
    tagline: "Personalized food recommendation app for Surakarta.",
    problem:
      "Tourists and locals in Surakarta wanted food recommendations that felt personal, not just a generic list, while also supporting the local culinary businesses.",
    did:
      "I built the cloud side and the server logic for this Bangkit capstone. A serverless app on Google Cloud with Cloud Run and App Engine, REST APIs in Node.js and Express, a Cloud SQL database, and a machine learning model for real-time suggestions.",
    outcome:
      "Finished the capstone mobile app and shared the code openly on GitHub.",
    differentNext:
      "Spend more time on the ML evaluation and data quality upfront.",
    tags: [
      { label: "Google Cloud", color: "#3D6FCC", logo: "/googlecloud.svg" },
      { label: "Node.js", color: "#2F8F5E", logo: "/nodedotjs.svg" },
      { label: "Express", color: "#C77B1E", logo: "/express.svg" },
      { label: "MySQL", color: "#E26B43", logo: "/mysql.svg" },
    ],
    repoUrl: "https://github.com/kulinerkita",
  },
];