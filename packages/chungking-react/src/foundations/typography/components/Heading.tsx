import { Typography, TypographyProps } from './Typography'

export type HeadingProps = TypographyProps

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = Typography.withComponent('h2')

Heading.defaultProps = {
  fontWeight: 600
}

Heading.displayName = 'Heading'

export default Heading
