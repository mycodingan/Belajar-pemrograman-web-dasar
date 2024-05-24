console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
// Ketika menulis program komputer,
// akan ada situasi di mana kita perlu
//  melakukan hal yang sama berkali-kali. Misalnya
//  kita ingin menampilkan semua nama
//   pengguna yang terdaftar di aplikasi
//    atau sesederhana menampilkan angka 1 sampai 10. 

for(let i = 0; i < 5; i++){
    console.log(i)
}


// For of loop
// Cara lain dalam melakukan looping adalah menggunakan for..of.
//  For of mulai hadir pada ECMAScript 2015 (ES6). Cara ini jauh lebih sederhana dan modern dibanding for loop biasa. Sintaks dasar dari for of loop adalah seperti ini:

// for(arrayItem of myArray) {
//   // do something
// }
// Yup, for of tidak membutuhkan banyak statement untuk melakukan 
// looping pada array. Penjelasan tentang array akan lebih detail dibahas
//  pada modul berikutnya. Sebagai permulaan, kita bisa menganggap array 
//  sebagai kumpulan nilai yang disimpan dalam satu variabel.

// Dengan for..of nilai tiap array akan diinisialisasi pada variabel baru
//  yang kita tentukan pada tiap proses looping-nya. Jumlah proses looping-nya pun akan menyesuaikan
//   dengan ukuran dari array. Sederhananya seperti kita melakukan perintah
//   _ “Hei JavaScript! Lakukan perulangan pada myArray, akses tiap nilainya, dan 
//   simpan pada variabel arrayItem”. Pada proses looping kita gunakan variabel
//    arrayItem untuk mengakses tiap nilai dari item myArray.
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];
for(const arrayItem of myArray){
    console.log(arrayItem)
}

let i =1;
while (i <= 100){
    console.log(i);
    i++;
}


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
