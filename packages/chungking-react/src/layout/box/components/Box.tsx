/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import styled from '@emotion/styled'
import css, { SystemStyleObject } from '@styled-system/css'
import { Color } from '../../../utils'
import { systemProps, pseudoSelectors, shouldForwardProp, AllSystemProps, ExtendedSystemProps } from '../../../system'

export interface BoxProps extends AllSystemProps, ExtendedSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties
  /** Override color props */
  color?: Color | string
}

/**
 * Box is a primitive component with all styled-system hooks added to it. You can use it as a
 * base component for all display elements.
 */
export const Box = styled('div', {
  shouldForwardProp
})<BoxProps>(
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

Box.displayName = 'Box'
