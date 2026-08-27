import { Page } from '@playwright/test';

export class TextBox {
  constructor(private page: Page) {}
  async selectMenu() {
    await this.page.locator('a[href="/text-box"]').click();
  }

  async inputFullName(
    name: string
  ) {
    await this.page.locator('#userName').fill(name);
  }

  async inputEmail(
    email: string
  ) {
    await this.page.locator('#userEmail').fill(email);
  }

  async inputCurrentAddress(
    address: string
  ) {
    await this.page.locator('#currentAddress').fill(address);
  }

  async inputPermanentAddress(
    address: string
  ) {
    await this.page.locator('#permanentAddress').fill(address);
  }

  async submit() {
    await this.page.locator('#submit').click();
  }
}