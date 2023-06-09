//import { CodacyTheme, Color, transition } from '../theme'
//import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { ButtonSize, ButtonColorScheme } from './types'
import { Flex, FlexProps } from '../Flexbox'
import { space } from 'styled-system'
import { CodacyTheme, Color, transition } from '@/theme'
import { css } from '@emotion/react'
export interface StyledButtonProps {
  size: ButtonSize
  scheme: ButtonColorScheme
  border: boolean
  invert: boolean
  shadows: boolean
  disabled: boolean
}

const ButtonSchemeStyle = ({
  scheme,
  border,
  invert,
  state,
  theme,
}: Pick<StyledButtonProps, 'scheme' | 'border' | 'invert'> & {
  state?: string
  theme: CodacyTheme
}) => css`
  border: ${`solid ${theme.borderWidths[0]} ${
    border ? theme.colors[`accent-${scheme}${state ? `-${state}` : ''}` as Color] : 'transparent'
  }`};
  background-color: ${invert
    ? border && state && ['hover', 'focus', 'active'].includes(state)
      ? `${theme.colors[`accent-${scheme}` as Color]}${state === 'active' ? '32' : '16'}`
      : 'transparent'
    : theme.colors[`accent-${scheme}${state ? `-${state}` : ''}` as Color]};

  color: ${invert
    ? theme.colors[`accent-${scheme}${state ? `-${state}` : ''}` as Color]
    : theme.colors['text-invert']};
`

export const StyledButton = styled.button<StyledButtonProps>`
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  outline: 0;

  font-family: ${({ theme }) => theme.fonts['normal']};
  border-radius: ${({ theme }) => theme.radii[1]};
  padding: ${({ theme, size }) => `0 ${size === 'sm' ? theme.space[2] : theme.space[3]}`};
  font-size: ${({ theme, size }) => (size === 'sm' ? theme.fontSizes[1] : theme.fontSizes[2])};
  height: ${({ size }) => (size === 'sm' ? '1.5rem' : '2rem')};
  line-height: ${({ size }) => `calc(${size === 'sm' ? '1.5rem' : '2rem'} - 2px)`};

  cursor: pointer;
  transition: ${() => transition(['background-color', 'border-color', 'box-shadow'], 'fast')};

  ${({ scheme, theme, border, invert }) => ButtonSchemeStyle({ scheme, border, theme, invert })};

  box-shadow: ${({ theme, shadows }) => (shadows ? theme.shadows[0] : undefined)};

  &:hover {
    ${({ scheme, theme, border, invert }) =>
      ButtonSchemeStyle({ state: 'hover', scheme, border, theme, invert })};
    box-shadow: ${({ theme, shadows }) => (shadows ? theme.shadows[1] : undefined)};
    text-decoration: ${({ border }) => (!border ? 'underline' : undefined)};
  }

  &:focus {
    ${({ scheme, theme, border, invert }) =>
      ButtonSchemeStyle({ state: 'focus', scheme, border, theme, invert })};
    box-shadow: ${({ theme, shadows }) => (shadows ? theme.shadows[1] : undefined)};
  }

  &:active {
    ${({ scheme, theme, border, invert }) =>
      ButtonSchemeStyle({ state: 'active', scheme, border, theme, invert })};
    box-shadow: ${({ theme, shadows }) => (shadows ? theme.shadows[1] : undefined)};
  }

  &:disabled {
    ${({ scheme, theme, border, invert }) =>
      ButtonSchemeStyle({ state: 'disabled', scheme, border, theme, invert })};
    pointer-events: none;
    cursor: not-allowed;
    box-shadow: none;
  }

  ${space}
`

export const StyledButtonContents = styled.div<{ size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  height: 100%;
  gap: ${({ theme, size }) => theme.space[size === 'md' ? 2 : 1]};
`

export const ButtonGroup = styled(Flex)<FlexProps>`
  & > ${StyledButton}:not(:last-child) {
    margin-right: ${({ theme }) => theme.space[2]};
  }

  /* This case covers specific use when the button is wrapped in something else, like a tooltip */
  & > *:not(:last-child) > ${StyledButton} {
    margin-right: ${({ theme }) => theme.space[2]};
  }
`
