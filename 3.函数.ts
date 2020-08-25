export { }
// 函数分为 函数声明语句和函数表达式
//1. 函数声明
function sum(x: number, y: number): number {
    return x + y
}
//2. 函数表达式
//因为函数表达式是使用变量接收的：let add = function(){},所以要指定变量的类型
//定义函数的类型
type GenerateName = (firstName: string, lastName: string) => string
let getName: GenerateName = function (firstName: string, lastName: string): string {
    return firstName + lastName
}
console.log(getName('郑文林', '李文秀'))

// 函数没有返回值

type Fn = (message: string) => void
let fn: Fn = function (message: string): void {
    console.log(message)
}
fn('hello')

// 可选参数 ?
// ts中形参的实参必须一样，如果想不一样，可以配置可选参数
// 可选参数的位置：参数的最后

function optionalFn(a: string, b?: string, c?: number): void {
    console.log(a, b, c)
}
optionalFn('1', '2', 3) // 1 2 3
optionalFn('1', '2') // 1 2 undefined


// 默认参数
function print(msg: string = 'helloxx'): void {
    console.log(msg)
}
print()

// 剩余参数
function sum1(...numbers: any[]) {
    return numbers.reduce((prev, current) => prev + current, 0)
}
console.log(sum1(1, 2, 3, 4))


// 函数的重载
// ts中的函数重载，是指一个函数有多个函数类型定义
let obj: any = {}
function attr(val: number): void;
function attr(val: string): void;
function attr(val: any): void
function attr(val: any): void {
    if (typeof val === 'string') {
        obj.name = val
    } else if (typeof val === 'number') {
        obj.age = val
    }
}
attr('zs')
attr(18)
console.log(obj)