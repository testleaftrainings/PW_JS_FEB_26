//spec.ts

import test, { chromium, firefox } from "playwright/test";
test('Launch Browser',async()=>{
//launch the browser
//default is headless mode -> no UI will be shown
const browser= await chromium.launch({headless:false})

//open the window -> context
const context= await browser.newContext()

//create new page
const page=await context.newPage()

//load the url
await page.goto('https://www.amazon.in')

await page.waitForTimeout(5000)
})