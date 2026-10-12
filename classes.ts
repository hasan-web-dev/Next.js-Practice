class Car {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    display(): void {
        console.log(this.brand);
    }
}

const car = new Car("Toyota");
car.display();