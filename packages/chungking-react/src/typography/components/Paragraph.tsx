/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { AllSystemProps, allSystemProps, pseudo, PseudoProps, variant } from '../../system'
import { ParagraphScale, paragraphScale } from '../../theme'
import { TypographyBaseProps } from './TypographyBase'

export interface ParagraphProps extends AllSystemProps, PseudoProps, Omit<TypographyBaseProps, 'variant'> {
  /** Size value of the paragraph. */
  variant?: ParagraphScale
  /** Color value of the text. */
  color?: string
}

/**
 * Paragraph component provided as a styled component primitive.
 */
export const Paragraph = styled('span', { shouldForwardProp })<TypographyBaseProps>(
  variant({
    prop: 'variant',
    variants: paragraphScale
  }),
  allSystemProps,
  pseudo
)

Paragraph.displayName = 'Paragraph'
