// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { GuidedDemo } from './GuidedDemo';

const meta: Meta<typeof GuidedDemo> = {
  title: 'Components/Common/GuidedDemo',
  component: GuidedDemo,
};
export default meta;

type Story = StoryObj<typeof GuidedDemo>;

export const Basic: Story = {
  args: {
    demoId: '123',
    linkText: 'Product Name',
    productName: 'XM Cloud',
    productLogo: 'XMCloud',
  },
};
