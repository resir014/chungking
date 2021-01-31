import deepmerge from 'deepmerge'
import * as React from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme as defaultTheme, Theme } from '../utils'
import GlobalStyles from './GlobalStyles'

export interface ChungkingProviderProps {
  /** Custom theme to be merged with the default theme. */
  theme?: Partial<Theme>
}

const ChungkingProvider: React.FC<ChungkingProviderProps> = ({ children, theme = {} }) => {
  const mergedTheme = React.useMemo(() => deepmerge(defaultTheme, theme), [theme])

  return (
    <ThemeProvider theme={mergedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default ChungkingProvider
