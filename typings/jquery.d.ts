// 定义jquery的类型声明文件
// 定义一个变量$ 是一个函数，函数的返回值是一个对象，有好多方法
declare const $: (selector:string) => {
    click:()=>void
    width:(length:string)=>void;
}