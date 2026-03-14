import { LTLoginPage } from "./LoginPage";

export class LTHomePage extends LTLoginPage{

    clickOnCrm(){
        console.log("Click on CRMSFA")
    }
}

// let hp=new LTHomePage()
// hp.loadUrl()
// hp.enterUserName()
// hp.enterPassWord()
// hp.clickOnLogin()
// hp.clickOnCrm()