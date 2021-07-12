const { colors, fonts, shadows } = require('@resir014/chungking-core')

module.exports = {
  config: {
    theme: {
      colors: {
        white: colors.white,
        black: colors.black,
        grey: colors.grey,
        // Alias for the `grey` colors as well as replacing the default Tailwind CSS grays
        gray: colors.grey,
        red: colors.red,
        orange: colors.orange,
        green: colors.green,
        turquoise: colors.turquoise,
        blue: colors.blue,
        ultramarine: colors.ultramarine,
        purple: colors.purple,
        magenta: colors.magenta
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
