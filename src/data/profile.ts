export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  /** 表示名（ヒーローの巨大タイポ） */
  alias: string;
  /** 肩書き */
  title: string;
  /** キャッチコピー */
  catchphrase: string;
  /** 自己紹介（ヒーロー下の短文） */
  lead: string;
  /** About ページの自己紹介文（段落ごと） */
  bio: string[];
  /** プロフィール写真のパス（public/ 配下） */
  avatar: string;
  /** ヒーローに浮かぶステッカーのラベル */
  heroStickers: string[];
  socials: SocialLink[];
}

export const profile: Profile = {
  alias: "PEISHIM",
  title: "Web エンジニア",
  catchphrase: "つくって、ためして、発信する。",
  lead: "Web エンジニア。TypeScript と Python でアプリを作ったり、Zenn で学びを発信しています。",
  bio: [
    "石川県出身、東北大学大学院（工学系）修了。大手鉄道会社の総合職を経て、働きながらプログラミングを学び Web エンジニアに転身しました。",
    "現在は大手企業向けの社内生成 AI アプリケーション開発に立ち上げ初期から参画し、チームリーダーを務めています。要件定義から設計・開発まで一貫して担当し、フロントエンド（TypeScript / React）・バックエンド（Python / FastAPI）・インフラ（Azure）を横断して開発しています。",
    "RAG や AI エージェントなど生成 AI まわりの実務知見が強みです。社内 AI 勉強会の主催やコミュニティでの LT 登壇、Zenn での記事執筆など、学んだことのアウトプットも継続しています。",
  ],
  avatar: "/images/profile.jpg",
  heroStickers: ["TypeScript", "Python", "AI Agent"],
  socials: [
    { label: "GitHub", url: "https://github.com/shimpei1494" },
    { label: "Zenn", url: "https://zenn.dev/peishim" },
    { label: "X", url: "https://x.com/peishim1494" },
  ],
};
