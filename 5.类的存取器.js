"use strict";
// 类的存取器
exports.__esModule = true;
var Person = /** @class */ (function () {
    // username!: string;
    function Person(username) {
        this.username = username;
        // this.username = username;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this.username;
        },
        set: function (val) {
            this.username = val;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p1 = new Person('zhangsan');
console.log(p1.name);
p1.name = 'zhufeng';
console.log(p1.name);


