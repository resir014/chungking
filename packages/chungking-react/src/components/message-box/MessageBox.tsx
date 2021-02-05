import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { variant } from '../../system'
import { theme } from '../../theme'
import { Box, BoxProps } from '../../layout'

export interface MessageBoxProps extends BoxProps {
  className?: string
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  children?: React.ReactNode
}

const Root = styled(Box)<MessageBoxProps>`
  padding: ${theme.space.md}px;
  border-left: 2px solid transparent;

  ${variant({
    prop: 'variant',
    variants: {
      default: {
        borderLeftColor: 'grey.500',
        backgroundColor: transparentize(0.75, theme.colors.grey[500]),
        '& a': {
          color: 'turquoise.400'
        }
      },
      primary: {
        borderLeftColor: 'blue.500',
        backgroundColor: transparentize(0.75, theme.colors.blue[500]),
        '& a': {
          color: 'turquoise.400'
        }
      },
      success: {
        borderLeftColor: 'green.500',
        backgroundColor: transparentize(0.75, theme.colors.green[500]),
        '& a': {
          color: 'turquoise.400'
        }
      },
      warning: {
        borderLeftColor: 'orange.500',
        backgroundColor: transparentize(0.75, theme.colors.orange[500]),
        '& a': {
          color: 'orange.400'
        }
      },
      error: {
        borderLeftColor: 'red.500',
        backgroundColor: transparentize(0.75, theme.colors.red[500]),
        '& a': {
          color: 'orange.400'
        }
      }
    }
  })}
`

const MessageBox: React.FC<MessageBoxProps> = ({ className, children, ...rest }) => (
  <Root className={className} boxShadow="single" {...rest}>
    {children}
  </Root>
)

MessageBox.defaultProps = {
  className: undefined,
  variant: 'default'
}

export default MessageBox
