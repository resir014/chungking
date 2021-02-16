import styled from '@emotion/styled'
import { shouldForwardProp } from '@spicy-ui/styled-system'

import { getComponentStyles } from '../../system/utils/components'
import { allSystemProps, pseudo } from '../../system'
import { TextProps } from './Text'

export type AnchorProps = TextProps

/**
 * Anchor component provided as a styled component primitive.
 */
const Anchor = styled('a', { shouldForwardProp })<AnchorProps>(getComponentStyles('anchor'), allSystemProps, pseudo)

Anchor.displayName = 'Anchor'

export default Anchor
