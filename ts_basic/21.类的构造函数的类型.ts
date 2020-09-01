export { }

class Animal {
    constructor(public name: string) {

    }
}
// 使用接口约束类的钩子函数
// 根据Animal的构造函数定义了WithNameClass类型
interface WithNameClass {
    new(name: string): void
}
// 这里的Animal不是一个类型，是一个值
let w: WithNameClass = Animal

function createClass(clazz: WithNameClass, name: string): any {
    return new clazz(name)
}
let a = createClass(w, 'zf')
console.log(a);
