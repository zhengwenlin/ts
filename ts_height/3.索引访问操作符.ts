export {}
//就是通过[]访问一个类型的子类型
type Type = {
    name:string,
    age:number,
    job: {
        name:string
    }
}
//获取Type的属性job的name的类型
//JobName = string
type JobName = Type['job']['name']
let jobname:JobName = '前端'