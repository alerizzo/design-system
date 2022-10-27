import { baseColors as codacyBaseColors, ColorScheme, functionalColorsFx } from './codacy'

const baseColors = {
  ...codacyBaseColors,

  // --- UPDATE HERE BASE COLORS ----
}

const functionalColors = {
  ...functionalColorsFx(baseColors),

  // UPDATE HERE FUNCTIONAL COLORS

  'brand-primary': baseColors['turquoise-500'],

  'accent-primary': baseColors['turquoise-400'],
  'accent-primary-hover': baseColors['turquoise-500'],
  'accent-primary-focus': baseColors['turquoise-500'],
  'accent-primary-active': baseColors['turquoise-700'],
  'accent-primary-disabled': baseColors['turquoise-200'],

  // 'accent-subtle': baseColors['black-300'],
  // 'accent-subtle-hover': baseColors['black-400'],
  // 'accent-subtle-focus': baseColors['black-400'],
  // 'accent-subtle-active': baseColors['black-500'],
  // 'accent-subtle-disabled': baseColors['black-100'],

  'accent-info': baseColors['turquoise-400'],

  // 'text-primary': baseColors['black-700'],
  // 'text-secondary': baseColors['black-400'],
  // 'text-complementary': baseColors['black-300'],
  // 'text-invert': baseColors['white'],
  // 'text-placeholder': baseColors['black-200'],
  'text-info': baseColors['turquoise-600'],
  // 'text-success': baseColors['green-300'],
  // 'text-warning': baseColors['orange-200'],
  // 'text-danger': baseColors['red-400'],
  // 'text-attention': baseColors['purple-600'],

  // 'background-primary': baseColors['white'],
  // 'background-secondary': baseColors['black-50'],
  'background-info': baseColors['turquoise-80'],
  // 'background-success': baseColors['green-50'],
  // 'background-warning': baseColors['orange-50'],
  // 'background-danger': baseColors['red-50'],
  // 'background-attention': baseColors['purple-100'],
  // 'background-neutral': baseColors['black-80'],

  'control-border': baseColors['black-200'],
  //'control-background': baseColors['white'],
  'control-active-background': baseColors['white'],
  'control-active-border': baseColors['turquoise-400'],
  'control-invalid-border': baseColors['red-300'],
  'control-disabled': baseColors['black-80'],

  //'ui-border': baseColors['black-80'],
  'ui-navbar': baseColors['turquoise-80'],
  'ui-navbar-text': baseColors['black-500'],

  'icon-primary': baseColors['black-300'],
  'icon-info': baseColors['turquoise-400'],
  // 'icon-success': baseColors['green-200'],
  // 'icon-warning': baseColors['orange-100'],
  // 'icon-danger': baseColors['red-200'],
}

export const pulseThemeColors: ColorScheme = {
  ...baseColors,
  ...functionalColors,
}
