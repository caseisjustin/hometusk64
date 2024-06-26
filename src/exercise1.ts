function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

let a = 1;
let b = 2;
[a, b] = swap(a, b);
console.log(`a: ${a}, b: ${b}`);

let x = "hello";
let y = "world";
[x, y] = swap(x, y);
console.log(`x: ${x}, y: ${y}`);