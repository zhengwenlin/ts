export { }

//自定义类型保护

type Cat = {
    swing: number
}
type Bird = {
    leg: number //2个腿
}
//如果没有共同的字段名作为判断的依据，可以用自定义类型
function isBird(x: Cat | Bird): x is Bird {
    return (x as Bird).leg == 2
}
function getAnimal(x: Cat | Bird) {
    if (isBird(x)) {
        console.log(x);
    } else {
        console.log(x);
    }
}