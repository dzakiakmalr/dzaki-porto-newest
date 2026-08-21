export interface Experience {
  role: string;
  company: string;
  location?: string;
  duration: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    role: "Front-end AI Engineering Intern",
    company: "FlyRank AI",
    duration: "June 2026 — Present",
    points: [
      "Intern at FlyRank AI focused on Front-end AI Engineering, building AI-native products end to end.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Merpati Solo Bakery",
    location: "Surakarta, Central Java, Indonesia",
    duration: "September 2025 — May 2026",
    points: [
      "Built a digital management system and Admin Panel for product management, order tracking, and customer engagement.",
      "Crafted user personas and high-fidelity designs from scratch in Figma.",
      "Leveraged AI-native development workflows to prototype, optimize, and scale with Next.js, React, and TypeScript.",
    ],
  },
  {
    role: "Teaching Assistant, Computer Networks",
    company: "Universitas Sebelas Maret",
    location: "Surakarta, Central Java, Indonesia",
    duration: "March 2025 — June 2025",
    points: [
      "Facilitated hands-on learning as a Computer Network Practicum Assistant using Cisco's ITN 7 curriculum.",
      "Prepared lab materials, guided students, and aligned labs with course objectives.",
    ],
  },
  {
    role: "Cloud Computing Cohort",
    company: "Bangkit Academy",
    location: "Google, Tokopedia, Gojek & Traveloka",
    duration: "September 2024 — December 2024",
    points: [
      "Developed cloud infrastructure and server-side logic for 'KulinerKita', a culinary recommendation mobile app.",
      "Used Google Cloud (Cloud Run, App Engine), built REST APIs with Node.js/Express, and integrated ML models.",
    ],
  },
];