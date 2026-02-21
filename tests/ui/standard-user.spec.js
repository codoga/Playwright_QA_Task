const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');
const CheckoutPage = require('../../pages/CheckoutPage');
const { generateBookingData } = require('../test-data/ai-data-generator');

test('Standard user completes checkout with most expensive item', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  const { maxPrice, maxItemName } =
    await inventoryPage.addMostExpensiveItemToCart();

  expect(maxPrice).toBeGreaterThan(0);
  expect(maxItemName).toBeTruthy();

  await inventoryPage.goToCart();
  await cartPage.proceedToCheckout();

  const userData = generateBookingData();

  const generatePostalCode = () =>
    String(Math.floor(Math.random() * 90000 + 10000));

  await checkoutPage.fillInformation(
    userData.firstname,
    userData.lastname,
    generatePostalCode()
  );

  await checkoutPage.finishOrder();

  const successText = await checkoutPage.getSuccessMessage();
  expect(successText).toContain('Thank you for your order');
});
