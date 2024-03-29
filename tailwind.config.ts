import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-900': '#121214',
        'gray-800': '#202024',
        'gray-400': '#8D8D99',
        'gray-300': '#c4c4cc',
        'gray-100': '#e1e1e6',

        'green-500': '#00875f',
        'green-300': '#00b37e',
      },
      padding: {
        '18': '4.5rem',
      },
      height: {
        container: '656px',
      },
      width: {
        modal: '480px',
      },
      minHeight: {
        container: '656px',
      },
      maxWidth: {
        carousel: 'calc(100vw - ((100vw - 1180px) / 2))',
        main: '1180px',
      },
      fontSize: {
        xs: '0.875rem',
        sm: '1rem',
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      dropShadow: {
        modal: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
        checkoutItem: '0 0 60px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}
export default config
