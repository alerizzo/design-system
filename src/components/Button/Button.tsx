import React, { useMemo } from 'react'
import { ButtonColorScheme, ButtonProps } from './types'
import { StyledButton, StyledButtonContents } from './styles'
import { Icon } from '../Icon'
import { SpinnerIcon } from '../Icons'
import { IconFile, IconProps, IconSize } from '../Icon/Icon.types'

/**
 * Basic button
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      id,
      disabled = false,
      size = 'md',
      variant,
      color,
      isLoading = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const leftIconComponent = useMemo(
      () =>
        leftIcon &&
        (Object.prototype.hasOwnProperty.call(leftIcon, 'icon') ? (
          <Icon {...(leftIcon as IconProps)} size={size as IconSize} />
        ) : (
          <Icon icon={leftIcon as IconFile} size={size as IconSize} />
        )),
      [leftIcon, size]
    )

    const rightIconComponent = useMemo(
      () =>
        rightIcon &&
        (Object.prototype.hasOwnProperty.call(rightIcon, 'icon') ? (
          <Icon {...(rightIcon as IconProps)} size={size as IconSize} />
        ) : (
          <Icon icon={rightIcon as IconFile} size={size as IconSize} />
        )),
      [rightIcon, size]
    )

    const _variant = variant || 'default'

    const invert = ['link', 'default', 'flat'].includes(_variant)
    const hideBorder = ['link'].includes(_variant)
    const hideShadows = ['link', 'flat', 'primaryFlat'].includes(_variant)
    const isDisabled = disabled || isLoading

    const colorScheme: ButtonColorScheme =
      color ||
      (['link', 'default', 'flat', 'primaryFlat'].includes(_variant)
        ? 'primary'
        : (_variant as ButtonColorScheme)) ||
      'primary'

    return (
      <StyledButton
        id={id}
        disabled={isDisabled}
        size={size}
        scheme={colorScheme}
        border={!hideBorder}
        invert={invert}
        shadows={!hideShadows}
        {...props}
        ref={ref}
      >
        <StyledButtonContents size={size}>
          {isLoading && (
            <Icon icon={SpinnerIcon} spin size={size as IconSize} title="spinner-icon" />
          )}
          {!isLoading && leftIconComponent}
          {children && <span>{children}</span>}
          {rightIconComponent}
        </StyledButtonContents>
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'

export { Button }
