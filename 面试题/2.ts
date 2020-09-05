export {}
type T1 = {delay: 'One', setMessage: 'Two'}
// "delay" | "setMessage"
type T2 = keyof T1
// T3 = "One" | "Two"
type T3 = T1[T2]

// 相当于：
// "One" | "Two"
type T4 = {delay: 'One', setMessage: 'Two'}["delay" | "setMessage"]
