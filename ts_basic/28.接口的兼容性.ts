export { }

// 接口的兼容性：你要的属性我都有，就兼容，你要的属性我没有，就不兼容

interface Animal {
    name: string
    age: number
}
interface Person {
    name: string
    age: number
    sex: number
}
let a: Animal = { name: 'zf', age: 11 }
let p: Person = { name: 'piqiu', age: 16, sex: 1 }
function getName(targe: Animal): string {
    return targe.name
}
// 这里getName参数的类型是Animal，
// 但是发现传入了Person类型的p对象也能兼容
getName(a)
getName(p)



// 基本类型的兼容性

let num: string | number
let str: string = 'zf'
num = str;


let num2: {
    toString(): void
}

let str2: string = 'zf2'
num2 = str2;
// 不能将类型“{ toString(): void; }”分配给类型“string”
// str2 = num2


// 类的兼容性
namespace pi {
    class Animal {
        name!: string
    }
    class Cat extends Animal {
        age!: number
    }
    let a: Animal;
    let b: Cat = new Cat;
    a = b
    //类型 "Animal" 中缺少属性 "age"，但类型 "Cat" 中需要该属性。
    //b = a
}