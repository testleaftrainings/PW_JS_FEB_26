// 3 -> public , private , protected
//public -> default access modifier
//private -> its access inside class
//protected -> access inside class and inhert
//property and methods 
var Methods = /** @class */ (function () {
    function Methods() {
    }
    Methods.prototype.add = function () {
        console.log(2 + 5);
    };
    Methods.prototype.sub = function () {
        console.log(7 - 3);
    };
    Methods.prototype.mul = function () {
        console.log(6 * 7);
    };
    Methods.prototype.data = function () {
        this.mul();
        this.sub();
    };
    return Methods;
}());
var acc = new Methods();
acc.add();
acc.data();
