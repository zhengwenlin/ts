export { }
// 类接口
// 使用接口约束类
// 接口的写法和约束对象的写法一样
interface Speakable {
    speak(info: string): void
    name: string
}
class Person implements Speakable {
    speak(info: string): void {
        console.log(info)
    }
    name!: string;

}