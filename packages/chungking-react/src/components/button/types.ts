import * as React from 'react'
import { AllSystemProps, PseudoProps, SxProps } from '../../system'

export type ButtonVariant = 'default' | 'primary' | 'danger'

export interface ButtonBaseProps extends AllSystemProps, PseudoProps, SxProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  color?: string
  disabled?: boolean
}

export type ButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>
export type AnchorButtonProps = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
