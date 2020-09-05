// 函数的兼容性分为参数和返回值：
// 1. 参数的兼容性
export { }
type Func = (a: number, b: number) => void
// 声明一个sum变量，类型是Func
let sum: Func;

// 参数相同时兼容的
// 声明一个参数和上边类型一样的函数fn1
function fn1(a: number, b: number): void { }
// 可以将fn1赋值给sum变量，是兼容的
sum = fn1;

// 参数多了是不兼容的
function fn2(a: number, b: number, c: number) { }
// 不能将类型“(a: number, b: number, c: number) => void”分配给类型“Func”
// sum = fn2;

// 参数少了
function fn3(a: number) { }
sum = fn3
// 或者没有参数
function fn4() { }
sum = fn4


// 比较返回值：
type Func1 = () => { name: string, age: number }

let fn5: Func1;

// 返回值一致兼容
function fx(){
    return {name:'zf', age:11}

}
fn5 = fx;

//返回值多了兼容
function fx1(){
    return {name:'zf', age:11, sex:1}
}

fn5 = fx1

//返回值少了不兼容
function fx2(){
    return {name:'zf'}
}
//不能将类型“() => { name: string; }”分配给类型“Func1”。
//类型 "{ name: string; }" 中缺少属性 "age"，但类型 "{ name: string; age: number; }" 中需要该属性。
//fn5 = fx2