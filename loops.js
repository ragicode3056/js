//for loop 
console.log("for loop");
for(let i = 0;i<5;i++){
    console.log(i);
}


//while 
console.log("while loops");
let i = 0;
while( i<5 ){
    console.log(i);
    i++;
}


//do while 
console.log("do while");
let j = 0;
do{
    console.log(j);
    j++;
}while( j<5 )


// ternary operator ? : 

let age = 3;

let eligible = (age> 18) ? console.log("eligible") : console.log("not eligible");

// perform array operation 
let arr = [1,2,3,4,5];
let operation = 1



let performOperation = operation === 1 ? arr.forEach(addFn) : arr.forEach(minusFn);
function addFn(i){
    console.log(i+10);
}

function minusFn(i){
    console.log(i-10);
}

let perfomClaculation = operation == 1 ? console.log("add") : console.log("minus");

// function sumArray(i){
//     let sum = 0;
//     sum = sum+i;
//     // return sum;
//     console.log(sum);
// }

// arr.forEach(sumArray);

// Loops inside objects 

let 
 