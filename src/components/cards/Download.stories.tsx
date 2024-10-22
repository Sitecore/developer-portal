// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { Download } from './Download';

const meta: Meta<typeof Download> = {
  title: 'Components/Cards/Download',
  component: Download,
};
export default meta;

type Story = StoryObj<typeof Download>;

export const Basic: Story = {
  args: {
    title: 'Sample Download',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link1text: 'Download',
    link1href: 'https://developers.sitecore.com',
  },
};

export const Primary: Story = {
  args: {
    title: 'Sample Download',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link1text: 'Download',
    link1href: 'https://developers.sitecore.com',
    link2text: 'Learn More',
    link2href: 'https://developers.sitecore.com',
  },
};
