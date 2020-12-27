/* eslint-disable no-underscore-dangle */
import * as React from 'react'
import styled from '@emotion/styled'
import { variant } from 'styled-system'
import css, { SystemStyleObject } from '@styled-system/css'

import { TypeScale, Color, typeScale } from '../../../utils'
import { AllSystemProps, ExtendedSystemProps, pseudoSelectors, shouldForwardProp, systemProps } from '../../../system'

export interface TypographyProps extends AllSystemProps, ExtendedSystemProps {
  /** Additional CSS classes to add to the component. */
  className?: string
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties
  /** What HTML element to render the text as. */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  /** Size value of the text. */
  variant?: TypeScale
  /** Color value of the text. */
  color?: Color | string
}

/**
 * This is a base `Text` element to handle typography elements.
 */
export const Typography = styled('span', { shouldForwardProp })<TypographyProps>(
  variant({
    prop: 'variant',
    variants: typeScale
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

Typography.displayName = 'Typography'
