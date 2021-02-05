import { mediaQueries } from '../foundations'

export const Text = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      900: {
        fontSize: '32px',
        lineHeight: '36px',
        [mediaQueries.lg]: {
          fontSize: '44px',
          lineHeight: '48px'
        }
      },
      800: {
        fontSize: '24px',
        lineHeight: '28px',
        [mediaQueries.lg]: {
          fontSize: '32px',
          lineHeight: '36px'
        }
      },
      700: {
        fontSize: '22px',
        lineHeight: '26px',
        [mediaQueries.lg]: {
          fontSize: '28px',
          lineHeight: '32px'
        }
      },
      600: {
        fontSize: '20px',
        lineHeight: '24px',
        [mediaQueries.lg]: {
          fontSize: '24px',
          lineHeight: '28px'
        }
      },
      500: {
        fontSize: '18px',
        lineHeight: '22px',
        [mediaQueries.lg]: {
          fontSize: '20px',
          lineHeight: '24px'
        }
      },
      body: {
        fontSize: '16px',
        lineHeight: '24px',
        [mediaQueries.lg]: {
          fontSize: '16px',
          lineHeight: '24px'
        }
      },
      400: {
        fontSize: '16px',
        lineHeight: '20px',
        [mediaQueries.lg]: {
          fontSize: '16px',
          lineHeight: '20px'
        }
      },
      300: {
        fontSize: '15px',
        lineHeight: '18px',
        [mediaQueries.lg]: {
          fontSize: '14px',
          lineHeight: '18px'
        }
      },
      200: {
        fontSize: '14px',
        lineHeight: '18px',
        [mediaQueries.lg]: {
          fontSize: '13px',
          lineHeight: '16px'
        }
      },
      100: {
        fontSize: '12px',
        lineHeight: '16px',
        [mediaQueries.lg]: {
          fontSize: '12px',
          lineHeight: '16px'
        }
      }
    }
  }
}

export const Paragraph = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      500: {
        fontSize: '18px',
        lineHeight: '24px',
        [mediaQueries.lg]: {
          fontSize: '20px',
          lineHeight: '24px'
        }
      },
      400: {
        fontSize: '16px',
        lineHeight: '24px',
        [mediaQueries.lg]: {
          fontSize: '16px',
          lineHeight: '24px'
        }
      },
      300: {
        fontSize: '15px',
        lineHeight: '24px',
        [mediaQueries.lg]: {
          fontSize: '14px',
          lineHeight: '24px'
        }
      }
    }
  }
}
