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
      { name: "TypeScript", level: 4, note: "得意" },
      { name: "React", level: 4, note: "得意" },
      { name: "Next.js", level: 2 },
      { name: "Tanstack Start", level: 2 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Python", level: 4, note: "得意" },
      { name: "FastAPI", level: 4, note: "得意" },
      { name: "Ruby on Rails", level: 1 },
      { name: "Java / Spring Boot", level: 1 },
    ],
  },
  {
    id: "cloud_infra",
    title: "Cloud / Infra",
    skills: [
      { name: "Azure", level: 4, note: "得意" },
      { name: "AWS", level: 1 },
      { name: "Vercel", level: 1 },
      { name: "Cloudflare", level: 1 },
    ],
  },
  {
    id: "ai",
    title: "AI",
    skills: [
      { name: "AI エージェント開発", level: 4, note: "得意" },
      { name: "RAG", level: 4 },
      { name: "Codex", level: 3 },
      { name: "GitHub Copilot", level: 3 },
      { name: "Claude Code", level: 2 },
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
