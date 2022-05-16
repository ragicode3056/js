// Operators 
// Bitwise >> << >>>

//Asignment operators
// = , += , -= , *= , /=, %= , **= , ??= 

// let x = 5;
// x += 10; 
// console.log(x);  // 15
// x -= 10;
// console.log(x); // 5

// x = 0;
// x &&= 10;
// console.log(x);  // 0
// x = 0;
// x ||= 10;
// console.log(x);  // 10

// let C = {name: 'javascript'};
// C.name ??= 'js';
// C.version ??= 'es6';
// console.log(C.name);  //
// console.log(C.version); //

//new Number

// Arithmetic Operators 
// + , - , * , / , % , ++ , -- , **  (exponential)

// let A = 1;
// let B = 1;

// console.log(++A); // 2
// console.log(A); // 2

// console.log(B++); // 1  2
// console.log(B); // 2

// let aarr = [1, 'w', 3, 4, 5]
// for (let i = 0; i < aarr.length; i++) {
//     console.log(++aarr[i])
// }

// console.log(aarr++)
// console.log(aarr)

// console.log(2**3);  //
// console.log(Math.pow(2, 3));  //

// Precedence
// console.log(5+3*2);  //  11
// console.log((5+3)*2); // 16


//Comparison Operators
// ==   ===   >  <   !=   >=    <=

// let price = 5;
// let quantity = '5';

// console.log(price == quantity); // true 5 == '5'
// console.log(price != quantity); // true // 5 == '5' 
// console.log(price === quantity); // false 5 === '5'

// console.log(null == null); 
// console.log(null === null);
// console.log(undefined == undefined);
// console.log(undefined === undefined);
// console.log(null == undefined);
// console.log(NaN == NaN);


// let name1 = 'object';
// let name2 = 'object';

// name1 = parseInt(name1);
// name2 = parseInt(name2);
// console.log(name1);// NaN
// console.log(name2); // NaN
// console.log(name1 == name2);

// Logical Operator
// && || !

//  let price = 'name';

// console.log(5 && 0 && 'true' && true); // 0  && 
// console.log(5 || 0 || 'true' || true); // 5 ||

// console.log(!price); // false  ! 
// console.log(!!price); // true !!


// console.log(true == 'true');   // false
// console.log(true == !'true');  // false
// console.log(true == !!'true'); // true
// console.log(5 == '5');

// string operator +

// console.log('prabhu' + 'deva'); //
// console.log(1 + 2 + 3); // 6 
// console.log(+"1" + 2); // 3
// console.log(+("1" + 2)); // '12'   12



// ternary operator ? :

//  let statusValue = 'Live';
//  let label = statusValue == 'Live' && statusValue != null ? 'Online' : 'Offline';
// console.log(label)

// Unary Operator delete // typeof
// let bool = true;
// let A =2;
// let C= [1, 2];

// console.log(typeof A);
// console.log(typeof C);
// console.log(typeof label);
// console.log(typeof bool);

 //let C = {name: 'objectfrotier', version : 0}
// console.log(C);
// delete C[1];
// console.log(C);

// console.log(C.length)
// //In Operator
//console.log('name1' in C)


  // spread operator 

let arr =  [1, 2, 3, 4, 5, 6];
let arr1 =  ['prabhu', 'tausif', 'rgini', 'shankar', 'vicky'];
//  console.log(...arr[3]);
console.log(...arr1,"spread");

// rest operator

const [one, two, ...rest] = arr;
console.log(one);
console.log(two);
console.log(rest);

const { foo, bar, ...rest1 } = { foo: 1, bar: 2, a: 3, b: 4, c: 5 };
console.log(foo);
console.log(bar);
console.log(rest1);


// comma operator
for (var i = 0, j = 9; i <= j; i++, j--){

}



let value1 = 2, value2 = 4, result = 0;
sum(value1, value2, result);
console.log(result);

function sum(a, b, result) {
    result = a + b;
}


// scope
// function sum() {
//     let int1 = int2 = 2;
//     return int1+ int2;
// }

// sum();
// console.log(int2);
// console.log(int1);

// const length = 4;
// const numbers = [];
// var i;
// for (i = 0; i < length; i++);{
//     numbers.push(i + 1);
// }
// console.log(numbers);

// function arrayFromValue(item) {
//     return
//       [item];
//   }
//   console.log(arrayFromValue(10));




