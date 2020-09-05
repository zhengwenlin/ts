export { }
type A = string;
type B = number;
type IntersectionType = A & B;
// c: never
let c: IntersectionType

type Type1 = { name: string, age: number }
type Type2 = { name: number, home: string }

type TypeIntersections = Type1 & Type2
// 不能将类型“string”分配给类型“never”。
// Type1中的name属性是string，Type2中的name属性是number
// 如果交叉类型的两个类型中有相同的属性，但是属性的类型不同，会取两个属性类型的交叉类型
// string & number 返回的类型是never
// let t1: TypeIntersections = {name:'1', age: 11, home: 'beijing'}


// 联合类型的交叉类型
type Type3 = string | number;
type Type4 = number | boolean;
type UnitType = Type3 & Type4;
// let unitType: number
let unitType: UnitType;


// mixin混入模式可以让你从两个对象中创建一个新对象，新对象会拥有着两个对象所有的功能
// 两个对象的类型可以看做是两个接口定义的类型 T  U
function mixin<T, U>(obj1: T, obj2: U) {
    //将result强转成T和U的交叉类型
    //因为两个都是对象，交叉后类型的属性变多
    let result = <T & U>{}
    for (let key in obj1) {
        //将result强转成T类型，不然无法赋值
        (<T>result)[key] = obj1[key]
    }
    /**
     * 不能将类型“U”分配给类型“T & U”。
       不能将类型“U”分配给类型“T”。
       “T”可以使用与“U”无关的任意类型进行实例化。
     */
    for (let key in obj2) {
        //将result强转成U类型，不然无法赋值
        (<U>result)[key] = obj2[key]
    }
    return result;
}
const x = mixin<{ name: string }, { age: number }>({ name: "zhufeng" }, { age: 11 });
console.log(x.name, x.age);//zhufeng 11


//强制转换一个值的类型
namespace cc {
    /*
        Ts默认推断类型为
        {name: string;}
    */
    //强制转换后的类型：obj: object
    let obj = <object>{ name: 'zhufeng' }
    let c = <any>100
}


//typof 获取一个变量的类型
let obj = {name:'zf'}
/*
    {
        name: string;
    }
*/
type P = typeof obj;