import { AnimatedSection } from "@/components/common/animated-section";
import { PageHeader } from "@/components/common/page-header";
import { works } from "@/data/works";
import { WorkCard } from "@/features/works/work-card";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata("Works", "Peishim が制作・公開したアプリやツールの一覧。");

export default function WorksPage() {
  return (
    <>
      <PageHeader
        title="WORKS"
        prompt="ls ./works"
        description="自作・公開済みのアプリやツールを紹介します。"
      />
      <AnimatedSection className="mx-auto max-w-6xl px-5 py-9 pb-14 md:px-12 md:py-14 md:pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} showMeta />
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
