import { marqueeSkills } from "@/data/skills";

export function SkillMarquee() {
  const line = `${marqueeSkills.join(" ✦ ")} ✦`;

  return (
    <div
      className="mt-0 overflow-hidden border-y-2 border-ink bg-accent-pop py-2 text-white md:mt-14 md:py-3"
      aria-label={`スキル: ${marqueeSkills.join(", ")}`}
    >
      <div
        aria-hidden
        className="flex w-max gap-8 font-mono text-xs font-semibold whitespace-nowrap animate-marquee md:gap-10 md:text-[15px]"
      >
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}
