// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { VideoPromo } from './videoPromo';

const meta: Meta<typeof VideoPromo> = {
  title: 'Components/Cards/VideoPromo',
  component: VideoPromo,
};
export default meta;

type Story = StoryObj<typeof VideoPromo>;

export const Default: Story = {
  args: {
    title: 'Sample VideoPromo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum felis elit, non consequat dolor scelerisque ac. Ut volutpat vel tortor in pellentesque. Integer vulputate dictum ligula a cursus.',
    //    videoUrl: '',
    youTubeId: 'z5tQIjLNe8M',
    linkText: 'Sitecore Developer Portal',
    linkHref: 'https://developers.sitecore.com',
  },
};

export const CustomUrl: Story = {
  args: {
    title: 'Sample VideoPromo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum felis elit, non consequat dolor scelerisque ac. Ut volutpat vel tortor in pellentesque. Integer vulputate dictum ligula a cursus.',
    videoUrl: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/17e670f88d97479cbf10f882324acc98?v=2e4e8781',
    linkText: 'Sitecore Developer Portal',
    linkHref: 'https://developers.sitecore.com',
  },
};
