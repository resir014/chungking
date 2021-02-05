/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { AllSystemProps, allSystemProps, pseudo, PseudoProps, variant } from '../../system'
import { TypographyBaseProps } from './TypographyBase'

export type ParagraphScale = 500 | 400 | 300

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
    scale: 'components.Paragraph.scales.variants'
  }),
  allSystemProps,
  pseudo
)

Paragraph.displayName = 'Paragraph'
