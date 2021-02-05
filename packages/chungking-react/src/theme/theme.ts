import foundations from './foundations'
import { typeScale, paragraphScale } from './variables'

export const theme = {
  ...foundations,
  paragraphScale,
  typeScale
}

export type Theme = typeof theme

export type Color = keyof Theme['colors']
export type ParagraphScale = keyof Theme['paragraphScale']
export type Space = keyof Theme['space']
export type TypeScale = keyof Theme['typeScale']
