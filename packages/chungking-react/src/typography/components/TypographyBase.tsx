/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'

import { TypeScale, typeScale } from '../../theme'
import { AllSystemProps, allSystemProps, pseudo, PseudoProps, variant } from '../../system'

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
    variants: typeScale
  }),
  allSystemProps,
  pseudo
)

TypographyBase.displayName = 'TypographyBase'
