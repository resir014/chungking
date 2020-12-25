import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button from './Button'
import { ButtonProps } from './types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'danger']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    },
    disabled: {
      control: 'boolean'
    },
    children: {
      control: 'text'
    }
  }
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Example = Template.bind({})
Example.args = {
  variant: 'default',
  size: 'md',
  children: 'Push Me'
}
