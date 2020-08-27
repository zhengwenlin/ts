export { }
// 任意属性
// 接口的任意属性，当定义接口的时候无法预知有哪些新的属性的时候
// 可以使用任意属性

interface Type {
    name: string,
    [key: string]: any
}
let t: Type = {
    name: 'zf',
    age: 11 // 可以加任意的属性
}