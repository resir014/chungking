/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import styled from '@emotion/styled'
import { Color } from '../../../utils'
import { allSystemProps, shouldForwardProp, AllSystemProps, PseudoSystemProps, pseudoSystemProps } from '../../../system'

export interface BoxProps extends AllSystemProps, PseudoSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties
  /** Override color props */
  color?: Color | string
}

/**
 * Box is a primitive component with all styled-system hooks added to it. You can use it as a
 * base component for all display elements.
 */
export const Box = styled('div', {
  shouldForwardProp
})<BoxProps>(allSystemProps, pseudoSystemProps)

Box.displayName = 'Box'
