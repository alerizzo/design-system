import '@emotion/react'

import { CodacyTheme } from './theme'

declare module '@emotion/react' {
  export interface Theme extends CodacyTheme {}
}

export * from './components'
export * from './theme'
export * from './hooks'
