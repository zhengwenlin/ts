export { }
interface Type1 {
    name: string
    age: number
}
type Type2 = {
    [key in keyof Type1]: Type1[key]
}