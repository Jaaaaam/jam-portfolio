import { MessageSquareQuote, Play } from 'lucide-react';
import { testimonials } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  return (
    <section className="scroll-mt-24 space-y-8" id="reviews">
      <SectionHeading eyebrow="Reviews" title="PARTY_CHAT" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <article
            key={`${testimonial.name}-${index}`}
            className="relative rounded-lg border-4 border-primary bg-surface-container-low p-5 shadow-pixel sm:p-6"
          >
            <div className="absolute -bottom-3 left-10 h-6 w-6 rotate-45 border-b-4 border-r-4 border-primary bg-surface-container-low" />
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border-2 border-primary bg-secondary-container shadow-pixel-sm">
                <MessageSquareQuote
                  className="h-6 w-6 text-on-secondary-container"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold text-primary">
                  {testimonial.name}
                </h3>
                <p className="font-code text-xs uppercase text-on-surface-variant">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <blockquote className="min-h-40 text-base italic leading-8 text-primary">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-5 flex justify-end text-secondary">
              <Play className="h-5 w-5 animate-pulse fill-current" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
