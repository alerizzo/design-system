import { SpaceProps } from 'styled-system'
import { IconFile, IconProps } from '../Icon/Icon.types'
import { ContainerComponentProps } from '../types'

export type ButtonSize = 'sm' | 'md'
export type ButtonType = 'default' | 'primary' | 'link' | 'flat' | 'primaryFlat'

export type ButtonColorScheme = 'primary' | 'success' | 'danger' | 'subtle'

export interface ButtonProps extends ContainerComponentProps, SpaceProps {
  /** Disables the button, disallowing interaction */
  disabled?: boolean
  /** Defines size of the button */
  size?: ButtonSize
  /** Defines which type of button it should be */
  variant?: ButtonType
  /** Defines which type of button it should be */
  color?: ButtonColorScheme
  /** Shows loading spinner on button */
  isLoading?: boolean
  /** Left icon */
  leftIcon?: IconProps | IconFile
  /** Right icon */
  rightIcon?: IconProps | IconFile
  /** Callback when clicked */
  onClick?(): void
  /** Callback when button becomes focussed */
  onFocus?(event: React.FocusEvent): void
  /** Callback when focus leaves button */
  onBlur?(event: React.FocusEvent): void
  /** Callback when a keypress event is registered on the button */
  onKeyPress?(event: React.KeyboardEvent<HTMLButtonElement>): void
  /** Callback when a keyup event is registered on the button */
  onKeyUp?(event: React.KeyboardEvent<HTMLButtonElement>): void
  /** Callback when a keydown event is registered on the button */
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void
  /** Callback when mouse enter */
  onMouseEnter?(): void
  /** Callback when element is touched */
  onTouchStart?(): void
}
