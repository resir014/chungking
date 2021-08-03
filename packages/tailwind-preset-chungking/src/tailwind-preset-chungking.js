const { colors, fonts, shadows } = require('@resir014/chungking-core')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'chungking-white': colors.white,
        'chungking-black': colors.black,
        'chungking-grey': colors.grey,
        'chungking-red': colors.red,
        'chungking-orange': colors.orange,
        'chungking-green': colors.green,
        'chungking-turquoise': colors.turquoise,
        'chungking-blue': colors.blue,
        'chungking-ultramarine': colors.ultramarine,
        'chungking-purple': colors.purple,
        'chungking-magenta': colors.magenta
      },
      boxShadow: {
        single: shadows.single,
        double: shadows.double
      },
      fontFamily: {
        sans: fonts.sansSerif,
        mono: fonts.monospace
      }
    }
  }
}
