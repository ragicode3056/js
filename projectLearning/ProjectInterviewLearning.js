// How JS Works
let a = 10;
setTimeout(()=>{
    console.log("inside timeout");
},100)

console.log(a,"a");

// Scopes 

let a1 = 10;
console.log(a1);
var g = 30;
function scopeChk () {
    let b = 20;
    let globalScope = 20;
   
}
//  console.log(b,"b");
console.log(g,"g");

//dynamic cohersion 
a1 = "guhfjkf";
console.log(a1,"dynamic");

const _NAME = "Ragi";
// _NAME = "nivi";
//console.log(_NAME);

const _ARR = [1,2,3];
_ARR.push(33);
console.log(_ARR,"arr");

// Lexical scoping 
let lex = 20;
function lexscp () {
    let b = lex * 2;
}

// nullish 
let anull=undefined;
let t = anull ?? "hello";
console.log(t,"null");

let obj = {
    name:"ragi",
    age:5
}
console.log(obj,"pbj");
obj = "test";
console.log(obj,"str");


let sArr = [1,2,3,4,5];
console.log(...sArr,"spread");

let objS = {
    name :"jjosko",
    age:2
}
console.log({...objS},"obj");

let [a11,b111,...rest] = sArr;
console.log(rest);