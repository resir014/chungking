import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Paragraph, ParagraphProps } from './Paragraph'

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['larger', 'base', 'smaller']
      }
    }
  }
} as Meta<Pick<ParagraphProps, 'variant'>>

export const Example: Story<Pick<ParagraphProps, 'variant'>> = ({ ...args }) => {
  return (
    <Paragraph {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos ipsam esse aspernatur quo, magnam odio doloremque quibusdam nam
      voluptas, reprehenderit aut animi nobis illum voluptatibus voluptatum possimus laboriosam numquam. Repudiandae nobis, earum reiciendis
      esse molestias laboriosam quae sit perspiciatis.
    </Paragraph>
  )
}
Example.args = {
  variant: 'base'
}
