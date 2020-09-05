export { }

// 传入一个T类型，返回一个T[]数组类型
type Type1<T extends { name: string, age: number }> = T[]
/**
 * type T2 = {
    name: string;
    age: number;
    sex: number;
   }[]
 */
type T2 = Type1<{ name: string, age: number, sex: number }>

let c: T2 = [{ name: 'zf', age: 1, sex: 1 }, { name: 'zf', age: 1, sex: 1 }]



type Type2<T, U> = (x: T) => U

let t3: Type2<string, number> = function (x: string): number {
    return 100
}