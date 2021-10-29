import type { Theme } from '@emotion/react'

// eslint-disable-next-line @typescript-eslint/ban-types
type CSSObject = object // TODO

export type ComponentThemeScaleFn<P> = (props: P & { theme: Theme }) => CSSObject

// FIXME was SystemStyleObject
export type ComponentThemeScale<P> = CSSObject | ComponentThemeScaleFn<P>

export type ComponentThemeConfig<Props = Record<string, any>> = {
  propToScaleMap?: Array<[string, string]>
  baseStyle?: ComponentThemeScale<Props>
  scales?: {
    [scale: string]: {
      [key: string]: ComponentThemeScale<Props> | undefined
    }
  }
}

export type GlobalTheme<Props = Record<string, any>> = {
  global?: CSSObject | ComponentThemeScaleFn<Props>
}
