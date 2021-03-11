module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.css',
    './src/**/*.pcss',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-base)',
          100: 'var(--color-base-100)',
          200: 'var(--color-base-200)',
          300: 'var(--color-base-300)',
          400: 'var(--color-base-400)',
          500: 'var(--color-base-500)',
          600: 'var(--color-base-600)',
          700: 'var(--color-base-700)',
          800: 'var(--color-base-800)',
          900: 'var(--color-base-900)',
        },
      },
    },
  },
  variants: {},
}
