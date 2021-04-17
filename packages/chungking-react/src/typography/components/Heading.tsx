import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { allSystemProps, pseudo } from '../../system'
import { getComponentStyles } from '../../system/utils/components'
import { TypographyBaseProps } from './TypographyBase'

export type HeadingScale = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100

export interface HeadingProps extends TypographyBaseProps {
  variant?: HeadingScale
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2', { shouldForwardProp })<HeadingProps>(getComponentStyles('heading'), allSystemProps, pseudo)

Heading.defaultProps = {
  variant: 800,
  fontWeight: 600
}

Heading.displayName = 'Heading'

export default Heading
