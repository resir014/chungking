import * as React from 'react'
import styled from '@emotion/styled'
import { variant } from 'styled-system'
import { sfp } from '@spicy-ui/styled-system'

import { Box, BoxProps } from '../../layout'

export type CardElevation = 'single' | 'double'

export interface CardProps extends BoxProps {
  elevation?: CardElevation
  children?: React.ReactNode
}

export const cardProps = ['elevation']

const Root = styled(Box, { shouldForwardProp: sfp(cardProps) })<CardProps>`
  ${variant({
    prop: 'elevation',
    variants: {
      single: {
        boxShadow: 'single'
      },
      double: {
        boxShadow: 'double'
      }
    }
  })}
`

const Card: React.FC<CardProps> = ({ className, style, children, elevation = 'single', ...rest }) => {
  return (
    <Root className={className} style={style} elevation={elevation} borderRadius={8} {...rest}>
      {children}
    </Root>
  )
}

export default Card
