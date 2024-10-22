// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { mockedChangelogEntries } from '@/__mocks__/changelog/changelogEntry.mock';
import ChangelogEntries from './ChangelogEntries';

const meta: Meta<typeof ChangelogEntries> = {
  title: 'Components/Changelog/ChangelogEntries',
  component: ChangelogEntries,
};
export default meta;

type Story = StoryObj<typeof ChangelogEntries>;

export const Default: Story = {
  args: {
    entries: mockedChangelogEntries,
  },
};

export const HideProductIcon: Story = {
  args: {
    entries: mockedChangelogEntries,
    hideProductIcon: true,
  },
};
