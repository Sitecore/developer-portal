// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { RoadmapItem } from './roadmapItem';

const meta: Meta<typeof RoadmapItem> = {
  title: 'Components/Roadmap/Roadmap Item',
  component: RoadmapItem,
};
export default meta;

type Story = StoryObj<typeof RoadmapItem>;

export const Basic: Story = {
  args: {
    item: {
      id: 123456,
      key: 'KEY-123',
      title: 'Example roadmap item',
      roadmapPhase: 'Next',
      product: [{ id: '123', name: 'product' }],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus fringilla augue et consequat. Sed eget gravida velit. Duis imperdiet consequat faucibus. Fusce sagittis ultricies convallis. Fusce in porttitor leo. Donec consectetur nisi id risus commodo molestie. Sed ut nisl quis leo varius semper et vel eros. Morbi ut cursus eros. Donec nec augue eu lacus venenatis dictum eget id nibh. Nulla auctor condimentum tellus, dictum varius ipsum ultricies eget. Vestibulum eu massa accumsan libero hendrerit condimentum id vel risus. Donec magna arcu, ultricies convallis tristique vitae, facilisis a purus.',
      attachments: [
        {
          id: '123',
          filename: '600x400',
          mimeType: 'image/svg+xml',
          content: 'string',
          thumbnail: 'https://placehold.co/300x200',
          url: 'https://placehold.co/600x400',
        },
        {
          id: '123',
          filename: '600x400',
          mimeType: 'image/svg+xml',
          content: 'string',
          thumbnail: 'https://placehold.co/300x200/000000/FFF',
          url: 'https://placehold.co/600x400/000000/FFF',
        },
      ],
      status: 'New',
    },
  },
};

export const NoAttachments: Story = {
  args: {
    item: {
      id: 123456,
      key: 'KEY-123',
      title: 'Example roadmap item',
      roadmapPhase: 'Next',
      product: [{ id: '123', name: 'product' }],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus fringilla augue et consequat. Sed eget gravida velit. Duis imperdiet consequat faucibus. Fusce sagittis ultricies convallis. Fusce in porttitor leo. Donec consectetur nisi id risus commodo molestie. Sed ut nisl quis leo varius semper et vel eros. Morbi ut cursus eros. Donec nec augue eu lacus venenatis dictum eget id nibh. Nulla auctor condimentum tellus, dictum varius ipsum ultricies eget. Vestibulum eu massa accumsan libero hendrerit condimentum id vel risus. Donec magna arcu, ultricies convallis tristique vitae, facilisis a purus.',
      attachments: [],
      status: 'New',
    },
  },
};
