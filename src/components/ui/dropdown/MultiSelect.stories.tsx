// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/UI/Dropdown',
  component: MultiSelect,
};
export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Basic: Story = {
  parameters: {
    docs: {
      story: {
        height: '300px',
      },
    },
  },
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    menuPlacement: 'bottom',
  },
};
