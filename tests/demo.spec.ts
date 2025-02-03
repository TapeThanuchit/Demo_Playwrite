import { expect, test } from '@playwright/test';
import { elementPageDemo, evaluationTest, PlaywrightDevPage } from './keyword/action';
import { element } from './keyword/action';


test('DemoQA',async ({ page }) => {
    tag: '@testdemo';
    const QATest = new elementPageDemo(page);
    await QATest.Open_Browser();
    await QATest.Select_Icon_Element();
    await QATest.Select_Menu_Textbox();
    await QATest.input_data_textbox('testname',"test@gmail.com",'pleno','saimai');  //Str ต้องใส่ '' or ""
});


test('DemoQA_Buttons',async ({ page }) => {
    tag: '@testdemo';
    const QATest = new elementPageDemo(page);
    await QATest.Open_Browser();
    await QATest.Select_Icon_Element();
    await QATest.Select_Menu_Buttons();
    await QATest.DoubleClick_Element(element.clickme_btn);
    await QATest.Right_Click(element.right_click_btn);
});
































test('Genaral_Function',async () => {
    const view = new evaluationTest();  //call method in instant

    //ต้องมี await เพราะทำงาน กับ async และทำให้โค้ดสวยกว่า ไม่งั้นจะต้องใช้ then catch ซึ่งยุ่งยากกว่า

    const sumx = await view.sum_test(5,5);     //ถ้าเป็นตัวเลขไม่ต้องใส่ ''(cote) or ""(DoubleCote)
    const sumy = await view.del_test(10,7);
    const total_sum = await view.sum_test(sumx,sumy);
    console.log(`ค่าที่ทำได้ = ${total_sum}`);

    //รับค่าที่มากกว่า 1 ค่าเรียกใช้ แบบ Object
    const total_xy = await view.sum_and_del(10,5);
    //${total.sum} sum คือ Object ที่อยู่ภายใต้ตัวแปร total_xy
    console.log(`index1 = ${total_xy.sum}`);    //log ค่า พร้อม detail ได้
    console.log(total_xy.del);  //log แต่ ค่าเฉย

    //รับค่าจากการ Return Array เรียกใช้ แบบ Array
    const [indexx,indexy] = await view.sum_and_del_array(11,7);
    console.log(`index2 = ${indexx}`);
    
    
    const testxx = await view.sum_and_del_array(11,5);
    const check_array = Array.isArray(testxx);  //check variable is array
    const count_array = testxx.length;    //นับ Array
    console.log(`index3 = ${testxx[0]}`);   // log ผลตามตำแหน่ง array

    // if(check_array){
    //     console.log("Test For Loop")
    //     for (let i = 0; i < count_array; i++) {
    //         if (testxx[i] === 18) {
    //             console.log("เข้าเงื่ิอนไข testxx == 18")
    //             testxx[i] = testxx[i] + 2;
    //         }else{
    //             console.log("ไม่เข้าเงื่ิอนไข testxx == 18")
    //         }
    //         console.log(`ค่าใน index ${i} = ${testxx[i]}`);
    //     }
    // }else{
    //     console.log("Not Array")
    // }
    const array_total = await view.function_forloop(check_array,count_array,testxx);

    console.log("Log out of Loop")
    console.log(`ค่าใน indexนอกloop  = ${array_total[0]}`);


  


});
















test('Test Demo',async ({ page }) => {
    tag: '@testdemo';
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.Go_To_From();
    await playwrightDev.Input_UserName('test1');


    // await page.goto(URL);
    // await page.getByRole('link', { name: 'Form' }).click();

    // //await page.getByLabel('username*').fill('Test');
    // await page.locator('#username').fill('Test2');
    // await page.locator(firstname_input).fill('Test Xpath');
    // const locator = page.getByRole('heading', { name: 'Form Demo' })
    // await expect(locator).toContainText('Form Demo');
    // // GET Text
    // const text = await page.locator('role=heading[name="Form Demo"]').textContent();
    // console.log(text);


});






//ลองใช้then         //ยากจริง
test('trythen',() => {
    const view = new evaluationTest();

    view.sum_test(5, 5).then((sumx) => {
        view.del_test(10, 7).then((sumy) => {
            view.sum_test(sumx, sumy).then((total_sum) => {
                console.log(total_sum);
            });
        });
    }).catch((error) => {
        console.error('Error:', error);
    });

});