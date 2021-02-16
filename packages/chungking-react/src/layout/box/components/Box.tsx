/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { allSystemProps, AllSystemProps, pseudo, PseudoProps, sxMixin, SxProps } from '../../../system'

export interface BoxProps extends AllSystemProps, PseudoProps, SxProps {
  /** Additional CSS classes to add to the component. */
  className?: string
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties
  /** Override color props */
  color?: string
}

/**
 * Box is a primitive component with all styled-system hooks added to it. You can use it as a
 * base component for all display elements.
 */
export const Box = styled('div', {
  shouldForwardProp
})<BoxProps>(allSystemProps, pseudo, sxMixin)

Box.displayName = 'Box'
