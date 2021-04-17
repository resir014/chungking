import { Theme } from '@emotion/react'
import { ComponentThemeConfig } from '../types'

export const paragraph: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      larger: {
        fontSize: ['xl', null, '2xl'],
        lineHeight: [1.2, null, 1.5]
      },
      base: {
        fontSize: 'base',
        lineHeight: 1.5
      },
      smaller: {
        fontSize: 'xs',
        lineHeight: 2
      }
    }
  }
}

export const link: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: Theme }) => ({
    color: theme.colors.turquoise[400],
    textDecoration: ['underline', 'none'],
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
      '4xl': {
        fontSize: ['6xl', null, '7xl'],
        lineHeight: 1
      },
      '3xl': {
        fontSize: ['5xl', null, '6xl'],
        lineHeight: 1
      },
      '2xl': {
        fontSize: ['4xl', null, '5xl'],
        lineHeight: [1.2, null, 1]
      },
      xl: {
        fontSize: ['3xl', null, '4xl'],
        lineHeight: [1.33, null, 1.2]
      },
      lg: {
        fontSize: ['2xl', null, '3xl'],
        lineHeight: [1.33, null, 1.2]
      },
      base: { fontSize: 'xl', lineHeight: 1.2 },
      md: { fontSize: 'xl', lineHeight: 1.2 },
      sm: { fontSize: 'md', lineHeight: 1.2 },
      xs: { fontSize: 'sm', lineHeight: 1.2 }
    }
  }
}
