
interface Action<T> {
    payload?: T;
    type: string;
}
interface Promise<T> {
    then<TResult1 = T, TResult2 = never>(
        onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) |
            undefined |
            null,
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) |
            undefined | null
    ): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}
// EffectModule是一个类，值可能有两种类型的签名(同步方法和异步方法)
// asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>
// syncMethod<T, U>(action: Action<T>): Action<U>
class EffectModule {
    // 这个对象上还可能有一些任意的非函数属性：
    // count和message是任意非函数属性
    count = 1;
    message = "hello!";
    // 异步方法
    delay(input: Promise<number>) {
        return input.then(i => ({
            payload: `hello ${i}!`,
            type: 'delay'
        }));
    }
    // 同步方法
    setMessage(action: Action<Date>) {
        return {
            payload: action.payload!.getMilliseconds(),
            type: "set-message"
        };
    }
}

// connect函数，他接受EffectModule实例，将它变成里一个对象，这个对象上
// 只有EffectModule同名方法，但是方法的类型签名改变了
// 就是说：通过connect方法，EffectModule实例对象变成了符合下边要求的对象：
// 1. 没有非函数属性
// 2. 函数只有同名的方法，并且方法的类型变了



// const connected: Connected = connect(effectModule)


/**
 * 思路：
 * - 是一个类型转换题目：
 *    - 将原来类的类型转换成Connected类型
 */

// 原来类的类型：
// type OldEffectModuleTypes = {
//     count: number
//     message: string
//     delay(input: Promise<number>): Promise<Action<string>>
//     setMessage(action: Action<Date>): Action<number>
// }

// 转换后的类型
// type Connected = {
//     delay(input: number): Action<string>
//     setMessage(action: Date): Action<number>
// }
/**
 * 异步：
 * asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>  变成了
   asyncMethod<T, U>(input: T): Action<U> 
 */
/**
 * 同步：
 * syncMethod<T, U>(action: Action<T>): Action<U>  变成了
   syncMethod<T, U>(action: T): Action<U>
 */
// 调用connect方法后，返回对象的类型

const effectModule: EffectModule = new EffectModule()
// 先将非函数属性过滤掉
// []表示取属性的类型，[联合类型]取值，得到的也是联合类型
type MethodsPick<T> = {
    [key in keyof T]: T[key] extends Function ? key : never
}[keyof T]
//"delay" | "setMessage"
type OldEffectModuleFunctionTypes = MethodsPick<EffectModule>

// 定义四个类型，两个老的，两个新的
type asyncMethodType<T, U> = (input: Promise<T>) => Promise<Action<U>>
type asyncMethodTypeConnect<T, U> = (input: T) => Action<U>
type syncMethodType<T, U> = (action: Action<T>) => Action<U>
type syncMethodTypeConnect<T, U> = (action: T) => Action<U>
// 转换方法
// 修改 Connect 的类型，让 connected 的类型变成预期的类型
type EffectModuleTransMethodType<T> = T extends asyncMethodType<infer K, infer U> ?
    asyncMethodTypeConnect<K, U> :
    T extends syncMethodType<infer K, infer U> ?
    syncMethodTypeConnect<K, U> : never
// 最终的Connect类型   
type Connect = (module: EffectModule) => {
    [key in OldEffectModuleFunctionTypes]: EffectModuleTransMethodType<EffectModule[key]>
};
const connect: Connect = m => ({
    delay: (input: number) => ({
        type: 'delay',
        payload: `hello 2`
    }),
    setMessage: (input: Date) => ({
        type: "set-message",
        payload: input.getMilliseconds()
    })
});
type Connected = {
    [key in OldEffectModuleFunctionTypes]: EffectModuleTransMethodType<EffectModule[key]>
}
export const connected: Connected = connect(new EffectModule());

// []表示取出子类型，[]中放一个联合类型，得到的也是一个key对应值的联合类型
// type TTTT = {
//     name:'delay',
//     age:'xxx'
// }['name' | 'age']