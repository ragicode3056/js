<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object OFS</title>
</head>
<body>
    <script type="text/javascript">
        let arr = ["s", "f", 1]
        console.log(arr)
        let person = [{
            fisrtName: "Tausif",
            lastName: "Sheikh",
            age: 27,
            hobbies: [
                "Listing", "Cricket", "Coding"
            ],
            fullName :{
               firstName : "xyz",
                lastName: "Sheikh"
            },
            fullNamefunction : function () {
                return this.fisrtName + " " +  this.lastName 
            }
        }];

        person.age = 28;
        console.log(person.age)
        console.log(person);
        console.log(person.hobbies[1]);
        console.log(person.fullName.firstName)
        console.log(person.fullNamefunction());
    //    const p1=  person.map((item, index) => (
    //        return item.fisrtName
    //     ))

// Other Important Cases 
// Two variables, two distinct objects with the same properties
const fruit = {name: 'apple'};
const fruitbear = {name: 'apple'};

fruit == fruitbear; // false 
fruit === fruitbear;

console.log(fruit == fruitbear);
console.log(fruit === fruitbear);

//Two variables, a single object
const fruit = {name: 'apple'};
const fruitbear = fruit;  // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear;
fruit === fruitbear; 
console.log(fruit == fruitbear);
fruit.name = 'grape';
console.log(fruitbear); 

    </script>
</body>
</html>
