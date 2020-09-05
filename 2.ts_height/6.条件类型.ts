// 自定义条件类型
interface Fish {
    name1: string
}
interface Water {
    name2: string
}
interface Bird {
    name3: string
}
interface Sky {
    name4: string
}

type Condition<T> = T extends Fish ? Water : Sky;

type Condition1 = Condition<Fish>
type Condition2 = Condition<Bird>


// 条件类型的分发

namespace mi {
    interface Fish {
        name1: string
    }
    interface Water {
        name2: string
    }
    interface Bird {
        name3: string
    }
    interface Sky {
        name4: string
    }

    type Condition<T> = T extends Fish ? Water: Sky;
    // Condition1 = Water | Sky
    type Condition1 = Condition<Fish | Bird>
    // 如果传入的联合类型，并且T泛型是裸类型，会进行条件的分发
    // 先将Fish传入，得到Water，在将Bird传入，得到Sky，最后联合起来就是 Water | Sky
}