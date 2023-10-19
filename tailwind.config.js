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
        'text-red': '#cc3341',
      },
      backgroundImage: {
        gradient: 'url("/assets/bg.png")',
      },
      boxShadow: {
        nav: '0 2px 8px rgba(0, 0, 0, 0.16)',
        card: '0 2px 10px rgba(45, 42, 61, 0.1)',
        button: '0 1px 4px rgba(0, 0, 0, 0.16)',
        search: '0 1px 8px rgba(0, 0, 0, 0.16)',
        onboard: '0 2px 32px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
