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
    imageUrl: "/images/works/poketype-dojo-og-image.png",
    demoUrl: "https://poketype-dojo.netlify.app",
    githubUrl: "https://github.com/shimpei1494/poketype-dojo",
    period: "2026-06",
  },
];
