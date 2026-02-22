import test, { expect } from '@playwright/test';
import path from 'path';
import { Expect } from '@playwright/test';
//C:\SessionProjects\PW_February\tests


test("upload file using Input Tag", async({page})=>{

    await page.goto(`https://leafground.com/file.xhtml`)
    // step 1 : Inspect the DOM , verify whether the element is located inside
    //          Input tag --> locate the webelement             
    const choose =page.locator(`(//input[@type='file'])[1]`)
    // step 2 : Indentify the File path from the project directory, enclose
    //           filename and filetype
    const filepath = path.join(__dirname, '../../uploadfile/ImageSample.png')
    // __dirname =C:\SessionProjects\PW_February\uploadfile
    // step 3 : Upload file  into <input type=file> using setInputFiles
    await choose.setInputFiles(filepath)
    await page.waitForTimeout(5000)
     // step 5 : Assert that the file injected into the website , with the same filename
    await expect(page.locator(`.ui-fileupload-filename`)).toHaveText(/ImageSample.*/);

    //scenario 2 : // Select multiple files
// await page.getByLabel('Upload files').setInputFiles([
//   path.join(__dirname, 'file1.txt'),
//   path.join(__dirname, 'file2.txt'),
// ]);

})

test("Upload file using Event Listener filechooser", async({page})=>{

    await page.goto(`https://the-internet.herokuapp.com/upload`)
    // step 1 : Establish the event which we are expectiong to happen
    const chooser = page.waitForEvent('filechooser',{timeout: 5000})
    // step 2 : Trigger the event using click
    page.locator(`//div[@id='drag-drop-upload']`).click()
    // step 3 : Resolve Promise by catching the event 
    const catchEvent = await chooser
    // step 4 : Inject file from the directory 
    await catchEvent.setFiles(path.join(__dirname, '../../uploadfile/PlaywrightBGI.png'))
    await page.waitForTimeout(5000)
    // step 5 : Assert that the file injected into the website , with the same filename
    await expect(page.locator(`(//div[@class='dz-filename']/span)[1]`)).toHaveText(/PlaywrightBGI.*/);


})