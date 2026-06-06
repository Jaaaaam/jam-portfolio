import { Coffee, Sparkles } from 'lucide-react';
import { timeline } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { WindowPanel } from './WindowPanel';

export function About() {
  return (
    <section className="scroll-mt-24 space-y-8" id="profile">
      <SectionHeading eyebrow="Profile" title="USER_PROFILE" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <WindowPanel title="Career_Journey.exe">
          <div className="space-y-5">
            <p className="leading-8 text-on-surface-variant">
              I build interfaces that are useful first and delightful right
              after. My strongest lane is React and reusable frontend systems,
              with production work across Lit, PWA and mobile web behavior, and
              side projects where I explore TypeScript, Codex, Claude, and Convex.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-outline-variant bg-surface-container-high p-4">
                <span className="mb-2 block font-pixel text-[10px] leading-4 text-secondary">
                  MODE: SHIP
                </span>
                <p className="text-sm text-on-surface-variant">
                  Building production frontend systems for real product workflows.
                </p>
              </div>
              <div className="rounded-md border border-outline-variant bg-surface-container-high p-4">
                <span className="mb-2 block font-pixel text-[10px] leading-4 text-secondary">
                  FOCUS: FRONTEND
                </span>
                <p className="text-sm text-on-surface-variant">
                  Keeping components reusable, accessible, responsive, and easy to maintain.
                </p>
              </div>
            </div>
          </div>
        </WindowPanel>
        <WindowPanel title="Core_Philosophy.md">
          <ul className="space-y-4 font-code text-sm leading-7 text-on-surface-variant">
            <li className="flex gap-4">
              <span className="font-bold text-secondary">01.</span>
              <span>Make the easy path clear, then make it feel good.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-secondary">02.</span>
              <span>Components should carry meaning, not just markup.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-secondary">03.</span>
              <span>Responsive design is part of the product, not a cleanup pass.</span>
            </li>
          </ul>
        </WindowPanel>
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section className="space-y-8">
      <SectionHeading eyebrow="Progression" title="LVL_PROGRESSION" />
      <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {timeline.map((item, index) => (
          <article
            key={item.level}
            className="relative rounded-lg border-2 border-primary bg-surface-container-low p-5 shadow-pixel"
          >
            <div className="mb-5 flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary font-pixel text-xs shadow-pixel-sm ${
                  index === timeline.length - 1
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'bg-surface text-secondary'
                }`}
              >
                {item.level}
              </div>
              {index === timeline.length - 1 ? (
                <Sparkles className="h-5 w-5 text-secondary" aria-hidden="true" />
              ) : (
                <Coffee className="h-5 w-5 text-outline" aria-hidden="true" />
              )}
            </div>
            <h3 className="font-headline text-xl font-bold text-primary">
              {item.title}
            </h3>
            <p className="mb-3 font-code text-xs uppercase text-secondary">
              {item.meta}
            </p>
            <p className="text-sm leading-6 text-on-surface-variant">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
