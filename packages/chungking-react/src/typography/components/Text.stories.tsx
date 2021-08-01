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
        options: [undefined, ...Object.keys(theme.fontSizes)]
      }
    },
    lineHeight: {
      control: {
        type: 'select',
        options: [undefined, ...Object.keys(theme.lineHeights)]
      }
    },
    variant: {
      control: {
        type: 'select',
        options: [undefined, 'xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']
      }
    }
  }
} as Meta<TextProps>

export const Example: Story<TextProps> = (args) => {
  return <Text {...args}>I am a text!</Text>
}

export const PseudoProps: Story<TextProps> = (args) => {
  return (
    <Text textDecoration="none" _hover={{ color: 'green.500', textDecoration: 'underline' }} {...args}>
      I am a text!
    </Text>
  )
}
