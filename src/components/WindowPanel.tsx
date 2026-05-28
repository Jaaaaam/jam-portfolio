import type { ReactNode } from 'react';

type WindowPanelProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function WindowPanel({ title, children, className = '' }: WindowPanelProps) {
  return (
    <article
      className={`overflow-hidden rounded-lg border-2 border-primary bg-surface-container-low shadow-pixel ${className}`}
    >
      <div className="flex items-center justify-between border-b-2 border-primary bg-surface-container-high px-4 py-3">
        <span className="font-code text-xs font-bold text-primary sm:text-sm">
          {title}
        </span>
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full border border-primary bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full border border-primary bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full border border-primary bg-[#27c93f]" />
        </div>
      </div>
      <div className="p-5 sm:p-8">{children}</div>
    </article>
  );
}
