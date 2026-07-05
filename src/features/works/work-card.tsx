import Image from "next/image";
import type { Work } from "@/data/works";

/** スクリーンショット未設定時のストライププレースホルダ（デザイン準拠の3色循環） */
const PLACEHOLDER_STRIPES = [
  "repeating-linear-gradient(45deg,#f1edf7,#f1edf7 10px,#e9e3f2 10px,#e9e3f2 20px)",
  "repeating-linear-gradient(45deg,#edf5f2,#edf5f2 10px,#e2efe9 10px,#e2efe9 20px)",
  "repeating-linear-gradient(45deg,#f7f2ec,#f7f2ec 10px,#f1e9df 10px,#f1e9df 20px)",
] as const;

interface WorkCardProps {
  work: Work;
  /** プレースホルダ配色の切り替え用インデックス */
  index?: number;
  /** 制作時期・デモ / GitHub リンクを表示する（Works ページ用） */
  showMeta?: boolean;
}

export function WorkCard({ work, index = 0, showMeta = false }: WorkCardProps) {
  const primaryUrl = work.demoUrl ?? work.githubUrl;

  return (
    <article className="relative overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[6px_6px_0_var(--ink)] transition-transform hover:-translate-y-1">
      {primaryUrl && (
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`${work.title} を開く`}
        />
      )}
      <div
        className="relative grid h-[150px] place-items-center overflow-hidden"
        style={
          work.imageUrl
            ? undefined
            : { background: PLACEHOLDER_STRIPES[index % PLACEHOLDER_STRIPES.length] }
        }
      >
        {work.imageUrl ? (
          <Image
            src={work.imageUrl}
            alt={`${work.title} のスクリーンショット`}
            fill
            className="object-cover"
          />
        ) : (
          <span className="font-mono text-xs text-muted-foreground">
            [ screenshot: {work.title} ]
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold">{work.title}</h3>
        <p className="mb-3 text-[13px] leading-relaxed text-muted-foreground">{work.description}</p>
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px] font-medium">
          {work.tags.map((tag) => (
            <span key={tag} className="rounded px-2 py-0.5 bg-tag">
              {tag}
            </span>
          ))}
        </div>
        {showMeta && (
          <div className="relative z-20 mt-4 flex items-center justify-between gap-3 border-t-2 border-divider-soft pt-3">
            <span className="font-mono text-[11px] text-muted-foreground">
              {work.period.replace("-", ".")}
            </span>
            {/* カード全体が primaryUrl（demoUrl 優先）へのリンクになっているため、
                githubUrl がその代替先として別に存在する場合のみボタンを出す */}
            {work.demoUrl && work.githubUrl && (
              <a
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-ink px-3 py-1 font-mono text-[11px] font-semibold transition-transform hover:-translate-y-0.5"
              >
                GitHub <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
