import { test ,chromium } from "@playwright/test";

test("learn Context",async()=>{
     const browser = await chromium.launch( {channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto(`https://www.amazon.in/`)
    await page2.goto(`https://www.flipkart.com/`)
})