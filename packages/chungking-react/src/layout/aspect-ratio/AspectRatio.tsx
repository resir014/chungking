import * as React from 'react'
import styled from '@emotion/styled'
import { Box, BoxProps } from '../../foundations'

export interface AspectRatioProps extends React.PropsWithChildren<BoxProps> {
  ratio?: number
}

const Root = styled(Box)<AspectRatioProps>`
  position: relative;

  &:before {
    height: 0;
    content: '';
    display: block;
    padding-bottom: calc(100% / (${(props) => props.ratio}));
  }

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  & > img,
  & > video {
    object-fit: cover;
  }
`

/** AspectRatio is used to embed responsive elements, such as images, videos, etc. */
const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(({ ratio = 4 / 3, children, ...rest }, ref) => {
  return (
    <Root ref={ref} ratio={ratio} {...rest}>
      {children}
    </Root>
  )
})

export default AspectRatio
