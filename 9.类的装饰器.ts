export { }
// 装饰器： 类的装饰器、属性装饰器、参数装饰器
// 对修饰器的实验支持功能在将来的版本中可能更改。
// 在 "tsconfig" 或 "jsconfig" 中设置 "experimentalDecorators"
// 装饰器分为 装饰器和装饰器工厂
// 装饰器本质是一个函数
// 装饰器的执行顺序， 从内到外

// 类装饰器 参数是类的构造函数
// 此装饰器的作用是给类增加属性和方法
function addNameEat(target: Function) {
    target.prototype.name = 'zhufeng'
    target.prototype.getName = function () {
        console.log(this.name)
    }
}
@addNameEat
class Person {
    getName!: Function;
    public name!: string; // 属性
    public age: number; // 属性
    constructor(age: number) {
        this.age = age
    }
}

let p1 = new Person(10)
console.log(p1.name);
p1.getName()
