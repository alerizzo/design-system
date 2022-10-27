import React from 'react'

export interface ComponentProps {
  /** A unique identifier */
  id?: string
  /** A non-unique identifier, to be used when id is not possible */
  className?: string
}

export interface ContainerComponentProps extends ComponentProps {
  /** The content to display as the label of the checkbox */
  children?: React.ReactNode
}

export type ControlValueType = string | number | null

export interface ControlProps extends ContainerComponentProps {
  /** Disables the control, disallowing interaction */
  disabled?: boolean
  /** Name for the form input */
  name?: string
  /** Value for the form input */
  value?: ControlValueType
  /** Callback for when the control becomes focussed */
  onFocus?(event: React.FocusEvent): void
  /** Callback for when the control loses focus */
  onBlur?(event: React.FocusEvent): void
  /** Accesibility custom label */
  'aria-label'?: string
  /** Accesibility custom label element container ID */
  'aria-labelledby'?: string
}
