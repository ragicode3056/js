let multiply = (x,y) =>{
    console.log(x*y);
}
multiply(2,3);

// event currying wth closures 

let multiplyClos = (x) =>{
     return function(y){
        console.log(x*y);
     }
}

multiplyClos(2)(7);

let areaOfTraingle = (l) =>{
    return function (b){
        return function (h){
            console.log(l*b*h);
        }
    }
}


areaOfTraingle(2)(3)(4);