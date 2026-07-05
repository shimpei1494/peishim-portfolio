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
    id: "ses-ai",
    period: { from: "2023-06" },
    organization: "SES 企業",
    role: "Web エンジニア / チームリーダー",
    description:
      "大手企業向けの社内生成 AI アプリケーション開発に立ち上げ初期から参画。チャット・画像生成・RAG・ドキュメント自動生成などの機能を持つ AI 基盤を、顧客との要件調整から設計・開発まで一貫して担当。フロントエンド（TypeScript / React）・バックエンド（Python / FastAPI）・インフラ（Azure）を横断し、5名チームのリーダーとしてメンバー育成やコードレビュー、Linter / Formatter 導入などの品質改善も主導。参画当初は Java / Spring Boot によるリビルド案件も経験。",
    highlights: [
      "生成 AI アプリ開発",
      "RAG 精度改善",
      "Azure インフラ設計",
      "Cosmos DB 設計",
      "チームリーダー（5名）",
    ],
  },
  {
    id: "in-house-service",
    period: { from: "2022-09", to: "2023-05" },
    organization: "自社サービス企業",
    role: "Web エンジニア",
    description:
      "食関連の自社サービスを運営する事業会社で、Ruby on Rails によるサービスの改善・保守・運用を担当。新サービスの立ち上げでは要件調整と環境構築（TypeScript / Next.js + Rails）をリード。",
    highlights: ["Ruby on Rails", "Next.js", "新サービス立ち上げ"],
  },
  {
    id: "railway",
    period: { from: "2019-04", to: "2022-08" },
    organization: "大手鉄道会社",
    role: "総合職",
    description:
      "新卒で入社し、車両メンテナンスなど現場の業務を幅広く経験。実業務のかたわらローコードツールで社内アプリを作成し、現場へのヒアリングを重ねて調書の電子化などの業務改善を実現。働きながらプログラミングを学び、Web エンジニアへ転身。",
    highlights: ["ローコードでの業務改善"],
  },
];
