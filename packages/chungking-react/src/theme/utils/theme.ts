import { colors, space, fonts, shadows, breakpoints, mediaQueries, typeScale, paragraphScale } from './variables'

export const theme = {
  breakpoints,
  colors,
  fonts,
  mediaQueries,
  paragraphScale,
  shadows,
  space,
  typeScale
}

export type Theme = typeof theme

export type Color = keyof Theme['colors']
export type ParagraphScale = keyof Theme['paragraphScale']
export type Space = keyof Theme['space']
export type TypeScale = keyof Theme['typeScale']
