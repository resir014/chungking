import React from 'react'
import { Story, Meta } from '@storybook/react'

import Badge, { BadgeProps } from './Badge'
import { theme } from '../../theme'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outline', 'solid', 'subtle']
      }
    },
    colorScheme: {
      control: {
        type: 'select',
        options: Object.keys(theme.colors).filter((color) => color !== 'white' && color !== 'black')
      }
    }
  }
} as Meta<BadgeProps>

const Template: Story<BadgeProps> = (args) => <Badge {...args}>example</Badge>

export const Example = Template.bind({})
Example.args = {
  variant: 'solid',
  colorScheme: 'grey'
}
