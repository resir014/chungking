import * as React from 'react'
import { useComponentStyles } from '../../system'
import { Box, BoxProps } from '../../layout'

export interface AlertProps extends BoxProps {
  className?: string
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  children?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, children, variant = 'default', sx, ...rest }, ref) => {
  const styles = useComponentStyles('Alert', { variant })

  return (
    <Box ref={ref} className={className} boxShadow="single" sx={{ ...styles, ...sx }} {...rest}>
      {children}
    </Box>
  )
})

export default Alert
