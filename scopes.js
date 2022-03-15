//scopes 
// variable scope 
var variableScope =5;
console.log(variableScope,"variableScope");

// block level scopes 
let blockScope = 10;
console.log(blockScope,"blockscope");

//const 
const _MAX_NUM = 10000;
console.log("xonst value",_MAX_NUM);

//Changing the values of varaibles 

variableScope = "test@hijdk";
console.log(variableScope," changed variableScope value");

blockScope = "difpeif";
console.log(blockScope,"changed blockscope value");

// _MAX_NUM = "huhdkj";
// console.log(_MAX_NUM,"changed const value");

// Const values --- how it can be changed 
// const as an array 

const _ARR = [1,2,3,4];
console.log("initial  const array",_ARR);

//changing const array value 

_ARR.push("fdfkjd");
console.log("pushing array value to const",_ARR);

//objects in const 
const _PERSON_DETAILS = {
    name:"tomey",
    age:12
}
console.log("object constant",_PERSON_DETAILS);

// Appending values tp const 
_PERSON_DETAILS.city = "chennai";
console.log("changed person details",_PERSON_DETAILS);

// Lexical scoping 
// Accessing variables defined outside the function 

var a = 4;
function sum(){
    var b = 2;
    return a + b;
}
console.log(sum(),"lexical scoping");

// Trying with block scope 
let a1 = 43;
function sum1(){
    var b = 2; // local variable
    return a1 + b;
}
console.log(sum1(),"lexical scoping");

// variables declaring inside function without defining 
function globalFnScope(){
    fName = "tommy";
    return fName;
}

console.log(globalFnScope(),"flobalfunction scope name");

// Js closures 



// Difference between closures and lexical scoping 