import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { codacyTheme, ThemeProvider } from '@/theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={codacyTheme}>{children}</ThemeProvider>
)

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options }) as any

export * from '@testing-library/react'
export { customRender as render }
