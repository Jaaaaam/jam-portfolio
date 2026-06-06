import { useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { profile, socialLinks } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = profile.email;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    setHasCopied(true);
    window.setTimeout(() => setHasCopied(false), 2000);
  };

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
              <p className="contact-terminal-accent terminal-command-text mb-3">
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
                      className="contact-channel-link inline-flex items-center gap-2 rounded border border-outline bg-primary-container px-3 py-2 transition hover:bg-secondary-container hover:text-on-secondary-container"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="contact-terminal-accent terminal-command-text mb-2">
                &gt; status --message
              </p>
              <p className="leading-7 text-on-primary/90">{profile.status}</p>
            </div>
          </div>
          <div className="space-y-5 font-code text-sm">
            <div className="space-y-2">
              <p className="contact-channel-text terminal-command-text">&gt; set_destination</p>
              <p className="break-all text-on-primary">
                Current: {profile.email}
              </p>
            </div>
            <div className="rounded-lg border border-outline bg-primary-container p-4">
              <p className="contact-channel-text terminal-command-text mb-3">
                &gt; contact_email --primary
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  className="inline-flex min-w-0 items-center gap-3 break-all transition hover:text-secondary-container"
                  href={`mailto:${profile.email}`}
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {profile.email}
                </a>
                <button
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded border border-primary bg-secondary-container px-3 py-2 font-pixel text-[10px] leading-4 text-on-secondary-container shadow-pixel-sm transition hover:-translate-y-0.5 hover:bg-on-secondary-container hover:text-secondary-container"
                  onClick={handleCopyEmail}
                  type="button"
                >
                  {hasCopied ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  {hasCopied ? 'COPIED!' : 'COPY'}
                </button>
              </div>
            </div>
            <p className="text-outline-variant">
              // Connection established. Ready for communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
