function introduce(name: string, age?: number): void {
    console.log(name, age);
}

function multiply(a: number, b: number = 2): number {
    return a * b;
}

introduce("Hasan");
introduce("Ali", 20);

console.log(multiply(5));