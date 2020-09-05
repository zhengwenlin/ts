//any 我们可以对any进行任何操作,而不需要检查类型
let value: any;
value = true;
value = 1;
value = [];

value.foo()
value.length;

// unknown
let value1: unknown;
value1 = true;
value1 = 1;
value1 = [];

//unknown类型调用方法和属性会报错
//对象的类型为 "unknown"
// value1.foo()
// value1.length;

//如何让unknown类型可以调用方法？
//1.使用断言
(value1 as string).length;
(value1 as { foo: () => void }).foo();

//2.typeof 类型保护
value1 = ''
if (typeof value1 === 'string') {
    //value1: string
    console.log(value1.length);

}