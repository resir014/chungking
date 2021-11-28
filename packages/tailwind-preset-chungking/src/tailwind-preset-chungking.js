const { colors, shadows } = require('@resir014/chungking-core');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'chungking-white': colors.white,
        'chungking-black': colors.black,
        'chungking-grey': {
          DEFAULT: colors.grey['500'],
          ...colors.grey,
        },
        'chungking-red': {
          DEFAULT: colors.red['500'],
          ...colors.red,
        },
        'chungking-orange': {
          DEFAULT: colors.orange['500'],
          ...colors.orange,
        },
        'chungking-green': {
          DEFAULT: colors.green['500'],
          ...colors.green,
        },
        'chungking-turquoise': {
          DEFAULT: colors.turquoise['500'],
          ...colors.turquoise,
        },
        'chungking-blue': {
          DEFAULT: colors.blue['500'],
          ...colors.blue,
        },
        'chungking-ultramarine': {
          DEFAULT: colors.ultramarine['500'],
          ...colors.ultramarine,
        },
        'chungking-purple': {
          DEFAULT: colors.purple['500'],
          ...colors.purple,
        },
        'chungking-magenta': {
          DEFAULT: colors.magenta['500'],
          ...colors.magenta,
        },
      },
      boxShadow: {
        single: shadows.single,
        double: shadows.double,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
