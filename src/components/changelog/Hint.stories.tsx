// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { Hint } from './Hint';

const meta: Meta<typeof Hint> = {
  title: 'Components/Changelog/Hint',
  component: Hint,
};
export default meta;

type Story = StoryObj<typeof Hint>;

export const Basic: Story = {
  args: {
    products: [
      {
        label: 'XM Cloud',
        value: '0',
      },
    ],
    enabled: true,
  },
};
