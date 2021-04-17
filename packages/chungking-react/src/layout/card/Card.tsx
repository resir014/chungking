import * as React from 'react'
import styled from '@emotion/styled'
import { sfp } from '@spicy-ui/styled-system'

import { allSystemProps, AllSystemProps, pseudo, PseudoProps, sxMixin, SxProps } from '../../system'
import { getComponentStyles } from '../../system/utils'

export type CardElevation = 'single' | 'double'

export interface CardProps extends AllSystemProps, PseudoProps, SxProps, React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes to add to the component. */
  className?: string
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties
  /** Override color props */
  color?: string
  /** Elevation value of card. `single` or `double` */
  elevation?: CardElevation
}

export const cardProps = ['elevation']

const Root = styled('div', { shouldForwardProp: sfp(cardProps) })<CardProps>(getComponentStyles('Card'), allSystemProps, pseudo, sxMixin)

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, style, children, elevation = 'single', ...rest }, ref) => {
  return (
    <Root ref={ref} className={className} style={style} elevation={elevation} borderRadius={8} {...rest}>
      {children}
    </Root>
  )
})

Card.displayName = 'Card'

export default Card
