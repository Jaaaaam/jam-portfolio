import {
  Bot,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  MonitorSmartphone,
  Palette,
  PenTool,
  Rocket,
  Server,
  Smartphone,
  Terminal,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  label: string;
  icon: LucideIcon;
};

export type SkillCategory = {
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
  featured?: boolean;
};

export type Project = {
  title: string;
  serial: string;
  summary: string;
  tags: string[];
  href: string;
  accent: string;
};

export type TimelineItem = {
  level: string;
  title: string;
  meta: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const profile = {
  name: 'Patricia Jamille Silvestre',
  handle: 'Jaaaaam',
  role: 'Web Engineer at ING',
  headline: 'Building maintainable frontend systems for modern web products.',
  intro:
    'I am a frontend-focused web engineer with 10+ years of experience building production web apps, reusable UI components, and responsive interfaces, with React as my main expertise.',
  status:
    'Currently building modern web interfaces at ING with Lit and Azure. Outside work, I explore TypeScript, Codex, Claude, and Convex through side projects.',
  email: 'pjdeesilvestre@gmail.com',
  links: {
    github: 'https://github.com/Jaaaaam',
    linkedin: 'https://www.linkedin.com/in/patricia-jamille-silvestre-7a5963100/',
    codepen: 'https://codepen.io/jamsilvestre',
  },
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCH6ZJa0uZ6VK7KQGwdYO-F-2hMc1z837ywOgmyZyrLhDDGA-bRi6sEJC8_IP2q4NxENRw-xbhzszLhY0J5GG7nkCzi17q_-VMItTRgeodTpeu6bIXJqz0v9vAAJ4xWOgU0qDcBfOxwO6WOG4CkPAeCe9uuM_Rr7-TIsaW8JJgZirTvovxMk3n_11wiL4TFDpg_lC3PEZIrthq0iZ0qbM97JUskJ0_r1iFXsN_Z5trYCQ8n-SGfo20kWDynVEmMxsMT7fuTPTif_YJp',
};

export const socialLinks = [
  { label: 'GitHub', href: profile.links.github, icon: Github },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: Linkedin },
  { label: 'CodePen', href: profile.links.codepen, icon: PenTool },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Primary Frontend',
    eyebrow: 'current focus',
    description:
      'React is my main expertise, supported by years of production UI work across modern web stacks.',
    icon: Code2,
    featured: true,
    skills: [
      { label: 'React', icon: Code2 },
      { label: 'JavaScript', icon: Terminal },
      { label: 'TypeScript', icon: Layers3 },
      { label: 'Next.js', icon: Globe2 },
      { label: 'Vue', icon: FileCode2 },
      { label: 'Lit', icon: Braces },
      { label: 'PWA', icon: Smartphone },
      { label: 'HTML5', icon: FileCode2 },
      { label: 'CSS3', icon: Palette },
    ],
  },
  {
    title: 'Styling & UI',
    eyebrow: 'interface craft',
    description: 'Responsive, polished UI work across product and client-facing interfaces.',
    icon: Palette,
    skills: [
      { label: 'Tailwind CSS', icon: Palette },
      { label: 'SASS / SCSS', icon: Braces },
      { label: 'Bootstrap', icon: Layers3 },
      { label: 'Responsive UI', icon: MonitorSmartphone },
      { label: 'Mobile Web', icon: Smartphone },
    ],
  },
  {
    title: 'Backend & APIs',
    eyebrow: 'supporting stack',
    description: 'Enough backend depth to build, connect, and ship full product workflows.',
    icon: Server,
    skills: [
      { label: 'PHP', icon: FileCode2 },
      { label: 'Laravel', icon: Server },
      { label: 'Node.js', icon: Terminal },
      { label: 'Convex', icon: Database },
      { label: 'REST APIs', icon: Workflow },
    ],
  },
  {
    title: 'Databases',
    eyebrow: 'data layer',
    description: 'Relational and document data experience from full-stack roles.',
    icon: Database,
    skills: [
      { label: 'MySQL', icon: Database },
      { label: 'MongoDB', icon: Database },
    ],
  },
  {
    title: 'Workflow & Tools',
    eyebrow: 'delivery',
    description: 'Daily collaboration and engineering workflow tools.',
    icon: GitBranch,
    skills: [
      { label: 'Git / GitHub', icon: GitBranch },
      { label: 'Jira', icon: Workflow },
      { label: 'Asana', icon: Workflow },
      { label: 'GitHub Copilot', icon: Bot },
      { label: 'Agile', icon: Workflow },
    ],
  },
  {
    title: 'Side Project Lab',
    eyebrow: 'hobby builds',
    description: 'Personal projects where I explore AI-assisted workflows and newer app patterns.',
    icon: Bot,
    skills: [
      { label: 'Codex', icon: Terminal },
      { label: 'Claude', icon: Bot },
      { label: 'TypeScript', icon: Layers3 },
      { label: 'Convex', icon: Database },
      { label: 'React', icon: Code2 },
      { label: 'Vite', icon: Rocket },
    ],
  },
  {
    title: 'Platforms & Deployment',
    eyebrow: 'release paths',
    description: 'Web platform deployment experience, including installable and mobile web contexts.',
    icon: Rocket,
    skills: [
      { label: 'WordPress', icon: Globe2 },
      { label: 'Azure', icon: Server },
      { label: 'AWS', icon: Server },
      { label: 'PWA Deployment', icon: Rocket },
      { label: 'iOS Web App Deployment', icon: Smartphone },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Who's the Spy",
    serial: 'JAM-001',
    summary:
      'A multiplayer social deduction game shaped around real-time room flow, clear interaction states, and a TypeScript-first React interface.',
    tags: ['React', 'TypeScript', 'Convex'],
    href: 'https://github.com/Jaaaaam/whos-the-spy',
    accent: 'from-[#abf4ac] to-[#00e5ff]',
  },
  {
    title: 'Maglalaba Ba',
    serial: 'JAM-002',
    summary:
      'A responsive weather-aware laundry helper that turns a playful Filipino concept into a clean, mobile-friendly web experience.',
    tags: ['React', 'Vite', 'Tailwind'],
    href: 'https://github.com/Jaaaaam/maglalaba-ba',
    accent: 'from-[#ffdbd0] to-[#ffc107]',
  },
  {
    title: 'Guess the Country',
    serial: 'JAM-003',
    summary:
      'A polished React guessing game focused on fast feedback, approachable gameplay, and a simple interface that works well across screen sizes.',
    tags: ['React', 'Game UI', 'TypeScript'],
    href: 'https://github.com/Jaaaaam/guess-the-flag',
    accent: 'from-[#9cf0ff] to-[#e7bdb1]',
  },
];

export const timeline: TimelineItem[] = [
  {
    level: '01',
    title: 'Web Foundations',
    meta: 'WordPress, PHP, Laravel',
    description:
      'Built and maintained client websites, WordPress experiences, and PHP/Laravel-backed web interfaces.',
  },
  {
    level: '02',
    title: 'Full Stack Growth',
    meta: 'React, Vue, APIs, databases',
    description:
      'Expanded across frontend and backend work with React, Vue, Laravel, .NET, APIs, MySQL, and MongoDB.',
  },
  {
    level: '03',
    title: 'Frontend Systems',
    meta: 'PWA, iOS web',
    description:
      'Led frontend delivery, reusable component work, PWA development, and iOS web app deployment experience.',
  },
  {
    level: '04',
    title: 'Web Engineer at ING',
    meta: 'Lit, Azure, modern UI',
    description:
      'Now building modern web interfaces with Lit and Azure, while keeping frontend patterns maintainable.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Erwin - LinkedIn Review',
    role: 'Teammate',
    quote:
      "The most intelligent female developer I've ever worked with.",
  },
  {
    name: 'Aurezza - LinkedIn Review',
    role: 'Teammate',
    quote:
      "One of the smartest people I've ever worked with. Keen, witty and quick on her feet, Jam is great to work with and embodies what it is to be an adaptive and efficient person – both in and out of the office.",
  },
  {
    name: 'Daryl - LinkedIn Review',
    role: 'Teammate',
    quote:
      "Highly dedicated and passionate to her task; Highly skilled in front end to back end and vise versa; Always keen to every little detail; Was a great mentor who always pushes your best to the limits, ensuring you're on the right track. ",
  },
];
