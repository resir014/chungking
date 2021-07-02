import { Theme } from '@emotion/react'
import { transparentize } from 'polished'
import { ComponentThemeConfig } from '../types'

const Alert: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  baseStyle: () => ({
    padding: 'md',
    borderLeft: '2px solid',
    borderLeftColor: 'transparent'
  }),
  scales: {
    variants: {
      default: ({ theme }: { theme: Theme }) => ({
        borderLeftColor: 'grey.500',
        backgroundColor: transparentize(0.75, theme.colors.grey[500]),
        '& a': {
          color: 'turquoise.400'
        }
      }),
      primary: ({ theme }: { theme: Theme }) => ({
        borderLeftColor: 'blue.500',
        backgroundColor: transparentize(0.75, theme.colors.blue[500]),
        '& a': {
          color: 'turquoise.400'
        }
      }),
      success: ({ theme }: { theme: Theme }) => ({
        borderLeftColor: 'green.500',
        backgroundColor: transparentize(0.75, theme.colors.green[500]),
        '& a': {
          color: 'turquoise.400'
        }
      }),
      warning: ({ theme }: { theme: Theme }) => ({
        borderLeftColor: 'orange.500',
        backgroundColor: transparentize(0.75, theme.colors.orange[500]),
        '& a': {
          color: 'orange.400'
        }
      }),
      error: ({ theme }: { theme: Theme }) => ({
        borderLeftColor: 'red.500',
        backgroundColor: transparentize(0.75, theme.colors.red[500]),
        '& a': {
          color: 'orange.400'
        }
      })
    }
  }
}

export default Alert
