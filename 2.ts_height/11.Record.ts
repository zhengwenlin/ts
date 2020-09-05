export { }
//他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型
type Record<T extends keyof any, U> = {
    // 第一个泛型是限制属性的key，
    // 第二个泛型是属性对应的类型的值
    [key in T]: U
}
// 把K属性名的类型设置为T类型
// type T2 = Record<'name'|'age'|'gender', boolean>
// type T2 = Record<number, boolean>
type T2 = Record<string | number, boolean>
let c: T2 = {
    1: true,
    2: true
}

namespace bb {
    // key of any 得到的类型
    // type T1 = string | number | symbol
    type T1 = keyof any

    /**
     * type T4 = {
            [x: string]: number;
            [x: number]: number;
        }
     */
    //如果key in 后边是类型的联合类型，得到的就是属性(key)的类型为联合类型的一种的任意属性
    type T4 = { [key in string | number]: number }
    /**
     * type T5 = {
        name: number;
        age: number;
        gender: number;
    }
     */
    // 如果key in 后边是字面量类型的联合类型，得到的就是属性为联合类型的一种的任意属性
    type T5 = { [key in 'name' | 'age' | 'gender']: number }
}


// 映射对象的方法
// 传入三个泛型：K是属性key的类型 
function mapObject<K extends string | number, T, U>(obj: Record<K, T>, map: (s: T) => U): Record<K, U> {
    let result = <Record<K, U>>{}
    for (let key in obj) {
        result[key] = map(obj[key])
    }
    return result
}
let obj = { name: 'zf', age: '11' }
// type M = Record<string|number, typeof obj>
mapObject<string | number, string, number>(obj, (s: string) => s.length)



type Point = 'x' | 'y';
type Point1 = string | number;
type PointList = Record<Point, { value: number }>
const cars: PointList = {
    x: { value: 10 },
    y: { value: 20 },
}
