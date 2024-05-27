function minimal(a, b) {
    // Jika a kurang dari b, kembalikan nilai a
    if (a < b) {
        return a;
        // Jika a sama dengan b, kembalikan nilai a
    } else if (a == b) {
        return a;
        // Jika a lebih besar dari b, kembalikan nilai b
    } else {
        return b;
    }
}

console.log(minimal(1, 1)); // Output: 1 (karena 1 sama dengan 1, jadi mengembalikan 1)
console.log(minimal(3, 2)); // Output: 2 (karena 3 lebih besar dari 2, jadi mengembalikan 2)
console.log(minimal(3, 3)); // Output: 3 (karena 3 sama dengan 3, jadi mengembalikan 3)


function findIndex(array, number) {
    if (array.indexOf(number)) {
        return array.indexOf(number);
    }
}

console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log(findIndex([1, 2, 3, 4, 5], 6));
console.log(findIndex([1, 2, 3, 4, 5], 5));

// function minimal(a, b) {
//     return (a < b) ? a : b;
// }
// function findIndex(array, number) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             return i;
//         }
//     }
//     return -1;
// }

// // Contoh penggunaan fungsi minimal
// console.log(minimal(1, 4)); // Output: 1
// console.log(minimal(3, 2)); // Output: 2
// console.log(minimal(3, 3)); // Output: 3

// // Contoh penggunaan fungsi findIndex
// console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2
// console.log(findIndex([1, 2, 3, 4, 5], 6)); // Output: -1
// console.log(findIndex([1, 2, 3, 4, 5], 5)); // Output: 4
function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);