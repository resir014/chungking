import * as CSS from 'csstype'
import { Theme, RequiredTheme, system, ResponsiveValue } from 'styled-system'

export interface TextDecorationProps<ThemeType extends Theme = RequiredTheme> {
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration, ThemeType>
}

export const textDecoration = system({ textDecoration: true })

export interface TextTransformProps<ThemeType extends Theme = RequiredTheme> {
  textTransform?: ResponsiveValue<CSS.Property.TextTransform, ThemeType>
}

export const textTransform = system({
  textTransform: true
})
