import test, { expect } from '@playwright/test'

test("Auto retry Assertion",async({page})=>{

await page.goto("https://www.leafground.com/input.xhtml")
const enabled =page.getByPlaceholder("Babu Manickam")
//hard assertion -> assertion is failed then test will be failed and
//  next line will not execute

//soft assertion -> assertion is failed then test will be passed and
await expect.soft(enabled).toBeDisabled({timeout:10000})
console.log("Assertion passed")

await expect(enabled).toBeEnabled()

})

test.only("Non Retry Assertion",async({page})=>{

    await page.goto("https://www.leafground.com/input.xhtml")

const titleValue=await page.title()
console.log(titleValue)
//Input Components
//hard assertion -> assertion is failed then test will be failed and
expect.soft(titleValue).toEqual("Input components")
console.log("Assertion Passed")






})