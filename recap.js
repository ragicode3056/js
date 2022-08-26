let b = 20;
function lexiScope() {
    let a = 10;
    console.log('b',b);
}
console.log('lex',(lexiScope()));

//  closures 

function parentFn(){
    let msg = "hello";
    function child(){
        console.log('msg',msg);
    }
    return child();
}
console.log('parent fn',parentFn());

let a = 5 ?? "";
console.log('a nullish',a);

let arr = [1,2,3,4,5];
let aa2 = 2?.arr;

console.log('arr',aa2);


let obj = {
    name : "",
    age : 20
}
console.log('obj name',obj?.name);
