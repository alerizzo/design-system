import styled from '@emotion/styled'
import { Box } from '../Flexbox'

import {
  TitleProps,
  SubheaderProps,
  ParagraphProps,
  CaptionProps,
  ListProps,
  TextSize,
  TextColor,
  DataPointProps,
  TitleSize,
  DataPointTextSize,
} from './Typography.types'
import { CodacyTheme, Color, Size } from '@/theme'
import { css } from '@emotion/react'

export const BaseTextStyle = (theme: CodacyTheme, size: TextSize, color: TextColor) => {
  const styleBySize = {
    lg: theme.fontSizes[3],
    md: theme.fontSizes[2],
    sm: theme.fontSizes[1],
    xs: theme.fontSizes[0],
  }

  return css`
    color: ${theme.colors[`text-${color || 'primary'}` as Color]};
    font-size: ${styleBySize[size]};
  `
}

export const StyledTitle = styled(Box)<Omit<TitleProps, 'size'> & { textSize?: TitleSize }>`
  ${({ theme, textSize: size = 'md', color }) => {
    const styleBySize: Record<TitleSize, { size: string; lineHeight: string }> = {
      md: { size: theme.fontSizes[5], lineHeight: theme.lineHeights[1] },
      xl: { size: theme.fontSizes[7], lineHeight: theme.lineHeights[2] },
    }

    return css`
      font-size: ${styleBySize[size].size};
      line-height: ${styleBySize[size].lineHeight};
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors[`text-${color || 'primary'}` as Color]};
    `
  }}
`

export const StyledSubheader = styled(Box)<Omit<SubheaderProps, 'size'> & { textSize?: Size }>`
  ${({ theme, textSize: size = 'xl', color }) => {
    const styleBySize: Record<Size, { size: string; weight: string }> = {
      xl: { size: theme.fontSizes[4], weight: theme.fontWeights.bold },
      lg: { size: theme.fontSizes[3], weight: theme.fontWeights.bold },
      md: { size: theme.fontSizes[3], weight: theme.fontWeights.normal },
      sm: { size: theme.fontSizes[2], weight: theme.fontWeights.bold },
      xs: { size: theme.fontSizes[1], weight: theme.fontWeights.bold },
    }

    return css`
      color: ${theme.colors[`text-${color || 'primary'}` as Color]};
      font-size: ${styleBySize[size].size};
      font-weight: ${styleBySize[size].weight};
    `
  }}
`

export const StyledParagraph = styled(Box)<Omit<ParagraphProps, 'size'> & { textSize?: TextSize }>`
  ${({ theme, textSize: size = 'md', color }) => BaseTextStyle(theme, size, color || 'primary')}

  ${({ maxLines }) =>
    maxLines
      ? css`
          display: -webkit-box;
          -webkit-line-clamp: ${maxLines};
          -webkit-box-orient: vertical;
          overflow: hidden;
        `
      : ''}
`

export const StyledCaption = styled(Box)<
  Omit<CaptionProps, 'size' | 'bold'> & { textSize?: TextSize }
>`
  ${({ theme, textSize: size = 'sm', color }) => BaseTextStyle(theme, size, color || 'primary')}

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const StyledList = styled(Box)<Omit<ListProps, 'size'> & { textSize?: TextSize }>`
  ${({ theme, textSize: size = 'md', color }) => BaseTextStyle(theme, size, color || 'primary')}

  padding-left: ${({ theme }) => theme.space[4]};

  li {
    padding-left: ${({ theme }) => theme.space[2]};

    &:not(:last-of-type) {
      margin-bottom: ${({ theme }) => theme.space[2]};
    }
  }
`

export const StyledDataPoint = styled(Box)<
  Pick<DataPointProps, 'color'> & { textSize?: DataPointTextSize }
>`
  ${({ theme, textSize: size = 'sm', color }) => {
    const styleBySize: Record<DataPointTextSize, { size: string; weight: string }> = {
      lg: { size: theme.fontSizes[7], weight: theme.fontWeights.bold },
      md: { size: theme.fontSizes[5], weight: theme.fontWeights.bold },
      sm: { size: theme.fontSizes[2], weight: theme.fontWeights.normal },
    }

    return css`
      color: ${theme.colors[`text-${color || 'primary'}` as Color]};
      font-size: ${styleBySize[size].size};
      font-weight: ${styleBySize[size].weight};
      line-height: ${size === 'lg' ? '2.75rem' : '1.9375rem'};
    `
  }}
`
