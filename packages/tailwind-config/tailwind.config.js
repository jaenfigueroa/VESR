const baseColors = {
  'purple-900': '#451c63',
  'purple-800': '#5f2475',
  'purple-700': '#6e297e',
  'purple-600': '#7e2f87',
  'purple-500': '#8a338d',
  'purple-400': '#9b4c9d',
  'purple-300': '#ad69ae',
  'purple-200': '#c492c5',
  'purple-100': '#dbbddc',
  'purple-50': '#f0e5f0',

  'pink-900': '#7100a1',
  'pink-800': '#9500aa',
  'pink-700': '#a800af',
  'pink-600': '#bd00b4',
  'pink-500': '#cd00b7',
  'pink-400': '#dc00c6',
  'pink-300': '#e438d0',
  'pink-200': '#ed7fdd',
  'pink-100': '#f5b4ea',
  'pink-50': '#fce1f7',

  black: '#070618',
  white: '#ffffff',
  gray: '#353535',
  'light-gray': '#d9d9d9',
  'green': '#adc743',
  'green-dark': '#9cb53a',
  blue: '#3d9be9',
  'blue-dark': '#1077fa',
  red: '#ff6161',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    screens: {
      lg: '1248px',
      md: '960px',
      sm: '720px',
      xsm: '480px',
    },
    colors: {
      ...baseColors,
      primary: baseColors['purple-800'],
      secondary: baseColors['pink-200'],
      tertiary: baseColors['pink-700'],
    },
    boxShadow: {
      sm: '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
      lg: '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',
    },
    fontSize: {
      xms: ['0.75rem', { lineHeight: '150%', letterSpacing: '-0.03em' }],
      sm: ['0.875rem', { lineHeight: '150%', letterSpacing: '-0.03em' }],
      base: ['1rem', { lineHeight: '150%', letterSpacing: '-0.03em' }],
      lg: ['1.125rem', { lineHeight: '150%', letterSpacing: '-0.03em' }],
      xl: ['1.25rem', { lineHeight: '140%', letterSpacing: '-0.03em' }],
      '2xl': ['1.5rem', { lineHeight: '140%', letterSpacing: '-0.03em' }],
      '3xl': ['2rem', { lineHeight: '130%', letterSpacing: '-0.03em' }],
      '4xl': ['2.5rem', { lineHeight: '120%', letterSpacing: '-0.03em' }],
      '5xl': ['3rem', { lineHeight: '120%', letterSpacing: '-0.03em' }],
      '6xl': ['3.5rem', { lineHeight: '120%', letterSpacing: '-0.03em' }],
      '7xl': ['4rem', { lineHeight: '120%', letterSpacing: '-0.03em' }],
      '8xl': ['4.5rem', { lineHeight: '120%', letterSpacing: '-0.03em' }],
      '9xl': ['5rem', { lineHeight: '120%', letterSpacing: '-0.03em' }],
    },
    spacing: {
      '1': '0.5rem',
      '2': '1rem',
      '3': '1.5rem',
      '4': '2rem',
      '5': '2.5rem',
      '6': '3rem',
      '7': '3.5rem',
      '8': '4rem',
      '9': '4.5rem',
    },
    extend: {
      height: {
        header: '90px', // altura del header
        hero: 'calc(100vh - 90px)', // altura del hero
      },
    },
  },
  plugins: [],
}

