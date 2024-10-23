import type { Meta, StoryObj } from '@storybook/react';
import { Repository } from './Repository';

const meta: Meta<typeof Repository> = {
  title: 'Components/Cards/Repository',
  component: Repository,
};
export default meta;

type Story = StoryObj<typeof Repository>;

export const ReactFramework: Story = {
  args: {
    name: 'My Repository',
    description: 'This is a sample repository',
    repositoryUrl: 'https://github.com/myusername/my-repo',
    framework: 'React',
    forks: 10,
    stars: 100,
    topics: ['Topic 1', 'Topic 2', 'Topic 3'],
  },
};

export const TypeScript: Story = {
  args: {
    name: 'My Repository',
    description: 'This is a sample repository',
    repositoryUrl: 'https://github.com/myusername/my-repo',
    framework: 'TypeScript',
    forks: 10,
    stars: 100,
  },
};

export const MultipleFrameworks: Story = {
  args: {
    name: 'My Repository',
    description: 'This is a sample repository',
    repositoryUrl: 'https://github.com/myusername/my-repo',
    framework: 'TypeScript|Nextjs',
    forks: 10,
    stars: 100,
  },
};
