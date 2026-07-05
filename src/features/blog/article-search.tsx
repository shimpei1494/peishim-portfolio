"use client";

import { useMemo, useState } from "react";
import { ArticleList } from "@/features/blog/article-list";
import type { ZennArticle } from "@/lib/zenn";

interface ArticleSearchProps {
  articles: ZennArticle[];
}

/** Zenn 記事をタイトルの部分一致でブラウザ側絞り込みする（取得は変えず表示のみ絞り込む） */
export function ArticleSearch({ articles }: ArticleSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return articles;
    }
    return articles.filter((article) => article.title.toLowerCase().includes(trimmed));
  }, [articles, query]);

  if (articles.length === 0) {
    return <ArticleList articles={articles} />;
  }

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="記事タイトルで検索"
        aria-label="記事タイトルで検索"
        className="mb-6 w-full rounded-full border-2 border-ink bg-white px-5 py-2.5 font-mono text-sm text-ink placeholder:text-muted-foreground focus:ring-2 focus:ring-accent-pop focus:outline-none md:mb-8"
      />
      {filtered.length === 0 ? (
        <p className="rounded-2xl border-2 border-ink bg-white p-6 text-sm text-muted-foreground">
          「{query}」に一致する記事が見つかりませんでした。
        </p>
      ) : (
        <ArticleList articles={filtered} />
      )}
    </div>
  );
}
