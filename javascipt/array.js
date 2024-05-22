let myArray = ["cokelat", 42.5, 22, true, "programing"];
console.log(myArray);

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])
console.log(myArray[4])
console.log(myArray[5])
console.log("panjang nilai array adalah " + myArray.length + ".");

const myArrayy = ["cokelat", 42.5, 22, true, "programing"];

// menambah data paling depan
myArrayy.push('Joshua ganteng');
console.log(myArrayy);

// menghilangkan data paling belakang
myArrayy.pop();
console.log(myArrayy)

// Metode shift() digunakan untuk mengeluarkan
//  elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.

myArrayy.shift();
myArrayy.unshift("apel");
//  menghapus data dari array? Sama seperti object, kita bisa menggunakan keyword delete.
// delete myArrayy[1];

console.log(myArrayy);

myArrayy.splice(2,1);


const month = ['januari','march','april','may'];
console.log('before splice:', month);

month.splice(1,0,'febuari');
console.log('after splice:', month);