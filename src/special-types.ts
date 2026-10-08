let first: any = 10;
first = "Hello";

let second: unknown = "TypeScript";

function greet(): void {
    console.log("Hello World");
}

function throwError(): never {
    throw new Error("Something went wrong");
}

greet();
console.log(second);