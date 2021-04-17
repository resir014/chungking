import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { allSystemProps, pseudo, sxMixin } from '../../system'
import { TypographyBaseProps } from './TypographyBase'

export type TextProps = TypographyBaseProps

/**
 * Text component provided as a styled component primitive.
 */
export const Text = styled('span', { shouldForwardProp })<TypographyBaseProps>(allSystemProps, pseudo, sxMixin)

Text.displayName = 'Text'
