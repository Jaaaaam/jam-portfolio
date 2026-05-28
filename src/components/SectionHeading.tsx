type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <div>
        {eyebrow ? (
          <p className="mb-2 font-code text-xs uppercase tracking-normal text-secondary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-pixel text-sm leading-7 text-primary sm:text-lg">
          {title}
        </h2>
      </div>
      <div className="h-0.5 flex-1 border-t-2 border-dashed border-primary/25" />
    </div>
  );
}
