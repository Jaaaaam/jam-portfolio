import {
  BriefcaseBusiness,
  Code2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  MonitorSmartphone,
  Palette,
  PenTool,
  Terminal,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  label: string;
  code: string;
  icon: LucideIcon;
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
  role: 'Frontend Developer',
  headline: 'Building thoughtful digital experiences one line at a time.',
  intro:
    'I create practical, responsive, and polished web experiences with a soft spot for playful interfaces, clear component systems, and details that make products feel considered.',
  status: 'Open to thoughtful teams, creative builds, and product-minded engineering work.',
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

export const skills: Skill[] = [
  { label: 'React', code: 'REACT_UI', icon: Code2 },
  { label: 'TypeScript', code: 'TYPE_SYS', icon: Layers3 },
  { label: 'Responsive UI', code: 'RWD_APP', icon: MonitorSmartphone },
  { label: 'Tailwind CSS', code: 'TW_CSS', icon: Palette },
  { label: 'JavaScript', code: 'JS_CORE', icon: Terminal },
  { label: 'Product Thinking', code: 'PROD_UX', icon: BriefcaseBusiness },
  { label: 'Web Apps', code: 'WEB_APP', icon: Globe2 },
  { label: 'Creative Coding', code: 'CODEPEN', icon: PenTool },
];

export const projects: Project[] = [
  {
    title: "Who's the Spy",
    serial: 'JAM-001',
    summary:
      'A multiplayer social deduction game built with React, TypeScript, Convex, and focused real-time room flows.',
    tags: ['React', 'TypeScript', 'Convex'],
    href: 'https://github.com/Jaaaaam/whos-the-spy',
    accent: 'from-[#abf4ac] to-[#00e5ff]',
  },
  {
    title: 'Maglalaba Ba',
    serial: 'JAM-002',
    summary:
      'A lightweight weather-aware laundry helper with a playful Filipino concept and mobile-friendly interface.',
    tags: ['React', 'Vite', 'Tailwind'],
    href: 'https://github.com/Jaaaaam/maglalaba-ba',
    accent: 'from-[#ffdbd0] to-[#ffc107]',
  },
  {
    title: 'Guess the Country',
    serial: 'JAM-003',
    summary:
      'A React guessing game project that turns geography recall into a fast, approachable browser experience.',
    tags: ['React', 'Game UI', 'TypeScript'],
    href: 'hhttps://github.com/Jaaaaam/guess-the-flag',
    accent: 'from-[#9cf0ff] to-[#e7bdb1]',
  },
];

export const timeline: TimelineItem[] = [
  {
    level: '01',
    title: 'Creative Builder',
    meta: 'Design to browser',
    description:
      'Turns ideas and mockups into structured, responsive interfaces that feel intentional on every viewport.',
  },
  {
    level: '02',
    title: 'Frontend Systems',
    meta: 'Components and state',
    description:
      'Builds reusable components, data-driven sections, and UI patterns that stay easy to maintain.',
  },
  {
    level: '03',
    title: 'Product Polish',
    meta: 'Interaction details',
    description:
      'Refines spacing, motion, empty states, and accessibility so the interface feels complete rather than merely assembled.',
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
