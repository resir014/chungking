/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react'
import { theme } from '../../src/theme'

type DefaultTheme = typeof theme

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}
