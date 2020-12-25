/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import css, { SystemStyleObject } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { variant } from 'styled-system'
import { pseudoSelectors, systemProps } from '../../../system'
import { ParagraphScale, paragraphScale } from '../../../utils'
import { TypographyProps } from './Typography'

export interface ParagraphProps extends Omit<TypographyProps, 'variant'> {
  /** Size value of the paragraph. */
  variant?: ParagraphScale
}

/**
 * Paragraph component provided as a styled component primitive.
 */
export const Paragraph = styled('span', { shouldForwardProp })<TypographyProps>(
  variant({
    prop: 'variant',
    variants: paragraphScale
  }),
  systemProps,
  ({
    _after,
    _focus,
    _selected,
    _focusWithin,
    _hover,
    _invalid,
    _active,
    _disabled,
    _grabbed,
    _pressed,
    _expanded,
    _visited,
    _before,
    _readOnly,
    _first,
    _notFirst,
    _notLast,
    _last,
    _placeholder,
    _checked,
    _groupHover,
    _mixed,
    _odd,
    _even
  }) =>
    css({
      [pseudoSelectors._hover]: _hover,
      [pseudoSelectors._focus]: _focus,
      [pseudoSelectors._active]: _active,
      [pseudoSelectors._visited]: _visited,
      [pseudoSelectors._disabled]: _disabled,
      [pseudoSelectors._selected]: _selected,
      [pseudoSelectors._invalid]: _invalid,
      [pseudoSelectors._expanded]: _expanded,
      [pseudoSelectors._grabbed]: _grabbed,
      [pseudoSelectors._readOnly]: _readOnly,
      [pseudoSelectors._first]: _first,
      [pseudoSelectors._notFirst]: _notFirst,
      [pseudoSelectors._notLast]: _notLast,
      [pseudoSelectors._last]: _last,
      [pseudoSelectors._odd]: _odd,
      [pseudoSelectors._even]: _even,
      [pseudoSelectors._mixed]: _mixed,
      [pseudoSelectors._checked]: _checked,
      [pseudoSelectors._pressed]: _pressed,
      [pseudoSelectors._groupHover]: _groupHover,
      [pseudoSelectors._before]: _before,
      [pseudoSelectors._after]: _after,
      [pseudoSelectors._focusWithin]: _focusWithin,
      [pseudoSelectors._placeholder]: _placeholder
    } as SystemStyleObject)
)

Paragraph.displayName = 'Paragraph'
