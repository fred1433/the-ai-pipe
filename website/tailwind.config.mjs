import designTokens from '../design.tokens.json' assert { type: 'json' };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: designTokens.colors.primary,
        accent: designTokens.colors.accent,
        neutral: designTokens.colors.neutral,
      },
      fontFamily: {
        sans: [designTokens.typography.sans],
        mono: [designTokens.typography.mono],
      },
      animation: {
        'background-pan': 'background-pan 8s linear infinite',
      },
      keyframes: {
        'background-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}; 