import * as React from 'react'
import { Box, BoxProps } from '../../layout'
import { useComponentStyles } from '../../system'

export type IframeProps = BoxProps & JSX.IntrinsicElements['iframe']

const Iframe = React.forwardRef<HTMLIFrameElement, IframeProps>(({ title, sx, ...rest }, ref) => {
  const styles = useComponentStyles('Iframe')

  return <Box ref={ref} as="iframe" title={title} sx={{ ...styles, ...sx }} {...rest} />
})

export default Iframe
