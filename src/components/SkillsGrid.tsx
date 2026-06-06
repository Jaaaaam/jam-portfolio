import { skillCategories } from '../data/portfolio';
import type { Skill, SkillCategory } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

type SkillChipProps = {
  skill: Skill;
  compact?: boolean;
};

function SkillChip({ skill, compact = false }: SkillChipProps) {
  const Icon = skill.icon;

  return (
    <li
      className={`group/chip flex items-center gap-2 rounded-md border border-outline-variant bg-surface-container-low px-3 py-2 font-code text-xs text-on-surface-variant transition hover:-translate-y-0.5 hover:border-primary hover:bg-secondary-container hover:text-on-secondary-container ${
        compact ? 'min-h-10' : 'min-h-12'
      }`}
    >
      <Icon
        className={`${compact ? 'h-4 w-4' : 'h-5 w-5'} shrink-0 text-secondary transition group-hover/chip:text-on-secondary-container`}
        aria-hidden="true"
      />
      <span className="leading-5">{skill.label}</span>
    </li>
  );
}

function FeaturedSkillCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon;

  return (
    <article className="group rounded-xl border-2 border-primary bg-surface-container-high p-5 shadow-pixel transition hover:-translate-y-1 hover:shadow-glow sm:p-8 md:col-span-2 lg:col-span-2">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="font-code text-xs uppercase tracking-normal text-secondary">
            {category.eyebrow}
          </p>
          <h3 className="font-headline text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {category.title}
          </h3>
          <p className="max-w-2xl text-sm leading-6 text-on-surface-variant">
            {category.description}
          </p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-primary bg-surface-container-lowest shadow-pixel-sm">
          <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {category.skills.map((skill) => (
          <SkillChip key={skill.label} skill={skill} />
        ))}
      </ul>
    </article>
  );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon;

  return (
    <article className="flex min-h-full flex-col rounded-xl border-2 border-primary bg-surface-container-high p-5 shadow-pixel transition hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 font-code text-[11px] uppercase tracking-normal text-secondary">
            {category.eyebrow}
          </p>
          <h3 className="font-pixel text-xs leading-5 text-primary">
            {category.title}
          </h3>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-outline-variant bg-surface-container-low">
          <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
        </div>
      </div>

      <p className="mb-5 text-sm leading-6 text-on-surface-variant">
        {category.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillChip key={skill.label} skill={skill} compact />
        ))}
      </ul>
    </article>
  );
}

export function SkillsGrid() {
  const [featuredCategory, ...supportingCategories] = skillCategories;

  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      <SectionHeading eyebrow="Inventory" title="TECH_INVENTORY" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <FeaturedSkillCard category={featuredCategory} />
        {supportingCategories.map((category) => (
          <SkillCategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
