/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2F80ED',
          dark: '#4F4F4F',
          gray: '#828282',
          lightGray: '#E0E0E0'
        },
        indicator: {
          orange: '#F8B76B',
          blue: '#8785FF',
          red: '#EB5757',
          yellow: '#F2C94C'
        },
        chat: {
          yellow: '#E5A443',
          yellowBackground: '#FCEED3',
          purple: '#9B51E0',
          purpleBackground: '#EEDCFF',
          green: '#43B78D',
          greenBackground: '#D2F2EA'
        },
        stiker: {
          1: '#E9F3FF',
          2: '#FDCFA4',
          3: '#F9E9C3',
          4: '#AFEBDB',
          5: '#CBF1C2',
          6: '#CFCEF9',
          7: '#F9E0FD'
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

