import { describe, expect, test } from 'vitest';

import { getProductsAsOptions } from '@/src/lib/jira';

describe('jira product labels', () => {
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
