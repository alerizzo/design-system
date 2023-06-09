import React from 'react'
import { Button } from './Button'
import { render, fireEvent } from '@/utils/test-utils'
import { within } from '@testing-library/dom'

describe('<Button />', () => {
  test('renders with text', () => {
    const buttonText = 'this is a button'
    const { queryByText } = render(<Button>{buttonText}</Button>)
    expect(queryByText(buttonText)).toBeInTheDocument()
  })

  test('renders html children', () => {
    const { getByRole } = render(
      <Button>
        <img alt="img" />
        <span>span</span>
        <div>div</div>
      </Button>
    )
    const btn = getByRole('button')
    const { queryByText, queryByRole } = within(btn)
    expect(queryByText('span')).toBeInTheDocument()
    expect(queryByText('div')).toBeInTheDocument()
    expect(queryByRole('img')).toBeInTheDocument()
  })

  test('disabled to have attribute disabled', () => {
    const { getByRole } = render(<Button disabled />)
    const btn = getByRole('button')
    expect(btn).toBeDisabled()
  })

  test('renders with loading spinner', async () => {
    const buttonText = 'this is a button'
    const { findByRole, findByTitle } = render(<Button isLoading>{buttonText}</Button>)
    const spinnerIcon = await findByTitle('spinner-icon')
    expect(spinnerIcon).toBeVisible()

    const button = await findByRole('button')
    expect(button).toBeDisabled()
  })

  // From here on it's mostly wiring tests
  //
  test('triggers onClick handler', () => {
    const click = jest.fn()
    const { getByRole } = render(<Button onClick={click} />)
    const btn = getByRole('button')
    fireEvent.click(btn)
    expect(click).toHaveBeenCalled()
  })

  test('does not trigger onClick handler when disabled', () => {
    const click = jest.fn()
    const { getByRole } = render(<Button onClick={click} disabled />)
    const btn = getByRole('button')
    fireEvent.click(btn)
    expect(click).not.toHaveBeenCalled()
  })

  test('triggers onFocus handler', () => {
    const focus = jest.fn()
    const { getByRole } = render(<Button onFocus={focus} />)
    const btn = getByRole('button')
    fireEvent.focus(btn)
    expect(focus).toHaveBeenCalled()
  })

  test('triggers onBlur handler', () => {
    const blur = jest.fn()
    const { getByRole } = render(<Button onBlur={blur} />)
    const btn = getByRole('button')
    fireEvent.blur(btn)
    expect(blur).toHaveBeenCalled()
  })
})
