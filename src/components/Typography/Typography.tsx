import React from 'react'
import numeral from 'numeral'
import { DataPointProps } from '.'
import {
  StyledTitle,
  StyledSubheader,
  StyledParagraph,
  StyledCaption,
  StyledList,
  StyledDataPoint,
} from './Typography.styles'
import { TitleProps, SubheaderProps, ParagraphProps, CaptionProps } from './Typography.types'

/** Title */
export const Title = React.forwardRef<HTMLDivElement, TitleProps>(
  ({ children, size = 'md', ...props }, ref) => (
    <StyledTitle as="h1" textSize={size} {...props} ref={ref}>
      {children}
    </StyledTitle>
  )
)

Title.displayName = 'Title'

const tagBySize: { [key: string]: React.ElementType } = {
  xl: 'h2',
  lg: 'h3',
  md: 'h4',
  sm: 'h5',
  xs: 'h6',
}

/** Subheader */
export const Subheader = React.forwardRef<HTMLDivElement, SubheaderProps>(
  ({ children, size = 'xl', ...props }, ref) => (
    <StyledSubheader as={tagBySize[size]} textSize={size} {...props} ref={ref}>
      {children}
    </StyledSubheader>
  )
)

Subheader.displayName = 'Subheader'

/** Paragraph */
export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, size = 'md', as = 'p', ...props }, ref) => (
    <StyledParagraph as={as} textSize={size} {...props} ref={ref}>
      {children}
    </StyledParagraph>
  )
)

Paragraph.displayName = 'Paragraph'

/** Caption */
export const Caption = React.forwardRef<HTMLParagraphElement, CaptionProps>(
  ({ children, as = 'p', size = 'sm', bold, fontWeight, ...props }, ref) => (
    <StyledCaption
      as={as}
      textSize={size}
      fontWeight={fontWeight || (bold ? 2 : 1)}
      {...props}
      ref={ref}
    >
      {children}
    </StyledCaption>
  )
)

Caption.displayName = 'Caption'

export const DataPoint = React.forwardRef<HTMLParagraphElement, DataPointProps>(
  ({ children, size = 'sm', as = 'p', value, showPercentage, format, ...props }, ref) => {
    if (value === undefined)
      return (
        <StyledDataPoint textSize={size} as={as} {...props} ref={ref}>
          -
        </StyledDataPoint>
      )

    return (
      <StyledDataPoint textSize={size} as={as} {...props} ref={ref}>
        {format ? numeral(value).format(format) : value}
        {showPercentage ? <small> %</small> : null}
      </StyledDataPoint>
    )
  }
)

DataPoint.displayName = 'DataPoint'

/** BulletedList */
export const BulletedList = React.forwardRef<HTMLDivElement, CaptionProps>(
  ({ children, size = 'md', as = 'ul', ...props }, ref) => (
    <StyledList as={as} textSize={size} {...props} ref={ref}>
      {children}
    </StyledList>
  )
)

BulletedList.displayName = 'BulletedList'
