"use strict";
// 继承静态属性
var extendStatics = function (Child, Father) {
    for (var p in Father) if (Father.hasOwnProperty(p)) Child[p] = Father[p];
};
//继承私有属性
var __extends = function (Child, Father) {
    extendStatics(Child, Father);
    function __() { this.constructor = Child; }
    Child.prototype = Father === null ? Object.create(Father) : (__.prototype = Father.prototype, new __());
};


function Father() {
    this.age = 10;
}
Father.uname = 'father';


__extends(Child, Father);
function Child() {
    return Father !== null && Father.apply(this, arguments) || this;
}

