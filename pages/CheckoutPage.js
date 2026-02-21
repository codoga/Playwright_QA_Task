class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async fillInformation(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async finishOrder() {
    await this.page.click(this.finishButton);
  }

  async getSuccessMessage() {
    return await this.page.innerText(this.successMessage);
  }
}

module.exports = CheckoutPage;
