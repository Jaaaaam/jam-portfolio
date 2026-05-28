import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fff8ef',
        surface: '#fff8ef',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fbf3e4',
        'surface-container': '#f5edde',
        'surface-container-high': '#efe7d9',
        'surface-container-highest': '#e9e2d3',
        'surface-dim': '#e1d9cb',
        primary: '#442a22',
        'primary-container': '#5d4037',
        'on-primary': '#ffffff',
        'on-primary-container': '#d4ada1',
        secondary: '#286b33',
        'secondary-container': '#abf4ac',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#2e7238',
        tertiary: '#00373e',
        'tertiary-container': '#004f59',
        outline: '#827470',
        'outline-variant': '#d4c3be',
        'on-surface': '#1e1b13',
        'on-surface-variant': '#504441',
        amber: '#ffc107',
        cyan: '#00e5ff',
      },
      boxShadow: {
        pixel: '4px 4px 0 0 #442a22',
        'pixel-sm': '2px 2px 0 0 #442a22',
        glow: '0 0 36px rgba(255, 193, 7, 0.22)',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        headline: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Geist', 'system-ui', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        gutter: '24px',
        panel: '32px',
      },
    },
  },
  plugins: [],
} satisfies Config;
