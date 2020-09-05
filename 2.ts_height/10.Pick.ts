export { }
// Pick
// 从传入的属性中挑选出某一个返回
interface T1 {
    name: string
    age: number
    gender:number
}
/**
 * From T, pick a set of properties whose keys are in the union K
 */
//U必须是T属性key的联合类型的子类型
type Pick<T, U extends keyof T> = {
    // 批量定义U的key，值是从T类型中取对应的类型
    [key in U]: T[key]
}
/**
 * T2 = {
     name: string;
     age: number;
   }
 */
type T2 = Pick<T1, 'name' | 'age'>