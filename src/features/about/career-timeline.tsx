import { AnimatedSection } from "@/components/common/animated-section";
import { SectionTitle } from "@/components/common/section-title";
import { career } from "@/data/career";

function formatPeriod(period: { from: string; to?: string }): string {
  const from = period.from.replace("-", ".");
  const to = period.to ? period.to.replace("-", ".") : "現在";
  return `${from} — ${to}`;
}

export function CareerTimeline() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-5 py-9 md:px-12 md:py-14">
      <SectionTitle title="CAREER" />
      <ol className="relative ml-2 space-y-8 border-l-2 border-ink md:ml-3">
        {career.map((entry) => (
          <li key={entry.id} className="relative pl-6 md:pl-9">
            <span
              aria-hidden
              className="absolute top-1 -left-[9px] size-4 rounded-full border-2 border-ink bg-accent-pop"
            />
            <p className="font-mono text-xs font-semibold text-accent-pop md:text-[13px]">
              {formatPeriod(entry.period)}
            </p>
            <div className="mt-3 rounded-2xl border-2 border-ink bg-white p-5 shadow-[6px_6px_0_var(--ink)] md:p-6">
              <h3 className="mb-1 font-bold md:text-lg">
                {entry.organization}
                <span className="ml-2 font-mono text-xs font-medium text-muted-foreground">
                  / {entry.role}
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
              {entry.highlights && (
                <ul className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px] font-medium">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="rounded px-2 py-0.5 bg-tag">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </AnimatedSection>
  );
}
