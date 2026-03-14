import { LTMyHomePage } from "./MyHomePage";

class LTCreateLead extends LTMyHomePage{

    clickOnCreateLead(){
        console.log("Click on Create Lead Button")
    }
}

let cl=new LTCreateLead()
cl.loadUrl()
cl.enterUserName()
cl.enterPassWord()
cl.clickOnLogin()
cl.clickOnCrm()
cl.clickOnLeads()
cl.clickOnCreateLead()