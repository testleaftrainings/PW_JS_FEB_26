"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LTHomePage = void 0;
var LoginPage_1 = require("./LoginPage");
var LTHomePage = /** @class */ (function (_super) {
    __extends(LTHomePage, _super);
    function LTHomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LTHomePage.prototype.clickOnCrm = function () {
        console.log("Click on CRMSFA");
    };
    return LTHomePage;
}(LoginPage_1.LTLoginPage));
exports.LTHomePage = LTHomePage;
// let hp=new LTHomePage()
// hp.loadUrl()
// hp.enterUserName()
// hp.enterPassWord()
// hp.clickOnLogin()
// hp.clickOnCrm()
