const newArray = ['Joshua', 'imanuel', 'jeff', 'yasus'].map((name)=> {return  `${name}!`})
console.log(newArray)
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray)