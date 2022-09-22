import { test, Page } from '@playwright/test';

// テストケースの並列実行を許可する
test.describe.configure({ mode: 'parallel' });

test.describe('Playwright [スナップショットを取る]', () => {
  
  // 書く test の前に実行
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({
      width: 1920,
      height: 1080,
    });
    // ページを開く
    await page.goto('http://localhost:3000');
  });

  test('TopPageのスクリーンショットを取得', async ({ page }) => {
    await page.screenshot({
      // スクリーンショットの保存先
      path: 'vr-test/screenshots/screenshots/top-page.png',
      fullPage: false,
    });
  });
});