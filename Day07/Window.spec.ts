import test from '@playwright/test'

test("Window Handling",async({page,context})=>{

await page.goto("https://www.amazon.in/")
const data=page.locator("#twotabsearchtextbox")
await data.fill("iphone")
await data.press('Enter')

//create promise
const parentWindow=page.context().waitForEvent('page')

//perform the action
await page.locator("//span[contains(text(),'iPhone 17 Pro Max')]").first().click()

//resolve the promise
const childWindow=await parentWindow

//child window

const title=await childWindow.title()
console.log(title)

// const price=await childWindow.locator("(//span[@class='a-price-whole'])[5]").innerText()
// console.log(price)



})