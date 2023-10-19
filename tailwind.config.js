/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121315',
        secondary: '#292A2C',
        tertiary: '#37393D',
        accent: '#4EFEC9',
      },
      backgroundImage: {
        gradient: 'url("/assets/bg.png")',
      },
    },
  },
  plugins: [],
};
