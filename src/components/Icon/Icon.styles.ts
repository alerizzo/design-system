import styled from '@emotion/styled'
import { Box } from '../Flexbox'
import { IconProps, IconSize } from './Icon.types'
import { css, keyframes } from '@emotion/react'
import { Size } from '@/theme'

const sizeMap: { [key in Size | 'inherit']: string } = {
  xs: '0.625rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  inherit: '1em',
}

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

const spinEaseAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(359deg);
  }
  100% {
    transform: rotate(359deg);
  }
`

export const IconWrapper = styled(Box)<
  Pick<IconProps, 'color' | 'spin' | 'easedSpin' | 'scale' | 'inline' | 'bold'> & {
    iconSize?: IconSize
  }
>`
  width: ${({ iconSize }) => sizeMap[iconSize || 'inherit']};
  height: ${({ iconSize }) => sizeMap[iconSize || 'inherit']};
  line-height: ${({ iconSize }) => sizeMap[iconSize || 'inherit']};

  ${({ inline }) => {
    if (inline) {
      return {
        display: 'inline-block',
        position: 'relative',
        top: '0.115em',
      }
    }

    return ''
  }}

  > svg.ionicon,
  > svg.codacy-icon {
    stroke: ${({ color, theme }) => (color ? theme.colors[color] : 'currentColor')};
    fill: ${({ color, theme }) => (color ? theme.colors[color] : 'currentColor')};

    .ionicon-stroke-none,
    .stroke-none {
      stroke: none;
    }

    .ionicon-fill-none,
    .fill-none {
      fill: none;
    }

    .ionicon-stroke-width,
    .stroke-width {
      stroke-width: ${({ bold }) => (bold ? '64px' : '32px')};
    }

    ${({ spin }) => {
      if (spin) {
        return css`
          animation: ${spinAnimation} 2s infinite linear;
        `
      }

      return ''
    }}

    ${({ easedSpin }) => {
      if (easedSpin) {
        return css`
          animation: ${spinEaseAnimation} 2s infinite ease-in-out;
        `
      }

      return ''
    }}

    ${({ scale }) => {
      if (scale && scale !== 1) {
        return css`
          transform: scale(${scale});
        `
      }

      return ''
    }}
  }
`
