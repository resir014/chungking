import React from 'react'
import { Story, Meta } from '@storybook/react'

import AnchorButton from './AnchorButton'
import { AnchorButtonProps } from './types'

export default {
  title: 'Components/AnchorButton',
  component: AnchorButton,
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
    children: {
      control: 'text'
    },
    href: {
      control: 'text'
    }
  }
} as Meta<AnchorButtonProps>

const Template: Story<AnchorButtonProps> = (args) => <AnchorButton {...args} />

export const Example = Template.bind({})
Example.args = {
  variant: 'default',
  size: 'md',
  children: 'Push Me',
  href: 'https://open.spotify.com/track/09j3qGyo1dt3i7iINMctj0',
  target: '_blank'
}
