export interface Work {
  id: string;
  title: string;
  description: string;
  /** 使用技術タグ */
  tags: string[];
  /** スクリーンショット（public/ 配下）。未設定時はプレースホルダ表示 */
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  /** 制作時期（例: "2026-04"） */
  period: string;
}

export const works: Work[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    description: "チーム向けタスク管理アプリ",
    tags: ["Next.js", "Azure"],
    period: "2026-04",
  },
  {
    id: "recipestock",
    title: "RecipeStock",
    description: "レシピを保存・検索できるアプリ",
    tags: ["React", "Supabase"],
    period: "2025-11",
  },
  {
    id: "devlog-cli",
    title: "DevLog CLI",
    description: "開発ログを記録する CLI ツール",
    tags: ["Node.js", "TypeScript"],
    period: "2025-06",
  },
];
