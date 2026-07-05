import type { Metadata } from "next";
import { AnimatedSection } from "@/components/common/animated-section";
import { PageHeader } from "@/components/common/page-header";
import { ArticleSearch } from "@/features/blog/article-search";
import { fetchZennArticles, getZennProfileUrl } from "@/lib/zenn";

export const metadata: Metadata = {
  title: "Blog",
  description: "Zenn に投稿した技術記事の一覧。",
};

// Zenn 記事一覧を ISR で1時間ごとに再検証する
export const revalidate = 3600;

export default async function BlogPage() {
  const articles = await fetchZennArticles();

  return (
    <>
      <PageHeader
        title="BLOG"
        prompt="cat ./zenn/*"
        description="Zenn に投稿した技術記事です。新しい記事は自動で反映されます。"
      />
      <AnimatedSection className="mx-auto max-w-6xl px-5 py-9 pb-14 md:px-12 md:py-14 md:pb-20">
        <ArticleSearch articles={articles} />
        <p className="mt-6 text-right">
          <a
            href={getZennProfileUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] font-medium text-muted-foreground transition-colors hover:text-accent-pop"
          >
            Zenn で読む →
          </a>
        </p>
      </AnimatedSection>
    </>
  );
}
