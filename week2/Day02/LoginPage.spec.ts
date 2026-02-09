import test from '@playwright/test'

test("Login with Css Locator",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator(".inputLogin").last().fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
const pageTitle=await page.title()
console.log(pageTitle)

await page.waitForTimeout(4000)





})