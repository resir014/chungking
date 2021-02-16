import * as React from 'react'

import { Space } from '../../theme'
import { Box, BoxProps } from '../box'

export interface StackProps extends Omit<BoxProps, 'color'> {
  id?: string
  className?: string
  style?: React.CSSProperties
  spacing?: Space | number
  [key: string]: any
}

const Stack: React.FC<StackProps> = ({ children, spacing, ...rest }) => {
  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement)

  return (
    <Box {...rest}>
      {validChildrenArray.map((child, index) => {
        const isFirstChild = index === 0
        const spacingProps = { key: index, mt: isFirstChild ? null : spacing }
        return React.cloneElement(child, spacingProps)
      })}
    </Box>
  )
}

Stack.displayName = 'Stack'

export default Stack
