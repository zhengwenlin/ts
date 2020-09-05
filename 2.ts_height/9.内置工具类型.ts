export { }
// 为了更好的操作ts类型系统，有了内置工具类型
// Partial 类型递归  Required  Readonly Pick Record

// Partial
type T1 = {
  name: string,
  age: number
}
// 批量定义
// ?表示可选
// keyof T 得到就是T的key组成的字面量联合类型 'name'|'age'
type Partial<T> = {
  [key in keyof T]?: T[key]
}
type T2 = Partial<T1>


// 类型递归 DeepPartial

namespace xxx {
  type T1 = {
    name: string,
    age: number
    hobby: {
      a: string
      b: number
    }
  }
  type DeepPartial<T> = {
    [key in keyof T]?: T[key] extends object ? DeepPartial<T[key]> : T[key]
  }
  type T2 = DeepPartial<T1>
  let t2: T2 = {
    name: 'zf',
    age: 11,
    hobby: {
      // a 和 b属性都可以不给，都是可选的
    }
  }
}


// Required 将属性批量定义成必选
// -? 修饰符表示变成必选
type Required<T> = {
  [key in keyof T]-?: T[key]
}

interface Type6 {
  name?: string
  age?: number
}
/**
 type T66 = {
    name: string;
    age: number;
  }
 */
type T66 = Required<Type6>



// Readonly 
// 将传入的属性批量定义成只读
namespace po {
  interface Type6 {
    name?: string
    age?: number
  }
  type Readonly<T> = {
    readonly [key in keyof T]: T[key]
  }
  /**
   * type T6 = {
        readonly name?: string | undefined;
        readonly age?: number | undefined;
     }
   */
  type T6 = Readonly<Type6>
}