import * as React from 'react'
import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'

import { getComponentStyles } from '../../system/utils/components'
import { allSystemProps, pseudo } from '../../system'
import { TextProps } from './Text'

export interface LinkProps extends TextProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Is an external link. Adds `target="blank"` and `rel="noopener noreferrer"` attributes if set to `true`. */
  isExternal?: boolean
}

/** @deprecated use `LinkProps` instead */
export type AnchorProps = LinkProps

const Root = styled('a', { shouldForwardProp })<LinkProps>(getComponentStyles('Link'), allSystemProps, pseudo)

/**
 * Anchor component provided as a styled component primitive.
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ target, rel, isExternal, ...rest }, ref) => {
  return <Root ref={ref} target={isExternal ? '_blank' : target} rel={isExternal ? 'noopener noreferrer' : rel} {...rest} />
})

Link.displayName = 'Anchor'

/** @deprecated use `Link` instead */
export const Anchor = Link

export default Link
