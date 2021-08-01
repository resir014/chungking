import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { allSystemProps, getComponentStyles, pseudo, sxMixin } from '../../system'
import { TypographyBaseProps } from './TypographyBase'

export type TextVariants = 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'

export interface TextProps extends TypographyBaseProps {
  /** Size value of the paragraph. */
  variant?: TextVariants
  /** Color value of the text. */
  color?: string
}

/**
 * Text component provided as a styled component primitive.
 */
export const Text = styled('span', { shouldForwardProp })<TextProps>(getComponentStyles('Text'), allSystemProps, pseudo, sxMixin)

Text.displayName = 'Text'
