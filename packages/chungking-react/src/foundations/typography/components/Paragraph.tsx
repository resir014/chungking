/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import { shouldForwardProp, PseudoProps } from '@spicy-ui/styled-system'
import { variant } from 'styled-system'
import { allSystemProps } from '../../../system'
import { ParagraphScale, paragraphScale } from '../../../utils'
import { TypographyBaseProps } from './TypographyBase'

export interface ParagraphProps extends PseudoProps, Omit<TypographyBaseProps, 'variant'> {
  /** Size value of the paragraph. */
  variant?: ParagraphScale
}

/**
 * Paragraph component provided as a styled component primitive.
 */
export const Paragraph = styled('span', { shouldForwardProp })<TypographyBaseProps>(
  variant({
    prop: 'variant',
    variants: paragraphScale
  }),
  allSystemProps
)

Paragraph.displayName = 'Paragraph'
