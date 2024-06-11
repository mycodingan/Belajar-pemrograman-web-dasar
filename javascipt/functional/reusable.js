

const newArray = ['Joshua', 'imanuel', 'jeff', 'yasus'].map((name)=> {return  `${name}!`})
console.log(newArray)
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray)

// Perhatikan kode berikut:

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}