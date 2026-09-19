import { Page, Locator } from '@playwright/test';

export class TextBox {
  readonly menuTextBox: Locator;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly outputContainer: Locator;

  constructor(private page: Page) {
    this.menuTextBox = page.getByRole('link', { name: 'Text Box' })
    this.fullNameInput = page.getByRole('textbox', { name: 'Full Name' })
    this.emailInput = page.getByPlaceholder('name@example.com');
    this.currentAddressInput = page.getByPlaceholder('Current Address');
    this.permanentAddressInput = page.locator('#permanentAddress'); // กรณีไม่มี label/placeholder
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.outputContainer = page.locator('#output');
  }
  async selectMenu() {
    await this.menuTextBox.click();
  }

  async inputFullName(name: string) {
    await this.fullNameInput.fill(name);
  }

  async inputEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async inputCurrentAddress(address: string) {
    await this.currentAddressInput.fill(address);
  }

  async inputPermanentAddress(address: string) {
    await this.permanentAddressInput.fill(address);
  }

  async submit() {
    await this.submitButton.click();
  }
}