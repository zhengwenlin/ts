// 类型推论
// 定义变量未赋值，推论为any类型
// 定义类型赋值，根据值去猜类型
// 1. 定义变量不赋值 let num: any
let num;
// 可以随意赋值任何类型
num = 'string'
num = 100
// 2. 定义变量赋值

// 定义变量赋值字符串，推断为sting类型 let x: string
let x = 'zhufeng'
// 不能赋值为number类型
// x = 11 // 不能将类型“11”分配给类型“string”


// 联合类型：
let username: string | number;
// 没有赋值的时候，只能访问两种类型都有的公共方法
console.log(username!.toLocaleString())
console.log(username!.toString())
console.log(username!.valueOf())

// 赋值后, 值为string类型，可以方法string类型所有的方法
username = 'zhangsan'
console.log(username.toLocaleUpperCase())
console.log(username.toLowerCase())
console.log(username.length)


// 类型断言
let xx: number | string;
console.log((xx! as string).toLowerCase())
console.log((xx! as number).toFixed())
// 类型 "string | number" 到类型 "boolean" 的转换可能是错误的，因为两种类型不能充分重叠
// xx! as boolean

// 双重断言
xx! as any as boolean

// 字面量类型和类型字面量

// 1. 字面量类型
// 就是类型是一个字面量，不是变量
// 声明的变量的值必须和类型一样
const up: 'Up' = 'Up'
const down: 'Down' = 'Down'
const left: 'Left' = 'Left'
const right: 'Right' = 'Right'

type Direaction = 'Up' | 'Down' | 'Left' | 'Right'

function fn(direaction: Direaction): void {
    console.log(direaction)
}
fn('Up')


// 字符串字面量和联合类型
type T1 = '1' | '2' | '3'
type T2 = string | number | boolean

let t1: T1 = '1'
let t2: T2 = true

