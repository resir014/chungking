import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { allSystemProps, pseudo } from '../../system'
import { getComponentStyles } from '../../system/utils/components'
import { TypographyBaseProps } from './TypographyBase'

export type HeadingVariants = 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

export interface HeadingProps extends TypographyBaseProps {
  variant?: HeadingVariants
}

/**
 * Heading component provided as a styled component primitive.
 */
const Heading = styled('h2', { shouldForwardProp })<HeadingProps>(getComponentStyles('heading'), allSystemProps, pseudo)

Heading.defaultProps = {
  variant: 'base',
  fontWeight: 600
}

Heading.displayName = 'Heading'

export default Heading
