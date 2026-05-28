import { Menu, Terminal } from 'lucide-react';
import { profile } from '../data/portfolio';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-primary bg-surface/90 shadow-pixel backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-3 text-primary">
          <Terminal className="h-5 w-5" aria-hidden="true" />
          <span className="font-pixel text-[10px] leading-5 text-secondary sm:text-xs">
            {profile.handle}::dev
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-code text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-on-surface-variant transition hover:-translate-y-0.5 hover:text-secondary"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="rounded-md border border-primary bg-surface-container-high p-2 text-primary shadow-pixel-sm md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 grid w-full grid-cols-4 gap-2 rounded-t-xl border-t-2 border-primary bg-surface-container-highest px-4 pb-4 pt-2 shadow-[0_-4px_0_0_rgba(68,42,34,0.12)] md:hidden">
      {navItems.map((item, index) => (
        <a
          key={item.href}
          className={`flex flex-col items-center rounded-lg p-2 font-code text-[11px] transition active:scale-95 ${
            index === 0
              ? 'bg-secondary-container text-on-secondary-container'
              : 'text-on-surface-variant'
          }`}
          href={item.href}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
