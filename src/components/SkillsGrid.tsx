import { skills } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function SkillsGrid() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      <SectionHeading eyebrow="Inventory" title="TECH_INVENTORY" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.code}
              className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-md border-2 border-primary bg-surface-container p-3 text-center shadow-pixel transition hover:-translate-y-1 hover:bg-secondary-container hover:shadow-glow"
              title={skill.label}
            >
              <Icon
                className="h-8 w-8 text-primary group-hover:text-on-secondary-container"
                aria-hidden="true"
              />
              <span className="font-pixel text-[9px] leading-4 text-primary group-hover:text-on-secondary-container">
                {skill.code}
              </span>
              <span className="sr-only">{skill.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
