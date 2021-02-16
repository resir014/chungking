import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { allSystemProps, pseudo } from '../../system'
import { getComponentStyles } from '../../system/utils/components'
import { TypographyBaseProps } from './TypographyBase'

export type HeadingProps = TypographyBaseProps

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2', { shouldForwardProp })<TypographyBaseProps>(getComponentStyles('heading'), allSystemProps, pseudo)

Heading.defaultProps = {
  fontWeight: 600
}

Heading.displayName = 'Heading'

export default Heading
