import * as React from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme as defaultTheme } from '../utils'
import { GlobalStyles } from '../global-styles'

export interface ChungkingProviderProps {
  /** Custom theme to be merged with the default theme. */
  theme?: any
}

const ChungkingProvider: React.FC<ChungkingProviderProps> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default ChungkingProvider
