// 命名空间 namspace
// 代码量大的时候，避免命名冲突
// 通过export导出变量给外部使用
// 命名空间是内部模块，主要用于组织代码，避免命名冲突

export namespace zoo{
    export class Dog {
        eat(){
            console.log('zoo 狗');
        }
    }
}
// 通过命名空间名称.内部导出的变量名来使用命名空间的中的变量
let zooDog = new zoo.Dog()
zooDog.eat()