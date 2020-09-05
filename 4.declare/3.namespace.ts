// 类型声明中的namespace
// namespace在声明文件中（也就是和declare连用）有特殊的作用

// 1. 如果一个全局变量包含了很多子属性，就可以使用namespace
// 2. 在声明文件中的namespace表示一个全局变量包含很多子属性
// 3. 在命名空间内部不需要在使用declare来声明属性和方法
// 4. 在声明文件中的namespace中，方法和属性都是只需要定义，不需要实现
//    而普通的namespace中，方法和属性是需要去实现的

// declare定义一个命名空间，相当于定义了一个全局的变量，变量有很多子属性
declare namespace $1 {
    // 相当于全局变量$有一个属性ajax方法
    function ajax(path:string, settings:any):void;
    // 相当于全局变量$有一个属性name
    let name:string;
    // 有一个子命名空间
    namespace Child {
        //有一个继承的方法
       function extend():void;
    }
}
//调用方法和属性
$1.ajax('/user/list', {})
$1.name;
$1.Child.extend()

