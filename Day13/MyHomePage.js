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
var HomePage_1 = require("./HomePage");
var LTMyHomePage = /** @class */ (function (_super) {
    __extends(LTMyHomePage, _super);
    function LTMyHomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LTMyHomePage.prototype.clickOnLeads = function () {
        console.log("click on leads button");
    };
    return LTMyHomePage;
}(HomePage_1.LTHomePage));
var mhp = new LTMyHomePage();
mhp.loadUrl();
mhp.enterUserName();
mhp.enterPassWord();
mhp.clickOnLogin();
mhp.clickOnCrm();
mhp.clickOnLeads();
