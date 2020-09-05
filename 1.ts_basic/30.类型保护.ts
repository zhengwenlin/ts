export {}
//什么是类型保护
//类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型

//typeof
//通过typeof判断变量a的类型信息，在对应的作用域里确保变量的类型
function double(a:string|number){
    if(typeof a === 'string'){
        //a: string
        console.log(a);
    }else{
        // a: number
        console.log(a);
    }
}


// instanceof
class Animal{}
class Dog extends Animal{}
class Cat extends Animal{}

function getName(animal:Animal){
    if(animal instanceof Dog){
        //animal: Dog
        console.log(animal);    
    }else if(animal instanceof Cat){
        //animal: Cat
        console.log(animal);    
    }
}


// null 保护
function getFirstChart(s:string | null){
    //第一种方法：判断为null的情况,这时候，后边的s的类型s: string
    if(s == null){
        return ''
    }

    //第二种方法：给s付默认值
    s = s || ''

    //第三种，强行断言非空
    return s![0]

    //注意，将判断放到方法中是识别不了的
    function mk(){
        if(s == null){
            return ''
        }

        s = s || ''
    }
    mk()
    // 直接return是不行的，对象可能为 "null"
    // return s[0]
}



