import { mockedChangelogEntries } from '@/src/__tests__/mocks/changelog/changelogEntry.mock';
import type { Meta, StoryObj } from '@storybook/react';
import { delay, http, HttpResponse } from 'msw';
import ChangelogList from './ChangelogList';

const meta: Meta<typeof ChangelogList> = {
  title: 'Components/Changelog/ChangelogList',
  component: ChangelogList,
};
export default meta;

type Story = StoryObj<typeof ChangelogList>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint/', () => {
          return HttpResponse.json(mockedChangelogEntries);
        }),
      ],
    },
  },
};

export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint', async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
