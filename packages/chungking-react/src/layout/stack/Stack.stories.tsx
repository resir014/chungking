import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { theme } from '../../theme'
import { Box } from '../box'
import Stack, { StackProps } from './Stack'

export default {
  title: 'Layout/Stack',
  component: Stack,
  argTypes: {
    spacing: {
      control: {
        options: Object.keys(theme.space)
      },
      direction: {
        options: ['vertical', 'horizontal']
      }
    }
  }
} as Meta<StackProps>

export const Example: Story = ({ ...args }) => {
  return (
    <Stack boxShadow="double" backgroundColor="red.900" {...args}>
      <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
        Stack Item
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
        Stack Item
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="grey.800" sx={{ width: 96, height: 96 }}>
        Stack Item
      </Box>
    </Stack>
  )
}
Example.args = {
  spacing: 'md',
  direction: 'vertical'
}

export const HorizontalStack: Story = ({ ...args }) => {
  return (
    <Box boxShadow="double" backgroundColor="red.900">
      <Stack direction="horizontal" {...args}>
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
      </Stack>
    </Box>
  )
}
HorizontalStack.args = {
  spacing: 'md',
  direction: 'horizontal'
}
