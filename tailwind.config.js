/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // enable dark mode via class
  theme: {
    extend: {
      colors: {
        background: "hsl(210, 40%, 98%)",
        foreground: "hsl(222, 47%, 11%)",
        card: "hsl(0, 0%, 100%)",
        primary: "hsl(250, 47%, 60%)",
        "primary-foreground": "hsl(210, 40%, 98%)",
        border: "hsl(214, 32%, 91%)",
        dark: {
          background: "hsl(222, 47%, 4%)",
          foreground: "hsl(213, 31%, 91%)",
          card: "hsl(222, 47%, 8%)",
          primary: "hsl(250, 65%, 65%)",
          "primary-foreground": "hsl(213, 31%, 91%)",
          border: "hsl(217, 33%, 20%)",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        "fade-in": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: 0 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-delay-1": "fade-in 0.7s ease-out 0.2s forwards",
        "fade-in-delay-2": "fade-in 0.7s ease-out 0.4s forwards",
        "fade-in-delay-3": "fade-in 0.7s ease-out 0.6s forwards",
        "fade-in-delay-4": "fade-in 0.7s ease-out 0.8s forwards",
        meteor: "meteor 5s linear infinite",
      },
    },
  },
  plugins: [],
};
