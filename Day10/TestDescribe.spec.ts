import test from '@playwright/test'

test.describe("Smoke tesing",()=>{

    test.describe.configure({mode:'default'})

test("Test Describe1",async({page})=>{

    test.info().annotations.push({type:'Testing',description:"Smoke testing"},
        {type:'author',description:'Dilip'}
    )

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator(".inputLogin").last().fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
const pageTitle=await page.title()
console.log(pageTitle)

await page.waitForTimeout(4000)

})

test("Test Describe2",async({page})=>{

    test.info().annotations.push({type:'Testing',description:"Smoke testing"},
        {type:'author',description:'Dilip'}
    )

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator(".inputLogin").last().fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
const pageTitle=await page.title()
console.log(pageTitle)

await page.waitForTimeout(4000)

})

test("Test Describe3",async({page})=>{

    test.info().annotations.push({type:'Testing',description:"Smoke testing"},
        {type:'author',description:'Dilip'}
    )

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator(".inputLogin").last().fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
const pageTitle=await page.title()
console.log(pageTitle)

await page.waitForTimeout(4000)

})


















})