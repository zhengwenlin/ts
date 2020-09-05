// tuple转union
// [string, number]  ->  string | number
// 将元祖类型转换成联合类型
// 这里的<infer E>推断的是数组中元素的类型，是一个联合类型 string|number
// 所以E就是string|number
type ElementOf<T> = T extends Array<infer E> ? E : never
type TupleType = [string, number]
// string | number
type ElementTypes = ElementOf<TupleType>


// 数组中元素的类型是 string | number
let arr: Array<string | number> = ['1', 2]



// 如何将联合类型转成交叉类型
// string | number -> string & number
namespace yr {
  type T1 = { name: string }
  type T2 = { age: number }

  type ToIntersection<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never;
  type T3 = ToIntersection<{ a: (x: T1) => void, b: (x: T2) => void }>
}