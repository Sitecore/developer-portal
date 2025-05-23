// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { Phase } from '@/src/lib/jira';
import { RoadmapPhase } from './roadmapPhase';

const meta: Meta<typeof RoadmapPhase> = {
  title: 'Components/Roadmap/Roadmap Phase',
  component: RoadmapPhase,
};
export default meta;

type Story = StoryObj<typeof RoadmapPhase>;

export const Basic: Story = {
  args: {
    roadmap: {
      items: [
        {
          id: 123456,
          key: 'KEY-123',
          title: 'Example roadmap item',
          roadmapPhase: 'Now',
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
        {
          id: 123456,
          key: 'KEY-123',
          title: 'Second example roadmap item',
          roadmapPhase: 'Now',
          product: [{ id: '123', name: 'product' }],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus fringilla augue et consequat. Sed eget gravida velit. Duis imperdiet consequat faucibus. Fusce sagittis ultricies convallis. Fusce in porttitor leo. Donec consectetur nisi id risus commodo molestie. Sed ut nisl quis leo varius semper et vel eros. Morbi ut cursus eros. Donec nec augue eu lacus venenatis dictum eget id nibh. Nulla auctor condimentum tellus, dictum varius ipsum ultricies eget. Vestibulum eu massa accumsan libero hendrerit condimentum id vel risus. Donec magna arcu, ultricies convallis tristique vitae, facilisis a purus.',
          attachments: [],
          status: 'New',
        },
      ],
      products: [{ value: '123', label: 'product' }],
    },
    phase: Phase.NOW,
    //selectedProducts?: Option[],
    title: 'Title',
    color: 'success-bg',
    isLoading: false,
  },
};
