import test  from '@playwright/test'


test.use({storageState:"Helper/SF_Login.json"})
test("Use Storage State",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.locator("//span[text()='Accounts']").first().click()

})



test("Use Storage State 1",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.locator("//span[text()='Cases']").first().click()

})