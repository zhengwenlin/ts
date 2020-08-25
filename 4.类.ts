export { }

// 如何定义类
class Person {
    name!: string;
    getName(): void {
        console.log(this.name)
    }
}
let p1: Person = new Person()
p1.name = 'zhufeng'
p1.getName()
console.log(typeof Person, 'xxx')
let c: typeof Person = class extends Person { }


// 定义类会得到两个类型：
// 1. 构造函数的函数类型
// 2. 类的实例类型