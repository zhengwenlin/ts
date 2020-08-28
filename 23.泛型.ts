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

let a: string[] = createArray<string>(6, 'a')
console.log(a);

// 类数组 arguments
function sum(a: any, b: any, c: any): void {
    let args: IArguments = arguments;
    for (let key in args) {
        console.log(args[key] + '===');

    }
}
sum(1, 2, 3)
// 泛型类
// 泛型类使用 <> 括起泛型类型，跟在类名后面。

class MyArray<T>{
    private list: T[] = []
    add(value: T): void {
        this.list.push(value)
    }
    getMax(): T {
        return this.list[0]
    }

}

let m1: MyArray<number> = new MyArray<number>()
m1.add(3)
m1.add(2)
m1.add(1)
console.log(m1.getMax());


// 泛型于new
// 构造函数的返回值类型是构造函数的实例类型
function factory<T>(type: { new(): T }): T {
    return new type()
}

class Animal {

}
let a1:Animal = factory<Animal>(Animal)


