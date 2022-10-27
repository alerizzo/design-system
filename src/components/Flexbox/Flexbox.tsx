import React from 'react'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  ShadowProps,
  FlexboxProps,
  GridboxProps,
  PositionProps,
  TextAlignProps,
  TypographyProps,
  color,
} from './Flexbox.types'

import {
  space,
  layout,
  flexbox,
  shadow,
  grid,
  position,
  border,
  textAlign,
  typography,
  ResponsiveValue,
} from 'styled-system'

import { CodacyTheme, FontWeights } from '@/theme'

export interface As {
  as?: React.ElementType
}

type CommonProps = ColorProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  TextAlignProps &
  Omit<TypographyProps, 'fontWeight'> &
  As & {
    fontWeight?: ResponsiveValue<number | FontWeights, CodacyTheme>
  }

export type BoxProps = CommonProps & FlexboxProps & GridboxProps
export type FlexProps = CommonProps & FlexboxProps
export type GridProps = CommonProps & GridboxProps

export const Common = styled('div', {
  shouldForwardProp: (prop: string) => isPropValid(prop),
})<CommonProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  color,
  layout,
  space,
  border,
  position,
  shadow,
  typography,
  textAlign
)

export const Box = styled(Common)<BoxProps>(flexbox, grid)

export const Flex = styled(Common)<FlexProps>(
  {
    display: 'flex',
  },
  flexbox
)

export const Grid = styled(Common)<GridProps>(
  {
    display: 'grid',
  },
  grid
)
