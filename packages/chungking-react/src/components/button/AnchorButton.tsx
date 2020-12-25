import * as React from 'react'
import { transparentize } from 'polished'
import { variant as styledSystemVariant } from 'styled-system'
import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import classnames from 'clsx'

import { ButtonBaseProps, AnchorButtonProps } from './types'
import { ButtonBase } from './styled'
import { buttonVariants, buttonSizes } from './variants'

const Root = styled('a')<ButtonBaseProps>`
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
`

const AnchorButton: React.ForwardRefRenderFunction<HTMLAnchorElement, AnchorButtonProps> = (
  { id, className, style, children, variant = 'default', size = 'md', ...rest },
  ref
) => {
  return (
    <Root id={id} className={classnames(className)} style={style} ref={ref} variant={variant} size={size} {...rest}>
      {children}
    </Root>
  )
}

export default React.forwardRef(AnchorButton)
