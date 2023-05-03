import React from 'react'
import { Global, ThemeProvider as EmotionThemeProvider, useTheme } from '@emotion/react'
import { CodacyTheme, codacyTheme } from '@/theme'
import { normalize } from 'polished'
import styled from '@emotion/styled'

const [base, overrides] = normalize()

export const GlobalStyleContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts['normal']};
  font-size: ${({ theme }) => theme.remScale}px; /** 1rem */
  line-height: ${({ theme }) => theme.lineHeights[0]};
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
`

export const ThemeProvider: React.FC<{ children?: React.ReactNode; theme?: CodacyTheme }> = ({
  theme = codacyTheme,
  children,
}) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={{ ...base }} />
      <Global styles={{ ...overrides }} />
      <GlobalStyleContainer>{children}</GlobalStyleContainer>
    </EmotionThemeProvider>
  )
}

export const useCodacyTheme = () => {
  const theme: CodacyTheme = useTheme()
  return theme
}
