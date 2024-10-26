/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.2rem',
        md: '1.4rem',
        lg: '1.6rem',
        xl: '2.2rem',
      },
    },
    fontFamily: {
      alternateGothic2: ['Alternate-Gothic2', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '425px',
        '3xl': '1700px',
        '4xl': '2000px',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        gray: {
          DEFAULT: '#9e9e9e',
          50: '#f9f9f9',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#888888',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      transitionTimingFunction: {
        'out-back': 'cubic-bezier(.87,-.41,.19,1.44)',
      },
      backgroundImage: {
        'colibri-anim': 'url(/images/colibri_anim.png)',
        'horizon': 'url(/images/horizon.svg)',
        'horizon-down': 'url(/images/horizon_down.svg)',
        'circles': 'url(/images/circles.svg)',
        'plants': "url('/images/plants.svg')",
        'tree': "url('/images/tree.svg')",
        'grass': "url('/images/grass.svg')",
        'grass-plants': "url('/images/grass-plants.svg')",
        'grass-tree': "url('/images/grass-tree.svg')",
      },
    },
  },
}
