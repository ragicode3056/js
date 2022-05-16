//  spread operator -- itrtratable values = > list of values 
let a = [1,2,3,4,5];
// copy an array
let b = [...a];
// Max of array
console.log(Math.max(a));
console.log(Math.max(...a));

console.log(b);

// normal array copying 
let a1 = [1,2];
let b1 = a1;
console.log(b1);

// concat of array 
let as= [1,2,4];
let bs = ['s','f','s'];

let ds = [...as]+ [...bs];
console.log(ds);


// sprread operator as arguments 
let arr = [1,2,3,4];

//  arr values split and add 10 to it 

const sumArr = (a,b,c,d) =>{
    a = a*10;
    b = b*10;
    c = c*10;
    d = d*10;
    return a,b,c,d;
}
console.log(sumArr(...arr));
// Spread operator in js 
 let obj1 = {
     name: "ragi",
     age:20
 }
 let obj2 = {
     married :"single"
 }
 let obj3 = { ...obj1,...obj2};
 console.log(obj3);
 console.log({...obj1});


let city = ['q','w','e','f'];
console.log(city);
for ( c of city){
    console.log(c);
}
for( a in city){
    console.log(a);
}

// Rest operator 
let a44 = [1,2,3,4,5,6];
let [a5555,b5555,...rest] = a44;
console.log(rest);

console.log(Symbol("heelo"));
let s = Symbol("dksfrdgjko");
console.log(s);

let f = '3';
console.log(-f);

// 2 pow 3 
console.log(Math.pow(2,3));

console.log(3**4);

const d = new Date();
