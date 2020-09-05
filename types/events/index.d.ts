type Listener = (...args:any[]) => void
type Type = string | symbol
export class EventEmitter {
    on(type: Type, listener: Listener): this;
    emit(type: Type, args: string): boolean;
    once(type: Type, listener: Listener): this;
}