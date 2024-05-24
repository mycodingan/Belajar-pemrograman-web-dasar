const myMap = new Map([
    ['1', 'a string key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap)

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("Jakarta"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));


//   Namun, kode di atas bukanlah cara yang sesuai untuk mengoperasikan 
//   Map. Ketika kita menetapkan nilai map seperti di atas, data akan
//    disimpan sebagai generic object. Ini akan mengakibatkan data tidak 
//    tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti 
//    .has atau .delete.
const wrongMap = new Map();

wrongMap["My Key"] = "My Value";


console.log(wrongMap.has("My key"));
console.log(wrongMap.delete("My key"));

