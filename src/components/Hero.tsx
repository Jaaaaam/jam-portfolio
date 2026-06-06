import { ArrowDownRight, Github, Linkedin, PenTool } from 'lucide-react';
import { profile } from '../data/portfolio';

const linkIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  CodePen: PenTool,
};

const quickLinks = [
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'CodePen', href: profile.links.codepen },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[calc(100svh-5rem)] scroll-mt-24 grid-cols-1 items-center gap-10 py-8 lg:grid-cols-12 lg:py-16"
    >
      <div className="order-2 space-y-6 lg:order-1 lg:col-span-7">
        <div className="inline-flex rounded-full border border-primary bg-secondary-container px-4 py-2 font-code text-xs font-bold uppercase text-on-secondary-container shadow-pixel-sm">
          Currently shipping at ING_
        </div>
        <div className="space-y-5">
          <p className="font-code text-sm text-on-surface-variant">
            Hello, I&apos;m {profile.name}.
          </p>
          <h1 className="max-w-4xl font-headline text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
            Building maintainable{' '}
            <span className="text-secondary underline decoration-dashed underline-offset-8">
              frontend systems
            </span>{' '}
            for modern web products.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
            {profile.intro}
          </p>
        </div>
        <div className="rounded-lg border-2 border-primary bg-primary p-5 font-code text-sm text-on-primary-container shadow-pixel sm:p-6">
          <p className="mb-2">
            &gt;<span className="text-secondary-container"> status</span>{' '}
            --current
          </p>
          <p className="mb-4 text-on-primary">{profile.role}</p>
          <p className="flex items-center gap-2 text-secondary-container">
            <span className="h-4 w-2 animate-pulse bg-secondary-container" />
            {profile.status}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-secondary px-6 py-3 font-code font-bold text-on-secondary shadow-pixel-sm transition hover:-translate-y-0.5 hover:shadow-glow"
            href="#work"
          >
            VIEW_PROJECTS
            <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-surface-container-high px-6 py-3 font-code font-bold text-primary shadow-pixel-sm transition hover:-translate-y-0.5 hover:bg-surface-container-highest"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            CONNECT_ON_LINKEDIN
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 sm:max-w-md">
          {quickLinks.map((link) => {
            const Icon = linkIcons[link.label];

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-outline-variant bg-surface-container-low px-3 py-2 font-code text-xs text-primary transition hover:border-primary hover:bg-secondary-container"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
        <div className="relative w-full max-w-[320px] sm:max-w-[390px]">
          <div className="absolute -inset-4 rounded-xl bg-secondary/10 blur-2xl" />
          <div className="relative border-2 border-primary bg-surface-container-high p-2 shadow-pixel">
            <img
              className="aspect-square w-full rounded-sm object-cover"
              src={profile.heroImage}
              alt="Pixel portrait of Patricia Jamille Silvestre"
            />
          </div>
          <div className="absolute -bottom-4 right-2 border-2 border-primary bg-secondary-container px-3 py-2 font-pixel text-[9px] leading-4 text-on-secondary-container shadow-pixel-sm sm:right-6">
            LVL DEV
          </div>
        </div>
      </div>
    </section>
  );
}
