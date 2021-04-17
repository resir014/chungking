import { Theme } from '@emotion/react'
import { ComponentThemeConfig } from '../types'

export const paragraph: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      larger: ({ theme }) => ({
        fontSize: 'xl',
        lineHeight: 'base',
        [theme.mediaQueries.lg]: {
          fontSize: '2xl'
        }
      }),
      base: {
        fontSize: 'base',
        lineHeight: 'base'
      },
      smaller: {
        fontSize: 'xs',
        lineHeight: 'base'
      }
    }
  }
}

export const link: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: Theme }) => ({
    color: theme.colors.turquoise[400],
    textDecoration: 'underline',
    [theme.mediaQueries.md]: {
      textDecoration: 'none'
    },
    '& strong': {
      color: 'inherit'
    },
    '&:hover, &:focus': {
      textDecoration: 'underline'
    }
  })
}

export const heading: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      900: ({ theme }) => ({
        fontSize: '32px',
        lineHeight: '36px',
        [theme.mediaQueries.lg]: {
          fontSize: '44px',
          lineHeight: '48px'
        }
      }),
      800: ({ theme }) => ({
        fontSize: '24px',
        lineHeight: '28px',
        [theme.mediaQueries.lg]: {
          fontSize: '32px',
          lineHeight: '36px'
        }
      }),
      700: ({ theme }) => ({
        fontSize: '22px',
        lineHeight: '26px',
        [theme.mediaQueries.lg]: {
          fontSize: '28px',
          lineHeight: '32px'
        }
      }),
      600: ({ theme }) => ({
        fontSize: '20px',
        lineHeight: '24px',
        [theme.mediaQueries.lg]: {
          fontSize: '24px',
          lineHeight: '28px'
        }
      }),
      500: ({ theme }) => ({
        fontSize: '18px',
        lineHeight: '22px',
        [theme.mediaQueries.lg]: {
          fontSize: '20px',
          lineHeight: '24px'
        }
      }),
      body: ({ theme }) => ({
        fontSize: '16px',
        lineHeight: '24px',
        [theme.mediaQueries.lg]: {
          fontSize: '16px',
          lineHeight: '24px'
        }
      }),
      400: ({ theme }) => ({
        fontSize: '16px',
        lineHeight: '20px',
        [theme.mediaQueries.lg]: {
          fontSize: '16px',
          lineHeight: '20px'
        }
      }),
      300: ({ theme }) => ({
        fontSize: '15px',
        lineHeight: '18px',
        [theme.mediaQueries.lg]: {
          fontSize: '14px',
          lineHeight: '18px'
        }
      }),
      200: ({ theme }) => ({
        fontSize: '14px',
        lineHeight: '18px',
        [theme.mediaQueries.lg]: {
          fontSize: '13px',
          lineHeight: '16px'
        }
      }),
      100: ({ theme }) => ({
        fontSize: '12px',
        lineHeight: '16px',
        [theme.mediaQueries.lg]: {
          fontSize: '12px',
          lineHeight: '16px'
        }
      })
    }
  }
}
