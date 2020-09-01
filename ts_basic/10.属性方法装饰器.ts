export { }
// 属性装饰器
// 装饰属性
// 装饰方法
namespace m1 {
    //如果装饰的是实例属性，
    //参数是有target（target是构造函数的原型），propertyKey（属性的key值）
    function toUppercase(target: any, propertyKey: string) {
        let value = target[propertyKey]
        let getter = () => value
        let setter = (newVal: any) => value = (newVal as string).toUpperCase()
        if (delete target[propertyKey]) {
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter,
                configurable: true,
                enumerable: true
            })
        }
    }
    //如果装饰的是静态属性，target是构造函数本身，propertyKey是属性的key值
    function stringToDouble(target: any, propertyKey: string) {
        let value = target[propertyKey]
        target[propertyKey] = value + value;
    }
    // 修饰的是实例方法，target是构造函数的原型，propertyKey是方法名，descriptor是属性描述符
    function toNumber(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let oldMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            args = args.map(item => parseFloat(item))
            return oldMethod.apply(this, args)
        }
    }
    class Person {
        @toUppercase
        name: string = 'zhufeng'
        @stringToDouble
        static staticName: string = 'staticName'
        @toNumber
        sum(...args: any[]): number {
            return args.reduce((prev, current) => prev + current, 0)
        }
    }
    let p = new Person()
    console.log(p.name);
    console.log(Person.staticName);
    console.log(p.sum(1, 2, 3))
    console.log(p.sum('1', '2', '3'))

}
