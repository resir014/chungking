import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { theme } from '../../theme'
import { Box } from '../box'
import Inline, { InlineProps } from './Inline'

export default {
  title: 'Layout/Inline',
  component: Inline,
  argTypes: {
    spacing: {
      control: {
        type: 'select',
        options: Object.keys(theme.space)
      }
    }
  }
} as Meta<InlineProps>

export const Example: Story = ({ ...args }) => {
  return (
    <Box boxShadow="double" backgroundColor="red.900">
      <Inline {...args}>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
          Inline Item
        </Box>
      </Inline>
    </Box>
  )
}
Example.args = {
  spacing: 'md'
}
