import * as React from 'react'
import { themes } from '@storybook/theming'
import { ChungkingProvider } from '../src'

import '../src/styles.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.dark
  }
}

const withThemeProvider = (Story: React.FC) => {
  return (
    <ChungkingProvider>
      <Story />
    </ChungkingProvider>
  )
}

export const decorators = [withThemeProvider]
