module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif', 'ui-sans-serif'],
    },
    backgroundSize: {
      'auto-full': 'auto 100%',
    },
    backgroundPosition: {
      half: '50%',
    },
    extend: {
      colors: {
        primary: {
          light: '#00b865',
          DEFAULT: '#008248',
          dark: '#1e3932',
        },
        secondary: {
          light: '#f3f1e7',
          DEFAULT: '#f1f8f6',
          dark: '#d4e9e2',
        },
        mute: '#929191',
      },
      backgroundImage: (theme) => ({
        hero: "url('/xl-hero-desktop_2021.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
