/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'

import { AllSystemProps, allSystemProps, pseudo, PseudoProps, variant } from '../../system'

export type TypeScale = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100

export interface TypographyBaseProps extends AllSystemProps, PseudoProps {
  /** Additional CSS classes to add to the component. */
  className?: string
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties
  /** Size value of the text. */
  variant?: TypeScale
  /** Color value of the text. */
  color?: string
}

/**
 * This is a base `Text` element to handle typography elements.
 */
export const TypographyBase = styled('span', { shouldForwardProp })<TypographyBaseProps>(
  variant({
    prop: 'variant',
    scale: 'components.Text.scales.variants'
  }),
  allSystemProps,
  pseudo
)

TypographyBase.displayName = 'TypographyBase'
