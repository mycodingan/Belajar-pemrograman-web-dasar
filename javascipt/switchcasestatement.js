// Sebelumnya kita telah mempelajari bagaimana percabangan logika menggunakan if statement. Selain if, JavaScript juga mendukung switch statement untuk melakukan pengecekan banyak kondisi
// Tanda kurung setelah keyword
//  switch berisi variabel atau 
//  expression yang akan dievaluasi.
//   Kemudian untuk setiap kondisi yang 
//   mungkin terjadi, kita masukkan keyword 
//   case diikuti dengan nilai yang valid. Jika 
//   kondisi pada case sama dengan variabel pada 
//   switch, maka blok kode setelah titik dua (:)
//    akan dijalankan. Keyword break digunakan untuk 
//    keluar dari proses switch. Terdapat satu case bernama 
//    default yang memiliki fungsi yang sama dengan keyword 
//    else pada control flow if-else. Jika tidak ada nilai 
//    yang sama dengan variabel pada 
// switch, maka blok kode ini akan dijalankan.

let language = "English";
let greeting = null;

switch (language) {
  case "English":
    greeting = "Good Morning!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimasu!";
    break;
  default:
    greeting = "Selamat Pagi!";
}

console.log(greeting);

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(day);