/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { variant } from 'styled-system'
import { allSystemProps, pseudoSystemProps } from '../../../system'
import { ParagraphScale, paragraphScale } from '../../../utils'
import { TypographyBaseProps } from './TypographyBase'

export interface ParagraphProps extends Omit<TypographyBaseProps, 'variant'> {
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
  allSystemProps,
  pseudoSystemProps
)

Paragraph.displayName = 'Paragraph'
