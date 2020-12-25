import * as React from 'react'
import { transparentize } from 'polished'
import { variant as styledSystemVariant } from 'styled-system'
import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import { ButtonBase, DisabledButtonStyles } from './styled'
import { ButtonBaseProps, ButtonProps } from './types'
import { buttonSizes, buttonVariants } from './variants'

const Root = styled('button')<ButtonBaseProps>`
  ${ButtonBase}

  ${styledSystemVariant({
    prop: 'size',
    variants: buttonSizes
  })}

  &:not(:disabled):not(.disabled) {
    ${styledSystemVariant({
      variants: buttonVariants
    })}

    &:focus,
    &:active {
      box-shadow: 0 0 0 3px ${(props) => transparentize(0.4, themeGet('colors.turquoise.400')(props))};
    }
  }

  ${DisabledButtonStyles}
`

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { id, className, style, disabled, children, type = 'button', variant = 'default', size = 'md', ...rest },
  ref
) => {
  return (
    <Root id={id} ref={ref} type={type} className={className} style={style} disabled={disabled} variant={variant} size={size} {...rest}>
      {children}
    </Root>
  )
}

export default React.forwardRef(Button)
