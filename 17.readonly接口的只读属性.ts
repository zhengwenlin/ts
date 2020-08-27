export {}

interface Type {
    name: string
    readonly age:number
}

let t: Type = {
    name: 'zf',
    age:11
}

//修改只读的属性会报错
//无法分配到 "age" ，因为它是只读属性
// t.age = 100
