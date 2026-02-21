class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = '.inventory_item';
    this.priceSelector = '.inventory_item_price';
    this.addToCartButton = 'button.btn_inventory';
    this.cartLink = '.shopping_cart_link';
  }

  async addMostExpensiveItemToCart() {
  const items = await this.page.$$(this.inventoryItems);

  let maxPrice = 0;
  let maxItemIndex = 0;
  let maxItemName = '';

  for (let i = 0; i < items.length; i++) {
    const priceElement = await items[i].$(this.priceSelector);
    const nameElement = await items[i].$('.inventory_item_name');

    const priceText = await priceElement.innerText();
    const nameText = await nameElement.innerText();

    const price = parseFloat(priceText.replace('$', ''));

    if (price > maxPrice) {
      maxPrice = price;
      maxItemIndex = i;
      maxItemName = nameText;
    }
  }

  const addButton = await items[maxItemIndex].$(this.addToCartButton);
  await addButton.click();

  return { maxPrice, maxItemName };
}


  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = InventoryPage;
