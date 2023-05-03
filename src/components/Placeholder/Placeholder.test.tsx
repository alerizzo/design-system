import React from 'react'
import { Placeholder } from '@/index'
import { render, screen } from '@/utils/test-utils'

describe('<Placeholder />', () => {
  test('renders a placeholder', () => {
    const innerText = 'External Link'
    render(<Placeholder>{innerText}</Placeholder>)

    const placeholder = screen.getByText(innerText)
    expect(placeholder).toBeInTheDocument()
  })
})
