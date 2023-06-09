import { ComponentProps } from '../types'
import { BoxProps } from '../Flexbox'
import { HTMLAttributes } from 'react'
import { Color, Size } from '@/theme'

export type IconSize = Size | 'inherit'
export type IconFile = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export interface IconProps extends ComponentProps, BoxProps, HTMLAttributes<HTMLDivElement> {
  /** SVG icon to use as the source of the icon */
  icon: IconFile
  /** Color for the icon from the theme; defaults to parent's font color if not defined. */
  color?: Color
  /** Size for the icon; defaults to parent's font size if not defined */
  size?: IconSize
  /** Determines if the icon should be rendered as an inline element with the proper line adjustment */
  inline?: boolean
  /** Apply a spinning animation to the icon */
  spin?: boolean
  /** Apply a eased spinning animation to the icon */
  easedSpin?: boolean
  /** Scale the icon from its base size */
  scale?: number
  /** Use a stronger border width? */
  bold?: boolean
}
