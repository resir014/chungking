import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { allSystemProps, pseudo, sxMixin } from '../../system'
import { getComponentStyles } from '../../system/utils/components'
import { TypographyBaseProps } from './TypographyBase'

export type TextProps = TypographyBaseProps

/**
 * Text component provided as a styled component primitive.
 */
export const Text = styled('span', { shouldForwardProp })<TypographyBaseProps>(getComponentStyles('text'), allSystemProps, pseudo, sxMixin)

Text.displayName = 'Text'
