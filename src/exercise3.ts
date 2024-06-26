function quicksort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];
    const left = array.filter(num => num < pivot);
    const middle = array.filter(num => num === pivot);
    const right = array.filter(num => num > pivot);

    return [...quicksort(left), ...middle, ...quicksort(right)];
}

function mergesort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = mergesort(array.slice(0, mid));
    const right = mergesort(array.slice(mid));

    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000));

const quicksortStart = performance.now();
const quicksortedArray = quicksort([...array]);
const quicksortEnd = performance.now();
console.log(`Quicksort execution time: ${quicksortEnd - quicksortStart} ms`);

const mergesortStart = performance.now();
const mergesortedArray = mergesort([...array]);
const mergesortEnd = performance.now();
console.log(`Mergesort execution time: ${mergesortEnd - mergesortStart} ms`);
