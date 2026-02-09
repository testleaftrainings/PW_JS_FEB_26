import test from '@playwright/test'

test("using Page Fixture",async({page})=>{

    await page.goto('https://www.amazon.in')
    await page.waitForTimeout(5000)
})