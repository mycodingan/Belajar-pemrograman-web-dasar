// let PI = 3.14;

// const hitungLuasLingkaran = (jarijari) =>{
//     return PI * (jarijari * jarijari);

// }
// console.log(hitungLuasLingkaran(6));

//output 113.04

const hitungLuasLingkaran = (jarijari) =>{
    return 3.14 * (jarijari* jarijari);
}

console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(6));
console.log(hitungLuasLingkaran(12));
console.log(hitungLuasLingkaran(8));
// output 50.24
// output 113.04
// output 452.16
// output 200.96


const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });
  
  /**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
  names,
  newNames,
});