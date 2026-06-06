import { About, Timeline } from './components/About';
import { BottomNav, Header } from './components/Header';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SkillsGrid } from './components/SkillsGrid';
import { Testimonials } from './components/Testimonials';
import { socialLinks } from './data/portfolio';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />
      <main className="mx-auto flex max-w-7xl flex-col gap-20 px-4 pb-28 pt-20 sm:px-6 lg:px-10 lg:pb-20">
        <Hero />
        <About />
        <SkillsGrid />
        <Timeline />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t-2 border-dashed border-outline-variant bg-surface-container-low">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center font-code text-sm text-on-surface-variant sm:px-6 md:flex-row lg:px-10">
          <p>Built with React, TypeScript, Tailwind, and frontend systems thinking.</p>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
      <BottomNav />
    </div>
  );
}

export default App;
