export { }
//链判断运算符
// let a = {b:2}
// let result = a?.b;
// // a===null?undefined:a.b;
// console.log(result);
// let x = 'b';
// a?.[x];
// a?.b();
// a?.[x]()

// 可辨识的联合类型

// 就是相同的属性，值不一样，就可以区分出类型

type SuccessButton = {
    type: 'success',
    text: '成功'
}

type WaningButton = {
    type: 'warning',
    text: '警告'
}

type Button = SuccessButton | WaningButton

function getBtn(button: Button) {
    if (button.type === 'success') {
        //button: SuccessButton
        console.log(button);

    }
    if (button.type === 'warning') {
        //button: WaningButton
        console.log(button);
    }
}


//in 操作符
namespace llx{
    // 通过in操作符，key in 类型变量，
    // 可以判断这个key属性是否属于这个类型
    type Person = {
        study:Function
    }
    type Dog = {
        speak:()=>void
    }
    function getAnimal(x: Person | Dog){
        if('study' in x){
            //x: Person
            console.log(x);   
        }else{
            //x: Dog
            console.log(x);
        }
    }
}