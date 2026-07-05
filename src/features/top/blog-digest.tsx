import { AnimatedSection } from "@/components/common/animated-section";
import { SectionTitle } from "@/components/common/section-title";
import { fetchZennArticles, getZennProfileUrl } from "@/lib/zenn";

const DIGEST_COUNT = 3;

export async function BlogDigest() {
  const articles = await fetchZennArticles();
  const latest = articles.slice(0, DIGEST_COUNT);

  return (
    <AnimatedSection className="mx-auto max-w-6xl px-5 pb-10 md:px-12 md:pb-16">
      <SectionTitle
        title="BLOG"
        action={
          <a
            href={getZennProfileUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] font-medium text-muted-foreground transition-colors hover:text-accent-pop"
          >
            Zenn で読む →
          </a>
        }
      />
      {latest.length === 0 ? (
        <p className="rounded-2xl border-2 border-ink bg-white p-6 text-sm text-muted-foreground">
          記事を取得できませんでした。Zenn で直接ご覧ください。
        </p>
      ) : (
        <div className="overflow-hidden rounded-2xl border-2 border-ink bg-white">
          {latest.map((article) => (
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
      )}
    </AnimatedSection>
  );
}
