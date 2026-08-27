import { expect, test } from '@playwright/test';
import { Common } from '../tests/keyword/common.ts';
import { TextBox } from '../tests/pages/elements.ts';
import data from '../tests/testdata/data.json';

test('elements textbox success', async ({ page }) => {
    const common = new Common(page);
    const featTextBox = new TextBox(page);

    await common.OpenDemo();
    await featTextBox.selectMenu();
    await featTextBox.inputFullName(data.fullname);
    await featTextBox.inputEmail(data.email);
    await featTextBox.inputCurrentAddress(data.cAddress);
    await featTextBox.inputPermanentAddress(data.pAddress);
    await featTextBox.submit();
    await common.captureScreen();
});

