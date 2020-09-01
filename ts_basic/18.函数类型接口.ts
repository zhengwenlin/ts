export { }
interface Type {
    (name: string, age: number): void;
}

let t1: Type = function (name: string, age: number): void {
    console.log(name)
    console.log(age)
}

namespace uu {
    interface Type1 {
        (name: string, age: number): void;
        age: number
    }
    let t1: any = (name: string, age: number): void => { }
    t1.age = 11
    let t2: Type1 = t1
}