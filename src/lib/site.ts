import type { Metadata } from "next";

/**
 * サイトの本番URL。
 * Vercel の初期ドメインが確定するまでの仮値として peishim-portfolio.vercel.app を
 * フォールバックにしている。独自ドメイン等が決まったら NEXT_PUBLIC_SITE_URL を設定する。
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://peishim-portfolio.vercel.app";

export const SITE_NAME = "peishim.dev";

/**
 * ページ単位の metadata を openGraph / twitter にも反映して生成する。
 * Next.js のメタデータは openGraph 等がネストごと親と浅くマージされるため、
 * 各ページで明示しないと OGP 上のタイトル・説明がルートの値のままになってしまう。
 */
export function buildMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}
