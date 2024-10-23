// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { mockedChangelogEntry } from '@/__mocks__/changelog/changelogEntry.mock';
import { ChangelogItemMeta } from './ChangelogItemMeta';

const meta: Meta<typeof ChangelogItemMeta> = {
  title: 'Components/Changelog/ChangelogItemMeta',
  component: ChangelogItemMeta,
};
export default meta;

type Story = StoryObj<typeof ChangelogItemMeta>;

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

export const Scheduled: Story = {
  args: {
    item: {
      ...mockedChangelogEntry,
      scheduled: true,
    },
  },
};

export const InProgress: Story = {
  args: {
    item: {
      ...mockedChangelogEntry,
      status: {
        id: '8OiTP5UK',
        identifier: 'in-progress',
        name: 'In Progress',
        description: '',
      },
    },
  },
};
