import {
  LayoutProps,
  FlexboxProps,
  PositionProps,
  GridProps,
  SpaceProps,
  BackgroundProps,
  ColorProps,
  TypographyProps,
  BorderProps,
  ShadowProps
} from 'styled-system'
import { TextDecorationProps, TextTransformProps } from './system'
import { pseudoSelectors } from './utils'

export type AllSystemProps = LayoutProps &
  FlexboxProps &
  PositionProps &
  GridProps &
  SpaceProps &
  BackgroundProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps &
  TextDecorationProps &
  TextTransformProps

export type ExtendedSystemProps = Partial<Record<keyof typeof pseudoSelectors, AllSystemProps>>
