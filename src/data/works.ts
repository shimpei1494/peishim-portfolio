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
    id: "poketype-dojo",
    title: "PokéType Dojo",
    description:
      "ポケモンのタイプ相性を楽しく学べる学習アプリ。相性チェッカー・クイズ・全1025匹対応の図鑑に加え、あいまいな質問からポケモンの候補を提示する「AIポケモン相談」機能も搭載。",
    tags: ["TanStack Start", "React", "TypeScript", "AI"],
    demoUrl: "https://poketype-dojo.netlify.app",
    period: "2026-06",
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
