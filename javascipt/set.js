
// Struktur data yang akan kita bahas berikutnya adalah Set. 
// Set sederhananya merupakan kumpulan nilai (set of values). 
// Hal yang membedakan Set dengan struktur 
// data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks.
const numberSet = new Set([1,4,6,4,1]);

console.log(numberSet);
/* output
Set(3) { 1, 4, 6 }
*/

// Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array 
// tersebut akan dianggap sebagai satu elemen sendiri. Nilai 
// yang duplikat akan diabaikan.
const numberSett = new Set([1,4,6,4,1]);
numberSett.add(5);
numberSett.add(10)
numberSett.add(6)
console.log(numberSett)
/* output
Set(5) { 1, 4, 6, 5, 10 }
*/


// Ingat bahwa Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam 
// fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
const numberSettt = new Set([1,4,6,4,1]);
numberSettt.add(5);
numberSettt.add(10)
numberSettt.add(6)

numberSettt.delete(4)
console.log(numberSettt)