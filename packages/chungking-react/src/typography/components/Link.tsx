import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'

import { getComponentStyles } from '../../system/utils/components'
import { allSystemProps, pseudo } from '../../system'
import { TextProps } from './Text'

export type AnchorProps = TextProps

/**
 * Anchor component provided as a styled component primitive.
 */
const Link = styled('a', { shouldForwardProp })<AnchorProps>(getComponentStyles('link'), allSystemProps, pseudo)

Link.displayName = 'Anchor'

/** @deprecated use `Link` instead */
export const Anchor = Link

export default Link
