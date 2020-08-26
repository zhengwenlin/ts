export { }

abstract class Person {
    //定义抽象方法
    name!: string;
    abstract speak(msg: string): void
}

class Cat extends Person{
    speak(msg: string = '喵喵喵'): void {
        console.log(msg)
    }
    
}
let c = new Cat()
c.speak() // 喵喵喵