import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']
      }
    }
  }
} as Meta<Pick<HeadingProps, 'variant'>>

export const Example: Story<Pick<HeadingProps, 'variant'>> = ({ ...args }) => {
  return <Heading {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
}
Example.args = {
  variant: 'base'
}
