import { Send } from 'lucide-react';
import { profile, socialLinks } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 space-y-8">
      <SectionHeading eyebrow="Signal" title="CONTACT_TERMINAL" />
      <div className="overflow-hidden rounded-lg border-2 border-primary bg-primary text-on-primary-container shadow-pixel">
        <div className="flex items-center justify-between border-b-2 border-primary bg-primary-container px-4 py-3 font-code text-xs sm:text-sm">
          <span>root@portfolio:~/send_signal</span>
          <span className="font-pixel text-[9px]">X</span>
        </div>
        <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 font-code text-sm">
            <div>
              <p className="mb-3 text-secondary-container">
                &gt; available_channels --list
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-outline bg-primary-container px-3 py-2 text-on-primary transition hover:bg-secondary-container hover:text-on-secondary-container"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="mb-2 text-secondary-container">
                &gt; status --message
              </p>
              <p className="leading-7 text-on-primary/90">{profile.status}</p>
            </div>
          </div>
          <form
            className="space-y-4 font-code"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="block">
              <span className="mb-2 block text-xs uppercase text-outline-variant">
                User name
              </span>
              <input
                className="w-full rounded border border-outline bg-primary-container px-3 py-3 text-on-primary outline-none transition placeholder:text-on-primary-container/50 focus:border-secondary"
                placeholder="Enter your identity..."
                type="text"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase text-outline-variant">
                Message
              </span>
              <textarea
                className="min-h-32 w-full resize-none rounded border border-outline bg-primary-container px-3 py-3 text-on-primary outline-none transition placeholder:text-on-primary-container/50 focus:border-secondary"
                placeholder="Transmission payload..."
              />
            </label>
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-primary bg-secondary px-4 py-3 font-pixel text-[11px] leading-5 text-on-secondary shadow-pixel-sm transition hover:-translate-y-0.5"
              type="submit"
            >
              EXECUTE_SEND
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
