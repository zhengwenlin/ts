export { }

// 泛型接口
// 定义接口的名字后边使用<>定义泛型
interface Type<T> {
    (a: T, b: T): T
}
let t1: Type<number> = function (a: number, b: number): number {
    return a + b;
}
//在接口内部属性中定义泛型
interface Type1 {
    <T>(a: T, b: T): T
}
let t2: Type1 = function <T>(a: T, b: T): T {
    // return a + b;
    return a;
}


//泛型可以有多个
interface Type3<T, U> {
    (a: T, b: T): U
}
let t3: Type3<string, number> = function (a: string, b: string): number {
    return (a + b).length
}

function swap<A, B>(tuple: [A, B]): [B, A] {
    return [tuple[1], tuple[0]]
}


// 默认泛型
interface Type4<T = number> {
    (a: T, b: T): T
}
// 使用接口定义的类型的时候就不用传具体的类型了，默认是number类型
let t4: Type4 = function (a, b) {
    return a
}