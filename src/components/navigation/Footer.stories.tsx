// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Navigation/Footer',
  component: Footer,
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Basic: Story = {
  args: {},
};
