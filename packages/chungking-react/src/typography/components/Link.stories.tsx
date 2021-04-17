import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { theme } from '../../theme'
import Link from './Link'

export default {
  title: 'Components/Link',
  component: Link,
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
} as Meta

export const Example: Story = ({ ...args }) => {
  return <Link {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
}

Example.args = {
  fontSize: 'base',
  lineHeight: 'none',
  href: 'https://www.youtube.com/watch?v=P_mQpbCSQOo',
  target: '_blank',
  rel: 'noopener noreferrer'
}
