"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var LoginPage = /** @class */ (function () {
    //Default
    // constructor() {
    //     console.log("Default constructor")
    // }
    //paramter constructor
    function LoginPage(url) {
        this.username = "DemoCsr";
        this.password = "crmsfa";
        //  console.log(url)
        //property and parameter -> this keyword
        //this- keyword is reffering your current class property and method
        this.url = url;
        console.log(this.url);
    }
    LoginPage.prototype.loadUrl = function () {
        console.log("Load url");
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//create object outside the class
// let obj=new LoginPage("https://www.leafground.com")
// //obj.methodname()
// obj.loadUrl()
// console.log(obj.username)
// console.log(obj.password)
// console.log(obj.url)
