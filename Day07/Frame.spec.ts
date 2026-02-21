import test from '@playwright/test'

test("Handle frame with index",async({page})=>{


await page.goto("https://www.leafground.com/frame.xhtml")

const count=page.frames()
console.log(count.length)

//first frame -> main page 
//4 frames  +main page 1-> 5
//index start from '0'
//[0]->main page,[1]-> 1st frame,[2]-> 2nd frame,[3]-> 3rd frame,[4]->4th frame

//now swtich frame  first frame
const frame1=count[1]
await frame1.locator("#Click").click()

await page.waitForTimeout(3000)

//nested  frame -> 
const frame4=count[4]
await frame4.locator("#Click").click()

await page.waitForTimeout(3000)
})


test("Handle Frame with Frame Locator",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    await page.frameLocator("(//iframe)[1]").locator("#Click").click()

    await page.waitForTimeout(2000)
    
})

test.only("handle Frame with FrameObject",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    await page.frame({url:'https://www.leafground.com/default.xhtml'})?.locator("#Click").click()
//url :https://www.leafground.com/default.xhtml
//name



})