//palywright default nature is -> auto dismiss
import test from '@playwright/test'

test("Auto Dismiss",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("(//span[text()='Show'])[2]").click()
    await page.waitForTimeout(10000)

})

//page.once and page.on
//page.once-> handle first alert which is present alone
//page.on -> we can handle multiple alerts


test("Handle alert with Page.Once",async({page})=>{

    page.once('dialog',alertType=>{

       const message= alertType.message()
       console.log(message)

       const type= alertType.type()
       console.log(type)

       alertType.accept()
    })
    await page.goto("https://www.leafground.com/alert.xhtml")
    //simple alert -> alert
    await page.locator("(//span[text()='Show'])[1]").click()

    await page.waitForTimeout(5000)

    await page.locator("(//span[text()='Show'])[2]").click()


})


test.only("Handle alert with Page.ON",async({page})=>{

    page.on('dialog',alertType=>{

       const message= alertType.message()
       console.log(message)

       const type= alertType.type()
       console.log(type)

       if(type==='alert'){
        alertType.accept()
       }else if(type==='confirm'){
        alertType.accept()
       }

    })

        await page.goto("https://www.leafground.com/alert.xhtml")
    //simple alert -> alert
    await page.locator("(//span[text()='Show'])[1]").click()

    await page.waitForTimeout(5000)

    await page.locator("(//span[text()='Show'])[2]").click()





})