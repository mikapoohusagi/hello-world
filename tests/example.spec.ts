import { test } from '@playwright/test';

test('visual regression test', async ({ page }) => {
  await page.goto('http://localhost:3000/top', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '__screenshots__/top.png', fullPage: true });
});