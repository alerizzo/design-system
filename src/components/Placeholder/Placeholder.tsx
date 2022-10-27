import React from 'react'
import { Box, BoxProps } from '../Flexbox'
import styled from '@emotion/styled'

const StyledPlaceholder = styled(Box)`
  background-color: ${({ theme }) => theme.colors['brand-primary']};
`

export const Placeholder: React.FC<BoxProps> = (props) => <StyledPlaceholder {...props} />
