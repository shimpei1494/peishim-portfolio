import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { profile } from "@/data/profile";

export function AboutIntro() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-5 py-9 md:px-12 md:py-14">
      <div className="flex flex-col items-center gap-7 md:flex-row md:items-start md:gap-12">
        <div className="size-[140px] flex-none -rotate-3 overflow-hidden rounded-3xl border-4 border-ink shadow-[8px_8px_0_var(--accent-soft)] md:size-[180px]">
          <Image
            src={profile.avatar}
            alt={profile.alias}
            width={180}
            height={180}
            className="size-full object-cover object-[50%_20%]"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <p className="mb-4 text-xl leading-relaxed font-bold md:text-2xl">
            {profile.catchphrase}
          </p>
          <div className="space-y-3 text-left">
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-[1.9] text-muted-foreground md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
