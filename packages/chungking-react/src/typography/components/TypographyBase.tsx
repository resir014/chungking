/* eslint-disable no-underscore-dangle */
import * as React from 'react'

import { AllSystemProps, PseudoProps, SxProps } from '../../system'

export type TypeScale = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100

export interface TypographyBaseProps extends AllSystemProps, PseudoProps, SxProps {
  /** Additional CSS classes to add to the component. */
  className?: string
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties
  /** Size value of the text. */
  variant?: TypeScale
  /** Color value of the text. */
  color?: string
}
