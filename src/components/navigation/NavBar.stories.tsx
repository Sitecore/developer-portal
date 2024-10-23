// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import { SEARCH_CONFIG } from '@lib/search';
import { WidgetsProvider } from '@sitecore-search/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'Components/Navigation/NavBar',
  component: NavBar,
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Basic: Story = {
  args: {
    searchEnabled: true,
  },
  parameters: {
    viewport: {
      //👇 Set available viewports for every story in the file
      viewports: MINIMAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story) => (
      <WidgetsProvider {...SEARCH_CONFIG}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </WidgetsProvider>
    ),
  ],
};

export const Dark: Story = {
  args: {
    searchEnabled: false,
  },
  globals: { theme: 'dark' },
};
