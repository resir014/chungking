import css from '@styled-system/css'
import sfp from '@styled-system/should-forward-prop'
import { layout, flexbox, position, grid, space, background, color, typography, border, shadow, compose } from 'styled-system'
import { textDecoration, textTransform } from './system'
import { AllSystemProps } from './types'

export function shouldForwardProp(prop: string): boolean {
  return sfp(prop) && !['textDecoration', 'textTransform', 'spacing'].includes(prop)
}

export const systemProps = compose(
  layout,
  flexbox,
  position,
  grid,
  space,
  background,
  color,
  typography,
  border,
  shadow,
  textDecoration,
  textTransform
)

export const pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active, &[data-active=true]',
  _focus: '&:focus',
  _visited: '&:visited',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _before: '&:before',
  _after: '&:after',
  _focusWithin: '&:focus-within',
  _placeholder: '&::placeholder',
  _disabled:
    '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  _checked: '&[aria-checked=true]',
  _mixed: '&[aria-checked=mixed]',
  _selected: '&[aria-selected=true]',
  _invalid: '&[aria-invalid=true]',
  _pressed: '&[aria-pressed=true]',
  _readOnly: '&[aria-readonly=true], &[readonly]',
  _first: '&:first-of-type',
  _last: '&:last-of-type',
  _expanded: '&[aria-expanded=true]',
  _grabbed: '&[aria-grabbed=true]',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
  _groupHover: '[role=group]:hover &'
}

export type PseudoSystemProps = Partial<Record<keyof typeof pseudoSelectors, AllSystemProps>>

export function pseudoSystemProps({
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
}: PseudoSystemProps) {
  return css({
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
  })
}
