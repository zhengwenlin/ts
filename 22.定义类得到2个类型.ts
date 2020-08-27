export {}
// 定义一个类，得到两个类型

class Compoent {
    static myName:string = '类的静态属性'
    myName:string = '类的实例属性'
}
// 构造函数本身是值，也是类型
//1. 作为类型，构造函数是类的实例的类型
let com:Compoent = new Compoent;

//2. 作为值，构造函数是函数，也有自己的类型
//可以通过typeof获取构造函数的类型（通过值获取值的类型）
type ConsType = typeof Compoent;

let t: ConsType = Compoent