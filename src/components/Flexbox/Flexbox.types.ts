import * as StyledSystem from 'styled-system'
import { CodacyTheme } from '@/theme'

export interface ColorProps
  extends StyledSystem.BackgroundColorProps<CodacyTheme>,
    StyledSystem.OpacityProps<CodacyTheme> {
  textColor?: StyledSystem.ColorProps<CodacyTheme>['color']
}

export interface SpaceProps extends StyledSystem.SpaceProps<CodacyTheme> {}
export interface LayoutProps extends StyledSystem.LayoutProps<CodacyTheme> {}
export interface BorderProps extends StyledSystem.BorderProps<CodacyTheme> {}
export interface FlexboxProps extends StyledSystem.FlexboxProps<CodacyTheme> {}
export interface PositionProps extends StyledSystem.PositionProps<CodacyTheme> {}
export interface GridboxProps extends StyledSystem.GridProps<CodacyTheme> {}
export interface ShadowProps extends StyledSystem.ShadowProps<CodacyTheme> {}
export interface TypographyProps extends StyledSystem.TypographyProps<CodacyTheme> {}
export interface BackgroundProps extends StyledSystem.BackgroundProps<CodacyTheme> {}
export interface TextAlignProps extends StyledSystem.TextAlignProps<CodacyTheme> {}

const config: StyledSystem.Config = {
  textColor: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
}

export const color = StyledSystem.system(config)
