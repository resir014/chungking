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
import { pseudoSelectors } from './utils'

export type AllStyledProps = LayoutProps &
  FlexboxProps &
  PositionProps &
  GridProps &
  SpaceProps &
  BackgroundProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps

export type ExtendedBoxProps = Partial<Record<keyof typeof pseudoSelectors, AllStyledProps>>
