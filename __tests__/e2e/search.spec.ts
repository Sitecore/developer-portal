import { expect, test } from '@playwright/test';

test('Toggle search bar', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Toggle the search box').click();
  await expect(page.locator('.css-1qdrica')).toBeVisible();
  await expect(page.getByPlaceholder('search for')).toBeEmpty();
  await expect(page.getByText('Powered by')).toBeVisible();
  await page.getByRole('img', { name: 'Sitecore Search logo' }).click();
});

test('Search for content', async ({ page }) => {
  await page.goto('http://localhost:3000/search?q=content');
  await expect(page.getByRole('main')).toContainText('Showing 1 to 24 from 10000 results for "content"');
});
