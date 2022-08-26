let name1= {
    fName : "Ragini",
   
}
let printNameFn = function (age, skill){
    console.log(this.fName + age + skill );
}

let name2 = {
    fName : "Nvi"
}

printNameFn.call(name1,"23", "JS");
printNameFn.call(name2, "34" , "CSS");
printNameFn.apply(name2,["2","Java"]);

let bindPrintFn = printNameFn.bind(name1,45,"HTML");
bindPrintFn();

