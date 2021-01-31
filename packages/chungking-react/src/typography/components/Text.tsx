import { TypographyBase, TypographyBaseProps } from './TypographyBase'

export type TextProps = TypographyBaseProps

/**
 * Text component provided as a styled component primitive.
 */
export const Text = TypographyBase.withComponent('span')

Text.displayName = 'Text'
