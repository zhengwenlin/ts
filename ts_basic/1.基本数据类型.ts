export { }
// 布尔类型
let flag: boolean = true;

// 数字类型 
let age: number = 19;

// 字符串类型
let username: string = 'lipiqiu'


// 数组类型
// 两种方式：
let array: number[] = [1, 2, 3]
let array1: Array<string> = ['1', '2', '3']

// 元组类型 tuple
// 在typescript中基础类型中，元组tuple表示一个已知数量和类型的数组
let zhufeng: [string, number] = ['zhufeng', 10]
let tup: [boolean, string] = [true, 'pqiu']

// 枚举类型：enum
// 列举的意思，就是将一个变量的所有有可能的值都罗列出来，比如，颜色，学历，性别等
// 1. 普通枚举
enum Sex {
  GIRL,
  BOY
}
// console.log(Sex)
// console.log(Sex[0])
// console.log(Sex['BOY'])

// 常量枚举
// 定义常量枚举： 就是在普通枚举前边加一个const
const enum Colors {
  RED,
  PINK,
  BLUE
}
console.log(Colors.RED)
console.log(Colors.PINK)
console.log(Colors.BLUE)
// console.log(Colors['0']) 错误方式

// any类型
let a: any = 100
let c: string
let m: boolean = true;
c = a;
m = a;

// null和undefined
// null 和 undefined是任何类型的子类型
// 设置 strictNullChecks 为true的话，不能将null和undefined赋值给其他类型
let x: number;
x = 1;
// x = undefined;    
// x = null;

let y: number | null | undefined;
y = 1;
y = undefined;
y = null;


// never类型
// 表示永远不会出现的值
// 1.抛出错误 2. 死循环 3. if条件进步去

function error(message: string): never {
  throw new Error('报错了')
  console.log(message)
}

function loop(): never {
  while (true) {

  }
  console.log(100)
}

function fn(x: number | string) {
  if (typeof x === 'number') {
    console.log(x)
  } else if (typeof x === 'string') {
    console.log(x)
  } else {
    console.log(x)
  }
}


// Symbol
let s1 = Symbol('key')
let s2 = Symbol('key')
console.log(s1 === s2) // false


// BigInt
// 大整型
// const max = Number.MAX_SAFE_INTEGER
// console.log(max) // 9007199254740991  2**53-1
// console.log(max + 1 === max + 2)

const max = BigInt(Number.MAX_SAFE_INTEGER)
// console.log(max) // 9007199254740991n
console.log(max + BigInt(1) === max + BigInt(2)); //false
// 目标低于 ES2020 时，bigInt 文本不可用
console.log(max + 1n === max + 2n); 

// 不兼容  不能将类型“bigint”分配给类型“number”
let foo: number;
let bar: bigint;
foo =bar;
bar = foo;
