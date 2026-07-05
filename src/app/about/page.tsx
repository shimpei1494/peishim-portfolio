import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { AboutIntro } from "@/features/about/about-intro";
import { CareerTimeline } from "@/features/about/career-timeline";
import { SkillGrid } from "@/features/about/skill-grid";

export const metadata: Metadata = {
  title: "About",
  description: "Peishim のプロフィール・経歴・スキル。",
};

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
