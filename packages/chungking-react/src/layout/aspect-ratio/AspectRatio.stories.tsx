import React from 'react'
import { Story, Meta } from '@storybook/react'

import AspectRatio, { AspectRatioProps } from './AspectRatio'
import Iframe from '../../components/iframe/Iframe'

export default {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: {
        type: 'select',
        options: [1, 4 / 3, 16 / 9]
      }
    }
  }
} as Meta<AspectRatioProps>

export const WithIframe: Story<AspectRatioProps> = (args) => {
  return (
    <AspectRatio width="100%" maxWidth={480} {...args}>
      <Iframe
        src="https://www.youtube-nocookie.com/embed/P_mQpbCSQOo"
        frameBorder={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  )
}
WithIframe.args = {
  ratio: 16 / 9
}

export const WithImage: Story<AspectRatioProps> = (args) => {
  return (
    <AspectRatio width="100%" maxWidth={480} {...args}>
      <img src="https://picsum.photos/seed/chungking/1920/1080" alt="Sample" css={{ objectFit: 'cover' }} />
    </AspectRatio>
  )
}
WithImage.args = {
  ...WithIframe.args
}
