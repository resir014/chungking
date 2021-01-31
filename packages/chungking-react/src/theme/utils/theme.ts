import { colors, space, fonts, shadows, breakpoints, mediaQueries, typeScale, paragraphScale } from './variables'

export const theme = {
  colors,
  space,
  fonts,
  shadows,
  typeScale,
  paragraphScale,
  breakpoints,
  mediaQueries
}

export type Theme = typeof theme

export type Color = keyof Theme['colors']
export type Space = keyof Theme['space']
export type TypeScale = keyof Theme['typeScale']
export type ParagraphScale = keyof Theme['paragraphScale']
