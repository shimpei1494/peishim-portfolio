import { AnimatedSection } from "@/components/common/animated-section";
import { SectionTitle } from "@/components/common/section-title";
import { type SkillLevel, skillCategories } from "@/data/skills";

const MAX_LEVEL = 5;

function SkillLevelMeter({ level }: { level: SkillLevel }) {
  return (
    <span className="flex gap-1" aria-label={`習熟度 ${level} / ${MAX_LEVEL}`}>
      {Array.from({ length: MAX_LEVEL }, (_, i) => (
        <span
          key={i}
          aria-hidden
          className={`size-2.5 rounded-[3px] border border-ink ${
            i < level ? "bg-accent-pop" : "bg-transparent"
          }`}
        />
      ))}
    </span>
  );
}

export function SkillGrid() {
  return (
    <AnimatedSection className="mx-auto max-w-6xl px-5 py-9 pb-14 md:px-12 md:py-14 md:pb-20">
      <SectionTitle title="SKILLS" />
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border-2 border-ink bg-white p-5 shadow-[6px_6px_0_var(--ink)] md:p-6"
          >
            <h3 className="mb-4 font-mono text-sm font-semibold">
              <span className="text-accent-pop"># </span>
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold">
                    {skill.name}
                    {skill.note && (
                      <span className="ml-2 rounded px-1.5 py-0.5 font-mono text-[10px] font-medium bg-tag">
                        {skill.note}
                      </span>
                    )}
                  </span>
                  <SkillLevelMeter level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
