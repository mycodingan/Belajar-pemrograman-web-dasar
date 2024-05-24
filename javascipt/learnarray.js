// Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array
let evenNumber = [];

// Menggunakan for loop untuk mengisi bilangan genap pada array
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  }
}

// Output array evenNumber
console.log(evenNumber);
