import { describe, expect, test } from 'vitest';

import { getProductsAsOptions } from '@/src/lib/jira';

describe('jira product labels', () => {
  test('only includes products to show and deduplicates by id', async () => {
    const issues = [
      {
        fields: {
          customfield_24688: [
            { id: 'cms', value: 'SitecoreAI CMS' },
            { id: 'commerce', value: 'Commerce/OC' },
            { id: 'unknown', value: 'Unknown Product' },
            { id: 'cms', value: 'SitecoreAI CMS' },
            { id: 'marketplace', value: 'Marketplace' },
          ],
        },
      },
      { fields: {} },
    ] as any;

    await expect(getProductsAsOptions(issues)).resolves.toEqual([
      { label: 'SitecoreAI CMS', value: 'cms' },
      { label: 'Marketplace', value: 'marketplace' },
    ]);
  });

  test('normalizes Common Platform to Platform', async () => {
    const issues = [
      {
        fields: {
          customfield_24688: [
            {
              id: 'common-platform',
              value: 'Common Platform',
            },
          ],
        },
      },
    ] as any;

    await expect(getProductsAsOptions(issues)).resolves.toEqual([
      {
        label: 'Platform',
        value: 'common-platform',
      },
    ]);
  });
});
