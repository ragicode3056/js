// create an object
let obj = {
    name : "Ragini",
    age : 25,
    tech : "JS",
    frnds : ['nithi','vaishu','nirai'],
    namePriint : ()=>{
        return obj.name + obj.age
    }
}

// console.log(obj.namePriint());

// object copy 
let obj2 = obj;
// console.log(obj2);

for(x in obj){
    console.log(obj[x]);
}

console.log(obj.name);