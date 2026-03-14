export class LoginPage{

username:string="DemoCsr"
password:string="crmsfa"

url:string

loadUrl(){
    console.log("Load url")
}

//Default
// constructor() {
//     console.log("Default constructor")
// }

//paramter constructor
constructor(url:string) {
  //  console.log(url)
    //property and parameter -> this keyword
    //this- keyword is reffering your current class property and method
   this.url=url
   console.log(this.url)
}

//inside the class we cannot create the object
//let obj=new LoginPage()
}

//create object outside the class
// let obj=new LoginPage("https://www.leafground.com")
// //obj.methodname()
// obj.loadUrl()
// console.log(obj.username)
// console.log(obj.password)
// console.log(obj.url)
