/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '480px',
      // => @media (min-width: 768px) { ... }

      'lg': '480px',
      // => @media (min-width: 1024px) { ... }

      'xl': '480px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '480px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
}

