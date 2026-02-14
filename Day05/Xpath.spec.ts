import test from '@playwright/test'

test("Write With Basic Xpath",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("//input[@id='username']").fill("DemoSalesManager")
    await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")
    await page.locator("//input[@class='decorativeSubmit']").click()
    await page.locator("//a[contains(text(),'M/S')]").click()

    
})