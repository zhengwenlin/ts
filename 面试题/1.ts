import { expect } from "chai";

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

class EffectModule {
    count = 1;
    message = "hello!";

    delay(input: Promise<number>) {
        return input.then(i => ({
            payload: `hello ${i}!`,
            type: 'delay'
        }));
    }

    setMessage(action: Action<Date>) {
        return {
            payload: action.payload!.getMilliseconds(),
            type: "set-message"
        };
    }
}

// 修改 Connect 的类型，让 connected 的类型变成预期的类型
type Connect = (module: EffectModule) => any;

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
    delay(input: number): Action<string>;
    setMessage(action: Date): Action<number>;
};

export const connected: Connected = connect(new EffectModule());
