/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
    },
  },
  plugins: [],
};
