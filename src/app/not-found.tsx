import Link from "next/link";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata("404", "お探しのページが見つかりませんでした。");

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 text-center md:px-12 md:py-32">
      <p className="mb-3 font-mono text-sm font-medium text-accent-pop">$ curl: (404) Not Found</p>
      <h1 className="text-[100px] leading-none font-black tracking-[-0.02em] md:text-[160px]">
        404<span className="text-accent-pop">.</span>
      </h1>
      <p className="mt-6 text-lg font-bold">お探しのページが見つかりませんでした。</p>
      <p className="mt-2 text-muted-foreground">URL が変更されたか、削除された可能性があります。</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-ink px-6 py-3 font-mono text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
      >
        Top へ戻る
      </Link>
    </div>
  );
}
