@AGENTS.md

# Vite+ (`vp`) の使い方

このプロジェクトは Next.js アプリのため、開発サーバーとビルドは `next dev` / `next build`（または `vp run dev` / `vp run build`）をそのまま使います。`vp dev` / `vp build` は Vite 向けのコマンドなので使いません。それ以外のパッケージ管理・Lint・フォーマット・型チェックは Vite+ (`vp`) に統一します。`vp help`、`vp <command> --help`、`vp --version` で詳細を確認できます。

**よく使うコマンド:** `vp install`, `vp check`, `vp check --fix`, `vp lint`, `vp run dev`, `vp run build`, `vp add` / `vp remove` / `vp update`

**ワークフロー:**

- pull 後は依存関係やロックファイルが変わっている可能性があるため `vp install` を実行してください。
- コードの修正が完了したら必ず `vp check` を実行し、エラーが出た場合はすべて修正してから作業を完了としてください。
- `vp check` の対象は `vite.config.ts` の `fmt` / `lint` ブロックで `*.ts` / `*.tsx` / `*.js` / `*.jsx` / `*.css` などのソースファイルに絞っています。Markdown ファイルや `.claude/` 配下は対象外です。
- コミット時は pre-commit フック（`vp config` 済み、`.vite-hooks/`）が自動で `vp staged` を実行し、ステージ済みの `*.{ts,tsx,js,jsx}` に `vp check --fix` を適用します。手動で `lint-staged` 等を追加する必要はありません。

## よくあるミス

- **パッケージマネージャーを直接使わない:** `npm` / `pnpm` / `yarn` を直接使用しないでください。`npm install` ではなく `vp install`、依存追加は `vp add`、更新は `vp update` を使います。
- **`vp dev` / `vp build` は使わない:** このプロジェクトは Next.js のビルドを Vite に置き換えていません。`next dev` / `next build`（または `vp run dev` / `vp run build`）を使用してください。
- **Vite コマンドでツールを実行する:** `vp vitest` や `vp oxlint` は存在しません。Lint は `vp lint`、フォーマットは `vp fmt` を使用してください。
- **スクリプトの実行:** `package.json` の `scripts` に組み込みコマンドと同名のスクリプトがある場合は `vp run <script>` で実行してください。
- **ESLint は使わない:** このプロジェクトに ESLint（`eslint` / `eslint-config-next` / `eslint.config.mjs`）は存在しません。Next.js 16 で `next lint` コマンド自体が削除されたため、Lint は Oxlint（`vp lint` / `vp check`）のみに一本化しています。ESLint 系のパッケージやルールを追加しないでください。
- **Oxlint・Oxfmt・vite-plus を直接インストールしない:** これらは Vite+ にラップされています。個別にインストール・アップグレードしないでください。
- **単発バイナリは Vite+ ラッパーを使う:** `npx` の代わりに `vp dlx` を使用してください。
- **設定ファイルは `vite-plus` からインポートする:** `vite.config.ts` では `import { defineConfig } from 'vite-plus';` を使用します。`vite` 本体から import しません。テストを追加する場合も `vitest` を直接インストールせず、`vite-plus/test` から `import { describe, expect, it, vi } from 'vite-plus/test';` を使ってください。
- **`vp migrate` は使わない:** `vp migrate` は Vite プロジェクトへの移行用コマンドです。このプロジェクトは Next.js のため対象外です。
- **型を考慮した Lint:** `vite.config.ts` の `lint.options` で `typeAware` / `typeCheck` を有効化済みのため、`oxlint-tsgolint` の追加インストールや `--type-aware` フラグは不要です。`vp lint` / `vp check` だけで型チェックまで実行されます。
- **Oxlint プラグインは `vite.config.ts` で管理:** `.oxlintrc.json` は使いません。`lint.plugins` に `["oxc", "typescript", "unicorn", "react", "nextjs", "jsx-a11y"]` を設定済みです。プラグインを追加する場合もこの配列に追記してください（`plugins` を設定すると default set を上書きするため、既存の値を残したまま追記すること）。

## プロジェクト構成

- ソースは `src/` 配下に統一しています。`app/` は **`src/app/`**（ルート直下ではない）。`tsconfig.json` の `@/*` は `./src/*` を指すので、import は `@/components/...` `@/lib/...` のように書きます。
- `src/components/ui/` は shadcn/ui のコードコピー方式で導入したコンポーネント置き場です（`components.json` 参照）。
  - **プリミティブは Radix UI ではなく Base UI（`@base-ui/react`）**です。学習データにある「shadcn = Radix」という前提で `@radix-ui/react-*` を import しないでください。
  - 新しい shadcn コンポーネントを追加するときは `vp dlx shadcn@latest add <name>` を使います（`npx` ではなく `vp dlx`）。
- ダークモードは `next-themes` を使います。テーマ切り替え用の `next-theme` のような別パッケージを追加でインストールしないでください。
- アニメーションは `motion`（旧 `framer-motion`）に統一しています。`framer-motion` を新規にインストールしないでください（import は `motion/react` から行います）。
- YouTube 埋め込みは `lite-youtube-embed`（Hobby ページ用の軽量埋め込み）を使います。
- Zenn RSS フォールバックのパースには `fast-xml-parser` を使います（新規に別の XML/RSS パーサーを追加しないでください）。
- 詳細な仕様・ページ構成・データ設計は `docs/portfolio-v2-spec.md` を参照してください。実装中に仕様と異なる判断をした場合は、このファイルも合わせて更新してください。
