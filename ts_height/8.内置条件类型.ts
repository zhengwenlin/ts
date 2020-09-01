// tuple转union
// [string, number]  ->  string | number
// 将元祖类型转换成联合类型
type ElementOf<T> = T extends Array<infer E> ? E : never
type TupleType = [string,number]
// string | number
type ElementTypes = ElementOf<TupleType>