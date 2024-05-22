// Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array 
// atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan 
// dengan tiga titik (...). Mari kita
const favorite = [ "seafood","salad","nuget","soup"];
const others =["cake","Pie","donat"];

// const allFavorite= [favorite,others];

const allFavorite= [...favorite,...others];

console.log(allFavorite)

console.log(...favorite)

// console yang di atas sama seperti penulisan code yang di bawah ini
console.log(favorite[0], favorite[1], favorite[2], favorite[3]);

const obj1 = {firstName: 'joshua wahyu', age: 30};
const obj2 = {lastName: 'novianto', gender: "L"};

const  newobj ={...obj1, ...obj2};

console.log(newobj);