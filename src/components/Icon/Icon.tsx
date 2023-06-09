import React, { forwardRef, useEffect } from 'react'
import { IconProps } from './Icon.types'
import { IconWrapper } from './Icon.styles'
import { useForwardedRef } from '@/hooks'

/**
 * Description for Icon
 */
const Icon = forwardRef<HTMLDivElement, IconProps>(({ icon, size, title, ...props }, ref) => {
  const IconComponent = icon
  const safeRef = useForwardedRef(ref)

  useEffect(() => {
    if (safeRef.current && title && safeRef.current.firstElementChild) {
      // inject a title attribute to the SVG for accessibility and test purposes
      safeRef.current.firstElementChild.setAttribute('title', title)
    }
  }, [safeRef, title])

  return (
    <IconWrapper ref={safeRef} iconSize={size} role="img" {...props}>
      <IconComponent />
    </IconWrapper>
  )
})

Icon.displayName = 'Icon'

export { Icon }
