// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { PromoCard } from './PromoCard';

const meta: Meta<typeof PromoCard> = {
  title: 'Components/Cards/PromoCard',
  component: PromoCard,
};
export default meta;

type Story = StoryObj<typeof PromoCard>;

export const Default: Story = {
  args: {
    title: 'Sample PromoCard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum felis elit, non consequat dolor scelerisque ac. Ut volutpat vel tortor in pellentesque. Integer vulputate dictum ligula a cursus.',
    link: {
      text: 'Developer Portal',
      href: 'https://developers.sitecore.com',
    },
    img: {
      src: 'https://placehold.co/600x400',
      alt: 'Placeholder image',
    },
  },
};

export const ImageRight: Story = {
  args: {
    title: 'Sample PromoCard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum felis elit, non consequat dolor scelerisque ac. Ut volutpat vel tortor in pellentesque. Integer vulputate dictum ligula a cursus.',
    link: {
      text: 'Developer Portal',
      href: 'https://developers.sitecore.com',
    },
    img: {
      src: 'https://placehold.co/600x400',
      alt: 'Placeholder image',
    },
    isImageLeft: false,
  },
};
