import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box, BoxProps } from './Box'
import { Heading } from '../../../typography'

export default {
  title: 'Layout/Box',
  component: Box
} as Meta<BoxProps>

export const Example: Story = () => {
  return <Box>I&apos;m inside a box!</Box>
}

export const StyleProps: Story = () => {
  return (
    <Box backgroundColor="grey.900" color="white" p="md">
      I&apos;m inside a box!
    </Box>
  )
}

export const PseudoElements: Story = () => {
  return (
    <Box p="md" _hover={{ backgroundColor: 'grey.900' }}>
      I&apos;m inside a box!
    </Box>
  )
}

export const CustomProps: Story = () => {
  return (
    <Box sx={{ '--heading-color': '#F15CF2' }}>
      <Heading color="var(--heading-color)">This heading is using CSS variables!</Heading>
    </Box>
  )
}
