import { ComponentProps, ContainerComponentProps } from '../types'
import { BoxProps } from '../Flexbox'
import { Size } from '@/theme'

export type TitleSize = 'md' | 'xl'
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'complementary'
  | 'invert'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export interface TitleProps extends ContainerComponentProps, BoxProps {
  size?: TitleSize
  color?: TextColor
}

export interface SubheaderProps extends ContainerComponentProps, BoxProps {
  size?: Size
  color?: TextColor
}

export type TextSize = 'lg' | 'md' | 'sm' | 'xs'

interface BaseTextProps {
  size?: TextSize
  color?: TextColor
}
export interface ParagraphProps
  extends ContainerComponentProps,
    Omit<BoxProps, 'size'>,
    Omit<BaseTextProps, 'size'> {
  size?: Exclude<TextSize | undefined, 'xs'>
  maxLines?: number
}

export interface CaptionProps
  extends ContainerComponentProps,
    Omit<BoxProps, 'size'>,
    BaseTextProps {
  /** @deprecated Use fontWeight instead */
  bold?: boolean
}

export type DataPointFormatter = '+0' | '+0[,]0' | '+0a' | '+0[.]0a' | '0a' | '0[.]0a' | '0[,]0'

export type DataPointTextSize = 'lg' | 'md' | 'sm'
export interface DataPointProps extends ComponentProps, Omit<BoxProps, 'size'> {
  value?: number
  showPercentage?: boolean
  format?: DataPointFormatter | string

  size?: DataPointTextSize
  color?: TextColor
}

export interface ListProps extends ContainerComponentProps, Omit<BoxProps, 'size'>, BaseTextProps {}
