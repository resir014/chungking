/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { AllSystemProps, allSystemProps, pseudo, PseudoProps } from '../../system'
import { getComponentStyles } from '../../system/utils/components'
import { TypographyBaseProps } from './TypographyBase'

export type ParagraphScale = 'larger' | 'base' | 'smaller'

export interface ParagraphProps extends AllSystemProps, PseudoProps, Omit<TypographyBaseProps, 'variant'> {
  /** Size value of the paragraph. */
  variant?: ParagraphScale
  /** Color value of the text. */
  color?: string
}

/**
 * Paragraph component provided as a styled component primitive.
 */
export const Paragraph = styled('p', { shouldForwardProp })<ParagraphProps>(getComponentStyles('paragraph'), allSystemProps, pseudo)

Paragraph.defaultProps = {
  variant: 'base'
}

Paragraph.displayName = 'Paragraph'
