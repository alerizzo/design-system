import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Queries, queries } from '@testing-library/react/node_modules/@testing-library/dom'
import { codacyTheme, ThemeProvider } from '@/theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={codacyTheme}>{children}</ThemeProvider>
)

const customRender = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: ReactElement,
  options?: Omit<RenderOptions<Q, Container, BaseElement>, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
