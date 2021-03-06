import React from 'react'
import { Story, Meta } from '@storybook/react'

import Iframe, { IframeProps } from './Iframe'

export default {
  title: 'Components/Iframe',
  component: Iframe
} as Meta<IframeProps>

export const Example: Story<IframeProps> = ({ ref: _ref, ...args }) => {
  return <Iframe {...args} />
}

Example.args = {
  src: 'https://www.youtube-nocookie.com/embed/P_mQpbCSQOo',
  frameBorder: 0,
  allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: true
}
