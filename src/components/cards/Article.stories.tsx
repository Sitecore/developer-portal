// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { Article } from './Article';

const meta: Meta<typeof Article> = {
  title: 'Components/Cards/Article',
  component: Article,
};
export default meta;

type Story = StoryObj<typeof Article>;

export const Basic: Story = {
  args: {
    title: 'Sample Article',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    linktext: 'Read more',
    link: 'https://developers.sitecore.com',
  },
};

export const HideLinkText: Story = {
  args: {
    title: 'Sample Article',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hideLinkText: true,
    linktext: 'Read more',
    link: 'https://developers.sitecore.com',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Sample Article',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    linktext: 'Read more',
    imageUrl: 'https://via.placeholder.com/150',
    link: 'https://developers.sitecore.com',
  },
};
