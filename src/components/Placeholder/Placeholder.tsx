import React from 'react'
import { Box, BoxProps } from '@/components/Flexbox'
import styled from '@emotion/styled'

const StyledPlaceholder = styled(Box)`
  background-color: ${({ theme }) => theme.colors['brand-primary']};
  align-items: baseline;
`

interface PlaceHolderProps {
  debugMe?: boolean
}

export const Placeholder: React.FC<PlaceHolderProps & BoxProps> = ({
  children,
  debugMe,
  ...props
}) => (
  <StyledPlaceholder {...props}>
    {debugMe && <h1>DEBUG ME!</h1>}
    {children}
  </StyledPlaceholder>
)
