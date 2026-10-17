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
    id: "risk-kurabe",
    title: "TOKYOりすくらべ",
    description:
      "2026年の東京オープンデータハッカソン応募時に制作した災害リスク比較アプリ。公開データをもとに、関東1都6県の洪水浸水リスクと東京都の地震に関する地域危険度を最大3地点で比較。地図表示やAIによる説明にも対応。",
    tags: ["TanStack Start", "React", "TypeScript", "MapLibre GL", "Cloudflare"],
    imageUrl: "/images/works/risk-kurabe-og-image.jpg",
    demoUrl: "https://risk-kurabe.peishim.workers.dev",
    githubUrl: "https://github.com/shimpei1494/risk-kurabe",
    period: "2026",
  },
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
