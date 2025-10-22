/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // All text sizes
    { pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/ },
    { pattern: /(sm|md|lg|xl|2xl):text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/ },

    // Spacing
    { pattern: /(p|m|px|py|pt|pb|pl|pr|gap)-\d+/ },

    // Layout
    { pattern: /(w|h|max-w|max-h|min-w|min-h)-.*/ },

    // Flex/Grid/Position
    { pattern: /(flex|grid|block|inline|hidden|absolute|relative|fixed)/ },

    // Colors
    { pattern: /(bg|text|border)-(primary|background|foreground|red|blue|green|purple|white|black)(-500)?/ },

    // Animations
    { pattern: /(animate-float|animate-fade-in|animate-fade-in-delay-\d|animate-pulse-subtle|animate-meteor|animate-bounce)/ },

    // Custom utilities
    'cosmic-button', 'text-glow', 'card-hover', 'gradient-border', 'star', 'meteor',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(250,47%,60%)',
        background: 'hsl(210,40%,98%)',
        foreground: 'hsl(222,47%,11%)',
      },
      fontSize: {
        base: '16px',
      },
      minHeight: {
        screen: '100vh',
      }
    },
  },
  plugins: [],
}
