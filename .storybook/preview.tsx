import * as React from 'react'
import { themes } from '@storybook/theming'
import { ChungkingProvider } from '@resir014/chungking-react'

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
