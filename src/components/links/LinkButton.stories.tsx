// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/Links/LinkButton',
  component: LinkButton,
};
export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Basic: Story = {
  args: {
    href: 'http://developer.sitecore.com',
    text: 'Sitecore Developers',
    showIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    href: 'http://developer.sitecore.com',
    text: 'Sitecore Developers',
    showIcon: true,
    icon: <Icon path={mdiRss} size={1} />,
  },
};
