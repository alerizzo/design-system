import React from 'react'
import { render, screen } from '@/utils/test-utils'
import { Caption, Paragraph, Subheader, Title } from './Typography'

describe('Typography', () => {
  test('renders a Title', () => {
    const innerText = 'Inner Text'
    render(<Title>{innerText}</Title>)

    const el = screen.getByText(innerText)
    expect(el).toBeInTheDocument()
  })
  test('renders a Subheader', () => {
    const innerText = 'Inner Text'
    render(<Subheader>{innerText}</Subheader>)

    const el = screen.getByText(innerText)
    expect(el).toBeInTheDocument()
  })
  test('renders a Caption', () => {
    const innerText = 'Inner Text'
    render(<Caption>{innerText}</Caption>)

    const el = screen.getByText(innerText)
    expect(el).toBeInTheDocument()
  })
  test('renders a Paragraph', () => {
    const innerText = 'Inner Text'
    render(<Paragraph>{innerText}</Paragraph>)

    const el = screen.getByText(innerText)
    expect(el).toBeInTheDocument()
  })
})
