import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [900, 800, 700, 600, 500, 400, 300, 200, 100]
      }
    }
  }
} as Meta<TextProps>

export const Example: Story<TextProps> = (args) => {
  return <Text {...args}>I am a text!</Text>
}
Example.args = {
  variant: 400
}

export const PseudoProps: Story<TextProps> = (args) => {
  return (
    <Text textDecoration="none" _hover={{ color: 'green.500', textDecoration: 'underline' }} {...args}>
      I am a text!
    </Text>
  )
}
PseudoProps.args = Example.args
