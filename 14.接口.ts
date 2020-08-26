export {}

// 接口：1.描述对象的形状 2.表示行为的抽象

// 1. 描述对象的形状
interface Person{
    name:string
    speak():void
}

let obj: Person = {
    name: 'zf',
    speak(){
        console.log('hello')
    }
}
obj.speak()