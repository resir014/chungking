import * as React from 'react'
import styled from '@emotion/styled'
import { variant } from 'styled-system'

import { Box, BoxProps } from '../../layout'

export interface BadgeProps extends BoxProps {
  className?: string
  style?: React.CSSProperties
  variant?: 'grey' | 'white'
  children?: React.ReactNode
}

const Root = styled(Box)<BadgeProps>`
  padding: 0 4px;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid transparent;
  border-radius: 3px;

  ${variant({
    variants: {
      white: {
        color: '#202340',
        backgroundColor: '#d7d7db'
      },
      grey: {
        color: 'grey.50',
        backgroundColor: 'grey.800'
      }
    }
  })}
`

const Badge: React.ForwardRefRenderFunction<HTMLDivElement, BadgeProps> = (
  { children, className, style, variant = 'white', ...rest },
  ref
) => {
  return (
    <Root ref={ref} as="span" display="inline-flex" alignItems="center" className={className} style={style} variant={variant} {...rest}>
      {children}
    </Root>
  )
}

export default React.forwardRef(Badge)
