import { Moon, Sun, Terminal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent } from 'react';
import { profile } from '../data/portfolio';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const themeStorageKey = 'jam-portfolio-theme';
const revealDuration = 700;
const themeBackgrounds = {
  light: '255 248 239',
  dark: '22 18 18',
};

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem(themeStorageKey);

    return savedTheme === 'dark';
  });
  const [revealStyle, setRevealStyle] = useState<CSSProperties | null>(null);
  const revealTimer = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => () => {
    if (revealTimer.current) {
      window.clearTimeout(revealTimer.current);
    }
  }, []);

  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    if (revealStyle) {
      return;
    }

    const nextMode = !isDarkMode;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      window.localStorage.setItem(themeStorageKey, nextMode ? 'dark' : 'light');
      setIsDarkMode(nextMode);
      return;
    }

    setRevealStyle({
      '--reveal-x': `${event.clientX}px`,
      '--reveal-y': `${event.clientY}px`,
      background: `rgb(${themeBackgrounds[nextMode ? 'dark' : 'light']})`,
    } as CSSProperties);
    document.documentElement.classList.add('animating-theme');

    revealTimer.current = window.setTimeout(() => {
      document.documentElement.classList.toggle('dark-mode', nextMode);
      document.documentElement.classList.remove('animating-theme');
      window.localStorage.setItem(themeStorageKey, nextMode ? 'dark' : 'light');
      setIsDarkMode(nextMode);
      setRevealStyle(null);
      revealTimer.current = null;
    }, revealDuration);
  }

  return (
    <>
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
            <button
              type="button"
              aria-label="Toggle Theme"
              aria-pressed={isDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-primary bg-surface-container text-primary shadow-pixel-sm transition-colors hover:bg-secondary-container hover:text-on-secondary-container disabled:cursor-not-allowed disabled:opacity-70"
              disabled={Boolean(revealStyle)}
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </nav>
          <button
            type="button"
            aria-label="Toggle Theme"
            aria-pressed={isDarkMode}
            className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-primary bg-surface-container text-primary shadow-pixel-sm transition-colors hover:bg-secondary-container hover:text-on-secondary-container disabled:cursor-not-allowed disabled:opacity-70 md:hidden"
            disabled={Boolean(revealStyle)}
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>
      {revealStyle ? (
        <div
          aria-hidden="true"
          className="reveal-overlay"
          style={revealStyle}
        />
      ) : null}
    </>
  );
}

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 grid w-full grid-cols-4 gap-2 rounded-t-xl border-t-2 border-primary bg-surface-container-highest px-4 pb-4 pt-2 shadow-[0_-4px_0_0_rgba(68,42,34,0.12)] md:hidden">
      {navItems.map((item, index) => (
        <a
          key={item.href}
          className={`flex flex-col items-center rounded-lg p-2 font-code text-[11px] transition active:scale-95 ${index === 0
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
