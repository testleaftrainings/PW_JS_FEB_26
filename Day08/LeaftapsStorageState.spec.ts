import test from '@playwright/test';

test("storage state",async({page})=>{
await page.goto(`http://leaftaps.com/opentaps/control/login`)
await page.locator(`#username`).fill("democsr2");
await page.locator(`#password`).fill("crmsfa");
await page.locator(`.decorativeSubmit`).click();
await page.waitForLoadState('networkidle')
 await page.waitForTimeout(5000);
await page.getByRole('link').last().click();
await page.locator(`//a[text()='Leads']`).click();
await page.context().storageState({path :"sessionstorage/leaftapsAuth.json"})// auth token
// cookies contains below details
// "domain": "leaftaps.com"
// "path": "/opentaps"
// "name": "JSESSIONID"
// "value": "E3BE0550B200A32DEC66F1312CA1C50E.jvm1"
// http://leaftaps.com/opentaps/control/login;jsessionid=E3BE0550B200A32DEC66F1312CA1C50E.jvm1

})