

const baseColors = {
  white: '#ffffff',
  black: '#000000',
  purple: '#5F2475',
  'purple-light': '#9516A1',
  pink: '#E438CF',
  lilac: '#C57FFC',
  cyan: '#03FFEB',
  red: '#FF0200',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px',
    },
    colors: {
      ...baseColors,
      primary: baseColors.purple,
      secondary: baseColors.pink
    },
    boxShadow: {
      sm: '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
      lg: '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',
    },
    fontSize: {
      xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      '2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
      '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
    }
  },
  plugins: [],
}

