export { }
// 使用命名空间可以扩展类、函数、枚举

// 1. 扩展类：
class Form {
    username!: Form.Item;
    passworld!: Form.Item;
}
namespace Form {
    export class Item { }
}
let item: Form.Item = new Form.Item()
console.log(item);


// 2.使用命名空间扩展函数
function ajax():void{
    console.log('ajax');
    
}
namespace ajax{
    export let pathname = '/user/add'
}
console.log(ajax.pathname);


//3. 使用命名空间扩展枚举类型
enum Color{
    red,
    yellow,
    green
}
namespace Color{
    export const pink = 5
    export const skyblue = 6
}
console.log(Color);
/**
 * { '0': 'red',
  '1': 'yellow',
  '2': 'green',
  red: 0,
  yellow: 1,
  green: 2,
  pink: 5,
  skyblue: 6 }
 */



 // 扩展store
 import {createStore, Store}from 'redux'
 type StoreExt = Store & {
     ext: string
 }
 let store:StoreExt = createStore(store => store)
 // 给store扩展一个属性ext
 store.ext = '100'
 console.log((store.ext));


 type T2 = {
     name:string;
 }&{
     age:number;
 }
 /**
  * 不能将类型“{ name: string; }”分配给类型“T2”。
    类型 "{ name: string; }" 中缺少属性 "age"，但类型 "{ age: number; }" 中需要该属性
  */
// 使用交叉类型，值给一个name属性会报错，因为age属性没有给，但是上边扩展store的交叉ext属性
// 为什么不会报错呢？
//TODO
//  let t1types:T2 = {
//      name:'zf'
//  }