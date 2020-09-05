export { }

// 接口的继承， 和类一样都是通过extends关键词继承
// 接口继承可以继承所有的属性

interface TypeParent {
    name: string
    speak(): void
}
interface TypeChild extends TypeParent {
    fly(): void;
    age: number
}
// 类型“{}”缺少类型“TypeChild”中的以下属性: fly, age, name, speak
let t1: TypeChild = {
    name: 'zf',
    age: 11,
    fly(): void {

    },
    speak(): void {

    }
}