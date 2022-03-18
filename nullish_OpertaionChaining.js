// nullish -operator 
// nullish values - null and undefined 
//  if 2 nulllish values are there then it will take values

// let a  = 0 ?? 5;


// let a = null ?? 3;

// let a = undefined ?? 4;


// let a = null ?? undefined;

let a = null ?? undefined ?? 3;

console.log(a);

// operation chaining 
// ?.

let arr = [1,2,3,4,5];
console.log(1 in arr,"dd");


console.log(5?.arr);
console.log(1?.arr);

let obj = {name:"ram"}
console.log(obj?.name);
console.log(obj?.test);


