function multiply(numbers) {
    return numbers.reduce((acc, curr) => acc * curr);
}

console.log(multiply([1, 2, 3, 4, 5]));
