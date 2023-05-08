import React from 'react'
import type { Preview } from '@storybook/react'

import { ThemeProvider } from '../src/theme/ThemeProvider'
import { codacyTheme, pulseTheme } from '../src/theme'

const Themes = {
  codacy: codacyTheme,
  pulse: pulseTheme,
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Theme for components',
      defaultValue: 'codacy',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'codacy', icon: 'verified', title: 'Codacy (Default)' },
          { value: 'pulse', icon: 'graphline', title: 'Pulse' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={Themes[context.globals.theme]}>
        <Story {...context} />
      </ThemeProvider>
    ),
  ],
}

export default preview
