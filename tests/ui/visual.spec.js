const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.describe('Visual comparison between standard_user and visual_user', () => {

  test('Inventory layout comparison', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // 1️⃣ Standard user
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForLoadState('networkidle');

    const standardInventory = page.locator('.inventory_list');

    await expect(standardInventory)
      .toHaveScreenshot('standard-inventory.png');

    // 2️⃣ Reset page
    await page.goto('https://www.saucedemo.com/');

    // 3️⃣ Visual user
    await loginPage.login('visual_user', 'secret_sauce');
    await page.waitForLoadState('networkidle');

    const visualInventory = page.locator('.inventory_list');

    await expect(visualInventory)
  .toHaveScreenshot('visual-inventory.png', {
    maxDiffPixelRatio: 0.02
  });

  });

});

