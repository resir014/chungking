import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import Anchor from './Anchor'

export default {
  title: 'Components/Anchor',
  component: Anchor,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [500, 400, 300]
      }
    }
  }
} as Meta

export const Example: Story = ({ ...args }) => {
  return <Anchor {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Anchor>
}
Example.args = {
  variant: 400,
  href: 'https://www.youtube.com/watch?v=P_mQpbCSQOo',
  target: '_blank',
  rel: 'noopener noreferrer'
}
