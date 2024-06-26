function assertString(input: any): void {
    if (typeof input !== 'string') {
        throw new Error('Input is not a string');
    }
}

try {
    assertString("hello");
    console.log("Input is a string");
} catch (e) {
    console.error(e.message);
}

try {
    assertString(123);
    console.log("Input is a string");
} catch (e) {
    console.error(e.message);
}