export {}
//keyof获取的是一个类型的key组成的字面量联合类型
interface Type{
    name:string
    age:number,
    sex:number
}
//TypeKeys = "name" | "age" | "sex"
type TypeKeys = keyof Type;