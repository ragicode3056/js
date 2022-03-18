//if consition

let age = 78;
if( age > 18){
    console.log("u can vote")
}else{
    console.log("you cannot vote");
}

// else if 

let color = "red";
if(color == "red"){
    console.log("red color")
}else if (color == "blue"){
    console.log("yellow");
}else{
    console.log("pink");
}

//switch 
let fName = "tom";

switch (fName){
    case "tom": 
        console.log("welcome tom");
         break;
    case "john":
        console.log("welcome john");
         break;
    default :
        console.log("welcome everyone");

}

// continue statement -- skips one iteration in loop 
for (let i = 0;i<3;i++){
    if(i == 1){
        continue ;
    }
    console.log(i,"continue example");
}

// Break statement 
for(let i =0;i<3;i++){
    if(i ==1){
        break;
    }
    console.log(i,"break");
}

// == and ===
let val1 = 10;
let val2 = "10";

if(val1 == val2){
    console.log("equals");
}else{
    console.log("not equal");
}

if(val1 === val2){
    console.log("equals");
}else{
    console.log("not quals");
}

// ?? - Nullishing operator 

// it takes - right hand operand by default 
let s = "test" ?? "hello";
console.log(s,"nullish left ");
// it takes - left hand operand if right hand oprrand value is null or undefined 

let z;
let t = z ?? "hello nullish ";
console.log(t,"nullish right");


let f = null;
let d = f ?? "left side";
console.log(d,"nullish");

// Question
if(0){
    console.log("hello");
}