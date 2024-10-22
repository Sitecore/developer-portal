// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { mockedSidebarNavigationConfigRoutes } from '@/__mocks__/navigation/sidebarNavigationItems';
import { ArticlePagingNext } from './ArticlePagingNext';

const meta: Meta<typeof ArticlePagingNext> = {
  title: 'Components/Navigation/ArticlePagingNext',
  component: ArticlePagingNext,
};
export default meta;

type Story = StoryObj<typeof ArticlePagingNext>;

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
    currentFileName: 'page-2',
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
      routes: mockedSidebarNavigationConfigRoutes,
    },
  },
};
