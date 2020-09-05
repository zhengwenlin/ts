// 定义了一个类型Func
// 这个类型接收一个泛型T，泛型约束，T是any[]的子类型，还有一个R泛型
// Func类型是一个函数，接收剩余参数a，类型是T类型，返回值是R类型
type Func<T extends any[], R> = (...a: T) => R

// 在TypeScript中，函数的重载指的是给同一个函数提供**多个函数类型定义**
// 下边都是compose函数的重载

/* zero functions */
// 如果没有参数，compose函数的返回值是一个函数，接收泛型R，接收R,返回值R
export default function compose(): <R>(a: R) => R

/* one functions */
// 参数是一个函数，接收泛型F，约束F是Function的子类型，参数是F，返回值F
export default function compose<F extends Function>(f: F): F

/* two functions */
// 参数是两个函数，接收三个泛型A和T和R，约束T的类型是any类型的[]数组,
// 函数的参数有两个f1和f2，f1的类型是函数，参数a的类型是A，返回值R
// type Func<T extends any[], R> = (...a: T) => R
// 参数2类型是Func类型，传入两个类型，一个T，一个A，相当于 (...a: T):A
// 返回值：(...a: T):R
export default function compose<A, T extends any[], R>(
  f1: (a: A) => R,
  f2: Func<T, A>
): Func<T, R>

/* three functions */
export default function compose<A, B, T extends any[], R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func<T, A>
): Func<T, R>

/* four functions */
export default function compose<A, B, C, T extends any[], R>(
  f1: (c: C) => R,
  f2: (b: B) => C,
  f3: (a: A) => B,
  f4: Func<T, A>
): Func<T, R>

/* rest */
export default function compose<R>(
  f1: (a: any) => R,
  ...funcs: Function[]
): (...args: any[]) => R

export default function compose<R>(...funcs: Function[]): (...args: any[]) => R

export default function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return <T>(arg: T) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}
