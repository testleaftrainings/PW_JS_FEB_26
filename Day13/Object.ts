import { LoginPage } from "./Class"

let obj1=new LoginPage("Url")
obj1.loadUrl()
console.log(obj1.password)

//if we want call method or property from one file to another file
//export and import
//export class  and import where we are using