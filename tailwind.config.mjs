/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mainColorDark: '#999999',
        mainColorLight: '#f0f2f5',
        secondaryColorDark: '#0068ad',
        secondaryColorLight: '#80ccff',
        tertiaryColorDark: '#2eb82e',
        darkdarkgray: '#333',
      },
    },
  },
  plugins: [],
};
