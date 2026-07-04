# ポートフォリオサイト v2 仕様書

## 1. 概要

- 旧サイト（https://pei-portfolio.vercel.app）を廃止し、ゼロから新規構築する
- 目的: 「優れたエンジニアであること」が一目で伝わる、わかりやすく・アニメーションで面白みのあるポートフォリオ
- **デザイン（ビジュアル・トンマナ）は別途 Claude Design で作成するため、本仕様書の対象外**。本書は情報設計・機能・技術仕様を定義する
- 言語: 日本語のみ（i18n 不要）

## 2. 技術スタック

| 領域 | 採用技術 |
|---|---|
| フレームワーク | Next.js 16（App Router / React Server Components） |
| 言語 | TypeScript（strict） |
| スタイリング | Tailwind CSS v4 |
| UI コンポーネント | shadcn/ui（必要な部品のみコピーして導入。プリミティブは Radix UI ではなく Base UI `@base-ui/react`、スタイルは `base-nova`、ベースカラーは `neutral`） |
| アニメーション | Motion（旧 Framer Motion）+ Magic UI 等の Tailwind/Motion 製アニメーションコンポーネント集 |
| Lint / Format | Oxlint + Oxfmt |
| タスクランナー / ツールチェーン | Vite+（`vp`）※活用方針は 2.1 参照 |
| ホスティング | Vercel |
| CMS | **使用しない**（コンテンツはリポジトリ内データ + Zenn API 自動取得） |
| AI（Phase 3） | OpenAI API（モデル: `gpt-5.4-mini`） |

### 2.1 Vite+（`vp`）活用方針

Next.js とは併用に注意点があるため、以下の範囲で活用する。

- ビルド・開発サーバーは **`next dev` / `next build` をそのまま使う**（Vite+ にビルドを任せない）
- `vp run dev` は `package.json` の `next dev` を実行するだけなので利用可能
- **`vp check` で Oxfmt + Oxlint + TypeScript チェックをまとめて実行**する。これを品質チェックの単一コマンドとする
- `vp staged` を pre-commit フックに組み込み、ステージ済みファイルのみチェックする
- `vp migrate` は Vite プロジェクト向けのため**使用しない**
- **注意: Next.js 16 では `next lint` コマンドが削除済み**のため、check スクリプトに含めない。ESLint（`eslint` / `eslint-config-next`）も撤去済みで、Lint は Oxlint のみに一本化している
- Next.js 固有の Lint ルールは Oxlint の Next.js プラグインルール（`"nextjs"`）を有効化して担保する。**設定は `.oxlintrc.json` ではなく `vite.config.ts` の `lint.plugins` に記述**する（Vite+ は `.oxlintrc.json` の使用を非推奨としているため）。あわせて `react` / `jsx-a11y` プラグインも有効化し、非機能要件（7章）のアクセシビリティ観点を Lint で担保する
- `vp check` / `vp fmt` / `vp lint` の対象は `vite.config.ts` の `fmt.ignorePatterns` / `lint.ignorePatterns` で `*.md` と `.claude/**` を除外し、実ソース（`*.ts` / `*.tsx` / `*.js` / `*.jsx` / `*.css` 等）のみに絞っている
- pre-commit フックは `vp config` で `.vite-hooks/` に設置済み。`vite.config.ts` の `staged` ブロックでステージ済みの `*.{ts,tsx,js,jsx}` にのみ `vp check --fix` を実行する

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "check": "vp check"
  }
}
```

### 補足方針
- Server Components を基本とし、アニメーションやインタラクションが必要な箇所のみ Client Components に切り出す
- **shadcn/ui はライブラリ依存ではなくコードコピー方式**。使うコンポーネント（Button / Card / Tabs / Dialog 程度を想定）だけ `src/components/ui/` に取り込み、自由に改造する。全部入りにしない
- デザイントークン（カラー・タイポグラフィ・スペーシング）は Tailwind v4 の `@theme`（CSS 変数ベース）で一元管理。**Claude Design の成果物は Tailwind ベースで出力されるため、ほぼそのまま反映できる**構造にする
- リッチな演出（テキストアニメーション、グラデーション背景、パーティクル等）は Magic UI / Aceternity UI などの Tailwind + Motion 製コンポーネントを shadcn と同じコピー方式で取り込み、自作コストを下げる
- ダークモード対応は `next-themes` + Tailwind の `dark:` バリアントで実装（デザイン次第で最終判断）

## 3. ページ構成

Contact ページは廃止。SNS / GitHub / Zenn へのリンクはフッターおよび Top のヒーローに集約する。

```
/          Top
/about     プロフィール・経歴・スキル
/works     制作物一覧
/blog      Zenn 記事一覧（自動連携）
/hobby     趣味（YouTube ほか、拡張可能な構造）
```

### 3.1 Top（`/`）
- ヒーローセクション: 名前・肩書き・キャッチコピー・SNS リンク。アニメーションの一番の見せ場
- 各セクションのダイジェスト（About 抜粋 / 最新 Works 数件 / 最新 Blog 記事 3件程度 / Hobby への導線）
- スクロール連動アニメーション（Motion の `whileInView` 等）でセクションが順次現れる演出

### 3.2 About（`/about`）
- 自己紹介文
- **経歴タイムライン**: 職歴・プロジェクト経験を時系列で表示。データは `src/data/career.ts` から生成
- **スキル一覧**: カテゴリ別（Frontend / Backend / Cloud(Azure) / AI・ツール等）+ 習熟度表現。データは `src/data/skills.ts`
- 資格・登壇・社内活動（AI 勉強会など）があれば同様にデータ駆動で表示

### 3.3 Works（`/works`）
- 自作・公開済みアプリを紹介するページ
- データソースは `src/data/works.ts` の**手動管理**（GitHub API 連携はしない）
- 1 作品 = カード or 詳細セクション。項目例:
  - タイトル / 説明 / 使用技術タグ / スクリーンショット / デモ URL / GitHub URL / 制作時期
- 作品追加 = `works.ts` に 1 オブジェクト追加 + 画像を `public/` に配置、で完結する構造にする

### 3.4 Blog（`/blog`）— Zenn 自動連携
- **手動登録は一切なし**。Zenn に投稿すれば自動でサイトに反映される
- データ取得: Zenn の非公式 JSON API を第一候補、RSS をフォールバックとする
  - JSON API: `https://zenn.dev/api/articles?username={ZENN_USERNAME}&order=latest`（ページネーション: `&page=N`、レスポンスの `next_page` で判定）
  - RSS: `https://zenn.dev/{ZENN_USERNAME}/feed?all=1`（パースには `fast-xml-parser` を採用）
  - `ZENN_USERNAME` は環境変数または定数で管理（※実装時に記入）
- 取得方式: サーバー側 fetch + **ISR（`revalidate: 3600` = 1時間）**
- 表示項目: タイトル / 絵文字 / 公開日 / いいね数（JSON API の `liked_count`）/ Zenn 記事への外部リンク
- 検索・タグフィルタは**実装しない**（新着順一覧のみ）
- 非公式 API のため、取得失敗時はキャッシュ済みデータ or 空状態 UI に安全にフォールバックし、サイト全体は落とさない

### 3.5 Hobby（`/hobby`）
- 初期コンテンツ: 自分の YouTube 動画の埋め込み一覧
- **将来のカテゴリ追加を前提とした汎用構造**にする:
  - `src/data/hobby.ts` を「カテゴリの配列」として定義（例: `{ id, title, description, items: HobbyItem[] }`）
  - `HobbyItem` は `type`（`youtube` | `image` | `link` など）で表示コンポーネントを出し分けるユニオン型
  - カテゴリを 1 つ追加すればページに新セクションが自動で増える設計
- YouTube は動画 ID のリストから埋め込み。軽量埋め込みライブラリ `lite-youtube-embed` を採用し、パフォーマンス劣化を防ぐ

## 4. データ管理方針（コンテンツ = コード）

全コンテンツをリポジトリ内の型付き TS ファイルで管理し、「更新が面倒で放置」を構造的に防ぐ。更新作業は AI コーディングエージェント（Claude Code 等）への依頼 1 回で完結する想定。

```
src/data/
  profile.ts   # 名前・肩書き・自己紹介・SNSリンク
  career.ts    # 経歴タイムライン（会社・期間・役割・実績）
  skills.ts    # スキル（カテゴリ・習熟度）
  works.ts     # 制作物
  hobby.ts     # 趣味カテゴリ + アイテム
```

- 各ファイルに型定義を併置（または `src/types/` に集約）し、追記時に型エラーで不備を検知できるようにする
- **このデータ群が Phase 3 の AI チャットの知識源を兼ねる**（後述）ため、人間可読かつ構造化された記述を保つ

## 5. AI チャット機能（Phase 3）

「Peishim がどんな人か」を AI が答えるチャットウィジェット。

- UI: サイト右下のフローティングチャット、または About 内のセクション
- 構成:
  - フロント → Next.js Route Handler（`src/app/api/chat/route.ts`）→ **OpenAI API**
  - API キー（`OPENAI_API_KEY`）はサーバー側環境変数で秘匿。クライアントには一切露出しない
  - システムプロンプトは `src/data/` の内容 + Zenn 記事タイトル一覧から**ビルド時 or リクエスト時に自動生成**（データ量的に RAG 不要、全文注入で足りる）
- 低コスト設計（必須要件）:
  - モデル: **`gpt-5.4-mini`**
  - `max_tokens`（出力トークン上限）を小さく制限（例: 500〜800）
  - 会話履歴の保持ターン数を制限（例: 直近 5 往復）
  - レート制限: IP ベースで 1 分 N 回 / 1 日 M 回（Vercel の Edge Config / KV または Upstash Redis を検討）
  - ポートフォリオと無関係な質問はシステムプロンプトで回答拒否させ、トークン浪費と悪用を防ぐ
- ストリーミング応答（Vercel AI SDK + `@ai-sdk/openai` の利用を検討）

## 6. アニメーション方針（実装面）

※ 具体的なビジュアルは Claude Design 側で決定。ここでは実装ルールのみ定義。

- アニメーションの基盤ライブラリは Motion に統一（Magic UI 等の導入コンポーネントも内部は Motion なので競合しない）
- 多用パターン: ヒーローの初回ロード演出 / スクロール連動のセクション出現 / カードの hover インタラクション / ページ遷移トランジション
- 既製の演出コンポーネント（Magic UI / Aceternity UI）を優先的に活用し、足りない部分のみ Motion で自作する
- `prefers-reduced-motion` を尊重し、該当ユーザーにはアニメーションを無効化・簡略化する
- アニメーションが LCP / CLS を悪化させないこと（初回描画をブロックする演出は避ける）

## 7. 非機能要件

- **SEO / OGP**: Next.js Metadata API でページごとに title / description / OGP 画像を設定。OGP 画像は静的 1 枚から開始（`next/og` での動的生成は任意拡張）
- **パフォーマンス**: Lighthouse 90+ を目安。`next/image` による画像最適化、YouTube 埋め込みの遅延読み込み
- **レスポンシブ**: モバイルファースト。Tailwind のブレークポイント（`sm` / `md` / `lg` / `xl`）に従う
- **アクセシビリティ**: セマンティック HTML、キーボード操作、コントラスト確保
- **エラー耐性**: Zenn API 障害時もサイトは正常表示（Blog セクションのみ空状態表示）

## 8. ディレクトリ構成

`app/` はルート直下ではなく **`src/app/` に統一**する（`src/` を使う場合は Next.js の標準的な配置に合わせ、`app/` も `src/` 配下に置く。当初案の「`app/` はルート直下・それ以外は `src/`」という分割は非典型のため変更した）。`tsconfig.json` の `@/*` エイリアスは `./src/*` を指す。

```
src/
  app/
    layout.tsx            # ThemeProvider（next-themes）/ 共通レイアウト / メタデータ
    globals.css           # Tailwind v4 エントリ + @theme（デザイントークン定義）
    page.tsx              # Top
    about/page.tsx
    works/page.tsx
    blog/page.tsx         # ISR (revalidate: 3600)
    hobby/page.tsx
    api/chat/route.ts     # Phase 3
  components/
    ui/                 # shadcn/ui・Magic UI 等から取り込んだ部品（コピー方式。プリミティブは Base UI）
    common/             # Header, Footer, SectionTitle, AnimatedSection 等
  features/             # ページ単位の機能コンポーネント（about/ works/ blog/ hobby/ chat/）
  data/                 # コンテンツデータ（profile / career / skills / works / hobby）
  lib/
    zenn.ts             # Zenn API クライアント + 型定義 + フォールバック処理
  types/
public/
  images/works/ ...
```

## 9. フェーズ計画

| フェーズ | 内容 |
|---|---|
| **Phase 1（MVP）** | 全 5 ページ実装 / Zenn 自動連携（ISR）/ データファイル駆動のコンテンツ / 基本アニメーション / SEO・OGP / Vercel デプロイ・旧サイトからの切替 |
| **Phase 2** | アニメーション磨き込み / Hobby カテゴリ追加 / OGP 動的生成など任意改善 |
| **Phase 3** | AI チャット機能（OpenAI API・レート制限込み） |

## 10. 実装前に埋める項目（TODO）

- [ ] Zenn のユーザー名（`ZENN_USERNAME`）
- [ ] YouTube チャンネル / 掲載する動画 ID リスト
- [ ] Works に載せる公開アプリのリストと各種 URL・スクリーンショット
- [ ] 経歴・スキルの具体的な内容（`career.ts` / `skills.ts` の中身）
- [ ] Claude Design で作成したデザイントークン（カラー・フォント等）を `globals.css` の `@theme` に反映
