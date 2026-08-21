export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend & Cloud",
    skills: ["Node.js", "Express", "Google Cloud", "Cloud SQL", "MySQL"],
  },
  {
    category: "Design",
    skills: ["Figma", "High-fidelity UI", "User persona"],
  },
  {
    category: "AI & Automation",
    skills: ["AI-native dev workflow", "Prompt Engineering", "n8n"],
  },
  {
    category: "Platform",
    skills: ["Shopify"],
  },
];