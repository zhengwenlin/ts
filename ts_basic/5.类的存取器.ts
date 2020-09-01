// 类的存取器

export { }
class Person {
    // username!: string;
    constructor(public username: string) {
        // this.username = username;
    }
    get name() {
        return this.username;
    }
    set name(val) {
        this.username = val
    }
}

let p1 = new Person('zhangsan')
console.log(p1.name)
p1.name = 'zhufeng'
console.log(p1.name)


// readonly

class Person1 {
    public readonly name: string = 'zf';
    getName(): void {
        console.log(this.name)
    }
}
let p2: Person1 = new Person1()
p2.getName()
// 不能被修改
// 无法分配到 "name" ，因为它是只读属性。
// p2.name = 'newName'