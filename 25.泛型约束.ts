export {}

//泛型约束
//在函数中使用泛型的时候，由于预先并不知道泛型的类型，
//所以不能随意访问相应类型的属性或方法。
interface Lengthwise {
    length:number
}
function logger<T extends Lengthwise>(msg:T){
    console.log(msg.length);
    
}