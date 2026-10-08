function display(value: string): string;
function display(value: number): string;

function display(value: string | number): string {
    return String(value);
}

console.log(display("Hello"));
console.log(display(100));