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
