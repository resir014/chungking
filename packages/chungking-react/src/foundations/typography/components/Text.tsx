import { Typography, TypographyProps } from './Typography'

export type TextProps = TypographyProps

/**
 * Text component provided as a styled component primitive.
 */
export const Text = Typography.withComponent('span')

Text.displayName = 'Text'
