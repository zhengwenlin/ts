export { }
// 类的修饰符: public protected private
// 1. public
namespace a {
    class Father {
        public uname: string  //public 自己 自己的子类 和其它类都能访问
        protected age: number //protected 自己和自己子类能访问,其它类不能访问
        private money: number //private 自己能访问,子类和其它类不能访问
        constructor(uname: string, age: number, money: number) {
            this.uname = uname;
            this.age = age;
            this.money = money
        }
        getName(): void {
            console.log(this.uname)
        }
        getMoney() {
            // 在类里边访问私有属性可以 
            console.log(this.money);

        }
    }
    class Child extends Father {
        constructor(uname: string, age: number, money: number) {
            super(uname, age, money)
        }
        getFatherMoney() {
            // 在子类中不能访问父类的私有属性
            // 属性“money”为私有属性，只能在类“Father”中访问。
            // console.log(this.money);   
        }

        getFatherAge() {
            // 访问父类的受保护的属性是可以访问的
            console.log(this.age);

        }

    }
    let father = new Father('zhufeng', 11, 1);
    // 在类外边访问父类的私有属性，报错 
    // 属性“money”为私有属性，只能在类“Father”中访问
    // father.money
    let c = new Child('zhufeng', 11, 1);
    console.log(c.uname);
    c.getName()
    // 在类外边访问父类的受保护属性，报错
    // 属性“age”受保护，只能在类“Father”及其子类中访问
    // console.log(c.age);

    // public 公有的属性可以在类外边访问
    console.log(c.uname);

}