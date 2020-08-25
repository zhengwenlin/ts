export { }
// 继承： 可以继承父类的一切属性和方法（包括静态属性和方法）
class Father {
    public name: string; // 私有属性
    static age: number = 10 // 静态属性
    constructor(name: string) {
        this.name = name
    }
    // 私有方法
    getName(): void {
        console.log(this.name);

    }
    // 静态方法
    static getAge(): void {
        console.log(this.age)
    }
}

class Child extends Father {
    constructor(name: string, public x: any) {
        super(name)
    }
}

let child = new Father('piqiu')
child.getName() // piqiu
Child.getAge() // 10
console.log(Child.age); // 10
console.log(child.name); // piqiu
