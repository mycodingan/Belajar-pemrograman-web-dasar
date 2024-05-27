function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
}

// Create an instance of the Car object
const myCar = new Car('Toyota', 'Red', 200, 'ABC123');

// Call the methods on the instance
myCar.drive();
myCar.reverse();
myCar.turn();

// Log the instance to the console
console.log(myCar);
