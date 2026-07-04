export interface CareerEntry {
  id: string;
  /** 期間（例: { from: "2023-04", to: "2025-03" }。to 省略で「現在」） */
  period: { from: string; to?: string };
  organization: string;
  role: string;
  description: string;
  highlights?: string[];
}

export const career: CareerEntry[] = [
  {
    id: "current",
    period: { from: "2023-04" },
    organization: "Web 開発企業",
    role: "Web エンジニア",
    description: "TypeScript / Next.js を中心とした Web アプリケーションの開発に従事。",
    highlights: ["社内 AI 勉強会の運営", "Zenn での技術発信"],
  },
  {
    id: "previous",
    period: { from: "2021-04", to: "2023-03" },
    organization: "前職",
    role: "エンジニア",
    description: "受託開発プロジェクトにてフロントエンド開発を担当。",
  },
];
