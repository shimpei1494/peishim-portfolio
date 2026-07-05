import { XMLParser } from "fast-xml-parser";

/** Zenn のユーザー名（実装時 TODO: 正式な値を環境変数 ZENN_USERNAME に設定） */
const ZENN_USERNAME = process.env.ZENN_USERNAME ?? "peishim";

/** ISR の再検証間隔（仕様: 1時間） */
export const ZENN_REVALIDATE_SECONDS = 3600;

const JSON_API_URL = `https://zenn.dev/api/articles?username=${ZENN_USERNAME}&order=latest`;
const RSS_URL = `https://zenn.dev/${ZENN_USERNAME}/feed?all=1`;
const MAX_JSON_PAGES = 5;
const FALLBACK_EMOJI = "📝";

export interface ZennArticle {
  id: string;
  title: string;
  /** Zenn 記事への外部リンク */
  url: string;
  emoji: string;
  /** 公開日（YYYY-MM-DD） */
  publishedAt: string;
  /** いいね数（RSS フォールバック時は取得不可） */
  likedCount?: number;
}

export function getZennProfileUrl(): string {
  return `https://zenn.dev/${ZENN_USERNAME}`;
}

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toISOString().slice(0, 10);
}

function parseJsonApiArticle(raw: unknown): ZennArticle | null {
  if (typeof raw !== "object" || raw === null) {
    return null;
  }
  const record = raw as Record<string, unknown>;
  const { title, slug, emoji, path } = record;
  if (typeof title !== "string" || typeof slug !== "string" || typeof path !== "string") {
    return null;
  }
  const publishedAt =
    typeof record.published_at === "string" ? formatDate(record.published_at) : "";
  return {
    id: slug,
    title,
    url: `https://zenn.dev${path}`,
    emoji: typeof emoji === "string" && emoji !== "" ? emoji : FALLBACK_EMOJI,
    publishedAt,
    likedCount: typeof record.liked_count === "number" ? record.liked_count : undefined,
  };
}

async function fetchFromJsonApi(): Promise<ZennArticle[]> {
  const articles: ZennArticle[] = [];
  let page = 1;

  while (page <= MAX_JSON_PAGES) {
    const response = await fetch(`${JSON_API_URL}&page=${page}`, {
      next: { revalidate: ZENN_REVALIDATE_SECONDS },
    });
    if (!response.ok) {
      throw new Error(`Zenn JSON API responded with ${response.status}`);
    }
    const body: unknown = await response.json();
    const record = body as { articles?: unknown; next_page?: unknown };
    if (!Array.isArray(record.articles)) {
      throw new Error("Zenn JSON API returned an unexpected shape");
    }
    for (const raw of record.articles) {
      const article = parseJsonApiArticle(raw);
      if (article) {
        articles.push(article);
      }
    }
    if (typeof record.next_page !== "number") {
      break;
    }
    page = record.next_page;
  }

  return articles;
}

interface RssItem {
  title?: unknown;
  link?: unknown;
  pubDate?: unknown;
}

async function fetchFromRss(): Promise<ZennArticle[]> {
  const response = await fetch(RSS_URL, {
    next: { revalidate: ZENN_REVALIDATE_SECONDS },
  });
  if (!response.ok) {
    throw new Error(`Zenn RSS responded with ${response.status}`);
  }
  const xml = await response.text();
  const parsed: unknown = new XMLParser().parse(xml);
  const channel = (parsed as { rss?: { channel?: { item?: RssItem | RssItem[] } } }).rss?.channel;
  const items = channel?.item;
  const list = Array.isArray(items) ? items : items ? [items] : [];

  return list.flatMap((item) => {
    if (typeof item.title !== "string" || typeof item.link !== "string") {
      return [];
    }
    return [
      {
        id: item.link,
        title: item.title,
        url: item.link,
        emoji: FALLBACK_EMOJI,
        publishedAt: typeof item.pubDate === "string" ? formatDate(item.pubDate) : "",
      },
    ];
  });
}

/**
 * Zenn の記事一覧を新着順で取得する。
 * JSON API（非公式）を第一候補、RSS をフォールバックとし、
 * 両方失敗した場合は空配列を返してサイト全体は落とさない（仕様 3.4 / 7章）。
 */
export async function fetchZennArticles(): Promise<ZennArticle[]> {
  try {
    return await fetchFromJsonApi();
  } catch {
    try {
      return await fetchFromRss();
    } catch {
      return [];
    }
  }
}
