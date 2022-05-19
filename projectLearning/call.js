let name1 = {
    fname : "Ragini",
    lname : "Nisha"
}
let printFullName = function (place,country) {
    console.log(this.fname + this.lname +" " + "from " + place + " ," + country);
}

let name2 = {
    fname : "Niva",
    lname : "Jay"
}



printFullName.call(name1,"chennai","India");
printFullName.apply(name2,["Delhi","India"]);


//bind 
let printName = printFullName.bind()