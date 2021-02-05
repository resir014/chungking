import foundations from './foundations'
import components from './components'

export const theme = {
  ...foundations,
  components
}

export type Theme = typeof theme

export type Color = keyof Theme['colors']
export type Space = keyof Theme['space']
