import * as React from 'react'
import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'
import { allSystemProps, AllSystemProps, getComponentStyles, pseudo, PseudoProps, sxMixin, SxProps } from '../../system'
import { theme } from '../../theme'

type ColorScheme = keyof Omit<typeof theme.colors, 'white' | 'black'>

export interface BadgeProps extends AllSystemProps, PseudoProps, SxProps {
  className?: string
  style?: React.CSSProperties
  variant?: 'outline' | 'solid' | 'subtle'
  colorScheme?: ColorScheme
  color?: string
  children?: React.ReactNode
}

/**
 * Text component provided as a styled component primitive.
 */
const Badge = styled('span', { shouldForwardProp })<BadgeProps>(getComponentStyles('Badge'), allSystemProps, pseudo, sxMixin)

Badge.displayName = 'Text'

Badge.defaultProps = {
  variant: 'solid',
  colorScheme: 'grey'
}

export default Badge
