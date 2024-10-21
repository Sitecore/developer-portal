// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { ArticlePaging } from './ArticlePaging';

const meta: Meta<typeof ArticlePaging> = {
  title: 'Components/Navigation/ArticlePaging',
  component: ArticlePaging,
};
export default meta;

type Story = StoryObj<typeof ArticlePaging>;

export const Basic: Story = {
  parameters: {
    nextjs: {
      router: {
        basePath: '/test',
      },
    },
  },
  args: {
    enabled: true,
    currentfileName: 'page-2',
    currentPath: '/example/page-2',
    config: {
      title: 'Test',
      description: 'Mocked content for storybook',
      heading: true,
      path: '/example',
      showRootAsSections: false,
      enableSearch: true,
      enableBreadcrumb: true,
      enableNextPrevious: true,
      routes: [
        {
          title: 'Page 1',
          path: 'page-1',
          ignoreLink: false,
          children: [
            {
              title: 'Page 1-1',
              path: 'page-1-1',
              children: [
                {
                  title: 'Page 1-1-1',
                  path: 'page-1-1-1',
                  children: [],
                },
                {
                  title: 'Page 1-1-2',
                  path: 'page-1-1-2',
                  children: [],
                },
              ],
            },
            {
              title: 'Page 1-2',
              path: 'page-1-2',
              children: [],
            },
          ],
        },
        {
          title: 'Page 2',
          path: 'page-2',
          ignoreLink: false,
          children: [],
        },
        {
          title: 'Page 3',
          path: 'page-3',
          ignoreLink: false,
          children: [],
        },
        {
          title: 'Page 4',
          path: 'page-4',
          ignoreLink: false,
          children: [],
        },
        {
          title: 'Page 5',
          path: 'page-5',
          ignoreLink: false,
          children: [],
        },
      ],
    },
  },
};
