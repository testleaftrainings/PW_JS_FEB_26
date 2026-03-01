import test from '@playwright/test'
import dotenv from 'dotenv'

const Value=process.env.EnvFile||"SF_LoginQA"||"SF_LoginDev"
dotenv.config({path:`Helper/${Value}.env`})

test(`SF Login ENV`,async({page})=>{

    //process.env.variable
    //process-> globals access data
    //env-> env file
    //variable -> SF_Url

    let url=process.env.SF_Url as string
    let user=process.env.SF_Username as string
    let pass=process.env.SF_Password as string

await page.goto(url)

await page.locator("#username").fill(user)

await page.locator("#password").fill(pass)

await page.locator("#Login").click()

})