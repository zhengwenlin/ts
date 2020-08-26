export { }
namespace xx2 {
    //target 静态成员就是构造函数 非静态成员就是构造函数原型 方法的名称 参数的索引
    function addAge(target:any, methodName:string, paramIndex:number) {
        console.log(target)
        console.log(methodName) // login
        console.log(paramIndex) //1
        target.age = 18
    }
    class Person {
        age!: number;
        login(username: string, @addAge password: string) {
            console.log(this.age, username, password);
        }
    }
    let p = new Person()
    console.log(p.age);
    
}