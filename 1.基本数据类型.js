// 布尔类型
var flag = true;
// 数字类型 
var age = 19;
// 字符串类型
var username = 'lipiqiu';
// 数组类型
// 两种方式：
var array = [1, 2, 3];
var array1 = ['1', '2', '3'];
// 元组类型 tuple
// 在typescript中基础类型中，元组tuple表示一个已知数量和类型的数组
var zhufeng = ['zhufeng', 10];
var tup = [true, 'pqiu'];
// 枚举类型：enum
// 列举的意思，就是将一个变量的所有有可能的值都罗列出来，比如，颜色，学历，性别等
// 1. 普通枚举
var Sex;
(function (Sex) {
    Sex[Sex["GIRL"] = 0] = "GIRL";
    Sex[Sex["BOY"] = 1] = "BOY";
})(Sex || (Sex = {}));
console.log(0 /* RED */);
console.log(1 /* PINK */);
console.log(2 /* BLUE */);
