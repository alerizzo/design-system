import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonGroup } from '../Button'
import { ChevronDownIcon, SearchIcon } from '../Icons'
import React, { useState, useEffect } from 'react'
import { ButtonProps, ButtonSize } from './types'

const ICONS = { None: undefined, SearchIcon }

const IconArgType = {
  options: Object.keys(ICONS),
  mapping: ICONS,
  control: {
    type: 'select',
    labels: {
      None: 'None',
      SearchIcon: 'Search',
    },
  },
}

const ARGS_TO_HIDE = [
  //'onClick',
  'onFocus',
  'onBlur',
  'onKeyPress',
  'onKeyUp',
  'onKeyDown',
  'onMouseEnter',
  'onTouchStart',
  'id',
  'className',
]

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['codacy'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: { type: 'select' } },
    color: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
    leftIcon: IconArgType,
    rightIcon: IconArgType,
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: {
      exclude: [
        'btnType',
        // general
        ...ARGS_TO_HIDE,
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Playground: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Label',
    variant: 'primary',
    color: 'primary',
    size: 'md',
    disabled: false,
    isLoading: false,
  },
}

// Specific stories

const VAR_COLORS: Pick<ButtonProps, 'color' | 'variant'>[] = [
  { variant: 'default', color: 'primary' },
  { variant: 'primary', color: 'primary' },
  { variant: 'link', color: 'primary' },
  { variant: 'default', color: 'danger' },
  { variant: 'primary', color: 'danger' },
  { variant: 'link', color: 'danger' },
]

const SIZES: ButtonSize[] = ['md', 'sm']

export const ButtonsWithIcons = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(!loading)
    }, 2500)
    return () => clearTimeout(timer)
  }, [loading, setLoading])

  return (
    <>
      {SIZES.map((s) => (
        <>
          <ButtonGroup mb={2}>
            {VAR_COLORS.map((v) => (
              <Button key={`${v.variant}-${v.color}-icon`} {...v} size={s}>
                {v.variant}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup mb={2}>
            {VAR_COLORS.map((v) => (
              <Button key={`${v.variant}-${v.color}-icon`} {...v} size={s} leftIcon={SearchIcon}>
                {v.variant}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup mb={2}>
            {VAR_COLORS.map((v) => (
              <Button
                key={`${v.variant}-${v.color}-r-icon`}
                {...v}
                size={s}
                rightIcon={ChevronDownIcon}
              >
                {v.variant}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup mb={2}>
            {VAR_COLORS.map((v) => (
              <Button
                key={`${v.variant}-${v.color}-r-icon`}
                {...v}
                size={s}
                leftIcon={SearchIcon}
                rightIcon={ChevronDownIcon}
                isLoading={loading}
              >
                {v.variant}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup mb={2}>
            {VAR_COLORS.map((v) => (
              <Button key={`${v.variant}-${v.color}-icon`} {...v} size={s} leftIcon={SearchIcon} />
            ))}
          </ButtonGroup>
          <ButtonGroup mb={2}>
            {VAR_COLORS.map((v) => (
              <Button
                key={`${v.variant}-${v.color}-r-icon`}
                {...v}
                size={s}
                rightIcon={ChevronDownIcon}
              />
            ))}
          </ButtonGroup>
          <ButtonGroup mb={2}>
            {VAR_COLORS.map((v) => (
              <Button
                key={`${v.variant}-${v.color}-r-icon`}
                {...v}
                size={s}
                leftIcon={SearchIcon}
                rightIcon={ChevronDownIcon}
                isLoading={loading}
              />
            ))}
          </ButtonGroup>
        </>
      ))}
    </>
  )
}

export const ButtonWithHTML = () => {
  return (
    <Button>
      <span>
        This has <em>emphasis</em> in a span
      </span>
    </Button>
  )
}
