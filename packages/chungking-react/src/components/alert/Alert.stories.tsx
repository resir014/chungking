import React from 'react'
import { Story, Meta } from '@storybook/react'

import Alert, { AlertProps } from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'warning', 'error']
      }
    },
    children: {
      control: 'text'
    }
  }
} as Meta<AlertProps>

const Template: Story<AlertProps> = (args) => <Alert {...args} />

export const Example = Template.bind({})
Example.args = {
  variant: 'default',
  children: 'This is an example message.'
}
