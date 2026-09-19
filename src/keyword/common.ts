import { Page } from '@playwright/test';

export class Common {
  constructor(private page: Page) {}

  async OpenDemo() {
    await this.page.goto(
      'https://demoqa.com/elements'
    );
  }

  async captureScreen(){
    await this.page.screenshot({
      path: 'screenshots/textbox.png'
    });
  }
}

