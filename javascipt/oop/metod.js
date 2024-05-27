// class Car {
//     constructor(brand, color, maxSpeed, chassisNumber) {
//       this.brand = brand;
//       this.color = color;
//       this.maxSpeed = maxSpeed;
//       this.chassisNumber = chassisNumber;
//     }
//    }

//    const car1 = new Car('BMW', 'red', 200, 'b-1');
//    const car2 = new Car('Audi', 'blue', 220, 'a-1');
//    const car3 = new Car('BMW', 'black', 250, 'b-2');

//    console.log(car1);
//    console.log(car2);
//    console.log(car3);


class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
}

const car = new Car('BMW', 'red', 200);
car.chassisNumber = 'BMW-1';

console.log(car);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-1' }
*/

// class Carr {
//     constructor(brand, color, maxSpeed) {
//         this.brand = brand;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
//     }
// }

// const car = new Carr('BMW', 'red', 200);
// car.chassisNumber = 'BMW-1';

// console.log(car);