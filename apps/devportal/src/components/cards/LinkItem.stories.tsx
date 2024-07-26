// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { LinkItem } from './LinkItem';

const meta: Meta<typeof LinkItem> = {
  title: 'Components/Cards/LinkItem',
  component: LinkItem,
};
export default meta;

type Story = StoryObj<typeof LinkItem>;

export const Basic: Story = {
  args: {
    title: 'Sample LinkItem',
    linktext: 'LinkItem',
    link: 'https://developers.sitecore.com',
  },
};
