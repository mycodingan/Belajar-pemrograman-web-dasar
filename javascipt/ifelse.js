const isRaining =true;
console.log("Persiapan sebelum berangkat kegiatan");
if (isRaining){
    console.log("Hari ini hujan. bawa payung");
}else{
    console.log("pintar");
}
console.log("berangkat kegiatan");


let x = 5;

if( x > 70){
    console.log(x);
}else{
    console.log("nilai kurang dari 70");
}
// out put nilai kurang dari 70

let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);
//  out put bout=rjou

const isMember = false;
const discount= isMember ? 0.1 : 8;

console.log(`Anda mendapat diskon sebesar ${discount * 100}`)
/* output
Anda mendapatkan diskon sebesar 0%
 */

// Truthy & Falsy
// Di dalam if statement kita perlu memasukkan expression yang akan dievaluasi. Umumnya, expression tersebut mengembalikan nilai boolean untuk menentukan kondisi true atau false. Lalu bagaimana jika kita menuliskan expression yang tidak mengembalikan nilai boolean? Jawabannya bisa.

// Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy. Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false. Jadi manakah yang termasuk truthy dan falsy? Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:

// Number 0
// BigInt 0n
// String kosong seperti “” atau ‘’
// null
// undefined
// NaN, atau Not a Number

let name = "joshua wahyu";
// jika di dalam variabel name kosong maka iya akan mengeluarkan 
// nama masih kosong
if (name){
    console.log(`Hallo, ${name}`);
}else {
    console.log("nama masih kosong");
}

function scoreChecker(score) {
    let result;
  
    // TODO
    if (score >= 90) {
      result = 'Selamat! Anda mendapatkan nilai A.';
    } else if (score >= 80) {
      result = 'Anda mendapatkan nilai B.';
    } else if (score >= 70) {
      result = 'Anda mendapatkan nilai C.';
    } else if (score >= 60) {
      result = 'Anda mendapatkan nilai D.';
    } else {
      result = 'Anda mendapatkan nilai E.';
    }
  
    // Jangan hapus kode ini
    return result;
  }
  
  /**
   * Jangan hapus kode di bawah ini
   */
  module.exports = scoreChecker;
