export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  /** 習熟度（1: 触れたことがある 〜 5: 得意） */
  level: SkillLevel;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "TypeScript", level: 4 },
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", level: 3 },
      { name: "Ruby on Rails", level: 3 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud (Azure)",
    skills: [
      { name: "Azure App Service", level: 3 },
      { name: "Azure Functions", level: 3 },
    ],
  },
  {
    id: "ai-tools",
    title: "AI・ツール",
    skills: [
      { name: "OpenAI API", level: 3 },
      { name: "Claude Code", level: 4 },
    ],
  },
];

/** Top のマーキーに流すスキル一覧（デザイン準拠の並び） */
export const marqueeSkills: string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Azure",
  "Node.js",
  "Tailwind CSS",
  "Motion",
  "OpenAI API",
];
