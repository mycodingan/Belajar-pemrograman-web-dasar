let x = "hi";
console.log(typeof(x));
// output nya string

let y = 17.25;
console.log(typeof(y));

// output: number

let a = 12;
let b = 9;

console.log(a + b );
console.log(a-b);
console.log(a * b );
console.log(a/b);
console.log(a%b);
// Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
// Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.


let postfix = 5 ;
console.log(postfix++);
// output nya 5

console.log(postfix);
// output nya 6

let prefix =5;
console.log(++prefix);
// output nya 6

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);


let greet = "Hello";
console.log(typeof(greet));

const question = '"What do you think of JavaScript?" I asked';

console.log(question);

let greett = "Hello";
let moreGreet = greett + greet;
console.log(moreGreet);

const myName = "Luke";
console.log(`Hello, name is ${myName}`)

let k = true;
let l = false;

console.log(typeof(k))
console.log(typeof(l))

const p = 10;
const e =12;

let isGreater = a > b;
let isLess= a< b;

console.log(isGreater);
console.log(isLess);

let someLateData = null;

console.log(someLateData);

const idd =Symbol("id");
console.log(idd);

const id1 =Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);