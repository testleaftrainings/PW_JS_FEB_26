import test from '@playwright/test'

test("Create Storage State for SF",async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")

await page.locator("#username").fill("manikandanleo4922@agentforce.com")

await page.locator("#password").fill("India@2026")

await page.locator("#Login").click()

//storage state -> storage file in json format

await page.context().storageState({path:"Helper/SF_Login1.json"})

})