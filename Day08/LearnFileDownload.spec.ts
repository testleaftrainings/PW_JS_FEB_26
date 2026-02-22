import test, { expect } from '@playwright/test'
import path from 'path'
import fs from 'fs'

test("Learn File download using event listerner",async({page})=>{
    await page.goto(`https://leafground.com/file.xhtml`)
    // step 1 : Establish the event which we are expectiong to happen
    const downloadEvent = page.waitForEvent('download',{timeout:10000})
     // step 2 : Trigger the event using click
     page.getByRole('button',{name:' Download'}).click()
     // step 3 : Resolve Promise by catching the event  and 
     const temp = await downloadEvent
     // step 4 : extract file from the response
     //temp.suggestedFilename
     await temp.saveAs(path.join(__dirname,"../../uploadfile/",temp.suggestedFilename()))
     // step 5 : Assert the file downloaded into the targeted path
     expect(fs.existsSync(path.join(__dirname,"../../uploadfile/",temp.suggestedFilename()))).toBeTruthy()


})