import { rgba } from 'polished'
import { codacyThemeColors, Color, ColorScheme } from './ColorSchemes/codacy'
import { pulseThemeColors } from './ColorSchemes/pulse'

// Types
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Speed = 'fast' | 'normal' | 'slow'
export type Fonts = 'normal' | 'display' | 'monospace'
export type FontWeights = 'light' | 'normal' | 'bold'

export type CodacyTheme = {
  // scales
  gridSize: number
  remScale: number

  // theme
  space: string[]
  colors: Record<Color, string>
  fonts: Record<Fonts, string>
  fontSizes: string[]
  fontWeights: string[] & Record<FontWeights, string>
  lineHeights: string[]
  letterSpacings: string[]
  borders: string[]
  borderWidths: string[]
  radii: string[]
  shadows: string[]
  transitions: string[] & Record<Speed, string>
  breakpoints: string[]

  // custom
  controlSize: Record<Size, string>

  /** @deprecated Use borders or borderWidths instead */
  borderSize: string[]
  /** @deprecated Use radii instead */
  borderRadius: string[]
  /** @deprecated Use lineHeights instead */
  baseLineHeight: string
}

// *** Theme Standard Values ***********************
const fontStack = (fonts: string[]) => fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ')

const remScale = 16
const gridSize = 0.5 /* rem */
const borderWidths = ['1px', '0.125rem', '0.25rem']
const fonts = {
  normal: fontStack(['Clear Sans', 'arial', 'system-ui', 'sans-serif']),
  display: fontStack(['Clear Sans', 'arial', 'system-ui', 'sans-serif']),
  monospace: fontStack(['ui-monospace', 'monospace']),
}
const fontSizes = [
  /** fontSize-00 */ '0.625rem', // 10px
  /** fontSize-01 */ '0.75rem', // 12px
  /** fontSize-02 */ '0.875rem', // 14px
  /** fontSize-03 */ '1rem', // 16px
  /** fontSize-04 */ '1.125rem', // 18px
  /** fontSize-05 */ '1.3125rem', // 21px
  /** fontSize-06 */ '1.65rem', // 26.4px
  /** fontSize-07 */ '2.25rem', // 36px
]
const space = [
  /** space-00 */ '0',
  /** space-01 */ `${gridSize * 0.5}rem`, // 4px
  /** space-02 */ `${gridSize}rem`, // 8px
  /** space-03 */ `${gridSize * 1.5}rem`, // 12px
  /** space-04 */ `${gridSize * 2}rem`, // 16px
  /** space-05 */ `${gridSize * 3}rem`, // 24px
  /** space-06 */ `${gridSize * 4}rem`, // 32px
  /** space-07 */ `${gridSize * 5}rem`, // 40px
  /** space-08 */ `${gridSize * 6}rem`, // 48px
  /** space-09 */ `${gridSize * 8}rem`, // 64px
]
const sizes = [
  /** size-00 */ `${gridSize * 9}rem`, // 72px
  /** size-01 */ `${gridSize * 19}rem`, // 152px
  /** size-02 */ `${gridSize * 31}rem`, // 248px
  /** size-03 */ `${gridSize * 44.5}rem`, // 356px
  /** size-04 */ `${gridSize * 56.5}rem`, // 452px
]
const radii = ['0.125rem' /* 2px */, '0.25rem' /* 4px */, '0.5rem' /* 8px */]
const shadowsFx = (scheme: ColorScheme) => [
  `0 0.0625rem 0.125rem ${rgba(scheme['neutral-600'], 0.2)}`,
  `0 0.125rem 0.375rem ${rgba(scheme['neutral-600'], 0.3)}`,
  `0 0.125rem 0.375rem ${rgba(scheme['neutral-600'], 0.2)}, 0 0.125rem 0.5rem ${rgba(scheme['neutral-600'], 0.1)}`,
  `0 0.25rem 0.5rem ${rgba(scheme['neutral-600'], 0.2)}, 0 0.25rem 0.75rem ${rgba(scheme['neutral-600'], 0.1)}`,
  `0 0.75rem 1rem ${rgba(scheme['neutral-600'], 0.2)}, 0 0.75rem 1.5rem ${rgba(scheme['neutral-600'], 0.1)}`,
]

const transitions = ['0.2s ease-in-out', '0.35s ease-in-out', '0.75s ease-in-out']
const breakpoints = ['85.1rem' /* > 1360px */, '90.1rem' /* > 1440px */, '105.1rem' /* > 1680px */]
const lineHeights = ['1.1875rem', '1.9375rem', '2.75rem']
const fontWeights = ['200', '400', '700']
const letterSpacings = ['normal']

const baseTheme = {
  gridSize,
  remScale,

  borderWidths,
  fonts,
  fontSizes,
  fontWeights: Object.assign(fontWeights, {
    light: fontWeights[0],
    normal: fontWeights[1],
    bold: fontWeights[2],
  }),
  lineHeights,
  space,
  sizes,
  radii,
  transitions: Object.assign(transitions, {
    fast: transitions[0],
    normal: transitions[1],
    slow: transitions[2],
  }),
  breakpoints,
  letterSpacings,
  controlSize: {
    xs: sizes[0],
    sm: sizes[1],
    md: sizes[2],
    lg: sizes[3],
    xl: sizes[4],
  },

  // --- Deprecated ones; delete after updating SPA
  baseLineHeight: lineHeights[0],
  borderSize: borderWidths,
  borderRadius: radii,
}

// Helper functions
export const transition = (
  properties: string[],
  speed?: Speed,
  refTheme: Pick<CodacyTheme, 'transitions'> = baseTheme
) => properties.map((p) => `${p} ${refTheme.transitions[speed || 'normal']}`).join(', ')

export const generateTheme = (scheme: ColorScheme) =>
  ({
    ...baseTheme,
    colors: scheme,
    borders: borderWidths.map((w) => `solid ${w} ${scheme['ui-border']}`),
    shadows: shadowsFx(scheme),
  } as CodacyTheme)

// Themes
export const codacyTheme = generateTheme(codacyThemeColors)
export const pulseTheme = generateTheme(pulseThemeColors)

/** @deprecated Use codacyTheme instead */
export const theme = codacyTheme
