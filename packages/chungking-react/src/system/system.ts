import { system } from 'styled-system'

export interface TextDecorationProps {
  textDecoration?: string | string[]
}

export const textDecoration = system({
  prop: 'textDecoration',
  cssProperty: 'textDecoration'
} as any)

export interface TextTransformProps {
  textTransform?: string | string[]
}

export const textTransform = system({
  prop: 'textTransform',
  cssProperty: 'textTransform'
} as any)
