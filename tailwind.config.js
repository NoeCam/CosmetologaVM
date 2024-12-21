/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        shadowChange: {
          "0%": { textShadow: "0px 0px 0px rgba(251, 113, 133, 0.4)" },
          "50%": { textShadow: "4px 4px 8px rgba(251, 113, 133, 1)" },
          "100%": { textShadow: "0px 0px 0px rgba(251, 113, 133, 0.4)" },
        },
      },
      animation: {
        shadowChange: "shadowChange 8s ease-in-out infinite",
      },
    },
    plugins: ["flowbite/plugin", "tailwind-scrollbar-hide"],
  },
};
