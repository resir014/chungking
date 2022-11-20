/**
 * @typedef {Omit <typeof import('../types').Color, 'white' | 'black'>} ColorScheme
 */

/**
 * Default Alert style builder.
 *
 * @param {ColorScheme[]} colors Chungking color schemes
 * @returns CSS class objects for the Alert component
 */
function Alert(_colors) {
  return {
    '.ck-alert': {
      '@apply p-4 border-l-2': {},
    },
    '.ck-alert--default': {
      '@apply border-l-chungking-grey-500 bg-chungking-grey-500 bg-opacity-25': {},
      '& a': {
        '@apply text-chungking-turquoise-400': {},
      },
    },
    '.ck-alert--primary': {
      '@apply border-l-chungking-blue-500 bg-chungking-blue-500 bg-opacity-25': {},
      '& a': {
        '@apply text-chungking-turquoise-400': {},
      },
    },
    '.ck-alert--success': {
      '@apply border-l-chungking-green-500 bg-chungking-green-500 bg-opacity-25': {},
      '& a': {
        '@apply text-chungking-turquoise-400': {},
      },
    },
    '.ck-alert--warning': {
      '@apply border-l-chungking-orange-500 bg-chungking-orange-500 bg-opacity-25': {},
      '& a': {
        '@apply text-chungking-turquoise-400': {},
      },
    },
    '.ck-alert--error': {
      '@apply border-l-chungking-red-500 bg-chungking-red-500 bg-opacity-25': {},
      '& a': {
        '@apply text-chungking-turquoise-400': {},
      },
    },
  };
}

module.exports = Alert;
