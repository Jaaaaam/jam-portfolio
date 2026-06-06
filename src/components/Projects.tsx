import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 space-y-8">
      <SectionHeading eyebrow="Releases" title="PROJECT_RELEASES" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.serial}
            className="group flex h-full flex-col rounded-lg border-2 border-primary bg-surface-container-lowest p-4 shadow-pixel transition hover:-translate-y-1"
          >
            <div className="mb-4 overflow-hidden rounded border-2 border-primary bg-surface-dim shadow-pixel-sm">
              <div className={`project-preview-gradient aspect-video bg-gradient-to-br ${project.accent} p-4`}>
                <div className="project-preview-terminal flex h-full flex-col justify-between rounded border border-primary/25 bg-primary/70 p-4 text-on-primary">
                  <div className="flex items-center justify-between font-pixel text-[8px] leading-4">
                    <span>SERIAL: {project.serial}</span>
                    <span>REV A</span>
                  </div>
                  <div className="font-code text-sm text-secondary-container">
                    ./run {project.title.toLowerCase().replaceAll(' ', '-')}
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mb-3 font-pixel text-xs leading-6 text-primary">
              {project.title}
            </h3>
            <p className="mb-5 flex-1 text-sm leading-6 text-on-surface-variant">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 border-t border-dashed border-primary/25 pt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-outline bg-surface px-2 py-1 font-code text-[11px] uppercase text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-between rounded-md border border-primary bg-surface-container-high px-3 py-2 font-code text-sm font-bold text-primary transition hover:bg-secondary-container"
            >
              Open project
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
