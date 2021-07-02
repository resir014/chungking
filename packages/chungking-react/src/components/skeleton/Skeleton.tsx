import * as React from 'react'
import { Box, BoxProps } from '../../layout'
import { useComponentStyles } from '../../system'

export interface SkeletonProps extends Omit<BoxProps, 'color' | 'backgroundColor'> {
  className?: string
  style?: React.CSSProperties
}

const Skeleton: React.FC<SkeletonProps> = React.forwardRef<HTMLDivElement, SkeletonProps>(({ className, style, sx, ...rest }, ref) => {
  const styles = useComponentStyles('Skeleton')

  return <Box ref={ref} className={className} style={style} sx={{ ...styles, ...sx }} {...rest} />
})

export default Skeleton
