import type { Meta, StoryObj } from '@storybook/react'

import { Placeholder } from './Placeholder'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Placeholder> = {
  title: 'Components/Placeholder',
  component: Placeholder,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['codacy'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //   },
}

export default meta
type Story = StoryObj<typeof Placeholder>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Content of the placeholder',
    debugMe: false,
    p: 4,
    textColor: 'white',
    // primary: true,
    // label: 'Button',
  },
}
