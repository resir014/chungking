/**
 * @typedef {import('../types').ColorScheme} ColorScheme
 */

/**
 * @typedef {'outline' | 'solid' | 'subtle'} BadgeVariants
 */

/**
 * Badge sizes builder.
 *
 * @returns CSS class objects for Badge sizes
 */
function badgeSizes() {
  return {
    '.ck-badge--md': {
      '@apply rounded px-2 py-0.5 text-xs': {},
    },
    '.ck-badge--lg': {
      '@apply rounded-md px-2.5 py-0.5 text-sm': {},
    },
  };
}

/**
 * Badge colors builder for Outline variant.
 *
 * @param {ColorScheme[]} colors Chungking color schemes
 * @returns CSS class objects for Badge colors
 */
function badgeOutline(colors) {
  return {
    '.ck-badge--outline': {
      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&.ck-badge--${color}`]: {
            [`@apply border-chungking-${color}-200 text-chungking-${color}-200`]: {},
          },
        }),
        {},
      ),
    },
  };
}

/**
 * Badge colors builder for Solid variant.
 *
 * @param {ColorScheme[]} colors Chungking color schemes
 * @returns CSS class objects for Badge colors
 */
function badgeSolid(colors) {
  return {
    '.ck-badge--solid': {
      '@apply border-transparent': {},
      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&.ck-badge--${color}`]: {
            [`@apply bg-chungking-${color}-800 text-chungking-${color}-100`]: {},
          },
        }),
        {},
      ),
    },
  };
}

/**
 * Badge colors builder for Subtle variant.
 *
 * @param {ColorScheme[]} colors Chungking color schemes
 * @returns CSS class objects for Badge colors
 */
function badgeSubtle(colors) {
  return {
    '.ck-badge--subtle': {
      '@apply border-transparent': {},
      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&.ck-badge--${color}`]: {
            [`@apply bg-chungking-${color}-800/50 text-chungking-${color}-100`]: {},
          },
        }),
        {},
      ),
    },
  };
}

/**
 * Default Badge style builder.
 *
 * @param {ColorScheme[]} colors Chungking color schemes
 * @returns CSS class objects for the Badge component
 */
function Badge(colors) {
  return {
    '.ck-badge': {
      '@apply inline-flex items-center font-medium border': {},
    },
    ...badgeSizes(),
    ...badgeSolid(colors),
    ...badgeOutline(colors),
    ...badgeSubtle(colors),
  };
}

module.exports = Badge;
