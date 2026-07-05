import type { ZennArticle } from "@/lib/zenn";

interface ArticleListProps {
  articles: ZennArticle[];
}

/** Zenn 記事の行リスト（取得失敗時は空状態を表示） */
export function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <p className="rounded-2xl border-2 border-ink bg-white p-6 text-sm text-muted-foreground">
        記事を取得できませんでした。Zenn で直接ご覧ください。
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-ink bg-white">
      {articles.map((article) => (
        <a
          key={article.id}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 border-b-2 border-divider-soft px-4 py-4 transition-colors last:border-b-0 hover:bg-cream md:gap-5 md:px-6 md:py-5"
        >
          <span className="text-2xl md:text-[28px]" aria-hidden>
            {article.emoji}
          </span>
          <span className="flex-1 text-sm font-bold md:text-base">{article.title}</span>
          <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
            {article.publishedAt}
          </span>
          {article.likedCount !== undefined && (
            <span className="font-mono text-xs font-semibold text-accent-pop">
              ♥ {article.likedCount}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
