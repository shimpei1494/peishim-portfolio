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
      { name: "TypeScript", level: 5, note: "得意言語" },
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 3 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Python", level: 5, note: "得意言語" },
      { name: "FastAPI", level: 4 },
      { name: "Ruby on Rails", level: 3 },
      { name: "Java / Spring Boot", level: 2 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud (Azure)",
    skills: [
      { name: "Azure OpenAI", level: 4 },
      { name: "Cosmos DB", level: 4 },
      { name: "App Service / Functions", level: 4 },
      { name: "AI Search", level: 3 },
    ],
  },
  {
    id: "ai",
    title: "AI",
    skills: [
      { name: "RAG", level: 4 },
      { name: "AI エージェント開発", level: 4 },
      { name: "Claude Code", level: 4 },
      { name: "GitHub Copilot", level: 4 },
    ],
  },
];

/** Top のマーキーに流すスキル一覧（デザイン準拠の並び） */
export const marqueeSkills: string[] = [
  "Next.js",
  "Tanstack Start",
  "React",
  "FastAPI",
  "Azure",
  "AI Agent",
];
