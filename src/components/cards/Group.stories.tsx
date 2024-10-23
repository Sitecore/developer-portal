// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { Group } from './Group';
import { LinkItem } from './LinkItem';

const meta: Meta<typeof Group> = {
  title: 'Components/Cards/Group',
  component: Group,
};
export default meta;

type Story = StoryObj<typeof Group>;

export const Basic: Story = {
  args: {
    title: 'Title',
    description: 'Group description',
    columns: 2,
    children: {
      story: 'GroupItem',
      args: {
        children: 'Group Item',
      },
    },
  },
  render: (args) => (
    <Group {...args}>
      <LinkItem title="Example title" link="#" />
      <LinkItem title="Example title" link="#" />
      <LinkItem title="Example title" link="#" />
      <LinkItem title="Example title" link="#" />
    </Group>
  ),
};

export const ThreeColumns: Story = {
  args: {
    title: 'Title',
    description: 'Group description',
    columns: 3,
    children: {
      story: 'GroupItem',
      args: {
        children: 'Group Item',
      },
    },
  },
  render: (args) => (
    <Group {...args}>
      <LinkItem title="Example title" link="#" />
      <LinkItem title="Example title" link="#" />
      <LinkItem title="Example title" link="#" />
      <LinkItem title="Example title" link="#" />
      <LinkItem title="Example title" link="#" />
      <LinkItem title="Example title" link="#" />
    </Group>
  ),
};
