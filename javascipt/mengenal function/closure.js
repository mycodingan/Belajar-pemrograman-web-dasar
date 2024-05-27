function init() {
    const name = 'Joshua';   // Variabel lokal di dalam scope fungsi init

    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}
init();

let counter = 0;

const add = () => {
    let counter =0 ;
    return () => {
    return ++counter;
    }
}
const addCounter = add();

console.log(add());
console.log(add());
counter = 23;
console.log(add());

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());