// //scopes 
// // variable scope 
// var variableScope =5;
// console.log(variableScope,"variableScope");

// // block level scopes 
// let blockScope = 10;
// console.log(blockScope,"blockscope");

// //const 
// const _MAX_NUM = 10000;
// console.log("const value",_MAX_NUM);

// //Changing the values of varaibles 
// // dynamic cohersion
// variableScope = "test@hijdk";
// console.log(variableScope," changed variableScope value");

// blockScope = "difpeif";
// console.log(blockScope,"changed blockscope value");

// // let a =7; -- memory will be allocated - int - 2 ; a= "test" ; 4 
// //const -- memory allocation 

// _MAX_NUM = "test";
// console.log(_MAX_NUM,"changed const value");

// // Const values --- how it can be changed 
// // const as an array 

// const _ARR = [1,2,3,4];
// // memory - _ARR - append -- refrence 
// console.log("initial  const array",_ARR);

// //changing const array value 

// _ARR.push("fdfkjd");
// console.log("pushing array value to const",_ARR);

// //objects in const 
// const _PERSON_DETAILS = {
//     name:"tomey",
//     age:12
// }
// console.log("object constant",_PERSON_DETAILS);

// // Appending values tp const 
// _PERSON_DETAILS.city = "chennai";
// console.log("changed person details",_PERSON_DETAILS);

// Lexical scoping 
// Accessing variables defined outside the function 

var a = 4;
function sum(){
    var b = 2;
    return a + b;
}

console.log(sum(),"lexical scoping");

// // Trying with block scope 
// let a1 = 43;
// function sum1(){
//     let b = 2; // local variable
//     return a1 + b;
// }
// console.log(sum1(),"lexical scoping");

// // variables declaring inside function without defining 
// function globalFnScope(){
//     fName = "tommy"; 
//     return fName;
// }

//  console.log(globalFnScope(),"flobalfunction scope name");

// // Js closures 

// outer fn 
//   inner fn 

// function print(){
//     let msg = "welcome";
//     function hello(){
//         return msg;
//     }
//     return hello();
// }
// console.log(print(),"calling closures");

// //Js closures in loops 
// const loops = () =>{
//     for(let i =0;i<3;i++){
//         let count = 0;
//         function increment(){
//             count ++;
//             function printIndex(){
//                 console.log(count,i,"closures in loop");
//             }
//             printIndex();
//         }
//     }
//     return increment();
// }

// console.log(loops(),"llops in closures ");
// // Difference between closures and lexical scoping 