// 1. Buatlah class bernama Animal dengan properti name, age, isMammal
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// 2. Buatlah class bernama Rabbit yang merupakan turunan dari class Animal
class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);  // isMammal selalu bernilai true
    }

    eat() {
        return `${this.name} sedang makan!`;
    }
}

// 3. Buatlah class bernama Eagle yang merupakan turunan dari class Animal
class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false);  // isMammal selalu bernilai false
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

// 4. Buatlah instance dari class Rabbit bernama "myRabbit"
const myRabbit = new Rabbit("Labi", 2);

// 5. Buatlah instance dari class Eagle bernama "myEagle"
const myEagle = new Eagle("Elo", 4);

// Contoh penggunaan
console.log(myRabbit.eat());  // Output: "Labi sedang makan!"
console.log(myEagle.fly());   // Output: "Elo sedang terbang!"