/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Text sizes
    { pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)/ },

    // Padding / Margin / Gap / Flex
    { pattern: /(p|m|gap|px|py|pt|pb|pl|pr)-\d+/ },

    // Colors & Background
    { pattern: /(bg|text|border)-(primary|background|foreground)/ },
    { pattern: /(bg|text|border)-(red|blue|green|purple|white|black)(-500)?/ },

    // Layout
    { pattern: /(w|h|max-w|max-h|min-w|min-h)-.*/ },

    // Positioning / Display
    { pattern: /(flex|grid|block|inline|hidden)/ },
    { pattern: /(absolute|relative|fixed)/ },
    { pattern: /(top|bottom|left|right)-\d+/ },

    // Animations
    { pattern: /(animate-float|animate-fade-in|animate-pulse-subtle|animate-meteor)/ },

    // Hover effects
    { pattern: /(hover:scale-\[1\.02\]|hover:shadow-lg|hover:shadow-\[.*\])/ },

    // Custom utilities used in index.css
    'text-glow',
    'card-hover',
    'gradient-border',
    'cosmic-button',
    'star',
    'meteor'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
