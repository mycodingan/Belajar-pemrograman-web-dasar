const profilee = {
    firstName: "jsohua",
    lastName: "wahyu",
    age: 17
}

let firstName = "Dimas";
let age = 20;
({ firstName, age } = profilee);

console.log(firstName);
console.log(age);


// Destructuring Object
// Penulisan sintaksis destructuring object
//  pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);


const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);


const favorite = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorite;
 
console.log(myFood);
console.log(herFood);

/* output:
Seafood
Salad
Nugget
Soup
*/
var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);