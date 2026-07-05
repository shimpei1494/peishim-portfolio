import { BlogDigest } from "@/features/top/blog-digest";
import { Hero } from "@/features/top/hero";
import { SkillMarquee } from "@/features/top/skill-marquee";
import { WorksDigest } from "@/features/top/works-digest";

// Zenn 記事ダイジェストを ISR で1時間ごとに再検証する
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <SkillMarquee />
      <WorksDigest />
      <BlogDigest />
    </>
  );
}
