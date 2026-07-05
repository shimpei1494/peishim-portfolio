# peishim-portfolio

Web エンジニア Peishim のポートフォリオサイト。Next.js 16（App Router）製。

詳しい仕様は [docs/portfolio-v2-spec.md](docs/portfolio-v2-spec.md) を参照してください。

## 技術スタック

- **フレームワーク**: Next.js 16（App Router / React Server Components）
- **言語**: TypeScript（strict）
- **スタイリング**: Tailwind CSS v4
- **UI コンポーネント**: shadcn/ui（コードコピー方式、プリミティブは Base UI）
- **アニメーション**: Motion
- **Lint / Format**: Oxlint + Oxfmt（[Vite+](https://www.npmjs.com/package/vite-plus) 経由）
- **ホスティング**: Vercel
- **コンテンツ**: リポジトリ内の型付き TS ファイル（`src/data/`）+ Zenn API 自動取得（Blog）

## セットアップ

依存関係のインストール・Lint・フォーマット・型チェックは [Vite+](https://www.npmjs.com/package/vite-plus)（`vp`）に統一しています。`next dev` / `next build` はそのまま使います。

```bash
vp install       # 依存関係のインストール
vp run dev       # 開発サーバー起動（next dev のラッパー）
vp check         # フォーマット + Lint + 型チェック
vp check --fix   # フォーマット差分の自動修正
```

pre-commit フックでステージ済みファイルに自動で `vp check --fix` が実行されます（`vp config` 済み）。

## 環境変数

`.env.example` を参照してください。いずれも未設定でも動作します（フォールバック値あり）。

| 変数名 | 用途 | 未設定時のフォールバック |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | OGP・sitemap・robots.txt の絶対URL生成 | `https://peishim-portfolio.vercel.app` |
| `ZENN_USERNAME` | Blog ページの Zenn 記事取得先ユーザー名 | `peishim` |

## ページ構成

```
/          Top
/about     プロフィール・経歴・スキル
/works     制作物一覧
/blog      Zenn 記事一覧（自動連携・ISR）
/hobby     趣味
```

## デプロイ

[Vercel](https://vercel.com/) にこのリポジトリを接続するだけでデプロイできます（追加設定不要）。環境変数を使う場合は Vercel のプロジェクト設定で上記の変数を設定してください。
