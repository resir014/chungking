import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { allSystemProps, pseudo } from '../../system'
import { getComponentStyles } from '../../system/utils/components'
import { TextVariants } from './Text'
import { TypographyBaseProps } from './TypographyBase'

export interface HeadingProps extends TypographyBaseProps {
  variant?: TextVariants
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2', { shouldForwardProp })<HeadingProps>(getComponentStyles('Text'), allSystemProps, pseudo)

Heading.defaultProps = {
  variant: 'base',
  fontWeight: 600
}

Heading.displayName = 'Heading'

export default Heading
