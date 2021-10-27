import { transparentize } from 'polished'
import { ComponentThemeConfig } from '../../system'

export const Paragraph: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      larger: {
        fontSize: ['xl', null, '2xl'],
        lineHeight: ['xl', null, '2xl']
      },
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

export const Link: ComponentThemeConfig = {
  baseStyle: ({ theme }) => ({
    color: theme.colors.turquoise[400],
    textDecoration: ['underline', 'none'],
    '& strong': {
      color: 'inherit'
    },
    '&:hover, &:focus': {
      textDecoration: 'underline'
    },
    '&:focus': {
      boxShadow: `${transparentize(0.4, theme.colors.green[500])} 0 0 0 3px`
    }
  })
}

export const Text: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      '9xl': {
        fontSize: '9xl',
        lineHeight: '9xl'
      },
      '8xl': {
        fontSize: '8xl',
        lineHeight: '8xl'
      },
      '7xl': {
        fontSize: '7xl',
        lineHeight: '7xl'
      },
      '6xl': {
        fontSize: '6xl',
        lineHeight: '6xl'
      },
      '5xl': {
        fontSize: '5xl',
        lineHeight: '5xl'
      },
      '4xl': {
        fontSize: '4xl',
        lineHeight: '4xl'
      },
      '3xl': {
        fontSize: '3xl',
        lineHeight: '3xl'
      },
      '2xl': {
        fontSize: '2xl',
        lineHeight: '2xl'
      },
      xl: {
        fontSize: 'xl',
        lineHeight: 'xl'
      },
      lg: {
        fontSize: 'lg',
        lineHeight: 'lg'
      },
      md: {
        fontSize: 'md',
        lineHeight: 'md'
      },
      base: {
        fontSize: 'md',
        lineHeight: 'md'
      },
      sm: {
        fontSize: 'sm',
        lineHeight: 'sm'
      },
      xs: {
        fontSize: 'xs',
        lineHeight: 'xs'
      }
    }
  }
}
