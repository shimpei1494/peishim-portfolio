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
  avatar: "/images/profile.jpg",
  heroStickers: ["TypeScript", "Python", "AI Agent"],
  socials: [
    { label: "GitHub", url: "https://github.com/shimpei1494" },
    { label: "Zenn", url: "https://zenn.dev/peishim" },
    { label: "X", url: "https://x.com/peishim1494" },
  ],
};
