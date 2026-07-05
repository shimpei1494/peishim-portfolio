import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { SectionTitle } from "@/components/common/section-title";
import type { HobbyCategory, HobbyItem } from "@/data/hobby";
import { YoutubeEmbed } from "@/features/hobby/youtube-embed";

function HobbyItemCard({ item }: { item: HobbyItem }) {
  switch (item.type) {
    case "youtube":
      return (
        <div className="overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[6px_6px_0_var(--ink)]">
          <YoutubeEmbed videoId={item.videoId} title={item.title} />
          <p className="p-4 text-sm font-bold">{item.title}</p>
        </div>
      );
    case "image":
      return (
        <figure className="overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[6px_6px_0_var(--ink)]">
          <Image
            src={item.src}
            alt={item.alt}
            width={640}
            height={360}
            className="aspect-video w-full object-cover"
          />
          <figcaption className="p-4 text-sm font-bold">{item.title}</figcaption>
        </figure>
      );
    case "link":
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border-2 border-ink bg-white p-5 shadow-[6px_6px_0_var(--ink)] transition-transform hover:-translate-y-1"
        >
          <p className="mb-1 text-sm font-bold">
            {item.title} <span aria-hidden>↗</span>
          </p>
          {item.description && (
            <p className="text-[13px] leading-relaxed text-muted-foreground">{item.description}</p>
          )}
        </a>
      );
  }
}

export function HobbyCategorySection({ category }: { category: HobbyCategory }) {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-5 py-9 md:px-12 md:py-14">
      <SectionTitle title={category.title} />
      <p className="-mt-2 mb-6 leading-relaxed text-muted-foreground md:mb-8">
        {category.description}
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <HobbyItemCard key={item.id} item={item} />
        ))}
      </div>
    </AnimatedSection>
  );
}
