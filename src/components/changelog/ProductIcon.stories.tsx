// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { ProductIcon } from './ProductIcon';

const meta: Meta<typeof ProductIcon> = {
  title: 'Components/Changelog/ProductIcon',
  component: ProductIcon,
};
export default meta;

type Story = StoryObj<typeof ProductIcon>;

export const Basic: Story = {
  args: {
    product: {
      id: 'av_GqshF5U2kL8XMGjf-Xw',
      productName: 'XM Cloud',
      productDescription: '',
      darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud-dark',
      lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-xm_cloud',
    },
  },
};
