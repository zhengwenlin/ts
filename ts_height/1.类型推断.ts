export { }
//从右向左
//变量定义的时候推断类型
//a: number
let a = 100
//b: any
let b;

// 底部流出
// 根据return的值推断返回值的类型
function add(a: number, b: number) {
    return a + b
}
// result: number
let result = add(1, 2)


// 从左到右
type Sum = (a: number, b: number) => number

let sum: Sum = function (a, b) {
    return a + b
}
let r1 = sum(1, 2)


//结构化
//推断规则也适用于结构化的存在(对象字面量)
let obj = {
    name: 'zf',
    age: 11
}
//name: string
let name = obj.name;
//age: number
let age = obj.age
//不能将类型“"hello"”分配给类型“number”
// age = 'hello'

namespace lm {

    //解构
    let person = {
        name: 'zf',
        age: 11
    }
    //name: string
    //age: number
    let { name, age } = person
}


//DefaultProps
//组件的默认属性
type DefaultProps = {
    name?: string
    age?: number
}
let defaultProps: DefaultProps = {
    name: 'zf',
    age: 11
}

//组件的属性 =  默认属性 +  属性
let props = {
    ...defaultProps,
    home: 'beijing'
}
/*
type Props = {
    home: string;
    name?: string | undefined;
    age?: number | undefined;
}
*/
type Props = typeof props


//小心使用返回值
//尽管Ts能够推断出函数返回值的类型，但是它可能不是你想要的
//因为a的类型是any，所以返回值的类型也是any
function addOne(a: any) {
    return a + 1;
}
function sumx(a: number, b: number) {
    //使用addOne后，返回值的类型变成了any，和预期的number不一样
    return a + addOne(b)
}
//resultx: any
let resultx = sumx(1, 3)