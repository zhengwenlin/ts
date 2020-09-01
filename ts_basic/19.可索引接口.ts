export { }
// 对对象和数组进行约束

// 1. 约束对象
interface Type {
    name: string
    [index: number]: any
}
let t: Type = {
    name: 'zf',
    0: 'h',
    1: 'e',
    2: 'l',
    3: 'l',
    4: '0'
}
// 通过索引可以取到值
console.log(t[0]);

// 2. 约束数组
interface Type2 {
    [index: number]: any
}
let array: Type2 = [1, 2, 3, 4]
console.log(array[0]);
