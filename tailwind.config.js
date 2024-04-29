/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px'
      },
      maxWidth: {
        'container': '1070px', // This is the default that applies when no other maxWidth is specified
        'sm': '540px',  // Applies at min-width: 576px
        'md': '720px',  // Applies at min-width: 768px
        'lg': '960px',  // Applies at min-width: 992px
        'xl': '1140px', // Applies at min-width: 1200px
        '2xl': '1220px' // Applies at min-width: 1400px
      }
    }
  },
  plugins: [],
}
