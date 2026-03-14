import { LTMyHomePage } from "./MyHomePage";

class LTCreateAccount extends LTMyHomePage{

clickOnCreateAcc(){
    console.log("Click on create Account")
}

}

let ac=new LTCreateAccount()
ac.loadUrl()
ac.enterUserName()
ac.enterPassWord()
ac.clickOnLogin()
ac.clickOnCrm()
ac.clickOnAccounts()
ac.clickOnCreateAcc()
