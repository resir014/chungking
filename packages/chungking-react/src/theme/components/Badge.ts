import { transparentize } from 'polished'
import { ComponentThemeConfig } from '../../system'

const Badge: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  baseStyle: () => ({
    display: 'inline-flex',
    alignItems: 'center',
    px: 'xxs',
    fontSize: 'sm',
    fontWeight: 500,
    lineHeight: 'short',
    border: '1px solid transparent',
    borderRadius: 4
  }),
  scales: {
    variants: {
      outline: ({ colorScheme: c, theme }) => {
        const darkScheme = transparentize(0.2, theme.colors[c][200])
        return {
          borderColor: darkScheme,
          color: darkScheme
        }
      },
      solid: ({ colorScheme: c, theme }) => {
        const darkScheme = transparentize(0.6, theme.colors[c][500])
        return {
          backgroundColor: darkScheme,
          color: 'white'
        }
      },
      subtle: ({ colorScheme: c, theme }) => {
        return {
          backgroundColor: transparentize(0.85, theme.colors[c][200]),
          color: `${c}.200`
        }
      }
    }
  }
}

export default Badge
