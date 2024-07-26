// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { mockedChangelogEntry } from '@/src/__tests__/mocks/changelog/changelogEntry.mock';
import ChangeLogItem from './ChangeLogItem';

const meta: Meta<typeof ChangeLogItem> = {
  title: 'Components/Changelog/ChangeLogItem',
  component: ChangeLogItem,
};
export default meta;

type Story = StoryObj<typeof ChangeLogItem>;

export const Default: Story = {
  args: {
    item: {
      ...mockedChangelogEntry,
    },
  },
};

export const WithBreakingChange: Story = {
  args: {
    item: {
      ...mockedChangelogEntry,
      breakingChange: true,
    },
  },
};

export const Status: Story = {
  args: {
    item: {
      ...mockedChangelogEntry,
      status: {
        id: '8OiTP5UK',
        name: 'Available',
        identifier: 'released',
        description: 'This version has been released and is available for use.',
      },
    },
  },
};

export const MultipleProducts: Story = {
  args: {
    item: {
      ...mockedChangelogEntry,
      products: [
        {
          id: '8OiTP5UKXE-RRpU17Vpq4A',
          productName: 'Content Hub',
          productDescription: '',
          darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
          lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
        },
        {
          id: '8OiTP5UKXE-RRpU17Vpq4A',
          productName: 'Content Hub ONE',
          productDescription: '',
          darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub_one-dark',
          lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub_one',
        },
        {
          id: '8OiTP5UKXE-RRpU17Vpq4A',
          productName: 'XM Cloud',
          productDescription: '',
          darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
          lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
        },
      ],
    },
  },
};
