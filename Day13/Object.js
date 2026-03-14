"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Class_1 = require("./Class");
var obj1 = new Class_1.LoginPage("Url");
obj1.loadUrl();
console.log(obj1.password);
//if we want call method or property from one file to another file
//export and import
//export class  and import where we are using
