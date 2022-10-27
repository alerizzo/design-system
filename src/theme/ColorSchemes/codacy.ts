export const baseColors = {
  // BLUE
  'blue-900': '#0052CC',
  'blue-800': '#2562EA',
  'blue-700': '#286CFC',
  'blue-600': '#3E7AFF',
  'blue-500': '#6695FF',
  'blue-400': '#94B4FF',
  'blue-300': '#B9CDFD',
  'blue-200': '#D0DDFE',
  'blue-100': '#DDE6FF',
  'blue-50': '#EBF1FF',

  // BLACK
  'black-700': '#172B4D',
  'black-600': '#1D3660',
  'black-500': '#354B71',
  'black-400': '#4C6083',
  'black-300': '#7E90B2',
  'black-200': '#B6C6E0',
  'black-100': '#C9D8EF',
  'black-80': '#E5ECF5',
  'black-60': '#F2F5FD',
  'black-50': '#F5F8FE',

  // WHITE
  white: '#FFFFFF',

  // PURPLE
  'purple-100': '#FAF7FD',
  'purple-200': '#DECDF4',
  'purple-300': '#C3A3EB',
  'purple-400': '#A77AE1',
  'purple-500': '#8C50D8',
  'purple-600': '#712DC8',
  'purple-700': '#5A239E',
  'purple-800': '#421A75',
  'purple-900': '#2A114B',

  // TURQUOISE
  'turquoise-700': '#176267',
  'turquoise-600': '#2E7D82',
  'turquoise-500': '#2D8E94',
  'turquoise-400': '#35ABB2',
  'turquoise-300': '#72C8CF',
  'turquoise-200': '#B6E4E7',
  'turquoise-100': '#EAF6F6',
  'turquoise-80': '#F7F8FA',

  // REDS
  'red-400': '#C92C22',
  'red-300': '#E04440',
  'red-200': '#EF5454',
  'red-100': '#F58B8B',
  'red-50': '#FFE6E6',

  // GREENS
  'green-300': '#1B7E37',
  'green-200': '#25B14D',
  'green-100': '#4CBE6C',
  'green-80': '#92D8A6',
  'green-50': '#E6F4EA',

  // ORANGES
  'orange-200': '#EE6002',
  'orange-100': '#FFA101',
  'orange-50': '#FFF2DF',
}

export const functionalColorsFx = (colors: { [key in BaseColor]: string }) => ({
  'brand-primary': colors['blue-700'],

  'accent-primary': colors['blue-700'],
  'accent-primary-hover': colors['blue-800'],
  'accent-primary-focus': colors['blue-800'],
  'accent-primary-active': colors['blue-900'],
  'accent-primary-disabled': colors['blue-400'],

  'accent-subtle': colors['black-300'],
  'accent-subtle-hover': colors['black-400'],
  'accent-subtle-focus': colors['black-400'],
  'accent-subtle-active': colors['black-500'],
  'accent-subtle-disabled': colors['black-100'],

  'accent-success': colors['green-100'],
  'accent-success-hover': colors['green-200'],
  'accent-success-focus': colors['green-200'],
  'accent-success-active': colors['green-300'],
  'accent-success-disabled': colors['green-80'],

  'accent-danger': colors['red-200'],
  'accent-danger-hover': colors['red-300'],
  'accent-danger-focus': colors['red-300'],
  'accent-danger-active': colors['red-400'],
  'accent-danger-disabled': colors['red-100'],

  'accent-warning': colors['orange-100'],
  'accent-info': colors['blue-600'],
  'accent-attention': colors['purple-400'],

  'text-primary': colors['black-700'],
  'text-secondary': colors['black-400'],
  'text-complementary': colors['black-300'],
  'text-invert': colors['white'],
  'text-placeholder': colors['black-200'],
  'text-info': colors['blue-800'],
  'text-success': colors['green-300'],
  'text-warning': colors['orange-200'],
  'text-danger': colors['red-400'],
  'text-attention': colors['purple-600'],

  'background-primary': colors['white'],
  'background-secondary': colors['black-50'],
  'background-info': colors['blue-50'],
  'background-success': colors['green-50'],
  'background-warning': colors['orange-50'],
  'background-danger': colors['red-50'],
  'background-attention': colors['purple-100'],
  'background-neutral': colors['black-80'],

  'control-border': colors['blue-300'],
  'control-background': colors['white'],
  'control-active-background': colors['black-60'],
  'control-active-border': colors['blue-700'],
  'control-invalid-border': colors['red-200'],
  'control-disabled': colors['blue-100'],

  'ui-border': colors['black-80'],
  'ui-navbar': colors['black-700'],
  'ui-navbar-text': colors['black-100'],

  'icon-primary': colors['black-200'],
  'icon-info': colors['blue-700'],
  'icon-success': colors['green-200'],
  'icon-warning': colors['orange-100'],
  'icon-danger': colors['red-200'],

  // NEUTRAL
  'neutral-900': colors['black-700'],
  'neutral-800': colors['black-600'],
  'neutral-700': colors['black-500'],
  'neutral-600': colors['black-400'],
  'neutral-500': colors['black-300'],
  'neutral-400': colors['black-200'],
  'neutral-300': colors['black-100'],
  'neutral-200': colors['black-80'],
  'neutral-100': colors['black-60'],
  'neutral-50': colors['black-50'],
  'neutral-0': colors['white'],
})

const functionalColors = functionalColorsFx(baseColors)

export type BaseColor = keyof typeof baseColors
export type FunctionalColor = keyof typeof functionalColors
export type Color = BaseColor | FunctionalColor
export type ColorScheme = { [key in Color]: string }

export const codacyThemeColors: ColorScheme = {
  ...baseColors,
  ...functionalColors,
}
