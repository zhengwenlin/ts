// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，
// 而在使用的时候再指定类型的一种特性
// 泛型T作用域只限于函数内部使用

// 泛型使用的对象： 函数、 接口、 类


// 1. 泛型函数

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
        result.push(value)
    }
    return result;
}

let a = createArray<string>(6, 'a')
console.log(a);

// 类数组 arguments
function add(a: any, b: any, c: any) {
    let args: IArguments = arguments;
    for (let key in args) {
        console.log(args[key]);

    }
}
add(1, 2, 3)


// 泛型类
// 泛型类使用 <> 括起泛型类型，跟在类名后面。

// class GenericNumber<U>{
//     public initial: U;
//     constructor(initial: U) {
//         this.initial = initial;
//     }
//     add(x: U, y: U): U {
//         return (x + y) as U;
//     }
// }
// <T> 是定义泛型，后边T是使用泛型
class GenericNumber1<T>{
    state: T;
    constructor(state: T) {
        this.state = state;
    }

    getState(): T {
        return this.state
    }
}
let g1 = new GenericNumber1<number>(100)
console.log(g1.getState());


// 泛型类于new
function factory<T>(type: { new(): T }): T {
    return new type()
}


// 泛型接口
// 定义泛型，就相当于在这个接口中，多了一种可以使用的类型
// 但是这种类型不确定，使用接口的时候才能确定，好像是函数的参数
// 1. 泛型的定义在接口后边
interface X1<T> {
    (firstName: T, lastName: T): T
}

let x1: X1<string> = function (firstName: string, lastName: string): string {
    return firstName + lastName
}
console.log(x1('zhufeng', 'peixun'));
//2.泛型的定义在函数前边
interface X2 {
    <T>(a: T, b: T): T
}
let x2: X2 = function <T>(a: T, b: T): T {
    return a
}
console.log(x2<number>(1, 2));


