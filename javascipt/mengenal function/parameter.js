const user = {
    id: 24,
    displayName: 'joshua',
    fullName: 'master coding',
};

function awal({displayName,fullName}){
console.log(`${displayName} is ${fullName}`);
}

awal(user);

// Default Parameters
function exponentsFormula(baseNumber, exponent) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
  
  exponentsFormula(2);
  
  function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5));