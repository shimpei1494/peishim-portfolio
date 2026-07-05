import { AnimatedSection } from "@/components/common/animated-section";
import { SectionTitle } from "@/components/common/section-title";
import { ArticleList } from "@/features/blog/article-list";
import { fetchZennArticles, getZennProfileUrl } from "@/lib/zenn";

const DIGEST_COUNT = 3;

export async function BlogDigest() {
  const articles = await fetchZennArticles();

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
      <ArticleList articles={articles.slice(0, DIGEST_COUNT)} />
    </AnimatedSection>
  );
}
