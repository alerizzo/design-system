import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup } from '../Button'
import { Box } from '../Flexbox'
import { SearchIcon, ChevronDownIcon } from '../Icons'

import { ButtonType, ButtonColorScheme, ButtonSize, ButtonProps } from './types'

export default {
  title: 'StoriesToMigrate/Button',
  component: Button,
}

const VARIANTS: ButtonType[] = ['default', 'primary', 'link', 'flat', 'primaryFlat']
const COLORS: ButtonColorScheme[] = ['primary', 'danger', 'success', 'subtle']
const SIZES: ButtonSize[] = ['md', 'sm']

export const DefaultButton = () => <Button>Default</Button>

export const LoadingButton = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(!loading)
    }, 2500)
    return () => clearTimeout(timer)
  }, [loading, setLoading])

  return (
    <ButtonGroup>
      <Button isLoading={loading}>{loading ? 'Loading' : 'Default'}</Button>
      <Button isLoading={loading} variant="primary">
        Primary
      </Button>
      <Button isLoading={loading}>{loading ? 'Removing...' : 'Remove'}</Button>
    </ButtonGroup>
  )
}

export const ButtonTypes = () => {
  return (
    <>
      <Box>
        {VARIANTS.map((v) => (
          <ButtonGroup mb={2} key={v}>
            {COLORS.map((c) => (
              <Button key={`${v}-${c}-enabled`} variant={v} color={c}>
                {v}-{c}
              </Button>
            ))}
          </ButtonGroup>
        ))}
      </Box>
      <Box>
        {VARIANTS.map((v) => (
          <ButtonGroup mb={2} key={v}>
            {COLORS.map((c) => (
              <Button key={`${v}-${c}-disabled`} disabled variant={v} color={c}>
                {v}-${c}
              </Button>
            ))}
          </ButtonGroup>
        ))}
      </Box>
    </>
  )
}

export const ButtonSizes = () => {
  return (
    <>
      <ButtonGroup mb={2}>
        {VARIANTS.map((v) => (
          <Button key={`${v}-md`} size="md" variant={v}>
            md - {v}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup mb={2}>
        {VARIANTS.map((v) => (
          <Button key={`${v}-sm`} size="sm" variant={v}>
            sm - {v}
          </Button>
        ))}
      </ButtonGroup>
    </>
  )
}

// TODO: uncomment when Tooltip is migrated
// export const ButtonsWithTooltips = () => {
//   return (
//     <ButtonGroup>
//       <Tooltip content="Hello there!">
//         <Button disabled variant="danger">
//           Danger
//         </Button>
//       </Tooltip>
//       <Tooltip content="Hello there!">
//         <Button variant="danger">Danger</Button>
//       </Tooltip>
//     </ButtonGroup>
//   )
// }

const VAR_COLORS: Pick<ButtonProps, 'color' | 'variant'>[] = [
  { variant: 'default', color: 'primary' },
  { variant: 'primary', color: 'primary' },
  { variant: 'link', color: 'primary' },
  { variant: 'default', color: 'danger' },
  { variant: 'primary', color: 'danger' },
  { variant: 'link', color: 'danger' },
]
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
