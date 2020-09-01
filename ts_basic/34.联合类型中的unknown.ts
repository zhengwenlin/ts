export { }
// 联合类型中，不管unknown和哪个类型去 |，都是unknown类型
type U1 = unknown | undefined //unknown
type U2 = unknown | string //unknown
type U3 = unknown | number //unknown
type U4 = unknown | never //unknown


//交叉类型中的unknown
namespace ppop {
    type U1 = unknown & undefined //undefined
    type U2 = unknown & string //string
    type U3 = unknown & number //number
    type U4 = unknown & never //never
}

// never是unknown的子类型 
let a!: never;
let b!: unknown;
b = a;
// 不能将类型“unknown”分配给类型“never”。
// a = b

//type IsNever = true，返回的类型为true，说明never是unknown的子类型 
type IsNever = never extends unknown ? true : false

//keyof unknown 等于 never
//type Keys = never
type Keys = keyof unknown


// 
let aaa!: unknown
let bbb!: unknown
console.log(aaa === bbb); //true
console.log(aaa !== bbb); //false
//不能进行其他操作
console.log(aaa + bbb); //如果有一个不是unknown，可以相加：值为NaN


type getType<T> = {
    [P in keyof T]: number
}
//type t = {}
type t = getType<unknown>;


