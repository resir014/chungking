import * as React from 'react'
import { render } from '@testing-library/react'
import Badge from './Badge'

describe('Badge', () => {
  test('renders correctly', () => {
    const { container } = render(<Badge>hello</Badge>)
    expect(container).toBeInTheDocument()
  })
})
