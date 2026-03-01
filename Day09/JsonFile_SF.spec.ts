import test from '@playwright/test'

import loginData from '../../Helper/SF.json'
//new variable from folder Json file

//for-of -> for(let a of logindata)

//run with all value
//for(let sfLogin of loginData){

//run only one set of data
let sfLogin=loginData[0]
//console.log(sfLogin.username)

test(`SF Login ${sfLogin.TestId}`,async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")

await page.locator("#username").fill(sfLogin.username)

await page.locator("#password").fill(sfLogin.password)

await page.locator("#Login").click()

})

//}