
// 扩展类的原型
interface String {
    double(): string
}
String.prototype.double = function (): string {
    return this + '' + this
}
let str: string = 'abc'
// 在String原型上扩展一个double方法
console.log(str.double());
console.log(str.mydouble());// 模块内全局扩展的变量


// 扩展类的实例
interface Window {
    myName: string;
}
window.myName = 'hello'
window.myName1 // 模块内全局扩展的变量
console.log(window.myName);

