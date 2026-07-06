import { PageHeader } from "@/components/common/page-header";
import { AboutIntro } from "@/features/about/about-intro";
import { CareerTimeline } from "@/features/about/career-timeline";
import { SkillGrid } from "@/features/about/skill-grid";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata("About", "Peishim のプロフィール・経歴・スキル。", "/about");

export default function AboutPage() {
  return (
    <>
      <PageHeader title="ABOUT" prompt="whoami" />
      <AboutIntro />
      <CareerTimeline />
      <SkillGrid />
    </>
  );
}
