import * as React from 'react'
import styled from '@emotion/styled'
import { variant } from 'styled-system'

import { Box, BoxProps } from '../../foundations'

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

const Badge: React.FC<BadgeProps> = ({ children, className, style, ...rest }) => {
  return (
    <Root as="span" display="inline-flex" alignItems="center" className={className} style={style} {...rest}>
      {children}
    </Root>
  )
}

Badge.defaultProps = {
  className: undefined,
  style: undefined,
  variant: 'white'
}

export default Badge
