const priceInJPY = 5000;

// Membuat Map dengan pasangan key-value sesuai kriteria
const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500]
]);

// Menghitung nilai priceInIDR berdasarkan harga dalam JPY
const priceInIDR = priceInJPY * currency.get("JPY");
const priceUsd= priceInJPY / currency.get("SGD");

console.log(priceInIDR); // Output: 655000
console.log(priceUsd)

/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */
const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result);