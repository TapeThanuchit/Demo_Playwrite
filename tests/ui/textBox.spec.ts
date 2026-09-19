import { expect, test } from '@playwright/test';
import { Common } from '@methods/common';
import { TextBox } from '@pages/elements';
import data from '@testdata/data.json';

test.describe('Elements - TextBox Feature', () => {
    // 1. ประกาศตัวแปรไว้ในระดับ Describe Scope เพื่อให้ทุก test() ดึงไปใช้ร่วมกันได้
    let common: Common;
    let featTextBox: TextBox;

    // 2. beforeEach จะรันก่อนหน้า "ทุกๆ testเคส" เสมอ
    test.beforeEach(async ({ page }) => {
        common = new Common(page);
        featTextBox = new TextBox(page);
        await common.OpenDemo();
        await featTextBox.selectMenu();
    });

    // -------------------------------------------------------------
    // เทสเคสที่ 1: กรอกข้อมูลสำเร็จตามปกติ (Happy Path)
    // -------------------------------------------------------------
    test('should submit textbox form successfully with valid data', async ({ page }) => {
        await featTextBox.inputFullName(data.fullname);
        await featTextBox.inputEmail(data.email);
        await featTextBox.inputCurrentAddress(data.cAddress);
        await featTextBox.inputPermanentAddress(data.pAddress);
        await featTextBox.submit();

        // Assertion ตรวจสอบผลลัพธ์
        const outputBox = page.locator('#output');
        await expect(outputBox).toContainText(data.fullname);
        await expect(outputBox).toContainText(data.email);
    });

    // -------------------------------------------------------------
    // เทสเคสที่ 2: กรอก Email ผิด Format ต้องแสดง Error (Negative Path)
    // -------------------------------------------------------------
    test('should show error style when email format is invalid', async ({ page }) => {
        await featTextBox.inputFullName(data.fullname);
        await featTextBox.inputEmail('invalid-email-format'); // ส่งอีเมลผิดฟอร์แมต
        await featTextBox.submit();

        // Assertion ตรวจสอบว่าช่อง Email ขึ้นขอบแดง/Class error (ตัวอย่างของ DemoQA)
        const emailInput = page.locator('#userEmail');
        await expect(emailInput).toHaveClass(/field-error/);
    });

    // -------------------------------------------------------------
    // เทสเคสที่ 3: ไม่กรอกข้อมูลอะไรเลย แล้วกด Submit (Edge Case)
    // -------------------------------------------------------------
    test('should not display output section when submitting empty form', async ({ page }) => {
        await featTextBox.submit();

        // Assertion ตรวจสอบว่ากล่อง Output ต้องไม่แสดงข้อความใดๆ
        const outputBox = page.locator('#output');
        await expect(outputBox).not.toBeVisible();
    });
});