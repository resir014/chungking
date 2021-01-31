/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import styled from '@emotion/styled'
import { get } from '@spicy-ui/styled-system'

import { Space } from '../../utils'
import { Box, BoxProps } from '../box'

export interface InlineProps extends Omit<BoxProps, 'color'> {
  id?: string
  className?: string
  style?: React.CSSProperties
  color?: string
  spacing?: Space
}

const Root = styled(Box)<InlineProps>`
  ${({ theme, spacing }) => spacing && `margin-top: -${get(theme, `space.${spacing}`)}px;`}
`

const Inner = styled(Box)<InlineProps>`
  ${({ theme, spacing }) => spacing && `margin-left: -${get(theme, `space.${spacing}`)}px;`}
`

const Inline: React.FC<InlineProps> = ({ children, spacing, alignItems, ...rest }) => {
  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement)

  return (
    <Root spacing={spacing} {...rest}>
      <Inner display="flex" flexWrap="wrap" alignItems={alignItems} spacing={spacing}>
        {validChildrenArray.map((child, i) => {
          const spacingProps = { mt: spacing, ml: spacing, mb: 0, mr: 0 }
          if (typeof child === 'string' || child.type === React.Fragment) {
            return (
              <Box key={`inline-child-${i}`} {...spacingProps}>
                {child}
              </Box>
            )
          }

          return React.cloneElement(child, spacingProps)
        })}
      </Inner>
    </Root>
  )
}

Inline.defaultProps = {
  spacing: 'sm'
}

Inline.displayName = 'Inline'

export default Inline
