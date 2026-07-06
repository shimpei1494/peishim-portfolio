import { PageHeader } from "@/components/common/page-header";
import { hobbyCategories } from "@/data/hobby";
import { HobbyCategorySection } from "@/features/hobby/hobby-category-section";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata("Hobby", "Peishim の趣味。YouTube 動画など。", "/hobby");

export default function HobbyPage() {
  return (
    <>
      <PageHeader
        title="HOBBY"
        prompt="ls ./hobby"
        description="仕事以外の顔。趣味のコンテンツを紹介します。"
      />
      <div className="pb-6 md:pb-8">
        {hobbyCategories.map((category) => (
          <HobbyCategorySection key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}
