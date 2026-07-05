import Link from "next/link";
import { AnimatedSection } from "@/components/common/animated-section";
import { SectionTitle } from "@/components/common/section-title";
import { works } from "@/data/works";
import { WorkCard } from "@/features/works/work-card";

const DIGEST_COUNT = 3;

export function WorksDigest() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-5 py-9 md:px-12 md:py-16">
      <SectionTitle
        title="WORKS"
        action={
          <Link
            href="/works"
            className="font-mono text-[13px] font-medium text-muted-foreground transition-colors hover:text-accent-pop"
          >
            view all →
          </Link>
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        {works.slice(0, DIGEST_COUNT).map((work, index) => (
          <WorkCard key={work.id} work={work} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}
