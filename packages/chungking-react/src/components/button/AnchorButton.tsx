import * as React from 'react'
import { transparentize } from 'polished'
import styled from '@emotion/styled'
import { get, sfp } from '@spicy-ui/styled-system'
import classnames from 'clsx'

import { variant as styledSystemVariant } from '../../system'
import { ButtonBaseProps, AnchorButtonProps } from './types'
import { ButtonBase } from './styled'
import { buttonVariants, buttonSizes } from './variants'

export const anchorButtonProps = ['size']

const Root = styled('a', { shouldForwardProp: sfp(anchorButtonProps) })<ButtonBaseProps>`
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
      box-shadow: 0 0 0 3px ${({ theme }) => transparentize(0.4, get(theme, 'colors.turquoise.400'))};
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
