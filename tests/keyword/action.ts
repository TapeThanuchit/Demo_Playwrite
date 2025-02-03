import { expect, type Locator, type Page } from '@playwright/test';



const URL = 'https://web-demo.qahive.com/'
const URL_Demo = 'https://demoqa.com/'
const clickme_btn = '#doubleClickBtn'
const dbclick_message_btn = '#doubleClickMessage'
const right_click_btn = '#rightClickBtn'
const rightClickMessage = '#rightClickMessage'

export const element = {
  clickme_btn,
  right_click_btn
};

export class elementPageDemo {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async Open_Browser() {
        await this.page.goto(URL_Demo);
    }

    async Select_Icon_Element() {
        const icon_element = '(//div[@class="card mt-4 top-card"]//div[@class="card-body"])[1]'
        await this.page.locator(icon_element).click();
    }

    async Select_Menu_Textbox(){
        const menu_textbox = '//*[text()="Text Box"]'
        await this.page.locator(menu_textbox).click();
    }

    async input_data_textbox(full_name,email,current_address,permanent_address){
        const fullname_input = '#userName'
        const email_input = '#userEmail'
        const current_address_input = '#currentAddress'
        const permanent_address_input = '#permanentAddress'
        await this.page.locator(fullname_input).fill(full_name);
        await this.page.locator(email_input).fill(email);
        await this.page.locator(current_address_input).fill(current_address);
        await this.page.locator(permanent_address_input).fill(permanent_address);
    }

    async Select_Menu_Buttons(){
      const menu_buttons = '//*[text()="Buttons"]';
      await this.page.locator(menu_buttons).click();
    }

    async DoubleClick_Element(locator_button){
      const locator_text = this.page.locator(dbclick_message_btn);
      await expect(locator_text).toBeHidden();
      await this.page.locator(locator_button).dblclick();
      await expect(locator_text).toBeVisible();
      await expect(locator_text).toHaveText('You have done a double click');
    }

    async Right_Click(locator_btton){
      const mylocator = this.page.locator(locator_btton);
      const locator_text = this.page.locator(rightClickMessage);

      await expect(locator_text).toBeHidden();
      //Input Option in action click
      await mylocator.click({
        button: 'right'
      });
      await expect(locator_text).toBeVisible();
      await expect(locator_text).toHaveText('You have done a right click');
    }



}





// const ExcelJS = require('exceljs');

// async function readExcel() {
//   const workbook = new ExcelJS.Workbook();
//   await workbook.xlsx.readFile('./keyword/Book1.xlsx'); // ระบุชื่อไฟล์ Excel

//   const worksheet = workbook.getWorksheet(1); // เลือก Sheet 1

//   let data = [];
//   worksheet.eachRow((row) => {
//     let rowData = [];
//     row.eachCell((cell) => {
//       rowData.push(cell.value);
//     });
//     data.push(rowData);
//   });

//   return data; // คืนค่าข้อมูล
// }

// module.exports = { readExcel };

































export class evaluationTest{
    // (a,b) คือการรับค่า Argument เป็นตัวแปร ที่เราต้องการ (a) => argument ตัวเดียว | (a,b) => argument มากกว่า 1 ตัวขึ้นไป
    async sum_test(a,b){
        
        const Total = a + b;
        // return Total
        return Total;   //return คือการคืนค่าตัวเดียว
    }

    async del_test(a,b){
        const Total = a-b;
        return Total
    }

    async sum_and_del(a,b){
        const x = a+b;
        const y = a-b;
        return {
            sum: x,
            del: y
        };
        //คืนค่าแบบ Object เหมือน JSON
        //กรณีต้องคืนค่ามากกว่า 1 ตัวขึ้นไป
    }

    async sum_and_del_array(a,b){
        const x = a+b;
        const y = a-b;
        return [x,y];    //คืนค่าแบบ Array
        //กรณีต้องคืนค่ามากกว่า 1 ตัวขึ้นไป
    }

    async function_forloop(check_array,count_array,testxx){
      if(check_array){
        console.log("Test For Loop");
          for (let i = 0; i < count_array; i++) {
            if (testxx[i] === 18) {
                console.log("เข้าเงื่ิอนไข testxx == 18");
                testxx[i] = testxx[i] + 2;
            }else{
                console.log("ไม่เข้าเงื่ิอนไข testxx == 18");
            }
            console.log(`ค่าใน index ${i} = ${testxx[i]}`);
          }
      }else{
        console.log("Not Array");
      }
      return  testxx;
    }


    
}


export class PlaywrightDevPage {
  readonly page: Page;  // ประกาศคุณสมบัติ page
  
//   readonly getStartedLink: Locator;
//   readonly gettingStartedHeader: Locator;
//   readonly pomLink: Locator;
//   readonly tocList: Locator;
    


  constructor(page: Page) {
    this.page = page;   // กำหนดค่าให้คุณสมบัติ page ของอินสแตนซ์

    // this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    // this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    // this.pomLink = page.locator('li', {
    //   hasText: 'Guides',
    // }).locator('a', {
    //   hasText: 'Page Object Model',
    // });
    // this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
    await this.page.goto(URL);  // ใช้คุณสมบัติ page ของอินสแตนซ์
  }

  async Go_To_From(){
    await this.page.getByRole('link', { name: 'Form' }).click();
  }

  async Input_UserName(username){
    
    await this.page.locator('#username').fill(username);

  }

//   async getStarted() {
//     await this.getStartedLink.first().click();
//     await expect(this.gettingStartedHeader).toBeVisible();
//   }

//   async pageObjectModel() {
//     await this.getStarted();
//     await this.pomLink.click();
//   }
}
