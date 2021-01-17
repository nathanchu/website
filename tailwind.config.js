const fractions = {
  '1/2': '50',
  '1/3': '33.333333',
  '2/3': '66.666667',
  '1/4': '25',
  '2/4': '50',
  '3/4': '75',
  '1/5': '20',
  '2/5': '40',
  '3/5': '60',
  '4/5': '80',
  '1/6': '16.666667',
  '2/6': '33.333333',
  '3/6': '50',
  '4/6': '66.666667',
  '5/6': '83.333333',
  '1/12': '8.333333',
  '2/12': '16.666667',
  '3/12': '25',
  '4/12': '33.333333',
  '5/12': '41.666667',
  '6/12': '50',
  '7/12': '58.333333',
  '8/12': '66.666667',
  '9/12': '75',
  '10/12': '83.333333',
  '11/12': '91.666667'
}

const Fractions = (l, w, f = fractions) =>
  Object.fromEntries(Object.entries(f).map(([k, v]) => [l + '-' + k, v + w]))

const width = Fractions('screen', 'vw')

const height = Fractions('screen', 'vh')

const spacing = {
  ...Fractions('screen-x', 'vw'),
  ...Fractions('screen-y', 'vh')
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans:
        'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono:
        '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    extend: {
      colors: {
        black: {
          dark: '#000000',
          DEFAULT: '#191919',
          light: '#303030'
        }
      },
      boxShadow: {
        card: '0 0 20px rgba(0, 0, 0, 0.1)'
      },
      width: width,
      maxWidth: width,
      height: height,
      minHeight: height,
      maxHeight: height,
      spacing: spacing,
      zIndex: {
        '-10': '-10'
      },
      minWidth: {
        ...width,
        none: 'none',
        0: '0rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
