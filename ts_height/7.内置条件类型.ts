export { }
// Exclude 排除
// 从 T 可分配给的类型中排除 U
// 核心还是条件的分发
// 搞清楚执行的流程
type Exclude<T, U extends T> = T extends U ? never : T
type X = Exclude<string | number, number>


// Extract 提取
// 从 T 可分配的类型中提取 U
type Extract<T, U extends T> = T extends U ? T : never
type Y = Extract<string | number, number>


// NonNullable 排除null和undefined
type NonNullable<T> = T extends null | undefined ? never : T;
type NoNullType = NonNullable<string | number | null | undefined>


// ReturnType 获取函数返回值的类型

type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any
type Fn = () => number
type ReturnGetType = ReturnType<Fn>


//Parameters 
//获取一个函数的参数组成的元组的类型
type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
type Fn1 = (a: string, b: number) => any
// GetParamsTupleType = [string, number]
type GetParamsTupleType = Parameters<Fn1>



// InstanceType
// 获取构造函数类型的实例类型

class Person{
    name?:string;
    getName!:()=>void;
}
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any
type M = InstanceType<typeof Person>