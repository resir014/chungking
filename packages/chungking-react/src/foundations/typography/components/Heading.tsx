import { TypographyBase, TypographyBaseProps } from './TypographyBase'

export type HeadingProps = TypographyBaseProps

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = TypographyBase.withComponent('h2')

Heading.defaultProps = {
  fontWeight: 600
}

Heading.displayName = 'Heading'

export default Heading
