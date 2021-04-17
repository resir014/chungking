import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { theme } from '../../theme'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: Object.keys(theme.fontSizes)
      }
    },
    lineHeight: {
      control: {
        type: 'select',
        options: Object.keys(theme.lineHeights)
      }
    }
  }
} as Meta<TextProps>

export const Example: Story<TextProps> = (args) => {
  return <Text {...args}>I am a text!</Text>
}

Example.args = {
  fontSize: 'base',
  lineHeight: 'none'
}

export const PseudoProps: Story<TextProps> = (args) => {
  return (
    <Text textDecoration="none" _hover={{ color: 'green.500', textDecoration: 'underline' }} {...args}>
      I am a text!
    </Text>
  )
}
PseudoProps.args = Example.args
