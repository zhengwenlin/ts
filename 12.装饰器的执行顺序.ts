//装饰器的执行顺序
namespace f {
    function ClassDecorator1(){
        return function(target: any){
            console.log('ClassDecorator1');
        }
    }
    function ClassDecorator2() {
        return function (target: any) {
            console.log('ClassDecorator2');
        }
    }
    function PropertyDecorator(name:string) {
        return function (target: any,propertyName: any) {
            console.log('PropertyDecorator', propertyName, name);
        }
    }
    function MethodDecorator() {
        return function (target: any, propertyName: any) {
            console.log('MethodDecorator', propertyName);
        }
    }
    function ParameterDecorator() {
        return function (target: any, methodName: any,index: any) {
            console.log('ParameterDecorator', methodName, index);
        }
    }
  @ClassDecorator1()
  @ClassDecorator2()  
  class Person{
      @PropertyDecorator('name')
      name:string = '';
      @PropertyDecorator('age')
      age:number=10;
      @MethodDecorator()
      hello(@ParameterDecorator() p1:string, @ParameterDecorator() p2:string){}
  }
}
/*
    PropertyDecorator name name // 属性装饰器
    PropertyDecorator age age  // 属性装饰器
    ParameterDecorator hello 1  // 参数装饰器
    ParameterDecorator hello 0  // 参数装饰器
    MethodDecorator hello  // 方法装饰器
    ClassDecorator2 // 类装饰器
    ClassDecorator1 // 类装饰器
*/
/**
 * 执行顺序的规律
 * 1.类装饰器是最后执行的,后写的类装饰器先执行
 * 2.方法和就去参数中的装饰器先执行参数
 * 3. 就去和属性装饰器,谁在前面先执行谁
 * 
 * 一般人内往外执行 先内后外
 * 类比React组件的componentDidMount 先上后下 先内后外
 * 一定要学会知识的
 * koa 中间件 redux中间件
 * 
 */