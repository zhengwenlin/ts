export { }

// 接口：1.描述对象的形状 2.表示行为的抽象

// 1. 描述对象的形状
interface Person {
    name: string
    age?: number
}

let p: Person = {
    name: 'zf',
    age: 10
}
console.log(p)

// 表示行为的抽象
// 1. 接口约束函数
interface Fnlimit {
    (name: string, age?: number): void;
}

//2.接口约束函数和接口描述对象，对象中有函数的区别：
// 约束函数，但是函数有一个age属性 funtion  function.age = number
interface Type1 {
    (name: string): void
    age: number
}
let t: any = (name: string) => { }
t.age = 10
let t1: Type1 = t
// 约束对象，对象中有函数
interface Type2 {
    add(a: number, b: number): number;
    age: number
}
let xxxx: Type2 = {
    add(a: number, b: number): number {
        return a + b
    },
    age: 10
}
// 或者
interface Type3 {
    add: (a: number, b: number) => number
}
let xxxx1: Type3 = {
    add(a: number, b: number): number {
        return a + b
    }
}
namespace mm {
    //表示函数，函数有一个age属性： function  funtion.age
    interface Type1 {
        (name: string): any
        age: number
    }
    // 表示对象 {a:function}
    interface Type2 {
        a: (name: string) => any
    }
    interface Type3 {
        a(name: string): any
    }
    let t: any = (name: string) => { };
    t.age = 10;
    let t1: Type1 = t

    let t2: Type2 = {
        a: t1
    }

}


// 同名的接口可以有多个，类型会自动和并
// 如果同名的接口中存在相同的属性的类型不一样，会报错
// 后续属性声明必须属于同一类型。属性“name”的类型必须为“string”，但此处却为类型“boolean”。
// 同名接口相同属性的类型必须一样
namespace pq1 {
    interface Type {
        name: string,
        age: number
    }
    interface Type {
        // name: boolean,
        age: number,
        sex: number
    }
    // 合并有有三个属性：name,age,sex
    let t: Type = {
        name: 'zf',
        age: 11,
        sex: 1
    }
}

// 一个类可以实现多个接口
// 一个类只能继承一个类
namespace pq2 {
    interface Type1 {
        eat(): void;
    }
    interface Type2 {
        say(): void
    }
    // 一个类可以实现多个接口
    class Person implements Type1, Type2 {
        eat(): void {
            
        }
        say(): void {
            
        }

    }
}